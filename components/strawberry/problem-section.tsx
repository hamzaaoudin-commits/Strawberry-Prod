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
    close: "The fix is not more content or a better logo. It is a narrative identity strong enough that people stop comparing you — and start belonging to what you stand for.",
  },
  fr: {
    kicker: "LE PROBLÈME",
    h2: "Votre marché voit votre travail. Il ne comprend simplement pas qui vous êtes.",
    p1: "Quand une marque n'a aucune identité à laquelle s'accrocher, on l'évalue comme une commodité — caractéristique contre caractéristique, prix contre prix. Rien à quoi appartenir, rien à défendre, rien à répéter à un ami.",
    p2a: "Le prix est la partie visible. Ce qui le crée est invisible : ",
    p2strong: "une marque que personne n'a encore vraiment comprise.",
    p3: "Sans identit\u00e9 qui tient, chaque prise de parole repart de z\u00e9ro. Le site, les r\u00e9seaux, une plaquette \u2014 chacun raconte une micro-histoire diff\u00e9rente, et le march\u00e9 rencontre votre marque cent fois sans se souvenir de rien, parce que rien ne s'empile.",
    close: "Le remède n'est pas plus de contenu ni un meilleur logo. C'est une identité narrative assez forte pour que le marché cesse de vous comparer — et commence à adhérer à ce que vous représentez.",
  },
}

export function ProblemSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)

  return (
    <section className="section overflow-hidden bg-ink-soft">
      <ViewTracker name="problem" />
      <div className="shell">
        <div className="mx-auto max-w-[760px]">
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
          <p className="font-serif text-[clamp(1.15rem,2.2vw,1.55rem)] leading-snug text-white/90">{t.close}</p>
        </div>
      </div>
    </section>
  )
}
