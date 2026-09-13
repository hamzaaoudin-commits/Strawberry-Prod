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
            "relative overflow-hidden rounded-2xl border border-brand-hair bg-ink-soft px-8 py-20 text-center md:px-20",
            "shadow-[0_0_90px_-20px_rgba(255,34,51,0.35)]",
            "transition-all duration-[900ms] ease-[cubic-bezier(.22,.68,0,1.2)]",
            vis ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
          ].join(" ")}
        >
          {/* Un filet rouge en haut du bloc : il marque l'entrée dans le
              dernier moment de la page sans mettre de couleur dans le
              titre, qui resterait alors en concurrence avec le bouton. */}
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(108deg,#ff2233,#ff4d2e)]"
          />

          {/* En capitales.
              Le crénage serré (-0.03em) venait du bas-de-casse, où les
              lettres se resserrent naturellement. En capitales il colle les
              lettres : il passe donc à -0.01em, et l'interlignage se
              resserre un peu puisqu'il n'y a plus de jambages. */}
          <h2 className="relative mb-10 font-serif text-[clamp(1.9rem,4.4vw,3.2rem)] font-bold uppercase leading-[1.04] tracking-[-0.01em] text-white">
            {t.h2}
          </h2>

          <div className="relative flex flex-col items-center">
            <Link
              href="/brand-narrative-audit"
              className="btn-primary max-w-full px-12 py-[20px] text-[16px]"
            >
              {t.cta1}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
