"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
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
    h1a: "We don't build brands.",
    h1b: "We build the universe they live in.",
    sub: "A narrative perception studio building the identity, position, and language that make founders impossible to confuse and impossible to generate. From Paris.",
    cta1: "Commission the Work \u2192",
    cta2: "View case studies",
    trusted: "Trusted by ambitious creators, founders, and brands who refuse to be ordinary.",
    stats: ["47+ houses served", "8.4M+ EUR in client revenue attributed", "94% renewal or referral rate", "12-week average time to ROI"],
  },
  fr: {
    badge: "STUDIO DE PERCEPTION NARRATIVE · PARIS",
    h1a: "On ne construit pas des marques.",
    h1b: "On construit l'univers dans lequel elles vivent.",
    sub: "Un studio de perception narrative qui bâtit l'identité, la position et le langage qui rendent les fondateurs impossibles à confondre — et impossibles à générer. Depuis Paris.",
    cta1: "Commander le travail \u2192",
    cta2: "Voir les études de cas",
    trusted: "La confiance de créateurs, fondateurs et marques ambitieux qui refusent d'être ordinaires.",
    stats: ["47+ maisons accompagnées", "8,4M€+ de revenus clients attribués", "94% de reconduction ou recommandation", "12 semaines de délai moyen jusqu'au ROI"],
  },
  es: {
    badge: "ESTUDIO DE PERCEPCIÓN NARRATIVA · PARÍS",
    h1a: "No construimos marcas.",
    h1b: "Construimos el universo en el que viven.",
    sub: "Un estudio de percepción narrativa que construye la identidad, la posición y el lenguaje que hacen a los fundadores imposibles de confundir — e imposibles de generar. Desde París.",
    cta1: "Encargar el trabajo \u2192",
    cta2: "Ver casos de estudio",
    trusted: "La confianza de creadores, fundadores y marcas ambiciosos que se niegan a ser ordinarios.",
    stats: ["47+ casas atendidas", "8,4M€+ en ingresos de clientes atribuidos", "94% de renovación o recomendación", "12 semanas de tiempo medio hasta el ROI"],
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
    <section id="home" style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden", background: "#0a0a0a" }}>
      <AnimatedOrb color="radial-gradient(circle,#e63946,transparent)" size={700} x="-10%" y="-20%" opacity={0.18} />
      <AnimatedOrb color="radial-gradient(circle,#ff1a1a,transparent)" size={500} x="60%" y="30%" opacity={0.14} />
      <AnimatedOrb color="radial-gradient(circle,#dc2626,transparent)" size={300} x="80%" y="80%" opacity={0.1} />

      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)",
      }} />

      {floatingShapes.map((s, i) => (
        <div key={i} style={{
          position: "absolute", left: s.x, top: s.y, width: s.size, height: s.size,
          border: "2px solid " + s.color, borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          opacity: 0.25, zIndex: 0,
          animation: "morphFloat" + s.anim + " 8s " + s.delay + " ease-in-out infinite",
          transform: "translate(" + (mouse.x * 0.4) + "px, " + (mouse.y * 0.4) + "px)",
          transition: "transform 1s cubic-bezier(.22,.68,0,1.2)",
        }} />
      ))}

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1.5rem,4vw,4rem)", position: "relative", zIndex: 1, paddingTop: 120, width: "100%" }}>
        <div style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.9s cubic-bezier(.22,.68,0,1.2)",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(230,57,70,0.12)", border: "1px solid rgba(230,57,70,0.35)",
            borderRadius: 100, padding: "6px 16px", marginBottom: 32,
            maxWidth: "100%", overflow: "hidden",
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#e63946", boxShadow: "0 0 8px #e63946", flexShrink: 0 }} />
            <span style={{ color: "#e63946", fontSize: 11, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.1em", fontWeight: 600, whiteSpace: "nowrap" }}>{t.badge}</span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(1.7rem,6vw,6.5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#fff",
            margin: "0 0 1.5rem",
            letterSpacing: "-0.02em",
            maxWidth: "100%",
            wordBreak: "break-word",
          }}>
            {t.h1a}
            <br />
            <span className="gradient-text">
              {t.h1b}
            </span>
          </h1>

          <p style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: "clamp(0.9rem,1.8vw,1.25rem)",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7,
            maxWidth: 640,
            marginBottom: 52,
          }}>
            {t.sub}
          </p>

          <div className="hero-cta" style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <Link
              href="/brand-narrative-audit"
              onClick={() => track("audit_click", { from: "home_hero" })}
              style={{
                background: "linear-gradient(135deg,#e63946,#ff1a1a)",
                color: "#fff", padding: "16px 36px", borderRadius: 100,
                fontSize: 15, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 700,
                textDecoration: "none", letterSpacing: "0.04em",
                boxShadow: "0 8px 32px rgba(230,57,70,0.4)",
                transition: "transform 0.2s, box-shadow 0.2s",
                display: "inline-block",
              }}
            >
              {t.cta1}
            </Link>
            <Link href="/case-studies" style={{
              color: "rgba(255,255,255,0.55)", fontSize: 14,
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.2)",
              paddingBottom: 2, transition: "color 0.2s, border-color 0.2s",
              letterSpacing: "0.02em",
            }}>
              {t.cta2}
            </Link>
          </div>

          <div style={{ marginTop: 80, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", marginBottom: 8 }}>
              {t.trusted}
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center", marginBottom: 24 }}>
              {t.stats.map((label, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "#e63946", fontSize: 16 }}>&#10003;</span>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>{label}</span>
                </div>
              ))}
            </div>

            <div style={{ overflow: "hidden", position: "relative" }}>
              <div style={{ 
                display: "flex", 
                gap: 48, 
                animation: "scroll 25s linear infinite",
                width: "max-content"
              }}>
                {BRANDS.concat(BRANDS).map((b, i) => (
                  <span key={i} style={{ color: "rgba(255,255,255,0.2)", fontSize: 16, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 600, letterSpacing: "0.08em", whiteSpace: "nowrap" }}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #e63946 20%, #ff1a1a 60%, #dc2626);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: block;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 640px) {
          .hero-cta {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  )
}
