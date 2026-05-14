"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { AnimatedOrb } from "@/components/strawberry/animated-orb"
import { GlassCard } from "@/components/strawberry/glass-card"
import { useScrollReveal } from "@/hooks/use-strawberry"

const STRIPE_URL = "https://buy.stripe.com/bJe8wIeeMfDe8Am4Zif7i04"
const ACCENT = "#dc2626"

const PROBLEMS = [
  { title: "Traffic without conversion", desc: "People visit your site, scroll, and disappear. Attention wasted." },
  { title: "Offers without desire", desc: "Your product exists — but nothing in your message makes people want it." },
  { title: "Funnels without logic", desc: "Disconnected pages, mismatched messaging, money leaking at every step." },
]

const PILLARS = [
  {
    num: "01",
    title: "The Offer Engine",
    subtitle: "Where your money is created",
    insight: 'Most people try to "sell better" instead of fixing what they\'re selling. I rebuild your offer so it becomes naturally desirable.',
    items: [
      "Offer Positioning — why it wins instantly",
      "Value Stacking — making it feel 10× bigger than the price",
      "Pricing Architecture — anchoring, tiers, psychological pricing",
      "Packaging Strategy — Basic / Standard / Premium logic",
    ],
    goal: "Turn your offer into an obvious yes",
  },
  {
    num: "02",
    title: "The Conversion Assets",
    subtitle: "Where decisions happen",
    insight: "This is where interest becomes action. I design high-converting assets that remove doubt and guide the buyer.",
    items: [
      "High-Converting Sales Page (structure + copy)",
      "Gig / Profile Optimization (if freelance)",
      "CTA Engineering — when, where, how to trigger action",
      "FAQ Persuasion Layer — eliminate objections before they appear",
    ],
    goal: "Remove friction → increase conversion",
  },
  {
    num: "03",
    title: "The Lead Capture System",
    subtitle: "Where strangers become prospects",
    insight: "Most brands lose 90% of their traffic forever. I build the entry point that captures attention and turns it into ownership.",
    items: [
      "Lead Magnet Concept + Writing",
      "Hook & Promise Engineering",
      "Value Design (quick win + authority)",
      "Opt-in Strategy (placement, CTA logic)",
    ],
    goal: "Turn traffic into a qualified audience",
  },
  {
    num: "04",
    title: "The Nurture & Conversion Flow",
    subtitle: "Where trust becomes desire",
    insight: "People don't buy instantly. They buy when it feels safe and obvious. I build the sequence that moves them there.",
    items: [
      "Welcome Email Sequence (3–5 emails)",
      "Trust-Building Narrative",
      "Authority Reinforcement",
      "Conversion Triggers (timing + psychological switches)",
    ],
    goal: "Turn attention into intent",
  },
  {
    num: "05",
    title: "The Attention → Money Bridge",
    subtitle: "Where your funnel becomes logical",
    insight: "Most funnels are random. I design the flow that connects everything into one coherent system.",
    items: [
      "Offer ↔ Message Alignment",
      "Entry Point Strategy (ads / content / organic)",
      "Conversion Flow Mapping",
      "Funnel Logic (from first click to purchase)",
    ],
    goal: "Make your business feel like a system, not a gamble",
  },
]

const METHOD = [
  { title: "Clarity First", desc: "If it's not clear, it doesn't convert." },
  { title: "Desire Engineering", desc: "People buy what they feel, not what they understand." },
  { title: "Friction Removal", desc: "Every doubt = lost money." },
  { title: "Value Amplification", desc: "Perception > reality." },
]

const OUTCOMES = [
  "Higher conversion rates",
  "More revenue from the same traffic",
  "Stronger perceived value",
  "Clearer offers and positioning",
  "Less drop-off across your funnel",
]

