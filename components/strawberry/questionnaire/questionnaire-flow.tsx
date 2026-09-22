"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import {
  wordsFor,
  stepsForOffer,
  type TerrainKey,
  type OfferKey,
  type Question,
} from "@/lib/questionnaire-data"
import type { Lang } from "@/lib/lang"
import { isBot, rateLimit, honeypotProps } from "@/lib/form-security"

/**
 * One-question-at-a-time onboarding interview for a purchased Audit or
 * Architecture. Replaces the old Tally embed.
 *
 * Design choices, deliberate:
 *  - Identity, competitor taglines and links are the only zero-effort
 *    factual fields; everything else that matters to the actual document is
 *    either a genuine narrative question or a forced choice — never a
 *    watered-down version of the narrative questions, because the raw voice
 *    IS the product (see the studio's own "impossible to generate" line).
 *  - Progress autosaves to localStorage keyed by offer + email, so a client
 *    can close the tab mid-interview and resume exactly where they left off
 *    — this is a 45-70 minute commitment for Architecture, not a five-minute
 *    form.
 *  - A few questions are marked `optional`: skippable without blocking
 *    progress, to manage fatigue on the back half of a long interview.
 */

type IdentityAnswers = { name: string; house: string; email: string }
type CompetitorRow = { name: string; line: string }
type LinksAnswers = { site: string; linkedin: string; content: string }
type WordbankAnswers = { mine: string[]; notmine: string[] }

interface Answers {
  identity: IdentityAnswers
  competitors: CompetitorRow[]
  links: LinksAnswers
  tone: Record<string, number>
  wordbank: WordbankAnswers
  [key: string]: unknown
}

function emptyAnswers(prefill?: Partial<IdentityAnswers>): Answers {
  return {
    identity: { name: prefill?.name ?? "", house: prefill?.house ?? "", email: prefill?.email ?? "" },
    competitors: [{ name: "", line: "" }, { name: "", line: "" }, { name: "", line: "" }],
    links: { site: "", linkedin: "", content: "" },
    tone: {},
    wordbank: { mine: [], notmine: [] },
  }
}

function isValid(step: Question, a: Answers): boolean {
  if (step.optional) return true
  switch (step.type) {
    case "identity":
      return !!(a.identity.name.trim() && a.identity.house.trim() && a.identity.email.trim())
    case "textarea":
    case "shorttext":
      return typeof a[step.id] === "string" && (a[step.id] as string).trim().length > 0
    case "competitors":
      return a.competitors.filter((c) => c.name.trim() && c.line.trim()).length >= 3
    case "links":
      return a.links.site.trim().length > 0
    case "choice":
      if (step.multi) return Array.isArray(a[step.id]) && (a[step.id] as string[]).length > 0
      return typeof a[step.id] === "string" && !!a[step.id]
    case "wordbank":
      return a.wordbank.mine.length + a.wordbank.notmine.length >= 3
    case "sliders":
      return true
    default:
      return true
  }
}

