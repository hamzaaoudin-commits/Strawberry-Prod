import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { ViewTracker } from "@/components/strawberry/view-tracker"

/**
 * Le diagnostic.
 *
 * La version précédente suivait la théorie problème / fausse cause / fausse
 * solution avec un intertitre par étape — ça se lisait comme un cours de
 * marketing récité. Le raisonnement reste le même, mais en prose continue,
 * sans étiquettes, comme on le dirait à voix haute.
 *
 * Le paragraphe sur la saturation par l'IA était la phrase la plus forte du
 * site, cachée sur une sous-page que peu de visiteurs atteignent. Il est ici,
 * sur la page que tout le monde voit.
 */

const T = {
  en: {
    kicker: "What you have probably already tried",
    h2a: "None of it was a lack of effort.",
    h2b: "It was the wrong cause.",
    p1: "A new logo. A branding agency. Posting more often. Asking a language model for a positioning statement. Each felt like progress, and none of it changed how your market sees you — because the problem was never how loud you are. It is that nobody has ever settled what you refuse, and without a refusal there is no identity to belong to.",
    aiKicker: "Why this is urgent now",
    aiP1: "AI is saturating your market faster than you can see it. Your competitors now produce in one click what used to take weeks: articles, visuals, pages, campaigns. Content is becoming free, infinite and perfectly interchangeable. In that noise, quality is no longer enough to set you apart — everyone has become good.",
    aiP2a: "What cannot be generated is an identity. ",
    aiP2strong: "Differentiation is no longer a marketing luxury — it is your condition for survival.",
    enemy: "An agency sells you assets and a moodboard. We write the constitution a market learns to recognise you by — and then we make you refuse things, not approve them.",
  },
  fr: {
    kicker: "Ce que vous avez sans doute déjà essayé",
    h2a: "Rien de tout ça n'a manqué de bonne volonté.",
    h2b: "Ça a manqué de la bonne cause.",
    p1: "Un logo refait. Une agence de branding. Poster plus souvent. Demander un positionnement à un modèle de langage. Chacune de ces tentatives ressemblait à un progrès, et aucune n'a changé la façon dont votre marché vous voit — parce que le problème n'a jamais été votre volume. C'est que personne n'a jamais tranché ce que vous refusez, et sans refus, il n'y a aucune identité à laquelle s'accrocher.",
    aiKicker: "Pourquoi c'est urgent maintenant",
    aiP1: "L'IA sature votre marché plus vite que vous ne le voyez. Vos concurrents produisent désormais en un clic ce qui demandait des semaines : articles, visuels, pages, campagnes. Le contenu devient gratuit, infini et parfaitement interchangeable. Dans ce bruit, la qualité ne suffit plus à vous distinguer : tout le monde est devenu bon.",
    aiP2a: "Ce qui ne peut pas être généré, c'est une identité. ",
    aiP2strong: "La différenciation n'est plus un luxe marketing — c'est votre condition de survie.",
    enemy: "Une agence vous vend des assets et un moodboard. Nous écrivons la constitution à laquelle un marché apprend à vous reconnaître — puis nous vous faisons refuser des choses, pas les valider.",
  },
}

export function DiagnosisSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)

  return (
    <section className="section relative overflow-hidden bg-ink text-white">
      <ViewTracker name="diagnosis" />
      <div className="glow-center" aria-hidden />

      <div className="shell relative mx-auto max-w-[780px]">
        <div className="mb-5 font-sans text-[11px] font-semibold tracking-[0.14em] text-brand">{t.kicker}</div>
        <h2 className="mb-7 font-serif text-[clamp(1.7rem,3.4vw,2.8rem)] font-bold leading-[1.16] tracking-[-0.02em]">
          {t.h2a}
          <br />
          <span className="text-gradient">{t.h2b}</span>
        </h2>
        <p className="mb-12 font-sans text-[16px] leading-[1.8] text-chalk-65">{t.p1}</p>

        <div className="border-l-2 border-brand pl-6 md:pl-8">
          <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.18em] text-brand">{t.aiKicker}</div>
          <p className="mb-5 font-serif text-[clamp(1.05rem,2vw,1.35rem)] leading-[1.55] text-white/90">{t.aiP1}</p>
          <p className="font-serif text-[clamp(1.1rem,2.1vw,1.4rem)] leading-[1.5] text-white">
            {t.aiP2a}
            <strong>{t.aiP2strong}</strong>
          </p>
        </div>

        <p className="mt-12 font-sans text-[15px] leading-relaxed text-chalk-55">{t.enemy}</p>
      </div>
    </section>
  )
}
