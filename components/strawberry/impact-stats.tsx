import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { ViewTracker } from "@/components/strawberry/view-tracker"

/**
 * Deux statistiques réelles, avec de vraies sources — pas de chiffres
 * inventés pour faire nombre.
 *
 * Le 38% vient d'une analyse Kantar (BrandZ) sur le comportement d'achat
 * réel : les acheteurs qui se disent guidés par la marque paient 38% de plus
 * pour une marque perçue comme réellement différente, contre 11% de plus en
 * moyenne toutes marques confondues. Même les acheteurs guidés par le prix
 * paient 14% de plus dans ce cas. C'est l'argument central du site — vous
 * cessez d'être comparé au prix — avec un chiffre derrière plutôt qu'une
 * affirmation.
 *
 * Le 85% vient du Brand Storytelling Report 2015 de Headstream, une enquête
 * indépendante menée sur 2 000 adultes britanniques : 85% d'entre eux étaient
 * incapables de citer un seul exemple d'histoire de marque qui leur avait
 * marqué l'esprit. L'étude date de 2015 — la date est affichée, sans la
 * cacher.
 */

const T = {
  fr: {
    kicker: "Pourquoi ça compte",
    stats: [
      {
        n: "38%",
        title: "de plus payé par les acheteurs qui vous perçoivent comme réellement différent",
        body: "Contre 11% en moyenne, toutes marques confondues. Même les acheteurs guidés par le prix payaient 14% de plus dans ce cas.",
        source: "Kantar, analyse BrandZ",
      },
      {
        n: "85%",
        title: "des consommateurs incapables de citer une seule histoire de marque qui leur ait marqué l'esprit",
        body: "Sur 2 000 adultes interrogés, malgré des décennies de contenu de marque produit pour eux.",
        source: "Headstream, Brand Storytelling Report, 2015",
      },
    ],
  },
  en: {
    kicker: "Why it matters",
    stats: [
      {
        n: "38%",
        title: "more paid by buyers who perceive you as genuinely different",
        body: "Against 11% on average, across all brands. Even price-driven buyers paid 14% more in that case.",
        source: "Kantar, BrandZ analysis",
      },
      {
        n: "85%",
        title: "of consumers unable to name a single brand story that stayed with them",
        body: "Out of 2,000 adults surveyed, despite decades of brand content made for them.",
        source: "Headstream, Brand Storytelling Report, 2015",
      },
    ],
  },
}

export function ImpactStats({ lang }: { lang: Lang }) {
  const t = pick(T, lang)

  return (
    <section className="section bg-ink-soft text-white">
      <ViewTracker name="impact_stats" />
      <div className="shell">
        <div className="kicker mb-10 text-center">{t.kicker}</div>

        <div className="mx-auto grid max-w-[880px] gap-px bg-white/[0.09] sm:grid-cols-2">
          {t.stats.map((s) => (
            <div key={s.n} className="bg-ink px-7 py-9 text-center transition-colors duration-[900ms] ease-[cubic-bezier(.22,.68,0,1.2)] hover:bg-white/[0.02] md:px-9">
              <div className="mb-4 font-serif text-[clamp(2.6rem,6vw,3.6rem)] font-bold leading-none text-brand">
                {s.n}
              </div>
              <p className="m-0 mb-4 font-serif text-[1.05rem] font-bold leading-snug text-white">{s.title}</p>
              <p className="m-0 mb-5 font-sans text-[13.5px] leading-relaxed text-chalk-55">{s.body}</p>
              <div className="font-sans text-[11px] uppercase tracking-[0.14em] text-chalk-40">{s.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
