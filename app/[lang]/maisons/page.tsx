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
        <div className="shell max-w-[900px]">
          <div className="mb-8 font-sans text-[11px] uppercase tracking-[0.2em] text-brand">{t.registerKicker}</div>

          {/* Le registre en plaques plutôt qu'en lignes de tableau. Une
              maison qui entre dans une cohorte fermée mérite mieux qu'une
              ligne parmi d'autres — chaque entrée est traitée comme une
              pièce gravée, pas comme une donnée dans une liste. */}
          <div className="grid gap-5 sm:grid-cols-2">
            {HOUSES.register.map((h) => (
              <div
                key={h.n}
                className="group relative flex flex-col items-center border border-hair-strong bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,transparent_100%)] px-7 pb-7 pt-8 text-center transition-colors duration-[900ms] ease-[cubic-bezier(.22,.68,0,1.2)] hover:border-brand/40"
              >
                <span aria-hidden className="absolute left-1/2 top-0 h-px w-10 -translate-x-1/2 bg-brand/50" />

                <div className="mb-4 font-serif text-[13px] tracking-[0.08em] text-brand">
                  N&deg;&nbsp;{h.n}
                </div>

                <div className="mb-3 font-serif text-[clamp(1.3rem,2.6vw,1.7rem)] font-bold tracking-[0.01em] text-white">
                  {h.name}
                </div>

                <span aria-hidden className="mb-3 h-px w-6 bg-white/15" />

                <div className="mb-5 font-sans text-[11px] uppercase tracking-[0.16em] text-chalk-40">
                  {h.sector[lang] ?? h.sector.fr}
                </div>

                {h.demo && (
                  <span className="tag mb-5 border-white/20 text-chalk-40">{t.demoTag}</span>
                )}

                <Link
                  href={h.href}
                  className="mt-auto font-sans text-[13px] text-brand no-underline hover:underline"
                >
                  {t.readCta}
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-[620px] font-sans text-[14px] leading-relaxed text-chalk-40">{t.privacyNote}</p>

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
