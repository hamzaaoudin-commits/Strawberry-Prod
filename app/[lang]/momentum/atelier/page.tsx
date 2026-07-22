"use client"

import { Suspense, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { NavBar } from "@/components/strawberry/navbar"
import { BackHomeButton } from "@/components/strawberry/back-home-button"
import { Footer } from "@/components/strawberry/footer"
import { useT, useLang } from "@/lib/i18n"

const T = {
  fr: {
    badge: "Espace client",
    h1: "Votre atelier.",
    lead: "Votre code figure dans le courriel de démarrage. Il ouvre uniquement l'espace de votre maison.",
    houseLabel: "Votre maison",
    codeLabel: "Code d'accès",
    submit: "Ouvrir l'atelier",
    retry: "Réessayer",
    sending: "Vérification…",
    err: "Ce code ne correspond à aucune maison. Vérifiez le courriel de démarrage.",
    errRate: "Trop d'essais. Réessayez dans quelques minutes.",
    contact: "Un souci d'accès ? Écrivez-nous.",
  },
  en: {
    badge: "Client space",
    h1: "Your workshop.",
    lead: "Your code is in the onboarding email. It opens your house's space only.",
    houseLabel: "Your house",
    codeLabel: "Access code",
    submit: "Open the workshop",
    retry: "Try again",
    sending: "Checking…",
    err: "That code matches no house. Check the onboarding email.",
    errRate: "Too many attempts. Try again in a few minutes.",
    contact: "Trouble getting in? Write to us.",
  },
  es: {
    badge: "Espacio cliente",
    h1: "Su taller.",
    lead: "Su código está en el correo de inicio. Abre únicamente el espacio de su casa.",
    houseLabel: "Su casa",
    codeLabel: "Código de acceso",
    submit: "Abrir el taller",
    retry: "Reintentar",
    sending: "Verificando…",
    err: "Ese código no corresponde a ninguna casa. Revise el correo de inicio.",
    errRate: "Demasiados intentos. Inténtelo de nuevo en unos minutos.",
    contact: "¿Problemas para entrar? Escríbanos.",
  },
}

function AccessForm() {
  const t = useT(T)
  const { lang } = useLang()
  const router = useRouter()
  const params = useSearchParams()

  const [slug, setSlug] = useState(params.get("m") ?? "")
  const [code, setCode] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle")
  const [error, setError] = useState("")

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setStatus("sending")
    try {
      const res = await fetch("/api/momentum/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ slug: slug.trim().toLowerCase(), code }),
      })
      const data = await res.json()
      if (data.ok) {
        router.replace(`/${lang}/momentum/atelier/${slug.trim().toLowerCase()}`)
        return
      }
      setStatus("error")
      setError(data.error === "rate_limited" ? t.errRate : t.err)
    } catch {
      setStatus("error")
      setError(t.err)
    }
  }

  const failed = status === "error"

  return (
    <main className="min-h-screen overflow-hidden bg-ink font-sans text-white">
      <NavBar />
      <BackHomeButton />

      <section className="relative px-gutter pb-28 pt-40 text-center">
        <div className="glow-top" aria-hidden />

        <div className="relative mx-auto w-full max-w-[380px]">
          <div className="pill mb-8">{t.badge}</div>
          <h1 className="mb-4 font-serif text-[clamp(2rem,6vw,2.5rem)] font-bold leading-tight tracking-[-0.03em]">
            {t.h1}
          </h1>
          <p className="mb-9 font-sans text-[13.5px] leading-relaxed text-chalk-55">{t.lead}</p>

          <form onSubmit={submit} className="text-left" noValidate>
            <label className="field-label" htmlFor="m-house">{t.houseLabel}</label>
            <input
              id="m-house"
              name="house"
              type="text"
              required
              autoComplete="organization"
              spellCheck={false}
              maxLength={64}
              className="field mb-4"
              value={slug}
              onChange={(e) => setSlug(e.target.value.slice(0, 64))}
              disabled={status === "sending"}
            />

            <label className="field-label" htmlFor="m-code">{t.codeLabel}</label>
            <input
              id="m-code"
              name="code"
              type="text"
              required
              autoComplete="one-time-code"
              autoCapitalize="characters"
              spellCheck={false}
              maxLength={64}
              placeholder="XXXXXX-00"
              className={["field mb-4 tracking-[0.22em]", failed ? "border-brand bg-brand/[0.06]" : ""].join(" ")}
              value={code}
              onChange={(e) => setCode(e.target.value.slice(0, 64))}
              disabled={status === "sending"}
            />

            {failed && (
              <div role="alert" className="mb-4 border border-brand bg-brand/[0.08] px-3.5 py-3 font-sans text-[12px] leading-snug text-chalk-90">
                {error}
              </div>
            )}

            <button type="submit" disabled={status === "sending"} className="btn-primary w-full py-3.5 text-[13px] disabled:opacity-60">
              {status === "sending" ? t.sending : failed ? t.retry : t.submit}
            </button>
          </form>

          <p className="mt-7 font-sans text-[12px] text-chalk-40">
            <a href="/#contact" className="underline underline-offset-4 hover:text-white">{t.contact}</a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function MomentumAccessPage() {
  return (
    <Suspense fallback={null}>
      <AccessForm />
    </Suspense>
  )
}
