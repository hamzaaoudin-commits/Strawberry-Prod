import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { ViewTracker } from "@/components/strawberry/view-tracker"
import { CountUp } from "@/components/strawberry/count-up"

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
  const [a, b] = t.stats

  return (
    <section className="section bg-ink-soft text-white">
      <ViewTracker name="impact_stats" />
      <div className="shell">
        <div className="kicker mb-10 text-center">{t.kicker}</div>

        {/* Une frise plutôt que deux cartes empilées : les deux chiffres se
            lisent comme une seule phrase, séparés par un simple trait. */}
        <div className="mx-auto flex max-w-[820px] flex-col items-center justify-center gap-8 rounded-sm bg-white/[0.015] px-6 py-10 sm:flex-row sm:gap-0 md:px-10">
          <div className="flex flex-col items-center text-center sm:flex-1 sm:items-end sm:pr-8 sm:text-right">
            <CountUp value={a.n} className="font-serif text-[clamp(2.6rem,6vw,3.4rem)] font-bold leading-none text-brand" />
            <p className="m-0 mt-3 max-w-[240px] font-sans text-[13px] font-semibold leading-snug text-white">{a.title}</p>
            <p className="m-0 mt-1.5 max-w-[240px] font-sans text-[12px] leading-snug text-chalk-55">{a.body}</p>
            <div className="mt-3 font-sans text-[10.5px] uppercase tracking-[0.14em] text-chalk-40">{a.source}</div>
          </div>

          <div aria-hidden className="h-px w-16 bg-brand/30 sm:h-16 sm:w-px" />

          <div className="flex flex-col items-center text-center sm:flex-1 sm:items-start sm:pl-8 sm:text-left">
            <CountUp value={b.n} className="font-serif text-[clamp(2.6rem,6vw,3.4rem)] font-bold leading-none text-brand" />
            <p className="m-0 mt-3 max-w-[240px] font-sans text-[13px] font-semibold leading-snug text-white">{b.title}</p>
            <p className="m-0 mt-1.5 max-w-[240px] font-sans text-[12px] leading-snug text-chalk-55">{b.body}</p>
            <div className="mt-3 font-sans text-[10.5px] uppercase tracking-[0.14em] text-chalk-40">{b.source}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
