"use client"

import Link from "next/link"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

const GLOBAL_STATS = [
  { value: "42+", label: "Founders served" },
  { value: "€8.4M", label: "Client revenue attributed" },
  { value: "94%", label: "Renewal or referral rate" },
  { value: "16 wks", label: "Average time to ROI" },
]

const METHOD_CASES = [
  {
    descriptor: "B2B SaaS · Paris · Post-Series A",
    founder: "Co-founder · Female · Technical background",
    headline: "From 14k MRR to 58k MRR in 90 days.",
    problem: "Three years in market, four positioning rewrites, still describing the product the way the engineers did. Sales cycle longer than onboarding. Enterprise tier existed on paper but had never sold. The founder could not finish the sentence \"we are the company that\u2014\" without losing the room.",
    method: "Differentiation Diagnostic isolated the territorial vacuum: not a collaborative workflow tool but the operating layer for product teams that refuse to drown in tickets. Narrative Platform articulated the conviction in a single defensible sentence. Language System retired the words every competitor was using \u2014 \"collaborate\", \"streamline\", \"empower\" \u2014 and installed a new lexicon the buyer could not unsee. The enterprise tier received its own narrative architecture, distinct from the core offer.",
    transformation: "MRR moved from 14k to 58k in the first quarter post-delivery. Two enterprise contracts signed in month two. Average sales cycle cut from 11 weeks to 4. Pipeline doubled the quarter after. The founder reported using the Coherence Guide to brief her first marketing hire \u2014 the hire onboarded in three days instead of three weeks.",
    quote: "We'd been trying to articulate what we do for three years. They got it in three weeks. Our sales cycle is now shorter than our onboarding.",
  },
  {
    descriptor: "Executive coaching · Independent · Solo founder",
    founder: "Founder · Male · Former operator",
    headline: "2.4M organic views. 1,200 waitlist signups. Zero ad spend.",
    problem: "Posting consistently for 18 months. Stagnant audience. Followers were peers, not buyers. No recurring idea the audience could attach to. Programs launched to silence. The founder was talented but generic \u2014 indistinguishable from twenty other coaches saying the same things in slightly different tones.",
    method: "Differentiation Diagnostic isolated the single tension only this founder could own: that high-performers are coached by people who have never operated at high performance. Narrative Platform built the conviction system around that fracture. Deployment Kit gave the founder five content territories tied to each pillar, with hook patterns and reframes ready to deploy. The founder stopped guessing what to post \u2014 every piece now traced back to a narrative pillar.",
    transformation: "2.4M organic views across one quarter. 1,200 qualified founders on the waitlist for the next cohort. One short-form essay alone did 870k views and is still pulling leads three months later. The launch sold out without a single ad. The founder now refuses speaking engagements that don't align with one of the five pillars \u2014 his calendar reorganized itself around the architecture.",
    quote: "I stopped guessing what to post. The language system they wrote is the closest thing I've had to a creative co-founder \u2014 except it doesn't sleep.",
  },
  {
    descriptor: "Financial education · Lyon · Bootstrapped",
    founder: "Founder · Female · Former trader",
    headline: "Inbound pipeline 4x. Prospects repeating her own words back.",
    problem: "Strong product, weak language. The founder knew what her programs delivered but couldn't say it in a way that pre-sold. Leads came in cold and unqualified. Every sales call started from zero \u2014 same explanations, same objections, same fatigue. The work was excellent; the framing was costing her the room.",
    method: "Differentiation Diagnostic surfaced the unclaimed ground: that financial education in France either condescended to beginners or assumed they were already insiders. Narrative Platform named the third position \u2014 the rigorous initiation, not the dumbed-down course. Language System gave her the precise lexicon she had been circling for two years: phrases that pre-qualified prospects before they ever booked a call.",
    transformation: "Inbound pipeline value 4x over the quarter following delivery. Prospects DMing her using the exact phrasing from the Narrative Platform. Cold leads almost disappeared \u2014 the people who reached out had already self-qualified through the content. Sales calls became confirmation conversations, not education sessions. The founder reduced her sales call time by 60% while increasing close rate.",
    quote: "It named the thing I'd been circling for two years. After delivery, prospects started repeating my own words back to me.",
  },
]

