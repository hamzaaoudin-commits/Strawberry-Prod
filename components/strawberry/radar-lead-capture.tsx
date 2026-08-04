"use client"

import { useState } from "react"
import { track } from "@vercel/analytics"
import { CONTACT_ENDPOINT } from "@/lib/config"
import { isValidEmail, sanitize, LIMITS, rateLimit } from "@/lib/form-security"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"

/**
 * Le pont entre une lecture et RADAR.
 *
 * /lectures est le contenu problem-aware du studio, mais n'avait qu'une
 * sortie : payer 15€ ou repartir. Rien entre les deux. Ce formulaire capture
 * un email à friction quasi nulle — pas de nom, pas de message — pour nourrir
 * un lecteur avant qu'il soit prêt à payer. C'est un aimant différent de
 * l'Atlas : celui-ci amène vers l'architecture, celui-ci amène vers RADAR.
 *
 * `source` distingue l'origine dans Formspree sans qu'aucune configuration
 * serveur supplémentaire soit nécessaire — la route accepte déjà un email seul
 * dès qu'un `source` est fourni.
 */

const T = {
  fr: {
    kicker: "Une lecture par email",
    title: "La prochaine lecture, gratuitement.",
    body: "Une marque disséquée, une fois par semaine, directement dans votre boîte. Aucune carte, aucun engagement.",
    placeholder: "Votre email",
    cta: "Recevoir la prochaine lecture",
    loading: "Envoi…",
    done: "C'est fait. La prochaine lecture arrive par email.",
    error: "Une erreur est survenue. Merci de réessayer.",
    nospam: "Un email par semaine. Désabonnement en un clic.",
  },
  en: {
    kicker: "One reading by email",
    title: "The next reading, free.",
    body: "One brand dissected, once a week, straight to your inbox. No card, no commitment.",
    placeholder: "Your email",
    cta: "Get the next reading",
    loading: "Sending…",
    done: "Done. The next reading is on its way.",
    error: "Something went wrong. Please try again.",
    nospam: "One email a week. Unsubscribe in one click.",
  },
}

export function RadarLeadCapture({ lang, source }: { lang: Lang; source: string }) {
  const t = pick(T, lang)
  const [email, setEmail] = useState("")
  const [honeypot, setHoneypot] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (honeypot) return // bot: accepte silencieusement, n'apprend rien

    const clean = sanitize(email, LIMITS.email)
    if (!isValidEmail(clean)) {
      setStatus("error")
      return
    }
    const limit = rateLimit("radar_lead")
    if (!limit.ok) {
      setStatus("error")
      return
    }

    setStatus("loading")
    try {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 15_000)
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        credentials: "same-origin",
        signal: controller.signal,
        body: JSON.stringify({ email: clean, source }),
      })
      clearTimeout(timeout)
      if (res.ok) {
        setStatus("done")
        track("radar_lead_captured", { source })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="border border-brand-hair bg-brand/[0.04] p-7 md:p-9">
      <div className="mb-2 font-sans text-[11px] uppercase tracking-[0.2em] text-brand">{t.kicker}</div>
      <h3 className="mb-3 font-serif text-[clamp(1.25rem,2.4vw,1.6rem)] font-bold leading-snug">{t.title}</h3>
      <p className="mb-6 max-w-[440px] font-sans text-[14.5px] leading-relaxed text-chalk-65">{t.body}</p>

      {status === "done" ? (
        <p role="status" aria-live="polite" className="font-serif text-[15px] italic text-brand">
          {t.done}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-start" noValidate>
          <input
            type="text"
            name="company_website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <input
            type="email"
            required
            placeholder={t.placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className="field min-w-0 flex-1"
          />
          <button type="submit" disabled={status === "loading"} className="btn-primary shrink-0">
            {status === "loading" ? t.loading : t.cta}
          </button>
        </form>
      )}

      {status === "error" && <p className="mt-3 font-sans text-[13px] text-brand">{t.error}</p>}
      {status !== "done" && <p className="mt-3 font-sans text-[12px] text-chalk-40">{t.nospam}</p>}
    </div>
  )
}
