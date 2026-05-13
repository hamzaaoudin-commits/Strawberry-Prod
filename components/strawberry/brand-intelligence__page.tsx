"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { AnimatedOrb } from "@/components/strawberry/animated-orb"
import { GlassCard } from "@/components/strawberry/glass-card"
import { useScrollReveal } from "@/hooks/use-strawberry"

const STRIPE_URL = "https://buy.stripe.com/aFadR2b2AfDeeYK1N6f7i02"
const ACCENT = "#e63946"

const PROBLEMS = [
  { title: "Narrative Fragmentation", desc: "Messaging that changes every week. A brand that feels scattered and unrecognizable." },
  { title: "The Authority Gap", desc: 'Being perceived as a "service provider" instead of a "category leader."' },
  { title: "Strategic Blindness", desc: "Not knowing your market numbers, your competitors' weaknesses, or your audience's deepest triggers." },
]

const SECTION_1 = [
  "The Core Essence: Mission, Vision, and the Philosophical Reason for your existence",
  'The Origin Story: Crafting your "Moment that Changed Everything"',
  "The Narrative Universe: Setting the emotional atmosphere and cultural context",
  "The Hero's Journey: Positioning your audience as the Hero and your brand as the Guide",
  "Psychological Identity: Archetypes, Personality, and surgical Tone of Voice",
  "Visual Narrative & Story Pillars: The 5 themes structuring your entire future legacy",
  "The Brand Manifesto: A powerful, emotional call to arms that summarizes your philosophy",
]

const SECTION_2 = [
  "Market Sizing (TAM/SAM/SOM): Top-down & Bottom-up analysis with 5-year growth projections",
  'Competitive Intelligence: Deep-dive into Top 10 competitors, Pricing models, and "White Space" opportunities',
  "Advanced Personas: 4 psychological profiles including fears, objections, and buying triggers",
  "Industry Trends & SWOT: A Harvard-level analysis of macro forces and the 5 Forces of Porter",
  "Pricing & GTM Strategy: A 90-day Go-To-Market playbook with localized pricing recommendations",
  "Customer Journey Mapping: From Awareness to Advocacy, identifying every point of friction",
]

const TERRITORIES = [
  { num: "01", title: "Authority Territory", subtitle: "Why you should be taken seriously", desc: "Core beliefs, unique perspective, intellectual positioning.", goal: "Position you as a reference, not a participant." },
  { num: "02", title: "Contrarian Territory", subtitle: "What you stand against", desc: 'Market myths you reject, common mistakes, the "villain" your brand fights.', goal: "Create tension, memorability, and differentiation." },
  { num: "03", title: "Transformation Territory", subtitle: "What changes in your client's life", desc: "Before/After identity shift, internal & external transformation.", goal: "Make your value feel real and tangible." },
  { num: "04", title: "Intimacy Territory", subtitle: "Why people connect with you", desc: "Personal story layers, vulnerability, behind-the-scenes philosophy.", goal: "Build emotional attachment and loyalty." },
  { num: "05", title: "Proof Territory", subtitle: "Why it works", desc: "Case study angles, demonstrations of results, credibility signals.", goal: "Remove doubt and reinforce trust." },
]

const CASES = [
  {
    title: "Creator Repositioning",
    label: "Personal Brand",
    before: "Disjointed content, no clear niche, disengaged audience.",
    after: 'Repositioned as an "educational authority figure" with clear enemy and strong vision.',
    results: ["×3 engagement rate", "×2 inbound client requests", "First premium offer sold at 2.5k€"],
  },
  {
    title: "Agency Founder Positioning",
    label: "Agency",
    before: 'Perceived as a "cheap freelancer."',
    after: 'Transformed into a "Narrative Systems Studio" with premium positioning.',
    results: ["From 500€ to 3k€ per client", '"Executor" → "Strategist" shift', "Inbound leads ×4"],
  },
  {
    title: "Artist / Music Project",
    label: "Worldbuilding",
    before: "Independent artist struggling to build identity.",
    after: "Complete narrative universe: archetype, mythology, emotional positioning.",
    results: ["+60% content retention", "First 2 sold-out releases", 'Fanbase identifies with the "world"'],
  },
]

