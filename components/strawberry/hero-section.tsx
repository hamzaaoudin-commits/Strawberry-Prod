"use client"

import { useState, useEffect, useRef } from "react"
import { AnimatedOrb } from "./animated-orb"
import { useT } from "@/lib/i18n"
import { ViewTracker } from "@/components/strawberry/view-tracker"

/**
 * Le bandeau de logos a été retiré.
 *
 * Douze noms de sociétés défilant sous trois affirmations cochées se lisent
 * comme une liste de clients. Aucune de ces maisons n'a commandé le studio :
 * c'est exactement l'exposition L.121-2 pour laquelle les faux cas ont déjà été
 * retirés. Ce qui reste dit la même chose et est vrai.
 */

/**
 * Le champ de points de l'extraction : des fragments dispersés, dont un
 * sous-groupe ("near") se rapproche du point de convergence à droite. Défini
 * en dehors du composant — c'est une donnée statique, elle n'a rien à faire
 * recalculée à chaque rendu.
 */
const EXTRACTION_POINTS = [
  { x: 60, y: 90, near: false },
  { x: 160, y: 220, near: false },
  { x: 90, y: 400, near: false },
  { x: 220, y: 560, near: false },
  { x: 60, y: 700, near: false },
  { x: 340, y: 130, near: false },
  { x: 400, y: 640, near: false },
  { x: 480, y: 60, near: false },
  { x: 520, y: 740, near: false },
  { x: 610, y: 170, near: true },
  { x: 640, y: 540, near: true },
  { x: 700, y: 230, near: true },
  { x: 690, y: 480, near: true },
  { x: 730, y: 300, near: true },
  { x: 720, y: 420, near: true },
  { x: 800, y: 260, near: true },
  { x: 810, y: 440, near: true },
  { x: 850, y: 340, near: false },
  { x: 900, y: 200, near: false },
  { x: 920, y: 500, near: false },
]

const T = {
  en: {
    badge: "NARRATIVE ARCHITECTURE STUDIO · PARIS",
    slogan: "Impossible to confuse. Impossible to generate.",
    h1a: "The identity that makes people",
    h1b: "belong to your brand, not just buy it.",
    h1sub: "It isn't generated. It's extracted from who you already are.",
    sub: "What you sell doesn't change. How the market perceives it does \u2014 enough to follow you, defend you, talk about you unprompted. That's the difference between a customer and someone loyal.",
    cta1: "Place your commission \u2192",
  },
  fr: {
    badge: "STUDIO D'ARCHITECTURE NARRATIVE · PARIS",
    slogan: "Impossible à confondre. Impossible à générer.",
    h1a: "L'identité qui fait qu'on adhère",
    h1b: "à votre marque, pas qu'on l'achète.",
    h1sub: "Elle n'est pas générée. Elle est extraite de ce que vous êtes déjà.",
    sub: "Ce que vous vendez ne change pas. Ce que le marché en perçoit, si — au point de vous suivre, de vous défendre, d'en parler sans qu'on le lui demande. C'est la différence entre un client et quelqu'un de fidèle.",
    cta1: "Passer commande \u2192",
  },
}

