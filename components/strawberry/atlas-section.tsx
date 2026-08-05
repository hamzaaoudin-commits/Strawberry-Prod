"use client"

import { useState } from "react"
import { track } from "@vercel/analytics"
import { useT } from "@/lib/i18n"
import { CONTACT_ENDPOINT } from "@/lib/config"
import { isValidEmail, sanitize, LIMITS, rateLimit } from "@/lib/form-security"

/**
 * L'Atlas, en notification plutôt qu'en section.
 *
 * L'ancienne version occupait une pleine section de la home — couverture,
 * longue liste de citations, gros titre — au même niveau visuel que le reste
 * du contenu. Ce n'est pas du contenu qu'on lit, c'est une offre annexe
 * ponctuelle : elle mérite d'être présentée comme telle, une carte compacte
 * avec deux issues explicites — lire l'Atlas (email), ou ignorer et
 * continuer.
 */

const T = {
  en: {
    free: "Free Resource",
    badge: "FREE RESOURCE",
    h2: "30 Architectures. An Atlas.",
    lead: "128 pages. Thirty narrative situations founders find themselves in, and the moves that resolved them.",
    read: "Read the Atlas \u2192",
    dismiss: "No thanks",
    modalSub: "128 pages. Free. Enter your email and the Atlas opens immediately.",
    opening: "Opening the Atlas\u2026",
    emailPlaceholder: "Your email",
    loading: "Opening\u2026",
    error: "Something went wrong. Try again.",
    nospam: "No spam. One email to receive the Atlas.",
  },
  fr: {
    free: "Ressource gratuite",
    badge: "RESSOURCE GRATUITE",
    h2: "30 Architectures. Un Atlas.",
    lead: "128 pages. Trente situations narratives dans lesquelles se trouvent des fondateurs, et les mouvements qui les ont résolues.",
    read: "Lire l'Atlas \u2192",
    dismiss: "Non merci",
    modalSub: "128 pages. Gratuit. Entrez votre email et l'Atlas s'ouvre immédiatement.",
    opening: "Ouverture de l'Atlas\u2026",
    emailPlaceholder: "Votre email",
    loading: "Ouverture\u2026",
    error: "Une erreur est survenue. Merci de réessayer.",
    nospam: "Pas de spam. Un seul email pour recevoir l'Atlas.",
  },
}

function AtlasModal({ onClose }: { onClose: () => void }) {
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
    const limit = rateLimit("atlas")
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
        body: JSON.stringify({ email: clean, source: "atlas_download_home" }),
      })
      clearTimeout(timeout)
      if (res.ok) {
        setStatus("done")
        track("atlas_email_captured", { from: "home" })
        setTimeout(() => {
          window.location.href = "/atlas/30-architectures-atlas.pdf"
          onClose()
        }, 1200)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t.free}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/85 p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[480px] rounded-xl border border-brand/25 bg-ink-soft p-8 md:p-12"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-4 border-none bg-transparent text-[22px] leading-none text-chalk-40 hover:text-white"
        >
          ×
        </button>

        <div className="eyebrow mb-4 text-brand">{t.free}</div>

        <h2 className="mb-3 font-serif text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-white">
          {t.h2}
        </h2>

        <p className="mb-7 font-sans text-sm leading-relaxed text-white/55">{t.modalSub}</p>

        {status === "done" ? (
          <p role="status" aria-live="polite" className="py-4 text-center font-serif text-base italic text-brand">
            {t.opening}
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
            <input
              type="email"
              name="email"
              maxLength={LIMITS.email}
              autoComplete="email"
              inputMode="email"
              required
              placeholder={t.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value.slice(0, LIMITS.email))}
              className="field rounded-lg"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="cursor-pointer rounded-full border-none bg-[linear-gradient(135deg,#e63946,#ff1a1a)] px-7 py-3.5 font-sans text-sm font-bold tracking-[0.06em] text-white shadow-[0_8px_30px_rgba(230,57,70,0.35)] disabled:opacity-60"
            >
              {status === "loading" ? t.loading : t.read}
            </button>
            {status === "error" && (
              <p role="alert" className="m-0 text-center text-[13px] text-brand">{t.error}</p>
            )}
            <p className="m-0 text-center font-sans text-[11px] text-white/25">{t.nospam}</p>
          </form>
        )}
      </div>
    </div>
  )
}

export function AtlasSection() {
  const t = useT(T)
  const [showModal, setShowModal] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <section className="border-t border-white/[0.06] bg-ink-soft px-gutter py-14">
      {showModal && <AtlasModal onClose={() => setShowModal(false)} />}

      {/* Une carte, pas une section pleine largeur : ceci est une offre
          annexe ponctuelle, pas un contenu de la page. */}
      <div className="mx-auto max-w-[640px] border border-brand-hair bg-[linear-gradient(180deg,rgba(230,57,70,0.06)_0%,rgba(10,10,10,0.4)_100%)] p-7 md:p-9">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1.5">
          <span className="font-sans text-[11px] font-semibold tracking-[0.1em] text-brand">{t.badge}</span>
        </div>

        <h2 className="m-0 mb-3 font-serif text-[clamp(1.4rem,2.8vw,1.9rem)] font-bold leading-tight tracking-[-0.02em] text-white">
          {t.h2}
        </h2>

        <p className="m-0 mb-7 max-w-[480px] font-sans text-[14.5px] leading-relaxed text-white/55">{t.lead}</p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => {
              track("atlas_click", { from: "home" })
              setShowModal(true)
            }}
            className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border-none bg-[linear-gradient(135deg,#e63946,#ff1a1a)] px-7 py-3 font-sans text-sm font-bold tracking-[0.04em] text-white shadow-[0_8px_32px_rgba(230,57,70,0.35)]"
          >
            {t.read}
          </button>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="cursor-pointer border-none bg-transparent font-sans text-[13px] text-chalk-40 underline-offset-2 hover:text-white hover:underline"
          >
            {t.dismiss}
          </button>
        </div>
      </div>
    </section>
  )
}
