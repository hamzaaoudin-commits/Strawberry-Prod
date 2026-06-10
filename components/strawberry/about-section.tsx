"use client"

import { useScrollReveal } from "@/hooks/use-strawberry"
import { AnimatedOrb } from "./animated-orb"
import { GlassCard } from "./glass-card"

const BELIEFS = [
  {
    n: "01",
    t: "Not a brand agency. A studio of doctrine.",
    d: "We do not deliver marketing assets. We write the document that declares what a house is, what it refuses, and how it sounds when it speaks. The artifact is a constitution, not a deck.",
    color: "#e63946",
  },
  {
    n: "02",
    t: "Not content. Architecture.",
    d: "Content is what a house produces. Architecture is what makes that content cohere across years, surfaces, and hands. We build the second. The first follows on its own.",
    color: "#ff1a1a",
  },
  {
    n: "03",
    t: "Not for everyone. By selection.",
    d: "Four commissions per quarter. Most inquiries do not become engagements. The work depends on selecting houses whose convictions deserve the discipline. Politeness is not enough. Alignment is.",
    color: "#dc2626",
  },
]

export function AboutSection() {
  const [ref, vis] = useScrollReveal()

  return (
    <section id="about" style={{ background: "#0a0a0a", padding: "120px clamp(1.5rem,4vw,4rem)", position: "relative", overflow: "hidden" }}>
      <AnimatedOrb color="radial-gradient(circle,#dc2626,transparent)" size={400} x="10%" y="60%" opacity={0.08} />
      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <div style={{ fontSize: 11, color: "#dc2626", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>THE STUDIO</div>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3.5rem)", color: "#fff", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 32 }}>
              What this studio is.
              <br />
              And what it is not.
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 17, lineHeight: 1.8, marginBottom: 24 }}>
              Strawberry Production is a narrative perception studio operating from Paris. One founder. Four commissions per quarter. A single offer, refined commission after commission. The work is editorial in shape and disciplined by inheritance.
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 17, lineHeight: 1.8, marginBottom: 48 }}>
              We do not write content. We do not run campaigns. We design the <strong style={{ color: "rgba(255,255,255,0.85)" }}>identity, position, and language</strong> that make a founder impossible to confuse with the field and impossible to generate by a machine.
            </p>
            <div style={{ padding: "28px 36px", borderRadius: 20, background: "rgba(230,57,70,0.08)", border: "1px solid rgba(230,57,70,0.2)" }}>
              <p style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "rgba(255,255,255,0.9)", fontSize: 20, fontStyle: "italic", lineHeight: 1.5, margin: 0 }}>
                In a market where everyone has access to the same machine, the best product no longer wins. The clearest doctrine does.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {BELIEFS.map((b, i) => (
              <GlassCard key={i} style={{ padding: "28px 32px", display: "flex", gap: 24, alignItems: "flex-start" }}>
                <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: b.color + "33", lineHeight: 1, flexShrink: 0 }}>{b.n}</div>
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
