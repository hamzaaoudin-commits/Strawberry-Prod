import { LocaleLink as Link } from "@/components/locale-link"
import { HOUSES, LIVE } from "@/lib/config"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"

/**
 * Ce que le client devient.
 *
 * Le registre existait sur /maisons et n'apparaissait nulle part sur la page
 * que tout le monde voit. Or c'est le niveau identitaire : on n'achète pas
 * seulement un document, on entre dans une cohorte numérotée et fermée. C'est
 * ce qui justifie le prix mieux que la liste des quatorze pièces.
 */

const T = {
  fr: {
    kicker: "Ce que vous devenez",
    h2a: "Vous ne devenez pas client.",
    h2b: "Vous entrez dans les Maisons.",
    lead: "Quatre par trimestre, pas une de plus. Chaque commande porte un numéro, et ce numéro ne se réattribue jamais. Le registre est public, parce qu'une appartenance invérifiable n'en est pas une.",
    nextLabel: "Votre commande portera le numéro",
    scarcity: (p: string, r: number) => `${p} : ${r} place${r > 1 ? "s" : ""} restante${r > 1 ? "s" : ""}.`,
    cta: "Voir le registre",
  },
  en: {
    kicker: "What you become",
    h2a: "You do not become a client.",
    h2b: "You enter the Houses.",
    lead: "Four per quarter, not one more. Every commission carries a number, and that number is never reassigned. The register is public, because a membership you cannot verify is not one.",
    nextLabel: "Your commission will carry number",
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
            <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-chalk-40">{t.nextLabel}</span>
            <span className="font-serif text-[2rem] font-bold leading-none text-brand">
              N&deg;&nbsp;{String(HOUSES.nextNumber).padStart(3, "0")}
            </span>
            <span className="font-sans text-[13.5px] text-chalk-55">{t.scarcity(sc.period, sc.remaining)}</span>
            <Link href="/maisons" className="ml-auto font-sans text-[13px] text-brand no-underline hover:underline">
              {t.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
