"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

const TIERS = [
  { name: "Établi", price: "1,500€", cadence: "/ month", line: "One workbench, one chantier carried at a time. For a brand that needs its story held steadily." },
  { name: "Maison", price: "2,500€", cadence: "/ month", line: "More chantiers in parallel, more surface covered — récit, design, web, sound under one hand.", featured: true },
  { name: "Souverain", price: "4,500€", cadence: "/ month", line: "Full creative direction. The studio operates as your outsourced brand team, month after month." },
]

export default function MomentumPage() {
  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>
      <NavBar />

      {/* HERO */}
      <section style={{ padding: "160px clamp(1.5rem,4vw,4rem) 90px", position: "relative", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 0%, ${GLOW} 0%, transparent 60%)`, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 36, textTransform: "uppercase" }}>
            Creative direction on retainer · after the audit
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.25rem,6vw,4.25rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: 28 }}>
            The architecture is built.<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>MOMENTUM keeps building.</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.2rem)", color: "rgba(255,255,255,0.68)", maxWidth: 640, margin: "0 auto 40px", lineHeight: 1.65 }}>
            One team, from story to render — récit, design, web, sound. Not a list of deliverables: a capacity you reserve, month after month, so your brand stops being a string of freelancers and becomes a material worked over time.
          </p>
          <a href="#tiers" style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "15px 32px", borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
            See the tiers
          </a>
        </div>
      </section>

      {/* PRICE-COLLISION RESOLVER: explicit contrast with the audit */}
      <section style={{ padding: "70px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          <div style={{ padding: "30px 28px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>The commission — one-shot</div>
            <h3 style={{ fontFamily: SERIF, fontSize: "1.4rem", fontWeight: 700, marginBottom: 10 }}>Brand Narrative Architecture</h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,0.62)" }}><strong style={{ color: "#fff" }}>4,500€ once.</strong> You buy the architecture: position, story, language. Delivered, yours forever.</p>
          </div>
          <div style={{ padding: "30px 28px", background: "linear-gradient(180deg, rgba(230,57,70,0.06) 0%, rgba(10,10,10,0.6) 100%)", border: `1px solid rgba(230,57,70,0.35)` }}>
            <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: COLOR, marginBottom: 14 }}>MOMENTUM — monthly</div>
            <h3 style={{ fontFamily: SERIF, fontSize: "1.4rem", fontWeight: 700, marginBottom: 10 }}>Creative direction on retainer</h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,0.62)" }}><strong style={{ color: "#fff" }}>From 1,500€ / month.</strong> You reserve a capacity: the team that keeps producing from the architecture. Ongoing, cancellable.</p>
          </div>
        </div>
        <p style={{ textAlign: "center", fontSize: 13.5, color: "rgba(255,255,255,0.45)", marginTop: 24, maxWidth: 680, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
          Same studio, two different things. The audit builds the map once; MOMENTUM walks it with you every month. You never pay twice for the same work.
        </p>
      </section>

      {/* TIERS */}
      <section id="tiers" style={{ padding: "80px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 18, textTransform: "uppercase" }}>The tiers</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.9rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>Reserve your place at the workbench.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {TIERS.map((t) => (
              <div key={t.name} style={{ padding: "36px 30px", position: "relative", background: t.featured ? "linear-gradient(180deg, rgba(230,57,70,0.08) 0%, rgba(10,10,10,0.6) 100%)" : "rgba(255,255,255,0.02)", border: t.featured ? `1px solid rgba(230,57,70,0.4)` : "1px solid rgba(255,255,255,0.1)" }}>
                <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 100, border: "1px solid rgba(120,180,255,0.4)", color: "rgba(150,195,255,0.9)" }}>Subscription</span>
                <h3 style={{ fontFamily: SERIF, fontSize: "1.6rem", fontWeight: 700, margin: "20px 0 10px" }}>{t.name}</h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 16 }}>
                  <span style={{ fontFamily: SERIF, fontSize: "2.1rem", fontWeight: 700, color: t.featured ? COLOR : "#fff" }}>{t.price}</span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{t.cadence}</span>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.62)", marginBottom: 26 }}>{t.line}</p>
                <a href="/#contact" style={{ display: "inline-block", background: t.featured ? `linear-gradient(135deg, ${COLOR}, #ff1a1a)` : "transparent", border: t.featured ? "none" : "1px solid rgba(255,255,255,0.22)", color: "#fff", padding: "12px 26px", borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Choose {t.name}</a>
              </div>
            ))}
          </div>
        </div>
        <div style={{ maxWidth: 640, margin: "48px auto 0", textAlign: "center" }}>
          <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
            New here? Start with the{" "}
            <Link href="/brand-narrative-audit" style={{ color: COLOR, textDecoration: "none" }}>Brand Narrative Architecture</Link>{" "}
            audit — MOMENTUM is what continues it.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
