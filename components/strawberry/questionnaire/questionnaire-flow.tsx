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
      Identité: "On commence par les faits : qui vous êtes, ce que vous vendez, à qui. C'est la matière de toutes les pièces qui suivent.",
      Diagnostic: "Ce que vous racontez aujourd'hui, et ce que votre marché en retient. Répondez comme vous parleriez, pas comme vous écririez une plaquette.",
      Langage: "Vos mots, ceux que vous refusez, et le ton que vous tenez. C'est ce qui nourrit le lexique et les textes réécrits.",
      Concurrence: "Qui on vous compare à qui. Plus vous êtes précis sur leurs phrases exactes, plus la carte du champ sera tranchante.",
      Déploiement: "Où le document doit servir en premier. Ça décide de l'ordre des mouvements.",
      Fondation: "Le socle : la conviction, la rupture, ce que vous refusez. Les questions les plus difficiles sont ici — prenez le temps.",
    } as Record<string, string>,
    saved: "Enregistré",
    resumeKicker: "Vous aviez commencé",
    resumeLead: (n: number, t: number) => `Vos réponses sont là, vous étiez à la question ${n} sur ${t}.`,
    resumeCta: "Reprendre",
    emptyAnswer: "Sans réponse — y répondre maintenant",
    minutesLeft: (n: number) => `≈ ${n} min restantes`,
    deferCta: "J'y reviens",
    deferred: (n: number) => `${n} question${n > 1 ? "s" : ""} mise${n > 1 ? "s" : ""} de côté`,
    leaveNote: "Vous pouvez fermer cet onglet : tout est gardé sur cet appareil, vous reprendrez où vous en êtes.",
    echoLabel: "Votre réponse précédente",
    coverTitle: "C'est parti.",
    terrainLabel: "Vous avez commandé l'Architecture pour",
    terrainHelp: "Le questionnaire s'adapte : certaines questions ne se posent pas de la même façon selon ce que vous vendez.",
    terrains: [
      { k: "marques", t: "Une marque ou une entreprise", d: "Vous vendez un produit ou un service" },
      { k: "produits", t: "Un produit", d: "Un objet, une application, une gamme" },
      { k: "lieux", t: "Un lieu", d: "Restaurant, bar, club, coffee shop" },
      { k: "artistes", t: "Un nom propre", d: "Artiste, auteur, fondateur" },
    ],
    coverLede:
      "Ceci est le fondement de votre maison. Prenez votre temps. Écrivez comme vous parleriez à quelqu'un qui comprend déjà. Il n'y a pas de mauvaises réponses — seulement des honnêtes et des malhonnêtes.",
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
    recapTitle: "Tout ce qu'il faut pour écrire est là.",
    recapLead: "Nous partons de vos réponses et de rien d'autre. Le dépouillement commence demain : vos supports, ceux de vos concurrents, vos avis. Vous n'êtes plus sollicité jusqu'au jour 15.",
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
      Identity: "We start with the facts: who you are, what you sell, to whom. This is the material for every piece that follows.",
      Diagnosis: "What you say today, and what your market keeps of it. Answer as you would speak, not as you would write a brochure.",
      Language: "Your words, the ones you refuse, and the tone you hold. This feeds the lexicon and the rewritten copy.",
      Competition: "Who you get compared to. The more precise you are about their exact sentences, the sharper the map of the field.",
      Deployment: "Where the document must work first. This decides the order of the moves.",
      Foundation: "The bedrock: the conviction, the rupture, what you refuse. The hardest questions are here — take your time.",
    } as Record<string, string>,
    saved: "Saved",
    resumeKicker: "You had started",
    resumeLead: (n: number, t: number) => `Your answers are here, you were on question ${n} of ${t}.`,
    resumeCta: "Resume",
    emptyAnswer: "No answer — answer it now",
    minutesLeft: (n: number) => `≈ ${n} min left`,
    deferCta: "Come back to it",
    deferred: (n: number) => `${n} question${n > 1 ? "s" : ""} set aside`,
    leaveNote: "You can close this tab: everything is kept on this device, you will pick up where you left off.",
    echoLabel: "Your previous answer",
    coverTitle: "Let's begin.",
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
    recapTitle: "Everything needed to write it is here.",
    recapLead: "We work from your answers and nothing else. The reading starts tomorrow: your supports, your competitors', your reviews. You will not be contacted again until day 15.",
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

  const [screen, setScreen] = useState<"cover" | "chapter" | "steps" | "review" | "done" | "error">("cover")
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
            copy={copy}
            onStart={() => setScreen("steps")}
          />
        )}

        {screen === "steps" && step && (
          <StepScreen
            step={step}
            copy={copy}
            terrainLabel={copy.terrains.find((x) => x.k === chosenTerrain)?.t}
            minutesLeft={minutesLeft}
            deferredCount={deferred.length}
            onDefer={deferCurrent}
            previousEcho={(() => {
              // Seules les réponses rédigées font un écho utile : un choix
              // dans une liste ne se relit pas, il se revoit sur l'écran.
              const prev = steps[idx - 1]
              if (!prev || !["textarea", "shorttext"].includes(prev.type)) return undefined
              const v = answers[prev.id]
              return typeof v === "string" && v.trim() ? v.trim() : undefined
            })()}
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

        {screen === "done" && <DoneScreen copy={copy} />}
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
  return (
    <div className="text-center">
      <div className="kicker mb-4">{copy.kicker}</div>
      <h1 className="h-section mb-4">{copy.coverTitle}</h1>
      <p className="lede mx-auto mb-2 max-w-md italic">{copy.coverLede}</p>
      <div className="body-sm mb-1">{copy.aboutMinutes(minutes, stepCount, isArchitecture)}</div>
      {isArchitecture && <p className="body-sm mt-3 text-chalk-40">{copy.resumeNote}</p>}
      {(identity.name || identity.house) && (
        <div className="mx-auto mt-7 mb-8 max-w-sm border border-hair-strong bg-white/[0.02] px-5 py-4 text-left">
          <div className="field-label mb-1.5">{copy.prefilled}</div>
          <div className="text-[14.5px] text-white">
            {identity.name || copy.dash} — {identity.house || copy.dash}
          </div>
        </div>
      )}
      {/* Le choix du terrain, avant les questions.
          Sans lui, le parcours retombait sur « marques » par défaut et un
          restaurateur se voyait demander la tagline de ses concurrents.
          Le choix est bloquant : le bouton reste inactif tant qu'on n'a
          pas répondu, parce qu'un mauvais parcours ne se rattrape pas en
          cours de route. */}
      <div className="mx-auto mt-9 max-w-lg text-left">
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
  terrainLabel,
  previousEcho,
  minutesLeft,
  deferredCount,
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
  terrainLabel?: string
  previousEcho?: string
  minutesLeft: number
  deferredCount: number
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
  const [shown, setShown] = useState(false)
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
        "transition-all duration-[520ms] ease-[cubic-bezier(.22,.68,0,1)]",
        shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
      ].join(" ")}
    >
      <div className="mb-6 flex items-center gap-3.5">
        <button
          type="button"
          onClick={onBack}
          aria-label={copy.previous}
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-hair-strong text-chalk-55"
        >
          ←
        </button>
        {/* Le repère permanent : où l'on est, et pour quoi.
            Sur trente écrans, on oublie ce qu'on remplit — et le terrain
            choisi au départ conditionne la moitié des questions. L'afficher
            en continu évite le doute au vingtième écran. */}
        {/* Une progression segmentée, une case par question.
            Une barre continue sur trente écrans ne dit rien : elle avance de
            trois pour cent et le lecteur ne voit pas la différence. Trente
            segments montrent le chemin parcouru et, surtout, combien il en
            reste — ce que le client veut vraiment savoir au quinzième. */}
        <div className="flex flex-1 items-center gap-[3px]" aria-hidden>
          {Array.from({ length: total }).map((_, i) => (
            <span
              key={i}
              className="h-[3px] flex-1 rounded-full transition-colors duration-500"
              style={{
                background:
                  i < index
                    ? "var(--color-brand)"
                    : i === index
                      ? "var(--color-brand-bright)"
                      : "rgba(255,255,255,0.09)",
              }}
            />
          ))}
        </div>
        {/* Le compte d'écrans, et le temps qu'il reste.
            L'estimation donnée une seule fois au départ ne sert plus après
            cinq minutes — c'est pourtant la seule information qui décide de
            continuer ou de s'arrêter. */}
        <div className="flex-shrink-0 text-right">
          <div className="body-sm leading-none">
            {index + 1} / {total}
          </div>
          <div className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-chalk-40">
            {copy.minutesLeft(minutesLeft)}
          </div>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-chalk-40">
        <span className="text-brand">Onboarding</span>
        {terrainLabel && (
          <>
            <span aria-hidden>·</span>
            <span>{terrainLabel}</span>
          </>
        )}
      </div>

      <div className="mb-3">
        {step.tag && <span className="tag mr-1.5">{step.tag}</span>}
        {step.optional && <span className="tag border-brand-hair text-brand">{copy.optional}</span>}
      </div>
      {/* Le titre à la charte du site : serif, capitales, crénage desserré.
          « h-card » donnait une taille de carte — ici c'est la seule chose à
          lire de l'écran, elle doit en avoir le poids. */}
      <h2 className="mb-3 font-serif text-[clamp(1.35rem,2.6vw,1.9rem)] font-bold uppercase leading-[1.12] tracking-[-0.005em] text-white">
        {step.label}
      </h2>
      {step.help ? <p className="body-sm mb-6">{step.help}</p> : <div className="mb-6" />}

      <QuestionInput
        step={step}
        copy={copy}
        words={words}
        answers={answers}
        deepOpen={deepOpen}
        onOpenDeep={onOpenDeep}
        onChange={onChange}
      />

      {/* Ce qu'on vient de répondre.
          Trente questions tapées dans le vide, sans jamais revoir ce qu'on a
          écrit : on doute, on se répète, on perd le fil. Rappeler la réponse
          précédente en une ligne suffit à sentir qu'un document se
          construit, et évite de redire ce qu'on vient de dire. */}
      {/* Ce qui se passe si on ferme l'onglet.
          Une heure de travail sans savoir si on peut partir, c'est ce qui
          fait remplir n'importe quoi pour en finir. Le dire une fois par
          écran, discrètement, suffit à lever la crainte. */}
      <p className="mt-5 font-sans text-[12px] leading-[1.6] text-chalk-40">
        {copy.leaveNote}
        {deferredCount > 0 && <> · {copy.deferred(deferredCount)}</>}
      </p>

      {previousEcho && (
        <div className="mt-7 border-t border-hair pt-4">
          <div className="mb-1.5 font-mono text-[9.5px] uppercase tracking-[0.2em] text-chalk-40">
            {copy.echoLabel}
          </div>
          <p className="m-0 line-clamp-2 font-sans text-[13px] leading-[1.6] text-chalk-55">
            {previousEcho}
          </p>
        </div>
      )}

      {/* Le pied d'écran.
          Sur un téléphone, le clavier mange la moitié de la hauteur et le
          bouton passait sous la ligne de flottaison : on tapait sa réponse
          sans voir comment avancer. Il colle désormais au bas de l'écran
          sur mobile, au-dessus de la zone système. */}
      <div className="sticky bottom-0 z-10 -mx-gutter mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 bg-ink/95 px-gutter py-4 backdrop-blur-sm [padding-bottom:calc(1rem+env(safe-area-inset-bottom,0px))] sm:static sm:mx-0 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none">
        {/* Le bouton ne devient rouge que lorsqu'on peut réellement avancer.
            Il était rouge en permanence, y compris avant d'avoir répondu :
            on cliquait dans le vide sans comprendre pourquoi rien ne se
            passait. Éteint, il devient aussi une indication — il reste
            quelque chose à remplir. */}
        <button
          type="button"
          className={valid ? "btn-primary" : "btn-quiet cursor-not-allowed opacity-45"}
          disabled={!valid}
          onClick={onNext}
        >
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

        {/* La sauvegarde, dite une fois par écran.
            Au vingtième écran, la peur de tout perdre est réelle — et les
            réponses sont bien stockées localement, mais rien ne le disait. */}
        <span className="ml-auto hidden items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-chalk-40 sm:flex">
          <span className="h-1 w-1 rounded-full bg-brand" aria-hidden />
          {copy.saved}
        </span>
        {onSkip && (
          <button type="button" className="btn-quiet" onClick={onSkip}>
            {copy.skip}
          </button>
        )}
      </div>
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
          <input className="field" value={v.name} onChange={(e) => set({ name: e.target.value })} placeholder={copy.phName} />
        </div>
        <div>
          <label className="field-label">{copy.fieldHouse}</label>
          <input className="field" value={v.house} onChange={(e) => set({ house: e.target.value })} placeholder={copy.phHouse} />
        </div>
        <div>
          <label className="field-label">{copy.fieldEmail}</label>
          <input className="field" value={v.email} onChange={(e) => set({ email: e.target.value })} placeholder={copy.phEmail} />
        </div>
      </div>
    )
  }

  if (step.type === "shorttext") {
    const v = (answers[step.id] as string) ?? ""
    return <input className="field" value={v} onChange={(e) => onChange(step.id, e.target.value)} placeholder={step.ph} />
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
            <input className="field" placeholder={copy.competitorName} value={c.name} onChange={(e) => setRow(i, { name: e.target.value })} />
            <input className="field" placeholder={copy.competitorLine} value={c.line} onChange={(e) => setRow(i, { line: e.target.value })} />
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
          <input className="field" value={v.site} onChange={(e) => set({ site: e.target.value })} placeholder="https://" />
        </div>
        <div>
          <label className="field-label">{copy.linkLinkedin}</label>
          <input className="field" value={v.linkedin} onChange={(e) => set({ linkedin: e.target.value })} placeholder="https://linkedin.com/in/..." />
        </div>
        <div>
          <label className="field-label">{copy.linkContent}</label>
          <input className="field" value={v.content} onChange={(e) => set({ content: e.target.value })} placeholder={copy.phContent} />
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
                className={`group flex w-full items-start gap-3.5 border px-4 py-3.5 text-left text-[14.5px] leading-snug transition-all duration-200 ${
                  on
                    ? "border-brand bg-brand/10 text-white"
                    : "border-hair-strong bg-white/[0.02] text-chalk-75 hover:-translate-y-px hover:border-brand/40 hover:bg-white/[0.04]"
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
  onChange,
}: {
  value: string
  placeholder?: string
  rows?: number
  nudge?: string
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
      <textarea
        ref={ref}
        className="field resize-none text-[15.5px] leading-[1.75] transition-colors focus:border-brand/60"
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {/* Une relance, pas un compteur.
          Afficher « 8 mots » en rouge juge sans aider : le client sait qu'il
          a fait court, il ne sait pas quoi ajouter. Une question posée au
          bon moment débloque la réponse — et elle n'apparaît qu'après une
          première tentative, jamais sur un champ vide, pour ne pas donner
          d'ordre avant d'avoir lu. */}
      {n >= 4 && n < 25 && nudge && (
        <p className="mt-2.5 border-l-2 border-brand/50 pl-3 font-sans text-[13px] leading-[1.6] text-chalk-55">
          {nudge}
        </p>
      )}
      {n >= 25 && (
        <div className="pointer-events-none absolute bottom-2.5 right-3 font-mono text-[10px] uppercase tracking-[0.16em] text-chalk-40">
          ✓
        </div>
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
        <div className="mx-auto mt-7 grid max-w-[520px] grid-cols-3 gap-px bg-white/10">
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
        <button type="button" className="btn-primary" disabled={submitting} onClick={onSubmit}>
          {submitting ? copy.sending : copy.send}
        </button>
        <button type="button" className="btn-ghost" onClick={onBack}>
          {copy.back}
        </button>
      </div>
    </div>
  )
}

function DoneScreen({ copy }: { copy: Copy }) {
  return (
    <div className="py-6 text-center">
      <div className="kicker mb-4">{copy.doneKicker}</div>
      <h1 className="h-section mb-5">{copy.doneTitle}</h1>
      <p className="lede mx-auto max-w-md italic">{copy.doneLede}</p>
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
  onStart,
}: {
  tag: string
  n: number
  total: number
  count: number
  copy: Copy
  onStart: () => void
}) {
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(true))
    return () => cancelAnimationFrame(id)
  }, [])
  const note = copy.chapterNotes[tag] ?? copy.chapterFallback
  return (
    <div
      className={[
        "py-10 text-center transition-all duration-[700ms] ease-[cubic-bezier(.22,.68,0,1)]",
        shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
      ].join(" ")}
    >
      <div className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-chalk-40">
        {copy.chapterOf(n, total)}
      </div>

      <h2 className="mx-auto mt-6 max-w-[520px] font-serif text-[clamp(1.9rem,4.4vw,3rem)] font-bold uppercase leading-[1.06] tracking-[-0.005em] text-white">
        {tag}
      </h2>

      <div className="mx-auto mt-7 h-px w-14 bg-brand" />

      <p className="mx-auto mt-7 max-w-[440px] font-sans text-[15px] leading-[1.75] text-chalk-55">
        {note}
      </p>

      <div className="mt-8 font-mono text-[10.5px] uppercase tracking-[0.2em] text-chalk-40">
        {copy.chapterCount(count)}
      </div>

      <button type="button" className="btn-primary mt-9" onClick={onStart}>
        {copy.continue}
      </button>
    </div>
  )
}
