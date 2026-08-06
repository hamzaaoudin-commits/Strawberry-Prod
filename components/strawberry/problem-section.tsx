import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { ViewTracker } from "@/components/strawberry/view-tracker"

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
    p1: "When a brand has no identity people can hold onto, it gets evaluated like a commodity — feature against feature, price against price. Nothing to belong to, nothing to defend, nothing to repeat to a friend.",
    p2a: "Price is the visible part. What creates it is invisible: ",
    p2strong: "a brand nobody has fully understood yet.",
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
    p1: "Quand une marque n'a aucune identité à laquelle s'accrocher, on l'évalue comme une commodité — caractéristique contre caractéristique, prix contre prix. Rien à quoi appartenir, rien à défendre, rien à répéter à un ami.",
    p2a: "Le prix est la partie visible. Ce qui le crée est invisible : ",
    p2strong: "une marque que personne n'a encore vraiment comprise.",
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

  return (
    <section className="section overflow-hidden bg-ink-soft">
      <ViewTracker name="problem" />
      <div className="shell">
        {/* Une asymétrie assumée, plutôt que le container centré utilisé
            partout ailleurs : le texte occupe un peu plus de la moitié de la
            largeur à gauche, le reste respire en vide à droite. Seulement à
            partir de lg — en dessous, la grille repasse en une colonne
            pleine largeur comme le reste du site. */}
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
          <div className="mb-5 font-sans text-[11px] font-semibold tracking-[0.14em] text-brand">
            {t.kicker}
          </div>
          <h2 className="mb-7 font-serif text-[clamp(1.8rem,3.6vw,3.1rem)] font-bold leading-[1.14] tracking-[-0.02em] text-white">
            {t.h2}
          </h2>
          <p className="mb-5 font-sans text-[16.5px] leading-[1.75] text-white/60">{t.p1}</p>
          <p className="mb-8 font-sans text-[16.5px] leading-[1.75] text-white/60">
            {t.p2a}
            <strong className="text-chalk-90">{t.p2strong}</strong>
          </p>
          <p className="mb-8 font-sans text-[16.5px] leading-[1.75] text-white/60">{t.p3}</p>

          {/* Le schéma : sans architecture, des fragments dispersés qui ne
              s'accumulent pas. Avec, une ligne qui monte parce que chaque
              prise de parole s'appuie sur la précédente. */}
          <div className="mb-8 grid gap-6 sm:grid-cols-2">
            <div className="border border-hair p-5">
              <svg viewBox="0 0 200 70" className="mb-3 h-[64px] w-full" aria-hidden>
                <circle cx="20" cy="45" r="4" fill="currentColor" className="text-white/25" />
                <circle cx="60" cy="20" r="4" fill="currentColor" className="text-white/25" />
                <circle cx="100" cy="52" r="4" fill="currentColor" className="text-white/25" />
                <circle cx="140" cy="15" r="4" fill="currentColor" className="text-white/25" />
                <circle cx="180" cy="38" r="4" fill="currentColor" className="text-white/25" />
              </svg>
              <div className="font-sans text-[12px] uppercase tracking-[0.14em] text-chalk-40">
                {t.diagramWithout}
              </div>
              <p className="m-0 mt-1.5 font-sans text-[13px] leading-snug text-chalk-55">{t.diagramWithoutSub}</p>
            </div>

            <div className="border border-brand-hair bg-brand/[0.03] p-5">
              <svg viewBox="0 0 200 70" className="mb-3 h-[64px] w-full" aria-hidden>
                <polyline
                  points="20,58 60,46 100,34 140,22 180,10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-brand/50"
                />
                <circle cx="20" cy="58" r="4" fill="currentColor" className="text-brand" />
                <circle cx="60" cy="46" r="4" fill="currentColor" className="text-brand" />
                <circle cx="100" cy="34" r="4" fill="currentColor" className="text-brand" />
                <circle cx="140" cy="22" r="4" fill="currentColor" className="text-brand" />
                <circle cx="180" cy="10" r="4" fill="currentColor" className="text-brand" />
              </svg>
              <div className="font-sans text-[12px] uppercase tracking-[0.14em] text-brand">{t.diagramWith}</div>
              <p className="m-0 mt-1.5 font-sans text-[13px] leading-snug text-chalk-75">{t.diagramWithSub}</p>
            </div>
          </div>
          <p className="font-serif text-[clamp(1.15rem,2.2vw,1.55rem)] leading-snug text-white/90">{t.close}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
