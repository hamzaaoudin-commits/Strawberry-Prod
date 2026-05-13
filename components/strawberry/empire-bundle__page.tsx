"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { AnimatedOrb } from "@/components/strawberry/animated-orb"
import { GlassCard } from "@/components/strawberry/glass-card"
import { useScrollReveal } from "@/hooks/use-strawberry"

const STRIPE_URL = "https://buy.stripe.com/7sYfZaeeMbmYbMy77qf7i05"

const ENGINES = [
  {
    color: "#e63946",
    num: "01",
    label: "Identity Engine",
    subtitle: "Who you are",
    items: [
      "Full Brand DNA",
      "Archetype + mythology",
      "Narrative universe design",
      "Positioning against competitors",
      "Psychological audience mapping",
    ],
    outcome: "You become unmistakable",
  },
  {
    color: "#ff1a1a",
    num: "02",
    label: "Narrative Engine",
    subtitle: "How you are perceived",
    items: [
      "Cinematic content system (scripts, hooks, structure)",
      "90-day content universe",
      "Authority + contrarian + intimacy mapping",
      "Full storytelling ecosystem across platforms",
    ],
    outcome: "You become memorable + followed",
  },
  {
    color: "#dc2626",
    num: "03",
    label: "Revenue Engine",
    subtitle: "How you monetize",
    items: [
      "Full offer architecture (high-ticket included)",
      "Funnel design (lead → nurture → convert)",
      "Lead magnet + email system",
      "Conversion mapping across all touchpoints",
    ],
    outcome: "You become profitable by design",
  },
]

const TRANSFORMATIONS = [
  "Your brand is clearly positioned in its category",
  'Your content feels like a "universe", not posts',
  "Your offers sell with less friction",
  "Your audience understands you instantly",
  "Your revenue becomes predictable",
]

const REPLACES = [
  "A strategist",
  "A copywriter",
  "A funnel builder",
  "A brand consultant",
  "A content agency",
  "Years of trial and error",
]

const FOR = [
  { title: "Founders", desc: "Ready to scale seriously." },
  { title: "Creators", desc: "Becoming brands." },
  { title: "Agencies", desc: "Upgrading into authority." },
  { title: "Artists", desc: "Building universes." },
]