/** All chrome copy that isn't a question. Questions live in questionnaire-data. */
const UI_COPY = {
  fr: {
    kicker: "STRAWBERRY PRODUCTION · ONBOARDING",
    chapterOf: (n: number, t: number) => `Partie ${n} sur ${t}`,
    chapterCount: (n: number) => `${n} question${n > 1 ? "s" : ""}`,
    chapterFallback: "Quelques questions pour la suite du document.",
    chapterNotes: {
      Identité: "Les faits d'abord. Ce sont eux qu'un lecteur retiendra dans dix ans, quand personne ne se souviendra de votre campagne de cette année.",
      Diagnostic: "Ici, vous allez écrire des choses que vous n'avez jamais écrites nulle part. C'est normal — c'est exactement ce que vos concurrents n'ont pas fait.",
      Langage: "Les mots que vous choisissez maintenant, vos équipes les emploieront pendant des années. Prenez-les au sérieux, personne d'autre ne le fera à votre place.",
      Concurrence: "Vous allez regarder vos concurrents de plus près que vous ne l'avez jamais fait. La plupart des fondateurs ne le font jamais — c'est pour ça que la plupart se ressemblent.",
      Déploiement: "Presque fini. Ce que vous répondez ici décide de l'ordre dans lequel votre maison va changer.",
      Fondation: "C'est la partie difficile, et c'est celle qui vaut le prix. Ce que vous écrivez dans les cinq prochaines minutes tiendra la maison quand vous ne serez pas dans la pièce.",
    } as Record<string, string>,
    saved: "Enregistré",
    resumeKicker: "Vous aviez commencé",
    resumeLead: (n: number, t: number) => `Vos réponses sont là, vous étiez à la question ${n} sur ${t}.`,
    resumeCta: "Reprendre",
    houseOverline: "On va écrire",
    thresholdLead: "Vous venez de commander un document qui dira ce que votre maison refuse. Personne ne peut l'écrire à votre place — ni une agence, ni une machine, ni nous, tant que vous ne nous l'avez pas dit.",
    thresholdQuestion: "Êtes-vous prêt à écrire ce que vous refusez ?",
    thresholdCta: "Je suis prêt",
    bareNote: "Prenez le temps. Personne ne vous regarde.",
    signLabel: "Signez pour ouvrir le dossier",
    signPlaceholder: "Votre prénom",
    sign: "Signer et ouvrir le dossier",
    sealKicker: "C'est signé",
    sealTitle: (r: string) => `Le dossier ${r} est ouvert.`,
    sealDueLabel: "Document livré au plus tard le",
    sealLead: "Le dépouillement commence demain : vos supports, ceux de vos concurrents, vos avis. Vous n'entendrez plus parler de nous jusqu'au jour 15 — c'est voulu.",
    sealDownload: "Emporter votre première page ↓",

    mirrorPositioning: "C'est la phrase que nous allons tester, mot pour mot, contre celles de vos concurrents.",
    mirrorDeploy: "C'est ce refus qui décidera de l'ordre des mouvements. Dites-nous où il doit se voir en premier.",
    mirrorPortrait: "Ce moment-là deviendra le récit fondateur. Le portrait qui suit lui donnera sa voix.",


    piecesLabel: "Le document, pièce par pièce",
    quoteSource: "La Doctrine la plus claire",
    chapterQuotes: {
      Identité: "Ce que les gens croient de vous avant de vous avoir touché.",
      Fondation: "Une maison n'est plus ce qu'elle fabrique. Une maison est ce qu'elle refuse — et le marché n'a jamais rien lu plus clairement.",
      Diagnostic: "Rien, dans un marché, n'est expérimenté. Tout est interprété — et l'interprétation arrive avant vous.",
      Concurrence: "Sur un marché où tout le monde a accès à la même machine, le meilleur produit ne gagne plus. C'est la doctrine la plus claire qui gagne.",
      Langage: "Une doctrine est la chose sous les histoires — l'ensemble fixe de convictions qui rend chaque expression d'une maison reconnaissable, cohérente, et impossible à confondre avec celle de quiconque, quel que soit celui — ou ce — qui en a produit la surface.",
      Déploiement: "La perception est la structure de croyance qu'un marché tient sur une maison avant le contact, et qui détermine ce que chaque contact ultérieur a le droit de signifier.",
    } as Record<string, string>,

    halfway: (n: number) => `${n}. Vous êtes à la moitié. La plupart des gens qui commencent un exercice comme celui-ci s'arrêtent avant ce point.`,
    wordsWritten: "mots écrits de votre main",

    hello: (n: string) => `Bonjour ${n}.`,
    hourLate: "Vous écrivez tard — c'est souvent là que les vraies phrases sortent.",
    hourEarly: "Vous écrivez tôt. La tête est claire, profitez-en.",
    orderLabel: "Commande",
    orderHouse: "Maison",
    orderDue: "Livraison au plus tard",

    emptyAnswer: "Sans réponse — y répondre maintenant",
    minutesLeft: (n: number) => `≈ ${n} min restantes`,
    deferCta: "J'y reviens",
    deferred: (n: number) => `${n} question${n > 1 ? "s" : ""} mise${n > 1 ? "s" : ""} de côté`,
    leaveNote: "Vous pouvez fermer cet onglet : tout est gardé sur cet appareil, vous reprendrez où vous en êtes.",
    echoLabel: "Votre réponse précédente",
    coverTitle: "Vous venez de décider quelque chose.",
    terrainLabel: "Vous avez commandé l'Architecture pour",
    terrainHelp: "Le questionnaire s'adapte : certaines questions ne se posent pas de la même façon selon ce que vous vendez.",
    terrains: [
      { k: "marques", t: "Une marque ou une entreprise", d: "Vous vendez un produit ou un service" },
      { k: "produits", t: "Un produit", d: "Un objet, une application, une gamme" },
      { k: "lieux", t: "Un lieu", d: "Restaurant, bar, club, coffee shop" },
      { k: "artistes", t: "Un nom propre", d: "Artiste, auteur, fondateur" },
    ],
    coverLede:
      "La plupart des maisons de votre taille n'écriront jamais ce que vous vous apprêtez à écrire. Elles continueront d'emprunter les mots de leur secteur, et de se demander pourquoi on les compare au prix.\n\nCe qui suit est la seule partie que personne ne peut faire à votre place. Écrivez comme vous parleriez à quelqu'un qui comprend déjà. Il n'y a pas de mauvaises réponses — seulement des honnêtes et des malhonnêtes.",
    minutesArchitecture: "45 à 70",
    minutesAudit: "50 à 60",
    aboutMinutes: (m: string, n: number, optional: boolean) =>
      `Environ ${m} minutes · ${n} questions${optional ? " (quelques-unes facultatives)" : ""}`,
    resumeNote:
      "Vous pouvez fermer cet onglet à tout moment : tout est sauvegardé, vous reprendrez exactement où vous en étiez.",
    prefilled: "Déjà rempli pour vous",
    start: "Commencer →",
    previous: "Précédent",
    optional: "Facultatif",
    continue: "Continuer →",
    skip: "Passer",
    words: "mots",
    digDeeper: "+ Creuser plus loin (facultatif)",
    fieldName: "Nom",
    fieldHouse: "Nom de la maison",
    fieldEmail: "Email",
    phName: "Votre nom",
    phHouse: "Le nom de votre maison",
    phEmail: "vous@maison.com",
    competitorName: "Nom du concurrent",
    competitorLine: "Leur phrase, exacte",
    remove: "Retirer",
    addCompetitor: "+ Ajouter un concurrent",
    linkSite: "Site actuel",
    linkLinkedin: "LinkedIn du fondateur",
    linkContent: "Un contenu déjà publié (facultatif)",
    phContent: "Lien vers un post, un article, une vidéo",
    upToChoices: (n: number) => `Jusqu'à ${n} choix.`,
    myWords: "Ce sont mes mots",
    neverMyWords: "Ce ne sont jamais les miens",
    beforeSending: "Avant d'envoyer",
    recapKicker: "Vous y êtes",
    recapTitle: "Vous venez de faire ce que vos concurrents ne feront pas.",
    recapLead: "Une heure d'écriture honnête sur ce que vous refusez : la plupart des fondateurs ne s'y assoient jamais. Le reste nous regarde. Le dépouillement commence demain — vos supports, ceux de vos concurrents, vos avis — et vous n'êtes plus sollicité jusqu'au jour 15.",
    recapStats: [
      { v: "6", l: "pièces à écrire" },
      { v: "15", l: "jours avant le document" },
      { v: "2", l: "révisions incluses" },
    ],
    reviewTitle: "Relisez, puis envoyez.",
    reviewNote: "Rien n'est envoyé tant que vous n'avez pas confirmé.",
    edit: "Modifier",
    optionalSuffix: " (facultatif)",
    send: "Envoyer ✓",
    sending: "Envoi...",
    back: "Retour",
    rateLimited: "Une soumission a déjà été envoyée récemment. Réessayez dans un instant.",
    sendFailed: "L'envoi a échoué. Vérifiez votre connexion et réessayez — vos réponses restent sauvegardées.",
    doneKicker: "C'EST REÇU",
    doneTitle: "Le travail commence.",
    doneLede:
      "Vous n'entendrez pas de silence — vous n'entendrez rien jusqu'à ce que le travail soit prêt à être exceptionnel.",
    deeperLabel: "(Plus loin)",
    siteLabel: "Site",
    dash: "—",
  },
  en: {
    kicker: "STRAWBERRY PRODUCTION · ONBOARDING",
    chapterOf: (n: number, t: number) => `Part ${n} of ${t}`,
    chapterCount: (n: number) => `${n} question${n > 1 ? "s" : ""}`,
    chapterFallback: "A few questions for the rest of the document.",
    chapterNotes: {
      Identity: "Facts first. These are what a reader will remember in ten years, when nobody recalls this year's campaign.",
      Diagnosis: "Here you will write things you have never written anywhere. That is normal — it is exactly what your competitors have not done.",
      Language: "The words you choose now, your teams will use for years. Take them seriously; nobody else will do it for you.",
      Competition: "You are about to look at your competitors more closely than you ever have. Most founders never do — which is why most of them look alike.",
      Deployment: "Almost there. What you answer here decides the order in which your house will change.",
      Foundation: "This is the hard part, and it is the part that is worth the price. What you write in the next five minutes will hold the house when you are not in the room.",
    } as Record<string, string>,
    saved: "Saved",
    resumeKicker: "You had started",
    resumeLead: (n: number, t: number) => `Your answers are here, you were on question ${n} of ${t}.`,
    resumeCta: "Resume",
    houseOverline: "We are going to write",
    thresholdLead: "You have just commissioned a document that will state what your house refuses. Nobody can write it for you — not an agency, not a machine, not us, until you have told us.",
    thresholdQuestion: "Are you ready to write what you refuse?",
    thresholdCta: "I am ready",
    bareNote: "Take your time. Nobody is watching.",
    signLabel: "Sign to open the file",
    signPlaceholder: "Your first name",
    sign: "Sign and open the file",
    sealKicker: "Signed",
    sealTitle: (r: string) => `File ${r} is open.`,
    sealDueLabel: "Document delivered by",
    sealLead: "The reading starts tomorrow: your supports, your competitors', your reviews. You will not hear from us until day 15 — that is deliberate.",
    sealDownload: "Take your first page ↓",

    mirrorPositioning: "This is the sentence we will test, word for word, against your competitors'.",
    mirrorDeploy: "This refusal will decide the order of the moves. Tell us where it must show first.",
    mirrorPortrait: "That moment will become the origin story. The portrait below will give it a voice.",


    piecesLabel: "The document, piece by piece",
    quoteSource: "The Clearest Doctrine",
    chapterQuotes: {
      Identity: "What people believe about you before they have touched you.",
      Foundation: "A house is no longer what it makes. A house is what it refuses — and the market has never read anything more clearly.",
      Diagnosis: "Nothing in a market is experienced. Everything is interpreted — and the interpretation arrives before you do.",
      Competition: "In a market where everyone has the same machine, the best product no longer wins. The clearest doctrine wins.",
      Language: "A doctrine is the thing beneath the stories — the fixed set of convictions that makes every expression of a house recognisable, coherent, and impossible to confuse with anyone else's, whoever — or whatever — produced the surface.",
      Deployment: "Perception is the belief structure a market holds about a house before contact, and which determines what every later contact is allowed to mean.",
    } as Record<string, string>,

    halfway: (n: number) => `${n}. You are halfway. Most people who start an exercise like this one stop before this point.`,
    wordsWritten: "words written in your own hand",

    hello: (n: string) => `Hello ${n}.`,
    hourLate: "You are writing late — that is often when the real sentences come out.",
    hourEarly: "You are writing early. Clear head, make the most of it.",
    orderLabel: "Commission",
    orderHouse: "House",
    orderDue: "Delivered by",

    emptyAnswer: "No answer — answer it now",
    minutesLeft: (n: number) => `≈ ${n} min left`,
    deferCta: "Come back to it",
    deferred: (n: number) => `${n} question${n > 1 ? "s" : ""} set aside`,
    leaveNote: "You can close this tab: everything is kept on this device, you will pick up where you left off.",
    echoLabel: "Your previous answer",
    coverTitle: "You have just decided something.",
    terrainLabel: "You commissioned the Architecture for",
    terrainHelp: "The questionnaire adapts: some questions are not asked the same way depending on what you sell.",
    terrains: [
      { k: "marques", t: "A brand or a company", d: "You sell a product or a service" },
      { k: "produits", t: "A product", d: "An object, an app, a range" },
      { k: "lieux", t: "A venue", d: "Restaurant, bar, club, coffee shop" },
      { k: "artistes", t: "A name", d: "Artist, author, founder" },
    ],
    coverLede:
      "This is the foundation of your house. Take your time. Write the way you would speak to someone who already understands. There are no wrong answers — only honest ones and dishonest ones.",
    minutesArchitecture: "45 to 70",
    minutesAudit: "50 to 60",
    aboutMinutes: (m: string, n: number, optional: boolean) =>
      `About ${m} minutes · ${n} questions${optional ? " (a few are optional)" : ""}`,
    resumeNote:
      "You can close this tab at any time: everything is saved, and you will pick up exactly where you left off.",
    prefilled: "Already filled in for you",
    start: "Begin →",
    previous: "Previous",
    optional: "Optional",
    continue: "Continue →",
    skip: "Skip",
    words: "words",
    digDeeper: "+ Dig deeper (optional)",
    fieldName: "Name",
    fieldHouse: "Name of the house",
    fieldEmail: "Email",
    phName: "Your name",
    phHouse: "The name of your house",
    phEmail: "you@house.com",
    competitorName: "Competitor name",
    competitorLine: "Their sentence, exact",
    remove: "Remove",
    addCompetitor: "+ Add a competitor",
    linkSite: "Current website",
    linkLinkedin: "Founder's LinkedIn",
    linkContent: "Something you've published (optional)",
    phContent: "Link to a post, an article, a video",
    upToChoices: (n: number) => `Up to ${n} choices.`,
    myWords: "These are my words",
    neverMyWords: "These are never mine",
    beforeSending: "Before you send",
    recapKicker: "You are through",
    recapTitle: "You have just done what your competitors will not do.",
    recapLead: "An hour of honest writing about what you refuse: most founders never sit down to it. The rest is on us. The reading starts tomorrow — your supports, your competitors', your reviews — and you will not be contacted again until day 15.",
    recapStats: [
      { v: "6", l: "pieces to write" },
      { v: "15", l: "days to the document" },
      { v: "2", l: "revisions included" },
    ],
    reviewTitle: "Read it over, then send.",
    reviewNote: "Nothing is sent until you confirm.",
    edit: "Edit",
    optionalSuffix: " (optional)",
    send: "Send ✓",
    sending: "Sending...",
    back: "Back",
    rateLimited: "A submission was already sent recently. Try again in a moment.",
    sendFailed: "Sending failed. Check your connection and try again — your answers are still saved.",
    doneKicker: "RECEIVED",
    doneTitle: "The work begins.",
    doneLede:
      "You will not hear silence — you will hear nothing until the work is ready to be exceptional.",
    deeperLabel: "(Deeper)",
    siteLabel: "Site",
    dash: "—",
  },
}

/**
 * Widened on purpose: no `as const` here. With const assertions the FR strings
 * become literal types, and the EN block stops being assignable to Copy.
 */
type Copy = (typeof UI_COPY)["fr"]

function storageKey(offer: OfferKey, email: string, terrain?: TerrainKey) {
  // Le terrain entre dans la clé : deux parcours différents ne doivent pas
  // se réécrire l'un l'autre dans le stockage local.
  return `sp_questionnaire:${offer}:${terrain ?? "all"}:${email.trim().toLowerCase() || "anon"}`
}

