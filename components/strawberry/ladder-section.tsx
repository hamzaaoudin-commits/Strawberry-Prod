"use client"

import { useState } from "react"
import Link from "next/link"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

type Stage = "all" | "explore" | "idea" | "established"

/**
 * The offer ladder. One studio, one method, five ways in.
 * Each rung declares FORMAT (one-shot vs subscription), PRICE and STAGE
 * explicitly — so the 4,500€ audit is never confused with the 4,500€/mo
 * MOMENTUM tier.
 */
const RUNGS: {
  key: string
  name: string
  price: string
  cadence: string
  format: "One-shot" | "Subscription" | "After the audit"
  stage: Stage
  stageLabel: string
  line: string
  href: string
  featured?: boolean
}[] = [
  {
    key: "radar",
    name: "RADAR",
    price: "15€",
    cadence: "/ month",
    format: "Subscription",
    stage: "explore",
    stageLabel: "Just exploring",
    line: "One real brand read every day. Read positioning in seconds — the instrument your competitors don't have.",
    href: "/radar",
  },
  {
    key: "arsenal",
    name: "Arsenal",
    price: "147–197€",
    cadence: "one-time",
    format: "One-shot",
    stage: "explore",
    stageLabel: "Do it yourself",
    line: "The RADAR method as a toolkit. The frameworks to run the read on your own brand, without us.",
    href: "/radar#arsenal",
  },
  {
    key: "nova",
    name: "NOVA",
    price: "999€",
    cadence: "one-time",
    format: "One-shot",
    stage: "idea",
    stageLabel: "You have an idea",
    line: "The step-by-step app that takes a blurry idea to a business ready to launch. You stay the founder — it structures, it doesn't decide for you.",
    href: "/nova",
  },
  {
    key: "audit",
    name: "Brand Narrative Architecture",
    price: "4,500€",
    cadence: "one-time",
    format: "One-shot",
    stage: "established",
    stageLabel: "Established brand",
    line: "The signature commission. A complete repositioning — identity, position and language — impossible to confuse, impossible to generate.",
    href: "/brand-narrative-audit",
    featured: true,
  },
  {
    key: "momentum",
    name: "MOMENTUM",
    price: "from 1,500€",
    cadence: "/ month",
    format: "After the audit",
    stage: "established",
    stageLabel: "After the audit",
    line: "Creative direction on retainer. Once the architecture exists, the team that keeps telling your story — récit, design, web, sound.",
    href: "/momentum",
  },
]

const ROUTES: { id: Stage; label: string }[] = [
  { id: "all", label: "Show everything" },
  { id: "explore", label: "I'm just exploring" },
  { id: "idea", label: "I have an idea" },
  { id: "established", label: "I have an established brand" },
]

