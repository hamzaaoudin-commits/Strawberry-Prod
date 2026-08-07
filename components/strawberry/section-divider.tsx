/**
 * Le bandeau plein rouge.
 *
 * Rupture franche de couleur entre deux sections noires, plutôt qu'un
 * simple filet — un seul mot du vocabulaire de la marque, en pleine
 * largeur. Composant serveur, aucune interaction : juste un moment.
 *
 * Généralisé pour devenir un dispositif reconnaissable plutôt qu'un geste
 * isolé : REFUS sur la home, ARCHITECTURE avant le prix, MÉMOIRE avant
 * l'abonnement RADAR — le mot et la légende se passent en props.
 */

const DEFAULTS = {
  fr: { word: "REFUS.", caption: "Ce qui fonde toute position" },
  en: { word: "REFUSAL.", caption: "What every position is built on" },
}

export function SectionDivider({
  lang,
  word,
  caption,
}: {
  lang: "fr" | "en"
  word?: string
  caption?: string
}) {
  const d = DEFAULTS[lang] ?? DEFAULTS.fr
  const w = word ?? d.word
  const c = caption ?? d.caption

  return (
    <div className="bg-brand px-6 py-14 text-center sm:py-16">
      <div className="font-serif text-[clamp(2.2rem,7vw,3.6rem)] font-bold leading-none tracking-[-0.01em] text-ink">
        {w}
      </div>
      <div className="mt-2 font-sans text-[11px] uppercase tracking-[0.14em] text-ink/60">{c}</div>
    </div>
  )
}
