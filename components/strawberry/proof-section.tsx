import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { LIVE } from "@/lib/config"
import { TrackedLink } from "@/components/strawberry/tracked-link"
import { ViewTracker } from "@/components/strawberry/view-tracker"

/**
 * La preuve d'œil.
 *
 * Le compteur RADAR vient de LIVE.radar dans config.ts, tenu à la main — un
 * compteur calculé par le code serait de la preuve fabriquée. Le fondateur a
 * sa propre place sur la page Le Studio, avec la photo ; il n'a pas besoin
 * d'être répété ici.
 */

const T = {
  en: {
    kicker: "Proof",
    radarLabel: "Brands read",
    radarTitle: "The eye is trained in public, brand after brand.",
    radarBody:
      "Over 350 real brands dissected: what each one emits, what interferes, and the heading we would give it. The judgement applied to your house is the same one exercised here, where anyone can check it.",
    radarCta: "See RADAR",
  },
  fr: {
    kicker: "Les preuves",
    radarLabel: "Marques lues",
    radarTitle: "L'œil s'entraîne en public, marque après marque.",
    radarBody:
      "Plus de 350 marques réelles disséquées : ce que chacune émet, ce qui la parasite, et le cap que nous lui donnerions. Le jugement appliqué à votre maison est celui qui s'exerce ici, où n'importe qui peut le vérifier.",
    radarCta: "Voir RADAR",
  },
}

export function ProofSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)

  return (
    <section className="section bg-ink-soft text-white">
      <ViewTracker name="proof" />
      <div className="shell">
        <div className="kicker mb-10">{t.kicker}</div>

        <div className="mx-auto flex max-w-[560px] flex-col border border-hair p-7 md:p-9">
          <div className="mb-6 flex items-baseline gap-3">
            <span className="font-serif text-[clamp(2.6rem,6vw,3.6rem)] font-bold leading-none text-brand">
              {LIVE.radar.count}
            </span>
            <span className="font-sans text-[13px] uppercase tracking-[0.14em] text-chalk-40">
              {t.radarLabel}
            </span>
          </div>
          <h3 className="mb-4 font-serif text-[clamp(1.25rem,2.4vw,1.7rem)] font-bold leading-snug">
            {t.radarTitle}
          </h3>
          <p className="mb-7 font-sans text-[15px] leading-relaxed text-chalk-65">{t.radarBody}</p>
          <TrackedLink
            href="/radar"
            className="btn-quiet self-start"
            event="cta_click"
            data={{ section: "proof", target: "radar" }}
          >
            {t.radarCta}
          </TrackedLink>
        </div>
      </div>
    </section>
  )
}
