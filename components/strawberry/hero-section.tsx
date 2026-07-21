"use client"

import { useState, useEffect } from "react"
import { LocaleLink as Link } from "@/components/locale-link"
import { track } from "@vercel/analytics"
import { useMouseParallax } from "@/hooks/use-strawberry"
import { AnimatedOrb } from "./animated-orb"
import { useT } from "@/lib/i18n"

const BRANDS = [
  "Notion", "Linear", "Substack", "Pitch", "Framer", "Raycast", "Superhuman", "Beehiiv", "Cal.com", "Resend", "Pennylane", "Vercel"
]

const T = {
  en: {
    badge: "NARRATIVE PERCEPTION STUDIO · PARIS",
    h1a: "Impossible to confuse.",
    h1b: "Impossible to generate.",
    sub: "A narrative perception studio in Paris. We build the identity, position and language a founder cannot be mistaken for anyone else in — and that no machine can write, because it has not lived you.",
    cta1: "Commission the Work \u2192",
    cta2: "Read the SILLAGE document",
    trusted: "How this studio works, stated plainly.",
    stats: ["Four commissions per quarter", "Delivered as one editorial document", "Thirty-day walkthrough included"],
  },
  fr: {
    badge: "STUDIO DE PERCEPTION NARRATIVE · PARIS",
    h1a: "Impossible à confondre.",
    h1b: "Impossible à générer.",
    sub: "Un studio de perception narrative, à Paris. Nous bâtissons l'identité, la position et le langage dans lesquels un fondateur ne peut être confondu avec personne — et qu'aucune machine ne peut écrire, parce qu'elle ne vous a pas vécu.",
    cta1: "Commander le travail \u2192",
    cta2: "Voir les études de cas",
    trusted: "Comment ce studio travaille, dit simplement.",
    stats: ["Quatre commandes par trimestre", "Livré comme un document éditorial unique", "Revue à trente jours incluse"],
  },
  es: {
    badge: "ESTUDIO DE PERCEPCIÓN NARRATIVA · PARÍS",
    h1a: "Imposible de confundir.",
    h1b: "Imposible de generar.",
    sub: "Un estudio de percepción narrativa, en París. Construimos la identidad, la posición y el lenguaje en los que un fundador no puede confundirse con nadie — y que ninguna máquina puede escribir, porque no le ha vivido.",
    cta1: "Encargar el trabajo \u2192",
    cta2: "Leer el documento SILLAGE",
    trusted: "C\u00f3mo trabaja este estudio, dicho sin rodeos.",
    stats: ["Cuatro encargos por trimestre", "Entregado como un único documento editorial", "Revisión a los treinta días incluida"],
  },
}

export function HeroSection() {
  const t = useT(T)
  const mouse = useMouseParallax(18)
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

      {/* Grid mesh */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-[length:60px_60px] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_30%,transparent_100%)]"
      />

      {floatingShapes.map((shape) => (
        <div
          key={shape.x + shape.y}
          aria-hidden
          className="absolute z-0 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border-2 opacity-25 transition-transform duration-1000 ease-[cubic-bezier(.22,.68,0,1.2)]"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
            borderColor: shape.color,
            animation: `morphFloat${shape.anim} 8s ${shape.delay} ease-in-out infinite`,
            transform: `translate(${mouse.x * 0.4}px, ${mouse.y * 0.4}px)`,
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

          <h1 className="m-0 mb-6 max-w-full break-words font-serif text-[clamp(1.7rem,6vw,6.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            {t.h1a}
            <br />
            <span className="block bg-[linear-gradient(135deg,#e63946_20%,#ff1a1a_60%,#dc2626)] bg-clip-text text-transparent">
              {t.h1b}
            </span>
          </h1>

          <p className="mb-12 max-w-[640px] font-sans text-[clamp(0.9rem,1.8vw,1.25rem)] leading-[1.7] text-white/55">
            {t.sub}
          </p>

          <div className="flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="/brand-narrative-audit"
              onClick={() => track("audit_click", { from: "home_hero" })}
              className="btn-primary px-9 py-4 font-bold tracking-[0.04em] shadow-[0_8px_32px_rgba(230,57,70,0.4)]"
            >
              {t.cta1}
            </Link>
            <Link
              href="/sample-audit"
              className="border-b border-white/20 pb-0.5 font-sans text-sm tracking-[0.02em] text-white/55 no-underline transition-colors hover:border-white/40 hover:text-white"
            >
              {t.cta2}
            </Link>
          </div>

          <div className="mt-20 border-t border-hair pt-10">
            <p className="mb-2 font-sans text-sm text-chalk-40">{t.trusted}</p>

            <div className="mb-6 flex flex-wrap items-center gap-4">
              {t.stats.map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <span aria-hidden className="text-base text-brand">&#10003;</span>
                  <span className="font-sans text-sm text-white/60">{label}</span>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden">
              <div className="flex w-max gap-12 [animation:scroll_25s_linear_infinite]">
                {BRANDS.concat(BRANDS).map((b, i) => (
                  <span
                    key={`${b}-${i}`}
                    className="whitespace-nowrap font-sans text-base font-semibold tracking-[0.08em] text-white/20"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
