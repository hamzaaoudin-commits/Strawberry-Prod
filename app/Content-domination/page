"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { AnimatedOrb } from "@/components/strawberry/animated-orb"
import { GlassCard } from "@/components/strawberry/glass-card"
import { useScrollReveal } from "@/hooks/use-strawberry"

const STRIPE_URL = "https://buy.stripe.com/00wcMY4EcfDe3g28buf7i03"
const ACCENT = "#ff1a1a"

const PROBLEMS = [
  { title: "The Blank Page", desc: "Not knowing what to say or how to start. Hours wasted staring at a blinking cursor." },
  { title: "Inconsistent Messaging", desc: "A brand that feels scattered, unprofessional, and impossible to remember." },
  { title: "The Production Trap", desc: "Spending more time planning content than actually growing your business." },
]

const PHASE_1 = [
  { title: "DNA Extraction", desc: "An intensive deep-dive session to capture your unfiltered vision, unique anecdotes, and core expertise." },
  { title: "Narrative Resonance Audit", desc: "A surgical analysis of your past content — what captivated your audience, and what put them to sleep." },
  { title: "Core Message Alignment", desc: 'Defining the 3 priority "angles of attack" for the upcoming cycle, synchronized with your revenue goals.' },
  { title: "The Executive Narrative Bible", desc: 'A condensed, operational playbook of your tone of voice, semantic "no-go" zones, and positioning.' },
  { title: "Narrative Feedback Loop Setup", desc: "Establishing the tracking system to refine scripts in real-time based on performance." },
]

const PHASE_2 = [
  "3–5 Premium Video Scripts (YouTube, Ads, Brand Films) — hook structures, emotional beats, pacing",
  "20 Short-Form Scripts (TikTok, Reels, Shorts) using viral narrative frameworks",
  "4 Narrative Newsletters — deeply engaging emails designed to build trust and authority",
  "1 Premium Lead Magnet — high-value written asset structured to convert traffic into qualified leads",
  "The Strategic Content Calendar — publishing rhythm engineered for compounding authority",
  "The Narrative Feedback Loop — monthly Resonance Audit refining the following month's scripts",
]

const BONUSES = [
  {
    title: "The 360° Distribution Engine",
    desc: "For every long-form video, you get an omnichannel domination kit: Master Script (Hook & Retention), teasing Story for your networks, ready-to-publish Authority Posts for LinkedIn & X, plus SEO Descriptions (YouTube) and optimized Captions (Instagram).",
  },
  {
    title: "The Short-Form Viral Blitz",
    desc: 'For your 20 short-form scripts, each text is delivered with its "High-Engagement" Description and strategic Call to Action. Plus the 3-Story companion sequence to turn views into intentional clicks. Film once, dominate 5 platforms.',
  },
]

const OVER_DELIVERY = [
  "Production Readiness Checklist — the ultimate guide from script to screen without technical stress",
  '"Plug & Play" Production Toolkit — equipment list (Budget / Medium / Pro) with direct links and camera/light settings',
]

const OUTCOMES = [
  "Consistent content output without creative stress",
  "Stronger personal brand positioning",
  "Increased visibility across platforms",
  "More inbound opportunities and leads",
]

const CASES = [
  {
    title: "Creator Growth System",
    label: "YouTuber",
    before: "Posting inconsistently, low retention, scattered topics.",
    after: "5 content territories defined. Cinematic script structure. Hook + retention engineering applied.",
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
    before: "Founder invisible on social media. No clear identity.",
    after: "Authority + contrarian + proof territories activated. 30-day content ecosystem.",
    results: ["Inbound collaborations ×5", "Audience trust significantly increased", "First high-ticket consulting offers closed"],
  },
]

