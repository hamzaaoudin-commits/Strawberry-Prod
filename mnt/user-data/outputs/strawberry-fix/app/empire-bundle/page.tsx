import type { Metadata } from "next"
import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"

export const metadata: Metadata = {
  title: "Empire Bundle — Strawberry Perception Empire System",
  description:
    "The three systems integrated simultaneously. Identity feeds Content. Content feeds Revenue. One vision, one partner, one empire.",
}

const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.4)"
const STRIPE_URL = "https://buy.stripe.com/7sYfZaeeMbmYbMy77qf7i05"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"

const PILLARS = [
  {
    color: "#e63946",
    badge: "01 · IDENTITY",
    title: "Brand Intelligence System",
    desc: "The strategic substrate. 45+ page intelligence report, market intelligence, persona work, narrative bible, 90-day GTM. The constitution everything else flows from.",
    bullets: ["Brand Narrative Bible", "Market & Competitor Intelligence", "4 Advanced Personas", "Content Territory Map"],
    detail: "/brand-intelligence",
  },
  {
    color: "#ff1a1a",
    badge: "02 · AUTHORITY",
    title: "Content Domination System",
    desc: "The narrative engine. 90 days of cinematic content infrastructure — scripts, newsletters, lead magnet, distribution map. Built to compound, not just publish.",
    bullets: ["3–5 Premium Video Scripts", "20 Short-Form Scripts", "4 Authority Newsletters", "Lead Magnet Asset"],
    detail: "/content-domination",
  },
  {
    color: "#dc2626",
    badge: "03 · REVENUE",
    title: "Revenue Architecture System",
    desc: "The conversion machine. Sales page, offer architecture, welcome and nurture sequences, checkout optimization, revenue dashboard. The audience starts paying.",
    bullets: ["High-Converting Offer Architecture", "Sales Page Copy + Design", "Email Sequences (welcome + nurture)", "Revenue Dashboard"],
    detail: "/revenue-architecture",
  },
]

const ADVANTAGES = [
  {
    title: "Compounding instead of fragmenting",
    desc: "When the three systems are built sequentially with one partner, Identity informs every line of Content, and Content pre-sells every Revenue asset. Run separately, they overlap by 30%. Run together, they multiply.",
  },
  {
    title: "One partner, one operating system",
    desc: "No briefing three agencies on the same brand. No reconciling conflicting strategies. One studio holds the entire picture and ships against a unified vision.",
  },
  {
    title: "Priority delivery & exclusivity",
    desc: "Empire Bundle clients get scheduling priority and a one-category exclusivity clause for the duration of the engagement. We don't build for your direct competitors while we're building for you.",
  },
  {
    title: "The 2,500€ saving is the smallest benefit",
    desc: "You save 2,500€ versus buying the systems separately. The real value is the integration — and the avoidance of the rework that always happens when an audience is built before a foundation exists.",
  },
]

const PHASES = [
  { weeks: "Weeks 1–4", phase: "Identity", desc: "Brand Intelligence System delivered. Strategic substrate locked." },
  { weeks: "Weeks 3–14", phase: "Authority", desc: "Content Domination System runs in parallel from week 3 — pulling directly from Identity findings." },
  { weeks: "Weeks 10–16", phase: "Revenue", desc: "Revenue Architecture installed while Content is still shipping. The funnel goes live with traffic already flowing." },
]