export function QuestionnaireFlow({
  offer,
  terrain,
  lang,
  prefill,
}: {
  offer: OfferKey
  terrain?: TerrainKey
  lang: Lang
  prefill?: Partial<IdentityAnswers>
}) {
  // Le terrain vient de l'URL quand elle le porte, sinon le client le
  // choisit lui-même sur l'écran d'accueil. C'est plus fiable qu'un
  // paramètre : la personne qui a payé sait ce qu'elle a acheté, et on
  // évite d'avoir à le lui demander par mail après coup.
  const [chosenTerrain, setChosenTerrain] = useState<TerrainKey | undefined>(terrain)
  const steps = useMemo(
    () => stepsForOffer(offer, lang, chosenTerrain),
    [offer, lang, chosenTerrain],
  )
  const copy = UI_COPY[lang]
  const words = useMemo(() => wordsFor(lang), [lang])
  // Les questions mises de côté.
  //
  // « La conviction que votre milieu refuserait de dire » n'a pas de bonne
  // réponse au premier passage. Sans échappatoire, on remplit six mots pour
  // avancer — et la pièce qui en dépend sera creuse. Mieux vaut y revenir.
  const [deferred, setDeferred] = useState<string[]>([])

  const [screen, setScreen] = useState<"threshold" | "cover" | "chapter" | "steps" | "review" | "done" | "error">("threshold")
  const [idx, setIdx] = useState(0)
  const [answers, setAnswers] = useState<Answers>(() => emptyAnswers(prefill))
  const [deepOpen, setDeepOpen] = useState<Record<string, boolean>>({})
  const [honeypot, setHoneypot] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const startedAt = useRef<number>(Date.now())
  const hydrated = useRef(false)

  // Resume from localStorage once we know the email (from prefill or once typed).
  useEffect(() => {
    if (hydrated.current) return
    const email = prefill?.email ?? ""
    if (!email) return
    try {
      const raw = localStorage.getItem(storageKey(offer, email, chosenTerrain))
      if (raw) {
        const saved = JSON.parse(raw) as { answers: Answers; idx: number; deferred?: string[] }
        setAnswers((prev) => ({ ...prev, ...saved.answers }))
        setIdx(saved.idx ?? 0)
        setDeferred(saved.deferred ?? [])
        // On ne propose la reprise que si le travail engagé vaut la peine :
        // reprendre à la deuxième question n'a aucun intérêt.
        if ((saved.idx ?? 0) >= 2) setResumable(saved.idx ?? 0)
      }
    } catch {
      // localStorage unavailable — proceed without resume.
    }
    hydrated.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offer])

  // Autosave on every change, once we have an email to key on.
  useEffect(() => {
    const email = answers.identity.email
    if (!email) return
    try {
      localStorage.setItem(storageKey(offer, email, chosenTerrain), JSON.stringify({ answers, idx, deferred }))
    } catch {
      // best-effort only
    }
  }, [answers, idx, deferred, offer])

  const step = steps[idx]

  /**
   * Les chapitres, dérivés des tags de questions.
   *
   * Trente écrans identiques n'ont aucun rythme : on ne sait jamais où l'on
   * en est ni pourquoi on répond à ça. Les questions portent déjà un tag
   * (Diagnostic, Langage, Déploiement...) ; on s'en sert pour découper le
   * parcours et ouvrir chaque section par un écran qui annonce ce qu'on va
   * y chercher. C'est ce qui transforme un tunnel en parcours.
   */
  const chapters = useMemo(() => {
    const out: { tag: string; start: number; count: number }[] = []
    steps.forEach((s, i) => {
      const tag = s.tag ?? ""
      const last = out[out.length - 1]
      if (last && last.tag === tag) last.count += 1
      else out.push({ tag, start: i, count: 1 })
    })
    return out
  }, [steps])

  /**
   * Les six pièces du document, et ce qui les remplit.
   *
   * Chaque tag de question correspond à une pièce du livrable. On compte
   * les réponses non vides sur les questions de ce tag : la barre montre
   * donc la matière réellement fournie, pas le nombre d'écrans traversés.
   */
  const pieces = useMemo(() => {
    const MAP: Record<string, string> = {
      Fondation: "01", Identité: "01", Identity: "01", Foundation: "01",
      Diagnostic: "02", Diagnosis: "02",
      Concurrence: "03", Competition: "03",
      Déploiement: "04", Deployment: "04",
      Langage: "06", Language: "06",
    }
    const defs = [
      { n: "01", t: "La plateforme" }, { n: "02", t: "Le diagnostic" },
      { n: "03", t: "La carte" }, { n: "04", t: "Les décisions" },
      { n: "05", t: "Les playbooks" }, { n: "06", t: "Le langage" },
    ]
    return defs.map((d) => {
      const qs = steps.filter((s) => MAP[s.tag ?? ""] === d.n)
      // La pièce 05 n'a pas de questions propres : elle se nourrit de tout
      // le reste, donc elle suit la progression générale.
      if (qs.length === 0) return { ...d, pct: Math.round((idx / Math.max(1, steps.length)) * 100) }
      const done = qs.filter((q) => {
        const v = answers[q.id]
        if (typeof v === "string") return v.trim().length > 0
        if (Array.isArray(v)) return v.length > 0
        return v != null
      }).length
      return { ...d, pct: Math.round((done / qs.length) * 100) }
    })
  }, [steps, answers, idx])

  /**
   * Le miroir : une réponse déjà donnée, citée au moment où elle éclaire
   * la question en cours.
   *
   * Les paires sont choisies pour que la citation serve vraiment — la
   * conviction rappelée quand on demande les concurrents, le refus rappelé
   * quand on demande le déploiement. Citer au hasard ferait gadget.
   */
  const mirror = useMemo(() => {
    if (!step) return undefined
    const PAIRS: Record<string, { from: string; note: string }> = {
      positioning: { from: "conviction", note: copy.mirrorPositioning },
      positioning_produits: { from: "conviction", note: copy.mirrorPositioning },
      positioning_lieux: { from: "conviction", note: copy.mirrorPositioning },
      positioning_artistes: { from: "conviction", note: copy.mirrorPositioning },
      deploy: { from: "enemy", note: copy.mirrorDeploy },
      portrait_house: { from: "rupture", note: copy.mirrorPortrait },
    }
    const pair = PAIRS[step.id]
    if (!pair) return undefined
    const raw = answers[pair.from]
    if (typeof raw !== "string" || raw.trim().length < 25) return undefined
    // On cite une phrase, pas un paragraphe : la première suffit, et elle
    // porte presque toujours l'essentiel.
    const first = raw.trim().split(/(?<=[.!?])\s/)[0]
    const quote = first.length > 180 ? `${first.slice(0, 177)}…` : first
    return { quote, note: pair.note }
  }, [step, answers, copy])

  const currentChapter = chapters.filter((ch) => ch.start <= idx).pop()
  const chapterIndex = currentChapter ? chapters.indexOf(currentChapter) : 0

  // L'écran de chapitre s'affiche à l'entrée d'une section, une seule fois.
  const [seenChapters, setSeenChapters] = useState<number[]>([])

  // Un brouillon retrouvé au chargement.
  //
  // Les réponses étaient déjà restaurées, mais en silence : on revenait sur
  // l'écran d'accueil sans savoir que son travail existait encore, donc on
  // recommençait ou on abandonnait. Le signaler est ce qui sauve le
  // questionnaire de quelqu'un qui a fermé l'onglet au vingtième écran.
  const [resumable, setResumable] = useState<number | null>(null)

  // Le temps restant, glissant.
  //
  // L'estimation donnée une seule fois au départ ne sert plus après cinq
  // minutes — or c'est la seule information qui décide de continuer ou de
  // s'arrêter. Deux minutes par écran rédigé, trente secondes sinon.
  const minutesLeft = useMemo(() => {
    const rest = steps.slice(idx)
    const mins = rest.reduce((s, q) => s + (["textarea", "competitors"].includes(q.type) ? 2 : 0.5), 0)
    return Math.max(1, Math.round(mins))
  }, [steps, idx])


  function updateAnswer(id: string, value: unknown) {
    setAnswers((prev) => ({ ...prev, [id]: value }))
  }

  /** Mettre la question de côté : on la repropose à la fin, pas jamais. */
  function deferCurrent() {
    if (!step) return
    setDeferred((prev) => (prev.includes(step.id) ? prev : [...prev, step.id]))
    goNext()
  }

  function goNext() {
    // À la fin du parcours, on ramène les questions mises de côté avant
    // d'aller au récapitulatif : les laisser vides serait les perdre.
    if (idx >= steps.length - 1 && deferred.length > 0) {
      const back = steps.findIndex((s) => s.id === deferred[0])
      if (back > -1) {
        setDeferred((prev) => prev.slice(1))
        setIdx(back)
        return
      }
    }
    if (idx < steps.length - 1) {
      const next = idx + 1
      const ch = chapters.find((x) => x.start === next)
      const chi = ch ? chapters.indexOf(ch) : -1
      setIdx(next)
      // Un écran de chapitre à chaque nouvelle section, jamais deux fois :
      // le revoir en revenant en arrière serait une punition.
      if (ch && !seenChapters.includes(chi)) {
        setSeenChapters((prev) => [...prev, chi])
        setScreen("chapter")
      }
    } else setScreen("review")
  }
  function goBack() {
    if (idx === 0) setScreen("cover")
    else setIdx(idx - 1)
  }

  async function submit() {
    if (isBot(honeypot, startedAt.current)) {
      // Silently pretend success — bots learn nothing.
      setScreen("done")
      return
    }
    const limit = rateLimit(`questionnaire:${offer}`)
    if (!limit.ok) {
      setErrorMsg(copy.rateLimited)
      return
    }
    setSubmitting(true)
    setErrorMsg("")
    try {
      const res = await fetch("/api/questionnaire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          offer,
          // Le terrain part avec la réponse : sans lui, vous recevriez un
          // questionnaire rempli sans savoir s'il concerne une marque, un
          // produit, un lieu ou un nom.
          terrain: chosenTerrain,
          lang,
          answers,
          company_website: honeypot,
          startedAt: startedAt.current,
        }),
      })
      const data = await res.json().catch(() => ({ ok: false }))
      if (!res.ok || !data.ok) throw new Error(data?.error ?? "submit_failed")
      try {
        localStorage.removeItem(storageKey(offer, answers.identity.email))
      } catch {
        // ignore
      }
      setScreen("done")
    } catch {
      setErrorMsg(copy.sendFailed)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="relative border border-hair-strong bg-ink">
      <span className="bracket-tl" aria-hidden="true" />
      <span className="bracket-br" aria-hidden="true" />
      {screen === "cover" && <div className="glow-top" aria-hidden="true" />}
      <div className="relative px-6 py-10 sm:px-10 sm:py-14">
        <input
          {...honeypotProps}
          name="company_website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />

      {/* Le fond qui avance.
          `--q-progress` va de 0 à 1 sur le parcours : la lueur passe d'un
          bleu froid à l'ouverture au rouge de marque à l'arrivée. On sent
          l'avancée sans qu'aucun chiffre ne l'affiche. */}
      <div
        aria-hidden
        className="q-ambient"
        style={{ ["--q-progress" as string]: String(Math.min(1, idx / Math.max(1, steps.length - 1))) }}
      />

        {screen === "threshold" && (
          <ThresholdScreen
            copy={copy}
            identity={answers.identity}
            onEnter={() => setScreen("cover")}
          />
        )}

        {screen === "cover" && (
          <>
          {/* Le brouillon retrouvé.
              Sans ce bandeau, on revient sur l'écran d'accueil et rien ne
              dit que son travail existe encore : on recommence, ou on part.
              C'est la seule chose qui sauve un questionnaire abandonné en
              cours de route. */}
          {resumable !== null && (
            <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3 border border-brand-hair bg-brand/[0.05] px-5 py-4">
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
                  {copy.resumeKicker}
                </div>
                <p className="m-0 mt-1.5 font-sans text-[13.5px] leading-[1.6] text-chalk-75">
                  {copy.resumeLead(resumable + 1, steps.length)}
                </p>
              </div>
              <button type="button" className="btn-primary flex-shrink-0" onClick={() => setScreen("steps")}>
                {copy.resumeCta}
              </button>
            </div>
          )}
          <CoverScreen
            offer={offer}
            copy={copy}
            stepCount={steps.length}
            identity={answers.identity}
            chosenTerrain={chosenTerrain}
            onChooseTerrain={setChosenTerrain}
            onStart={() => setScreen("steps")}
          />
          </>
        )}

        {screen === "chapter" && currentChapter && (
          <ChapterScreen
            tag={currentChapter.tag}
            n={chapterIndex + 1}
            total={chapters.length}
            count={currentChapter.count}
            pieces={pieces}
            copy={copy}
            onStart={() => setScreen("steps")}
          />
        )}

        {screen === "steps" && step && (
          <StepScreen
            step={step}
            copy={copy}
            minutesLeft={minutesLeft}
            mirror={mirror}
            onDefer={deferCurrent}
            words={words}
            index={idx}
            total={steps.length}
            answers={answers}
            deepOpen={!!deepOpen[step.id]}
            onOpenDeep={() => setDeepOpen((p) => ({ ...p, [step.id]: true }))}
            onChange={updateAnswer}
            onBack={goBack}
            onNext={goNext}
            onSkip={step.optional ? goNext : undefined}
          />
        )}

        {screen === "review" && (
          <ReviewScreen
            steps={steps}
            copy={copy}
            answers={answers}
            submitting={submitting}
            errorMsg={errorMsg}
            onEdit={(i) => {
              setIdx(i)
              setScreen("steps")
            }}
            onBack={() => {
              setIdx(steps.length - 1)
              setScreen("steps")
            }}
            onSubmit={submit}
          />
        )}

        {screen === "done" && (
          <DoneScreen
            copy={copy}
            house={answers.identity.house}
            answers={answers}
            steps={steps}
          />
        )}
      </div>
    </div>
  )
}

