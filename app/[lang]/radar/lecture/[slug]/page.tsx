import { notFound } from "next/navigation"
import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { getRead, publishedReads, pickLocale, SECTION_LABELS } from "@/lib/radar-reads"
import { CoverMotif } from "@/lib/radar-library"
import { isLang, type Lang } from "@/lib/lang"
import { BackHomeButton } from "@/components/strawberry/back-home-button"

export const dynamic = "force-dynamic"

const T = {
  fr: { back: "← Toutes les fiches", min: "min",
        note: "Marque analysée à partir d'informations publiques. Opinion éditoriale — jamais un client. RADAR n'est lié à aucune marque citée." },
  en: { back: "← All reads", min: "min",
        note: "Brand analysed from public information. Editorial opinion — never a client. RADAR is not affiliated with any brand cited." },
  es: { back: "← Todas las fichas", min: "min",
        note: "Marca analizada a partir de información pública. Opinión editorial — nunca un cliente. RADAR no está afiliado a ninguna marca citada." },
}

export default async function RadarReadPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang: raw, slug } = await params
  const lang: Lang = isLang(raw) ? raw : "fr"
  const t = T[lang] ?? T.fr

  const read = getRead(slug)
  if (!read) notFound()

  const all = publishedReads()
  const i = all.findIndex((r) => r.slug === slug)
  const newer = i > 0 ? all[i - 1] : null
  const older = i >= 0 && i < all.length - 1 ? all[i + 1] : null

  return (
    <main className="min-h-screen overflow-hidden bg-ink font-sans text-white">
      <NavBar />
      <BackHomeButton />

      <article className="relative px-gutter pb-12 pt-36">
        <div className="glow-top" aria-hidden />

        <div className="relative mx-auto max-w-[760px]">
          <Link href="/radar/lecture" className="btn-quiet mb-8 inline-block">{t.back}</Link>

          <div className="mb-8 flex flex-wrap items-end gap-6">
            <div className="min-w-[240px] flex-1">
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-3">
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-brand">
                  {pickLocale(read.sector, lang)}
                </span>
                <span className="font-sans text-[12px] text-chalk-40">
                  <time dateTime={read.date}>{read.date}</time> · {read.minutes} {t.min}
                </span>
              </div>
              <h1 className="font-serif text-[clamp(2.5rem,7vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em]">
                {read.brand}
              </h1>
            </div>

            <div className="relative hidden w-[104px] shrink-0 border border-hair-strong bg-ink-soft [aspect-ratio:2/3] sm:block">
              <svg viewBox="0 0 100 150" aria-hidden className="absolute inset-0 h-full w-full">
                <CoverMotif motif={read.motif} />
              </svg>
            </div>
          </div>

          {read.blocks.map((b) => (
            <section key={b.key} className="mb-8">
              <h2 className="mb-2.5 font-sans text-xs uppercase tracking-[0.14em] text-brand">
                {pickLocale(SECTION_LABELS[b.key], lang)}
              </h2>
              <p className="m-0 font-sans text-[16px] leading-[1.78] text-chalk-75">
                {pickLocale(b.body, lang)}
              </p>
            </section>
          ))}

          <p className="mt-12 border-t border-white/[0.08] pt-7 font-sans text-[13px] leading-relaxed text-chalk-40">
            {t.note}
          </p>

          <nav className="mt-8 flex flex-wrap justify-between gap-4 border-t border-white/[0.08] pt-7">
            {newer ? <Link href={`/radar/lecture/${newer.slug}`} className="btn-quiet">← {newer.brand}</Link> : <span />}
            {older ? <Link href={`/radar/lecture/${older.slug}`} className="btn-quiet">{older.brand} →</Link> : <span />}
          </nav>
        </div>
      </article>

      <Footer />
    </main>
  )
}
