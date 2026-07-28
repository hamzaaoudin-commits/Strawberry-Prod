"use client"

import { Suspense, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { useT, useLang } from "@/lib/i18n"
import { STRIPE_LINKS } from "@/lib/config"
import { BackHomeButton } from "@/components/strawberry/back-home-button"

const T = {
  fr: {
    badge: "Accès abonnés",
    h1: "La bibliothèque.",
    lead: "Votre code d'accès figure sur votre reçu Stripe et dans l'email de confirmation.",
    label: "Code d'accès",
    placeholder: "XXXXXX-00",
    submit: "Ouvrir la bibliothèque",
    retry: "Réessayer",
    sending: "Vérification…",
    errInvalid: "Ce code n'est plus valide. Le code en cours figure sur votre dernier reçu Stripe.",
    errRate: "Trop d'essais. Réessayez dans quelques minutes.",
    errServer: "La vérification a échoué. Réessayez dans un instant.",
    noSub: "Pas encore abonné ?",
    subscribe: "S'abonner — 15€/mois",
    stock: "31 fiches disponibles immédiatement · une nouvelle chaque jour",
  },
  en: {
    badge: "Subscriber access",
    h1: "The library.",
    lead: "Your access code is on your Stripe receipt and in the confirmation email.",
    label: "Access code",
    placeholder: "XXXXXX-00",
    submit: "Open the library",
    retry: "Try again",
    sending: "Checking…",
    errInvalid: "That code is no longer valid. The current one is on your latest Stripe receipt.",
    errRate: "Too many attempts. Try again in a few minutes.",
    errServer: "The check failed. Try again in a moment.",
    noSub: "Not subscribed yet?",
    subscribe: "Subscribe — 15€/month",
    stock: "31 reads available immediately · a new one every day",
  },
}

function AccessForm() {
  const t = useT(T)
  const { lang } = useLang()
  const router = useRouter()
  const params = useSearchParams()

  const [code, setCode] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle")
  const [error, setError] = useState("")

  const destination = params.get("from") || `/${lang}/radar/lecture`

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setStatus("sending")
    try {
      const res = await fetch("/api/radar/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ code }),
      })
      const data = await res.json()
      if (data.ok) {
        router.replace(destination)
        return
      }
      setStatus("error")
      setError(
        data.error === "rate_limited" ? t.errRate
        : data.error === "invalid_code" ? t.errInvalid
        : t.errServer
      )
    } catch {
      setStatus("error")
      setError(t.errServer)
    }
  }

  const failed = status === "error"

  return (
    <main className="min-h-screen overflow-hidden bg-ink font-sans text-white">
      <NavBar />
      <BackHomeButton />

      <section className="relative px-gutter pb-28 pt-40 text-center">
        <div className="glow-top" aria-hidden />

        {/* Le scope du radar en filigrane — même motif que la page publique. */}
        <svg
          viewBox="0 0 300 300"
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-28 h-[420px] w-[420px] -translate-x-1/2 opacity-[0.13]"
        >
          <circle cx="150" cy="150" r="140" fill="none" stroke="#e63946" strokeWidth="1" />
          <circle cx="150" cy="150" r="96" fill="none" stroke="#e63946" strokeWidth="1" />
          <circle cx="150" cy="150" r="52" fill="none" stroke="#e63946" strokeWidth="1" />
          <line x1="10" y1="150" x2="290" y2="150" stroke="#e63946" strokeWidth="0.8" />
          <line x1="150" y1="10" x2="150" y2="290" stroke="#e63946" strokeWidth="0.8" />
        </svg>

        <div className="relative mx-auto w-full max-w-[380px]">
          <div className="pill mb-8">{t.badge}</div>

          <h1 className="mb-4 font-serif text-[clamp(2rem,6vw,2.5rem)] font-bold leading-tight tracking-[-0.03em]">
            {t.h1}
          </h1>

          <p className="mb-9 font-sans text-[13.5px] leading-relaxed text-chalk-55">{t.lead}</p>

          <form onSubmit={submit} className="text-left" noValidate>
            <label className="field-label" htmlFor="radar-code">{t.label}</label>
            <input
              id="radar-code"
              name="code"
              type="text"
              required
              autoComplete="one-time-code"
              autoCapitalize="characters"
              spellCheck={false}
              maxLength={64}
              placeholder={t.placeholder}
              className={[
                "field mb-4 tracking-[0.22em]",
                failed ? "border-brand bg-brand/[0.06]" : "",
              ].join(" ")}
              value={code}
              onChange={(e) => setCode(e.target.value.slice(0, 64))}
              disabled={status === "sending"}
            />

            {failed && (
              <div
                role="alert"
                className="mb-4 border border-brand bg-brand/[0.08] px-3.5 py-3 font-sans text-[12px] leading-snug text-chalk-90"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full py-3.5 text-[13px] disabled:opacity-60"
            >
              {status === "sending" ? t.sending : failed ? t.retry : t.submit}
            </button>
          </form>

          <div className="mt-9 border-t border-white/[0.09] pt-6">
            <p className="mb-3 font-sans text-[12px] text-chalk-40">{t.noSub}</p>
            <a href={STRIPE_LINKS.radar} className="btn-ghost px-6 py-2.5 text-[12px]" rel="noopener">
              {t.subscribe}
            </a>
            <p className="mt-4 font-sans text-[11px] leading-relaxed text-white/30">{t.stock}</p>
          </div>

          <p className="mt-7">
            <Link href="/radar" className="font-sans text-[12px] text-chalk-40 underline underline-offset-4 hover:text-white">
              RADAR
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/** useSearchParams exige une frontière Suspense sur une page prérendue. */
export default function RadarAccessPage() {
  return (
    <Suspense fallback={null}>
      <AccessForm />
    </Suspense>
  )
}
