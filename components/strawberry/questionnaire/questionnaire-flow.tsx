"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import {
  ARCHETYPES,
  WORDS,
  stepsForOffer,
  type OfferKey,
  type Question,
} from "@/lib/questionnaire-data"
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

function storageKey(offer: OfferKey, email: string) {
  return `sp_questionnaire:${offer}:${email.trim().toLowerCase() || "anon"}`
}

export function QuestionnaireFlow({
  offer,
  prefill,
}: {
  offer: OfferKey
  prefill?: Partial<IdentityAnswers>
}) {
  const steps = useMemo(() => stepsForOffer(offer), [offer])
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
      setErrorMsg("Une soumission a déjà été envoyée récemment. Réessayez dans un instant.")
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
      setErrorMsg("L'envoi a échoué. Vérifiez votre connexion et réessayez — vos réponses restent sauvegardées.")
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
            stepCount={steps.length}
            identity={answers.identity}
            onStart={() => setScreen("steps")}
          />
        )}

        {screen === "steps" && step && (
          <StepScreen
            step={step}
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

        {screen === "done" && <DoneScreen />}
      </div>
    </div>
  )
}

function CoverScreen({
  offer,
  stepCount,
  identity,
  onStart,
}: {
  offer: OfferKey
  stepCount: number
  identity: IdentityAnswers
  onStart: () => void
}) {
  const minutes = offer === "architecture" ? "45 à 70" : "20 à 25"
  return (
    <div className="text-center">
      <div className="kicker mb-4">STRAWBERRY PRODUCTION · ONBOARDING</div>
      <h1 className="h-section mb-4">C&apos;est parti.</h1>
      <p className="lede mx-auto mb-2 max-w-md italic">
        Ceci est le fondement de votre maison. Prenez votre temps. Écrivez comme vous
        parleriez à quelqu&apos;un qui comprend déjà. Il n&apos;y a pas de mauvaises
        réponses — seulement des honnêtes et des malhonnêtes.
      </p>
      <div className="body-sm mb-1">
        Environ {minutes} minutes · {stepCount} questions
        {offer === "architecture" ? " (quelques-unes facultatives)" : ""}
      </div>
      {offer === "architecture" && (
        <p className="body-sm mt-3 text-chalk-40">
          Vous pouvez fermer cet onglet à tout moment : tout est sauvegardé, vous
          reprendrez exactement où vous en étiez.
        </p>
      )}
      {(identity.name || identity.house) && (
        <div className="mx-auto mt-7 mb-8 max-w-sm border border-hair-strong bg-white/[0.02] px-5 py-4 text-left">
          <div className="field-label mb-1.5">Déjà rempli pour vous</div>
          <div className="text-[14.5px] text-white">
            {identity.name || "—"} — {identity.house || "—"}
          </div>
        </div>
      )}
      <button type="button" className="btn-primary mt-6" onClick={onStart}>
        Commencer →
      </button>
    </div>
  )
}

function StepScreen({
  step,
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
          aria-label="Précédent"
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-hair-strong text-chalk-55"
        >
          ←
        </button>
        <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/[0.07]">
          <div
            className="h-full rounded-full"
            style={{ width: `${pct}%`, background: "linear-gradient(90deg, var(--color-brand), var(--color-brand-bright))" }}
          />
        </div>
        <div className="body-sm flex-shrink-0">
          {index + 1} / {total}
        </div>
      </div>

      <div className="mb-3">
        {step.tag && <span className="tag mr-1.5">{step.tag}</span>}
        {step.optional && <span className="tag border-brand-hair text-brand">Facultatif</span>}
      </div>
      <h2 className="h-card mb-2.5">{step.label}</h2>
      {step.help ? <p className="body-sm mb-6">{step.help}</p> : <div className="mb-6" />}

      <QuestionInput step={step} answers={answers} deepOpen={deepOpen} onOpenDeep={onOpenDeep} onChange={onChange} />

      <div className="mt-8 flex items-center gap-4">
        <button type="button" className="btn-primary" disabled={!valid} onClick={onNext}>
          Continuer →
        </button>
        {onSkip && (
          <button type="button" className="btn-quiet" onClick={onSkip}>
            Passer
          </button>
        )}
      </div>
    </div>
  )
}