export function LadderSection() {
  const [stage, setStage] = useState<Stage>("all")

  const isDimmed = (rungStage: Stage) =>
    stage !== "all" && rungStage !== stage

  return (
    <section
      id="ladder"
      style={{
        padding: "140px clamp(1.5rem,4vw,4rem)",
        background: "#0a0a0a",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 0%, ${GLOW} 0%, transparent 60%)`,
          opacity: 0.18,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.3em",
              color: COLOR,
              marginBottom: 24,
              textTransform: "uppercase",
              fontFamily: SANS,
            }}
          >
            The Ladder
          </div>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.25rem,5vw,3.75rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: 28,
            }}
          >
            One studio. One method.
            <br />
            <span
              style={{
                background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Five ways in.
            </span>
          </h2>
          <p
            style={{
              fontFamily: SANS,
              fontSize: "clamp(1rem,1.4vw,1.15rem)",
              color: "rgba(255,255,255,0.65)",
              maxWidth: 620,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Not a menu — a ladder. Every rung is the same conviction about
            narrative truth, entered at a different altitude. Start where you
            are.
          </p>
        </div>

        {/* STAGE ROUTER */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div
            style={{
              fontFamily: SANS,
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              marginBottom: 20,
            }}
          >
            Where are you?
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 12,
              marginBottom: 64,
            }}
          >
            {ROUTES.map((r) => {
              const active = stage === r.id
              return (
                <button
                  key={r.id}
                  onClick={() => setStage(r.id)}
                  style={{
                    fontFamily: SANS,
                    fontSize: 13,
                    letterSpacing: "0.02em",
                    padding: "10px 20px",
                    borderRadius: 100,
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    border: active
                      ? `1px solid ${COLOR}`
                      : "1px solid rgba(255,255,255,0.14)",
                    background: active
                      ? `linear-gradient(135deg, ${COLOR}, #ff1a1a)`
                      : "transparent",
                    color: active ? "#fff" : "rgba(255,255,255,0.7)",
                    fontWeight: active ? 600 : 400,
                  }}
                >
                  {r.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* RUNGS */}
        <div
          className="ladder-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {RUNGS.map((r) => {
            const dimmed = isDimmed(r.stage)
            return (
              <Link
                key={r.key}
                href={r.href}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                  position: "relative",
                  padding: "34px 28px 28px",
                  background: r.featured
                    ? "linear-gradient(180deg, rgba(230,57,70,0.08) 0%, rgba(10,10,10,0.6) 100%)"
                    : "rgba(255,255,255,0.02)",
                  border: r.featured
                    ? `1px solid rgba(230,57,70,0.4)`
                    : "1px solid rgba(255,255,255,0.09)",
                  opacity: dimmed ? 0.32 : 1,
                  filter: dimmed ? "saturate(0.4)" : "none",
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  if (!dimmed)
                    (e.currentTarget as HTMLElement).style.borderColor = COLOR
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor =
                    r.featured
                      ? "rgba(230,57,70,0.4)"
                      : "rgba(255,255,255,0.09)"
                }}
              >
                {r.featured && (
                  <>
                    <div
                      style={{
                        position: "absolute",
                        top: -1,
                        left: -1,
                        width: 34,
                        height: 34,
                        borderTop: `2px solid ${COLOR}`,
                        borderLeft: `2px solid ${COLOR}`,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: -1,
                        right: -1,
                        width: 34,
                        height: 34,
                        borderBottom: `2px solid ${COLOR}`,
                        borderRight: `2px solid ${COLOR}`,
                      }}
                    />
                  </>
                )}

                {/* format + stage tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 22,
                  }}
                >
                  <span
                    style={{
                      fontFamily: SANS,
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      borderRadius: 100,
                      border: `1px solid ${
                        r.format === "Subscription"
                          ? "rgba(120,180,255,0.4)"
                          : r.format === "After the audit"
                          ? "rgba(255,255,255,0.2)"
                          : "rgba(230,57,70,0.4)"
                      }`,
                      color:
                        r.format === "Subscription"
                          ? "rgba(150,195,255,0.9)"
                          : r.format === "After the audit"
                          ? "rgba(255,255,255,0.6)"
                          : COLOR,
                    }}
                  >
                    {r.format}
                  </span>
                  <span
                    style={{
                      fontFamily: SANS,
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      borderRadius: 100,
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {r.stageLabel}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: SERIF,
                    fontSize: r.featured ? "1.6rem" : "1.5rem",
                    fontWeight: 700,
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                    marginBottom: 12,
                  }}
                >
                  {r.name}
                </h3>

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 6,
                    marginBottom: 18,
                  }}
                >
                  <span
                    style={{
                      fontFamily: SERIF,
                      fontSize: "1.7rem",
                      fontWeight: 700,
                      color: r.featured ? COLOR : "#fff",
                    }}
                  >
                    {r.price}
                  </span>
                  <span
                    style={{
                      fontFamily: SANS,
                      fontSize: 13,
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {r.cadence}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: SANS,
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.62)",
                    marginBottom: 22,
                  }}
                >
                  {r.line}
                </p>

                <span
                  style={{
                    fontFamily: SANS,
                    fontSize: 13,
                    fontWeight: 600,
                    color: COLOR,
                    letterSpacing: "0.02em",
                  }}
                >
                  {r.featured ? "See the commission →" : "Learn more →"}
                </span>
              </Link>
            )
          })}
        </div>

        <p
          style={{
            fontFamily: SANS,
            fontSize: 13,
            color: "rgba(255,255,255,0.4)",
            textAlign: "center",
            marginTop: 48,
            maxWidth: 640,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.6,
          }}
        >
          Every rung feeds the next. RADAR trains the eye, the Audit builds the
          architecture, MOMENTUM keeps it alive. You never pay for the same
          thing twice.
        </p>
      </div>
    </section>
  )
}
