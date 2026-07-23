import type { ReactNode } from "react"

/**
 * Couvertures d'offres.
 *
 * Chaque signe traduit ce que fait l'offre, pas ce qu'elle coûte : le balayage
 * pour RADAR, les lignes barrées pour le diagnostic, les cadres emboîtés pour
 * l'architecture, la courbe qui monte par paliers pour MOMENTUM.
 *
 * Aucun texte dans le dessin : les couvertures fonctionnent telles quelles dans
 * les trois langues, et ne demandent ni photographe ni banque d'images.
 */

export type OfferKey = "radar" | "audit" | "architecture" | "momentum" | "atlas"

function Motif({ k }: { k: OfferKey }) {
  const s = "#e63946"
  switch (k) {
    case "radar":
      // Le balayage : cercles concentriques et aiguille.
      return (
        <>
          <circle cx="24" cy="24" r="20" fill="none" stroke={s} strokeWidth="1" opacity="0.3" />
          <circle cx="24" cy="24" r="13" fill="none" stroke={s} strokeWidth="1" opacity="0.55" />
          <circle cx="24" cy="24" r="6" fill="none" stroke={s} strokeWidth="1" opacity="0.8" />
          <line x1="24" y1="24" x2="24" y2="4" stroke={s} strokeWidth="1.6" />
          <circle cx="24" cy="24" r="1.8" fill={s} />
        </>
      )
    case "audit":
      // Une ligne juste, isolée parmi celles qui ne le sont pas.
      return (
        <>
          <g stroke={s} strokeWidth="1.6" opacity="0.28" strokeLinecap="square">
            <line x1="12" y1="10" x2="32" y2="10" />
            <line x1="12" y1="17" x2="36" y2="17" />
            <line x1="12" y1="31" x2="34" y2="31" />
            <line x1="12" y1="38" x2="26" y2="38" />
          </g>
          <line x1="6" y1="24" x2="42" y2="24" stroke={s} strokeWidth="2.4" strokeLinecap="square" />
        </>
      )
    case "architecture":
      // Un arc et sa clé de voûte : la structure ne tient que par le milieu.
      return (
        <>
          <path d="M11 40 L11 25 A13 13 0 0 1 37 25 L37 40" fill="none" stroke={s} strokeWidth="1.4" />
          <path d="M20 11 L28 11 L29.5 19 L18.5 19 Z" fill={s} />
          <line x1="6" y1="40" x2="42" y2="40" stroke={s} strokeWidth="2.2" strokeLinecap="square" />
        </>
      )
    case "momentum":
      // Une cadence qui accumule.
      return (
        <>
          <line x1="7" y1="40" x2="41" y2="40" stroke={s} strokeWidth="1" opacity="0.4" />
          <g stroke={s} strokeWidth="3" strokeLinecap="square">
            <line x1="12" y1="40" x2="12" y2="32" opacity="0.4" />
            <line x1="20" y1="40" x2="20" y2="26" opacity="0.6" />
            <line x1="28" y1="40" x2="28" y2="19" opacity="0.8" />
            <line x1="36" y1="40" x2="36" y2="11" />
          </g>
        </>
      )
    case "atlas":
      // Le relevé : des positions cartographiées autour d'un centre.
      return (
        <>
          <g fill="none" stroke={s} strokeWidth="0.9">
            <circle cx="24" cy="24" r="7" opacity="0.85" />
            <circle cx="24" cy="24" r="14" opacity="0.5" />
            <circle cx="24" cy="24" r="21" opacity="0.25" />
          </g>
          <g fill={s}>
            <circle cx="24" cy="10" r="1.5" />
            <circle cx="37" cy="19" r="1.5" />
            <circle cx="32" cy="36" r="1.5" />
            <circle cx="15" cy="34" r="1.5" />
            <circle cx="12" cy="18" r="1.5" />
            <circle cx="24" cy="24" r="2" />
          </g>
        </>
      )
  }
}

/**
 * Couverture d'offre, format 3/4.
 * `featured` ajoute les équerres rouges qui distinguent la commande signature.
 */
export function OfferCover({
  k,
  name,
  price,
  featured = false,
  className = "",
}: {
  k: OfferKey
  name: ReactNode
  price?: string
  featured?: boolean
  className?: string
}) {
  return (
    <div
      className={[
        "relative flex flex-col items-center justify-center overflow-hidden bg-ink px-5 py-8 text-center [aspect-ratio:3/4]",
        featured ? "border border-brand/45" : "border border-hair-strong",
        className,
      ].join(" ")}
    >
      {featured && (
        <>
          <span className="bracket-tl" aria-hidden />
          <span className="bracket-br" aria-hidden />
        </>
      )}

      <div className="font-serif text-[clamp(1.05rem,2.4vw,1.5rem)] font-bold uppercase leading-[1.12] tracking-[0.01em] text-brand">
        {name}
      </div>

      <svg viewBox="0 0 48 48" aria-hidden className="mt-6 h-[46px] w-[46px] shrink-0">
        <Motif k={k} />
      </svg>

      {price && (
        <div className="absolute inset-x-0 bottom-4 font-sans text-[9px] uppercase tracking-[0.2em] text-white/40">
          {price}
        </div>
      )}
    </div>
  )
}

/** Couverture de l'Atlas, format livre — le chiffre porte la composition. */
export function AtlasCover({ className = "" }: { className?: string }) {
  return (
    <div
      className={[
        "relative flex flex-col items-center justify-center border border-white/[0.14] bg-ink px-5 py-9 text-center shadow-[0_24px_60px_rgba(0,0,0,0.55)] [aspect-ratio:2/3]",
        className,
      ].join(" ")}
    >
      <span className="bracket-tl" aria-hidden />
      <span className="bracket-br" aria-hidden />

      <div className="absolute inset-x-0 top-5 font-sans text-[7px] uppercase tracking-[0.28em] text-white/30">
        Strawberry Production
      </div>

      <div className="font-serif text-[clamp(1.6rem,4vw,2.1rem)] font-bold uppercase leading-[1.05] text-brand">
        30 Architectures
      </div>

      <svg viewBox="0 0 48 48" aria-hidden className="mt-7 h-[58px] w-[58px]">
        <Motif k="atlas" />
      </svg>

      <div className="absolute inset-x-0 bottom-5 font-sans text-[8px] uppercase tracking-[0.2em] text-white/40">
        Un Atlas
      </div>
    </div>
  )
}
