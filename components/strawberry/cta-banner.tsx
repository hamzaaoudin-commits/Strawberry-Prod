"use client"

import { LocaleLink as Link } from "@/components/locale-link"
import { useScrollReveal } from "@/hooks/use-strawberry"
import { useT } from "@/lib/i18n"

const T = {
  en: { h2: "Three weeks, and you will know what to change.", cta1: "Order the architecture" },
  fr: { h2: "Trois semaines, et vous saurez quoi changer.", cta1: "Commander l'architecture" },
}

export function CTABanner() {
  const t = useT(T)
  const [ref, vis] = useScrollReveal()

  return (
    <section className="relative overflow-hidden bg-ink px-gutter py-24">
      {/* La lueur vit derrière le bloc, pas dedans.
          Dans l'encadré, elle éclairait un fond déjà rouge et le rendait
          laiteux ; posée sous la section, elle fait monter le bloc de
          l'obscurité et donne du poids sans ajouter de couleur au premier
          plan. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(255,34,51,0.16),transparent_65%)]"
      />

      <div ref={ref} className="shell relative">
        <div
          className={[
            "relative overflow-hidden rounded-2xl border border-hair bg-ink-soft px-8 py-20 text-center md:px-20",
            "shadow-[0_0_90px_-20px_rgba(255,34,51,0.35)]",
            "transition-all duration-[900ms] ease-[cubic-bezier(.22,.68,0,1.2)]",
            vis ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
          ].join(" ")}
        >

          <h2 className="relative mb-10 font-serif text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.1] tracking-[-0.005em] text-white uppercase">
            {t.h2}
          </h2>

          <div className="relative flex flex-col items-center">
            <a
              href="https://buy.stripe.com/eVq7sEb2AfDe8Am2Raf7i0g"
              target="_blank"
              rel="noopener"
              className="btn-primary max-w-full px-12 py-[20px] text-[16px]"
            >
              {t.cta1}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
