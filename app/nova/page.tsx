"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

// TODO: replace with the live NOVA Stripe payment link (currently placeholder in the NOVA app).
const NOVA_BUY_URL = "/#contact"

const STEPS = [
  { t: "Clarifying the idea", r: "Your role: name what you're really building, and for whom." },
  { t: "Validating the positioning", r: "Your role: choose the ground you'll own — and refuse the rest." },
  { t: "Name and identity", r: "Your role: keep the name and world that truly become yours." },
  { t: "The site", r: "Your role: dictate what the site must say first." },
  { t: "90-day launch plan", r: "Your role: commit to the actions you'll actually hold to." },
]

export default function NovaPage() {
  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>
      <NavBar />

      {/* HERO */}
      <section style={{ padding: "160px clamp(1.5rem,4vw,4rem) 90px", position: "relative", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 0%, ${GLOW} 0%, transparent 60%)`, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 36, textTransform: "uppercase" }}>
            A Strawberry Production app · 999€ one-time
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.25rem,6vw,4.25rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: 28 }}>
            From a blurry idea<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>to a business ready to launch.</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.2rem)", color: "rgba(255,255,255,0.68)", maxWidth: 620, margin: "0 auto 16px", lineHeight: 1.65 }}>
            NOVA is the step-by-step app that moves you forward, one decision at a time. Not an audit, not a done-for-you deliverable — an application, and you at the controls.
          </p>
          <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "1.15rem", color: "rgba(255,255,255,0.55)", marginBottom: 40 }}>
            &ldquo;We don&apos;t hand you a brand. We bring the business to life with you.&rdquo;
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <a href={NOVA_BUY_URL} style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "15px 32px", borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
              Start my journey — 999€
            </a>
            <a href="#journey" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "15px 32px", borderRadius: 100, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>
              See the 5 steps
            </a>
          </div>
        </div>
      </section>

      {/* WHY IT WORKS */}
      <section style={{ padding: "80px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {[
            { t: "You stay the founder", b: "The app never decides for you. It structures the work — you make every call." },
            { t: "One thread, not ten vendors", b: "Everything coordinated inside a single coherent tool." },
            { t: "Your pace, no deadline", b: "One payment, unlimited access, progress saved as you go." },
          ].map((c) => (
            <div key={c.t} style={{ padding: "30px 26px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.09)" }}>
              <h3 style={{ fontFamily: SERIF, fontSize: "1.3rem", fontWeight: 700, marginBottom: 12 }}>{c.t}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "rgba(255,255,255,0.62)" }}>{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" style={{ padding: "90px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 20, textTransform: "uppercase" }}>The journey</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.9rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}>Five steps. Each waits for a decision.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)" }}>
            {STEPS.map((s, i) => (
              <div key={s.t} style={{ background: "#0a0a0a", padding: "26px 28px", display: "flex", gap: 22, alignItems: "flex-start" }}>
                <div style={{ fontFamily: SERIF, fontSize: 30, fontWeight: 700, color: COLOR, lineHeight: 1, minWidth: 44 }}>0{i + 1}</div>
                <div>
                  <h3 style={{ fontFamily: SERIF, fontSize: "1.3rem", fontWeight: 700, marginBottom: 6 }}>{s.t}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.58)" }}>{s.r}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section style={{ padding: "90px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
        <div style={{ maxWidth: 620, margin: "0 auto", border: `1px solid rgba(230,57,70,0.3)`, background: "linear-gradient(180deg, rgba(230,57,70,0.06) 0%, rgba(10,10,10,0.6) 100%)", padding: "clamp(2.5rem,5vw,3.5rem)", position: "relative" }}>
          <div style={{ position: "absolute", top: -1, left: -1, width: 44, height: 44, borderTop: `2px solid ${COLOR}`, borderLeft: `2px solid ${COLOR}` }} />
          <div style={{ position: "absolute", bottom: -1, right: -1, width: 44, height: 44, borderBottom: `2px solid ${COLOR}`, borderRight: `2px solid ${COLOR}` }} />
          <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 100, border: `1px solid ${COLOR}`, color: COLOR }}>One-time payment</span>
          <div style={{ fontFamily: SERIF, fontSize: "3.5rem", fontWeight: 700, margin: "22px 0 6px" }}>999€</div>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,0.65)", margin: "0 auto 32px", maxWidth: 420 }}>
            Full access to the application — 5 steps, from idea to launched business. No deadline, progress saved.
          </p>
          <a href={NOVA_BUY_URL} style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "15px 36px", borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>Start my journey</a>
        </div>
        <div style={{ maxWidth: 640, margin: "48px auto 0" }}>
          <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
            Already have an established brand? NOVA is for the idea stage — the full repositioning for existing companies is{" "}
            <Link href="/brand-narrative-audit" style={{ color: COLOR, textDecoration: "none" }}>Brand Narrative Architecture</Link>.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
