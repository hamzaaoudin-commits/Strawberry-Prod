import { LIVE } from "@/lib/config"

/**
 * La frise de confiance.
 *
 * Trois faits vérifiables côte à côte, juste sous le hero — avant même le
 * diagnostic. Aucun chiffre inventé : le compteur RADAR vient de la même
 * constante que partout ailleurs sur le site, tenue à la main.
 */

const T = {
  fr: {
    radarLabel: "Marques lues",
    quarterLabel: "Par trimestre",
    studioLabel: "Studio, un fondateur",
  },
  en: {
    radarLabel: "Brands read",
    quarterLabel: "Per quarter",
    studioLabel: "Studio, one founder",
  },
}

export function TrustStrip({ lang }: { lang: "fr" | "en" }) {
  const t = T[lang] ?? T.fr
  const items = [
    { n: `${LIVE.radar.count}+`, label: t.radarLabel },
    { n: String(LIVE.scarcity.total), label: t.quarterLabel },
    { n: "1", label: t.studioLabel },
  ]

  return (
    <div className="border-y border-white/[0.06] bg-ink-soft">
      <div className="flex flex-wrap justify-center">
        {items.map((it, i) => (
          <div
            key={it.label}
            className={`px-8 py-6 text-center ${i > 0 ? "border-l border-white/[0.06]" : ""}`}
          >
            <div className="font-serif text-[1.5rem] font-bold leading-none text-brand">{it.n}</div>
            <div className="mt-1.5 font-sans text-[10px] uppercase tracking-[0.14em] text-chalk-40">{it.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
