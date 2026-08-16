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
 * Le 74% vient de l'étude publiée par Ahrefs : leur détecteur maison a
 * analysé 900 000 pages web anglophones nouvellement créées en avril 2025,
 * une par domaine. 74,2% contenaient du contenu généré par IA — 2,5%
 * entièrement, 71,7% en mélange avec de l'écriture humaine. Seules 25,8%
 * étaient purement humaines.
 *
 * Il remplace une enquête Headstream de 2015 qui disait que 85% des
 * consommateurs ne pouvaient citer aucune histoire de marque mémorable :
 * vraie, mais elle datait de onze ans et contredisait l'argument temporel du
 * site — si le problème existait déjà en 2015, la machine n'a rien déclenché.
 * Celle-ci date de la bonne année et prouve la saturation elle-même.
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
        n: "74%",
        title: "des nouvelles pages web contiennent désormais du texte généré par une machine",
        body: "Sur 900 000 pages analysées, une par domaine. Seule une sur quatre est encore entièrement écrite par un humain.",
        source: "Ahrefs, analyse de 900 000 pages, 2025",
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
        n: "74%",
        title: "of newly created web pages now contain text written by a machine",
        body: "Across 900,000 pages analysed, one per domain. Only one in four is still written entirely by a human.",
        source: "Ahrefs, 900,000-page analysis, 2025",
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
            lisent comme une seule phrase, séparés par un simple trait.
            Grille à quatre lignes partagées entre les deux colonnes — le
            chiffre, le titre, le corps et la source s'alignent à la même
            hauteur des deux côtés, même si un texte est plus long que
            l'autre et prend plus de lignes. */}
        <div className="mx-auto grid max-w-[820px] grid-cols-1 items-center gap-x-10 gap-y-8 rounded-sm bg-white/[0.015] px-6 py-10 sm:grid-cols-[1fr_auto_1fr] sm:grid-rows-[auto_auto_auto_auto] md:px-10">
          <CountUp
            value={a.n}
            className="sm:[grid-column:1] sm:[grid-row:1] text-center font-serif text-[clamp(2.6rem,6vw,3.4rem)] font-bold leading-none text-gradient sm:text-right"
          />
          <p className="m-0 sm:[grid-column:1] sm:[grid-row:2] max-w-[240px] justify-self-center text-center font-sans text-[13px] font-semibold leading-snug text-white sm:justify-self-end sm:text-right">
            {a.title}
          </p>
          <p className="m-0 sm:[grid-column:1] sm:[grid-row:3] max-w-[240px] justify-self-center text-center font-sans text-[12px] leading-snug text-chalk-55 sm:justify-self-end sm:text-right">
            {a.body}
          </p>
          <div className="sm:[grid-column:1] sm:[grid-row:4] justify-self-center text-center font-sans text-[10.5px] uppercase tracking-[0.14em] text-chalk-40 sm:justify-self-end sm:text-right">
            {a.source}
          </div>

          <div aria-hidden className="h-px w-16 justify-self-center bg-brand/30 sm:[grid-column:2] sm:[grid-row:1/5] sm:h-full sm:w-px" />

          <CountUp
            value={b.n}
            className="sm:[grid-column:3] sm:[grid-row:1] text-center font-serif text-[clamp(2.6rem,6vw,3.4rem)] font-bold leading-none text-gradient sm:text-left"
          />
          <p className="m-0 sm:[grid-column:3] sm:[grid-row:2] max-w-[240px] justify-self-center text-center font-sans text-[13px] font-semibold leading-snug text-white sm:justify-self-start sm:text-left">
            {b.title}
          </p>
          <p className="m-0 sm:[grid-column:3] sm:[grid-row:3] max-w-[240px] justify-self-center text-center font-sans text-[12px] leading-snug text-chalk-55 sm:justify-self-start sm:text-left">
            {b.body}
          </p>
          <div className="sm:[grid-column:3] sm:[grid-row:4] justify-self-center text-center font-sans text-[10.5px] uppercase tracking-[0.14em] text-chalk-40 sm:justify-self-start sm:text-left">
            {b.source}
          </div>
        </div>
      </div>
    </section>
  )
}
