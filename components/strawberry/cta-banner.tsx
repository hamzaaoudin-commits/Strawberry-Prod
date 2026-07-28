"use client"

import { LocaleLink as Link } from "@/components/locale-link"
import { useScrollReveal } from "@/hooks/use-strawberry"
import { useT } from "@/lib/i18n"

const T = {
  en: { h2: "Become impossible to confuse.", sub: "Most houses wait. Yours shouldn't have to.", cta1: "See the Commission", cta2: "Read the SILLAGE document" },
  fr: { h2: "Devenez impossible à confondre.", sub: "La plupart des maisons attendent. La vôtre n'a pas à le faire.", cta1: "Voir la commande", cta2: "Lire le document SILLAGE" },
  es: { h2: "Vuélvase imposible de confundir.", sub: "La mayoría de las casas esperan. La suya no tiene por qué.", cta1: "Ver el encargo", cta2: "Leer el documento SILLAGE" },
}

export function CTABanner() {
  const t = useT(T)
  const [ref, vis] = useScrollReveal()

  return (
    <section className="relative overflow-hidden bg-ink-soft px-gutter py-20">
      <div ref={ref} className="shell">
        <div
          className={[
            "relative overflow-hidden rounded-[36px] border border-white/10 px-8 py-20 text-center md:px-24",
            "bg-[linear-gradient(135deg,rgba(230,57,70,0.15),rgba(255,26,26,0.1),rgba(220,38,38,0.08))]",
            "shadow-[0_0_120px_rgba(230,57,70,0.15)]",
            "transition-all duration-[900ms] ease-[cubic-bezier(.22,.68,0,1.2)]",
            vis ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
          ].join(" ")}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(230,57,70,0.12),transparent_70%)]"
          />

          <h2 className="relative mb-5 font-serif text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.03em] text-white">
            {t.h2}
          </h2>

          <p className="mx-auto mb-12 max-w-[500px] font-sans text-lg leading-relaxed text-white/50">
            {t.sub}
          </p>

          <div className="relative flex flex-wrap justify-center gap-4">
            <Link href="/brand-narrative-architecture" className="btn-primary px-11 py-[18px]">
              {t.cta1}
            </Link>
            <Link href="/sample-audit" className="btn-ghost px-11 py-[18px]">
              {t.cta2}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
