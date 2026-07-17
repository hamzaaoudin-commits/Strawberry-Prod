"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

const DOES = [
  { t: "Editorial line", b: "The voice from your architecture, turned into a monthly content line that never drifts off-story." },
  { t: "Production", b: "Posts, captions, visuals and short-form — made in your language, not a generic one." },
  { t: "Cadence", b: "A fixed rhythm your audience can feel. The story doesn't stop the day the audit is delivered." },
]

export default function NoctaPage() {
  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>
      <NavBar />

      {/* HERO */}
      <section style={{ padding: "160px clamp(1.5rem,4vw,4rem) 90px", position: "relative", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 0%, ${GLOW} 0%, transparent 60%)`, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 36, textTransform: "uppercase" }}>
            The Strawberry content arm · after the audit
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.25rem,6vw,4.25rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: 28 }}>
            We build your story.<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>NOCTA keeps it alive.</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.2rem)", color: "rgba(255,255,255,0.68)", maxWidth: 640, margin: "0 auto 40px", lineHeight: 1.65 }}>
            A narrative architecture is only worth what you do with it every day. NOCTA is the execution arm that carries your language into the feed — so the position you paid to build actually gets heard.
          </p>
          <a href="/#contact" style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "15px 32px", borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
            Talk about execution
          </a>
        </div>
      </section>

      {/* WHY IT SITS AFTER THE AUDIT */}
      <section style={{ padding: "80px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.4rem,3vw,2.1rem)", fontWeight: 700, lineHeight: 1.3, letterSpacing: "-0.02em" }}>
            Most brands lose their positioning not because it was wrong — but because no one kept telling it. NOCTA is the answer to <span style={{ color: COLOR }}>&ldquo;and then what?&rdquo;</span>
          </p>
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section style={{ padding: "70px clamp(1.5rem,4vw,4rem) 90px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 18, textTransform: "uppercase" }}>What it does</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {DOES.map((c, i) => (
              <div key={c.t} style={{ padding: "30px 26px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.09)" }}>
                <div style={{ fontFamily: SERIF, fontSize: 30, fontWeight: 700, color: COLOR, marginBottom: 12 }}>0{i + 1}</div>
                <h3 style={{ fontFamily: SERIF, fontSize: "1.3rem", fontWeight: 700, marginBottom: 12 }}>{c.t}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "rgba(255,255,255,0.62)" }}>{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / SEQUENCE */}
      <section style={{ padding: "80px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.15rem,2vw,1.5rem)", fontStyle: "italic", color: "rgba(255,255,255,0.7)", lineHeight: 1.5, marginBottom: 24 }}>
            NOCTA runs best on an architecture that already exists. Start with the commission, then keep it alive.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <Link href="/brand-narrative-audit" style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "14px 30px", borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>See the audit first</Link>
            <a href="/#contact" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "14px 30px", borderRadius: 100, fontSize: 14, fontWeight: 500, textDecoration: "none" }}>Contact the studio</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
