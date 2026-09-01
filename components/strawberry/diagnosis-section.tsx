"use client"

import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { ViewTracker } from "@/components/strawberry/view-tracker"
import { ScrollFillText } from "@/components/strawberry/scroll-fill-text"
import { useScrollReveal } from "@/hooks/use-strawberry"

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
    p1: "Each felt like progress. None of it changed how your market sees you.",
    falseCauses: [
      {
        label: "A redone logo",
        impact: "New shopfront, same confusion — the market still confuses you with the one next door.",
        choice: "Here, the logo comes after the doctrine, never before.",
      },
      {
        label: "A branding agency",
        impact: "It sells you assets and a moodboard, not a decision about what you refuse.",
        choice: "We write what you refuse — not what you wear.",
      },
      {
        label: "Posting more often",
        impact: "More volume in a noise already saturated with machine-written content — no one notices one more post.",
        choice: "An identity people recognise without you repeating it.",
      },
      {
        label: "Asking a language model for a positioning statement",
        impact: "A probable text, statistically average — never a choice you're accountable for.",
        choice: "A choice someone stands behind, made by someone who answers for what they refuse.",
      },
    ],
    falseCauseOutro: "The problem was never how loud you are. It is that nobody has ever settled what you refuse, and without a refusal there is no identity to belong to.",
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
    p1: "Chacune de ces tentatives ressemblait à un progrès. Aucune n'a changé la façon dont votre marché vous voit.",
    falseCauses: [
      {
        label: "Un logo refait",
        impact: "Nouvelle vitrine, même confusion — le marché continue de vous confondre avec le voisin.",
        choice: "Chez nous, le logo vient après la doctrine, jamais avant.",
      },
      {
        label: "Une agence de branding",
        impact: "Elle vend des assets et un moodboard, pas une décision sur ce que vous refusez.",
        choice: "Nous écrivons ce que vous refusez — pas ce que vous portez.",
      },
      {
        label: "Poster plus souvent",
        impact: "Plus de volume dans un bruit déjà saturé de contenu généré par une machine — personne ne remarque un post de plus.",
        choice: "Une identité qu'on reconnaît sans avoir à la répéter.",
      },
      {
        label: "Demander un positionnement à un modèle de langage",
        impact: "Un texte probable, statistiquement moyen — jamais un choix qui vous engage.",
        choice: "Un choix assumé, écrit par quelqu'un qui répond de ce qu'il refuse.",
      },
    ],
    falseCauseOutro: "Le problème n'a jamais été votre volume. C'est que personne n'a jamais tranché ce que vous refusez, et sans refus, il n'y a aucune identité à laquelle s'accrocher.",
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
  const [listRef, listVisible] = useScrollReveal()
  const [h2Ref, h2Visible] = useScrollReveal()
  const [splitRef, splitVisible] = useScrollReveal()

  return (
    <section className="section relative overflow-hidden bg-ink text-white">
      <ViewTracker name="diagnosis" />
      <div className="glow-center" aria-hidden />

      <div className="shell relative mx-auto max-w-[780px]">
        <p className="mb-4 font-sans text-[15px] text-chalk-40">{t.lead}</p>
        <h2 className="mb-7 font-serif text-[clamp(1.7rem,3.4vw,2.8rem)] leading-[1.16] tracking-[-0.02em]">
          <ScrollFillText text={t.h2a} />
          <br />
          {/* La bascule du diagnostic : elle enfle brièvement au moment où
              elle entre dans le champ de vision, puis reprend sa taille —
              le mouvement fait lever les yeux dessus au lieu de la laisser
              passer comme une deuxième ligne de titre. */}
          <span
            ref={h2Ref}
            className="text-gradient inline-block font-bold"
            style={{
              transform: h2Visible ? "scale(1)" : "scale(1)",
              animation: h2Visible ? "diagnosis-swell 1400ms cubic-bezier(.22,.68,0,1) 200ms both" : undefined,
              transformOrigin: "left center",
            }}
          >
            {t.h2b}
          </span>
          <style>{`
            @keyframes diagnosis-swell {
              0% { transform: scale(1); }
              38% { transform: scale(1.12); }
              100% { transform: scale(1); }
            }
            @media (prefers-reduced-motion: reduce) {
              @keyframes diagnosis-swell { 0%, 100% { transform: scale(1); } }
            }
          `}</style>
        </h2>
        <p className="mb-6 font-sans text-[16px] leading-[1.8] text-chalk-65">{t.p1}</p>

        {/* Les quatre fausses causes, révélées en trois temps : d'abord ce
            qu'ils ont déjà essayé, puis le mot se barre et la raison de
            l'échec apparaît, puis la flèche avec ce qu'on fait à la place.
            Le décalage entre les trois temps fait vivre le raisonnement au
            lieu de le livrer tout fait. */}
        <div ref={listRef} className="mb-8 flex flex-col gap-5">
          {t.falseCauses.map((fc, i) => {
            const base = i * 1100
            return (
              <div
                key={fc.label}
                className="border-l border-white/10 pl-5 transition-all duration-700 ease-[cubic-bezier(.22,.68,0,1)]"
                style={{
                  opacity: listVisible ? 1 : 0,
                  transform: listVisible ? "translateX(0)" : "translateX(-10px)",
                  transitionDelay: `${base}ms`,
                }}
              >
                {/* Temps 1 puis 2 : le mot apparaît, puis se barre. Le trait
                    se dessine de gauche à droite plutôt que d'apparaître
                    d'un coup — on voit la rature se faire. */}
                <span className="relative inline-block font-serif text-[1.05rem] italic text-white/50">
                  {fc.label}
                  <span
                    aria-hidden
                    className="absolute left-0 top-1/2 h-px bg-brand/70"
                    style={{
                      width: listVisible ? "100%" : "0%",
                      transition: "width 480ms cubic-bezier(.22,.68,0,1)",
                      transitionDelay: `${base + 520}ms`,
                    }}
                  />
                </span>

                <p
                  className="m-0 mt-1 font-sans text-[13.5px] leading-snug text-chalk-55 transition-all duration-500"
                  style={{
                    opacity: listVisible ? 1 : 0,
                    transform: listVisible ? "translateY(0)" : "translateY(4px)",
                    transitionDelay: `${base + 760}ms`,
                  }}
                >
                  {fc.impact}
                </p>

                {/* Temps 3 : la solution, décalée encore, pour qu'elle
                    arrive comme une réponse et non comme une suite. */}
                <p
                  className="m-0 mt-1.5 font-sans text-[13.5px] font-semibold leading-snug text-white transition-all duration-500"
                  style={{
                    opacity: listVisible ? 1 : 0,
                    transform: listVisible ? "translateX(0)" : "translateX(-6px)",
                    transitionDelay: `${base + 1020}ms`,
                  }}
                >
                  <span className="text-brand">→</span> {fc.choice}
                </p>
              </div>
            )
          })}
        </div>

        <p className="mb-8 font-sans text-[16px] leading-[1.8] text-chalk-65">{t.falseCauseOutro}</p>

        {/* Le renversement, en plein écran divisé plutôt qu'en deux petites
            barres — sort volontairement du container centré pour occuper
            toute la largeur du viewport, contraste net entre gris désaturé
            et rouge. */}
        {/* Animé au scroll : le panneau « Hier » glisse depuis la gauche, le
            trait rouge se déploie du centre, puis « Aujourd'hui » arrive
            depuis la droite. Le décalage fait lire le renversement comme un
            basculement, alors que les deux panneaux posés d'un coup se
            lisaient comme une simple comparaison figée. */}
        <div ref={splitRef} className="relative left-1/2 mt-10 w-screen -translate-x-1/2">
          <div className="flex h-[200px] overflow-hidden sm:h-[240px]">
            <div
              className="flex flex-1 flex-col items-center justify-center bg-[#0d0d0d] px-6 text-center [filter:grayscale(1)_brightness(0.75)] transition-all duration-[900ms] ease-[cubic-bezier(.22,.68,0,1)]"
              style={{
                opacity: splitVisible ? 1 : 0,
                transform: splitVisible ? "translateX(0)" : "translateX(-24px)",
              }}
            >
              <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.16em] text-chalk-40">
                {t.diagramBefore}
              </div>
              <p className="m-0 max-w-[220px] font-serif text-[clamp(1.1rem,2.4vw,1.5rem)] leading-[1.3] text-white">
                {t.splitBefore}
              </p>
            </div>

            <div
              aria-hidden
              className="w-[2px] shrink-0 origin-center bg-brand transition-transform duration-[700ms] ease-[cubic-bezier(.22,.68,0,1)]"
              style={{ transform: splitVisible ? "scaleY(1)" : "scaleY(0)", transitionDelay: "350ms" }}
            />

            <div
              className="flex flex-1 flex-col items-center justify-center bg-[linear-gradient(160deg,#1a0d0e_0%,#0a0a0a_100%)] px-6 text-center transition-all duration-[900ms] ease-[cubic-bezier(.22,.68,0,1)]"
              style={{
                opacity: splitVisible ? 1 : 0,
                transform: splitVisible ? "translateX(0)" : "translateX(24px)",
                transitionDelay: "620ms",
              }}
            >
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
