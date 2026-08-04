import { publishedReads } from "@/lib/radar-reads"

/**
 * Le bandeau des marques.
 *
 * Juste le défilement, sans habillage : pas de libellé, pas de lien. Les
 * marques viennent des lectures publiées dans RADAR — elles se renouvellent
 * seules à chaque nouvelle fiche.
 */
export function ReadMarquee() {
  const brands = publishedReads().map((r) => r.brand)
  if (brands.length === 0) return null

  const strip = [...brands, ...brands]

  return (
    <div className="border-y border-hair bg-ink-soft py-6">
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
