import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { publishedReads, pickLocale, THEME_LABELS } from "@/lib/radar-reads"
import { pick } from "@/lib/t"
import { isLang, type Lang } from "@/lib/lang"

/**
 * Les lectures, en libre accès.
 *
 * Le studio produit une dissection de marque par jour, et personne ne la
 * voyait : la bibliothèque entière vivait derrière la barrière RADAR, et
 * robots.txt en interdisait même l'indexation. L'usine tournait à vide.
 *
 * Ces pages publient les trois premiers blocs — contexte, signal, bruit — et
 * coupent exactement là où commence le diagnostic. C'est ce que cherche un
 * lecteur qui sait qu'on le compare au moins cher sans savoir encore pourquoi.
 * La tension, le cap et le verdict restent dans l'abonnement.
 */

const T = {
  fr: {
    kicker: "Les lectures",
    h1a: "Une marque disséquée.",
    h1b: "Chaque jour, sans exception.",
    lead: "Ce qui émet, ce qui parasite, et la tension que personne dans la maison n'a tranchée. Les trois premiers blocs de chaque lecture sont publiés ici, en entier et gratuitement.",
    count: (n: number) => `${n} marques lues`,
    read: "Lire →",
    subKicker: "Le reste",
    subTitle: "Le diagnostic est dans l'abonnement.",
    subBody: "La tension, le cap de repositionnement et le verdict — c'est-à-dire la partie qui tranche — sont réservés aux abonnés RADAR.",
    subCta: "Voir RADAR",
  },
  en: {
    kicker: "The readings",
    h1a: "One brand dissected.",
    h1b: "Every day, without exception.",
    lead: "What it emits, what interferes, and the tension nobody in the house has settled. The first three blocks of every reading are published here, in full and free.",
    count: (n: number) => `${n} brands read`,
    read: "Read →",
    subKicker: "The rest",
    subTitle: "The diagnosis is in the subscription.",
    subBody: "The tension, the repositioning heading and the verdict — the part that decides — are reserved for RADAR subscribers.",
    subCta: "See RADAR",
  },
}

export default async function LecturesIndex({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "fr"
  const t = pick(T, lang)
  const reads = publishedReads()

  return (
    <main className="min-h-screen bg-ink text-white">
      <NavBar />

      <section className="section-hero pb-16 pt-36">
        <div className="shell">
          <div className="kicker mb-6">{t.kicker}</div>
          <h1 className="mb-7 font-serif text-[clamp(2.1rem,5vw,3.8rem)] font-bold leading-[1.08] tracking-[-0.02em]">
            {t.h1a}
            <br />
            <span className="text-gradient">{t.h1b}</span>
          </h1>
          <p className="lede mb-6 max-w-[640px]">{t.lead}</p>
          <div className="font-sans text-[13px] uppercase tracking-[0.16em] text-chalk-40">
            {t.count(reads.length)}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="shell">
          <ul className="list-none border-t border-hair p-0">
            {reads.map((r) => (
              <li key={r.slug} className="border-b border-white/[0.07]">
                <Link
                  href={`/lectures/${r.slug}`}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 py-6 no-underline transition-colors hover:bg-white/[0.02]"
                >
                  <span className="font-serif text-[clamp(1.15rem,2.4vw,1.6rem)] font-bold text-white">
                    {r.brand}
                  </span>
                  <span className="font-sans text-[13.5px] text-chalk-40">
                    {pickLocale(r.sector, lang)} · {pickLocale(THEME_LABELS[r.theme], lang)}
                  </span>
                  <span className="font-sans text-[13px] text-brand">{t.read}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-14 border border-brand-hair p-7 md:p-10">
            <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.2em] text-brand">{t.subKicker}</div>
            <h2 className="mb-4 font-serif text-[clamp(1.4rem,2.8vw,2rem)] font-bold leading-snug">{t.subTitle}</h2>
            <p className="mb-7 max-w-[600px] body-sm">{t.subBody}</p>
            <Link href="/radar" className="btn-primary">
              {t.subCta}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