export function HeroSection() {
  const t = useT(T)
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // Un minuteur au montage ne se redéclenche pas de façon fiable quand
    // Next.js restaure une page depuis son cache de navigation plutôt que de
    // la remonter entièrement — l'animation ne jouait alors qu'au
    // rafraîchissement complet. Un observateur de visibilité est robuste
    // dans les deux cas : il se redéclenche à chaque fois que le hero
    // redevient visible, peu importe comment on y est arrivé.
    const el = heroRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setMounted(true), 100)
        } else {
          setMounted(false)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" ref={heroRef as any} className="relative flex min-h-[82vh] items-center overflow-hidden bg-ink">
      <ViewTracker name="hero" />
      <AnimatedOrb color="radial-gradient(circle,#e63946,transparent)" size={700} x="-10%" y="-20%" opacity={0.18} />
      <AnimatedOrb color="radial-gradient(circle,#ff1a1a,transparent)" size={500} x="60%" y="30%" opacity={0.14} />
      <AnimatedOrb color="radial-gradient(circle,#dc2626,transparent)" size={300} x="80%" y="80%" opacity={0.1} />

      {/* Grid mesh */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-[length:60px_60px] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_30%,transparent_100%)]"
      />

      {/* L'extraction, en image plutôt qu'en blobs génériques. Les anciennes
          formes qui se déformaient sans fin sont un cliché de landing page ;
          ceci dit littéralement ce que fait le studio — des fragments
          dispersés qui convergent vers un seul point — plutôt que de
          décorer sans rien dire. Masqué sur petit écran et sous mouvement
          réduit, comme l'ancien élément qu'il remplace. */}
      <svg
        aria-hidden
        viewBox="0 0 1000 800"
        className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full opacity-[0.22] md:block motion-reduce:hidden"
        preserveAspectRatio="xMidYMid slice"
      >
        {EXTRACTION_POINTS.map((p, i) => (
          <line
            key={`l${i}`}
            x1={p.x}
            y1={p.y}
            x2="760"
            y2="360"
            stroke="#e63946"
            strokeWidth="0.6"
            opacity={p.near ? 0.55 : 0.18}
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={mounted ? 0 : 1}
            style={{
              transition: "stroke-dashoffset 1400ms cubic-bezier(.22,.68,0,1)",
              transitionDelay: `${150 + i * 45}ms`,
            }}
          />
        ))}
        {EXTRACTION_POINTS.map((p, i) => (
          <circle
            key={`p${i}`}
            cx={p.x}
            cy={p.y}
            r={p.near ? 2.6 : 1.6}
            fill="#e63946"
            opacity={mounted ? (p.near ? 0.9 : 0.5) : 0}
            style={{
              transition: "opacity 500ms ease-out",
              transitionDelay: `${150 + i * 45 + 900}ms`,
            }}
          />
        ))}
        <circle cx="760" cy="360" r="4" fill="#e63946" />
        <circle cx="760" cy="360" r="14" fill="none" stroke="#e63946" strokeWidth="1" opacity="0.4" />
      </svg>

      <div className="relative z-[1] w-full shell px-gutter pt-32">
        <div
          className={[
            "transition-all duration-[900ms] ease-[cubic-bezier(.22,.68,0,1.2)]",
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          ].join(" ")}
        >
          <div className="mb-8 inline-flex max-w-full items-center gap-2 overflow-hidden rounded-full border border-brand/35 bg-brand/[0.12] px-4 py-1.5">
            <span aria-hidden className="h-[7px] w-[7px] shrink-0 rounded-full bg-brand shadow-[0_0_8px_#e63946]" />
            <span className="whitespace-nowrap font-sans text-[11px] font-semibold tracking-[0.1em] text-brand">
              {t.badge}
            </span>
          </div>

          {/* Le slogan ne vend rien seul : il ne dit ni quoi, ni en combien de
              temps, ni pourquoi vous. Il devient surtitre, et le H1 porte la
              proposition de valeur — bénéfice, durée, différenciation. */}
          <p className="mb-4 font-sans text-[12px] uppercase tracking-[0.22em] text-chalk-40">
            {t.slogan}
          </p>

          <h1 className="m-0 mb-6 max-w-full break-words font-serif text-[clamp(1.5rem,4.8vw,4.8rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
            {t.h1a}
            <br />
            <span className="block bg-[linear-gradient(135deg,#e63946_20%,#ff1a1a_60%,#dc2626)] bg-clip-text pb-[0.14em] text-transparent">
              {t.h1b}
            </span>
          </h1>

          <p className="mb-6 max-w-[680px] font-serif text-[clamp(1.05rem,2.2vw,1.6rem)] leading-[1.35] text-white/85">
            {t.h1sub}
          </p>

          <p className="mb-12 max-w-[640px] font-sans text-[clamp(0.9rem,1.8vw,1.25rem)] leading-[1.7] text-white/55">
            {t.sub}
          </p>

        </div>
      </div>
    </section>
  )
}
