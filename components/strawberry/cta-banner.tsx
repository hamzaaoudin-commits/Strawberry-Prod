"use client"

import { LocaleLink as Link } from "@/components/locale-link"
import { useScrollReveal } from "@/hooks/use-strawberry"
import { useT } from "@/lib/i18n"

const T = {
  en: { h2: "Seven days, and you will know what to change.", sub: "The narrative audit: what you say, what the market keeps of it, and the moves that pull you out. 490 €, paid once.", cta1: "Order the audit" },
  fr: { h2: "Sept jours, et vous saurez quoi changer.", sub: "L'audit narratif : ce que vous racontez, ce que le marché en retient, et les mouvements qui vous en sortent. 490 €, payé une fois.", cta1: "Commander l'audit" },
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
            "bg-[linear-gradient(135deg,rgba(255,34,51,0.15),rgba(255,77,46,0.1),rgba(220,38,38,0.08))]",
            "shadow-[0_0_120px_rgba(255,34,51,0.15)]",
            "transition-all duration-[900ms] ease-[cubic-bezier(.22,.68,0,1.2)]",
            vis ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
          ].join(" ")}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,34,51,0.12),transparent_70%)]"
          />

          <h2 className="relative mb-5 font-serif text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.03em] text-gradient">
            {t.h2}
          </h2>

          <p className="mx-auto mb-12 max-w-[500px] font-sans text-lg leading-relaxed text-white/50">
            {t.sub}
          </p>

          {/* Un seul geste, sans second lien : la page « toutes les offres »
              qu'il visait a été retirée, et rien ne la remplace — chaque
              offre a déjà sa propre page depuis le pied de page. */}
          <div className="relative flex flex-col items-center gap-5">
            <Link
              href="/brand-narrative-audit"
              className="btn-primary max-w-full px-11 py-[18px] text-center leading-snug"
            >
              {t.cta1}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
