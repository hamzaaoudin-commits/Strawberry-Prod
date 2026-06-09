"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

const GLOBAL_STATS = [
  { value: "47+", label: "Houses served" },
  { value: "€8.4M", label: "Client revenue attributed" },
  { value: "94%", label: "Renewal or referral rate" },
  { value: "12 wks", label: "Average time to ROI" },
]

const METHOD_CASES = [
  {
    descriptor: "B2B SaaS · Paris · Post-Series A",
    founder: "Co-founder · Female · Technical background",
    headline: "From 14k MRR to 58k MRR in 90 days.",
    problem: "Three years in market, four positioning rewrites, still describing the product the way the engineers did. Sales cycle longer than onboarding. Enterprise tier existed on paper but had never sold. The founder could not finish the sentence \"we are the company that—\" without losing the room.",
    method: "Differentiation Diagnostic isolated the territorial vacuum: not a collaborative workflow tool but the operating layer for product teams that refuse to drown in tickets. Narrative Platform articulated the conviction in a single defensible sentence. Language System retired the words every competitor was using — \"collaborate\", \"streamline\", \"empower\" — and installed a new lexicon the buyer could not unsee. The enterprise tier received its own narrative architecture, distinct from the core offer.",
    transformation: "MRR moved from 14k to 58k in the first quarter post-delivery. Two enterprise contracts signed in month two. Average sales cycle cut from 11 weeks to 4. Pipeline doubled the quarter after. The founder reported using the Coherence Guide to brief her first marketing hire — the hire onboarded in three days instead of three weeks.",
    quote: "We'd been trying to articulate what we do for three years. They got it in three weeks. Our sales cycle is now shorter than our onboarding.",
    chartId: "cs-chart1",
  },
  {
    descriptor: "Executive coaching · Independent · Solo founder",
    founder: "Founder · Male · Former operator",
    headline: "2.4M organic views. 1,200 waitlist signups. Zero ad spend.",
    problem: "Posting consistently for 18 months. Stagnant audience. Followers were peers, not buyers. No recurring idea the audience could attach to. Programs launched to silence. The founder was talented but generic — indistinguishable from twenty other coaches saying the same things in slightly different tones.",
    method: "Differentiation Diagnostic isolated the single tension only this founder could own: that high-performers are coached by people who have never operated at high performance. Narrative Platform built the conviction system around that fracture. Deployment Kit gave the founder five content territories tied to each pillar, with hook patterns and reframes ready to deploy. The founder stopped guessing what to post — every piece now traced back to a narrative pillar.",
    transformation: "2.4M organic views across one quarter. 1,200 qualified founders on the waitlist for the next cohort. One short-form essay alone did 870k views and is still pulling leads three months later. The launch sold out without a single ad. The founder now refuses speaking engagements that don't align with one of the five pillars — his calendar reorganized itself around the architecture.",
    quote: "I stopped guessing what to post. The language system they wrote is the closest thing I've had to a creative co-founder — except it doesn't sleep.",
    chartId: "cs-chart2",
  },
  {
    descriptor: "Financial education · Lyon · Bootstrapped",
    founder: "Founder · Female · Former trader",
    headline: "Inbound pipeline 4x. Prospects repeating her own words back.",
    problem: "Strong product, weak language. The founder knew what her programs delivered but couldn't say it in a way that pre-sold. Leads came in cold and unqualified. Every sales call started from zero — same explanations, same objections, same fatigue. The work was excellent; the framing was costing her the room.",
    method: "Differentiation Diagnostic surfaced the unclaimed ground: that financial education in France either condescended to beginners or assumed they were already insiders. Narrative Platform named the third position — the rigorous initiation, not the dumbed-down course. Language System gave her the precise lexicon she had been circling for two years: phrases that pre-qualified prospects before they ever booked a call.",
    transformation: "Inbound pipeline value 4x over the quarter following delivery. Prospects DMing her using the exact phrasing from the Narrative Platform. Cold leads almost disappeared — the people who reached out had already self-qualified through the content. Sales calls became confirmation conversations, not education sessions. The founder reduced her sales call time by 60% while increasing close rate.",
    quote: "It named the thing I'd been circling for two years. After delivery, prospects started repeating my own words back to me.",
    chartId: "cs-chart3",
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

const ATLAS_CASES = [
  { n: "01", title: "We had pivoted three times. I no longer knew what to say at dinner." },
  { n: "02", title: "The narrative that closed Series A could not carry the next eighteen months." },
  { n: "03", title: "I sold the company. I took two years. I came back. I refuse to be the founder of my last company." },
  { n: "07", title: "I refuse to hire. I refuse to scale. I cannot keep apologizing for it." },
  { n: "13", title: "Every brief we receive treats us as an agency. We are not." },
  { n: "19", title: "We are building something that does not exist. Every prospect tries to put us in a box that already does." },
]

function useCharts() {
  const initialized = useRef(false)
  useEffect(() => {
    if (initialized.current) return
    const script = document.createElement("script")
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"
    script.onload = () => {
      initialized.current = true
      const Chart = (window as any).Chart
      const gridColor = "rgba(255,255,255,0.08)"
      const tickColor = "rgba(255,255,255,0.4)"

      new Chart(document.getElementById("cs-chart1"), {
        type: "bar",
        data: {
          labels: ["Before", "After"],
          datasets: [{
            data: [14, 58],
            backgroundColor: ["rgba(255,255,255,0.15)", "#e63946"],
            borderRadius: 4,
            barThickness: 48,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: (ctx: any) => ctx.parsed.y + "k MRR" } },
          },
          scales: {
            x: { grid: { display: false }, ticks: { color: tickColor, font: { size: 12 } }, border: { display: false } },
            y: { grid: { color: gridColor }, border: { display: false }, ticks: { color: tickColor, font: { size: 11 }, callback: (v: any) => v + "k" }, min: 0, max: 70 },
          },
        },
      })

      new Chart(document.getElementById("cs-chart2"), {
        type: "line",
        data: {
          labels: ["Month 1", "Month 2", "Month 3"],
          datasets: [{
            data: [120, 980, 2400],
            borderColor: "#e63946",
            backgroundColor: "rgba(230,57,70,0.1)",
            fill: true,
            tension: 0.4,
            pointBackgroundColor: "#e63946",
            pointRadius: 5,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: (ctx: any) => ctx.parsed.y + "k views" } },
          },
          scales: {
            x: { grid: { display: false }, ticks: { color: tickColor, font: { size: 12 } }, border: { display: false } },
            y: { grid: { color: gridColor }, border: { display: false }, ticks: { color: tickColor, font: { size: 11 }, callback: (v: any) => v + "k" }, min: 0 },
          },
        },
      })

      new Chart(document.getElementById("cs-chart3"), {
        type: "bar",
        data: {
          labels: ["Before", "After"],
          datasets: [{
            data: [1, 4],
            backgroundColor: ["rgba(255,255,255,0.15)", "#e63946"],
            borderRadius: 4,
            barThickness: 48,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: (ctx: any) => ctx.parsed.y + "x pipeline" } },
          },
          scales: {
            x: { grid: { display: false }, ticks: { color: tickColor, font: { size: 12 } }, border: { display: false } },
            y: { grid: { color: gridColor }, border: { display: false }, ticks: { color: tickColor, font: { size: 11 }, callback: (v: any) => v + "x" }, min: 0, max: 5 },
          },
        },
      })
    }
    document.head.appendChild(script)
  }, [])
}

