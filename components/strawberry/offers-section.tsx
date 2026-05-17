"use client"

import Link from "next/link"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

const STRIPE_URL = "TODO_NEW_STRIPE_LINK"

const PILLARS = [
  { n: "I", title: "The Narrative Spine" },
  { n: "II", title: "The Perception Map" },
  { n: "III", title: "The Founder Archetype" },
  { n: "IV", title: "The Audience Universe" },
  { n: "V", title: "The 90-Day Doctrine" },
]

export function OffersSection() {
  return (
    <section id="offers" style={{ padding: "140px clamp(1.5rem,4vw,4rem)", background: "#0a0a0a", color: "#fff", position: "relative", overflow: "hidden" }}>

      {/* Ambient glow */}
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 65%)`, opacity: 0.25, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase", fontFamily: SANS }}>
            The Signature Commission
          </div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2.25rem,5vw,3.75rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 28 }}>
            One commission.<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>One unforgettable house.</span>
          </h2>
          <p style={{ fontFamily: SANS, fontSize: "clamp(1rem,1.4vw,1.15rem)", color: "rgba(255,255,255,0.65)", maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
            We craft a single offer, refined commission after commission. No menu, no add-ons to choose from, no decision fatigue. One world built for you, in four weeks.
          </p>
        </div>

        {/* The Audit card */}
        <div style={{ maxWidth: 920, margin: "0 auto", border: `1px solid rgba(230,57,70,0.25)`, background: "linear-gradient(180deg, rgba(230,57,70,0.04) 0%, rgba(10,10,10,0.6) 100%)", padding: "clamp(2.5rem,5vw,4.5rem)", position: "relative", backdropFilter: "blur(20px)" }}>

          {/* Corner accent */}
          <div style={{ position: "absolute", top: -1, left: -1, width: 60, height: 60, borderTop: `2px solid ${COLOR}`, borderLeft: `2px solid ${COLOR}` }} />
          <div style={{ position: "absolute", bottom: -1, right: -1, width: 60, height: 60, borderBottom: `2px solid ${COLOR}`, borderRight: `2px solid ${COLOR}` }} />

          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 32, textTransform: "uppercase", fontFamily: SANS }}>
            The Brand Narrative Audit · 9,500€
          </div>

          <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.75rem,3.5vw,2.75rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 24 }}>
            A 45+ page intelligence report. Your house given its constitution.
          </h3>

          <p style={{ fontFamily: SANS, fontSize: "clamp(0.98rem,1.3vw,1.1rem)", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 40, maxWidth: 720 }}>
            Four weeks of immersion, narrative architecture, and refinement. At the end, your business has a doctrine: who it is, who it speaks to, what world it lives in, and exactly what to say for the first 90 days.
          </p>

          {/* Pillars preview */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)", marginBottom: 48 }}>
            {PILLARS.map((p) => (
              <div key={p.n} style={{ background: "#0a0a0a", padding: "24px 20px", textAlign: "center" }}>
                <div style={{ fontFamily: SERIF, fontSize: "1.5rem", color: COLOR, fontWeight: 700, marginBottom: 8, lineHeight: 1 }}>{p.n}</div>
                <div style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.75)", letterSpacing: "0.02em", lineHeight: 1.4 }}>{p.title}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <Link href={STRIPE_URL} target="_blank" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "16px 36px", borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em", fontFamily: SANS, boxShadow: `0 15px 40px ${GLOW}` }}>
              Commission the Audit →
            </Link>
            <Link href="/brand-narrative-audit" style={{ display: "inline-block", color: "rgba(255,255,255,0.85)", padding: "16px 32px", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 100, fontSize: 14, fontWeight: 500, textDecoration: "none", letterSpacing: "0.04em", fontFamily: SANS, transition: "all 0.3s" }}>
              Read the Full Brief
            </Link>
          </div>

          <div style={{ marginTop: 32, fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em", fontFamily: SANS }}>
            Limited to four commissions per quarter.
          </div>

        </div>

      </div>
    </section>
  )
}
