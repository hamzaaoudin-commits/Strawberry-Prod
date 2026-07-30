import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { getRead, publishedReads, pickLocale, SECTION_LABELS, THEME_LABELS } from "@/lib/radar-reads"
import { alternatesFor, SITE } from "@/lib/routing"
import { pick } from "@/lib/t"
import { isLang, LANGS, type Lang } from "@/lib/lang"

/**
 * Une lecture publique.
 *
 * Trois blocs seulement : contexte, signal, bruit. La coupe tombe juste avant
 * « la tension », c'est-à-dire à l'endroit exact où le lecteur commence à
 * vouloir la réponse. C'est le trou de curiosité, et c'est aussi la limite
 * honnête : ce qui est publié décrit, ce qui est payé tranche.
 */

const FREE_BLOCKS = ["context", "signal", "noise"] as const

const T = {
  fr: {
    back: "Toutes les lectures",
    cutKicker: "La suite",
    cutTitle: "Ici commence le diagnostic.",
    cutBody:
      "La tension non tranchée, le cap de repositionnement et le verdict sont réservés aux abonnés RADAR. Quinze euros par mois, une marque disséquée chaque jour.",
    cutCta: "S'abonner à RADAR",
    cutAlt: "Je suis déjà abonné",
    ownKicker: "Et la vôtre ?",
    ownBody:
      "Lire correctement les positions des autres est une chose. La seule marque que vous ne pourrez jamais lire de l'extérieur, c'est la vôtre.",
    ownCta: "Voir BRAND NARRATIVE ARCHITECTURE →",
  },
  en: {
    back: "All readings",
    cutKicker: "What follows",
    cutTitle: "This is where the diagnosis starts.",
    cutBody:
      "The unsettled tension, the repositioning heading and the verdict are reserved for RADAR subscribers. Fifteen euros a month, one brand dissected every day.",
    cutCta: "Subscribe to RADAR",
    cutAlt: "I'm already a subscriber",
    ownKicker: "And yours?",
    ownBody:
      "Reading other people's positions well is one thing. The one brand you can never read from the outside is your own.",
    ownCta: "See BRAND NARRATIVE ARCHITECTURE →",
  },
}

export async function generateStaticParams() {
  return LANGS.flatMap((lang) => publishedReads().map((r) => ({ lang, slug: r.slug })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}): Promise<Metadata> {
  const { lang: raw, slug } = await params
  const lang: Lang = isLang(raw) ? raw : "fr"
  const r = getRead(slug)
  if (!r) return {}

  const intro = r.blocks.find((b) => b.key === "context")
  const description = intro ? pickLocale(intro.body, lang).slice(0, 155) : ""
  const title =
    lang === "fr"
      ? `${r.brand} — ce qui émet, ce qui parasite`
      : `${r.brand} — what emits, what interferes`

  return {
    title,
    description,
    alternates: alternatesFor(`/lectures/${slug}`),
    openGraph: {
      type: "article",
      title,
      description,
      url: `${SITE}/${lang}/lectures/${slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  }
}

export default async function LecturePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang: raw, slug } = await params
  const lang: Lang = isLang(raw) ? raw : "fr"
  const t = pick(T, lang)
  const r = getRead(slug)
  if (!r) notFound()

  const free = r.blocks.filter((b) => (FREE_BLOCKS as readonly string[]).includes(b.key))

  return (
    <main className="min-h-screen bg-ink text-white">
      <NavBar />

      <article className="section-hero pb-16 pt-36">
        <div className="shell">
          <Link href="/lectures" className="btn-quiet mb-10 inline-block">
            {t.back}
          </Link>

          <div className="kicker mb-5">{pickLocale(THEME_LABELS[r.theme], lang)}</div>
          <h1 className="mb-4 font-serif text-[clamp(2.1rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.02em]">
            {r.brand}
          </h1>
          <div className="mb-12 font-sans text-[13.5px] text-chalk-40">
            {pickLocale(r.sector, lang)} · {r.date} · {r.minutes} min
          </div>

          {free.map((b) => (
            <section key={b.key} className="mb-10 max-w-[720px]">
              <h2 className="mb-3 font-sans text-[11px] uppercase tracking-[0.2em] text-brand">
                {pickLocale(SECTION_LABELS[b.key], lang)}
              </h2>
              <p className="m-0 font-sans text-[16.5px] leading-[1.85] text-chalk-75">
                {pickLocale(b.body, lang)}
              </p>
            </section>
          ))}

          {/* La coupe. Elle tombe avant « la tension », pas après. */}
          <div className="mt-14 max-w-[720px] border border-brand-hair bg-brand/[0.04] p-7 md:p-10">
            <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.2em] text-brand">{t.cutKicker}</div>
            <h2 className="mb-4 font-serif text-[clamp(1.4rem,2.8vw,1.9rem)] font-bold leading-snug">
              {t.cutTitle}
            </h2>
            <p className="mb-8 body-sm">{t.cutBody}</p>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/radar" className="btn-primary">
                {t.cutCta}
              </Link>
              <Link href="/radar/acces" className="btn-quiet">
                {t.cutAlt}
              </Link>
            </div>
          </div>

          <div className="mt-6 max-w-[720px] border border-hair p-7 md:p-10">
            <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.2em] text-chalk-40">{t.ownKicker}</div>
            <p className="mb-7 body-sm">{t.ownBody}</p>
            <Link href="/brand-narrative-architecture" className="btn-quiet">
              {t.ownCta}
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
