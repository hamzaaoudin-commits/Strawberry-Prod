"use client"

import { useState } from "react"
import { track } from "@vercel/analytics"
import { useT } from "@/lib/i18n"
import { FORMSPREE_URL } from "@/lib/config"
import { isValidEmail, sanitize, LIMITS, rateLimit } from "@/lib/form-security"


const T = {
  en: {
    free: "Free Resource",
    freeBadge: "FREE RESOURCE",
    h2a: "30 Architectures.",
    h2b: "An Atlas.",
    modalSub: "128 pages. Free. Enter your email and the Atlas opens immediately.",
    opening: "Opening the Atlas\u2026",
    emailPlaceholder: "Your email",
    loading: "Opening\u2026",
    read: "Read the Atlas \u2192",
    error: "Something went wrong. Try again.",
    nospam: "No spam. One email to receive the Atlas.",
    lead: "Thirty composite portraits of the narrative situations founders find themselves in \u2014 and the architectural moves that resolved them. Not a portfolio. A map.",
    italic: "If you recognize yourself in one of them \u2014 you have already begun the work.",
    meta: "128 pages \u00b7 PDF \u00b7 Free \u00b7 One email. No spam.",
    items: [
      "We had pivoted three times. I no longer knew what to say at dinner.",
      "I sold the company. I took two years. I came back. I refuse to be the founder of my last company.",
      "I refuse to hire. I refuse to scale. I cannot keep apologizing for it.",
      "Every brief we receive treats us as an agency. We are not.",
      "We are building something that does not exist. Every prospect tries to put us in a box that already does.",
      "+ 25 more architectures across 5 categories.",
    ],
  },
  fr: {
    free: "Ressource gratuite",
    freeBadge: "RESSOURCE GRATUITE",
    h2a: "30 Architectures.",
    h2b: "Un Atlas.",
    modalSub: "128 pages. Gratuit. Entre ton email et l'Atlas s'ouvre imm\u00e9diatement.",
    opening: "Ouverture de l'Atlas\u2026",
    emailPlaceholder: "Ton email",
    loading: "Ouverture\u2026",
    read: "Lire l'Atlas \u2192",
    error: "Une erreur est survenue. R\u00e9essaie.",
    nospam: "Pas de spam. Un seul email pour recevoir l'Atlas.",
    lead: "Trente portraits composites des situations narratives dans lesquelles se trouvent les fondateurs \u2014 et les mouvements d'architecture qui les ont r\u00e9solues. Pas un portfolio. Une carte.",
    italic: "Si tu te reconnais dans l'un d'eux \u2014 tu as d\u00e9j\u00e0 commenc\u00e9 le travail.",
    meta: "128 pages \u00b7 PDF \u00b7 Gratuit \u00b7 Un email. Pas de spam.",
    items: [
      "On avait piv\u00f4t\u00e9 trois fois. Je ne savais plus quoi dire \u00e0 un d\u00eener.",
      "J'ai vendu la bo\u00eete. J'ai pris deux ans. Je suis revenu. Je refuse d'\u00eatre le fondateur de ma derni\u00e8re entreprise.",
      "Je refuse de recruter. Je refuse de scaler. Je ne peux plus continuer \u00e0 m'en excuser.",
      "Chaque brief qu'on re\u00e7oit nous traite comme une agence. On n'en est pas une.",
      "On construit quelque chose qui n'existe pas. Chaque prospect essaie de nous mettre dans une case qui existe d\u00e9j\u00e0.",
      "+ 25 autres architectures r\u00e9parties en 5 cat\u00e9gories.",
    ],
  },
  es: {
    free: "Recurso gratuito",
    freeBadge: "RECURSO GRATUITO",
    h2a: "30 Arquitecturas.",
    h2b: "Un Atlas.",
    modalSub: "128 p\u00e1ginas. Gratis. Introduce tu email y el Atlas se abre al instante.",
    opening: "Abriendo el Atlas\u2026",
    emailPlaceholder: "Tu email",
    loading: "Abriendo\u2026",
    read: "Leer el Atlas \u2192",
    error: "Algo sali\u00f3 mal. Int\u00e9ntalo de nuevo.",
    nospam: "Sin spam. Un email para recibir el Atlas.",
    lead: "Treinta retratos compuestos de las situaciones narrativas en las que se encuentran los fundadores \u2014 y los movimientos arquitect\u00f3nicos que las resolvieron. No es un portfolio. Es un mapa.",
    italic: "Si te reconoces en alguno de ellos \u2014 ya has empezado el trabajo.",
    meta: "128 p\u00e1ginas \u00b7 PDF \u00b7 Gratis \u00b7 Un email. Sin spam.",
    items: [
      "Hab\u00edamos pivotado tres veces. Ya no sab\u00eda qu\u00e9 decir en una cena.",
      "Vend\u00ed la empresa. Me tom\u00e9 dos a\u00f1os. Volv\u00ed. Me niego a ser el fundador de mi \u00faltima empresa.",
      "Me niego a contratar. Me niego a escalar. No puedo seguir disculp\u00e1ndome por ello.",
      "Cada brief que recibimos nos trata como una agencia. No lo somos.",
      "Construimos algo que no existe. Cada prospecto intenta meternos en una caja que ya existe.",
      "+ 25 arquitecturas m\u00e1s repartidas en 5 categor\u00edas.",
    ],
  },
}
function AtlasModal({ onClose }: { onClose: () => void }) {
  const t = useT(T)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Validate and clamp before anything leaves the browser.
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
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        credentials: "omit",
        referrerPolicy: "strict-origin-when-cross-origin",
        signal: controller.signal,
        body: JSON.stringify({ email: clean, source: "atlas_download_home" }),
      })
      clearTimeout(timeout)
      if (res.ok) {
        setStatus("done")
        track("atlas_email_captured", { from: "home" })
        setTimeout(() => {
          window.location.href = "/30-architectures-atlas.pdf"
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
          {t.h2a}
          <br />
          {t.h2b}
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

  return (
    <section className="border-t border-white/[0.06] bg-ink-soft px-gutter py-16 md:py-32">
      {showModal && <AtlasModal onClose={() => setShowModal(false)} />}

      <div className="shell">
        <div className="flex flex-col gap-12">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1.5">
                <span className="font-sans text-[11px] font-semibold tracking-[0.1em] text-brand">
                  {t.freeBadge}
                </span>
              </div>
              <h2 className="m-0 font-serif text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
                {t.h2a}
                <br />
                <span className="text-gradient">{t.h2b}</span>
              </h2>
            </div>

            <div className="max-w-[480px] pt-2">
              <p className="m-0 mb-8 font-sans text-[clamp(0.95rem,1.6vw,1.1rem)] leading-[1.8] text-white/50">
                {t.lead}
              </p>
              <p className="m-0 mb-8 font-serif text-[clamp(0.95rem,1.4vw,1.05rem)] italic leading-[1.7] text-white/35">
                {t.italic}
              </p>

              <button
                type="button"
                onClick={() => {
                  track("atlas_click", { from: "home" })
                  setShowModal(true)
                }}
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border-none bg-[linear-gradient(135deg,#e63946,#ff1a1a)] px-8 py-3.5 font-sans text-sm font-bold tracking-[0.04em] text-white shadow-[0_8px_32px_rgba(230,57,70,0.35)]"
              >
                {t.read}
              </button>

              <p className="mt-3 font-sans text-xs tracking-[0.05em] text-white/25">{t.meta}</p>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.06] [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
            {["01", "03", "07", "13", "19", "..."].map((n, idx) => (
              <div key={n} className="flex gap-4 bg-ink px-6 py-7">
                <span className="shrink-0 pt-[3px] font-sans text-[11px] font-bold tracking-[0.08em] text-brand">
                  {n}
                </span>
                <p className="m-0 font-serif text-[13px] italic leading-[1.7] text-chalk-40">
                  {t.items[idx]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
