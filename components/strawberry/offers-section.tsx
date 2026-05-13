"use client"

import { useState } from "react"
import Link from "next/link"
import { useScrollReveal } from "@/hooks/use-strawberry"
import { AnimatedOrb } from "./animated-orb"

const OFFERS = [
  {
    id: "foundation",
    badge: "Foundation",
    price: "2,500",
    color: "#e63946",
    glow: "rgba(230,57,70,0.35)",
    title: "Brand Intelligence System",
    tagline: "The strategic foundation every empire is built on",
    desc: "A 45+ page intelligence report combining McKinsey-level market analysis with cinematic brand architecture. This is not a brand guide — this is your business constitution.",
    deliverables: [
      "Brand Narrative Bible (mission, vision, mythology)",
      "Market Intelligence Report (TAM/SAM/SOM)",
      "Competitor Intelligence (top 10 players)",
      "4 Advanced Persona profiles",
      "90-Day Go-To-Market plan",
      "Content Territory Map (5 pillars, 50 ideas)",
    ],
    outcome: "Total strategic clarity — you know who you are and where you win.",
    weeks: "4-week delivery",
    checkoutUrl: "https://buy.stripe.com/aFadR2b2AfDeeYK1N6f7i02",
  },
  {
    id: "authority",
    badge: "Authority",
    price: "5,000",
    color: "#ff1a1a",
    glow: "rgba(255,26,26,0.35)",
    title: "Content Domination System",
    tagline: "The complete narrative engine for brands ready to be heard",
    desc: "A 90-day cinematic content engine designed to turn attention into authority. Not content creation — narrative infrastructure that compounds over time.",
    deliverables: [
      "3–5 Premium Video Scripts (cinematic structure)",
      "20 High-Impact Short-Form Scripts",
      "4 Narrative Authority Newsletters",
      "1 Premium Lead Magnet asset",
      "5 Strategic Content Territories defined",
      "Omnichannel distribution system (5 platforms)",
    ],
    outcome: "90 days of content — without creative friction. Authority by design.",
    weeks: "12-week system",
    checkoutUrl: "https://buy.stripe.com/00wcMY4EcfDe3g28buf7i03",
  },
  {
    id: "revenue",
    badge: "Revenue",
    price: "2,500",
    color: "#dc2626",
    glow: "rgba(220,38,38,0.35)",
    title: "Revenue Architecture System",
    tagline: "Transform attention into predictable income",
    desc: "The complete conversion infrastructure that turns your audience into customers. Funnels, offers, and sales systems engineered for maximum revenue.",
    deliverables: [
      "High-Converting Offer Architecture",
      "Sales Page Copywriting & Design",
      "Email Welcome Sequence (5-7 emails)",
      "Trust-Building Nurture Sequence",
      "Checkout Flow Optimization",
      "Revenue Dashboard & KPI Tracking",
    ],
    outcome: "Your audience naturally moves toward buying — systematically.",
    weeks: "6-week delivery",
    checkoutUrl: "https://buy.stripe.com/bJe8wIeeMfDe8Am4Zif7i04",
  },
]

const EMPIRE_BUNDLE_URL = "https://buy.stripe.com/7sYfZaeeMbmYbMy77qf7i05"