export default function EmpireBundlePage() {
  const [ref1, vis1] = useScrollReveal()
  const [ref2, vis2] = useScrollReveal()
  const [ref3, vis3] = useScrollReveal()
  const [ref4, vis4] = useScrollReveal()
  const [ref5, vis5] = useScrollReveal()

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <NavBar />

      {/* Hero */}
      <section style={{ minHeight: "90vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 100 }}>
        <AnimatedOrb color="radial-gradient(circle,#e63946,transparent)" size={800} x="50%" y="40%" opacity={0.15} />
        <AnimatedOrb color="radial-gradient(circle,#ff1a1a,transparent)" size={400} x="80%" y="20%" opacity={0.1} />
        <AnimatedOrb color="radial-gradient(circle,#dc2626,transparent)" size={300} x="10%" y="70%" opacity={0.08} />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(1.5rem,4vw,4rem)", position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "linear-gradient(135deg,rgba(230,57,70,0.2),rgba(255,26,26,0.15))",
            border: "1px solid rgba(230,57,70,0.5)",
            borderRadius: 100, padding: "10px 24px", marginBottom: 40,
          }}>
            <span style={{ color: "#e63946", fontSize: 12, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 700 }}>🚀 FLAGSHIP · SAVE 2,500€</span>
          </div>

          <p style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            color: "rgba(255,255,255,0.4)",
            fontSize: 14, letterSpacing: "0.18em", marginBottom: 24, fontWeight: 600,
          }}>
            THE STRAWBERRY PERCEPTION EMPIRE SYSTEM
          </p>

          <h1 style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(3rem,8.5vw,7rem)",
            fontWeight: 700,
            lineHeight: 1.02,
            color: "#fff",
            marginBottom: 32,
            letterSpacing: "-0.04em",
          }}>
            I don&apos;t build your brand.
            <br />
            <span style={{ background: "linear-gradient(135deg,#e63946,#ff1a1a,#dc2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              I build your empire.
            </span>
          </h1>

          <p style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: "clamp(1.1rem,2vw,1.35rem)",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7,
            maxWidth: 720,
            margin: "0 auto 56px",
          }}>
            A complete reconstruction of how the world perceives your identity, your content, and your revenue system. Not a service. A market perception empire.
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, marginBottom: 48, flexWrap: "wrap" }}>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 24, textDecoration: "line-through" }}>10,000€</div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(4rem,10vw,6.5rem)", color: "#e63946", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>
              7,500€
            </div>
          </div>

          <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-block",
            background: "linear-gradient(135deg,#e63946,#ff1a1a)",
            color: "#fff", padding: "22px 60px", borderRadius: 100,
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, fontWeight: 700,
            textDecoration: "none", letterSpacing: "0.04em",
            boxShadow: "0 16px 56px rgba(230,57,70,0.5)",
          }}>
            Claim Your Empire
          </a>
        </div>
      </section>

      {/* What This Really Is */}
      <section ref={ref1} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d", opacity: vis1 ? 1 : 0, transform: vis1 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#e63946", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 24 }}>WHAT THIS REALLY IS</div>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "#fff", fontWeight: 700, marginBottom: 40, letterSpacing: "-0.02em", lineHeight: 1.3 }}>
            You don&apos;t leave with &quot;better marketing.&quot;
            <br />You leave with an empire.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "A narrative identity",
              "A content engine",
              "A revenue system",
              "A positioning advantage no competitor can copy quickly",
            ].map((item, i) => (
              <div key={i} style={{ padding: "20px 24px", borderRadius: 14, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", textAlign: "left", display: "flex", gap: 14, alignItems: "center" }}>
                <span style={{ color: "#e63946", fontSize: 18 }}>👉</span>
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.8)", fontSize: 15, lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 3 Engines */}
      <section ref={ref2} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", opacity: vis2 ? 1 : 0, transform: vis2 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, color: "#e63946", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 20 }}>THE 3 CORE SYSTEMS · FULL INTEGRATION</div>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 700, marginBottom: 16, letterSpacing: "-0.02em" }}>
              Three engines. One unstoppable machine.
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 17, maxWidth: 700, margin: "0 auto", lineHeight: 1.7 }}>
              Most agencies fix content, ads, copy. I don&apos;t fix. I redesign perception → attention → conversion as ONE system.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {ENGINES.map((e) => (
              <div key={e.num} style={{ position: "relative", padding: "44px 36px", borderRadius: 28, background: `linear-gradient(160deg,${e.color}1a,rgba(255,255,255,0.025))`, border: `1px solid ${e.color}44`, overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg,${e.color},transparent)` }} />
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 20 }}>
                  <span style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: `${e.color}88`, fontSize: 36, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em" }}>{e.num}</span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 24, fontWeight: 700, margin: 0, lineHeight: 1.2 }}>{e.label}</h3>
                  </div>
                </div>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: e.color, fontSize: 14, fontStyle: "italic", marginBottom: 28 }}>&quot;{e.subtitle}&quot;</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                  {e.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{ width: 18, height: 18, borderRadius: "50%", background: `${e.color}22`, border: `1px solid ${e.color}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: e.color }} />
                      </div>
                      <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "14px 20px", borderRadius: 12, background: `${e.color}11`, border: `1px solid ${e.color}33` }}>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: e.color, fontSize: 13, fontWeight: 700, margin: 0, letterSpacing: "0.02em" }}>👉 {e.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Outcomes */}
      <section ref={ref3} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d", opacity: vis3 ? 1 : 0, transform: vis3 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 11, color: "#e63946", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 20 }}>TRANSFORMATION OUTCOME</div>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16 }}>
              After 60–90 days
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {TRANSFORMATIONS.map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 20, alignItems: "center", padding: "20px 28px", borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#e63946", fontSize: 24, fontWeight: 700, opacity: 0.5, minWidth: 32 }}>{String(i + 1).padStart(2, "0")}</div>
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.8)", fontSize: 16, lineHeight: 1.5 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What It Replaces */}
      <section ref={ref4} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", opacity: vis4 ? 1 : 0, transform: vis4 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div style={{ fontSize: 11, color: "#e63946", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 20 }}>WHY 7,500€</div>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "#fff", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24, lineHeight: 1.2 }}>
                Because this replaces an entire team
              </h2>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                Each individual hire would cost you tens of thousands. Combined, the friction of coordinating them alone could sink the project. This is one vision, one partner, one empire.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {REPLACES.map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "center" }}>
                    <span style={{ color: "#e63946", fontSize: 16 }}>✕</span>
                    <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.7)", fontSize: 15 }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "#e63946", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 20 }}>WHO THIS IS FOR</div>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "#fff", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 32, lineHeight: 1.2 }}>
                Not for people testing ideas
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {FOR.map((f, i) => (
                  <div key={i} style={{ padding: "20px 24px", borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(230,57,70,0.2)" }}>
                    <h4 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 6 }}>{f.title}</h4>
                    <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ref5} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d", opacity: vis5 ? 1 : 0, transform: vis5 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{
            borderRadius: 36, padding: "80px clamp(2rem,6vw,80px)",
            background: "linear-gradient(135deg,rgba(230,57,70,0.18),rgba(255,26,26,0.12),rgba(220,38,38,0.1))",
            border: "2px solid rgba(230,57,70,0.4)",
            boxShadow: "0 0 120px rgba(230,57,70,0.2)",
            textAlign: "center",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%,rgba(230,57,70,0.12),transparent 70%)", pointerEvents: "none" }} />
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.45)", fontSize: 13, letterSpacing: "0.14em", marginBottom: 16, fontWeight: 600, position: "relative" }}>FINAL THOUGHT</p>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,5vw,3.5rem)", color: "#fff", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 24, lineHeight: 1.15, position: "relative" }}>
              This is not about content.
              <br />
              <span style={{ background: "linear-gradient(135deg,#e63946,#ff1a1a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                It&apos;s about control of perception at scale.
              </span>
            </h2>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 40, marginBottom: 40, flexWrap: "wrap", position: "relative" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 20, textDecoration: "line-through" }}>10,000€</span>
              <span style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(3rem,8vw,4.5rem)", color: "#e63946", fontWeight: 700, letterSpacing: "-0.03em" }}>7,500€</span>
            </div>

            <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-block",
              background: "linear-gradient(135deg,#e63946,#ff1a1a)",
              color: "#fff", padding: "22px 60px", borderRadius: 100,
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, fontWeight: 700,
              textDecoration: "none", letterSpacing: "0.04em",
              boxShadow: "0 16px 56px rgba(230,57,70,0.5)",
              position: "relative",
            }}>
              Get The Empire Bundle
            </a>

            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.35)", fontSize: 14, marginTop: 24, position: "relative" }}>
              Limited spots available. Selected clients each quarter.
            </p>
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
