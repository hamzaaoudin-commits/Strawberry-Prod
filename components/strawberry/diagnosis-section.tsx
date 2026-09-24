"use client"

import { useEffect, useRef, useState } from "react"
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
        impact: "New shopfront, same confusion. The market still confuses you with the one next door.",
        choice: "Here, the logo comes after the doctrine. Never before.",
      },
      {
        label: "A branding agency",
        impact: "Assets, a moodboard, a handful of keywords. But no decision on what you stand for — and above all, what you refuse.",
        choice: "We write what you refuse as much as what you represent.",
      },
      {
        label: "Posting more often",
        impact: "More volume in a market already saturated with content. One more post does not build an identity.",
        choice: "We build an identity people recognise without you repeating it.",
      },
      {
        label: "Asking a language model for a positioning statement",
        impact: "A plausible text. Well written. Statistically average. But no stance you are accountable for.",
        choice: "We make choices. And we answer for the ones we make.",
      },
    ],
    falseCauseOutro:
      "The problem was never how loud you are. It is that nobody has ever settled what you refuse. And without a refusal, no identity can truly hold.",
    diagramBefore: "Yesterday",
    diagramAfter: "Today",
    diagramFabrication: "The making",
    diagramArchitecture: "The strategy",
    splitBefore: "The making carried the value.",
    splitAfter: "The strategy carries the value.",
    wipeHint: "Drag to compare",
    remedy:
      "The problem is not producing more content or changing your logo. It is building a narrative identity strong enough that the market stops comparing you — and starts belonging to what you stand for.",
  },
  fr: {
    h2a: "Rien de tout ça n'a manqué de bonne volonté.",
    h2b: "Ça a manqué de la bonne cause.",
    lead: "Vous avez sans doute déjà essayé de régler ça.",
    p1: "Chacune de ces tentatives ressemblait à un progrès. Aucune n'a changé la façon dont votre marché vous voit.",
    falseCauses: [
      {
        label: "Un logo refait",
        impact: "Nouvelle vitrine, même confusion. Le marché continue de vous confondre avec le voisin.",
        choice: "Chez nous, le logo vient après la doctrine. Jamais avant.",
      },
      {
        label: "Une agence de branding",
        impact:
          "Des assets, un moodboard, quelques mots-clés. Mais aucune décision sur ce que vous défendez — et surtout, ce que vous refusez.",
        choice: "Nous écrivons ce que vous refusez autant que ce que vous représentez.",
      },
      {
        label: "Poster plus souvent",
        impact: "Plus de volume dans un marché déjà saturé de contenu. Un post de plus ne crée pas une identité.",
        choice: "Nous construisons une identité qu'on reconnaît sans avoir à la répéter.",
      },
      {
        label: "Demander son positionnement à un modèle de langage",
        impact: "Un texte plausible. Bien formulé. Statistiquement moyen. Mais aucune prise de position qui vous engage.",
        choice: "Nous faisons des choix. Et nous répondons de ceux que nous faisons.",
      },
    ],
    falseCauseOutro:
      "Le problème n'a jamais été votre volume. C'est que personne n'a jamais tranché ce que vous refusez. Et sans refus, aucune identité ne peut vraiment s'accrocher.",
    diagramBefore: "Hier",
    diagramAfter: "Aujourd'hui",
    diagramFabrication: "La fabrication",
    diagramArchitecture: "La stratégie",
    splitBefore: "La fabrication portait la valeur.",
    splitAfter: "La stratégie porte la valeur.",
    wipeHint: "Glissez pour comparer",
    remedy:
      "Le problème n'est pas de produire plus de contenu ni de changer de logo. C'est de construire une identité narrative assez forte pour que le marché cesse de vous comparer — et commence à adhérer à ce que vous représentez.",
  },
}