export default function EmpireBundlePage() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0a0a", color: "#fff" }}>
      <NavBar />

      {/* HERO */}
      <section style={{ padding: "160px clamp(1.5rem,4vw,4rem) 80px", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: 800,
            height: 800,
            background: `radial-gradient(circle, ${COLOR}, transparent 70%)`,
            opacity: 0.15,
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-block",
              background: `linear-gradient(135deg, ${COLOR}33, #ff1a1a33)`,
              border: `1px solid ${COLOR}66`,
              color: "#fff",
              fontSize: 11,
              fontFamily: SANS,
              fontWeight: 700,
              padding: "8px 22px",
              borderRadius: 100,
              letterSpacing: "0.14em",
              marginBottom: 32,
            }}
          >
            FLAGSHIP · COMPLETE PACKAGE
          </div>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.8rem, 7vw, 6rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.02,
              marginBottom: 32,
            }}
          >
            The Strawberry
            <br />
            <span
              style={{
                background: `linear-gradient(135deg, ${COLOR}, #ff1a1a, #dc2626)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Perception Empire
            </span>
            <br />
            System
          </h1>
          <p
            style={{
              fontFamily: SANS,
              fontSize: 22,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 760,
              marginBottom: 40,
            }}
          >
            All three systems integrated simultaneously. Identity feeds Content. Content feeds Revenue.
            <br />
            One vision, one partner, one empire.
          </p>

          {/* Price block */}
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              padding: "32px 40px",
              borderRadius: 24,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              marginBottom: 36,
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 8 }}>
              <span style={{ fontFamily: SANS, fontSize: 18, color: "rgba(255,255,255,0.35)", textDecoration: "line-through" }}>
                10,000€
              </span>
              <span
                style={{
                  background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`,
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "4px 12px",
                  borderRadius: 100,
                  fontFamily: SANS,
                  letterSpacing: "0.1em",
                }}
              >
                SAVE 2,500€
              </span>
            </div>
            <div style={{ fontFamily: SERIF, fontSize: "clamp(3rem, 6vw, 5rem)", color: COLOR, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em" }}>
              7,500€
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <a
              href={STRIPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`,
                color: "#fff",
                padding: "20px 48px",
                borderRadius: 100,
                fontFamily: SANS,
                fontSize: 16,
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.06em",
                boxShadow: `0 16px 48px ${GLOW}`,
              }}
            >
              Get Started — 7,500€
            </a>
            <Link
              href="/#offers"
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.8)",
                padding: "20px 36px",
                borderRadius: 100,
                fontFamily: SANS,
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "0.06em",
              }}
            >
              ← Compare all systems
            </Link>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section style={{ padding: "100px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>
              INSIDE THE BUNDLE
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Three systems. One operating logic.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {PILLARS.map((p, i) => (
              <div
                key={i}
                style={{
                  background: `linear-gradient(160deg, ${p.color}10, rgba(255,255,255,0.03))`,
                  border: `1px solid ${p.color}33`,
                  borderRadius: 24,
                  padding: "40px 32px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 11,
                    color: p.color,
                    letterSpacing: "0.14em",
                    fontWeight: 700,
                    marginBottom: 20,
                  }}
                >
                  {p.badge}
                </div>
                <h3 style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>{p.title}</h3>
                <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginBottom: 24 }}>
                  {p.desc}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                  {p.bullets.map((b, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div
                        style={{
                          width: 14,
                          height: 14,
                          borderRadius: "50%",
                          background: `${p.color}33`,
                          border: `1px solid ${p.color}66`,
                          flexShrink: 0,
                          marginTop: 3,
                        }}
                      />
                      <span style={{ fontFamily: SANS, fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{b}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={p.detail}
                  style={{
                    marginTop: "auto",
                    textAlign: "center",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.75)",
                    padding: "12px 20px",
                    borderRadius: 100,
                    fontFamily: SANS,
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: "none",
                    letterSpacing: "0.06em",
                  }}
                >
                  Detail page →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THE BUNDLE */}
      <section style={{ padding: "100px clamp(1.5rem,4vw,4rem)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>
              WHY THE BUNDLE
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Buying the three together changes the math.
            </h2>
          </div>
          <div style={{ display: "grid", gap: 24 }}>
            {ADVANTAGES.map((a, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 20,
                  padding: "32px 36px",
                }}
              >
                <h3 style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 700, marginBottom: 12, color: "#fff" }}>{a.title}</h3>
                <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", margin: 0 }}>
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: "100px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>
              TIMELINE
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              16 weeks. Overlapping phases.
            </h2>
            <p style={{ fontFamily: SANS, fontSize: 16, color: "rgba(255,255,255,0.55)", marginTop: 16, maxWidth: 720, lineHeight: 1.7 }}>
              The Empire Bundle isn&apos;t three sequential projects. The phases overlap intentionally — by the time Identity
              closes, Content is already in production, and Revenue is being scaffolded against real audience data.
            </p>
          </div>
          <div style={{ display: "grid", gap: 16 }}>
            {PHASES.map((p, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  gap: 28,
                  padding: "24px 28px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 13,
                    color: COLOR,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                  }}
                >
                  {p.weeks}
                </div>
                <div>
                  <div style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 700, marginBottom: 6 }}>{p.phase}</div>
                  <div style={{ fontFamily: SANS, fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RISK-FREE */}
      <section style={{ padding: "100px clamp(1.5rem,4vw,4rem)" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "48px 52px",
            borderRadius: 28,
            background: `linear-gradient(135deg, ${COLOR}1a, rgba(255,255,255,0.02))`,
            border: `1px solid ${COLOR}44`,
            boxShadow: `0 0 80px ${COLOR}1a`,
          }}
        >
          <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>
            RISK-FREE
          </div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 18, lineHeight: 1.2 }}>
            Phase-gated payment. Revision windows on every deliverable.
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: 0 }}>
            Payment is split into three milestones — one per phase — released only when the previous phase is signed off. Each
            phase carries a 2–3 week revision window. You&apos;re never paying ahead of work that hasn&apos;t landed.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "100px clamp(1.5rem,4vw,4rem) 140px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 900,
            height: 900,
            background: `radial-gradient(circle, ${COLOR}, transparent 70%)`,
            opacity: 0.1,
            filter: "blur(100px)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              marginBottom: 28,
            }}
          >
            Build the
            <br />
            <span
              style={{
                background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              entire empire.
            </span>
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginBottom: 44 }}>
            16-week integrated delivery. Three-milestone payment. Category exclusivity. One studio holding the whole picture.
          </p>
          <a
            href={STRIPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`,
              color: "#fff",
              padding: "22px 64px",
              borderRadius: 100,
              fontFamily: SANS,
              fontSize: 17,
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.06em",
              boxShadow: `0 20px 60px ${GLOW}`,
            }}
          >
            Get Started — 7,500€
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