function CoverScreen({
  offer,
  copy,
  stepCount,
  identity,
  chosenTerrain,
  onChooseTerrain,
  onStart,
}: {
  offer: OfferKey
  copy: Copy
  stepCount: number
  identity: IdentityAnswers
  chosenTerrain?: TerrainKey
  onChooseTerrain: (t: TerrainKey) => void
  onStart: () => void
}) {
  const isArchitecture = offer === "architecture"
  const minutes = isArchitecture ? copy.minutesArchitecture : copy.minutesAudit

  // Les paliers d'apparition. Chaque bloc entre 220 ms après le précédent :
  // assez pour qu'on suive, trop court pour qu'on attende.
  // L'heure : une remarque, pas une donnée. Elle n'apparaît qu'aux heures
  // où elle veut dire quelque chose — tard le soir, tôt le matin.
  const hourNote = useMemo(() => {
    const h = new Date().getHours()
    if (h >= 22 || h < 5) return copy.hourLate
    if (h < 8) return copy.hourEarly
    return ""
  }, [copy])

  // La date de livraison, calculée : vingt et un jours, l'engagement du site.
  const dueDate = useMemo(() => {
    const d = new Date()
    d.setDate(d.getDate() + 21)
    return d.toLocaleDateString(undefined, { day: "2-digit", month: "long" })
  }, [])

  // Une référence de dossier, dérivée du nom de la maison : stable d'une
  // visite à l'autre, et suffisante pour que ça ressemble à une commande.
  const orderRef = useMemo(() => {
    const base = (identity.house || "SP").toUpperCase().replace(/[^A-Z]/g, "").slice(0, 3).padEnd(3, "X")
    const n = new Date().getFullYear().toString().slice(2)
    return `${base}-${n}`
  }, [identity.house])

  const [stage, setStage] = useState(0)
  useEffect(() => {
    const timers = [0, 1, 2, 3, 4].map((i) => window.setTimeout(() => setStage(i + 1), 120 + i * 220))
    return () => timers.forEach(window.clearTimeout)
  }, [])
  const rev = (i: number) =>
    `transition-all duration-[700ms] ease-[cubic-bezier(.22,.68,0,1)] ${
      stage > i ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
    }`
  return (
    <div className="text-center">
      {/* L'ouverture, en séquence.
          Tout apparaissait d'un bloc : on arrivait sur une page pleine de
          texte et de champs, et rien ne distinguait ce moment d'un
          formulaire. En faisant entrer les éléments l'un après l'autre —
          le studio, puis le nom de la maison, puis la phrase — les trois
          premières secondes deviennent une arrivée plutôt qu'un
          chargement. */}
      <div className={rev(0)}>
        <div className="kicker mb-8">{copy.kicker}</div>
      </div>

      {/* Le nom de la maison, en grand.
          C'est ce que le client a payé pour faire écrire. Le voir s'afficher
          à la taille d'une couverture, avant toute question, dit mieux que
          n'importe quelle phrase ce qui est en train de commencer. */}
      {/* On est accueilli par quelqu'un, pas par une page. Le prénom vient
          du pré-remplissage ; sans lui, on saute simplement la ligne. */}
      {identity.name && (
        <div className={rev(1)}>
          <p className="mb-9 font-serif text-[clamp(1.1rem,2.2vw,1.5rem)] text-chalk-75">
            {copy.hello(identity.name.split(" ")[0])}
            {hourNote && <span className="mt-2 block text-[13.5px] text-chalk-40">{hourNote}</span>}
          </p>
        </div>
      )}

      {identity.house && (
        <div className={rev(1)}>
          <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-chalk-40">
            {copy.houseOverline}
          </div>
          <div className="font-serif text-[clamp(2.4rem,7vw,4.6rem)] font-bold uppercase leading-[0.95] tracking-[-0.02em] text-brand">
            {identity.house}
          </div>
          <div className="mx-auto mt-8 h-px w-16 bg-brand/50" />
        </div>
      )}

      <div className={rev(2)}>
        <h1 className="h-section mb-6 mt-10">{copy.coverTitle}</h1>
        <p className="lede mx-auto mb-6 max-w-[520px] whitespace-pre-line">{copy.coverLede}</p>
      </div>
      <div className={rev(3)}>
      <div className="body-sm mb-1">{copy.aboutMinutes(minutes, stepCount, isArchitecture)}</div>
      {isArchitecture && <p className="body-sm mt-3 text-chalk-40">{copy.resumeNote}</p>}
      {/* Un bon de commande, pas un rappel de champs.
          Le bloc disait « déjà rempli pour vous » et listait deux valeurs :
          utile, mais ça ressemblait à un brouillon. Présenté comme une
          commande — avec la référence et la date de livraison calculée — il
          matérialise l'achat qui vient d'être fait. */}
      {(identity.name || identity.house) && (
        <div className="mx-auto mt-10 mb-8 max-w-[440px] border border-hair-strong bg-white/[0.02] text-left">
          <div className="flex items-center justify-between border-b border-hair px-5 py-3 font-mono text-[9.5px] uppercase tracking-[0.22em] text-chalk-40">
            <span>{copy.orderLabel}</span>
            <span className="text-brand">{orderRef}</span>
          </div>
          <div className="grid grid-cols-2 gap-px bg-white/[0.06]">
            <div className="bg-ink px-5 py-4">
              <div className="mb-1 font-mono text-[9px] uppercase tracking-[0.18em] text-chalk-40">
                {copy.orderHouse}
              </div>
              <div className="text-[14px] text-white">{identity.house || copy.dash}</div>
            </div>
            <div className="bg-ink px-5 py-4">
              <div className="mb-1 font-mono text-[9px] uppercase tracking-[0.18em] text-chalk-40">
                {copy.orderDue}
              </div>
              <div className="text-[14px] text-brand">{dueDate}</div>
            </div>
          </div>
        </div>
      )}
      {/* Le choix du terrain, avant les questions.
          Sans lui, le parcours retombait sur « marques » par défaut et un
          restaurateur se voyait demander la tagline de ses concurrents.
          Le choix est bloquant : le bouton reste inactif tant qu'on n'a
          pas répondu, parce qu'un mauvais parcours ne se rattrape pas en
          cours de route. */}
      </div>

      <div className={`mx-auto mt-9 max-w-lg text-left ${rev(4)}`}>
        <div className="field-label mb-1.5">{copy.terrainLabel}</div>
        <p className="body-sm mb-4 text-chalk-40">{copy.terrainHelp}</p>
        <div className="grid gap-2">
          {copy.terrains.map((t) => {
            const on = chosenTerrain === t.k
            return (
              <button
                key={t.k}
                type="button"
                onClick={() => onChooseTerrain(t.k as TerrainKey)}
                aria-pressed={on}
                className={`flex items-center gap-4 border px-4 py-3.5 text-left transition-colors ${
                  on ? "border-brand bg-brand/[0.07]" : "border-hair-strong bg-white/[0.02] hover:border-hair"
                }`}
              >
                {/* Un pictogramme par terrain.
                    Quatre lignes de texte se ressemblent et se lisent mal en
                    diagonale ; un signe distinct rend le choix immédiat, et
                    chacun dit la nature du terrain : un bloc plein pour une
                    marque, une boîte pour un produit, une porte pour un lieu,
                    une signature pour un nom propre. */}
                <TerrainMark k={t.k} on={on} />
                <span className="min-w-0">
                  <span className={`block text-[14.5px] ${on ? "text-white" : "text-chalk-75"}`}>{t.t}</span>
                  <span className="mt-0.5 block text-[12.5px] text-chalk-40">{t.d}</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <button
        type="button"
        className="btn-primary mt-8 disabled:cursor-not-allowed disabled:opacity-40"
        onClick={onStart}
        disabled={!chosenTerrain}
      >
        {copy.start}
      </button>
    </div>
  )
}

function StepScreen({
  step,
  copy,
  minutesLeft,
  mirror,
  onDefer,
  words,
  index,
  total,
  answers,
  deepOpen,
  onOpenDeep,
  onChange,
  onBack,
  onNext,
  onSkip,
}: {
  minutesLeft: number
  mirror?: { quote: string; note: string }
  onDefer?: () => void
  step: Question
  copy: Copy
  words: string[]
  index: number
  total: number
  answers: Answers
  deepOpen: boolean
  onOpenDeep: () => void
  onChange: (id: string, value: unknown) => void
  onBack: () => void
  onNext: () => void
  onSkip?: () => void
}) {
  const valid = isValid(step, answers)

  // L'entrée de chaque question.
  //
  // Sans elle, passer d'un écran à l'autre est un remplacement brutal : le
  // texte change, rien ne bouge, et trente écrans donnent l'impression de
  // remplir un tableur. Un court fondu montant suffit à faire sentir qu'on
  // avance. La clé sur l'index force le rejeu à chaque question.
  // Les questions fondatrices se passent de tout repère.
  //
  // C'est le seul moment du parcours où l'on retire le chrono, et c'est
  // exactement là qu'il faut le retirer : on ne demande pas à quelqu'un de
  // formuler ce qu'il refuse en lui montrant le temps qui passe.
  const bare = step.tag === "Fondation" || step.tag === "Foundation"

  const [fieldReady, setFieldReady] = useState(false)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    setFieldReady(false)
    const t = window.setTimeout(() => setFieldReady(true), 1500)
    return () => window.clearTimeout(t)
  }, [index])
  useEffect(() => {
    setShown(false)
    const id = requestAnimationFrame(() => setShown(true))
    return () => cancelAnimationFrame(id)
  }, [index])

  // Entrée au clavier : avancer sans quitter le clavier.
  //
  // Sur trente écrans, tendre la main vers la souris à chaque fois est le
  // genre de frottement qui fait abandonner. Cmd+Entrée depuis une zone de
  // texte, Entrée depuis n'importe où ailleurs.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Enter" || !valid) return
      const el = e.target as HTMLElement | null
      const inText = el?.tagName === "TEXTAREA"
      if (inText && !(e.metaKey || e.ctrlKey)) return
      e.preventDefault()
      onNext()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [valid, onNext])

  return (
    <div
      key={index}
      className={[
        "relative flex min-h-[76vh] flex-col items-center justify-center text-center",
        // Latérale, pas verticale.
        //
        // Un fondu montant ressemble à un chargement ; un glissement de
        // droite à gauche ressemble à un déplacement. Sur trente écrans,
        // c'est ce qui fait sentir qu'on avance dans un parcours plutôt
        // qu'on recharge la même page.
        "transition-all duration-[520ms] ease-[cubic-bezier(.22,.68,0,1)]",
        shown ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0",
      ].join(" ")}
    >
      {/* Le retour, discret, hors du flux centré : sur une question
          fondatrice, il disparaît avec le reste du repère — on n'a pas
          besoin de savoir où on en est pour écrire ce qu'on refuse. */}
      {!bare && (
        <button
          type="button"
          onClick={onBack}
          aria-label={copy.previous}
          className="absolute left-0 top-0 text-[16px] leading-none text-chalk-40 transition-colors hover:text-white"
        >
          ←
        </button>
      )}

      {/* Le repère de section : un point qui respire, comme sur le reste
          du site, plutôt qu'une barre ou un folio. Sur une question
          fondatrice, il cède la place à une seule ligne : on ne compte pas
          les questions de quelqu'un à qui on demande ce qu'il refuse. */}
      {bare ? (
        <p className="mb-16 font-mono text-[10px] uppercase tracking-[0.24em] text-chalk-40">
          {copy.bareNote}
        </p>
      ) : (
        <div className="q-kicker mb-14">
          <span className="q-kicker-dot" aria-hidden />
          <span className="q-kicker-label">
            {step.tag ?? ""} — {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
          </span>
        </div>
      )}

      {step.optional && (
        <div className="mb-4">
          <span className="tag border-brand-hair text-brand">{copy.optional}</span>
        </div>
      )}

      <h2 className="q-question mx-auto mb-5 max-w-[17ch]">{step.label}</h2>
      {step.help ? (
        <p className="q-help mx-auto mb-12 max-w-[46ch]">{step.help}</p>
      ) : (
        <div className="mb-10" />
      )}

      {/* Le champ se fait attendre.
          Une seconde et demie : assez pour qu'on lise la question au lieu de
          commencer à taper, trop court pour qu'on s'impatiente. C'est ce
          délai qui fait la différence entre un formulaire et quelqu'un qui
          vient de poser une question et attend la réponse. */}
      <div
        className={`w-full max-w-[600px] transition-opacity duration-[900ms] ${
          fieldReady ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <QuestionInput
          step={step}
          copy={copy}
          words={words}
          answers={answers}
          deepOpen={deepOpen}
          onOpenDeep={onOpenDeep}
          onChange={onChange}
        />
      </div>

      {/* Le miroir : la réponse déjà donnée qui éclaire celle-ci. Être cité
          est le signal le plus fort qu'on a été entendu. */}
      {mirror && (
        <figure className="mx-auto mt-10 max-w-[520px] border-l border-white/15 pl-5 text-left">
          <blockquote className="m-0 font-serif text-[15px] italic leading-[1.55] text-white/80">
            « {mirror.quote} »
          </blockquote>
          <figcaption className="mt-2.5 font-sans text-[12.5px] leading-[1.6] text-chalk-40">
            {mirror.note}
          </figcaption>
        </figure>
      )}

      {/* Le pied d'écran.
          Sur un téléphone, le clavier mange la moitié de la hauteur et le
          bouton passait sous la ligne de flottaison : on tapait sa réponse
          sans voir comment avancer. Il colle désormais au bas de l'écran
          sur mobile, au-dessus de la zone système — sans fond opaque, pour
          ne pas rompre le noir de l'écran. */}
      <div className="sticky bottom-0 z-10 mt-16 flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-3 py-4 [padding-bottom:calc(1rem+env(safe-area-inset-bottom,0px))] sm:static sm:py-0">
        {/* Le bouton ne devient lisible que lorsqu'on peut réellement
            avancer. Éteint, il reste une indication — il reste quelque
            chose à remplir. */}
        <button type="button" className="q-go" disabled={!valid} onClick={onNext}>
          {copy.continue}
        </button>

        {/* L'échappatoire honorable.
            Une question difficile sans porte de sortie se solde par six mots
            tapés pour avancer — et la pièce qui en dépend sera creuse. Mise
            de côté, elle revient à la fin, quand le reste a réchauffé. */}
        {onDefer && !valid && (
          <button
            type="button"
            onClick={onDefer}
            className="font-sans text-[13px] text-chalk-40 underline decoration-hair-strong underline-offset-4 transition-colors hover:text-chalk-75"
          >
            {copy.deferCta}
          </button>
        )}

        {onSkip && (
          <button type="button" className="btn-quiet" onClick={onSkip}>
            {copy.skip}
          </button>
        )}
      </div>

      {/* Le temps restant et la sauvegarde : en coin, discrets, hors du
          flux centré. Absents sur une question fondatrice. */}
      {!bare && (
        <span className="absolute bottom-0 right-0 hidden items-center gap-2 font-mono text-[9.5px] uppercase tracking-[0.16em] text-chalk-40 sm:flex">
          <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden title={copy.saved} />
          {copy.minutesLeft(minutesLeft)}
        </span>
      )}
    </div>
  )
}

function QuestionInput({
  step,
  copy,
  words,
  answers,
  deepOpen,
  onOpenDeep,
  onChange,
}: {
  step: Question
  copy: Copy
  words: string[]
  answers: Answers
  deepOpen: boolean
  onOpenDeep: () => void
  onChange: (id: string, value: unknown) => void
}) {
  if (step.type === "identity") {
    const v = answers.identity
    const set = (patch: Partial<IdentityAnswers>) => onChange("identity", { ...v, ...patch })
    return (
      <div className="space-y-3.5">
        <div>
          <label className="field-label">{copy.fieldName}</label>
          <input className="q-field" value={v.name} onChange={(e) => set({ name: e.target.value })} placeholder={copy.phName} />
        </div>
        <div>
          <label className="field-label">{copy.fieldHouse}</label>
          <input className="q-field" value={v.house} onChange={(e) => set({ house: e.target.value })} placeholder={copy.phHouse} />
        </div>
        <div>
          <label className="field-label">{copy.fieldEmail}</label>
          <input className="q-field" value={v.email} onChange={(e) => set({ email: e.target.value })} placeholder={copy.phEmail} />
        </div>
      </div>
    )
  }

  if (step.type === "shorttext") {
    const v = (answers[step.id] as string) ?? ""
    return <input className="q-field" value={v} onChange={(e) => onChange(step.id, e.target.value)} placeholder={step.ph} />
  }

  if (step.type === "textarea") {
    const v = (answers[step.id] as string) ?? ""
    const deepVal = (answers[`${step.id}_deep`] as string) ?? ""
    return (
      <div>
        {/* `step.nudge` est la relance propre à la question : elle sait quoi
            demander de plus. Le compteur qui vivait ici faisait doublon avec
            celui du champ, et il jugeait au lieu d'aider. */}
        <AutoTextarea
          value={v}
          placeholder={step.ph}
          nudge={step.nudge}
          unlock={step.unlock}
          onChange={(val) => onChange(step.id, val)}
        />
        {step.deep &&
          (deepOpen ? (
            <div className="mt-4 border-l-2 border-brand pl-4">
              <p className="body-sm mb-2.5 italic">{step.deep}</p>
              <AutoTextarea value={deepVal} onChange={(val) => onChange(`${step.id}_deep`, val)} rows={3} />
            </div>
          ) : (
            <button type="button" className="btn-quiet mt-4" onClick={onOpenDeep}>
              {copy.digDeeper}
            </button>
          ))}
      </div>
    )
  }

  if (step.type === "competitors") {
    const rows = answers.competitors
    const setRow = (i: number, patch: Partial<CompetitorRow>) => {
      const next = rows.map((r, idx) => (idx === i ? { ...r, ...patch } : r))
      onChange("competitors", next)
    }
    return (
      <div>
        {rows.map((c, i) => (
          <div key={i} className="mb-2 grid grid-cols-1 gap-2 sm:grid-cols-[1fr_1.6fr_auto]">
            <input className="q-field" placeholder={copy.competitorName} value={c.name} onChange={(e) => setRow(i, { name: e.target.value })} />
            <input className="q-field" placeholder={copy.competitorLine} value={c.line} onChange={(e) => setRow(i, { line: e.target.value })} />
            {rows.length > 3 ? (
              <button
                type="button"
                aria-label={copy.remove}
                className="flex h-[52px] w-9 items-center justify-center border border-hair-strong text-chalk-55"
                onClick={() => onChange("competitors", rows.filter((_, idx) => idx !== i))}
              >
                ×
              </button>
            ) : (
              <div />
            )}
          </div>
        ))}
        {rows.length < 5 && (
          <button type="button" className="btn-quiet mt-1" onClick={() => onChange("competitors", [...rows, { name: "", line: "" }])}>
            {copy.addCompetitor}
          </button>
        )}
      </div>
    )
  }

  if (step.type === "links") {
    const v = answers.links
    const set = (patch: Partial<LinksAnswers>) => onChange("links", { ...v, ...patch })
    return (
      <div className="space-y-3.5">
        <div>
          <label className="field-label">{copy.linkSite}</label>
          <input className="q-field" value={v.site} onChange={(e) => set({ site: e.target.value })} placeholder="https://" />
        </div>
        <div>
          <label className="field-label">{copy.linkLinkedin}</label>
          <input className="q-field" value={v.linkedin} onChange={(e) => set({ linkedin: e.target.value })} placeholder="https://linkedin.com/in/..." />
        </div>
        <div>
          <label className="field-label">{copy.linkContent}</label>
          <input className="q-field" value={v.content} onChange={(e) => set({ content: e.target.value })} placeholder={copy.phContent} />
        </div>
      </div>
    )
  }

  if (step.type === "choice") {
    const sel = answers[step.id]
    const options = step.options ?? []
    return (
      <div>
        <div className="space-y-2">
          {options.map((opt) => {
            const on = step.multi ? Array.isArray(sel) && (sel as string[]).includes(opt) : sel === opt
            return (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  if (step.multi) {
                    const arr = Array.isArray(sel) ? [...(sel as string[])] : []
                    const pos = arr.indexOf(opt)
                    if (pos > -1) arr.splice(pos, 1)
                    else if (arr.length < (step.max ?? 2)) arr.push(opt)
                    onChange(step.id, arr)
                  } else {
                    onChange(step.id, opt)
                  }
                }}
                className={`q-option group flex w-full items-start gap-3.5 border px-4 py-3.5 text-left text-[14.5px] leading-snug ${
                  on
                    ? "border-brand bg-brand/10 text-white"
                    : "border-hair-strong bg-white/[0.02] text-chalk-75 hover:border-brand/40 hover:bg-white/[0.04]"
                }`}
              >
                {/* Un repère de sélection à gauche.
                    Sans lui, on distingue mal une option choisie d'une option
                    survolée — surtout en choix multiple, où plusieurs lignes
                    sont actives en même temps. Carré pour le multiple, rond
                    pour le choix unique : la forme dit la règle. */}
                <span
                  aria-hidden
                  className={`mt-[3px] flex h-[15px] w-[15px] flex-shrink-0 items-center justify-center border transition-colors ${
                    step.multi ? "rounded-[3px]" : "rounded-full"
                  } ${on ? "border-brand bg-brand" : "border-hair-strong group-hover:border-brand/50"}`}
                >
                  {on && (
                    <span
                      className={`bg-ink ${step.multi ? "h-[6px] w-[6px] rounded-[1px]" : "h-[5px] w-[5px] rounded-full"}`}
                    />
                  )}
                </span>
                <span className="min-w-0">{opt}</span>
              </button>
            )
          })}
        </div>
        {step.multi && <div className="body-sm mt-2">{copy.upToChoices(step.max ?? 2)}</div>}
      </div>
    )
  }

  if (step.type === "sliders") {
    const tone = answers.tone
    return (
      /* Cinq curseurs identiques empilés : on ne voyait pas où l'on avait
         déplacé quoi, et la barre rouge pleine donnait l'impression que
         tout était déjà répondu. Trois corrections :
         - le pôle vers lequel on penche s'allume, l'autre s'éteint, donc on
           lit sa réponse sans regarder la position du curseur ;
         - un repère au centre marque le point neutre, pour qu'un curseur
           laissé au milieu se distingue d'un curseur posé volontairement ;
         - chaque axe est séparé d'un filet, ce qui casse l'effet de mur. */
      <div className="divide-y divide-hair">
        {(step.axes ?? []).map((ax) => {
          const v = tone[ax.id] ?? 50
          const leftOn = v < 45
          const rightOn = v > 55
          return (
            <div key={ax.id} className="py-5 first:pt-0 last:pb-0">
              <div className="mb-3 flex items-baseline justify-between gap-4 text-[12.5px]">
                <span className={leftOn ? "text-white" : "text-chalk-40"}>{ax.l}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-chalk-40">
                  {leftOn || rightOn ? "" : "—"}
                </span>
                <span className={rightOn ? "text-white" : "text-chalk-40"}>{ax.r}</span>
              </div>
              <div className="relative">
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-white/20"
                />
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={5}
                  value={v}
                  aria-label={`${ax.l} — ${ax.r}`}
                  onChange={(e) => onChange("tone", { ...tone, [ax.id]: Number(e.target.value) })}
                  className="relative w-full accent-[var(--color-brand)]"
                />
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  if (step.type === "wordbank") {
    const wb = answers.wordbank
    const toggle = (group: "mine" | "notmine", w: string) => {
      const other = group === "mine" ? "notmine" : "mine"
      const arr = [...wb[group]]
      const pos = arr.indexOf(w)
      const otherArr = wb[other].filter((x) => x !== w)
      if (pos > -1) arr.splice(pos, 1)
      else arr.push(w)
      onChange("wordbank", { ...wb, [group]: arr, [other]: otherArr })
    }
    const renderGroup = (title: string, group: "mine" | "notmine") => (
      <div className="mb-5">
        <div className="field-label mb-2.5">{title}</div>
        <div className="flex flex-wrap gap-2">
          {words.map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => toggle(group, w)}
              className={`rounded-full border px-3.5 py-2 text-[12.5px] transition-colors ${
                wb[group].includes(w) ? "border-brand bg-brand text-white" : "border-hair-strong bg-white/[0.02] text-chalk-65"
              }`}
            >
              {w}
            </button>
          ))}
        </div>
      </div>
    )
    return (
      <div>
        {renderGroup(copy.myWords, "mine")}
        {renderGroup(copy.neverMyWords, "notmine")}
      </div>
    )
  }

  return null
}

function AutoTextarea({
  value,
  placeholder,
  rows = 5,
  nudge,
  unlock,
  onChange,
}: {
  value: string
  placeholder?: string
  rows?: number
  nudge?: string
  unlock?: string
  onChange: (v: string) => void
}) {
  const ref = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.height = "auto"
    el.style.height = `${el.scrollHeight}px`
  }, [value])
  const n = value.trim() ? value.trim().split(/\s+/).length : 0
  return (
    <div className="relative">
      {/* Le grand geste : la réponse principale porte le trait qui
          s'allonge, et un curseur qui clignote avant même le clic — la
          différence entre un champ vide et une invitation à écrire.
          Le curseur s'efface dès qu'il y a du texte : le vrai curseur du
          champ prend le relais. */}
      <div className="q-field-wrap relative">
        {!value && (
          <span className="q-caret" aria-hidden style={{ left: 0 }} />
        )}
        <textarea
          ref={ref}
          className="q-field"
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="q-line" />
      </div>
      {/* Une relance, pas un compteur.
          Afficher « 8 mots » en rouge juge sans aider : le client sait qu'il
          a fait court, il ne sait pas quoi ajouter. Une question posée au
          bon moment débloque la réponse — et elle n'apparaît qu'après une
          première tentative, jamais sur un champ vide, pour ne pas donner
          d'ordre avant d'avoir lu. */}
      {n >= 4 && n < 25 && nudge && (
        <p className="mt-3 border-l border-white/15 pl-4 font-sans text-[12.5px] leading-[1.65] text-chalk-40">
          {nudge}
        </p>
      )}
      {/* Ce que la réponse vient de débloquer.
          Le client écrit trente réponses et rien ne lui répond jamais — il
          ne sait pas s'il a écrit quelque chose d'utile ou du remplissage.
          Une ligne qui nomme la pièce du document que cette réponse
          alimente change la nature de l'exercice : on ne remplit plus un
          champ, on construit une partie du livrable. */}
      {n >= 25 && unlock && (
        <p className="mt-2.5 flex items-start gap-2 font-sans text-[12.5px] leading-[1.55] text-chalk-55">
          <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-white/25" aria-hidden />
          <span>{unlock}</span>
        </p>
      )}
    </div>
  )
}

function ReviewScreen({
  steps,
  copy,
  answers,
  submitting,
  errorMsg,
  onEdit,
  onBack,
  onSubmit,
}: {
  steps: Question[]
  copy: Copy
  answers: Answers
  submitting: boolean
  errorMsg: string
  onEdit: (i: number) => void
  onBack: () => void
  onSubmit: () => void
}) {
  /** Les mots écrits, recomptés ici : le récapitulatif a les réponses. */
  const [signature, setSignature] = useState("")
  // Le nom doit correspondre à celui de la commande, aux espaces et aux
  // accents près : signer « ok » n'est pas signer.
  const norm = (s: string) =>
    s.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  const signed = signature.trim().length > 2 &&
    (!answers.identity.name || norm(signature).includes(norm(answers.identity.name.split(" ")[0])))

  const totalWords = Object.values(answers).reduce<number>((n, v) => {
    if (typeof v !== "string") return n
    const t = v.trim()
    return t ? n + t.split(/\s+/).length : n
  }, 0)

  const dash = copy.dash

  function summarize(step: Question): string {
    if (step.type === "identity") return `${answers.identity.name} — ${answers.identity.house}`
    if (step.type === "shorttext") return (answers[step.id] as string) || dash
    if (step.type === "textarea") {
      let v = (answers[step.id] as string) || dash
      const deep = answers[`${step.id}_deep`] as string
      if (deep) v += `\n\n${copy.deeperLabel} ${deep}`
      return v
    }
    if (step.type === "competitors") {
      const parts = answers.competitors.filter((c) => c.name).map((c) => `${c.name} : "${c.line}"`)
      return parts.join("\n") || dash
    }
    if (step.type === "links") {
      return `${copy.siteLabel} : ${answers.links.site || dash}\nLinkedIn : ${answers.links.linkedin || dash}`
    }
    if (step.type === "choice") {
      const v = answers[step.id]
      return step.multi ? (Array.isArray(v) ? v.join(", ") : "") || dash : (v as string) || dash
    }
    if (step.type === "sliders") {
      return (step.axes ?? []).map((ax) => `${ax.l}/${ax.r} : ${answers.tone[ax.id] ?? 50}`).join("\n")
    }
    if (step.type === "wordbank") {
      return `${copy.myWords} : ${answers.wordbank.mine.join(", ") || dash}\n${copy.neverMyWords} : ${
        answers.wordbank.notmine.join(", ") || dash
      }`
    }
    return dash
  }

  return (
    <div>
      <div className="kicker mb-3">{copy.beforeSending}</div>
      {/* Le moment d'arrivée.
          Trente questions méritent mieux qu'un bouton « envoyer ». Ce bloc
          dit ce qu'on vient de fournir et ce qui va en sortir — c'est la
          seule récompense possible à ce stade, et elle rappelle au passage
          ce que le client a acheté. */}
      <div className="mb-9 border-y border-hair py-8 text-center">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-brand">
          {copy.recapKicker}
        </div>
        <h2 className="mx-auto mt-5 max-w-[460px] font-serif text-[clamp(1.6rem,3.4vw,2.4rem)] font-bold uppercase leading-[1.1] tracking-[-0.005em] text-white">
          {copy.recapTitle}
        </h2>
        <p className="mx-auto mt-5 max-w-[440px] font-sans text-[14.5px] leading-[1.7] text-chalk-55">
          {copy.recapLead}
        </p>
        {/* Le compte de ce qui a été écrit.
            Trente cases cochées ne disent rien ; mille deux cents mots
            écrits à la main sur ce qu'on refuse, si. C'est la mesure de
            l'effort réel, et la seule qui donne envie d'avoir bien fait. */}
        <div className="mt-8 font-serif text-[clamp(2.4rem,6vw,3.6rem)] font-bold leading-none text-brand">
          {totalWords.toLocaleString()}
        </div>
        <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-chalk-40">
          {copy.wordsWritten}
        </div>

        <div className="mx-auto mt-9 grid max-w-[520px] grid-cols-3 gap-px bg-white/10">
          {copy.recapStats.map((s) => (
            <div key={s.l} className="bg-ink px-3 py-4">
              <div className="font-serif text-[1.5rem] font-bold leading-none text-brand">{s.v}</div>
              <div className="mt-2 font-sans text-[11.5px] leading-tight text-chalk-40">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="h-card mb-2">{copy.reviewTitle}</h2>
      <p className="body-sm mb-1">{copy.reviewNote}</p>
      <div>
        {steps.map((step, i) => (
          <div key={step.id} className="border-t border-hair py-4">
            <div className="flex items-start justify-between gap-3">
              <div className="mb-1.5 text-[11px] uppercase tracking-[0.14em] text-brand">
                {step.label}
                {step.optional ? copy.optionalSuffix : ""}
              </div>
              <button type="button" className="btn-quiet flex-shrink-0" onClick={() => onEdit(i)}>
                {copy.edit}
              </button>
            </div>
            {/* Une réponse vide se repère mal dans une liste de trente.
                Le vrai risque à ce stade n'est pas la faute de frappe :
                c'est la question passée sans s'en rendre compte. */}
            {summarize(step).trim() ? (
              <div className="whitespace-pre-wrap text-[14.5px] leading-relaxed text-chalk-75">
                {summarize(step)}
              </div>
            ) : (
              <button
                type="button"
                onClick={() => onEdit(i)}
                className="flex items-center gap-2 text-left font-sans text-[13.5px] text-brand underline decoration-brand/40 underline-offset-4"
              >
                {copy.emptyAnswer}
              </button>
            )}
          </div>
        ))}
      </div>
      {errorMsg && <p className="mt-4 text-[13px] text-brand">{errorMsg}</p>}
      <div className="mt-8 flex flex-wrap gap-4">
        {/* On signe, on n'envoie pas.
            Taper son nom est un geste, pas un clic : c'est ce qui sépare le
            dépôt d'un formulaire de l'engagement sur ce qu'on vient
            d'écrire. Et le bouton ne s'active que si le nom correspond — on
            ne signe pas à la place de quelqu'un d'autre. */}
        <div className="w-full">
          <label className="mb-2.5 block font-mono text-[9.5px] uppercase tracking-[0.2em] text-chalk-40">
            {copy.signLabel}
          </label>
          <div className="flex flex-wrap items-center gap-4">
            <input
              className="q-field max-w-[260px] font-serif text-[16px]"
              placeholder={answers.identity.name || copy.signPlaceholder}
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
            />
            <button
              type="button"
              className={signed ? "btn-primary" : "btn-quiet cursor-not-allowed opacity-45"}
              disabled={submitting || !signed}
              onClick={onSubmit}
            >
              {submitting ? copy.sending : copy.sign}
            </button>
          </div>
        </div>
        <button type="button" className="btn-ghost" onClick={onBack}>
          {copy.back}
        </button>
      </div>
    </div>
  )
}

function DoneScreen({
  copy,
  house,
  answers,
  steps,
}: {
  copy: Copy
  house?: string
  answers: Answers
  steps: Question[]
}) {
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const t = window.setTimeout(() => setShown(true), 200)
    return () => window.clearTimeout(t)
  }, [])

  /** La référence du dossier et la date, comme sur la carte de commande. */
  const ref = `${(house || "SP").toUpperCase().replace(/[^A-Z]/g, "").slice(0, 4).padEnd(3, "X")}-${new Date()
    .getFullYear()
    .toString()
    .slice(2)}`
  const due = (() => {
    const d = new Date()
    d.setDate(d.getDate() + 21)
    return d.toLocaleDateString(undefined, { day: "2-digit", month: "long", year: "numeric" })
  })()

  /**
   * Ce que le client emporte.
   *
   * Ses propres réponses, mises en page, téléchargées en un clic. Il les a
   * écrites, il les garde, il les relira — c'est la seule trace matérielle
   * de cette heure, et nous avons déjà toutes les données.
   */
  function downloadFirstPage() {
    const lines = [
      `# ${house || ""}`,
      "",
      `_Votre première page — ${ref} · ${new Date().toLocaleDateString()}_`,
      "",
      "Ce document rassemble ce que vous avez écrit de votre main.",
      "Il est le point de départ de L'Architecture Narrative.",
      "",
      "---",
      "",
    ]
    steps.forEach((s) => {
      const v = answers[s.id]
      let txt = ""
      if (typeof v === "string") txt = v.trim()
      else if (Array.isArray(v)) txt = (v as string[]).join(" · ")
      if (!txt) return
      lines.push(`## ${s.label}`, "", txt, "")
    })
    const blob = new Blob([lines.join("\n")], { type: "text/markdown;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${ref}-premiere-page.md`
    a.click()
    URL.revokeObjectURL(url)
  }

  const rev = (d: number) =>
    `transition-all duration-[900ms] ease-[cubic-bezier(.22,.68,0,1)] ${
      shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
    }`

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      {/* Le sceau.
          Quelque chose se ferme et quelque chose s'ouvre dans la même
          seconde : le questionnaire est derrière, le dossier est devant. */}
      <div className={rev(0)} style={{ transitionDelay: "0ms" }}>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-chalk-40">
          {copy.sealKicker}
        </div>
        <h2 className="mx-auto mt-7 max-w-[600px] font-serif text-[clamp(1.9rem,5vw,3.2rem)] font-bold uppercase leading-[1.05] tracking-[-0.015em] text-white">
          {copy.sealTitle(ref)}
        </h2>
      </div>

      <div
        className="mx-auto mt-10 h-px bg-brand transition-all duration-[1100ms] ease-out"
        style={{ width: shown ? 120 : 0, transitionDelay: "500ms" }}
      />

      <div className={rev(1)} style={{ transitionDelay: "800ms" }}>
        <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.22em] text-chalk-40">
          {copy.sealDueLabel}
        </p>
        <p className="mt-3 font-serif text-[clamp(1.3rem,3vw,1.9rem)] font-bold text-brand">{due}</p>
        <p className="mx-auto mt-10 max-w-[430px] font-sans text-[14.5px] leading-[1.75] text-chalk-55">
          {copy.sealLead}
        </p>
        <button type="button" className="btn-ghost mt-9" onClick={downloadFirstPage}>
          {copy.sealDownload}
        </button>
      </div>
    </div>
  )
}

/**
 * TerrainMark — le pictogramme de chaque terrain.
 *
 * Dessiné en SVG plutôt qu'en emoji : l'emoji change de rendu selon le
 * système et casse la charte. Chaque signe dit la nature du terrain sans
 * illustration littérale — on reste dans le vocabulaire graphique du site.
 */
function TerrainMark({ k, on }: { k: string; on: boolean }) {
  const s = on ? "var(--color-brand)" : "rgba(255,255,255,0.35)"
  const common = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", stroke: s, strokeWidth: 1.4 }
  return (
    <span className="flex-shrink-0 transition-colors" aria-hidden>
      {k === "marques" && (
        <svg {...common}>
          {/* Un bloc plein : l'entreprise comme masse. */}
          <rect x="3" y="7" width="18" height="12" />
          <path d="M3 11h18M9 7V4h6v3" />
        </svg>
      )}
      {k === "produits" && (
        <svg {...common}>
          {/* Une boîte en perspective : l'objet fabriqué. */}
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
          <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
        </svg>
      )}
      {k === "lieux" && (
        <svg {...common}>
          {/* Une porte ouverte : on entre dans un lieu. */}
          <path d="M5 21V4h9v17" />
          <path d="M14 8l5-2v15l-5-2" />
          <circle cx="11.5" cy="12.5" r="0.9" fill={s} stroke="none" />
        </svg>
      )}
      {k === "artistes" && (
        <svg {...common}>
          {/* Un trait de signature : le nom propre. */}
          <path d="M3 16c3-1 4-9 6.5-9S12 16 14 16s2.5-4 4-4 2 2 3 2" strokeLinecap="round" />
          <path d="M3 20h18" opacity="0.4" />
        </svg>
      )}
    </span>
  )
}


/**
 * ChapterScreen — l'ouverture d'une section.
 *
 * Il ne demande rien : c'est une respiration. Sur trente questions, ces
 * quatre ou cinq pauses sont ce qui empêche l'abandon — elles disent où
 * l'on en est, ce qu'on va chercher, et combien de temps ça prend.
 */
function ChapterScreen({
  tag,
  n,
  total,
  count,
  copy,
  pieces,
  onStart,
}: {
  tag: string
  n: number
  total: number
  count: number
  copy: Copy
  pieces?: { n: string; t: string; pct: number }[]
  onStart: () => void
}) {
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(true))
    return () => cancelAnimationFrame(id)
  }, [])
  const note = copy.chapterNotes[tag] ?? copy.chapterFallback
  const quote = copy.chapterQuotes[tag]
  return (
    // Un moment, pas un bloc dans la page.
    //
    // Le chapitre s'affichait entre deux questions comme une carte de plus :
    // on le lisait en diagonale et on cliquait. En occupant tout l'écran,
    // avec un trait qui se trace et un titre qui monte, il redevient une
    // pause — le seul moment du parcours où l'on ne demande rien.
    <div className="flex min-h-[72vh] flex-col items-center justify-center py-10 text-center">
      <div
        className={`font-mono text-[10.5px] uppercase tracking-[0.3em] text-chalk-40 transition-all duration-[600ms] ${
          shown ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        {copy.chapterOf(n, total)}
      </div>

      <h2
        className={`mx-auto mt-8 max-w-[640px] font-serif text-[clamp(2.4rem,6.5vw,4.2rem)] font-bold uppercase leading-[0.98] tracking-[-0.015em] text-white transition-all duration-[900ms] ease-[cubic-bezier(.22,.68,0,1)] ${
          shown ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
        style={{ transitionDelay: "140ms" }}
      >
        {tag}
      </h2>

      {/* Le trait se trace plutôt que d'apparaître : c'est ce geste, plus
          que le texte, qui fait sentir qu'une étape s'ouvre. */}
      <div
        className="mx-auto mt-9 h-px bg-brand transition-all duration-[900ms] ease-out"
        style={{ width: shown ? 96 : 0, transitionDelay: "420ms" }}
      />

      {/* La citation du livre.
          Chacune est choisie pour l'état d'esprit qu'il faut avoir pour
          répondre à la section qui suit — celle de « Fondation » dit que la
          maison est ce qu'elle refuse, ce qu'on s'apprête justement à
          demander. Elle arrive avant la note : on lit d'abord une idée,
          ensuite une consigne. */}
      {quote && (
        <figure
          className={`mx-auto mt-10 max-w-[560px] transition-all duration-[800ms] ${
            shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: "560ms" }}
        >
          <blockquote className="m-0 border-l-2 border-brand pl-5 text-left font-serif text-[clamp(1rem,2vw,1.2rem)] leading-[1.6] text-white">
            {quote}
          </blockquote>
          <figcaption className="mt-3 pl-5 text-left font-mono text-[9.5px] uppercase tracking-[0.22em] text-chalk-40">
            {copy.quoteSource}
          </figcaption>
        </figure>
      )}

      <p
        className={`mx-auto mt-9 max-w-[460px] font-sans text-[15.5px] leading-[1.8] text-chalk-75 transition-all duration-[800ms] ${
          shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
        style={{ transitionDelay: "740ms" }}
      >
        {note}
      </p>

      <div
        className={`mt-10 transition-all duration-[700ms] ${shown ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: "900ms" }}
      >
        {/* L'objet qu'on est en train de fabriquer.
            Les six barres vivaient sous chaque question, où elles
            encombraient la lecture. Ici, sur le seul écran qui ne demande
            rien, elles font ce pour quoi elles existent : montrer que le
            document se remplit. */}
        {pieces && (
          <div className="mx-auto mb-9 grid max-w-[360px] grid-cols-6 gap-2">
            {pieces.map((pc) => (
              <div key={pc.n} title={pc.t}>
                <div className="h-[3px] overflow-hidden rounded-full bg-white/[0.08]">
                  <div
                    className="h-full rounded-full bg-brand transition-all duration-[1200ms] ease-out"
                    style={{ width: `${pc.pct}%` }}
                  />
                </div>
                <div
                  className={`mt-2 font-mono text-[8.5px] tracking-[0.1em] transition-colors ${
                    pc.pct >= 100 ? "text-brand" : "text-chalk-40"
                  }`}
                >
                  {pc.n}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mb-7 font-mono text-[10px] uppercase tracking-[0.24em] text-chalk-40">
          {copy.chapterCount(count)}
        </div>
        <button type="button" className="btn-primary" onClick={onStart}>
          {copy.continue}
        </button>
      </div>
    </div>
  )
}


/**
 * ThresholdScreen — le seuil.
 *
 * Ce n'est pas un écran d'accueil, c'est une porte. Rien à remplir, rien à
 * choisir : une question, et un engagement pris volontairement.
 *
 * Un rituel d'entrée coûte trois secondes et change la nature de ce qui
 * suit. Quelqu'un qui a répondu « je suis prêt » à « êtes-vous prêt à
 * écrire ce que vous refusez » n'abandonne pas à la douzième question de
 * la même façon que quelqu'un qui a cliqué sur « commencer ».
 */
function ThresholdScreen({
  copy,
  identity,
  onEnter,
}: {
  copy: Copy
  identity: IdentityAnswers
  onEnter: () => void
}) {
  const [stage, setStage] = useState(0)
  useEffect(() => {
    // Lent, délibérément. Chaque ligne a le temps d'être lue avant que la
    // suivante n'arrive — c'est ce rythme, plus que le texte, qui installe
    // le sérieux du moment.
    const t = [900, 2100, 3600, 5200].map((ms, i) => window.setTimeout(() => setStage(i + 1), ms))
    return () => t.forEach(window.clearTimeout)
  }, [])

  const rev = (i: number) =>
    `transition-all duration-[1100ms] ease-[cubic-bezier(.22,.68,0,1)] ${
      stage > i ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
    }`

  const first = identity.name ? identity.name.split(" ")[0] : ""

  return (
    <div className="flex min-h-[78vh] flex-col items-center justify-center text-center">
      {first && (
        <p className={`font-serif text-[clamp(1.2rem,2.6vw,1.7rem)] text-chalk-75 ${rev(0)}`}>{first}.</p>
      )}

      {identity.house && (
        <p
          className={`mt-6 font-serif text-[clamp(2rem,6vw,3.6rem)] font-bold uppercase leading-[0.95] tracking-[-0.02em] text-brand ${rev(1)}`}
        >
          {identity.house}
        </p>
      )}

      <p
        className={`mx-auto mt-12 max-w-[420px] font-sans text-[14.5px] leading-[1.8] text-chalk-55 ${rev(2)}`}
      >
        {copy.thresholdLead}
      </p>

      <div className={`mt-14 ${rev(3)}`}>
        <p className="mx-auto mb-8 max-w-[440px] font-serif text-[clamp(1.3rem,3.2vw,1.9rem)] font-bold uppercase leading-[1.15] tracking-[-0.005em] text-white">
          {copy.thresholdQuestion}
        </p>
        <button type="button" className="btn-primary" onClick={onEnter}>
          {copy.thresholdCta}
        </button>
      </div>
    </div>
  )
}
