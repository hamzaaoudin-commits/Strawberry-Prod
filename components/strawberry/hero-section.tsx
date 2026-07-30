"use client"

import { useState, useEffect } from "react"
import { LocaleLink as Link } from "@/components/locale-link"
import { track } from "@vercel/analytics"
import { AnimatedOrb } from "./animated-orb"
import { useT } from "@/lib/i18n"

/**
 * Le hero.
 *
 * Quatre décisions structurent ce bloc, dans l'ordre de lecture :
 *
 * 1. Le badge reste, mais il ne portait aucune tension. La ligne qui le suit
 *    ouvre un trou de curiosité sur un constat négatif : elle nomme le fait
 *    désagréable et retient la cause. C'est la seule raison de lire la suite.
 * 2. Le slogan reste en H1 — court, signable, mémorable. Ce qu'il n'est pas,
 *    c'est une proposition de valeur : il ne dit ni le bénéfice, ni la durée,
 *    ni la différenciation. Le sous-titre s'en charge.
 * 3. La phrase d'ouverture avait le studio pour sujet. Elle a le lecteur.
 * 4. Les trois « faits » listés sous la barre parlaient de cadence et de format
 *    de livraison — des caractéristiques. Ce sont maintenant trois gains.
 *
 * Un seul geste primaire : « Commander le travail ». Le lien secondaire vers
 * les autres offres a quitté le hero ; il vit dans le pied de page.
 */

const T = {
  en: {
    badge: "NARRATIVE PERCEPTION STUDIO · PARIS",
    hook: "Your three closest competitors already promise exactly what you promise. Your offer is not what's wrong.",
    h1a: "Impossible to confuse.",
    h1b: "Impossible to generate.",
    valueProp:
      "In three weeks, the place you occupy in a prospect's mind stops being an accident: it is written, held, and impossible for anyone else to occupy.",
    sub: "You will be recognisable instantly — and no one will be able to write it for you.",
    cta1: "Commission the Work \u2192",
    trusted: "What changes, for you.",
    stats: [
      "You stop being compared on price",
      "You hold your rates without negotiating them down",
      "Usable the Monday after",
    ],
  },
  fr: {
    badge: "STUDIO DE PERCEPTION NARRATIVE · PARIS",
    hook: "Vos trois concurrents les plus proches promettent déjà exactement ce que vous promettez. Ce n'est pas votre offre qui est en cause.",
    h1a: "Impossible à confondre.",
    h1b: "Impossible à générer.",
    valueProp:
      "En trois semaines, la place que vous occupez dans la tête d'un prospect cesse d'être subie : elle est écrite, tenue, et impossible à occuper par un autre.",
    sub: "Vous serez reconnaissable instantanément — et personne ne pourra l'écrire à votre place.",
    cta1: "Commander le travail \u2192",
    trusted: "Ce qui change, pour vous.",
    stats: [
      "Vous cessez d'être comparé au prix",
      "Vous tenez vos tarifs sans les négocier",
      "Exploitable le lundi qui suit",
    ],
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
      <AnimatedOrb color="radial-gradient(circle,#e63946,transparent)" size={700} x="-10%" y="-20%" opacity={0.18} />
      <AnimatedOrb color="radial-gradient(circle,#ff1a1a,transparent)" size={500} x="60%" y="30%" opacity={0.14} />
      <AnimatedOrb color="radial-gradient(circle,#dc2626,transparent)" size={300} x="80%" y="80%" opacity={0.1} />

      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-[length:60px_60px] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_30%,transparent_100%)]"
      />

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
          <div className="mb-5 inline-flex max-w-full items-center gap-2 overflow-hidden rounded-full border border-brand/35 bg-brand/[0.12] px-4 py-1.5">
            <span aria-hidden className="h-[7px] w-[7px] shrink-0 rounded-full bg-brand shadow-[0_0_8px_#e63946]" />
            <span className="whitespace-nowrap font-sans text-[11px] font-semibold tracking-[0.1em] text-brand">
              {t.badge}
            </span>
          </div>

          {/* Le trou de curiosité : le constat désagréable est donné, la cause
              est retenue. La page entière existe pour la livrer. */}
          <p className="mb-8 max-w-[620px] border-l-2 border-brand/45 pl-5 font-sans text-[clamp(0.9rem,1.5vw,1.05rem)] leading-[1.6] text-chalk-75">
            {t.hook}
          </p>

          <h1 className="m-0 mb-6 max-w-full break-words font-serif text-[clamp(1.7rem,6vw,6.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            {t.h1a}
            <br />
            <span className="block bg-[linear-gradient(135deg,#e63946_20%,#ff1a1a_60%,#dc2626)] bg-clip-text pb-[0.14em] text-transparent">
              {t.h1b}
            </span>
          </h1>

          {/* La proposition de valeur, sous le slogan : bénéfice, durée,
              différenciation. Le slogan signe, cette phrase vend. */}
          <p className="mb-6 max-w-[720px] font-serif text-[clamp(1.05rem,2.2vw,1.6rem)] leading-[1.35] tracking-[-0.01em] text-white">
            {t.valueProp}
          </p>

          <p className="mb-12 max-w-[600px] font-sans text-[clamp(0.9rem,1.6vw,1.1rem)] leading-[1.7] text-white/55">
            {t.sub}
          </p>

          <div className="flex flex-col items-start gap-5">
            <Link
              href="/brand-narrative-architecture"
              onClick={() => track("commission_click", { from: "home_hero" })}
              className="btn-primary px-9 py-4 font-bold tracking-[0.04em] shadow-[0_8px_32px_rgba(230,57,70,0.4)]"
            >
              {t.cta1}
            </Link>
          </div>

          <div className="mt-20 border-t border-hair pt-10">
            <p className="mb-4 font-sans text-sm text-chalk-40">{t.trusted}</p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {t.stats.map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <span aria-hidden className="text-base text-brand">
                    &#10003;
                  </span>
                  <span className="font-sans text-sm text-white/60">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
