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
type LinksAnswers = { site: string; linkedin: string; content: string; extra?: string[] }
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
    chapterTitles: {
      fondations: "Les fondations",
      champ: "Le champ",
      voix: "La voix",
      audience: "L'audience",
      quotidien: "Le quotidien",
      deploiement: "Le déploiement",
      preuve: "La preuve",
    } as Record<string, string>,
    // Pourquoi ce chapitre existe — ce qu'il fabrique dans le document.
    chapterNotes: {
      fondations: "Tout le document repose sur ces quatre réponses : qui vous êtes, ce que vous croyez, ce qui vous a fait naître, ce que vous refusez. Ce sont elles qui rendent la plateforme impossible à copier. Aucune agence, aucune IA ne peut les deviner à votre place — et on ne les écrit qu'une fois.",
      champ: "Une position ne vaut que face aux autres. Pour trouver ce que vous seul pouvez dire, il faut savoir ce que vos concurrents disent déjà, mot pour mot. Vos réponses fabriquent le diagnostic et la carte du champ : plus vous êtes précis, plus la carte est tranchante.",
      voix: "Deux maisons peuvent dire la même chose sans se ressembler : tout tient à la voix. Ces questions fixent votre personnalité, votre ton et vos interdits. Elles deviennent le lexique et les règles que vos équipes — et vos outils d'IA — appliqueront.",
      audience: "On n'écrit pas pour tout le monde. Ces questions décrivent la personne précise qui doit vous choisir, ce qui la retient, et celle dont vous ne voulez pas. Elles décident à qui le document parle et ce qu'il doit dire pour la convaincre.",
      quotidien: "Un document qui n'est pas appliqué le lundi matin ne sert à rien. Ces questions décrivent comment vous vendez, à quel prix, comment vous vous exprimez au quotidien et qui vous recrutez. Elles deviennent les playbooks de vos équipes.",
      deploiement: "Les mots d'abord, l'image ensuite. Ces trois questions disent où le document doit servir en premier et à quoi la maison doit ressembler. Elles fixent l'ordre des décisions et le brief remis à votre designer.",
      preuve: "Un récit sans preuve ne tient pas. Dernier chapitre : ce qui vous rend crédible, ce que vous visez, et l'accès à vos supports. C'est de là que part le dépouillement de votre site, de vos avis et de vos réseaux.",
    } as Record<string, string>,
    chapterFeeds: {
      fondations: "Nourrit la pièce 01 — La plateforme",
      champ: "Nourrit les pièces 02 et 03 — Le diagnostic, La carte",
      voix: "Nourrit la pièce 06 — Le langage",
      audience: "Nourrit les pièces 02 et 05 — Le diagnostic, Les playbooks",
      quotidien: "Nourrit la pièce 05 — Les playbooks",
      deploiement: "Nourrit la pièce 04 — Les décisions",
      preuve: "Nourrit les pièces 02 et 03 — Le dépouillement",
    } as Record<string, string>,
    saved: "Enregistré",
    resumeKicker: "Vous aviez commencé",
    resumeLead: (n: number, t: number) => `Vos réponses sont là, vous étiez à la question ${n} sur ${t}.`,
    resumeCta: "Reprendre",
    houseOverline: "On va écrire",
    thresholdKicker: "Strawberry Production · Onboarding",
    thresholdTitle: "Votre architecture narrative commence ici.",
    thresholdLead: "Les questions qui suivent sont la matière première de votre document : plus vos réponses sont précises, plus il sera juste. Prenez le temps qu'il faut — tout est enregistré au fil de l'eau.",
    thresholdCta: "Commencer",
    bareNote: "Prenez le temps. Personne ne vous regarde.",
    signLabel: "Signez pour ouvrir le dossier",
    signPlaceholder: "Votre prénom",
    sign: "Signer et ouvrir le dossier",
    sealKicker: "C'est signé",
    sealPieces: ["La plateforme", "Le diagnostic", "La carte", "Les décisions", "Les playbooks", "Le langage"],
    sealTitle: (r: string) => `Le dossier ${r} est ouvert.`,
    sealDueLabel: "Document livré au plus tard le",
    locale: "fr-FR",
    sealLead: "Vous n'avez plus rien à faire. Vous n'entendrez plus parler de nous jusqu'au jour 15 — c'est voulu.",
    sealDownload: "Emporter votre première page ↓",
    sealRefLabel: "Votre référence",
    nextTitle: "Ce qui se passe maintenant",
    nextSteps: (d15: string, d20: string, d21: string) => [
      { when: "Demain", what: "Le dépouillement commence : vos supports, ceux de vos concurrents, vos avis clients, vos pages." },
      { when: `Jour 15 · ${d15}`, what: "Le document vous est remis." },
      { when: `Jour 20 · ${d20}`, what: "Une heure de relecture ensemble, puis deux tours de révision." },
      { when: `Jour 21 · ${d21}`, what: "Livraison finale, au plus tard. Passé ce délai, vous êtes remboursé et le document vous reste." },
    ],
    backToSite: "Retour au site",

    mirrorPositioning: "C'est la phrase que nous allons tester, mot pour mot, contre celles de vos concurrents.",
    mirrorDeploy: "C'est ce refus qui décidera de l'ordre des mouvements. Dites-nous où il doit se voir en premier.",
    mirrorPortrait: "Ce moment-là deviendra le récit fondateur. Le portrait qui suit lui donnera sa voix.",


    piecesLabel: "Le document, pièce par pièce",
    quoteSource: "La Doctrine la plus claire",
    chapterQuotes: {
      fondations: "Une maison n'est plus ce qu'elle fabrique. Une maison est ce qu'elle refuse — et le marché n'a jamais rien lu plus clairement.",
      champ: "Sur un marché où tout le monde a accès à la même machine, le meilleur produit ne gagne plus. C'est la doctrine la plus claire qui gagne.",
      voix: "Une doctrine est la chose sous les histoires — l'ensemble fixe de convictions qui rend chaque expression d'une maison reconnaissable, cohérente, et impossible à confondre avec celle de quiconque, quel que soit celui — ou ce — qui en a produit la surface.",
      audience: "Ce que les gens croient de vous avant de vous avoir touché.",
      deploiement: "La perception est la structure de croyance qu'un marché tient sur une maison avant le contact, et qui détermine ce que chaque contact ultérieur a le droit de signifier.",
      preuve: "Rien, dans un marché, n'est expérimenté. Tout est interprété — et l'interprétation arrive avant vous.",
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
    statMinutes: "minutes",
    statQuestions: "questions",
    statSaved: "Enregistré en continu",
    chooseFirst: "Choisissez d'abord ce que vous vendez",
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
    linkExtra: "Un autre lien utile",
    phExtra: "Fiche Google, Instagram, TikTok, presse, avis, dossier partagé…",
    addLink: "+ Ajouter un lien",
    removeLink: "Retirer ce lien",
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
    chapterTitles: {
      fondations: "The foundations",
      champ: "The field",
      voix: "The voice",
      audience: "The audience",
      quotidien: "Day to day",
      deploiement: "Deployment",
      preuve: "The proof",
    } as Record<string, string>,
    chapterNotes: {
      fondations: "The whole document rests on these four answers: who you are, what you believe, what made you, what you refuse. They are what makes the platform impossible to copy. No agency and no AI can guess them for you — and you only write them once.",
      champ: "A position only means something against others. To find what only you can say, you need to know what your competitors already say, word for word. Your answers build the diagnosis and the map of the field: the more precise you are, the sharper the map.",
      voix: "Two houses can say the same thing and not look alike: it all comes down to voice. These questions fix your personality, your tone and your off-limits. They become the lexicon and the rules your teams — and your AI tools — will apply.",
      audience: "You do not write for everyone. These questions describe the precise person who must choose you, what holds them back, and the one you do not want. They decide who the document speaks to and what it must say to win them.",
      quotidien: "A document that is not applied on Monday morning is worth nothing. These questions describe how you sell, at what price, how you express yourself day to day and who you hire. They become your teams' playbooks.",
      deploiement: "Words first, image second. These three questions say where the document must work first and what the house should look like. They set the order of the decisions and the brief handed to your designer.",
      preuve: "A story without proof does not hold. Final chapter: what makes you credible, what you aim for, and access to your materials. This is where the review of your site, your reviews and your social pages starts.",
    } as Record<string, string>,
    chapterFeeds: {
      fondations: "Feeds piece 01 — The platform",
      champ: "Feeds pieces 02 and 03 — The diagnosis, The map",
      voix: "Feeds piece 06 — The language",
      audience: "Feeds pieces 02 and 05 — The diagnosis, The playbooks",
      quotidien: "Feeds piece 05 — The playbooks",
      deploiement: "Feeds piece 04 — The decisions",
      preuve: "Feeds pieces 02 and 03 — The review",
    } as Record<string, string>,
    saved: "Saved",
    resumeKicker: "You had started",
    resumeLead: (n: number, t: number) => `Your answers are here, you were on question ${n} of ${t}.`,
    resumeCta: "Resume",
    houseOverline: "We are going to write",
    thresholdKicker: "Strawberry Production · Onboarding",
    thresholdTitle: "Your narrative architecture starts here.",
    thresholdLead: "The questions that follow are the raw material of your document: the more precise your answers, the more accurate it will be. Take the time you need — everything is saved as you go.",
    thresholdCta: "Begin",
    bareNote: "Take your time. Nobody is watching.",
    signLabel: "Sign to open the file",
    signPlaceholder: "Your first name",
    sign: "Sign and open the file",
    sealKicker: "Signed",
    sealPieces: ["The platform", "The diagnosis", "The map", "The decisions", "The playbooks", "The language"],
    sealTitle: (r: string) => `File ${r} is open.`,
    sealDueLabel: "Document delivered by",
    locale: "en-GB",
    sealLead: "There is nothing left for you to do. You will not hear from us until day 15 — that is deliberate.",
    sealDownload: "Take your first page ↓",
    sealRefLabel: "Your reference",
    nextTitle: "What happens now",
    nextSteps: (d15: string, d20: string, d21: string) => [
      { when: "Tomorrow", what: "The review begins: your materials, your competitors', your customer reviews, your pages." },
      { when: `Day 15 · ${d15}`, what: "The document is handed to you." },
      { when: `Day 20 · ${d20}`, what: "One hour of review together, then two rounds of revisions." },
      { when: `Day 21 · ${d21}`, what: "Final delivery, at the latest. Past that date, you are refunded and keep the document." },
    ],
    backToSite: "Back to the site",

    mirrorPositioning: "This is the sentence we will test, word for word, against your competitors'.",
    mirrorDeploy: "This refusal will decide the order of the moves. Tell us where it must show first.",
    mirrorPortrait: "That moment will become the origin story. The portrait below will give it a voice.",


    piecesLabel: "The document, piece by piece",
    quoteSource: "The Clearest Doctrine",
    chapterQuotes: {
      fondations: "A house is no longer what it makes. A house is what it refuses — and the market has never read anything more clearly.",
      champ: "In a market where everyone has the same machine, the best product no longer wins. The clearest doctrine wins.",
      voix: "A doctrine is the thing beneath the stories — the fixed set of convictions that makes every expression of a house recognisable, coherent, and impossible to confuse with anyone else's, whoever — or whatever — produced the surface.",
      audience: "What people believe about you before they have touched you.",
      deploiement: "Perception is the belief structure a market holds about a house before contact, and which determines what every later contact is allowed to mean.",
      preuve: "Nothing in a market is experienced. Everything is interpreted — and the interpretation arrives before you do.",
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
      "Most houses your size will never write what you are about to write. They will keep borrowing their sector's words, and keep wondering why they are compared on price.\n\nWhat follows is the one part nobody can do in your place. Write the way you would speak to someone who already understands. There are no wrong answers — only honest ones and dishonest ones.",
    minutesArchitecture: "45 to 70",
    minutesAudit: "50 to 60",
    aboutMinutes: (m: string, n: number, optional: boolean) =>
      `About ${m} minutes · ${n} questions${optional ? " (a few are optional)" : ""}`,
    resumeNote:
      "You can close this tab at any time: everything is saved, and you will pick up exactly where you left off.",
    prefilled: "Already filled in for you",
    start: "Begin →",
    statMinutes: "minutes",
    statQuestions: "questions",
    statSaved: "Saved as you go",
    chooseFirst: "First, choose what you sell",
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
    linkExtra: "Another useful link",
    phExtra: "Google listing, Instagram, TikTok, press, reviews, shared folder…",
    addLink: "+ Add a link",
    removeLink: "Remove this link",
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
  // « v2 » : l'ordre des questions a changé avec les sept chapitres. Un
  // brouillon enregistré avant pointerait sur la mauvaise question à la
  // reprise — on repart d'une clé neuve plutôt que de mélanger les deux.
  return `sp_questionnaire:v2:${offer}:${terrain ?? "all"}:${email.trim().toLowerCase() || "anon"}`
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
  const [refId, setRefId] = useState<string | undefined>(undefined)
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
      const key = s.chapter ?? ""
      const last = out[out.length - 1]
      if (last && last.tag === key) last.count += 1
      else out.push({ tag: key, start: i, count: 1 })
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
    // Quelle pièce se nourrit de quel chapitre — voir `chapterFeeds`.
    const FEEDS: Record<string, string[]> = {
      fondations: ["01"], champ: ["02", "03"], voix: ["06"], audience: ["02", "05"],
      quotidien: ["05"], deploiement: ["04"], preuve: ["02", "03"],
    }
    const defs = [
      { n: "01", t: "La plateforme" }, { n: "02", t: "Le diagnostic" },
      { n: "03", t: "La carte" }, { n: "04", t: "Les décisions" },
      { n: "05", t: "Les playbooks" }, { n: "06", t: "Le langage" },
    ]
    return defs.map((d) => {
      const qs = steps.filter((s) => (FEEDS[s.chapter ?? ""] ?? []).includes(d.n))
      if (qs.length === 0) return { ...d, pct: 0 }
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
      if (typeof data.submission_id === "string") setRefId(data.submission_id)
      try {
        localStorage.removeItem(storageKey(offer, answers.identity.email, chosenTerrain))
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
    // Le cadre à coins rouges — bracket-tl/bracket-br — vient du tout premier
    // patch de ce composant, avant toute la refonte en plein écran. Il n'a
    // jamais été retiré : chaque passe suivante a changé ce qu'il y avait
    // DANS la carte, sans remarquer que la carte elle-même contredisait
    // l'idée. Ce motif reste juste sur les couvertures et les fac-similés
    // de document ailleurs sur le site — il dit « ceci est un objet
    // imprimé ». Ici, on veut l'inverse : un espace ouvert où l'on écrit,
    // pas un document qu'on regarde de l'extérieur.
    <div className="relative">
      {screen === "cover" && <div className="glow-top" aria-hidden="true" />}
      <div className="relative px-gutter py-10 sm:py-14">
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
            chosenTerrain={chosenTerrain}
            onChooseTerrain={setChosenTerrain}
            // Le premier chapitre a son écran, comme les autres : c'est
            // lui qui explique pourquoi les premières questions comptent.
            // Il n'apparaissait jamais — on passait de la couverture
            // directement à la question 1.
            onStart={() => {
              setSeenChapters((prev) => (prev.includes(0) ? prev : [...prev, 0]))
              setScreen("chapter")
            }}
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
            refId={refId}
            lang={lang}
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
  chosenTerrain,
  onChooseTerrain,
  onStart,
}: {
  offer: OfferKey
  copy: Copy
  stepCount: number
  chosenTerrain?: TerrainKey
  onChooseTerrain: (t: TerrainKey) => void
  onStart: () => void
}) {
  const isArchitecture = offer === "architecture"
  const minutes = (isArchitecture ? copy.minutesArchitecture : copy.minutesAudit).replace(/\s*(à|to)\s*/i, "–")

  // Deux pages, au niveau du seuil : titre géant qui se remplit, lueur
  // qui respire, centrage vertical. Elles étaient plates — un paragraphe
  // gris collé en haut, une moitié d'écran vide, des boîtes à peine
  // visibles.
  const [page, setPage] = useState(0)
  const [first, ...rest] = copy.coverLede.split("\n\n")
  const second = rest.join("\n\n")
  const at = (ms: number) => ({ animationDelay: `${ms}ms` })
  const balance = { textWrap: "balance" } as React.CSSProperties

  if (page === 0) {
    return (
      <div key="p0" className="relative isolate flex min-h-[82vh] flex-col items-center justify-center text-center">
        <BreatheGlow />
        <div className="q-rise font-mono text-[10.5px] uppercase tracking-[0.3em] text-chalk-40" style={at(150)}>
          {copy.kicker}
        </div>
        <h1
          className="mx-auto mt-9 max-w-[15ch] font-serif text-[clamp(2.4rem,7vw,5.4rem)] font-bold uppercase leading-[0.98] tracking-[-0.02em] text-white"
          style={balance}
        >
          <InkWords text={copy.coverTitle} keyRe={/quelque chose|something/i} delay={350} step={90} />
        </h1>
        <p className="q-rise mx-auto mt-9 max-w-[500px] font-sans text-[16px] leading-[1.75] text-chalk-75" style={at(1500)}>
          {first}
        </p>
        <div className="q-rise mt-12" style={at(1900)}>
          <button type="button" className="btn-primary" onClick={() => setPage(1)} autoFocus>
            {copy.continue}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div key="p1" className="relative isolate mx-auto flex min-h-[82vh] w-full max-w-[1040px] flex-col items-center justify-center py-12 text-center">
      <BreatheGlow />
      <button
        type="button"
        onClick={() => setPage(0)}
        aria-label={copy.back}
        className="q-rise absolute left-0 top-2 text-[13px] text-chalk-40 transition-colors hover:text-white"
        style={at(0)}
      >
        ← {copy.back}
      </button>

      <h2
        className="mx-auto max-w-[19ch] font-serif text-[clamp(1.7rem,4.6vw,3.3rem)] font-bold uppercase leading-[1.02] tracking-[-0.018em] text-white"
        style={balance}
      >
        <InkWords text={`${copy.terrainLabel}…`} keyRe={/architecture/i} delay={100} step={70} />
      </h2>
      <p className="q-rise mx-auto mt-5 max-w-[520px] font-sans text-[14.5px] leading-[1.7] text-chalk-55" style={at(900)}>
        {copy.terrainHelp}
      </p>

      {/* Le choix du terrain : quatre grandes cartes sur une ligne. Sans
          lui, le parcours retombait sur « marques » et un restaurateur se
          voyait demander la tagline de ses concurrents ; il est donc
          bloquant. */}
      <div className="mt-10 grid w-full grid-cols-2 gap-3.5 md:grid-cols-4">
        {copy.terrains.map((t, i) => {
          const on = chosenTerrain === t.k
          return (
            <button
              key={t.k}
              type="button"
              onClick={() => onChooseTerrain(t.k as TerrainKey)}
              aria-pressed={on}
              className={`q-rise relative flex min-h-[214px] flex-col gap-8 overflow-hidden rounded-[18px] border p-5 text-left transition-all duration-300 ${
                on ? "-translate-y-1 border-brand" : "border-white/[0.09] hover:-translate-y-1 hover:border-white/25"
              }`}
              style={{
                background: CARD_GLOWS[i % CARD_GLOWS.length],
                animationDelay: `${1000 + i * 110}ms`,
                boxShadow: on ? "0 0 0 1px rgba(255,34,51,.55), 0 22px 60px -20px rgba(255,34,51,.6)" : "none",
              }}
            >
              <span className="flex items-start justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
                    on ? "border-brand/60 bg-brand/10" : "border-white/10"
                  }`}
                >
                  <TerrainMark k={t.k} on={on} size={24} />
                </span>
                <span
                  aria-hidden
                  className={`flex h-5 w-5 items-center justify-center rounded-full border text-[11px] font-bold leading-none transition-colors ${
                    on ? "border-brand bg-brand text-ink" : "border-white/25"
                  }`}
                >
                  {on && "✓"}
                </span>
              </span>
              <span>
                <span className={`block font-serif text-[1.15rem] font-bold leading-[1.2] ${on ? "text-white" : "text-white/90"}`}>{t.t}</span>
                <span className="mt-2 block font-sans text-[12.5px] leading-[1.5] text-chalk-55">{t.d}</span>
              </span>
            </button>
          )
        })}
      </div>

      {/* Ce que ça demande : trois chiffres, pas une phrase. */}
      <div className="q-rise mt-10 grid w-full max-w-[620px] grid-cols-3 divide-x divide-white/10 border-y border-white/10" style={at(1600)}>
        {[
          { v: minutes, l: copy.statMinutes },
          { v: String(stepCount), l: copy.statQuestions },
          { v: "✓", l: copy.statSaved },
        ].map((s) => (
          <div key={s.l} className="px-3 py-4">
            <div className="font-serif text-[1.7rem] font-bold leading-none text-brand">{s.v}</div>
            <div className="mt-2 font-mono text-[9.5px] uppercase tracking-[0.2em] text-chalk-40">{s.l}</div>
          </div>
        ))}
      </div>

      {second && (
        <blockquote
          className="q-rise mx-auto mt-9 max-w-[560px] border-l-2 border-brand pl-5 text-left font-serif text-[15px] leading-[1.7] text-chalk-75"
          style={at(1800)}
        >
          {second}
        </blockquote>
      )}

      <div className="q-rise mt-9 flex flex-col items-center gap-3" style={at(2000)}>
        <button
          type="button"
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-35"
          onClick={onStart}
          disabled={!chosenTerrain}
        >
          {copy.start}
        </button>
        {!chosenTerrain && (
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-chalk-40">{copy.chooseFirst}</span>
        )}
      </div>
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
  // Les trois questions fondatrices : plein silence, ni titre ni minuteur.
  const bare = ["conviction", "rupture", "enemy"].includes(step.id)

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
            {copy.chapterTitles[step.chapter ?? ""] ?? step.tag ?? ""} — {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
          </span>
        </div>
      )}

      {step.optional && (
        <div className="mb-4">
          <span className="tag border-brand-hair text-brand">{copy.optional}</span>
        </div>
      )}

      {/* La question se remplit mot à mot — le même geste que le texte
          qui se colore au défilement dans le diagnostic de la home. Clé
          sur l'index : le remplissage se rejoue à chaque question. */}
      <FillQuestion key={index} text={step.label} />
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
        className={`q-rise w-full ${step.type === "choice" ? "max-w-[1040px]" : "max-w-[600px]"}`}
        style={{ animationDelay: "1400ms" }}
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

        {/* Autant de liens supplémentaires qu'on veut (dix au plus) : fiche
            Google, Instagram, TikTok, presse, avis, dossier partagé… Chaque
            lien de plus est une source de plus pour le dépouillement. */}
        {(v.extra ?? []).map((url, i) => (
          <div key={i}>
            <label className="field-label">{copy.linkExtra} {i + 1}</label>
            <div className="flex items-end gap-3">
              <input
                className="q-field"
                value={url}
                onChange={(e) => {
                  const next = [...(v.extra ?? [])]
                  next[i] = e.target.value
                  set({ extra: next })
                }}
                placeholder={copy.phExtra}
              />
              <button
                type="button"
                aria-label={copy.removeLink}
                className="btn-quiet flex-shrink-0 pb-2"
                onClick={() => set({ extra: (v.extra ?? []).filter((_, j) => j !== i) })}
              >
                ×
              </button>
            </div>
          </div>
        ))}
        {(v.extra ?? []).length < 10 && (
          <button type="button" className="btn-quiet mt-1" onClick={() => set({ extra: [...(v.extra ?? []), ""] })}>
            {copy.addLink}
          </button>
        )}
      </div>
    )
  }

  if (step.type === "choice") {
    const sel = answers[step.id]
    const options = step.options ?? []
    return (
      <div>
        {/* Les choix en cartes, tous visibles d'un coup — la grammaire de
            la méthode S.T.R.A.W. de la home (numéro, dégradé propre à
            chaque carte, coins arrondis). Elles étaient d'abord sur une
            piste à faire glisser : trois cartes visibles, les autres
            cachées derrière un défilement horizontal que rien n'annonçait.
            Une grille se lit d'un regard. */}
        <div className="q-choice" style={{ "--cols": choiceCols(options.length) } as React.CSSProperties}>
          {options.map((opt, i) => {
            const on = step.multi ? Array.isArray(sel) && (sel as string[]).includes(opt) : sel === opt
            return (
              <button
                key={opt}
                type="button"
                data-option
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
                aria-pressed={on}
                className={`q-card relative flex flex-col gap-7 overflow-hidden rounded-[18px] border text-left ${choiceCols(options.length) >= 5 ? "p-5" : "p-6"} transition-[border-color,transform] duration-300 ${
                  on ? "border-brand" : "border-white/[0.08] hover:-translate-y-1 hover:border-white/20"
                }`}
                style={{ background: CARD_GLOWS[i % CARD_GLOWS.length] }}
              >
                <span className="flex items-start justify-between">
                  <span className="font-mono text-[11px] tracking-[0.24em] text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* La coche : carré pour le multiple, rond pour l'unique —
                      la forme dit la règle avant la consigne. */}
                  <span
                    aria-hidden
                    className={`flex h-5 w-5 items-center justify-center border transition-colors ${
                      step.multi ? "rounded-[4px]" : "rounded-full"
                    } ${on ? "border-brand bg-brand text-ink" : "border-white/25"}`}
                  >
                    {on && <span className="text-[11px] font-bold leading-none">✓</span>}
                  </span>
                </span>
                <span>
                  <span className={`block font-serif font-bold leading-[1.2] ${choiceCols(options.length) >= 5 ? "text-[1.02rem]" : "text-[1.2rem]"} ${on ? "text-white" : "text-white/85"}`}>
                    {opt}
                  </span>
                  {/* Ce que l'option veut dire — pour les archétypes, par
                      exemple, dont le nom seul ne dit rien à qui n'a pas
                      lu Jung. */}
                  {step.hints?.[i] && (
                    <span className="mt-2.5 block font-sans text-[13px] leading-[1.5] text-chalk-55">{step.hints[i]}</span>
                  )}
                </span>
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
      // Cinq jauges, chacune un instrument de mesure : onze barres entre
      // deux pôles. Le curseur natif du navigateur donnait une barre
      // rouge épaisse et un gros rond — le look « réglage de volume » de
      // n'importe quel formulaire. Ici on voit la position d'un coup
      // d'œil, et le pôle vers lequel on penche s'allume.
      <div className="divide-y divide-hair">
        {(step.axes ?? []).map((ax) => (
          <ToneGauge
            key={ax.id}
            left={ax.l}
            right={ax.r}
            value={tone[ax.id] ?? 50}
            onChange={(v) => onChange("tone", { ...tone, [ax.id]: v })}
          />
        ))}
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
      return [`${copy.siteLabel} : ${answers.links.site || dash}`, `LinkedIn : ${answers.links.linkedin || dash}`, ...(answers.links.extra ?? []).filter((u) => u.trim()).map((u, i) => `${copy.linkExtra} ${i + 1} : ${u}`)].join("\n")
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
  refId,
  lang,
}: {
  copy: Copy
  house?: string
  answers: Answers
  steps: Question[]
  /** La référence renvoyée par le serveur — la même que dans Make et l'e-mail. */
  refId?: string
  lang: Lang
}) {
  // La page de fin tient en animations CSS : si un script tardait, elle
  // resterait lisible. (La version précédente restait invisible tant
  // qu'un minuteur n'avait pas tourné.)
  const at = (ms: number) => ({ animationDelay: `${ms}ms` })

  // La référence du dossier : celle du serveur quand on l'a (c'est elle
  // qu'on retrouvera dans Make et dans l'e-mail), sinon une référence
  // locale de repli.
  const ref =
    refId ||
    `${(house || "SP").toUpperCase().replace(/[^A-Z]/g, "").slice(0, 4).padEnd(3, "X")}-${new Date()
      .getFullYear()
      .toString()
      .slice(2)}`

  // Les dates, dans la langue du site — pas celle du navigateur : un site
  // en français ne doit pas afficher « October 23 ».
  const day = (n: number, year = false) => {
    const d = new Date()
    d.setDate(d.getDate() + n)
    return d.toLocaleDateString(copy.locale, { day: "numeric", month: "long", ...(year ? { year: "numeric" } : {}) })
  }
  const due = day(21, true)
  const timeline = copy.nextSteps(day(15), day(20), day(21))

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
      `_Votre première page — ${ref} · ${new Date().toLocaleDateString(copy.locale)}_`,
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

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center py-8 text-center">
      {/* Le document qui s'assemble : les six pièces arrivent l'une après
          l'autre et s'empilent en éventail. */}
      <div aria-hidden className="relative mb-12 h-[150px] w-[220px]">
        {copy.sealPieces.map((label, i) => {
          const angle = (i - 2.5) * 5
          return (
            <div
              key={label}
              className="q-deal absolute inset-0 flex flex-col justify-between rounded-[14px] border border-white/10 p-4 text-left"
              style={
                {
                  background: CARD_GLOWS[i % CARD_GLOWS.length],
                  transform: `translateX(${(i - 2.5) * 6}px) rotate(${angle}deg)`,
                  "--r": `${angle}deg`,
                  "--x": `${(i - 2.5) * 6}px`,
                  animationDelay: `${i * 140}ms`,
                  zIndex: i,
                  boxShadow: "0 12px 30px -12px rgba(0,0,0,.8)",
                } as React.CSSProperties
              }
            >
              <span className="font-mono text-[10px] tracking-[0.24em] text-brand">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-serif text-[13px] font-bold uppercase leading-tight text-white">{label}</span>
            </div>
          )
        })}
      </div>

      {/* Le sceau : quelque chose se ferme, quelque chose s'ouvre. */}
      <div className="q-rise" style={at(1000)}>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-chalk-40">{copy.sealKicker}</div>
        <h2 className="mx-auto mt-7 max-w-[600px] font-serif text-[clamp(1.9rem,5vw,3.2rem)] font-bold uppercase leading-[1.05] tracking-[-0.015em] text-white">
          {copy.sealTitle(ref)}
        </h2>
      </div>

      <div className="q-grow mx-auto mt-9 h-px bg-brand" style={at(1300)} />

      <div className="q-rise" style={at(1500)}>
        <p className="mt-9 font-mono text-[10px] uppercase tracking-[0.22em] text-chalk-40">{copy.sealDueLabel}</p>
        <p className="mt-3 font-serif text-[clamp(1.3rem,3vw,1.9rem)] font-bold text-brand">{due}</p>
        <p className="mx-auto mt-8 max-w-[430px] font-sans text-[14.5px] leading-[1.75] text-chalk-55">{copy.sealLead}</p>
      </div>

      {/* Ce qui se passe maintenant : quatre dates, dans l'ordre. C'est la
          dernière question qu'on se pose après avoir envoyé trente
          réponses — « et maintenant ? » — et la page de fin n'y répondait
          pas. */}
      <div className="q-rise mx-auto mt-14 w-full max-w-[520px] text-left" style={at(1800)}>
        <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.26em] text-brand">{copy.nextTitle}</div>
        <ol className="m-0 list-none p-0">
          {timeline.map((s, i) => (
            <li key={i} className="grid grid-cols-[132px_1fr] gap-5 border-t border-hair py-4 first:border-t-0 first:pt-0 sm:grid-cols-[168px_1fr]">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-chalk-40">{s.when}</span>
              <span className="font-sans text-[14px] leading-[1.6] text-chalk-75">{s.what}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="q-rise mt-12 flex flex-col items-center gap-5" style={at(2100)}>
        <button type="button" className="btn-ghost" onClick={downloadFirstPage}>
          {copy.sealDownload}
        </button>
        <a href={`/${lang}`} className="text-[13px] text-chalk-40 underline underline-offset-4 transition-colors hover:text-white">
          {copy.backToSite}
        </a>
        <p className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-chalk-40">
          {copy.sealRefLabel} · {ref}
        </p>
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
function TerrainMark({ k, on, size = 26 }: { k: string; on: boolean; size?: number }) {
  const s = on ? "var(--color-brand)" : "rgba(255,255,255,0.35)"
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: s, strokeWidth: 1.4 }
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
  const title = copy.chapterTitles[tag] ?? tag
  const feeds = copy.chapterFeeds[tag]
  return (
    // Un moment, pas un bloc dans la page.
    //
    // Le chapitre s'affichait entre deux questions comme une carte de plus :
    // on le lisait en diagonale et on cliquait. En occupant tout l'écran,
    // avec un trait qui se trace et un titre qui monte, il redevient une
    // pause — le seul moment du parcours où l'on ne demande rien.
    <div className="relative isolate flex min-h-[72vh] flex-col items-center justify-center py-10 text-center">
      {/* Les bandes de cinéma — le letterbox des pages de terrain. Elles
          entrent fermées sur l'écran puis s'ouvrent, comme un plan qui
          commence : le chapitre se lit comme une nouvelle scène, pas comme
          un écran de plus. Fixes et plein écran, elles débordent du
          conteneur centré exprès. */}
      <div
        aria-hidden
        className="q-bar pointer-events-none fixed inset-x-0 top-0 z-30 bg-black"
      />
      <div
        aria-hidden
        className="q-bar pointer-events-none fixed inset-x-0 bottom-0 z-30 bg-black"
      />

      {/* Le grand numéro de scène, en contour, derrière le titre — comme
          les numéros des scènes de la tournée sur la home. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[25%] -z-10 select-none font-serif font-bold leading-none transition-all duration-[1400ms] ease-[cubic-bezier(.22,.68,0,1)]"
        style={{
          fontSize: "clamp(10rem,30vw,22rem)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.07)",
          opacity: shown ? 1 : 0,
          transform: `translate(-50%,-50%) scale(${shown ? 1 : 1.08})`,
          transitionDelay: "300ms",
        }}
      >
        {String(n).padStart(2, "0")}
      </div>

      <div
        className={`relative font-mono text-[10.5px] uppercase tracking-[0.3em] text-chalk-40 transition-all duration-[600ms] ${
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
        {title}
      </h2>

      {/* Le trait se trace plutôt que d'apparaître : c'est ce geste, plus
          que le texte, qui fait sentir qu'une étape s'ouvre. */}
      <div
        className="mx-auto mt-9 h-px bg-brand transition-all duration-[900ms] ease-out"
        style={{ width: shown ? 96 : 0, transitionDelay: "420ms" }}
      />

      {/* Pourquoi ce chapitre existe — la raison, avant tout le reste.
          L'ancienne version affichait « quelques questions pour la suite
          du document » : une phrase qui ne dit rien et qui laissait croire
          que les questions étaient interchangeables. Ici on dit ce que le
          chapitre fabrique, puis quelle pièce du document il nourrit. */}
      <p
        className={`mx-auto mt-9 max-w-[520px] font-sans text-[16px] leading-[1.8] text-chalk-75 transition-all duration-[800ms] ${
          shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
        style={{ transitionDelay: "560ms" }}
      >
        {note}
      </p>

      {feeds && (
        <div
          className={`mt-6 font-mono text-[10.5px] uppercase tracking-[0.2em] text-brand transition-all duration-[800ms] ${
            shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: "720ms" }}
        >
          {feeds}
        </div>
      )}

      {/* La citation du livre : une idée de plus, volontairement discrète.
          Elle passe après la raison — on lit d'abord ce qu'on va faire,
          ensuite ce qui l'éclaire. */}
      {quote && (
        <figure
          className={`mx-auto mt-9 max-w-[480px] transition-all duration-[800ms] ${
            shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: "880ms" }}
        >
          <blockquote className="m-0 border-l-2 border-white/15 pl-4 text-left font-serif text-[13.5px] italic leading-[1.6] text-chalk-55">
            {quote}
          </blockquote>
          <figcaption className="mt-2 pl-4 text-left font-mono text-[9px] uppercase tracking-[0.22em] text-chalk-40">
            {copy.quoteSource}
          </figcaption>
        </figure>
      )}

      <div
        className={`mt-10 transition-all duration-[700ms] ${shown ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: "1000ms" }}
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
/** Combien de colonnes pour n options : tout sur une ligne jusqu'à 5, puis des rangées régulières. */
function choiceCols(n: number): number {
  if (n <= 5) return Math.max(1, n)
  if (n === 6 || n === 9) return 3
  if (n === 10) return 5
  return 4
}

function ThresholdScreen({ copy, onEnter }: { copy: Copy; onEnter: () => void }) {
  // Tout le mouvement d'entrée est en animations CSS, pas en minuteurs
  // JavaScript. La version précédente cachait chaque élément derrière un
  // état mis à jour par setTimeout, et démarrait avec les bandes noires
  // fermées sur tout l'écran : si un minuteur tardait, la page restait
  // intégralement noire. Ici l'état par défaut est « tout visible, bandes
  // ouvertes » ; l'animation ne fait que rejouer l'arrivée par-dessus.
  const [leaving, setLeaving] = useState(false)
  const go = () => {
    if (leaving) return
    setLeaving(true)
    // Les bandes se referment (450 ms) avant la suite.
    window.setTimeout(onEnter, 450)
  }

  const at = (ms: number) => ({ animationDelay: `${ms}ms` })

  return (
    <div className="relative isolate flex min-h-[82vh] flex-col items-center justify-center text-center">
      <div
        aria-hidden
        className="q-bar pointer-events-none fixed inset-x-0 top-0 z-30 bg-black"
        style={leaving ? { height: "50vh", transition: "height 450ms ease" } : undefined}
      />
      <div
        aria-hidden
        className="q-bar pointer-events-none fixed inset-x-0 bottom-0 z-30 bg-black"
        style={leaving ? { height: "50vh", transition: "height 450ms ease" } : undefined}
      />

      <BreatheGlow />

      <div className="q-rise font-mono text-[10.5px] uppercase tracking-[0.3em] text-chalk-40" style={at(500)}>
        {copy.thresholdKicker}
      </div>

      <h1
        className="mx-auto mt-9 max-w-[16ch] font-serif text-[clamp(2.2rem,6.2vw,4.8rem)] font-bold uppercase leading-[1] tracking-[-0.02em] text-white"
        style={{ textWrap: "balance" } as React.CSSProperties}
      >
        <InkWords text={copy.thresholdTitle} keyRe={/commence|starts/i} delay={800} step={90} />
      </h1>

      <p className="q-rise mx-auto mt-9 max-w-[500px] font-sans text-[15.5px] leading-[1.75] text-chalk-55" style={at(1700)}>
        {copy.thresholdLead}
      </p>

      <div className="q-rise mt-12" style={at(2000)}>
        <button type="button" className="btn-primary" onClick={go} disabled={leaving} autoFocus>
          {copy.thresholdCta} →
        </button>
      </div>
    </div>
  )
}


/**
 * FillQuestion — la question qui s'écrit sous les yeux.
 *
 * Chaque mot part en gris très pâle et passe au blanc, l'un après
 * l'autre ; le dernier mot porte le dégradé rouge du titre de la home.
 * Le remplissage complet tient toujours sous une seconde, même pour une
 * question longue : au-delà, l'effet deviendrait une attente — et le
 * champ, lui, apparaît à 1,5 s.
 */
function FillQuestion({ text }: { text: string }) {
  const words = text.split(" ")
  const step = Math.min(55, 850 / Math.max(1, words.length))
  return (
    <h2 className="q-question mx-auto mb-5 max-w-[24ch]">
      {words.map((w, i) => {
        const last = i === words.length - 1
        const delay = { animationDelay: `${Math.round(i * step)}ms` }
        return (
          <span key={i}>
            {last ? (
              <span
                className="q-ink-op bg-[linear-gradient(135deg,#ff2233_20%,#ff4d2e_60%,#e0102a)] bg-clip-text"
                style={{ color: "transparent", ...delay }}
              >
                {w}
              </span>
            ) : (
              <span className="q-ink" style={delay}>{w}</span>
            )}
            {last ? null : " "}
          </span>
        )
      })}
    </h2>
  )
}


/** Les dégradés des cartes de choix, repris des cinq chapitres S.T.R.A.W. */
const CARD_GLOWS = [
  "radial-gradient(70% 70% at 85% 15%, rgba(255,34,51,.16), transparent 60%), #0d0d0d",
  "radial-gradient(70% 70% at 15% 20%, rgba(255,77,46,.18), transparent 60%), #0d0d0d",
  "radial-gradient(70% 70% at 85% 85%, rgba(255,138,133,.16), transparent 60%), #0d0d0d",
  "radial-gradient(70% 70% at 20% 85%, rgba(255,77,46,.16), transparent 60%), #0d0d0d",
  "radial-gradient(80% 80% at 50% 20%, rgba(255,34,51,.14), transparent 55%), #0d0d0d",
]


/**
 * ToneGauge — une jauge entre deux pôles, en graduations fines.
 *
 * Vingt et une graduations comme sur une règle : le centre est le point
 * neutre, celles entre le centre et la position choisie s'allument en
 * dégradé rouge, et la position elle-même se dresse, haute et lumineuse.
 * Le pôle vers lequel on penche passe en grand et en blanc, l'autre
 * s'éteint — on lit sa réponse sans chercher où est le curseur. Valeur de
 * 0 à 100 par pas de 5 (le scénario Make reçoit toujours un nombre).
 *
 * Accessible : c'est un `slider` ARIA, au clavier flèches / Début / Fin.
 */
function ToneGauge({
  left,
  right,
  value,
  onChange,
}: {
  left: string
  right: string
  value: number
  onChange: (v: number) => void
}) {
  const N = 21
  const MID = 10
  const idx = Math.max(0, Math.min(N - 1, Math.round(value / 5)))
  const ref = useRef<HTMLDivElement | null>(null)
  const dragging = useRef(false)

  const setFromX = (clientX: number) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const i = Math.max(0, Math.min(N - 1, Math.round(((clientX - r.left) / r.width) * (N - 1))))
    if (i !== idx) onChange(i * 5)
  }
  const leftOn = idx < MID
  const rightOn = idx > MID
  const lo = Math.min(idx, MID)
  const hi = Math.max(idx, MID)

  return (
    <div className="py-7 first:pt-0 last:pb-0">
      <div className="mb-5 flex items-baseline justify-between gap-6">
        <span className={`font-serif text-[1.25rem] uppercase tracking-[-0.01em] transition-all duration-200 ${leftOn ? "font-bold text-white" : "font-semibold text-chalk-40"}`}>
          {left}
        </span>
        <span className={`text-right font-serif text-[1.25rem] uppercase tracking-[-0.01em] transition-all duration-200 ${rightOn ? "font-bold text-white" : "font-semibold text-chalk-40"}`}>
          {right}
        </span>
      </div>
      <div
        ref={ref}
        role="slider"
        tabIndex={0}
        aria-label={`${left} — ${right}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={idx * 5}
        className="flex h-[64px] cursor-pointer select-none items-end justify-between rounded-md outline-none focus-visible:ring-1 focus-visible:ring-brand/60 [touch-action:pan-y]"
        onPointerDown={(e) => {
          dragging.current = true
          try {
            e.currentTarget.setPointerCapture(e.pointerId)
          } catch {
            /* sans conséquence */
          }
          setFromX(e.clientX)
        }}
        onPointerMove={(e) => {
          if (dragging.current) setFromX(e.clientX)
        }}
        onPointerUp={() => {
          dragging.current = false
        }}
        onPointerCancel={() => {
          dragging.current = false
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowUp") {
            e.preventDefault()
            onChange(Math.min(100, idx * 5 + 5))
          } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
            e.preventDefault()
            onChange(Math.max(0, idx * 5 - 5))
          } else if (e.key === "Home") {
            e.preventDefault()
            onChange(0)
          } else if (e.key === "End") {
            e.preventDefault()
            onChange(100)
          }
        }}
      >
        {Array.from({ length: N }, (_, i) => {
          const current = i === idx
          const center = i === MID
          const major = i % 5 === 0
          const lit = i >= lo && i <= hi && idx !== MID
          return (
            <span
              key={i}
              aria-hidden
              className="rounded-full transition-all duration-200 ease-out"
              style={{
                width: current ? 5 : 3,
                height: current ? 64 : center ? 40 : major ? 28 : 18,
                background: current && idx !== MID
                  ? "linear-gradient(180deg,#ff6a3d,#ff2233)"
                  : lit
                    ? "linear-gradient(180deg,#ff4d2e,#e0102a)"
                    : center
                      ? "rgba(255,255,255,0.55)"
                      : major
                        ? "rgba(255,255,255,0.28)"
                        : "rgba(255,255,255,0.13)",
                boxShadow: current && idx !== MID ? "0 0 22px rgba(255,34,51,0.7)" : "none",
              }}
            />
          )
        })}
      </div>
    </div>
  )
}


/**
 * InkWords — un titre dont les mots se remplissent un à un.
 *
 * Même geste partout (seuil, couvertures) : le gris pâle passe au blanc
 * mot après mot, et l'expression clé — qui peut couvrir plusieurs mots,
 * comme « quelque chose » — prend le dégradé rouge du titre de la home.
 * Animations CSS pures : le texte est lisible même si le script tarde.
 */
function InkWords({ text, keyRe, delay = 0, step = 80 }: { text: string; keyRe?: RegExp; delay?: number; step?: number }) {
  const words = text.split(" ")
  const m = keyRe ? keyRe.exec(text) : null
  let offset = 0
  return (
    <>
      {words.map((w, i) => {
        const start = offset
        offset += w.length + 1
        const key = !!m && start < m.index + m[0].length && start + w.length > m.index
        const d = { animationDelay: `${delay + i * step}ms` }
        return (
          <span key={i}>
            {key ? (
              <span
                className="q-ink-op bg-[linear-gradient(135deg,#ff2233_20%,#ff4d2e_60%,#e0102a)] bg-clip-text"
                style={{ color: "transparent", ...d }}
              >
                {w}
              </span>
            ) : (
              <span className="q-ink" style={d}>
                {w}
              </span>
            )}
            {i < words.length - 1 ? " " : null}
          </span>
        )
      })}
    </>
  )
}

/** La lueur rouge qui respire derrière le titre, centrée sur l'écran. */
function BreatheGlow() {
  return (
    <div
      aria-hidden
      className="q-breathe pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{ background: "radial-gradient(circle, rgba(255,34,51,.22) 0%, rgba(255,34,51,.06) 40%, transparent 70%)" }}
    />
  )
}
