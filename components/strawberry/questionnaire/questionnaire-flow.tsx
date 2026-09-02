"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import {
  wordsFor,
  stepsForOffer,
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
    coverTitle: "C'est parti.",
    coverLede:
      "Ceci est le fondement de votre maison. Prenez votre temps. Écrivez comme vous parleriez à quelqu'un qui comprend déjà. Il n'y a pas de mauvaises réponses — seulement des honnêtes et des malhonnêtes.",
    minutesArchitecture: "45 à 70",
    minutesAudit: "20 à 25",
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
    coverTitle: "Let's begin.",
    coverLede:
      "This is the foundation of your house. Take your time. Write the way you would speak to someone who already understands. There are no wrong answers — only honest ones and dishonest ones.",
    minutesArchitecture: "45 to 70",
    minutesAudit: "20 to 25",
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

function storageKey(offer: OfferKey, email: string) {
  return `sp_questionnaire:${offer}:${email.trim().toLowerCase() || "anon"}`
}

export function QuestionnaireFlow({
  offer,
  lang,
  prefill,
}: {
  offer: OfferKey
  lang: Lang
  prefill?: Partial<IdentityAnswers>
}) {
  const steps = useMemo(() => stepsForOffer(offer, lang), [offer, lang])
  const copy = UI_COPY[lang]
  const words = useMemo(() => wordsFor(lang), [lang])
  const [screen, setScreen] = useState<"cover" | "steps" | "review" | "done" | "error">("cover")
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
      const raw = localStorage.getItem(storageKey(offer, email))
      if (raw) {
        const saved = JSON.parse(raw) as { answers: Answers; idx: number }
        setAnswers((prev) => ({ ...prev, ...saved.answers }))
        setIdx(saved.idx ?? 0)
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
      localStorage.setItem(storageKey(offer, email), JSON.stringify({ answers, idx }))
    } catch {
      // best-effort only
    }
  }, [answers, idx, offer])

  const step = steps[idx]
  const pct = Math.round((idx / steps.length) * 100)

  function updateAnswer(id: string, value: unknown) {
    setAnswers((prev) => ({ ...prev, [id]: value }))
  }

  function goNext() {
    if (idx < steps.length - 1) setIdx(idx + 1)
    else setScreen("review")
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
          <CoverScreen
            offer={offer}
            copy={copy}
            stepCount={steps.length}
            identity={answers.identity}
            onStart={() => setScreen("steps")}
          />
        )}

        {screen === "steps" && step && (
          <StepScreen
            step={step}
            copy={copy}
            words={words}
            index={idx}
            total={steps.length}
            pct={pct}
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
  onStart,
}: {
  offer: OfferKey
  copy: Copy
  stepCount: number
  identity: IdentityAnswers
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
      <button type="button" className="btn-primary mt-6" onClick={onStart}>
        {copy.start}
      </button>
    </div>
  )
}

function StepScreen({
  step,
  copy,
  words,
  index,
  total,
  pct,
  answers,
  deepOpen,
  onOpenDeep,
  onChange,
  onBack,
  onNext,
  onSkip,
}: {
  step: Question
  copy: Copy
  words: string[]
  index: number
  total: number
  pct: number
  answers: Answers
  deepOpen: boolean
  onOpenDeep: () => void
  onChange: (id: string, value: unknown) => void
  onBack: () => void
  onNext: () => void
  onSkip?: () => void
}) {
  const valid = isValid(step, answers)
  return (
    <div>
      <div className="mb-6 flex items-center gap-3.5">
        <button
          type="button"
          onClick={onBack}
          aria-label={copy.previous}
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-hair-strong text-chalk-55"
        >
          ←
        </button>
        <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/[0.07]">
          <div
            className="h-full rounded-full"
            style={{
              width: `${pct}%`,
              background: "linear-gradient(90deg, var(--color-brand), var(--color-brand-bright))",
            }}
          />
        </div>
        <div className="body-sm flex-shrink-0">
          {index + 1} / {total}
        </div>
      </div>

      <div className="mb-3">
        {step.tag && <span className="tag mr-1.5">{step.tag}</span>}
        {step.optional && <span className="tag border-brand-hair text-brand">{copy.optional}</span>}
      </div>
      <h2 className="h-card mb-2.5">{step.label}</h2>
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

      <div className="mt-8 flex items-center gap-4">
        <button type="button" className="btn-primary" disabled={!valid} onClick={onNext}>
          {copy.continue}
        </button>
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
    const wordCount = v.trim().length ? v.trim().split(/\s+/).length : 0
    const deepVal = (answers[`${step.id}_deep`] as string) ?? ""
    return (
      <div>
        <AutoTextarea value={v} placeholder={step.ph} onChange={(val) => onChange(step.id, val)} />
        <div className="mt-1.5 text-right text-[11px] text-chalk-40">
          {wordCount} {copy.words}
        </div>
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
                className={`block w-full border px-4 py-3.5 text-left text-[14.5px] leading-snug transition-colors ${
                  on ? "border-brand bg-brand/10" : "border-hair-strong bg-white/[0.02] hover:border-brand/40"
                }`}
              >
                {opt}
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
      <div>
        {(step.axes ?? []).map((ax) => (
          <div key={ax.id} className="mb-6">
            <div className="mb-2 flex justify-between text-xs text-chalk-55">
              <span>{ax.l}</span>
              <span>{ax.r}</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={tone[ax.id] ?? 50}
              onChange={(e) => onChange("tone", { ...tone, [ax.id]: Number(e.target.value) })}
              className="w-full accent-[var(--color-brand)]"
            />
          </div>
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
  onChange,
}: {
  value: string
  placeholder?: string
  rows?: number
  onChange: (v: string) => void
}) {
  const ref = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.height = "auto"
    el.style.height = `${el.scrollHeight}px`
  }, [value])
  return (
    <textarea
      ref={ref}
      className="field resize-none leading-relaxed"
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
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
            <div className="whitespace-pre-wrap text-[14.5px] leading-relaxed text-chalk-75">{summarize(step)}</div>
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
