"use client"

import Link from "next/link"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"

const RESULTS = [
  {
    metric: "+312%",
    label: "Revenue in 90 days",
    descriptor: "B2B SaaS · Paris · Post-Series A",
    detail: "From 14k MRR to 58k MRR after the Brand Narrative Architecture. The Differentiation Diagnostic alone unlocked an enterprise tier the founder couldn't sell before.",
  },
  {
    metric: "2.4M",
    label: "Organic views in one quarter",
    descriptor: "Executive coaching · Independent · Solo founder",
    detail: "Zero ad spend. The Narrative Platform and Deployment Kit isolated the one territory only this founder could own — one short-form essay alone did 870k views.",
  },
  {
    metric: "4x",
    label: "Inbound pipeline value",
    descriptor: "Financial education · Lyon · Bootstrapped",
    detail: "Before, leads came in cold and unqualified. After: founders DMing her with the exact phrasing from the Language System. The pipeline filled itself.",
  },
]

const QUOTES = [
  {
    quote: "We'd been trying to articulate what we do for three years. They got it in three weeks. Our sales cycle is now shorter than our onboarding.",
    descriptor: "Co-founder · B2B SaaS · Paris",
    system: "Brand Narrative Architecture",
  },
  {
    quote: "I stopped guessing what to post. The Language System they wrote is the closest thing I've had to a creative co-founder — except it doesn't sleep.",
    descriptor: "Founder · Executive coaching · Independent",
    system: "Brand Narrative Architecture",
  },
  {
    quote: "It named the thing I'd been circling for two years. After delivery, prospects started repeating my own words back to me.",
    descriptor: "Founder · Financial education · Lyon",
    system: "Brand Narrative Architecture",
  },
]

export function CasesSection() {
  return (
    <section id="cases" style={{ padding: "140px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d", color: "#fff", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase", fontFamily: SANS }}>
            Selected Results · Anonymized
          </div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2.25rem,5vw,3.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 32 }}>
            The work, in numbers.
          </h2>
          <p style={{ fontFamily: SANS, fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.55)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7, fontStyle: "italic" }}>
            Our founders rarely speak publicly about the work. Sectors and stages disclosed; names withheld by their preference, not ours.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 100 }}>
          {RESULTS.map((r, i) => (
            <div key={i} style={{ padding: "40px 32px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
              <div style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem,4vw,3.5rem)", fontWeight: 700, color: COLOR, lineHeight: 1, marginBottom: 8, letterSpacing: "-0.03em" }}>
                {r.metric}
              </div>
              <div style={{ fontFamily: SANS, fontSize: 13, color: "rgba(255,255,255,0.9)", letterSpacing: "0.04em", marginBottom: 24, textTransform: "uppercase" }}>
                {r.label}
              </div>
              <div style={{ fontFamily: SANS, fontSize: 12, color: COLOR, marginBottom: 16, letterSpacing: "0.02em" }}>
                {r.descriptor}
              </div>
              <p style={{ fontFamily: SANS, fontSize: "0.92rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>
                {r.detail}
              </p>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 80 }}>
          {QUOTES.map((q, i) => (
            <div key={i} style={{ padding: "36px 28px", borderLeft: `2px solid ${COLOR}`, background: "rgba(255,255,255,0.02)" }}>
              <p style={{ fontFamily: SERIF, fontSize: "1.05rem", fontStyle: "italic", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, marginBottom: 24 }}>
                "{q.quote}"
              </p>
              <div style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.7)", marginBottom: 12, letterSpacing: "0.02em" }}>
                {q.descriptor}
              </div>
              <div style={{ display: "inline-block", fontSize: 10, letterSpacing: "0.2em", color: COLOR, padding: "4px 10px", border: `1px solid ${COLOR}`, borderRadius: 100, textTransform: "uppercase", fontFamily: SANS }}>
                {q.system}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/case-studies" style={{ display: "inline-block", color: COLOR, fontSize: 14, fontFamily: SANS, letterSpacing: "0.05em", textDecoration: "none", borderBottom: `1px solid ${COLOR}`, paddingBottom: 4 }}>
            See full method cases →
          </Link>
        </div>

      </div>
    </section>
  )
}
