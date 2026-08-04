import { publishedReads } from "@/lib/radar-reads"
import type { Lang } from "@/lib/lang"

/**
 * Le bandeau des marques.
 *
 * L'ancienne version faisait défiler Notion, Linear, Vercel et consorts sous
 * trois affirmations cochées : visuellement, une liste de clients. Aucune de
 * ces maisons n'a commandé le studio, et c'est exactement l'exposition L.121-2
 * pour laquelle les faux cas ont été retirés.
 *
 * Celle-ci défile sur les marques réellement suivies dans RADAR. Pas de lien,
 * pas de vocabulaire d'analyse — juste le défilement, en preuve silencieuse.
 */

export function ReadMarquee(_props: { lang: Lang }) {
  const brands = publishedReads().map((r) => r.brand)
  if (brands.length === 0) return null

  const strip = [...brands, ...brands]

  return (
    <div className="border-y border-hair bg-ink-soft py-5">
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
