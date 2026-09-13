"use client"

import { LocaleLink as Link } from "@/components/locale-link"
import { useScrollReveal } from "@/hooks/use-strawberry"
import { useT } from "@/lib/i18n"

const T = {
  en: { h2: "Seven days, and you will know what to change.", cta1: "Order the audit" },
  fr: { h2: "Sept jours, et vous saurez quoi changer.", cta1: "Commander l'audit" },
}

export function CTABanner() {
  const t = useT(T)
  const [ref, vis] = useScrollReveal()

  return (
    <section className="relative overflow-hidden bg-ink-soft px-gutter py-16">
      <div ref={ref} className="shell">
        <div
          className={[
            // Un encadré plus discret : rayon divisé par trois, marges
            // verticales réduites de moitié, et plus de dégradé de fond.
            // À 36px de rayon avec 20 unités de marge, ce bloc était plus
            // imposant que la section offre elle-même, alors qu'il ne fait
            // que rappeler l'action.
            "relative overflow-hidden rounded-xl border border-hair px-8 py-12 text-center md:px-16",
            "transition-all duration-[900ms] ease-[cubic-bezier(.22,.68,0,1.2)]",
            vis ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
          ].join(" ")}
        >
          {/* Le titre en blanc, pas en dégradé : le rouge est gardé pour le
              bouton, qui est la seule chose à cliquer ici. Deux éléments
              rouges empilés se disputaient l'attention. */}
          <h2 className="relative mb-8 font-serif text-[clamp(1.6rem,3.4vw,2.6rem)] font-bold tracking-[-0.02em] text-white">
            {t.h2}
          </h2>

          <div className="relative flex flex-col items-center">
            <Link href="/brand-narrative-audit" className="btn-primary max-w-full">
              {t.cta1}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
