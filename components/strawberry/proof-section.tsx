import { TrackLink } from "@/components/strawberry/track-link"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { LIVE } from "@/lib/config"

/**
 * Les preuves qui n'étaient nulle part sur la page d'accueil.
 *
 * Le compteur RADAR est une preuve d'œil : un chiffre vérifiable de marques
 * lues, pas une affirmation de compétence. Il vient de LIVE.radar dans
 * config.ts, tenu à la main — un compteur calculé par le code serait de la
 * preuve fabriquée.
 *
 * Le second bloc (« Qui l'écrit ») est retiré : le fondateur a déjà sa page,
 * et cette carte dupliquait l'about-section plus bas sans rien ajouter.
 */

const T = {
  en: {
    kicker: "Proof",
    radarLabel: "Brands read since",
    radarTitle: "The eye is trained daily, in public.",
    radarBody: "One brand judged every day, in public — the same eye we'd apply to yours.",
    radarCta: "See RADAR",
  },
  fr: {
    kicker: "Les preuves",
    radarLabel: "Marques lues depuis",
    radarTitle: "L'œil s'entraîne tous les jours, en public.",
    radarBody: "Une marque jugée chaque jour, en public — le même œil qu'on appliquerait à la vôtre.",
    radarCta: "Voir RADAR",
  },
}

export function ProofSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)

  return (
    <section className="section bg-ink-soft text-white">
      <div className="shell">
        <div className="kicker mb-10">{t.kicker}</div>

        <div className="mx-auto flex max-w-[620px] flex-col border border-hair p-7 md:p-9">
          <div className="mb-6 flex items-baseline gap-3">
            <span className="font-serif text-[clamp(2.6rem,6vw,3.6rem)] font-bold leading-none text-brand">
              {LIVE.radar.count}
            </span>
            <span className="font-sans text-[13px] uppercase tracking-[0.14em] text-chalk-40">
              {t.radarLabel} {LIVE.radar.since[lang]}
            </span>
          </div>
          <h3 className="mb-4 font-serif text-[clamp(1.25rem,2.4vw,1.7rem)] font-bold leading-snug">
            {t.radarTitle}
          </h3>
          <p className="mb-7 font-sans text-[15px] leading-relaxed text-chalk-65">{t.radarBody}</p>
          <TrackLink
            href="/radar"
            event="radar_click"
            data={{ from: "home_proof" }}
            className="btn-quiet self-start"
          >
            {t.radarCta}
          </TrackLink>
        </div>
      </div>
    </section>
  )
}
