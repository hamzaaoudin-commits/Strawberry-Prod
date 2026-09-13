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
 *
 * La phrase de clôture relie explicitement les deux chiffres : l'impact du
 * 74% (se fondre dans le bruit) et ce que représente le 38% (être
 * l'exception qu'on remarque et qu'on paie plus cher) — sans elle, les deux
 * restaient côte à côte sans se répondre.
 */

const T = {
  fr: {
    kicker: "Pourquoi ça compte",
    stats: [
      {
        n: "38%",
        title: "de plus payé par les acheteurs qui vous perçoivent comme réellement différent",
        body: "C'est ce que vaut le fait d'être reconnu plutôt que comparé : la moyenne toutes marques confondues plafonne à 11%. Même les acheteurs qui décident au prix payaient 14% de plus.",
        source: "Kantar, analyse BrandZ",
      },
      {
        n: "74%",
        title: "des nouvelles pages web contiennent désormais du texte généré par une machine",
        body: "Se fondre dans le bruit n'est plus un risque, c'est le scénario par défaut. Sur 900 000 pages analysées, une sur quatre seulement reste écrite par un humain — et c'est celle-là qu'on remarque.",
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
        body: "That is what being recognised rather than compared is worth: the average across all brands sits at 11%. Even price-driven buyers paid 14% more.",
        source: "Kantar, BrandZ analysis",
      },
      {
        n: "74%",
        title: "of newly created web pages now contain text written by a machine",
        body: "Blending into the noise is no longer a risk, it is the default outcome. Across 900,000 pages analysed, only one in four is still written by a human — and that is the one people notice.",
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

        {/* Les deux chiffres, côte à côte au-delà du mobile.
            Chaque bloc : le chiffre, ce qu'il mesure, pourquoi il compte,
            puis la source — dans cet ordre, pour qu'on puisse s'arrêter
            après la deuxième ligne et avoir compris. */}
        <div className="mx-auto grid max-w-[980px] gap-px bg-white/10 sm:grid-cols-2">
          {[a, b].map((s) => (
            <div key={s.n} className="bg-ink px-7 py-10 sm:px-9 sm:py-12">
              <div className="text-gradient font-serif text-[clamp(3rem,7vw,5rem)] font-bold leading-none tracking-[-0.03em]">
                {s.n}
              </div>
              <p className="mb-5 mt-4 font-serif text-[clamp(1.05rem,2vw,1.35rem)] font-semibold leading-[1.3] text-white">
                {s.title}
              </p>
              <p className="m-0 font-sans text-[14.5px] leading-[1.7] text-chalk-55">{s.body}</p>
              <div className="mt-6 border-t border-hair pt-4 font-sans text-[11px] uppercase tracking-[0.16em] text-chalk-40">
                {s.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
