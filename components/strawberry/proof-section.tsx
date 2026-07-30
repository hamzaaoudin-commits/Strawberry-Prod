import Image from "next/image"
import { LocaleLink as Link } from "@/components/locale-link"
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
 * L'histoire du fondateur était absente, et founder.jpg dormait dans /public.
 */

const T = {
  en: {
    kicker: "Proof",
    radarLabel: "Brands read since",
    radarTitle: "The eye is trained daily, in public.",
    radarBody:
      "One brand dissected every day: what it emits, what interferes, and the heading we would give it. The judgement applied to your house is the same one exercised here, where anyone can check it.",
    radarCta: "See RADAR",
    founderTitle: "Who writes it.",
    founderP1:
      "Hamza El Jaouahiry. This studio exists because the brand documents being produced everywhere had converged on the same readable register — competent, polished, indistinguishable, machine-replaceable.",
    founderP2:
      "Four houses per quarter, written by hand. Not a sales tactic: the structural limit of attention that is not divided.",
    founderCta: "Read the full account",
    founderAlt: "Hamza El Jaouahiry, founder of Strawberry Production",
  },
  fr: {
    kicker: "Les preuves",
    radarLabel: "Marques lues depuis",
    radarTitle: "L'œil s'entraîne tous les jours, en public.",
    radarBody:
      "Une marque disséquée chaque jour : ce qui émet, ce qui parasite, et le cap que nous lui donnerions. Le jugement appliqué à votre maison est celui qui s'exerce ici, où n'importe qui peut le vérifier.",
    radarCta: "Voir RADAR",
    founderTitle: "Qui l'écrit.",
    founderP1:
      "Hamza El Jaouahiry. Ce studio existe parce que les documents de marque produits partout avaient convergé vers le même registre lisible — compétent, léché, indifférenciable, remplaçable par une machine.",
    founderP2:
      "Quatre maisons par trimestre, écrites à la main. Ce n'est pas une tactique de vente : c'est la limite structurelle d'une attention qui ne se divise pas.",
    founderCta: "Lire le récit complet",
    founderAlt: "Hamza El Jaouahiry, fondateur de Strawberry Production",
  },
}

export function ProofSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)

  return (
    <section className="section bg-ink-soft text-white">
      <div className="shell">
        <div className="kicker mb-10">{t.kicker}</div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* RADAR — la preuve d'œil, chiffrée. */}
          <div className="flex flex-col border border-hair p-7 md:p-9">
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
            <Link href="/radar" className="btn-quiet mt-auto self-start">
              {t.radarCta}
            </Link>
          </div>

          {/* Le fondateur — la preuve la plus difficile à falsifier. */}
          <div className="flex flex-col border border-hair p-7 md:p-9">
            <div className="mb-6 flex items-center gap-5">
              <div className="relative h-[76px] w-[76px] shrink-0 overflow-hidden rounded-full border border-hair-strong">
                <Image
                  src="/founder.jpg"
                  alt={t.founderAlt}
                  fill
                  sizes="76px"
                  className="object-cover"
                />
              </div>
              <h3 className="m-0 font-serif text-[clamp(1.25rem,2.4vw,1.7rem)] font-bold leading-snug">
                {t.founderTitle}
              </h3>
            </div>
            <p className="mb-4 font-sans text-[15px] leading-relaxed text-chalk-65">{t.founderP1}</p>
            <p className="mb-7 font-sans text-[15px] leading-relaxed text-chalk-65">{t.founderP2}</p>
            <Link href="/about" className="btn-quiet mt-auto self-start">
              {t.founderCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