function QuestionInput({
  step,
  answers,
  deepOpen,
  onOpenDeep,
  onChange,
}: {
  step: Question
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
          <label className="field-label">Nom</label>
          <input className="field" value={v.name} onChange={(e) => set({ name: e.target.value })} placeholder="Votre nom" />
        </div>
        <div>
          <label className="field-label">Nom de la maison</label>
          <input className="field" value={v.house} onChange={(e) => set({ house: e.target.value })} placeholder="Le nom de votre maison" />
        </div>
        <div>
          <label className="field-label">Email</label>
          <input className="field" value={v.email} onChange={(e) => set({ email: e.target.value })} placeholder="vous@maison.com" />
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
    const words = v.trim().length ? v.trim().split(/\s+/).length : 0
    const deepVal = (answers[`${step.id}_deep`] as string) ?? ""
    return (
      <div>
        <AutoTextarea value={v} placeholder={step.ph} onChange={(val) => onChange(step.id, val)} />
        <div className="mt-1.5 text-right text-[11px] text-chalk-40">{words} mots</div>
        {step.deep &&
          (deepOpen ? (
            <div className="mt-4 border-l-2 border-brand pl-4">
              <p className="body-sm mb-2.5 italic">{step.deep}</p>
              <AutoTextarea value={deepVal} onChange={(val) => onChange(`${step.id}_deep`, val)} rows={3} />
            </div>
          ) : (
            <button type="button" className="btn-quiet mt-4" onClick={onOpenDeep}>
              + Creuser plus loin (facultatif)
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
            <input className="field" placeholder="Nom du concurrent" value={c.name} onChange={(e) => setRow(i, { name: e.target.value })} />
            <input className="field" placeholder="Leur phrase, exacte" value={c.line} onChange={(e) => setRow(i, { line: e.target.value })} />
            {rows.length > 3 ? (
              <button
                type="button"
                aria-label="Retirer"
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
            + Ajouter un concurrent
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
          <label className="field-label">Site actuel</label>
          <input className="field" value={v.site} onChange={(e) => set({ site: e.target.value })} placeholder="https://" />
        </div>
        <div>
          <label className="field-label">LinkedIn du fondateur</label>
          <input className="field" value={v.linkedin} onChange={(e) => set({ linkedin: e.target.value })} placeholder="https://linkedin.com/in/..." />
        </div>
        <div>
          <label className="field-label">Un contenu déjà publié (facultatif)</label>
          <input className="field" value={v.content} onChange={(e) => set({ content: e.target.value })} placeholder="Lien vers un post, un article, une vidéo" />
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
        {step.multi && <div className="body-sm mt-2">Jusqu&apos;à {step.max} choix.</div>}
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
          {WORDS.map((w) => (
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
        {renderGroup("Ce sont mes mots", "mine")}
        {renderGroup("Ce ne sont jamais les miens", "notmine")}
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
  answers,
  submitting,
  errorMsg,
  onEdit,
  onBack,
  onSubmit,
}: {
  steps: Question[]
  answers: Answers
  submitting: boolean
  errorMsg: string
  onEdit: (i: number) => void
  onBack: () => void
  onSubmit: () => void
}) {
  function summarize(step: Question): string {
    if (step.type === "identity") return `${answers.identity.name} — ${answers.identity.house}`
    if (step.type === "shorttext") return (answers[step.id] as string) || "—"
    if (step.type === "textarea") {
      let v = (answers[step.id] as string) || "—"
      const deep = answers[`${step.id}_deep`] as string
      if (deep) v += `\n\n(Plus loin) ${deep}`
      return v
    }
    if (step.type === "competitors") {
      const parts = answers.competitors.filter((c) => c.name).map((c) => `${c.name} : "${c.line}"`)
      return parts.join("\n") || "—"
    }
    if (step.type === "links") return `Site : ${answers.links.site || "—"}\nLinkedIn : ${answers.links.linkedin || "—"}`
    if (step.type === "choice") {
      const v = answers[step.id]
      return step.multi ? (Array.isArray(v) ? v.join(", ") : "—") || "—" : (v as string) || "—"
    }
    if (step.type === "sliders") {
      return (step.axes ?? []).map((ax) => `${ax.l}/${ax.r} : ${answers.tone[ax.id] ?? 50}`).join("\n")
    }
    if (step.type === "wordbank") {
      return `Mes mots : ${answers.wordbank.mine.join(", ") || "—"}\nJamais : ${answers.wordbank.notmine.join(", ") || "—"}`
    }
    return "—"
  }

  return (
    <div>
      <div className="kicker mb-3">Avant d&apos;envoyer</div>
      <h2 className="h-card mb-2">Relisez, puis envoyez.</h2>
      <p className="body-sm mb-1">Rien n&apos;est envoyé tant que vous n&apos;avez pas confirmé.</p>
      <div>
        {steps.map((step, i) => (
          <div key={step.id} className="border-t border-hair py-4">
            <div className="flex items-start justify-between gap-3">
              <div className="mb-1.5 text-[11px] uppercase tracking-[0.14em] text-brand">
                {step.label}
                {step.optional ? " (facultatif)" : ""}
              </div>
              <button type="button" className="btn-quiet flex-shrink-0" onClick={() => onEdit(i)}>
                Modifier
              </button>
            </div>
            <div className="whitespace-pre-wrap text-[14.5px] leading-relaxed text-chalk-75">{summarize(step)}</div>
          </div>
        ))}
      </div>
      {errorMsg && <p className="mt-4 text-[13px] text-brand">{errorMsg}</p>}
      <div className="mt-8 flex flex-wrap gap-4">
        <button type="button" className="btn-primary" disabled={submitting} onClick={onSubmit}>
          {submitting ? "Envoi..." : "Envoyer ✓"}
        </button>
        <button type="button" className="btn-ghost" onClick={onBack}>
          Retour
        </button>
      </div>
    </div>
  )
}

function DoneScreen() {
  return (
    <div className="py-6 text-center">
      <div className="kicker mb-4">C&apos;EST REÇU</div>
      <h1 className="h-section mb-5">Le travail commence.</h1>
      <p className="lede mx-auto max-w-md italic">
        Vous n&apos;entendrez pas de silence — vous n&apos;entendrez rien jusqu&apos;à
        ce que le travail soit prêt à être exceptionnel.
      </p>
    </div>
  )
}