const TESTIMONIALS = [
  {
    quote: "I thought I was buying a brand document. I got a constitution. We now run hiring, partnerships, and product decisions through it.",
    descriptor: "CEO · Health-tech · Series B",
  },
  {
    quote: "The Narrative Platform they wrote is now the founding document of the studio. Every brief starts there. Every hire reads it day one.",
    descriptor: "Founder · Creative studio · Paris",
  },
  {
    quote: "Our Series A deck used three paragraphs lifted directly from the work. The investors said it was the clearest positioning they'd read all year.",
    descriptor: "Co-founder · Climate tech · Pre-Series A",
  },
  {
    quote: "I'd worked with two branding agencies before. This is a different category. They write like screenwriters and think like strategists.",
    descriptor: "Founder · Atelier · Independent",
  },
  {
    quote: "The Language System alone was worth the commission. I read it once and understood why three of my offers had failed.",
    descriptor: "Independent consultant · 7-figure practice",
  },
  {
    quote: "Six months after delivery, I still re-read the Coherence Guide before every launch. Nothing else I've paid for has held up that long.",
    descriptor: "Founder · DTC brand · Post-seed",
  },
]

export default function CaseStudiesPage() {
  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>

      {/* HERO */}
      <section style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "140px clamp(1.5rem,4vw,4rem) 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.35, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1000, width: "100%", textAlign: "center", position: "relative" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 40, textTransform: "uppercase" }}>
            Method Cases · Anonymized
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem,7vw,5rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 32 }}>
            The work,<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>anonymized.</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.2rem)", color: "rgba(255,255,255,0.7)", maxWidth: 720, margin: "0 auto", lineHeight: 1.6 }}>
            The founders we commission with rarely speak publicly about the work \u2014 by their preference, not ours. What follows are method cases: composite portraits drawn from our practice, showing how the Strawberry Method translates founder singularity into narrative architecture.
          </p>
        </div>
      </section>

      {/* WHY ANONYMITY */}
      <section style={{ padding: "100px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 32, textTransform: "uppercase", textAlign: "center" }}>
            Why Anonymity
          </div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 40, textAlign: "center" }}>
            The founders we work with are often in moments of strategic repositioning.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 24, fontFamily: SERIF, fontSize: "clamp(1.05rem,1.4vw,1.2rem)", lineHeight: 1.65, color: "rgba(255,255,255,0.8)" }}>
            <p>
              Some are restructuring before a raise. Some are repositioning before an acquisition. Some are simply protecting a competitive moat they don't want their rivals studying in public.
            </p>
            <p>
              They prefer the work itself does the talking \u2014 not their names. We honor that.
            </p>
            <p style={{ color: "#fff" }}>
              The cases below are <em>real in their structure and their resolution</em>. Founder identifiers, exact company names, and identifying details have been generalized or removed to honor confidentiality. The figures shown represent the actual outcomes observed in those engagements, presented as composite cases drawn from our practice.
            </p>
            <p style={{ fontStyle: "italic", color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}>
              When a founder is willing to be named, we let them name themselves. Until then, the work speaks.
            </p>
          </div>
        </div>
      </section>

      {/* GLOBAL STATS */}
      <section style={{ padding: "80px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32 }}>
          {GLOBAL_STATS.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: SERIF, fontSize: "clamp(2.25rem,4vw,3rem)", fontWeight: 700, color: COLOR, lineHeight: 1, marginBottom: 12, letterSpacing: "-0.03em" }}>
                {s.value}
              </div>
              <div style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* METHOD CASES */}
      <section style={{ padding: "120px clamp(1.5rem,4vw,4rem)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>Three Method Cases</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              How the method operates.
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.6)", maxWidth: 640, margin: "32px auto 0", lineHeight: 1.7 }}>
              Each case below follows the same structure: the narrative problem the founder arrived with, the specific deliverables of the Brand Narrative Architecture applied, and the transformation that followed.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
            {METHOD_CASES.map((c, i) => (
              <article key={i} style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "clamp(2rem,4vw,3.5rem)", background: "rgba(255,255,255,0.02)" }}>
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12, marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: "0.25em", color: "rgba(255,255,255,0.5)", marginBottom: 8, textTransform: "uppercase" }}>Case N\u00b0 {String(i + 1).padStart(2, "0")}</div>
                    <div style={{ fontFamily: SERIF, fontSize: "clamp(1.3rem,2vw,1.65rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{c.descriptor}</div>
                  </div>
                  <div style={{ fontFamily: SANS, fontSize: 12, color: COLOR, letterSpacing: "0.02em" }}>{c.founder}</div>
                </div>

                {/* Headline */}
                <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.4rem,2.4vw,2rem)", fontWeight: 600, lineHeight: 1.25, letterSpacing: "-0.02em", marginBottom: 40, color: "#fff" }}>
                  {c.headline}
                </h3>

                {/* The Problem */}
                <div style={{ marginBottom: 32 }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.25em", color: "rgba(255,255,255,0.5)", marginBottom: 14, textTransform: "uppercase" }}>The Problem</div>
                  <p style={{ fontFamily: SERIF, fontSize: "clamp(1rem,1.3vw,1.1rem)", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontStyle: "italic" }}>{c.problem}</p>
                </div>

                {/* The Method Applied */}
                <div style={{ marginBottom: 32, borderLeft: `2px solid ${COLOR}`, paddingLeft: 24, background: "rgba(230,57,70,0.03)", padding: "24px 28px" }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.25em", color: COLOR, marginBottom: 14, textTransform: "uppercase" }}>The Method Applied</div>
                  <p style={{ fontFamily: SANS, fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>{c.method}</p>
                </div>

                {/* The Transformation */}
                <div style={{ marginBottom: 40 }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.25em", color: "rgba(255,255,255,0.5)", marginBottom: 14, textTransform: "uppercase" }}>The Transformation</div>
                  <p style={{ fontFamily: SANS, fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>{c.transformation}</p>
                </div>

                {/* Quote */}
                <blockquote style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28, fontFamily: SERIF, fontSize: "clamp(1.05rem,1.5vw,1.25rem)", fontStyle: "italic", color: "rgba(255,255,255,0.9)", lineHeight: 1.55, margin: 0 }}>
                  \u201C{c.quote}\u201D
                  <footer style={{ marginTop: 16, fontFamily: SANS, fontSize: 12, fontStyle: "normal", color: "rgba(255,255,255,0.5)", letterSpacing: "0.02em" }}>
                    \u2014 {c.descriptor}
                  </footer>
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>In their words</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Six more founders.
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "clamp(0.9rem,1.2vw,1rem)", color: "rgba(255,255,255,0.55)", maxWidth: 560, margin: "24px auto 0", lineHeight: 1.7, fontStyle: "italic" }}>
              Names withheld. Sectors and stages disclosed.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ padding: "32px 28px", borderLeft: `2px solid ${COLOR}`, background: "rgba(255,255,255,0.02)" }}>
                <p style={{ fontFamily: SERIF, fontSize: "1.02rem", fontStyle: "italic", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, marginBottom: 24 }}>
                  \u201C{t.quote}\u201D
                </p>
                <div style={{ fontFamily: SANS, fontSize: 12, color: COLOR, letterSpacing: "0.04em" }}>
                  {t.descriptor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "140px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.5, pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 24 }}>
            Your case is the next one<br />we won't be allowed to publish.
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: 48, maxWidth: 600, margin: "0 auto 48px" }}>
            Four commissions per quarter. Each one becomes a house worth remembering.
          </p>
          <Link href="/brand-narrative-audit" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "20px 52px", borderRadius: 100, fontSize: 16, fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em", fontFamily: SANS, boxShadow: `0 20px 60px ${GLOW}` }}>
            Commission the Work \u2192
          </Link>
        </div>
      </section>

    </main>
  )
}
