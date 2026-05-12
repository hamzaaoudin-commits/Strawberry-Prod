"use client"

import { useScrollReveal } from "@/hooks/use-strawberry"
import { AnimatedOrb } from "./animated-orb"
import { GlassCard } from "./glass-card"

const SYSTEMS = [
  {
    icon: "◎",
    label: "Identity Architecture",
    desc: "We define your positioning, mythology, and narrative DNA so you become unmistakable in your space.",
    color: "#e63946",
  },
  {
    icon: "◉",
    label: "Content Domination",
    desc: "We build your cinematic content system so every piece reinforces your authority.",
    color: "#ff1a1a",
  },
  {
    icon: "◈",
    label: "Revenue Systems",
    desc: "We engineer your offers, funnels, and conversion assets so your audience naturally moves toward buying.",
    color: "#dc2626",
  },
]

const WHO_FOR = [
  { who: "For Creators", tagline: "You have the talent. You lack the system.", detail: "We turn your content into a recognizable universe that builds loyal audiences and premium income." },
  { who: "For Founders", tagline: "You have the product. You lack the presence.", detail: "We position you as the category authority so clients come to you — not your competitors." },
  { who: "For Brands", tagline: "You have traffic. You lack conversion.", detail: "We design the perception infrastructure that turns attention into revenue at scale." },
]

export function ServicesSection() {
  const [ref, vis] = useScrollReveal()
  
  return (
    <section id="services" style={{ background: "#0a0a0a", padding: "120px clamp(1.5rem,4vw,4rem)", position: "relative", overflow: "hidden" }}>
      <AnimatedOrb color="radial-gradient(circle,#e63946,transparent)" size={600} x="50%" y="50%" opacity={0.1} />
      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div style={{ fontSize: 11, color: "#e63946", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>THE SOLUTION</div>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3.5rem)", color: "#fff", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 20 }}>
            {"We don't fix your marketing."}
            <br />
            <span style={{ background: "linear-gradient(135deg,#e63946,#ff1a1a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              We redesign how the world perceives you.
            </span>
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.45)", fontSize: 17, maxWidth: 560, margin: "0 auto" }}>
            Strawberry Production is a narrative perception studio. We work with creators, founders, and brands who refuse to blend in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {SYSTEMS.map((s, i) => (
            <GlassCard key={i} style={{ padding: "48px 36px" }}>
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: `${s.color}22`,
                border: `1px solid ${s.color}44`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28, marginBottom: 28,
                boxShadow: `0 8px 24px ${s.color}22`,
                color: s.color,
              }}>{s.icon}</div>
              <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>{s.label}</h3>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              <div style={{ marginTop: 32, height: 1, background: `linear-gradient(90deg,${s.color}55,transparent)` }} />
              <a href="#offers" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 24, color: s.color, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em", transition: "gap 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.gap = "14px"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.gap = "8px"}
              >
                Learn More <span>→</span>
              </a>
            </GlassCard>
          ))}
        </div>

        {/* Who it's for */}
        <div style={{ marginTop: 80, paddingTop: 80, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: "clamp(1.5rem,3vw,2.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              This is for builders who think in years, not quarters.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {WHO_FOR.map((w, i) => (
              <div key={i} style={{ padding: "32px 28px", borderRadius: 20, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 12 }}>{w.who.toUpperCase()}</div>
                <p style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 18, fontWeight: 600, lineHeight: 1.3, marginBottom: 16 }}>{w.tagline}</p>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{w.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
