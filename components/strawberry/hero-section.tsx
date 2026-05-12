"use client"

import { useState, useEffect } from "react"
import { useMouseParallax } from "@/hooks/use-strawberry"
import { AnimatedOrb } from "./animated-orb"

const BRANDS = [
  "Netflix", "Apple", "Nike", "Tesla", "Spotify", "Adobe", "Discord", "Stripe"
]

export function HeroSection() {
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
      {/* Orbs */}
      <AnimatedOrb color="radial-gradient(circle,#e63946,transparent)" size={700} x="-10%" y="-20%" opacity={0.18} />
      <AnimatedOrb color="radial-gradient(circle,#ff1a1a,transparent)" size={500} x="60%" y="30%" opacity={0.14} />
      <AnimatedOrb color="radial-gradient(circle,#dc2626,transparent)" size={300} x="80%" y="80%" opacity={0.1} />

      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)",
      }} />

      {/* Floating 3D shapes */}
      {floatingShapes.map((s, i) => (
        <div key={i} style={{
          position: "absolute", left: s.x, top: s.y, width: s.size, height: s.size,
          border: `2px solid ${s.color}`, borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          opacity: 0.25, zIndex: 0,
          animation: `morphFloat${s.anim} 8s ${s.delay} ease-in-out infinite`,
          transform: `translate(${mouse.x * 0.4}px, ${mouse.y * 0.4}px)`,
          transition: "transform 1s cubic-bezier(.22,.68,0,1.2)",
        }} />
      ))}

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1.5rem,4vw,4rem)", position: "relative", zIndex: 1, paddingTop: 120 }}>
        <div style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.9s cubic-bezier(.22,.68,0,1.2)",
        }}>
          {/* Label */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(230,57,70,0.12)", border: "1px solid rgba(230,57,70,0.35)",
            borderRadius: 100, padding: "6px 16px", marginBottom: 32,
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#e63946", boxShadow: "0 0 8px #e63946" }} />
            <span style={{ color: "#e63946", fontSize: 12, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.12em", fontWeight: 600 }}>NARRATIVE DIRECTION STUDIO · PARIS</span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(3rem,7vw,6.5rem)",
            fontWeight: 700,
            lineHeight: 1.06,
            color: "#fff",
            margin: "0 0 1.5rem",
            letterSpacing: "-0.03em",
            maxWidth: 900,
          }}>
            {"Your brand doesn't need more content."}
            <br />
            <span style={{ background: "linear-gradient(135deg,#e63946 20%,#ff1a1a 60%,#dc2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              It needs to be unmistakable.
            </span>
          </h1>

          <p style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: "clamp(1rem,1.8vw,1.25rem)",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7,
            maxWidth: 600,
            marginBottom: 52,
          }}>
            We build narrative perception systems that turn attention into authority — and authority into revenue. For creators, founders, and brands who refuse to blend in.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <a href="#services" style={{
              background: "linear-gradient(135deg,#e63946,#ff1a1a)",
              color: "#fff", padding: "16px 36px", borderRadius: 100,
              fontSize: 15, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 700,
              textDecoration: "none", letterSpacing: "0.04em",
              boxShadow: "0 8px 32px rgba(230,57,70,0.4)",
              transition: "transform 0.2s, box-shadow 0.2s",
              display: "inline-block",
            }}
              onMouseEnter={e => { (e.target as HTMLElement).style.transform = "translateY(-3px) scale(1.03)"; (e.target as HTMLElement).style.boxShadow = "0 16px 48px rgba(230,57,70,0.55)"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.transform = "translateY(0) scale(1)"; (e.target as HTMLElement).style.boxShadow = "0 8px 32px rgba(230,57,70,0.4)"; }}
            >
              See How We Work
            </a>
            <a href="#cases" style={{
              color: "rgba(255,255,255,0.6)", fontSize: 15,
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.25)",
              paddingBottom: 2, transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = "#fff"}
              onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)"}
            >
              View Case Studies
            </a>
          </div>

          {/* Trust bar */}
          <div style={{ marginTop: 80, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", marginBottom: 8 }}>
              Trusted by ambitious creators, founders, and brands who refuse to be ordinary.
            </p>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap", alignItems: "center", marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#e63946", fontSize: 16 }}>&#10003;</span>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>47+ brands transformed in 2025</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#e63946", fontSize: 16 }}>&#10003;</span>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>2.3M+ in client revenue generated</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#e63946", fontSize: 16 }}>&#10003;</span>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>8-week average time to measurable results</span>
              </div>
            </div>
            {/* Brand logos marquee */}
            <div style={{ overflow: "hidden", position: "relative" }}>
              <div style={{ 
                display: "flex", 
                gap: 48, 
                animation: "scroll 20s linear infinite",
                width: "max-content"
              }}>
                {[...BRANDS, ...BRANDS].map((b, i) => (
                  <span key={i} style={{ color: "rgba(255,255,255,0.2)", fontSize: 16, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 600, letterSpacing: "0.08em", whiteSpace: "nowrap" }}>{b}</span>
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
