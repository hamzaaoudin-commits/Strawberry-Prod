import { LIVE } from "@/lib/config"
import { CountUp } from "@/components/strawberry/count-up"

/**
 * La frise de confiance.
 *
 * Deux faits vérifiables côte à côte, juste sous le hero — avant même le
 * diagnostic. Aucun chiffre inventé.
 */

const T = {
  fr: {
    quarterLabel: "Par trimestre",
    studioLabel: "Studio, un fondateur",
  },
  en: {
    quarterLabel: "Per quarter",
    studioLabel: "Studio, one founder",
  },
}

export function TrustStrip({ lang }: { lang: "fr" | "en" }) {
  const t = T[lang] ?? T.fr
  const items = [
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
            <CountUp value={it.n} className="font-serif text-[1.5rem] font-bold leading-none text-gradient" />
            <div className="mt-1.5 font-sans text-[10px] uppercase tracking-[0.14em] text-chalk-40">{it.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
