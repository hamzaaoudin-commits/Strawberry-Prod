import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { RadarSignOut } from "@/components/strawberry/radar-signout"
import { publishedReads, readsByTheme, pickLocale, THEME_LABELS, type BrandRead, type Theme } from "@/lib/radar-reads"
import { CoverMotif, MANIFESTOS, LESSONS, APPLICATIONS } from "@/lib/radar-library"
import { isLang, type Lang } from "@/lib/lang"
import { BackHomeButton } from "@/components/strawberry/back-home-button"

/**
 * La bibliothèque.
 *
 * Composant serveur derrière la barrière du proxy : le contenu n'est rendu que
 * pour une requête qui portait déjà une signature valide, et n'existe jamais
 * sous forme de JavaScript côté navigateur.
 */
export const dynamic = "force-dynamic"

const T = {
  fr: { today: "La fiche du jour", read: "Lire la fiche", week: "Les plus récentes", all: "Tout voir",
        manifestos: "Les manifestes Strawberry", volumes: "9 volumes",
        lessons: "Les leçons Strawberry", method: "La méthode, pièce par pièce",
        apps: "Les applications", included: "Incluses dans l'abonnement", soon: "Bientôt",
        count: (n: number) => `${n} fiche${n > 1 ? "s" : ""}`, min: "min" },
  en: { today: "Today's read", read: "Read it", week: "Most recent", all: "See all",
        manifestos: "The Strawberry manifestos", volumes: "9 volumes",
        lessons: "The Strawberry lessons", method: "The method, piece by piece",
        apps: "The applications", included: "Included in the subscription", soon: "Soon",
        count: (n: number) => `${n} read${n > 1 ? "s" : ""}`, min: "min" },
  es: { today: "La ficha del día", read: "Leerla", week: "Las más recientes", all: "Ver todo",
        manifestos: "Los manifiestos Strawberry", volumes: "9 volúmenes",
        lessons: "Las lecciones Strawberry", method: "El método, pieza por pieza",
        apps: "Las aplicaciones", included: "Incluidas en la suscripción", soon: "Pronto",
        count: (n: number) => `${n} ficha${n > 1 ? "s" : ""}`, min: "min" },
}

function Poster({ r, lang }: { r: BrandRead; lang: Lang }) {
  return (
    <Link
      href={`/radar/lecture/${r.slug}`}
      className="group relative block w-[132px] shrink-0 border border-hair-strong bg-ink-soft no-underline transition-colors hover:border-brand [aspect-ratio:2/3]"
    >
      <svg viewBox="0 0 100 150" aria-hidden className="absolute inset-0 h-full w-full">
        <CoverMotif motif={r.motif} />
      </svg>
      <div className="absolute inset-x-0 bottom-0 p-2.5">
        <div className="font-serif text-[15px] leading-none text-white transition-colors group-hover:text-brand">
          {r.brand}
        </div>
        <div className="mt-1 font-sans text-[7.5px] uppercase tracking-[0.16em] text-chalk-40">
          {pickLocale(r.sector, lang)}
        </div>
      </div>
    </Link>
  )
}

function Row({ title, meta, children }: { title: string; meta?: string; children: React.ReactNode }) {
  return (
    <section className="py-5 pl-gutter">
      <div className="mb-3.5 flex items-baseline justify-between pr-gutter">
        <h2 className="eyebrow tracking-[0.22em] text-chalk-55">{title}</h2>
        {meta && <span className="font-sans text-[9px] text-white/25">{meta}</span>}
      </div>
      <div className="flex gap-2.5 overflow-x-auto pb-1 pr-gutter [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {children}
      </div>
    </section>
  )
}

