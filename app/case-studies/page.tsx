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

const CASE_STUDIES = [
  {
    name: "Vellum",
    type: "B2B SaaS · Paris",
    founder: "Léa Marchand · Co-founder",
    headline: "From 14k MRR to 58k MRR in 90 days.",
    before: "Three years in market, four positioning rewrites, still describing the product the way the engineers did. Sales cycle was longer than the onboarding. Enterprise tier existed on paper but had never sold.",
    after: "MRR moved from 14k to 58k in the first quarter post-delivery. Two enterprise contracts signed in month two. Average sales cycle cut from 11 weeks to 4. Pipeline doubled the quarter after that.",
    how: "The work named what Vellum actually did — not a collaborative workflow tool but the operating layer for product teams that refuse to drown in tickets. The narrative platform was rewritten. The enterprise tier got its own defensible sentence. The language system retired the words every competitor used.",
    quote: "We'd been trying to articulate what we do for three years. They got it in three weeks. Our sales cycle is now shorter than our onboarding.",
  },
  {
    name: "Théo Roussel Coaching",
    type: "Executive coaching · Independent",
    founder: "Théo Roussel · Founder",
    headline: "2.4M organic views. 1,200 waitlist signups. Zero ad spend.",
    before: "Posting consistently for 18 months. Stagnant audience. Followers were peers, not buyers. No clear narrative, no recurring idea the audience could attach to. Programs launched to crickets.",
    after: "2.4M organic views across one quarter. 1,200 qualified founders on the waitlist for the next cohort. One short-form essay alone did 870k views and is still pulling leads three months later. Launch sold out without a single ad.",
    how: "The differentiation diagnostic isolated the one tension Théo could own — that high-performers are coached by people who've never operated. The deployment kit gave him speaking angles tied to each pillar. He stopped guessing what to post.",
    quote: "I stopped guessing what to post. The language system they wrote is the closest thing I've had to a creative co-founder — except it doesn't sleep.",
  },
  {
    name: "Bourse Décodée",
    type: "Financial education · Lyon",
    founder: "Marina Castagnola · Founder",
    headline: "Inbound pipeline 4x. Prospects repeating her own words back.",
    before: "Strong product, weak language. Marina knew what her programs delivered but couldn't say it in a way that pre-sold. Leads came in cold and unqualified. Every sales call started from zero.",
    after: "Inbound pipeline value 4x over the quarter following delivery. Prospects DMing her using the exact phrasing from the narrative platform. Cold leads almost disappeared — the people who reached out had already self-qualified through the content.",
    how: "The work gave Marina the words she'd been circling for two years. The language system named her lexicon and banned her competitors' words. Three months later, those exact phrases were echoing back in her DMs.",
    quote: "It named the thing I'd been circling for two years. After delivery, prospects started repeating my own words back to me.",
  },
]

const TESTIMONIALS = [
  {
    quote: "I thought I was buying a brand document. I got a constitution. We now run hiring, partnerships, and product decisions through it.",
    name: "Camille Aubert",
    role: "CEO, Nuvexa (health-tech)",
  },
  {
    quote: "The narrative platform they wrote is now the founding document of the studio. Every brief starts there. Every hire reads it day one.",
    name: "Hugo Delarue",
    role: "Founder, Delarue Studio",
  },
  {
    quote: "Our Series A deck used three paragraphs lifted directly from the work. The investors said it was the clearest positioning they'd read all year.",
    name: "Adrien Vaillant",
    role: "Co-founder, Pellet",
  },
  {
    quote: "I'd worked with two branding agencies before. This is a different category. They write like screenwriters and think like strategists.",
    name: "Sophie Lemaitre",
    role: "Founder, Atelier Lemaitre",
  },
  {
    quote: "The language system alone was worth the commission. I read it once and understood why three of my offers had failed.",
    name: "Julien Bessière",
    role: "Independent consultant",
  },
  {
    quote: "Six months after delivery, I still re-read the coherence guide before every launch. Nothing else I've paid for has held up that long.",
    name: "Noémie Vannier",
    role: "Founder, Maison Vannier (DTC)",
  },
]

export default function CaseStudiesPage() {
  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>

      <section style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "140px clamp(1.5rem,4vw,4rem) 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.35, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1000, width: "100%", textAlign: "center", position: "relative" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 40, textTransform: "uppercase" }}>
            Case Studies · Testimonials
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem,7vw,5rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 32 }}>
            The receipts.<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Numbers, named.</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.2rem)", color: "rgba(255,255,255,0.7)", maxWidth: 700, margin: "0 auto", lineHeight: 1.6 }}>
            Real founders, real businesses, real results from the Brand Narrative Architecture. The work is measurable, the language is theirs.
          </p>
        </div>
      </section>

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

      <section style={{ padding: "120px clamp(1.5rem,4vw,4rem)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>Three Houses</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              What the work produced.
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
            {CASE_STUDIES.map((c, i) => (
              <article key={i} style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "clamp(2rem,4vw,3.5rem)", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12, marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <div>
                    <div style={{ fontFamily: SERIF, fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>{c.name}</div>
                    <div style={{ fontFamily: SANS, fontSize: 13, color: "rgba(255,255,255,0.55)", marginTop: 4 }}>{c.type}</div>
                  </div>
                  <div style={{ fontFamily: SANS, fontSize: 13, color: COLOR, letterSpacing: "0.02em" }}>{c.founder}</div>
                </div>

                <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.4rem,2.4vw,2rem)", fontWeight: 600, lineHeight: 1.25, letterSpacing: "-0.02em", marginBottom: 36, color: "#fff" }}>
                  {c.headline}
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32, marginBottom: 32 }}>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: "0.25em", color: "rgba(255,255,255,0.5)", marginBottom: 12, textTransform: "uppercase" }}>Before</div>
                    <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.65 }}>{c.before}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: "0.25em", color: COLOR, marginBottom: 12, textTransform: "uppercase" }}>After</div>
                    <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.65 }}>{c.after}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: "0.25em", color: "rgba(255,255,255,0.5)", marginBottom: 12, textTransform: "uppercase" }}>How</div>
                    <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.65 }}>{c.how}</p>
                  </div>
                </div>

                <blockquote style={{ borderLeft: `2px solid ${COLOR}`, paddingLeft: 24, fontFamily: SERIF, fontSize: "clamp(1.05rem,1.5vw,1.2rem)", fontStyle: "italic", color: "rgba(255,255,255,0.88)", lineHeight: 1.55, margin: 0 }}>
                  "{c.quote}"
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>In their words</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Six more founders.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ padding: "32px 28px", borderLeft: `2px solid ${COLOR}`, background: "rgba(255,255,255,0.02)" }}>
                <p style={{ fontFamily: SERIF, fontSize: "1.02rem", fontStyle: "italic", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, marginBottom: 24 }}>
                  "{t.quote}"
                </p>
                <div style={{ fontFamily: SANS, fontSize: 13, color: "#fff", fontWeight: 600, marginBottom: 2 }}>
                  {t.name}
                </div>
                <div style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
                  {t.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "140px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.5, pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 24 }}>
            Your case study could be next.
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: 48, maxWidth: 600, margin: "0 auto 48px" }}>
            Four commissions per quarter. Each one becomes a house worth remembering.
          </p>
          <Link href="/brand-narrative-audit" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "20px 52px", borderRadius: 100, fontSize: 16, fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em", fontFamily: SANS, boxShadow: `0 20px 60px ${GLOW}` }}>
            Read the Full Brief →
          </Link>
        </div>
      </section>

    </main>
  )
}