export default function ContentDominationPage() {
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
            <span style={{ color: ACCENT, fontSize: 12, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 700 }}>OFFER 02 · AUTHORITY</span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(2.5rem,7vw,5.5rem)",
            fontWeight: 700, lineHeight: 1.05, color: "#fff",
            marginBottom: 32, letterSpacing: "-0.03em",
          }}>
            The Executive{" "}
            <span style={{ background: `linear-gradient(135deg,${ACCENT},#e63946)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Narrative Suite
            </span>
          </h1>

          <p style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: "clamp(1.1rem,2vw,1.35rem)",
            color: "rgba(255,255,255,0.6)", lineHeight: 1.7,
            maxWidth: 750, marginBottom: 48,
          }}>
            I build your entire content system so you never have to think about what to post again. A done-for-you content ecosystem that turns attention into authority.
          </p>

          <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 40, flexWrap: "wrap" }}>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(3.5rem,8vw,5rem)", color: ACCENT, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>
              5,000€
            </div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 14, letterSpacing: "0.1em" }}>
              · 90-DAY CONTENT ENGINE
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
              40+ hours lost every week to creative friction
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.55)", fontSize: 17, maxWidth: 720, margin: "0 auto", lineHeight: 1.7 }}>
              Most founders, creators, and personal brands struggle with three silent killers of momentum:
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
              I solve this. I provide a &quot;Personal Narrative Department&quot; that handles the thinking, so you can focus on executing.
            </p>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section id="what-you-get" ref={ref2} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", opacity: vis2 ? 1 : 0, transform: vis2 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, color: ACCENT, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 20 }}>THE COMPLETE ECOSYSTEM</div>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 700, marginBottom: 16, letterSpacing: "-0.02em" }}>
              Two phases. One unstoppable system.
            </h2>
          </div>

          {/* Phase 1 */}
          <div style={{ marginBottom: 72 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: `${ACCENT}26`, border: `1px solid ${ACCENT}55`, display: "flex", alignItems: "center", justifyContent: "center", color: ACCENT, fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 18, fontWeight: 700 }}>01</div>
              <div>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 12, letterSpacing: "0.14em", fontWeight: 600 }}>PHASE 01</div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 700, margin: 0 }}>Strategic Immersion & Alignment</h3>
              </div>
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.7, marginBottom: 32, marginLeft: 64 }}>
              Before a single word is written, I dive deep into your brand&apos;s DNA to ensure every piece of content rings true and hits hard.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PHASE_1.map((p, i) => (
                <div key={i} style={{ padding: "24px 28px", borderRadius: 16, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <h4 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{p.title}</h4>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Phase 2 */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: `${ACCENT}26`, border: `1px solid ${ACCENT}55`, display: "flex", alignItems: "center", justifyContent: "center", color: ACCENT, fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 18, fontWeight: 700 }}>02</div>
              <div>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 12, letterSpacing: "0.14em", fontWeight: 600 }}>PHASE 02</div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 700, margin: 0 }}>The Content Engine</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {PHASE_2.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "16px 20px", borderRadius: 14, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: `${ACCENT}22`, border: `1px solid ${ACCENT}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT }} />
                  </div>
                  <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section ref={ref3} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d", opacity: vis3 ? 1 : 0, transform: vis3 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, color: ACCENT, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 20 }}>EXECUTIVE BONUSES · INCLUDED</div>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "#fff", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Film once. Dominate everywhere.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {BONUSES.map((b, i) => (
              <div key={i} style={{ padding: "40px 36px", borderRadius: 24, background: "rgba(255,255,255,0.03)", border: `1px solid ${ACCENT}33` }}>
                <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 100, marginBottom: 16, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.1em" }}>BONUS {String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>{b.title}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.8, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ padding: "32px 36px", borderRadius: 20, background: "rgba(255,255,255,0.02)", border: "1px dashed rgba(255,255,255,0.12)" }}>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: ACCENT, fontSize: 11, letterSpacing: "0.14em", fontWeight: 700, marginBottom: 16 }}>+ OVER-DELIVERY</div>
            {OVER_DELIVERY.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 10 }}>
                <span style={{ color: ACCENT, fontSize: 14 }}>→</span>
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes + Upgrade */}
      <section ref={ref4} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", opacity: vis4 ? 1 : 0, transform: vis4 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div style={{ fontSize: 11, color: ACCENT, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 20 }}>EXPECTED OUTCOMES</div>
              <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 28, fontWeight: 700, marginBottom: 32, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
                What changes after 90 days
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {OUTCOMES.map((o, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: `${ACCENT}22`, border: `1px solid ${ACCENT}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2, color: ACCENT, fontSize: 12 }}>✓</div>
                    <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.7)", fontSize: 15, lineHeight: 1.6 }}>{o}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: "44px 40px", borderRadius: 24, background: `linear-gradient(135deg,${ACCENT}1a,rgba(255,255,255,0.03))`, border: `1px solid ${ACCENT}44` }}>
              <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 100, marginBottom: 16, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.1em" }}>OPTIONAL UPGRADE · +500€</div>
              <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 24, fontWeight: 700, marginBottom: 20, lineHeight: 1.3 }}>
                Brand Narrative Master Bible
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["Expanded brand mythology", "Deep audience psychology analysis", "Competitor narrative breakdown", "Long-term storytelling roadmap", "Advanced messaging frameworks", "30+ strategic narrative angles"].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: ACCENT, fontSize: 13 }}>→</span>
                    <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
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
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: ACCENT, fontSize: 11, letterSpacing: "0.14em", fontWeight: 700, marginBottom: 16 }}>WHY 5,000€</div>
              <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 24, fontWeight: 700, marginBottom: 20, lineHeight: 1.3 }}>
                Hiring this team separately costs 10,000€+
              </h3>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                A strategist, a copywriter, and a scriptwriter — plus hours of exhausting briefings. You&apos;re not paying for content. You&apos;re paying for clarity, control, and authority.
              </p>
            </div>
            <div style={{ padding: "44px 40px", borderRadius: 24, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: ACCENT, fontSize: 11, letterSpacing: "0.14em", fontWeight: 700, marginBottom: 16 }}>RISK-FREE COLLABORATION</div>
              <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 24, fontWeight: 700, marginBottom: 20, lineHeight: 1.3 }}>
                Refined until it resonates
              </h3>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                If the scripts and strategy delivered don&apos;t perfectly reflect the quality and authority your brand deserves, I&apos;ll keep refining until you&apos;re 100% satisfied.
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
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 13, letterSpacing: "0.14em", marginBottom: 16, fontWeight: 600 }}>THE REAL COST ISN&apos;T 5,000€</p>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,5vw,3rem)", color: "#fff", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 20, lineHeight: 1.2 }}>
              It&apos;s staying invisible.
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: 17, maxWidth: 600, margin: "0 auto 40px", lineHeight: 1.7 }}>
              Sounding unclear, knowing you have potential — but not expressing it. Every week you delay, you lose momentum, authority, and opportunities.
            </p>
            <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-block",
              background: `linear-gradient(135deg,${ACCENT},#e63946)`,
              color: "#fff", padding: "20px 56px", borderRadius: 100,
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, fontWeight: 700,
              textDecoration: "none", letterSpacing: "0.04em",
              boxShadow: `0 12px 48px ${ACCENT}66`,
            }}>
              Get The Narrative Suite — 5,000€
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