export function DiagnosisSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)
  const [listRef, listVisible] = useScrollReveal()
  const [h2Ref, h2Visible] = useScrollReveal()
  const [splitRef, splitVisible] = useScrollReveal()

  // Le curseur de comparaison, repris du mécanisme qui servait « la
  // différence » sur les pages de terrain. Il reste entièrement sur
  // « Hier » au repos — la phrase se lit en entier, sans être coupée en
  // deux — et c'est le geste de glisser qui révèle « Aujourd'hui ».
  // L'ancienne version l'animait seule jusqu'à 50 % à l'ouverture, ce qui
  // coupait les deux phrases en même temps : ni l'une ni l'autre ne se
  // lisait en entier.
  const wipeRef = useRef<HTMLDivElement | null>(null)
  const [pct, setPct] = useState(96)
  const dragging = useRef(false)

  function setFromClientX(clientX: number) {
    const el = wipeRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const v = ((clientX - r.left) / r.width) * 100
    setPct(Math.max(4, Math.min(96, v)))
  }

  useEffect(() => {
    function onMove(e: PointerEvent) {
      if (!dragging.current) return
      setFromClientX(e.clientX)
    }
    function onUp() {
      dragging.current = false
    }
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
    }
  }, [])

  return (
    <section className="section relative overflow-hidden bg-ink text-white">
      <ViewTracker name="diagnosis" />
      <div className="glow-center" aria-hidden />

      <div className="shell relative mx-auto max-w-[780px]">
        <p className="mb-4 font-sans text-[15px] text-chalk-40">{t.lead}</p>
        <h2 className="mb-7 font-serif text-[clamp(1.7rem,3.4vw,2.8rem)] leading-[1.16] tracking-[-0.005em] uppercase">
          <ScrollFillText text={t.h2a} />
          <br />
          {/* La bascule du diagnostic : elle enfle brièvement au moment où
              elle entre dans le champ de vision, puis reprend sa taille —
              le mouvement fait lever les yeux dessus au lieu de la laisser
              passer comme une deuxième ligne de titre. */}
          <span
            ref={h2Ref}
            className="surligne-grad inline-block font-bold"
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
            const base = i * 260
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
                {/* Toutes les fausses causes sont surlignées et barrées :
                    c'est ce que le surlignage désigne ici — la liste de ce
                    qui a été essayé pour rien. */}
                <span className="surligne relative inline-block font-serif text-[1.05rem] ">
                  {fc.label}
                  <span
                    aria-hidden
                    className="absolute left-0 top-1/2 h-px bg-brand/70"
                    style={{
                      width: listVisible ? "100%" : "0%",
                      transition: "width 480ms cubic-bezier(.22,.68,0,1)",
                      transitionDelay: `${base + 160}ms`,
                    }}
                  />
                </span>

                <p
                  className="m-0 mt-1 font-sans text-[13.5px] leading-snug text-chalk-55 transition-all duration-500"
                  style={{
                    opacity: listVisible ? 1 : 0,
                    transform: listVisible ? "translateY(0)" : "translateY(4px)",
                    transitionDelay: `${base + 260}ms`,
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
                    transitionDelay: `${base + 360}ms`,
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
          <div
            ref={wipeRef}
            onPointerDown={(e) => {
              dragging.current = true
              setFromClientX(e.clientX)
            }}
            className="relative h-[260px] cursor-ew-resize select-none overflow-hidden sm:h-[300px]"
            style={{ opacity: splitVisible ? 1 : 0, transition: "opacity 700ms ease" }}
          >
            {/* La couche du dessous : « Aujourd'hui », pleine largeur — elle
                se révèle à mesure que le curseur avance vers la droite.
                L'illustration reprend les mêmes six éléments que « Hier »,
                mais alignés le long d'un axe : ce n'est plus un nuage, c'est
                une architecture. */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[linear-gradient(160deg,#1a0d0e_0%,#0a0a0a_100%)] px-6 text-center">
              <svg viewBox="0 0 160 70" className="h-14 w-36" aria-hidden>
                <line x1="14" y1="35" x2="146" y2="35" stroke="var(--color-brand)" strokeWidth="1.5" />
                {[14, 40.4, 66.8, 93.2, 119.6, 146].map((x, i) => (
                  <g key={x}>
                    <line x1={x} y1="35" x2={x} y2={i % 2 === 0 ? 24 : 46} stroke="var(--color-brand)" strokeWidth="1.5" />
                    {i % 2 === 0 ? (
                      <rect x={x - 6} y="14" width="12" height="10" rx="1.5" fill="var(--color-brand)" />
                    ) : (
                      <circle cx={x} cy="51" r="6" fill="var(--color-brand)" />
                    )}
                  </g>
                ))}
              </svg>
              <div>
                <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.16em] text-brand">
                  {t.diagramAfter}
                </div>
                <p className="m-0 max-w-[260px] font-serif text-[clamp(1.1rem,2.4vw,1.5rem)] font-bold leading-[1.3] text-white">
                  {t.splitAfter}
                </p>
              </div>
            </div>

            {/* La couche du dessus : « Hier », désaturée, découpée jusqu'à
                `pct` — à gauche, comme le sens de lecture le veut : hier
                avant aujourd'hui. Le texte ne se déplace pas, seule la
                fenêtre qui le découvre bouge. Les mêmes six éléments que
                « Aujourd'hui », mais dispersés sans aucun axe commun. */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#0d0d0d] px-6 text-center [filter:grayscale(1)_brightness(0.75)]"
              style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
            >
              <svg viewBox="0 0 160 70" className="h-14 w-36" aria-hidden>
                <rect x="10" y="8" width="14" height="11" rx="1.5" transform="rotate(-14 17 13)" fill="var(--color-chalk-40)" />
                <circle cx="128" cy="16" r="7" fill="var(--color-chalk-40)" />
                <rect x="66" y="32" width="11" height="15" rx="1.5" transform="rotate(20 71 39)" fill="var(--color-chalk-40)" />
                <circle cx="30" cy="50" r="6" fill="var(--color-chalk-40)" />
                <rect x="118" y="42" width="13" height="10" rx="1.5" transform="rotate(-9 124 47)" fill="var(--color-chalk-40)" />
                <circle cx="92" cy="14" r="5.5" fill="var(--color-chalk-40)" />
              </svg>
              <div>
                <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.16em] text-chalk-40">
                  {t.diagramBefore}
                </div>
                <p className="m-0 max-w-[260px] font-serif text-[clamp(1.1rem,2.4vw,1.5rem)] leading-[1.3] text-white">
                  {t.splitBefore}
                </p>
              </div>
            </div>

            <div aria-hidden className="pointer-events-none absolute inset-y-0 w-[2px] bg-brand" style={{ left: `${pct}%` }} />
            <div
              aria-hidden
              className="pointer-events-none absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand bg-ink text-[11px] text-brand shadow-[0_0_0_4px_rgba(10,10,10,0.6)]"
              style={{ left: `${pct}%` }}
            >
              ↔
            </div>

            <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[9.5px] uppercase tracking-[0.18em] text-chalk-40">
              {t.wipeHint}
            </span>
          </div>
        </div>

        {/* Le remède, déplacé ici depuis la section problème : il doit
            venir après qu'on a montré ce qui a déjà été essayé en vain,
            pas avant — sinon on annonce la solution avant d'avoir établi
            qu'aucune des tentatives courantes ne fonctionne. */}
        <p className="mt-10 font-serif text-[clamp(1.15rem,2.2vw,1.55rem)] leading-snug text-white/90">
          {t.remedy}
        </p>
      </div>
    </section>
  )
}
