import { LocaleLink as Link } from "@/components/locale-link"
import { publishedReads } from "@/lib/radar-reads"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"

/**
 * Le bandeau des marques.
 *
 * L'ancienne version faisait défiler Notion, Linear, Vercel et consorts sous
 * trois affirmations cochées : visuellement, une liste de clients. Aucune de
 * ces maisons n'a commandé le studio, et c'est exactement l'exposition L.121-2
 * pour laquelle les faux cas ont été retirés.
 *
 * Celle-ci défile aussi, mais sur les marques réellement disséquées dans RADAR,
 * et le libellé le dit. Ce n'est plus une liste de clients empruntée : c'est la
 * preuve du travail quotidien, et elle est vérifiable en un clic.
 */

const T = {
  fr: { label: "Marques disséquées dans RADAR", cta: "Lire les dissections" },
  en: { label: "Brands dissected in RADAR", cta: "Read the dissections" },
}

export function ReadMarquee({ lang }: { lang: Lang }) {
  const t = pick(T, lang)
  const brands = publishedReads().map((r) => r.brand)
  if (brands.length === 0) return null

  const strip = [...brands, ...brands]

  return (
    <div className="border-y border-hair bg-ink-soft py-5">
      <div className="shell mb-3 flex flex-wrap items-baseline justify-between gap-3">
        <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-chalk-40">{t.label}</span>
        <Link
          href="/lectures"
          className="font-sans text-[12px] text-brand no-underline hover:underline"
        >
          {t.cta}
        </Link>
      </div>

      {/* Masqué aux lecteurs d'écran : le défilement est décoratif, la liste
          complète et ordonnée vit sur /lectures. */}
      <div className="relative overflow-hidden" aria-hidden>
        <div className="flex w-max gap-12 [animation:sp-marquee_45s_linear_infinite] motion-reduce:[animation:none]">
          {strip.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="whitespace-nowrap font-sans text-[15px] font-semibold tracking-[0.06em] text-white/25"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
