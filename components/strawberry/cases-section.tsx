"use client"

import { useScrollReveal } from "@/hooks/use-strawberry"
import { AnimatedOrb } from "./animated-orb"
import { GlassCard } from "./glass-card"

const CASES = [
  {
    client: "Alex · Cybersecurity Consultant",
    title: "From 500 gigs to 15K contracts",
    sub: "in 8 weeks",
    stats: [
      { v: "30x", l: "Revenue" },
      { v: "3/wk", l: "Inbound leads" },
      { v: "2", l: "Podcast invites" },
    ],
    quote: "The shift wasn't in my skills. It was in how I was perceived.",
    color: "#e63946",
  },
  {
    client: "Jamie · YouTube Creator",
    title: "Watch time 28% to 71%",
    sub: "and first high-ticket offer launched",
    stats: [
      { v: "71%", l: "Watch time" },
      { v: "+8K", l: "Subscribers in 90d" },
      { v: "120K", l: "First viral video" },
    ],
    quote: "Strawberry didn't just fix my scripts. They fixed how I thought about content.",
    color: "#ff1a1a",
  },
  {
    client: "TechFlow · B2B SaaS",
    title: "Demo bookings +180%",
    sub: "through narrative repositioning",
    stats: [
      { v: "+180%", l: "Demo bookings" },
      { v: "7.1%", l: "Conversion rate" },
      { v: "-40%", l: "Sales cycle" },
    ],
    quote: "We thought we had a product problem. Turns out, we had a story problem.",
    color: "#dc2626",
  },
]

export function CasesSection() {
  const [ref, vis] = useScrollReveal()
  
  return (
    <section id="cases" style={{ background: "#0d0d0d", padding: "120px clamp(1.5rem,4vw,4rem)", position: "relative", overflow: "hidden" }}>
      <AnimatedOrb color="radial-gradient(circle,#e63946,transparent)" size={500} x="20%" y="80%" opacity={0.1} />
      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ fontSize: 11, color: "#e63946", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>SOCIAL PROOF</div>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3.5rem)", color: "#fff", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Results speak louder than promises.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {CASES.map((c, i) => (
            <GlassCard key={i} style={{ padding: "40px 36px", overflow: "hidden", position: "relative" }}>
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg,${c.color},transparent)`,
              }} />
              <div style={{ fontSize: 11, color: c.color, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.12em", fontWeight: 600, marginBottom: 20 }}>{c.client.toUpperCase()}</div>
              <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 24, fontWeight: 700, lineHeight: 1.2, marginBottom: 6 }}>{c.title}</h3>
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: c.color, fontSize: 14, fontWeight: 500, marginBottom: 32 }}>{c.sub}</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 36 }}>
                {c.stats.map((s, j) => (
                  <div key={j} style={{ textAlign: "center", padding: "16px 8px", borderRadius: 12, background: `${c.color}0f`, border: `1px solid ${c.color}22` }}>
                    <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: c.color, lineHeight: 1 }}>{s.v}</div>
                    <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 11, marginTop: 6, letterSpacing: "0.08em" }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "rgba(255,255,255,0.55)", fontSize: 16, fontStyle: "italic", lineHeight: 1.6, margin: 0 }}>
                {`"${c.quote}"`}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
