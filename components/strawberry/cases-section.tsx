"use client"

import Link from "next/link"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"

const RESULTS = [
  {
    metric: "+312%",
    label: "Revenue in 90 days",
    client: "B2B SaaS founder",
    detail: "From 14k MRR to 58k MRR after Brand Intelligence + Revenue Architecture. Positioning rewrite alone unlocked enterprise tier they couldn't sell before.",
  },
  {
    metric: "2.4M",
    label: "Organic views in one quarter",
    client: "Coaching practice",
    detail: "Zero ad spend. Content Domination shipped a 12-week narrative engine — one short-form alone did 870k views and drove 1,200 qualified leads to the waitlist.",
  },
  {
    metric: "47%",
    label: "Sales page conversion",
    client: "Online course creator",
    detail: "Up from 3.1% on the previous page. Revenue Architecture rewrote the offer, restructured the bonus stack, and turned a stalled launch into the year's biggest week.",
  },
]

const QUOTES = [
  {
    quote: "We'd been trying to articulate what we do for three years. They got it in three weeks. Our sales cycle is now shorter than our onboarding.",
    name: "Léa M.",
    role: "Founder, B2B SaaS",
    system: "Brand Intelligence",
  },
  {
    quote: "I stopped guessing what to post. The content engine is the closest thing I've had to a creative co-founder — except it scales.",
    name: "Théo R.",
    role: "Solopreneur, knowledge business",
    system: "Content Domination",
  },
  {
    quote: "First launch after the rebuild did 187k€. The page closes for me now. I review the analytics and that's about it.",
    name: "Marina C.",
    role: "Course creator, finance",
    system: "Revenue Architecture",
  },
]

export function CasesSection() {
  return (
    <section id="cases" style={{ padding: "120px clamp(1.5rem,4vw,4rem)", background: "#0a0a0a", position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", top: "20%", right: "-10%", width: 700, height: 700, background: `radial-gradient(circle, ${COLOR}, transparent 70%)`, opacity: 0.07, filter: "blur(100px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>SELECTED RESULTS</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.1, color: "#fff" }}>
            The work, in numbers.
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", maxWidth: 640, margin: "0 auto" }}>
            We don&apos;t do vibes. Each system is built to move a specific metric — and the founders who&apos;ve shipped with us can show you exactly which one.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 22, marginBottom: 80 }}>
          {RESULTS.map((r, i) => (
            <div key={i} style={{ position: "relative", background: "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))", border: `1px solid ${COLOR}22`, borderRadius: 24, padding: "40px 32px", overflow: "hidden" }}>
              <div aria-hidden style={{ position: "absolute", top: "-50%", right: "-30%", width: 300, height: 300, background: `radial-gradient(circle, ${COLOR}, transparent 70%)`, opacity: 0.1, filter: "blur(60px)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ fontFamily: SERIF, fontSize: "clamp(2.8rem, 5vw, 4rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8, background: `linear-gradient(135deg, #fff, ${COLOR})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {r.metric}
                </div>
                <div style={{ fontFamily: SANS, fontSize: 13, color: COLOR, letterSpacing: "0.1em", fontWeight: 600, textTransform: "uppercase", marginBottom: 18 }}>
                  {r.label}
                </div>
                <div style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>
                  {r.client}
                </div>
                <p style={{ fontFamily: SANS, fontSize: 14.5, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", margin: 0 }}>
                  {r.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 64 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 14 }}>IN THEIR WORDS</div>
            <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              What founders say after delivery.
            </h3>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: 22 }}>
            {QUOTES.map((q, i) => (
              <figure key={i} style={{ margin: 0, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "32px 28px", display: "flex", flexDirection: "column" }}>
                <div style={{ fontFamily: SERIF, fontSize: 48, color: COLOR, lineHeight: 0.5, marginBottom: 16, fontWeight: 700 }}>&ldquo;</div>
                <blockquote style={{ fontFamily: SERIF, fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,0.88)", fontStyle: "italic", margin: "0 0 24px 0", flex: 1 }}>
                  {q.quote}
                </blockquote>
                <figcaption style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontFamily: SANS, fontSize: 14, color: "#fff", fontWeight: 600 }}>{q.name}</div>
                    <div style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{q.role}</div>
                  </div>
                  <div style={{ fontFamily: SANS, fontSize: 10, color: COLOR, letterSpacing: "0.12em", fontWeight: 700, padding: "5px 12px", background: `${COLOR}1a`, border: `1px solid ${COLOR}33`, borderRadius: 100 }}>
                    {q.system}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/case-studies" style={{ display: "inline-block", background: "rgba(255,255,255,0.04)", border: `1px solid ${COLOR}55`, color: "#fff", padding: "16px 36px", borderRadius: 100, fontFamily: SANS, fontSize: 14, fontWeight: 600, textDecoration: "none", letterSpacing: "0.06em" }}>
            See full case studies →
          </Link>
        </div>
      </div>
    </section>
  )
}
