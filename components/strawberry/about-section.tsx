"use client"

import { useScrollReveal } from "@/hooks/use-strawberry"
import { AnimatedOrb } from "./animated-orb"
import { GlassCard } from "./glass-card"

const BELIEFS = [
  { n: "01", t: "We think cinematically", d: "Every piece of content is built with pacing, tension, and emotional architecture borrowed from cinema — not marketing playbooks.", color: "#e63946" },
  { n: "02", t: "We engineer retention", d: "We apply psychological frameworks proven to capture and hold attention on digital platforms — Zeigarnik effect, pattern interrupts, emotional beats.", color: "#ff1a1a" },
  { n: "03", t: "We unify systems", d: "Most agencies fix content. Or copy. Or funnels. We integrate identity, narrative, and revenue into one coherent ecosystem.", color: "#dc2626" },
]

export function AboutSection() {
  const [ref, vis] = useScrollReveal()
  
  return (
    <section id="about" style={{ background: "#0a0a0a", padding: "120px clamp(1.5rem,4vw,4rem)", position: "relative", overflow: "hidden" }}>
      <AnimatedOrb color="radial-gradient(circle,#dc2626,transparent)" size={400} x="10%" y="60%" opacity={0.08} />
      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <div style={{ fontSize: 11, color: "#dc2626", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>WHO WE ARE</div>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3.5rem)", color: "#fff", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 32 }}>
              {"We build brands the world can't stop noticing."}
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 17, lineHeight: 1.8, marginBottom: 24 }}>
              {"Strawberry Production is a narrative perception studio based in Paris. We don't write content. We don't \"do marketing.\" We design "}<strong style={{ color: "rgba(255,255,255,0.8)" }}>how the world perceives you</strong>.
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 17, lineHeight: 1.8, marginBottom: 48 }}>
              Our clients are creators, founders, and brands who refuse to be ordinary — and we turn them into category leaders through surgical narrative architecture.
            </p>
            <div style={{ padding: "28px 36px", borderRadius: 20, background: "rgba(230,57,70,0.08)", border: "1px solid rgba(230,57,70,0.2)" }}>
              <p style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "rgba(255,255,255,0.9)", fontSize: 20, fontStyle: "italic", lineHeight: 1.5, margin: 0 }}>
                {'"In a saturated market, the best product doesn\'t win. The best story does."'}
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {BELIEFS.map((b, i) => (
              <GlassCard key={i} style={{ padding: "28px 32px", display: "flex", gap: 24, alignItems: "flex-start" }}>
                <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: `${b.color}33`, lineHeight: 1, flexShrink: 0 }}>{b.n}</div>
                <div>
                  <h4 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "#fff", fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{b.t}</h4>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{b.d}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
