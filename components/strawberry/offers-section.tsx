"use client"

import Link from "next/link"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"

const OFFERS = [
  {
    badge: "FOUNDATION",
    color: "#e63946",
    title: "Brand Intelligence System",
    price: "5,000€",
    priceNote: "one-time",
    tagline: "A 45+ page intelligence report. Market work, persona work, narrative spine, 90-day GTM plan. Your business constitution.",
    bullets: [
      "Brand Narrative Bible",
      "Market Intelligence + Top 10 competitor analysis",
      "4 advanced persona profiles",
      "90-day go-to-market plan",
      "50-idea content territory map",
    ],
    stripe: "https://buy.stripe.com/9B6eV63A8aiU2bYcrKf7i06",
    detail: "/brand-intelligence",
  },
  {
    badge: "AUTHORITY",
    color: "#ff1a1a",
    title: "Content Domination System",
    price: "7,500€",
    priceNote: "/ month",
    tagline: "A monthly cinematic content engine. Long-form, short-form, newsletters, lead magnets, distribution — built as compounding infrastructure.",
    bullets: [
      "3–5 premium video scripts / month",
      "20 high-impact short-form scripts / month",
      "4 authority newsletters / month",
      "1 premium lead magnet / month",
      "Omnichannel distribution system",
    ],
    stripe: "https://buy.stripe.com/3cIaEQ2w49eQ8Am9fyf7i07",
    detail: "/content-domination",
  },
  {
    badge: "REVENUE",
    color: "#dc2626",
    title: "Revenue Architecture System",
    price: "6,000€",
    priceNote: "one-time",
    tagline: "Conversion infrastructure that turns audience into customers. Offer engineering, sales page, sequences, checkout, dashboard.",
    bullets: [
      "High-converting offer architecture",
      "Long-form sales page (copy + design brief)",
      "Welcome + nurture email sequences",
      "Checkout flow optimization",
      "Revenue dashboard with KPIs that matter",
    ],
    stripe: "https://buy.stripe.com/9B6dR25IgfDe03Q1N6f7i08",
    detail: "/revenue-architecture",
  },
]

const BUNDLE_COLOR = "#e63946"
const BUNDLE_GLOW = "rgba(230,57,70,0.35)"
const BUNDLE_STRIPE = "https://buy.stripe.com/4gM5kw9YwbmYg2O9fyf7i09"

export function OffersSection() {
  return (
    <section id="offers" style={{ padding: "120px clamp(1.5rem,4vw,4rem)", background: "#0a0a0a", position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: 900, height: 900, background: `radial-gradient(circle, #e63946, transparent 70%)`, opacity: 0.06, filter: "blur(100px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ fontSize: 11, color: "#e63946", fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>OUR SYSTEMS</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.1, color: "#fff" }}>
            Three systems. Built to compound.
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", maxWidth: 640, margin: "0 auto" }}>
            Each one solves a specific layer of the founder problem — clarity, authority, conversion. Book what you need, or take all three as the bundle.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, marginBottom: 64 }}>
          {OFFERS.map((o, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.025)", border: `1px solid ${o.color}22`, borderRadius: 24, padding: "36px 32px", display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 10, color: o.color, fontFamily: SANS, letterSpacing: "0.16em", fontWeight: 700, marginBottom: 16 }}>{o.badge}</div>
              <h3 style={{ fontFamily: SERIF, fontSize: 26, fontWeight: 700, marginBottom: 14, color: "#fff", lineHeight: 1.2 }}>{o.title}</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 18 }}>
                <div style={{ fontFamily: SERIF, fontSize: 32, fontWeight: 700, color: "#fff" }}>{o.price}</div>
                <div style={{ fontFamily: SANS, fontSize: 13, color: "rgba(255,255,255,0.5)", letterSpacing: "0.04em" }}>{o.priceNote}</div>
              </div>
              <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", marginBottom: 22 }}>{o.tagline}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px 0", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                {o.bullets.map((b, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: SANS, fontSize: 13.5, color: "rgba(255,255,255,0.72)", lineHeight: 1.5 }}>
                    <span style={{ color: o.color, flexShrink: 0, marginTop: 1 }}>✦</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href={o.stripe} target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", background: `linear-gradient(135deg, ${o.color}, #ff1a1a)`, color: "#fff", padding: "13px 24px", borderRadius: 100, fontFamily: SANS, fontSize: 14, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em" }}>
                  Get Started — {o.price}{o.priceNote === "/ month" ? "/mo" : ""}
                </a>
                <Link href={o.detail} style={{ display: "block", textAlign: "center", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)", padding: "13px 24px", borderRadius: 100, fontFamily: SANS, fontSize: 14, fontWeight: 600, textDecoration: "none", letterSpacing: "0.06em" }}>
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ position: "relative", padding: "44px clamp(1.5rem, 4vw, 3rem)", borderRadius: 24, background: `linear-gradient(135deg, ${BUNDLE_COLOR}1a, rgba(255,255,255,0.02))`, border: `1px solid ${BUNDLE_COLOR}44`, overflow: "hidden" }}>
          <div aria-hidden style={{ position: "absolute", top: "-30%", right: "-10%", width: 500, height: 500, background: `radial-gradient(circle, ${BUNDLE_COLOR}, transparent 70%)`, opacity: 0.18, filter: "blur(80px)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "center" }} className="bundle-grid">
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>
                <div style={{ display: "inline-block", background: `${BUNDLE_COLOR}33`, color: "#fff", fontSize: 10, fontFamily: SANS, fontWeight: 700, padding: "5px 14px", borderRadius: 100, letterSpacing: "0.14em" }}>FLAGSHIP</div>
                <div style={{ display: "inline-block", background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: 10, fontFamily: SANS, fontWeight: 700, padding: "5px 14px", borderRadius: 100, letterSpacing: "0.14em" }}>SAVE 15,500€</div>
              </div>
              <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "#fff", marginBottom: 10, lineHeight: 1.15 }}>
                Empire Bundle
              </h3>
              <p style={{ fontFamily: SANS, fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: 0, maxWidth: 580 }}>
                All three systems built in parallel as one architecture. 16 weeks, one operator, end-to-end. <strong style={{ color: "#fff" }}>18,000€</strong> instead of 33,500€ booked separately.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "stretch", minWidth: 220 }}>
              <a href={BUNDLE_STRIPE} target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", background: `linear-gradient(135deg, ${BUNDLE_COLOR}, #ff1a1a)`, color: "#fff", padding: "14px 28px", borderRadius: 100, fontFamily: SANS, fontSize: 14, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em", boxShadow: `0 12px 36px ${BUNDLE_GLOW}` }}>
                Get Bundle — 18,000€
              </a>
              <Link href="/empire-bundle" style={{ display: "block", textAlign: "center", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)", padding: "14px 28px", borderRadius: 100, fontFamily: SANS, fontSize: 14, fontWeight: 600, textDecoration: "none", letterSpacing: "0.06em" }}>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .bundle-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