export default function CaseStudiesPage() {
  useCharts()

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>

      <section style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "140px clamp(1.5rem,4vw,4rem) 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.35, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1000, width: "100%", textAlign: "center", position: "relative" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 40, textTransform: "uppercase" }}>
            Selected Method Cases
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem,7vw,5rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 32 }}>
            The work,<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>received.</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.2rem)", color: "rgba(255,255,255,0.7)", maxWidth: 720, margin: "0 auto", lineHeight: 1.6 }}>
            How the Strawberry Method translates founder singularity into narrative architecture. Three method cases. Six voices. One discipline.
          </p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", maxWidth: 600, margin: "32px auto 0", lineHeight: 1.6, fontStyle: "italic", fontFamily: SERIF }}>
            Names withheld at clients&apos; request. Sectors and outcomes disclosed.
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
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12, marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: "0.25em", color: "rgba(255,255,255,0.5)", marginBottom: 8, textTransform: "uppercase" }}>Case N° {String(i + 1).padStart(2, "0")}</div>
                    <div style={{ fontFamily: SERIF, fontSize: "clamp(1.3rem,2vw,1.65rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{c.descriptor}</div>
                  </div>
                  <div style={{ fontFamily: SANS, fontSize: 12, color: COLOR, letterSpacing: "0.02em" }}>{c.founder}</div>
                </div>
                <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.4rem,2.4vw,2rem)", fontWeight: 600, lineHeight: 1.25, letterSpacing: "-0.02em", marginBottom: 40, color: "#fff" }}>
                  {c.headline}
                </h3>
                <div style={{ marginBottom: 32 }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.25em", color: "rgba(255,255,255,0.5)", marginBottom: 14, textTransform: "uppercase" }}>The Problem</div>
                  <p style={{ fontFamily: SERIF, fontSize: "clamp(1rem,1.3vw,1.1rem)", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontStyle: "italic" }}>{c.problem}</p>
                </div>
                <div style={{ marginBottom: 32, borderLeft: `2px solid ${COLOR}`, background: "rgba(230,57,70,0.03)", padding: "24px 28px" }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.25em", color: COLOR, marginBottom: 14, textTransform: "uppercase" }}>The Method Applied</div>
                  <p style={{ fontFamily: SANS, fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>{c.method}</p>
                </div>
                <div style={{ marginBottom: 40 }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.25em", color: "rgba(255,255,255,0.5)", marginBottom: 14, textTransform: "uppercase" }}>The Transformation</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>
                    <p style={{ fontFamily: SANS, fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: 0 }}>{c.transformation}</p>
                    <div style={{ position: "relative", height: 200 }}>
                      <canvas id={c.chartId} role="img" aria-label={c.headline} />
                    </div>
                  </div>
                </div>
                <blockquote style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28, fontFamily: SERIF, fontSize: "clamp(1.05rem,1.5vw,1.25rem)", fontStyle: "italic", color: "rgba(255,255,255,0.9)", lineHeight: 1.55, margin: 0 }}>
                  &ldquo;{c.quote}&rdquo;
                  <footer style={{ marginTop: 16, fontFamily: SANS, fontSize: 12, fontStyle: "normal", color: "rgba(255,255,255,0.5)", letterSpacing: "0.02em" }}>
                    &mdash; {c.descriptor}
                  </footer>
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
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ fontFamily: SANS, fontSize: 12, color: COLOR, letterSpacing: "0.04em" }}>
                  {t.descriptor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 800, background: `radial-gradient(circle, ${COLOR}, transparent 70%)`, opacity: 0.06, filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start", marginBottom: 80 }} className="atlas-grid">
            <div>
              <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>Free Resource</div>
              <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 24 }}>
                30 Architectures.<br />
                <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>An Atlas.</span>
              </h2>
              <p style={{ fontFamily: SANS, fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 32 }}>
                Thirty composite portraits of the narrative situations founders find themselves in — and the architectural moves that resolved them. Not a portfolio. Not testimonials. A map.
              </p>
              <p style={{ fontFamily: SERIF, fontSize: "1rem", fontStyle: "italic", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: 40 }}>
                Open, free, readable in your browser. If you recognize yourself in one of them — you have already begun the work.
              </p>
              
              
                href="/30-architectures-atlas.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`,
                  color: "#fff", padding: "16px 36px", borderRadius: 100,
                  fontSize: 14, fontFamily: SANS, fontWeight: 700,
                  textDecoration: "none", letterSpacing: "0.06em",
                  boxShadow: `0 12px 40px ${GLOW}`,
                }}
              >
                Read the Atlas &#8594;
              </a>
              <div style={{ marginTop: 14, fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: SANS, letterSpacing: "0.04em" }}>
                128 pages &middot; PDF &middot; Free &middot; No sign-up
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{
                background: "linear-gradient(160deg, #1a0a0a, #0a0a0a)",
                border: `1px solid ${COLOR}33`,
                borderRadius: 12,
                padding: "48px 40px",
                boxShadow: `0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px ${COLOR}22`,
              }}>
                <div style={{ fontSize: 9, letterSpacing: "0.25em", color: COLOR, marginBottom: 24, fontFamily: SANS }}>STRAWBERRY PRODUCTION</div>
                <div style={{ width: 32, height: 1, background: `${COLOR}66`, marginBottom: 28 }} />
                <div style={{ fontFamily: SERIF, fontSize: 11, color: "rgba(255,255,255,0.4)", fontStyle: "italic", marginBottom: 12 }}>N&deg; 001</div>
                <div style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 700, color: "#fff", lineHeight: 0.95, marginBottom: 8 }}>30</div>
                <div style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 700, color: "#fff", lineHeight: 1, marginBottom: 20 }}>Architectures</div>
                <div style={{ width: 24, height: 1, background: `${COLOR}66`, marginBottom: 16 }} />
                <div style={{ fontFamily: SERIF, fontSize: 13, fontStyle: "italic", color: COLOR, marginBottom: 40 }}>An Atlas of Narrative Patterns</div>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
                  <div style={{ width: 36, height: 36, border: `1px solid ${COLOR}55`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: COLOR, fontSize: 16 }}>&#10022;</span>
                  </div>
                </div>
                <div style={{ fontFamily: SERIF, fontSize: 11, fontStyle: "italic", color: "rgba(255,255,255,0.4)", textAlign: "center" }}>Strawberry Production</div>
                <div style={{ fontSize: 9, letterSpacing: "0.2em", color: "rgba(255,255,255,0.25)", textAlign: "center", marginTop: 4, fontFamily: SANS }}>PARIS</div>
              </div>
              <div style={{ position: "absolute", bottom: -16, right: -16, background: COLOR, color: "#fff", padding: "8px 16px", borderRadius: 100, fontSize: 11, fontFamily: SANS, fontWeight: 700, letterSpacing: "0.06em" }}>
                128 pages
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 56 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: "rgba(255,255,255,0.4)", marginBottom: 32, textTransform: "uppercase", fontFamily: SANS }}>
              A sample of what&apos;s inside
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
              {ATLAS_CASES.map((c) => (
                <div key={c.n} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ fontFamily: SERIF, fontSize: 18, fontStyle: "italic", color: COLOR, fontWeight: 700, lineHeight: 1, flexShrink: 0, minWidth: 28 }}>
                    {c.n}.
                  </div>
                  <div style={{ fontFamily: SERIF, fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.5, fontStyle: "italic" }}>
                    {c.title}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, fontSize: 12, color: "rgba(255,255,255,0.25)", fontFamily: SANS, fontStyle: "italic" }}>
              + 24 more architectures across 5 categories.
            </div>
          </div>

        </div>
      </section>

      <section style={{ padding: "140px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.5, pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 24 }}>
            One commission per house.<br />Four houses per quarter.
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: 48, maxWidth: 600, margin: "0 auto 48px" }}>
            Each one becomes the next case we won&apos;t be allowed to publish.
          </p>
          <Link href="/brand-narrative-audit" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "20px 52px", borderRadius: 100, fontSize: 16, fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em", fontFamily: SANS, boxShadow: `0 20px 60px ${GLOW}` }}>
            Commission the Work &#8594;
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .atlas-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>

    </main>
  )
}
