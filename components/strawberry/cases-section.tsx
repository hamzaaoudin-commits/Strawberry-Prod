"use client"

import Link from "next/link"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"

const RESULTS = [
  {
    metric: "+312%",
    label: "Revenue in 90 days",
    client: "Léa Marchand · Co-founder, Vellum (B2B SaaS, Paris)",
    detail: "From 14k MRR to 58k MRR after the Brand Narrative Audit. Positioning rewrite alone unlocked an enterprise tier she couldn't sell before.",
  },
  {
    metric: "2.4M",
    label: "Organic views in one quarter",
    client: "Théo Roussel · Executive coach, independent",
    detail: "Zero ad spend. The Audit gave him a narrative spine and a 90-day doctrine — one short-form alone did 870k views and drove 1,200 qualified leads to the waitlist.",
  },
  {
    metric: "4x",
    label: "Inbound pipeline value",
    client: "Marina Castagnola · Founder, Bourse Décodée",
    detail: "Before the Audit, leads came in cold and unqualified. After: founders DMing her with exact problems her narrative had named. The pipeline filled itself.",
  },
]

const QUOTES = [
  {
    quote: "We'd been trying to articulate what we do for three years. They got it in three weeks. Our sales cycle is now shorter than our onboarding.",
    name: "Léa Marchand",
    role: "Co-founder, Vellum",
    system: "Brand Narrative Audit",
  },
  {
    quote: "I stopped guessing what to post. The doctrine they wrote is the closest thing I've had to a creative co-founder — except it doesn't sleep.",
    name: "Théo Roussel",
    role: "Executive coach, independent",
    system: "Brand Narrative Audit",
  },
  {
    quote: "The Audit named the thing I'd been circling for two years. After delivery, prospects started repeating my own words back to me.",
    name: "Marina Castagnola",
    role: "Founder, Bourse Décodée",
    system: "Brand Narrative Audit",
  },
]

export function CasesSection() {
  return (
    <section id="cases" style={{ padding: "140px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d", color: "#fff", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase", fontFamily: SANS }}>
            Selected Results
          </div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2.25rem,5vw,3.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
            The work, in numbers.
          </h2>
        </div>

        {/* Metrics cards */}
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
                {r.client}
              </div>
              <p style={{ fontFamily: SANS, fontSize: "0.92rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>
                {r.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Quotes */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 80 }}>
          {QUOTES.map((q, i) => (
            <div key={i} style={{ padding: "36px 28px", borderLeft: `2px solid ${COLOR}`, background: "rgba(255,255,255,0.02)" }}>
              <p style={{ fontFamily: SERIF, fontSize: "1.05rem", fontStyle: "italic", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, marginBottom: 24 }}>
                "{q.quote}"
              </p>
              <div style={{ fontFamily: SANS, fontSize: 13, color: "#fff", fontWeight: 600, marginBottom: 4 }}>
                {q.name}
              </div>
              <div style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.55)", marginBottom: 12 }}>
                {q.role}
              </div>
              <div style={{ display: "inline-block", fontSize: 10, letterSpacing: "0.2em", color: COLOR, padding: "4px 10px", border: `1px solid ${COLOR}`, borderRadius: 100, textTransform: "uppercase", fontFamily: SANS }}>
                {q.system}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <Link href="/case-studies" style={{ display: "inline-block", color: COLOR, fontSize: 14, fontFamily: SANS, letterSpacing: "0.05em", textDecoration: "none", borderBottom: `1px solid ${COLOR}`, paddingBottom: 4 }}>
            See full case studies →
          </Link>
        </div>

      </div>
    </section>
  )
}