const BONUSES = [
  { title: "Strategy Executive Synthesis", desc: "The 5 highest-impact actions for the next 90 days, McKinsey-style." },
  { title: "The Decision Matrix", desc: "A simple framework to guide your next 10 strategic decisions." },
  { title: "Immediate Action Plan", desc: '"Quick Wins" to generate traction in the first 14 days.' },
]

export default function BrandIntelligencePage() {
  const [ref1, vis1] = useScrollReveal()
  const [ref2, vis2] = useScrollReveal()
  const [ref3, vis3] = useScrollReveal()
  const [ref4, vis4] = useScrollReveal()
  const [ref5, vis5] = useScrollReveal()
  const [ref6, vis6] = useScrollReveal()

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <NavBar />

      {/* Hero */}
      <section style={{ minHeight: "85vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 100 }}>
        <AnimatedOrb color={`radial-gradient(circle,${ACCENT},transparent)`} size={700} x="-10%" y="20%" opacity={0.15} />
        <AnimatedOrb color={`radial-gradient(circle,${ACCENT},transparent)`} size={500} x="80%" y="70%" opacity={0.1} />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(1.5rem,4vw,4rem)", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: `${ACCENT}1f`, border: `1px solid ${ACCENT}66`,
            borderRadius: 100, padding: "8px 20px", marginBottom: 32,
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: ACCENT, boxShadow: `0 0 8px ${ACCENT}` }} />
            <span style={{ color: ACCENT, fontSize: 12, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 700 }}>OFFER 01 · FOUNDATION</span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(2.5rem,7vw,5.5rem)",
            fontWeight: 700, lineHeight: 1.05, color: "#fff",
            marginBottom: 32, letterSpacing: "-0.03em",
          }}>
            The Brand Narrative{" "}
            <span style={{ background: `linear-gradient(135deg,${ACCENT},#ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Audit & Strategy
            </span>
            <br />Masterclass
          </h1>

          <p style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: "clamp(1.1rem,2vw,1.35rem)",
            color: "rgba(255,255,255,0.6)", lineHeight: 1.7,
            maxWidth: 750, marginBottom: 48,
          }}>
            I audit your entire brand and deliver a clear, actionable strategy so you know exactly what to say, who to target, and how to grow.
          </p>

          <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 40, flexWrap: "wrap" }}>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(3.5rem,8vw,5rem)", color: ACCENT, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>
              2,500€
            </div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 14, letterSpacing: "0.1em" }}>
              · 45+ PAGE INTELLIGENCE REPORT
            </div>
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer" style={{
              background: `linear-gradient(135deg,${ACCENT},#ff1a1a)`, color: "#fff",
              padding: "20px 56px", borderRadius: 100,
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 700,
              textDecoration: "none", letterSpacing: "0.06em",
              boxShadow: `0 12px 48px ${ACCENT}66`,
            }}>
              Get Started
            </a>
            <a href="#what-you-get" style={{
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.8)", padding: "20px 44px", borderRadius: 100,
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 600,
              textDecoration: "none", letterSpacing: "0.06em",
            }}>
              See What's Inside
            </a>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section ref={ref1} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d", opacity: vis1 ? 1 : 0, transform: vis1 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, color: ACCENT, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 20 }}>THE PROBLEM</div>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 700, marginBottom: 24, letterSpacing: "-0.02em" }}>
              Most brands scale on a hollow foundation
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.55)", fontSize: 17, maxWidth: 720, margin: "0 auto", lineHeight: 1.7 }}>
              They have a product, but no soul. They have content, but no direction. They suffer from three silent killers:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROBLEMS.map((p, i) => (
              <GlassCard key={i} style={{ padding: "36px 32px" }}>
                <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: ACCENT, fontSize: 36, fontWeight: 700, marginBottom: 16, opacity: 0.4 }}>{String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </GlassCard>
            ))}
          </div>
          <div style={{ marginTop: 56, textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(1.3rem,2.5vw,1.7rem)", color: "rgba(255,255,255,0.9)", fontStyle: "italic", lineHeight: 1.5, maxWidth: 800, margin: "0 auto" }}>
              I solve this. I provide a Full-Scale Brand Intelligence Department that defines who you are, where you win, and how you dominate.
            </p>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section id="what-you-get" ref={ref2} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", opacity: vis2 ? 1 : 0, transform: vis2 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, color: ACCENT, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 20 }}>WHAT YOU GET</div>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 700, marginBottom: 16, letterSpacing: "-0.02em" }}>
              A 45+ page strategic intelligence report
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 17, maxWidth: 720, margin: "0 auto", lineHeight: 1.7 }}>
              The fusion of consulting-firm analysis (McKinsey/Bain), financial reporting (Goldman Sachs), and high-end creative direction.
            </p>
          </div>

          {/* Section 1 - The Bible */}
          <div style={{ marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: `${ACCENT}26`, border: `1px solid ${ACCENT}55`, display: "flex", alignItems: "center", justifyContent: "center", color: ACCENT, fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 18, fontWeight: 700 }}>01</div>
              <div>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 12, letterSpacing: "0.14em", fontWeight: 600 }}>THE SOUL</div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 700, margin: 0 }}>The Brand Narrative Bible</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {SECTION_1.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "16px 20px", borderRadius: 14, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: `${ACCENT}22`, border: `1px solid ${ACCENT}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT }} />
                  </div>
                  <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 - The Brain */}
          <div style={{ marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: `${ACCENT}26`, border: `1px solid ${ACCENT}55`, display: "flex", alignItems: "center", justifyContent: "center", color: ACCENT, fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 18, fontWeight: 700 }}>02</div>
              <div>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 12, letterSpacing: "0.14em", fontWeight: 600 }}>THE BRAIN</div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 700, margin: 0 }}>The Strategic Audit & Market Intelligence</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {SECTION_2.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "16px 20px", borderRadius: 14, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: `${ACCENT}22`, border: `1px solid ${ACCENT}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT }} />
                  </div>
                  <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 - Territories */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: `${ACCENT}26`, border: `1px solid ${ACCENT}55`, display: "flex", alignItems: "center", justifyContent: "center", color: ACCENT, fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 18, fontWeight: 700 }}>03</div>
              <div>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 12, letterSpacing: "0.14em", fontWeight: 600 }}>STRATEGIC LAYER</div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 700, margin: 0 }}>The Content Territories Framework</h3>
              </div>
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.7, marginBottom: 32, marginLeft: 64 }}>
              Your brand doesn't &quot;post content.&quot; It occupies narrative territory in people&apos;s minds. These are the 5 strategic territories your brand will dominate.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {TERRITORIES.map((t) => (
                <div key={t.num} style={{ padding: "28px 32px", borderRadius: 18, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
                    <span style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: `${ACCENT}88`, fontSize: 22, fontWeight: 700 }}>{t.num}</span>
                    <h4 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 19, fontWeight: 700, margin: 0 }}>{t.title}</h4>
                  </div>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.45)", fontSize: 13, fontStyle: "italic", marginBottom: 12 }}>&quot;{t.subtitle}&quot;</p>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, marginBottom: 14 }}>{t.desc}</p>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: ACCENT, fontSize: 13, fontWeight: 600, margin: 0 }}>🎯 {t.goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section ref={ref3} style={{ padding: "100px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d", opacity: vis3 ? 1 : 0, transform: vis3 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 11, color: ACCENT, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 20 }}>EXECUTIVE BONUSES · INCLUDED</div>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "#fff", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Three bonuses to accelerate execution
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BONUSES.map((b, i) => (
              <div key={i} style={{ padding: "32px 28px", borderRadius: 20, background: "rgba(255,255,255,0.03)", border: `1px solid ${ACCENT}33` }}>
                <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 100, marginBottom: 16, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.1em" }}>BONUS {String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 19, fontWeight: 700, marginBottom: 12 }}>{b.title}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section ref={ref4} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", opacity: vis4 ? 1 : 0, transform: vis4 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, color: ACCENT, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 20 }}>PROOF</div>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Case studies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASES.map((c, i) => (
              <GlassCard key={i} style={{ padding: "32px 28px" }}>
                <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 100, marginBottom: 16, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.1em" }}>{c.label.toUpperCase()}</div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 20, lineHeight: 1.2 }}>{c.title}</h3>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.35)", fontSize: 11, letterSpacing: "0.12em", marginBottom: 6 }}>BEFORE</div>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{c.before}</p>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: ACCENT, fontSize: 11, letterSpacing: "0.12em", marginBottom: 6 }}>AFTER</div>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.7)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{c.after}</p>
                </div>
                <div style={{ paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: ACCENT, fontSize: 11, letterSpacing: "0.12em", marginBottom: 10, fontWeight: 600 }}>📈 RESULTS</div>
                  {c.results.map((r, j) => (
                    <div key={j} style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.75)", fontSize: 13, marginBottom: 6, paddingLeft: 16, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: ACCENT }}>→</span> {r}
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why this price + risk-free */}
      <section ref={ref5} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d", opacity: vis5 ? 1 : 0, transform: vis5 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div style={{ padding: "44px 40px", borderRadius: 24, background: `linear-gradient(135deg,${ACCENT}1a,rgba(255,255,255,0.03))`, border: `1px solid ${ACCENT}44` }}>
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: ACCENT, fontSize: 11, letterSpacing: "0.14em", fontWeight: 700, marginBottom: 16 }}>WHY 2,500€</div>
              <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 24, fontWeight: 700, marginBottom: 20, lineHeight: 1.3 }}>
                Hiring this team separately costs 15,000€+
              </h3>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                A Strategy Consultant, a Market Analyst, and a Brand Designer combined. I remove the strategic fog, give you the &quot;Owner&apos;s Manual&quot; to your own brand, and turn your intuition into a repeatable, scalable system.
              </p>
            </div>
            <div style={{ padding: "44px 40px", borderRadius: 24, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: ACCENT, fontSize: 11, letterSpacing: "0.14em", fontWeight: 700, marginBottom: 16 }}>RISK-FREE COLLABORATION</div>
              <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 24, fontWeight: 700, marginBottom: 20, lineHeight: 1.3 }}>
                Total strategic alignment, guaranteed
              </h3>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                If this Audit doesn&apos;t provide the most profound clarity you&apos;ve ever had on your business, I will continue the analysis until your path is undeniable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ref6} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", opacity: vis6 ? 1 : 0, transform: vis6 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{
            borderRadius: 36, padding: "80px clamp(2rem,6vw,80px)",
            background: `linear-gradient(135deg,${ACCENT}26,rgba(255,26,26,0.1))`,
            border: `2px solid ${ACCENT}55`,
            boxShadow: `0 0 120px ${ACCENT}26`,
            textAlign: "center",
          }}>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,5vw,3.5rem)", color: "#fff", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 20 }}>
              Stop building on fog.
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.55)", fontSize: 18, maxWidth: 540, margin: "0 auto 40px", lineHeight: 1.7 }}>
              Audit your future. Build on a foundation strong enough to carry a legacy.
            </p>
            <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-block",
              background: `linear-gradient(135deg,${ACCENT},#ff1a1a)`,
              color: "#fff", padding: "20px 56px", borderRadius: 100,
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, fontWeight: 700,
              textDecoration: "none", letterSpacing: "0.04em",
              boxShadow: `0 12px 48px ${ACCENT}66`,
            }}>
              Get The Brand Intelligence System — 2,500€
            </a>
          </div>
        </div>
      </section>

      {/* Back */}
      <section style={{ padding: "60px clamp(1.5rem,4vw,4rem)", textAlign: "center" }}>
        <Link href="/#offers" style={{
          color: "rgba(255,255,255,0.5)", fontSize: 15,
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", textDecoration: "none",
          borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: 2,
        }}>
          ← Back to all offers
        </Link>
      </section>

      <Footer />
    </main>
  )
}