const CASES = [
  {
    title: "Creator Growth System",
    label: "YouTuber",
    before: "Posting inconsistently, low retention, no path to revenue.",
    after: "5 content territories defined, cinematic structure, hook + retention engineering applied.",
    results: ["Watch time +47%", "Subscriber conversion ×2", "First viral video (+120k views)"],
  },
  {
    title: "Brand Storytelling Upgrade",
    label: "Startup",
    before: "Startup struggling to communicate product value.",
    after: "Full narrative repositioning. 20 short-form scripts. 4 newsletters + storytelling funnel.",
    results: ["Demo bookings +180%", "Conversion rate +32%", "Stronger investor interest"],
  },
  {
    title: "Personal Brand Authority",
    label: "Founder",
    before: "Founder invisible on social media. Zero inbound.",
    after: "Authority + contrarian + proof territories activated. 30-day content ecosystem.",
    results: ["Inbound collaborations ×5", "Audience trust significantly increased", "First high-ticket consulting offers closed"],
  },
]

export default function RevenueArchitecturePage() {
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
            <span style={{ color: ACCENT, fontSize: 12, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 700 }}>OFFER 03 · REVENUE</span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(2.5rem,7vw,5.5rem)",
            fontWeight: 700, lineHeight: 1.05, color: "#fff",
            marginBottom: 32, letterSpacing: "-0.03em",
          }}>
            The Revenue{" "}
            <span style={{ background: `linear-gradient(135deg,${ACCENT},#e63946)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Architecture System
            </span>
          </h1>

          <p style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: "clamp(1.1rem,2vw,1.35rem)",
            color: "rgba(255,255,255,0.6)", lineHeight: 1.7,
            maxWidth: 750, marginBottom: 48,
          }}>
            I design how your business makes money. A complete Perception → Decision → Purchase ecosystem that turns attention into revenue — by design, not by chance.
          </p>

          <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 40, flexWrap: "wrap" }}>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(3.5rem,8vw,5rem)", color: ACCENT, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>
              2,500€
            </div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 14, letterSpacing: "0.1em" }}>
              · FULL CONVERSION INFRASTRUCTURE
            </div>
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer" style={{
              background: `linear-gradient(135deg,${ACCENT},#e63946)`, color: "#fff",
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
              You don&apos;t have a revenue problem.
              <br />You have a structure problem.
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.55)", fontSize: 17, maxWidth: 720, margin: "0 auto", lineHeight: 1.7 }}>
              Most brands don&apos;t have a revenue system. They have fragments. Everything exists — but nothing works together.
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
              This is not copywriting. This is Revenue Architecture.
            </p>
          </div>
        </div>
      </section>

      {/* The 5 Pillars */}
      <section id="what-you-get" ref={ref2} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", opacity: vis2 ? 1 : 0, transform: vis2 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, color: ACCENT, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 20 }}>THE SYSTEM</div>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 700, marginBottom: 16, letterSpacing: "-0.02em" }}>
              Five pillars. One unified machine.
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 17, maxWidth: 700, margin: "0 auto", lineHeight: 1.7 }}>
              A complete, conversion-driven infrastructure designed to monetize your attention.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {PILLARS.map((p) => (
              <div key={p.num} style={{ padding: "44px 40px", borderRadius: 24, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
                  <div style={{ minWidth: 80 }}>
                    <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 56, fontWeight: 700, color: `${ACCENT}66`, lineHeight: 1, letterSpacing: "-0.03em" }}>{p.num}</div>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: "clamp(1.4rem,2.5vw,1.8rem)", fontWeight: 700, marginBottom: 6, lineHeight: 1.2 }}>{p.title}</h3>
                    <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: ACCENT, fontSize: 14, fontStyle: "italic", marginBottom: 20 }}>&quot;{p.subtitle}&quot;</p>
                    <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>{p.insight}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {p.items.map((item, j) => (
                        <div key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                          <div style={{ width: 16, height: 16, borderRadius: "50%", background: `${ACCENT}22`, border: `1px solid ${ACCENT}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 3 }}>
                            <div style={{ width: 5, height: 5, borderRadius: "50%", background: ACCENT }} />
                          </div>
                          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.6 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ padding: "12px 18px", borderRadius: 10, background: `${ACCENT}11`, border: `1px solid ${ACCENT}33`, display: "inline-block" }}>
                      <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: ACCENT, fontSize: 13, fontWeight: 600 }}>🎯 {p.goal}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Strawberry Method */}
      <section ref={ref3} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d", opacity: vis3 ? 1 : 0, transform: vis3 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, color: ACCENT, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 20 }}>🍓 THE STRAWBERRY METHOD</div>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "#fff", fontWeight: 700, marginBottom: 20, letterSpacing: "-0.02em" }}>
              I don&apos;t &quot;optimize pages.&quot;
              <br />I design decision environments.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {METHOD.map((m, i) => (
              <div key={i} style={{ padding: "28px 24px", borderRadius: 18, background: "rgba(255,255,255,0.03)", border: `1px solid ${ACCENT}33` }}>
                <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: ACCENT, fontSize: 28, fontWeight: 700, marginBottom: 12, opacity: 0.5 }}>{String(i + 1).padStart(2, "0")}</div>
                <h4 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "#fff", fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{m.title}</h4>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section ref={ref4} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", opacity: vis4 ? 1 : 0, transform: vis4 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, color: ACCENT, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 20 }}>EXPECTED OUTCOMES</div>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 700, marginBottom: 48, letterSpacing: "-0.02em" }}>
            From hoping for sales to engineering them
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 600, margin: "0 auto" }}>
            {OUTCOMES.map((o, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "center", padding: "16px 24px", borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", textAlign: "left" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${ACCENT}22`, border: `1px solid ${ACCENT}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: ACCENT, fontSize: 14 }}>✓</div>
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.5 }}>{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section ref={ref5} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d", opacity: vis5 ? 1 : 0, transform: vis5 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
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

      {/* Why this price + risk-free + final CTA */}
      <section ref={ref6} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", opacity: vis6 ? 1 : 0, transform: vis6 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div style={{ padding: "44px 40px", borderRadius: 24, background: `linear-gradient(135deg,${ACCENT}1a,rgba(255,255,255,0.03))`, border: `1px solid ${ACCENT}44` }}>
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: ACCENT, fontSize: 11, letterSpacing: "0.14em", fontWeight: 700, marginBottom: 16 }}>WHY 2,500€</div>
              <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 24, fontWeight: 700, marginBottom: 20, lineHeight: 1.3 }}>
                Hiring separately costs 5,000€–15,000€+
              </h3>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                A copywriter, a funnel builder, and a strategist — plus weeks of friction coordinating them. You&apos;re not paying for pages. You&apos;re paying for how your business makes money.
              </p>
            </div>
            <div style={{ padding: "44px 40px", borderRadius: 24, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: ACCENT, fontSize: 11, letterSpacing: "0.14em", fontWeight: 700, marginBottom: 16 }}>RISK-FREE COLLABORATION</div>
              <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 24, fontWeight: 700, marginBottom: 20, lineHeight: 1.3 }}>
                Refined until it converts
              </h3>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                If your system doesn&apos;t feel clearer, sharper, more powerful — I continue optimizing until it does.
              </p>
            </div>
          </div>

          <div style={{
            borderRadius: 36, padding: "80px clamp(2rem,6vw,80px)",
            background: `linear-gradient(135deg,${ACCENT}26,rgba(230,57,70,0.1))`,
            border: `2px solid ${ACCENT}55`,
            boxShadow: `0 0 120px ${ACCENT}26`,
            textAlign: "center",
          }}>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 13, letterSpacing: "0.14em", marginBottom: 16, fontWeight: 600 }}>RIGHT NOW</p>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,5vw,3rem)", color: "#fff", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 20, lineHeight: 1.2 }}>
              Your business depends on chance.
              <br />After this, it runs on structure.
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: 17, maxWidth: 600, margin: "0 auto 40px", lineHeight: 1.7 }}>
              For people who want control over their revenue, a system that converts consistently, and a business that scales without chaos.
            </p>
            <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-block",
              background: `linear-gradient(135deg,${ACCENT},#e63946)`,
              color: "#fff", padding: "20px 56px", borderRadius: 100,
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, fontWeight: 700,
              textDecoration: "none", letterSpacing: "0.04em",
              boxShadow: `0 12px 48px ${ACCENT}66`,
            }}>
              Build My Revenue System — 2,500€
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
