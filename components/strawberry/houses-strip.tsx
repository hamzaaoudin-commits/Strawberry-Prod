import { TrackLink } from "@/components/strawberry/track-link"
import { LIVE } from "@/lib/config"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"

/**
 * Ce que le client devient.
 *
 * Le registre existait sur /maisons et n'apparaissait nulle part sur la page
 * que tout le monde voit. Or c'est le niveau identitaire : on n'achète pas
 * seulement un document, on entre dans une cohorte fermée et publique.
 *
 * La formule « vous entrez dans les Maisons » et la pré-annonce du numéro de
 * commande sont retirées : la première ne se comprend pas hors contexte, la
 * seconde n'a rien à faire avant l'achat. Le numéro réel vit sur /maisons.
 */

const T = {
  fr: {
    kicker: "Ce que vous rejoignez",
    h2a: "Une liste courte,",
    h2b: "publique, tenue à la main.",
    lead: "Quatre maisons par trimestre, pas une de plus. Chaque commande est consignée dans un registre public — parce qu'une appartenance qu'on ne peut pas vérifier n'en est pas une.",
    scarcity: (p: string, r: number) => `${p} : ${r} place${r > 1 ? "s" : ""} restante${r > 1 ? "s" : ""}.`,
    cta: "Voir le registre",
  },
  en: {
    kicker: "What you join",
    h2a: "A short list,",
    h2b: "public, kept by hand.",
    lead: "Four houses per quarter, not one more. Every commission is logged in a public register — because a membership you cannot verify is not one.",
    scarcity: (p: string, r: number) => `${p}: ${r} place${r > 1 ? "s" : ""} left.`,
    cta: "See the register",
  },
}

export function HousesStrip({ lang }: { lang: Lang }) {
  const t = pick(T, lang)
  const sc = LIVE.scarcity

  return (
    <section className="section text-white">
      <div className="shell">
        <div className="mx-auto max-w-[860px] border border-brand-hair p-7 md:p-11">
          <div className="kicker mb-6">{t.kicker}</div>
          <h2 className="mb-6 font-serif text-[clamp(1.6rem,3.4vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            {t.h2a}
            <br />
            <span className="text-gradient">{t.h2b}</span>
          </h2>
          <p className="mb-9 max-w-[620px] font-sans text-[15.5px] leading-[1.8] text-chalk-65">{t.lead}</p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-hair pt-7">
            <span aria-hidden className="h-[7px] w-[7px] shrink-0 rounded-full bg-brand shadow-[0_0_8px_#e63946]" />
            <span className="font-sans text-[13.5px] text-chalk-55">{t.scarcity(sc.period, sc.remaining)}</span>
            <TrackLink
              href="/maisons"
              event="houses_register_click"
              data={{ from: "home_houses" }}
              className="ml-auto font-sans text-[13px] text-brand no-underline hover:underline"
            >
              {t.cta}
            </TrackLink>
          </div>
        </div>
      </div>
    </section>
  )
}
