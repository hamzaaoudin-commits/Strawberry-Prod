/**
 * Le bandeau plein rouge.
 *
 * Rupture franche de couleur entre deux sections noires, plutôt qu'un
 * simple filet — un seul mot du vocabulaire de la marque, en pleine
 * largeur. Composant serveur, aucune interaction : juste un moment.
 */

const T = {
  fr: { word: "REFUS.", caption: "Ce qui fonde toute position" },
  en: { word: "REFUSAL.", caption: "What every position is built on" },
}

export function SectionDivider({ lang }: { lang: "fr" | "en" }) {
  const t = T[lang] ?? T.fr

  return (
    <div className="bg-brand px-6 py-14 text-center sm:py-16">
      <div className="font-serif text-[clamp(2.2rem,7vw,3.6rem)] font-bold leading-none tracking-[-0.01em] text-ink">
        {t.word}
      </div>
      <div className="mt-2 font-sans text-[11px] uppercase tracking-[0.14em] text-ink/60">{t.caption}</div>
    </div>
  )
}
