"use client"

import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { ViewTracker } from "@/components/strawberry/view-tracker"
import { ArchitectureDiagram } from "@/components/strawberry/architecture-diagram"
import { useScrollReveal } from "@/hooks/use-strawberry"

/**
 * Le problème.
 *
 * Recentré sur l'identité narrative plutôt que sur le prix : le prix n'est
 * qu'une conséquence visible d'un problème plus profond — le marché ne
 * comprend pas ce que vous êtes, donc il ne peut ni s'y attacher ni le
 * défendre. Raccourci fortement : la version précédente listait trois
 * conséquences détaillées, plus longue à lire que ce qu'un visiteur accorde à
 * une page d'accueil.
 */

const T = {
  en: {
    kicker: "THE PROBLEM",
    h2: "Your market sees your work. It just does not understand who you are.",
    p1: "When a brand has no identity people can hold onto, it gets evaluated like a commodity — feature against feature, price against price.",
    p1List: ["Nothing to belong to.", "Nothing to defend.", "Nothing to repeat to a friend."],
    p3: "Without an identity that holds, every piece of communication starts from zero. The site, the socials, a deck \u2014 each tells a different micro-story, and the market meets your brand a hundred times without remembering any of it, because nothing stacks.",
    diagramWithout: "Without an architecture",
    diagramWithoutSub: "Every piece of communication starts from zero.",
    diagramWith: "With an architecture",
    diagramWithSub: "Every piece of communication builds on the last.",
    close: "The fix is not more content or a better logo. It is a narrative identity strong enough that people stop comparing you — and start belonging to what you stand for.",
  },
  fr: {
    kicker: "LE PROBLÈME",
    h2: "Votre marché voit votre travail. Il ne comprend simplement pas qui vous êtes.",
    p1: "Quand une marque n'a aucune identité à laquelle s'accrocher, on l'évalue comme une commodité — caractéristique contre caractéristique, prix contre prix.",
    p1List: ["Rien à quoi appartenir.", "Rien à défendre.", "Rien à répéter à un ami."],
    p3: "Sans identit\u00e9 qui tient, chaque prise de parole repart de z\u00e9ro. Le site, les r\u00e9seaux, une plaquette \u2014 chacun raconte une micro-histoire diff\u00e9rente, et le march\u00e9 rencontre votre marque cent fois sans se souvenir de rien, parce que rien ne s'empile.",
    diagramWithout: "Sans architecture",
    diagramWithoutSub: "Chaque prise de parole repart de z\u00e9ro.",
    diagramWith: "Avec architecture",
    diagramWithSub: "Chaque prise de parole s'appuie sur la pr\u00e9c\u00e9dente.",
    close: "Le remède n'est pas plus de contenu ni un meilleur logo. C'est une identité narrative assez forte pour que le marché cesse de vous comparer — et commence à adhérer à ce que vous représentez.",
  },
}

export function ProblemSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)
  const [listRef, listVisible] = useScrollReveal()

  return (
    <section className="section overflow-hidden bg-ink-soft">
      <ViewTracker name="problem" />
      <div className="shell">
        <div className="mx-auto max-w-[760px]">
          <div className="mb-5 font-sans text-[11px] font-semibold tracking-[0.14em]">
            <span className="surligne">{t.kicker}</span>
          </div>
          <h2 className="mb-7 font-serif text-[clamp(1.8rem,3.6vw,3.1rem)] font-bold leading-[1.14] tracking-[-0.02em] text-white">
            {t.h2}
          </h2>
          <p className="mb-5 font-sans text-[16.5px] leading-[1.75] text-white/60">{t.p1}</p>

          {/* La triade, sortie du paragraphe : trois manques posés l'un sous
              l'autre frappent plus fort que la même phrase noyée en fin de
              paragraphe, où l'œil la traverse sans s'arrêter. Chaque ligne
              entre en scène à son tour au scroll.
              Le ref est porté par ce div et non par le <ul> : useScrollReveal
              renvoie une référence typée HTMLDivElement, l'attacher à une
              liste casse la vérification de types au build. */}
          <div ref={listRef}>
            <ul className="mb-8 list-none space-y-3 p-0">
              {t.p1List.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3 font-serif text-[clamp(1.1rem,2vw,1.45rem)] leading-snug text-white/85 transition-all duration-700 ease-[cubic-bezier(.22,.68,0,1)]"
                  style={{
                    opacity: listVisible ? 1 : 0,
                    transform: listVisible ? "translateX(0)" : "translateX(-12px)",
                    transitionDelay: `${i * 160}ms`,
                  }}
                >
                  <span aria-hidden className="text-[0.7em] text-brand">
                    ✦
                  </span>
                  {/* Seule la première ligne est surlignée : c'est le
                      contraste avec les deux suivantes qui fait l'effet.
                      Les trois surlignées, ce serait un bloc rouge. */}
                  {i === 0 ? <span className="surligne">{item}</span> : item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mb-8 font-sans text-[16.5px] leading-[1.75] text-white/60">{t.p3}</p>

          {/* Le schéma : sans architecture, des fragments dispersés qui ne
              s'accumulent pas. Avec, une ligne qui monte parce que chaque
              prise de parole s'appuie sur la précédente. */}
          <ArchitectureDiagram
            labelWithout={t.diagramWithout}
            subWithout={t.diagramWithoutSub}
            labelWith={t.diagramWith}
            subWith={t.diagramWithSub}
          />
          <p className="font-serif text-[clamp(1.15rem,2.2vw,1.55rem)] leading-snug text-white/90">{t.close}</p>
        </div>
      </div>
    </section>
  )
}