export function OffersSection() {
  const [ref, vis] = useScrollReveal()
  const [active, setActive] = useState<number | null>(null)
  
  return (
    <section id="offers" style={{ background: "#0d0d0d", padding: "120px clamp(1.5rem,4vw,4rem)", position: "relative", overflow: "hidden" }}>
      <AnimatedOrb color="radial-gradient(circle,#e63946,transparent)" size={500} x="80%" y="10%" opacity={0.1} />
      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ fontSize: 11, color: "#e63946", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>INVESTMENT</div>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3.5rem)", color: "#fff", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16 }}>
            Choose your system
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 17 }}>Three systems. One unified empire.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {OFFERS.map((o, i) => (
            <div key={o.id}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                borderRadius: 28, padding: "44px 36px",
                background: active === i ? `linear-gradient(160deg,${o.color}18,rgba(255,255,255,0.04))` : "rgba(255,255,255,0.035)",
                border: `1px solid ${active === i ? o.color + "55" : "rgba(255,255,255,0.09)"}`,
                boxShadow: active === i ? `0 0 60px ${o.glow}, 0 24px 48px rgba(0,0,0,0.4)` : "0 4px 24px rgba(0,0,0,0.2)",
                transition: "all 0.4s cubic-bezier(.22,.68,0,1.2)",
                transform: active === i ? "translateY(-8px) scale(1.02)" : "none",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
            >
              <div style={{
                display: "inline-block",
                background: `${o.color}22`,
                border: `1px solid ${o.color}44`,
                color: o.color, fontSize: 11, fontWeight: 700,
                padding: "4px 14px", borderRadius: 100,
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.1em",
                marginBottom: 28,
              }}>{o.badge.toUpperCase()}</div>
              <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#fff", fontWeight: 700, marginBottom: 6, lineHeight: 1.2 }}>{o.title}</div>
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 14, marginBottom: 28, lineHeight: 1.5 }}>{o.tagline}</div>
              <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "3rem", color: o.color, fontWeight: 700, marginBottom: 28, letterSpacing: "-0.02em" }}>
                {o.price}
              </div>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, marginBottom: 32 }}>{o.desc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
                {o.deliverables.map((d, j) => (
                  <div key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: `${o.color}22`, border: `1px solid ${o.color}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: o.color }} />
                    </div>
                    <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.5 }}>{d}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: "16px 20px", borderRadius: 12, background: `${o.color}0f`, border: `1px solid ${o.color}22`, marginBottom: 32 }}>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: o.color, fontSize: 13, lineHeight: 1.5, margin: 0, fontWeight: 500 }}>&#10022; {o.outcome}</p>
              </div>
              <a
                href={o.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block", textAlign: "center",
                  background: active === i ? `linear-gradient(135deg,${o.color},${o.color}bb)` : "rgba(255,255,255,0.08)",
                  color: active === i ? "#fff" : "rgba(255,255,255,0.6)",
                  padding: "15px 24px", borderRadius: 100,
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 700,
                  textDecoration: "none", letterSpacing: "0.06em",
                  transition: "all 0.3s ease",
                  boxShadow: active === i ? `0 8px 24px ${o.glow}` : "none",
                }}>
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Empire Bundle Banner */}
        <div style={{ 
          marginTop: 60, 
          padding: "48px 56px", 
          borderRadius: 32,
          background: "linear-gradient(135deg,rgba(230,57,70,0.15),rgba(255,26,26,0.1),rgba(220,38,38,0.08))",
          border: "2px solid rgba(230,57,70,0.3)",
          boxShadow: "0 0 80px rgba(230,57,70,0.15)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: 24, right: 32 }}>
            <div style={{
              background: "linear-gradient(135deg,#e63946,#ff1a1a)",
              color: "#fff", fontSize: 12, fontWeight: 700,
              padding: "8px 20px", borderRadius: 100, letterSpacing: "0.1em",
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            }}>SAVE 2,500</div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: "#e63946", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 16 }}>THE COMPLETE PACKAGE</div>
              <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "#fff", fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
                Empire Bundle
              </h3>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.7, maxWidth: 500 }}>
                All three systems integrated simultaneously. Identity feeds Content, Content feeds Revenue. One vision, one partner, one empire.
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 14, textDecoration: "line-through", marginBottom: 4 }}>10,000</div>
              <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "4rem", color: "#e63946", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>
                7,500
              </div>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 24 }}>
                <a
                  href={EMPIRE_BUNDLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    background: "linear-gradient(135deg,#e63946,#ff1a1a)",
                    color: "#fff", padding: "16px 40px", borderRadius: 100,
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 700,
                    textDecoration: "none", letterSpacing: "0.06em",
                    boxShadow: "0 8px 32px rgba(230,57,70,0.4)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}>
                  Get The Bundle
                </a>
                <Link href="/empire-bundle" style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.8)", padding: "16px 32px", borderRadius: 100,
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600,
                  textDecoration: "none", letterSpacing: "0.06em",
                  transition: "all 0.2s",
                }}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
