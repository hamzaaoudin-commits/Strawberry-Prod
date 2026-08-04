"use client"

import { useState } from "react"
import { track } from "@vercel/analytics"
import { useT } from "@/lib/i18n"
import { CONTACT_ENDPOINT } from "@/lib/config"
import { isValidEmail, sanitize, LIMITS, rateLimit } from "@/lib/form-security"

/**
 * Le pont manquant entre /lectures et RADAR.
 *
 * /lectures est du contenu problem-aware, mais n'avait qu'une sortie : payer
 * quinze euros par mois ou repartir. Entre les deux, personne. Cette capture
 * à friction quasi nulle — un email pour recevoir la prochaine lecture,
 * gratuitement — construit une liste de lecteurs qu'on nourrit avant qu'ils
 * soient prêts à payer RADAR. Ce n'est pas l'Atlas : l'Atlas vend
 * l'architecture, celui-ci amène vers RADAR.
 */

const T = {
  fr: {
    kicker: "Restez au courant",
    title: "Recevez la prochaine lecture, gratuitement.",
    body: "Une marque, dans votre boîte mail, dès qu'une nouvelle lecture est publiée. Pas d'abonnement, pas de carte bancaire.",
    placeholder: "Votre email",
    cta: "Recevoir la prochaine lecture",
    loading: "Envoi…",
    done: "C'est noté. La prochaine lecture arrive dans votre boîte.",
    error: "Une erreur est survenue. Merci de réessayer.",
    nospam: "Pas de spam. Vous pouvez vous désinscrire à tout moment.",
  },
  en: {
    kicker: "Stay in the loop",
    title: "Get the next reading, free.",
    body: "One brand, in your inbox, the moment a new reading is published. No subscription, no card.",
    placeholder: "Your email",
    cta: "Get the next reading",
    loading: "Sending…",
    done: "Noted. The next reading is on its way to your inbox.",
    error: "Something went wrong. Please try again.",
    nospam: "No spam. Unsubscribe anytime.",
  },
}

export function NextReadCapture({ from }: { from: string }) {
  const t = useT(T)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const clean = sanitize(email, LIMITS.email)
    if (!isValidEmail(clean)) {
      setStatus("error")
      return
    }
    const limit = rateLimit("next_read")
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
        body: JSON.stringify({ email: clean, source: `next_read_${from}` }),
      })
      clearTimeout(timeout)
      if (res.ok) {
        setStatus("done")
        track("lectures_capture", { from })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="border border-hair bg-white/[0.02] p-7 md:p-10">
      <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.2em] text-brand">{t.kicker}</div>
      <h2 className="mb-4 font-serif text-[clamp(1.3rem,2.6vw,1.8rem)] font-bold leading-snug">{t.title}</h2>
      <p className="mb-7 max-w-[520px] body-sm">{t.body}</p>

      {status === "done" ? (
        <p role="status" aria-live="polite" className="font-serif text-base italic text-brand">
          {t.done}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-start" noValidate>
          <input
            type="email"
            name="email"
            maxLength={LIMITS.email}
            autoComplete="email"
            inputMode="email"
            required
            placeholder={t.placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value.slice(0, LIMITS.email))}
            className="field w-full sm:max-w-[280px]"
          />
          <button type="submit" disabled={status === "loading"} className="btn-primary shrink-0 disabled:opacity-60">
            {status === "loading" ? t.loading : t.cta}
          </button>
        </form>
      )}

      {status === "error" && (
        <p role="alert" className="mt-3 text-[13px] text-brand">
          {t.error}
        </p>
      )}
      {status !== "done" && <p className="mt-3 font-sans text-[11px] text-chalk-40">{t.nospam}</p>}
    </div>
  )
}
