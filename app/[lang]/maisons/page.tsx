import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { HOUSES, LIVE } from "@/lib/config"
import { pick } from "@/lib/t"
import { isLang, type Lang } from "@/lib/lang"

/**
 * Le registre des Maisons.
 *
 * Rien sur le site ne disait ce que le client devient. Un document ne se
 * partage pas ; une appartenance, si. La cohorte porte le mot que le studio
 * emploie déjà partout — les maisons — et chaque commande porte un numéro
 * visible.
 *
 * Le registre est tenu à la main dans lib/config.ts. Les deux maisons de
 * démonstration y sont déclarées comme telles : un registre qui ferait passer
 * une maison inventée pour un client serait exactement la preuve fabriquée que
 * ce studio refuse.
 */

const T = {
  fr: {
    kicker: "Les Maisons",
    h1a: "On ne devient pas client.",
    h1b: "On entre dans les Maisons.",
    lead: "Quatre par trimestre. Chaque commande porte un numéro, et ce numéro ne se réattribue jamais. Le registre est public parce qu'une appartenance qu'on ne peut pas vérifier n'en est pas une.",
    nextLabel: "Prochaine commande",
    scarcity: (p: string, r: number) => `${p} : ${r} place${r > 1 ? "s" : ""} restante${r > 1 ? "s" : ""}.`,
    registerKicker: "Le registre",
    demoTag: "Maison de démonstration",
    readCta: "Lire le document →",
    privacyNote: "Une maison n'apparaît au registre qu'avec son accord écrit. Beaucoup préfèrent que leur position ne soit pas rattachée publiquement à un studio — c'est une position défendable, et nous la respectons.",
    ctaTitle: "La place suivante est ouverte.",
    ctaCta: "Passer commande →",
  },
  en: {
    kicker: "The Houses",
    h1a: "You do not become a client.",
    h1b: "You enter the Houses.",
    lead: "Four per quarter. Every commission carries a number, and that number is never reassigned. The register is public because a membership you cannot verify is not one.",
    nextLabel: "Next commission",
    scarcity: (p: string, r: number) => `${p}: ${r} place${r > 1 ? "s" : ""} left.`,
    registerKicker: "The register",
    demoTag: "Demonstration house",
    readCta: "Read the document →",
    privacyNote: "A house appears in the register only with its written consent. Many prefer their position not to be publicly attached to a studio — that is a defensible position, and we respect it.",
    ctaTitle: "The next place is open.",
    ctaCta: "Place your commission →",
  },
}

export default async function MaisonsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "fr"
  const t = pick(T, lang)
  const sc = LIVE.scarcity

  return (
    <main className="min-h-screen bg-ink text-white">
      <NavBar />

      <section className="section-hero pb-14 pt-36">
        <div className="shell">
          <div className="kicker mb-6">{t.kicker}</div>
          <h1 className="mb-7 font-serif text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.02em]">
            {t.h1a}
            <br />
            <span className="text-gradient">{t.h1b}</span>
          </h1>
          <p className="lede max-w-[640px]">{t.lead}</p>

          <div className="mt-10 inline-flex flex-wrap items-center gap-4 border border-brand-hair px-6 py-4">
            <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-chalk-40">{t.nextLabel}</span>
            <span className="font-serif text-[1.9rem] font-bold leading-none text-brand">
              N&deg;&nbsp;{String(HOUSES.nextNumber).padStart(3, "0")}
            </span>
            <span className="font-sans text-[13.5px] text-chalk-55">{t.scarcity(sc.period, sc.remaining)}</span>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="shell max-w-[860px]">
          <div className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-brand">{t.registerKicker}</div>

          <ul className="list-none border-t border-hair p-0">
            {HOUSES.register.map((h) => (
              <li
                key={h.n}
                className="flex flex-wrap items-baseline gap-x-6 gap-y-2 border-b border-white/[0.07] py-5"
              >
                <span className="font-serif text-[15px] text-brand">N&deg;&nbsp;{h.n}</span>
                <span className="font-serif text-[clamp(1.1rem,2.2vw,1.45rem)] font-bold text-white">{h.name}</span>
                <span className="font-sans text-[13.5px] text-chalk-40">{h.sector[lang] ?? h.sector.fr}</span>
                {h.demo && (
                  <span className="tag border-white/20 text-chalk-40">{t.demoTag}</span>
                )}
                <Link href={h.href} className="ml-auto font-sans text-[13px] text-brand no-underline hover:underline">
                  {t.readCta}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-[620px] font-sans text-[14px] leading-relaxed text-chalk-40">{t.privacyNote}</p>

          <div className="mt-14 border border-brand-hair bg-brand/[0.04] p-7 md:p-10">
            <h2 className="mb-6 font-serif text-[clamp(1.4rem,2.8vw,2rem)] font-bold leading-snug">{t.ctaTitle}</h2>
            <Link href="/brand-narrative-architecture" className="btn-primary">
              {t.ctaCta}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
