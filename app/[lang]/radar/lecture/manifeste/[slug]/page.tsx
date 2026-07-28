import { notFound } from "next/navigation"
import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { BackHomeButton } from "@/components/strawberry/back-home-button"
import { Footer } from "@/components/strawberry/footer"
import { getManifesto, MANIFESTOS } from "@/lib/radar-library"
import { isLang, type Lang } from "@/lib/lang"

/**
 * Un manifeste, derrière la barrière.
 *
 * Les volumes étaient publics et gratuits ; ils font désormais partie de
 * l'abonnement. Composant serveur : le texte n'est rendu que pour une requête
 * portant une signature valide.
 */
export const dynamic = "force-dynamic"

const T = {
  fr: { back: "← Tous les manifestes", volume: "Volume", verb: "Le verbe" },
  en: { back: "← All manifestos", volume: "Volume", verb: "The verb" },
}

export default async function ManifestoPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang: raw, slug } = await params
  const lang: Lang = isLang(raw) ? raw : "fr"
  const t = T[lang] ?? T.fr

  const m = getManifesto(slug)
  if (!m) notFound()

  const i = MANIFESTOS.findIndex((x) => x.slug === slug)
  const prev = i > 0 ? MANIFESTOS[i - 1] : null
  const next = i < MANIFESTOS.length - 1 ? MANIFESTOS[i + 1] : null

  return (
    <main className="min-h-screen overflow-hidden bg-ink font-sans text-white">
      <NavBar />
      <BackHomeButton />

      <article className="relative px-gutter pb-14 pt-36">
        <div className="glow-top" aria-hidden />

        <div className="relative mx-auto max-w-[720px]">
          <Link href="/radar/lecture" className="btn-quiet mb-10 inline-block">{t.back}</Link>

          <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.22em] text-chalk-40">
            {t.volume} {m.n}
          </div>

          <div className="mb-6 font-serif text-[clamp(4rem,14vw,8rem)] font-bold leading-none text-brand">
            {m.n}
          </div>

          <h1 className="mb-5 font-serif text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em]">
            {m.title[lang]}
          </h1>

          <div className="mb-9 border-l-2 border-brand pl-5">
            <div className="mb-1.5 font-sans text-[10px] uppercase tracking-[0.2em] text-chalk-40">{t.verb}</div>
            <p className="m-0 font-serif text-[clamp(1.25rem,3vw,1.85rem)] italic leading-snug text-chalk-90">
              {m.verb[lang]}
            </p>
          </div>

          <p className="font-sans text-[clamp(1rem,1.6vw,1.15rem)] leading-[1.8] text-chalk-75">
            {m.tagline[lang]}
          </p>

          <nav className="mt-14 flex flex-wrap justify-between gap-4 border-t border-white/[0.08] pt-7">
            {prev ? (
              <Link href={`/radar/lecture/manifeste/${prev.slug}`} className="btn-quiet">
                ← {prev.n} · {prev.title[lang]}
              </Link>
            ) : <span />}
            {next ? (
              <Link href={`/radar/lecture/manifeste/${next.slug}`} className="btn-quiet">
                {next.n} · {next.title[lang]} →
              </Link>
            ) : <span />}
          </nav>
        </div>
      </article>

      <Footer />
    </main>
  )
}
