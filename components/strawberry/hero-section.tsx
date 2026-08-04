"use client"

import { useState, useEffect } from "react"
import { LocaleLink as Link } from "@/components/locale-link"
import { track } from "@vercel/analytics"
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
  
  useEffect(() => { 
    setTimeout(() => setMounted(true), 100) 
  }, [])

  const floatingShapes = [
    { size: 80, x: "12%", y: "20%", color: "#e63946", delay: "0s", anim: "A" },
    { size: 50, x: "85%", y: "15%", color: "#ff1a1a", delay: "0.5s", anim: "B" },
    { size: 65, x: "75%", y: "70%", color: "#dc2626", delay: "1s", anim: "A" },
    { size: 35, x: "20%", y: "78%", color: "#e63946", delay: "0.3s", anim: "B" },
  ]

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      <ViewTracker name="hero" />
      <AnimatedOrb color="radial-gradient(circle,#e63946,transparent)" size={700} x="-10%" y="-20%" opacity={0.18} />
      <AnimatedOrb color="radial-gradient(circle,#ff1a1a,transparent)" size={500} x="60%" y="30%" opacity={0.14} />
      <AnimatedOrb color="radial-gradient(circle,#dc2626,transparent)" size={300} x="80%" y="80%" opacity={0.1} />

      {/* Grid mesh */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-[length:60px_60px] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_30%,transparent_100%)]"
      />

      {/* Les formes flottantes suivaient la souris et se déformaient sans fin.
          Elles restent, immobiles et masquées sur petit écran : sur téléphone
          elles ne servaient qu'à faire travailler le compositeur. */}
      {floatingShapes.map((shape) => (
        <div
          key={shape.x + shape.y}
          aria-hidden
          className="absolute z-0 hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border-2 opacity-25 md:block motion-reduce:hidden"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
            borderColor: shape.color,
            animation: `morphFloat${shape.anim} 8s ${shape.delay} ease-in-out infinite`,
          }}
        />
      ))}

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

          <h1 className="m-0 mb-6 max-w-full break-words font-serif text-[clamp(1.7rem,6vw,6.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
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

          <div className="flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="/brand-narrative-architecture"
              onClick={() => track("audit_click", { from: "home_hero" })}
              className="btn-primary px-9 py-4 font-bold tracking-[0.04em] shadow-[0_8px_32px_rgba(230,57,70,0.4)]"
            >
              {t.cta1}
            </Link>
            {/* Le second bouton est retiré : il invitait à quitter une page qui
                ne vend qu'une chose pour la page qui en propose quatre, dans les
                premières secondes. Une page, une action. */}
          </div>

        </div>
      </div>
    </section>
  )
}
