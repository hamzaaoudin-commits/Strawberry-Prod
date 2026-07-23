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
      return (
        <>
          <circle cx="60" cy="66" r="44" fill="none" stroke={s} strokeWidth="0.8" opacity="0.35" />
          <circle cx="60" cy="66" r="30" fill="none" stroke={s} strokeWidth="0.8" opacity="0.55" />
          <circle cx="60" cy="66" r="16" fill="none" stroke={s} strokeWidth="0.8" opacity="0.8" />
          <line x1="60" y1="66" x2="60" y2="22" stroke={s} strokeWidth="1.4" />
          <circle cx="60" cy="66" r="2.6" fill={s} />
        </>
      )
    case "audit":
      // Une phrase dont les mots empruntés sont biffés, et la ligne juste
      // isolée dessous : c'est exactement ce que le diagnostic rend.
      return (
        <>
          <g opacity="0.4">
            <line x1="30" y1="40" x2="66" y2="40" stroke={s} strokeWidth="1.1" />
            <line x1="72" y1="40" x2="90" y2="40" stroke={s} strokeWidth="1.1" />
            <line x1="30" y1="52" x2="52" y2="52" stroke={s} strokeWidth="1.1" />
            <line x1="58" y1="52" x2="90" y2="52" stroke={s} strokeWidth="1.1" />
          </g>
          <line x1="26" y1="40" x2="94" y2="40" stroke={s} strokeWidth="0.7" opacity="0.9" />
          <line x1="26" y1="52" x2="94" y2="52" stroke={s} strokeWidth="0.7" opacity="0.9" />
          <line x1="30" y1="76" x2="78" y2="76" stroke={s} strokeWidth="2" />
          <circle cx="88" cy="76" r="2.6" fill={s} />
        </>
      )
    case "architecture":
      // Une élévation : la fondation porte les niveaux, et l'axe traverse tout.
      // La position en bas, la plateforme, le langage, le déploiement au-dessus.
      return (
        <>
          <line x1="24" y1="92" x2="96" y2="92" stroke={s} strokeWidth="2" />
          <rect x="34" y="72" width="52" height="18" fill="none" stroke={s} strokeWidth="1.1" />
          <rect x="40" y="54" width="40" height="16" fill="none" stroke={s} strokeWidth="1" opacity="0.75" />
          <rect x="46" y="38" width="28" height="14" fill="none" stroke={s} strokeWidth="0.9" opacity="0.5" />
          <line x1="60" y1="26" x2="60" y2="92" stroke={s} strokeWidth="0.7" opacity="0.55" />
          <circle cx="60" cy="26" r="2.6" fill={s} />
        </>
      )
    case "momentum":
      // Une cadence : des barres régulières qui montent, reliées entre elles.
      // Ce n'est pas une courbe de croissance, c'est de l'accumulation tenue.
      return (
        <>
          <line x1="24" y1="92" x2="96" y2="92" stroke={s} strokeWidth="0.8" opacity="0.4" />
          <line x1="32" y1="92" x2="32" y2="76" stroke={s} strokeWidth="2.4" opacity="0.45" />
          <line x1="46" y1="92" x2="46" y2="66" stroke={s} strokeWidth="2.4" opacity="0.6" />
          <line x1="60" y1="92" x2="60" y2="56" stroke={s} strokeWidth="2.4" opacity="0.75" />
          <line x1="74" y1="92" x2="74" y2="46" stroke={s} strokeWidth="2.4" opacity="0.9" />
          <line x1="88" y1="92" x2="88" y2="34" stroke={s} strokeWidth="2.4" />
          <path d="M32 76 L46 66 L60 56 L74 46 L88 34" fill="none" stroke={s} strokeWidth="0.8" opacity="0.55" />
        </>
      )
    case "atlas":
      return (
        <>
          <g fill="none" stroke={s} strokeWidth="0.7">
            <circle cx="60" cy="60" r="14" opacity="0.9" />
            <circle cx="60" cy="60" r="27" opacity="0.6" />
            <circle cx="60" cy="60" r="40" opacity="0.35" />
            <circle cx="60" cy="60" r="52" opacity="0.18" />
          </g>
          <g fill={s}>
            <circle cx="60" cy="33" r="1.9" />
            <circle cx="85" cy="51" r="1.9" />
            <circle cx="76" cy="85" r="1.9" />
            <circle cx="40" cy="80" r="1.9" />
            <circle cx="33" cy="48" r="1.9" />
            <circle cx="60" cy="60" r="2.6" />
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
        "relative overflow-hidden [aspect-ratio:3/4]",
        featured
          ? "border border-brand/45 bg-[linear-gradient(180deg,rgba(230,57,70,0.09),#0a0a0a_62%)]"
          : "border border-hair-strong bg-ink",
        className,
      ].join(" ")}
    >
      {featured && (
        <>
          <span className="bracket-tl" aria-hidden />
          <span className="bracket-br" aria-hidden />
        </>
      )}

      <svg viewBox="0 0 120 160" aria-hidden className="absolute inset-0 h-full w-full">
        <Motif k={k} />
      </svg>

      <div className="absolute inset-x-0 bottom-0 p-3">
        <div className="font-serif text-[clamp(0.95rem,1.6vw,1.2rem)] font-bold leading-tight text-white">{name}</div>
        {price && (
          <div className="mt-1.5 font-sans text-[8px] uppercase tracking-[0.18em] text-brand">{price}</div>
        )}
      </div>
    </div>
  )
}

/** Couverture de l'Atlas, format livre — le chiffre porte la composition. */
export function AtlasCover({ className = "" }: { className?: string }) {
  return (
    <div
      className={[
        "relative border border-white/[0.14] bg-[linear-gradient(160deg,#101010,#0a0a0a_62%)] shadow-[0_24px_60px_rgba(0,0,0,0.55)] [aspect-ratio:2/3]",
        className,
      ].join(" ")}
    >
      <span className="bracket-tl" aria-hidden />
      <span className="bracket-br" aria-hidden />

      <div className="absolute inset-x-0 top-5 text-center font-sans text-[7px] uppercase tracking-[0.28em] text-white/35">
        Strawberry Production
      </div>

      <svg viewBox="0 0 120 120" aria-hidden className="absolute left-1/2 top-[28%] h-[46%] w-[46%] -translate-x-1/2">
        <Motif k="atlas" />
      </svg>

      <div className="absolute inset-x-0 bottom-0 p-4 text-center">
        <div className="font-serif text-[clamp(2rem,5vw,2.6rem)] font-bold leading-none text-brand">30</div>
        <div className="mt-1 font-serif text-[clamp(0.85rem,2vw,1.05rem)] leading-tight text-white">Architectures</div>
        <div className="mt-2 font-sans text-[7px] uppercase tracking-[0.2em] text-white/40">Un Atlas</div>
      </div>
    </div>
  )
}