export default async function RadarLibraryPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "fr"
  const t = T[lang] ?? T.fr

  const reads = publishedReads()
  const [hero, ...rest] = reads
  const recent = rest.slice(0, 10)
  const themes: Theme[] = ["outgrown", "price-cap", "two-clients", "word-trap", "unwritten"]

  return (
    <main className="min-h-screen overflow-hidden bg-ink font-sans text-white">
      <NavBar />
      <BackHomeButton />

      {hero && (
        <section className="relative overflow-hidden border-b border-hair px-gutter pb-10 pt-36">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_42%,rgba(230,57,70,0.2),transparent_62%)]"
          />
          <div className="relative mx-auto flex max-w-[1100px] flex-wrap items-end gap-8">
            <div className="min-w-[280px] flex-1">
              <div className="kicker mb-3">{t.today}</div>
              <h1 className="mb-3 font-serif text-[clamp(2.5rem,6vw,3.75rem)] font-bold leading-[0.95] tracking-[-0.035em]">
                {hero.brand}
              </h1>
              <p className="mb-6 max-w-[430px] font-sans text-[14px] leading-relaxed text-chalk-65">
                {pickLocale(hero.blocks.find((b) => b.key === "verdict")!.body, lang).split(". ")[0]}.
              </p>
              <Link href={`/radar/lecture/${hero.slug}`} className="btn-primary px-7 py-3 text-[13px]">
                {t.read}
              </Link>
              <span className="ml-4 font-sans text-[11px] text-chalk-40">
                {pickLocale(hero.sector, lang)} · {hero.minutes} {t.min}
              </span>
            </div>

            <div className="relative w-[150px] shrink-0 border border-brand/50 bg-ink-soft [aspect-ratio:2/3]">
              <span className="bracket-tl" aria-hidden />
              <span className="bracket-br" aria-hidden />
              <svg viewBox="0 0 100 150" aria-hidden className="absolute inset-0 h-full w-full">
                <CoverMotif motif={hero.motif} />
              </svg>
              <div className="absolute inset-x-0 bottom-0 p-2.5">
                <div className="font-serif text-[17px] leading-none text-white">{hero.brand}</div>
                <div className="mt-1 font-sans text-[7.5px] uppercase tracking-[0.16em] text-chalk-40">
                  {pickLocale(hero.sector, lang)}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Row title={t.week} meta={t.count(reads.length)}>
        {recent.map((r) => (
          <Poster key={r.slug} r={r} lang={lang} />
        ))}
      </Row>

      {themes.map((theme) => {
        const list = readsByTheme(theme)
        if (list.length === 0) return null
        return (
          <Row key={theme} title={pickLocale(THEME_LABELS[theme], lang)}>
            {list.map((r) => (
              <Poster key={r.slug} r={r} lang={lang} />
            ))}
          </Row>
        )
      })}

      <Row title={t.manifestos} meta={t.volumes}>
        {MANIFESTOS.map((m) => (
          <Link
            key={m.n}
            href={`/radar/lecture/manifeste/${m.slug}`}
            className="group relative block w-[132px] shrink-0 border border-brand-hair bg-ink-soft no-underline transition-colors hover:border-brand [aspect-ratio:2/3]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-[44px] font-bold leading-none text-brand opacity-90">{m.n}</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-2.5">
              <div className="font-serif text-[13px] leading-tight text-white">{m.title[lang]}</div>
              <div className="mt-1 font-sans text-[7px] uppercase tracking-[0.14em] text-chalk-40">{m.verb[lang]}</div>
            </div>
          </Link>
        ))}
      </Row>

      <Row title={t.lessons} meta={t.method}>
        {LESSONS.map((l) => (
          <Link
            key={l.n}
            href={l.href}
            className="group relative block w-[132px] shrink-0 border border-hair-strong bg-ink-soft no-underline transition-colors hover:border-brand [aspect-ratio:2/3]"
          >
            <div className="absolute left-2.5 top-2.5 font-sans text-[8px] tracking-[0.16em] text-white/30">{l.n}</div>
            <svg viewBox="0 0 100 150" aria-hidden className="absolute inset-0 h-full w-full">
              <CoverMotif motif={l.motif} />
            </svg>
            <div className="absolute inset-x-0 bottom-0 p-2.5">
              <div className="font-serif text-[13px] leading-tight text-white">{l.title[lang]}</div>
              <div className="mt-1 font-sans text-[7px] uppercase tracking-[0.14em] text-chalk-40">
                {l.minutes} {t.min}
              </div>
            </div>
          </Link>
        ))}
      </Row>

      <section className="mt-4 border-t border-hair px-gutter py-8">
        <div className="mb-3.5 flex items-baseline justify-between">
          <h2 className="eyebrow tracking-[0.22em] text-brand">{t.apps}</h2>
          <span className="font-sans text-[9px] text-white/25">{t.included}</span>
        </div>
        <div className="grid gap-2.5 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
          {APPLICATIONS.map((a) => (
            <div key={a.key} className="border border-hair-strong border-l-2 border-l-brand bg-ink-soft px-5 py-5">
              <h3 className="mb-1.5 font-serif text-[1.05rem] leading-tight text-white">{a.title[lang]}</h3>
              <p className="mb-3.5 font-sans text-[11.5px] leading-relaxed text-chalk-55">{a.body[lang]}</p>
              <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-white/30">{t.soon}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="px-gutter pb-14 text-right">
        <RadarSignOut lang={lang} />
      </div>

      <Footer />
    </main>
  )
}
