import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { ViewTracker } from "@/components/strawberry/view-tracker"
import { ScrollFillText } from "@/components/strawberry/scroll-fill-text"

/**
 * Le diagnostic.
 *
 * Sans étiquettes de méta-niveau au-dessus du texte (« Pourquoi c'est urgent
 * maintenant », etc.) : ce sont des repères utiles pour structurer un
 * raisonnement en interne, pas quelque chose qu'on montre à un client. Le
 * texte s'enchaîne comme une explication qu'on donnerait à voix haute, avec un
 * seul vrai titre.
 */

const T = {
  en: {
    h2a: "None of it was a lack of effort.",
    h2b: "It was the wrong cause.",
    lead: "You've probably already tried to fix this.",
    p1: "A new logo. A branding agency. Posting more often. Asking a language model for a positioning statement. Each felt like progress, and none of it changed how your market sees you — because the problem was never how loud you are. It is that nobody has ever settled what you refuse, and without a refusal there is no identity to belong to.",
    aiP1: "AI is saturating your market faster than you can see it. Your competitors now produce in one click what used to take weeks: articles, visuals, pages, campaigns. Content is becoming free, infinite and perfectly interchangeable. In that noise, quality is no longer enough to set you apart — everyone has become good.",
    aiP2a: "What cannot be generated is an identity. ",
    aiP2strong: "Differentiation is no longer a marketing luxury — it is your condition for survival.",
    aiP3: "The value has moved. It used to sit in the making. Today, making things costs almost nothing. What stays scarce is the strategy, the coherence, the vision, the decisions — that is what we offer.",
    diagramBefore: "Yesterday",
    diagramAfter: "Today",
    diagramFabrication: "The making",
    diagramArchitecture: "The strategy",
    splitBefore: "The making carried the value.",
    splitAfter: "The strategy carries the value.",
    enemy: "A branding, marketing or storytelling agency sells you assets and a moodboard. We write the constitution a market learns to recognise you by — and then we make you refuse things, not approve them.",
  },
  fr: {
    h2a: "Rien de tout ça n'a manqué de bonne volonté.",
    h2b: "Ça a manqué de la bonne cause.",
    lead: "Vous avez sans doute déjà essayé de régler ça.",
    p1: "Un logo refait. Une agence de branding. Poster plus souvent. Demander un positionnement à un modèle de langage. Chacune de ces tentatives ressemblait à un progrès, et aucune n'a changé la façon dont votre marché vous voit — parce que le problème n'a jamais été votre volume. C'est que personne n'a jamais tranché ce que vous refusez, et sans refus, il n'y a aucune identité à laquelle s'accrocher.",
    aiP1: "L'IA sature votre marché plus vite que vous ne le voyez. Vos concurrents produisent désormais en un clic ce qui demandait des semaines : articles, visuels, pages, campagnes. Le contenu devient gratuit, infini et parfaitement interchangeable. Dans ce bruit, la qualité ne suffit plus à vous distinguer : tout le monde est devenu bon.",
    aiP2a: "Ce qui ne peut pas être généré, c'est une identité. ",
    aiP2strong: "La différenciation n'est plus un luxe marketing — c'est votre condition de survie.",
    aiP3: "La valeur a changé de camp. Elle vivait dans la fabrication. Aujourd'hui, fabriquer coûte presque rien. Ce qui reste rare, c'est la stratégie, la cohérence, la vision, les décisions — c'est ce que nous proposons.",
    diagramBefore: "Hier",
    diagramAfter: "Aujourd'hui",
    diagramFabrication: "La fabrication",
    diagramArchitecture: "La stratégie",
    splitBefore: "La fabrication portait la valeur.",
    splitAfter: "La stratégie porte la valeur.",
    enemy: "Une agence de branding, de marketing ou de storytelling vous vend des assets et un moodboard. Nous écrivons la constitution à laquelle un marché apprend à vous reconnaître — puis nous vous faisons refuser des choses, pas les valider.",
  },
}

export function DiagnosisSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)

  return (
    <section className="section relative overflow-hidden bg-ink text-white">
      <ViewTracker name="diagnosis" />
      <div className="glow-center" aria-hidden />

      <div className="shell relative mx-auto max-w-[780px]">
        <p className="mb-4 font-sans text-[15px] text-chalk-40">{t.lead}</p>
        <h2 className="mb-7 font-serif text-[clamp(1.7rem,3.4vw,2.8rem)] leading-[1.16] tracking-[-0.02em]">
          <ScrollFillText text={t.h2a} />
          <br />
          <span className="text-gradient font-bold">{t.h2b}</span>
        </h2>
        <p className="mb-8 font-sans text-[16px] leading-[1.8] text-chalk-65">{t.p1}</p>

        <div className="border-l-2 border-brand pl-6 md:pl-8">
          <p className="mb-8 font-serif text-[clamp(1.05rem,2vw,1.35rem)] leading-[1.55] text-white/90">{t.aiP1}</p>

          {/* La phrase la plus forte du diagnostic, sortie du paragraphe et
              agrandie — plutôt que noyée dans le texte courant. */}
          <div className="mb-8 -ml-6 max-w-[560px] text-center md:-ml-8">
            <div aria-hidden className="font-serif text-[2.5rem] leading-[0.4] text-brand/30">
              &ldquo;
            </div>
            <p className="mt-2 font-serif text-[clamp(1.3rem,2.6vw,1.8rem)] font-bold leading-[1.3] text-white">
              {t.aiP2a}
            </p>
            <p className="mt-3 font-sans text-[13px] leading-relaxed text-chalk-55">{t.aiP2strong}</p>
          </div>

          <p className="font-serif text-[clamp(1.05rem,2vw,1.35rem)] leading-[1.55] text-white/90">{t.aiP3}</p>
        </div>

        {/* Le renversement, en plein écran divisé plutôt qu'en deux petites
            barres — sort volontairement du container centré pour occuper
            toute la largeur du viewport, contraste net entre gris désaturé
            et rouge. */}
        <div className="relative left-1/2 mt-10 w-screen -translate-x-1/2">
          <div className="flex h-[200px] overflow-hidden sm:h-[240px]">
            <div className="flex flex-1 flex-col items-center justify-center bg-[#0d0d0d] px-6 text-center [filter:grayscale(1)_brightness(0.75)]">
              <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.16em] text-chalk-40">
                {t.diagramBefore}
              </div>
              <p className="m-0 max-w-[220px] font-serif text-[clamp(1.1rem,2.4vw,1.5rem)] leading-[1.3] text-white">
                {t.splitBefore}
              </p>
            </div>

            <div aria-hidden className="w-[2px] shrink-0 bg-brand" />

            <div className="flex flex-1 flex-col items-center justify-center bg-[linear-gradient(160deg,#1a0d0e_0%,#0a0a0a_100%)] px-6 text-center">
              <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.16em] text-brand">
                {t.diagramAfter}
              </div>
              <p className="m-0 max-w-[220px] font-serif text-[clamp(1.1rem,2.4vw,1.5rem)] font-bold leading-[1.3] text-white">
                {t.splitAfter}
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 font-sans text-[15px] leading-relaxed text-chalk-55">{t.enemy}</p>
      </div>
    </section>
  )
}
