"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

const STRIPE_URL = "https://buy.stripe.com/4gMeV6eeMdv6g2O3Vef7i0a"

const PILLARS = [
  {
    n: "I",
    title: "The Narrative Spine",
    body: "The core mythology your house is built on. Origin, conviction, enemy, promise — written as a constitution, not a tagline.",
  },
  {
    n: "II",
    title: "The Perception Map",
    body: "How the world sees your category today, where the cultural vacuums are, and which territory you can own without permission.",
  },
  {
    n: "III",
    title: "The Founder Archetype",
    body: "The figure your audience needs you to be. Posture, voice, references, recurring obsessions — the persona made operational.",
  },
  {
    n: "IV",
    title: "The Audience Universe",
    body: "Four psychographic profiles written like film characters. What they fear at 3am, what they want to be seen as, what they refuse to say out loud.",
  },
  {
    n: "V",
    title: "The 90-Day Doctrine",
    body: "The first three months of execution mapped as a single narrative arc. What to say, in what order, on what surface, and why each piece compounds the next.",
  },
]

const PHASES = [
  { week: "Week 1", title: "Immersion", body: "Deep interviews, archive review, market and cultural intake. We absorb the house from the inside." },
  { week: "Week 2", title: "Architecture", body: "The narrative spine is drafted. Perception map and archetype defined. First doctrine sketch." },
  { week: "Week 3", title: "Refinement", body: "Audience profiles written. The 90-day doctrine laid out. Two rounds of revision with the founder." },
  { week: "Week 4", title: "Delivery", body: "Final 45+ page intelligence report. Walkthrough session. The house is given its constitution." },
]

function useReveal() {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

export default function BrandNarrativeAuditPage() {
  const hero = useReveal()
  const problem = useReveal()
  const pillars = useReveal()
  const process = useReveal()
  const whom = useReveal()
  const invest = useReveal()
  const cta = useReveal()

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>

      {/* HERO */}
      <section ref={hero.ref as any} style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px clamp(1.5rem,4vw,4rem) 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.4, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, width: "100%", textAlign: "center", position: "relative", opacity: hero.visible ? 1 : 0, transform: hero.visible ? "translateY(0)" : "translateY(30px)", transition: "all 1s ease" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 40, textTransform: "uppercase" }}>
            The Signature Commission · 9,500€
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem,7vw,5.5rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 32 }}>
            We don't build brands.<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>We build the universe<br />they live in.</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.25rem)", color: "rgba(255,255,255,0.7)", maxWidth: 720, margin: "0 auto 56px", lineHeight: 1.6 }}>
            The Brand Narrative Audit is a four-week commission. At the end, your house has a constitution: a 45+ page intelligence report that turns a business into a world worth remembering.
          </p>
          <Link href={STRIPE_URL} target="_blank" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "18px 44px", borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em", boxShadow: `0 20px 60px ${GLOW}` }}>
            Commission the Audit →
          </Link>
        </div>
      </section>

      {/* PROBLEM */}
      <section ref={problem.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", opacity: problem.visible ? 1 : 0, transform: problem.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>The Saturation</div>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.5rem,3vw,2.25rem)", fontWeight: 400, lineHeight: 1.4, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.92)" }}>
            Most brands today are forgettable before they are seen. A generation of AI-generic identity, founder-led content that sounds like everyone else, and category sameness has made being remembered the hardest commercial problem of the decade.
          </p>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.25rem,2vw,1.5rem)", fontWeight: 400, lineHeight: 1.5, color: COLOR, marginTop: 32, fontStyle: "italic" }}>
            We make houses that survive the noise.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section ref={pillars.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", opacity: pillars.visible ? 1 : 0, transform: pillars.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>What We Craft</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Five pillars of a remembered house.
            </h2>
          </div>
          <div style={{ display: "grid", gap: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)" }}>
            {PILLARS.map((p) => (
              <div key={p.n} style={{ background: "#0a0a0a", padding: "48px clamp(1.5rem,3vw,3rem)", display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(1.5rem,4vw,4rem)", alignItems: "start" }}>
                <div style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", color: COLOR, fontWeight: 700, lineHeight: 1, minWidth: 80 }}>{p.n}</div>
                <div>
                  <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.25rem,2vw,1.75rem)", fontWeight: 600, marginBottom: 16, letterSpacing: "-0.02em" }}>{p.title}</h3>
                  <p style={{ fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section ref={process.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", opacity: process.visible ? 1 : 0, transform: process.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>The Process</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Four weeks. One constitution.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {PHASES.map((ph, i) => (
              <div key={i} style={{ padding: "32px 28px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", position: "relative" }}>
                <div style={{ fontSize: 10, letterSpacing: "0.25em", color: COLOR, marginBottom: 16, textTransform: "uppercase" }}>{ph.week}</div>
                <h3 style={{ fontFamily: SERIF, fontSize: "1.5rem", fontWeight: 600, marginBottom: 16, letterSpacing: "-0.02em" }}>{ph.title}</h3>
                <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>{ph.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section ref={whom.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", opacity: whom.visible ? 1 : 0, transform: whom.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 32, textTransform: "uppercase", textAlign: "center" }}>For Whom</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,5rem)" }}>
            <div>
              <h3 style={{ fontFamily: SERIF, fontSize: "1.4rem", fontWeight: 600, marginBottom: 24, color: "#fff" }}>Commission this if —</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, paddingLeft: 24, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> You are a founder, not a marketing department</li>
                <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, paddingLeft: 24, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> Your business deserves a world, not a tagline</li>
                <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, paddingLeft: 24, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> You sense that being remembered will outrun being seen</li>
                <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, paddingLeft: 24, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> You will read 45 pages and let them change how you operate</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: SERIF, fontSize: "1.4rem", fontWeight: 600, marginBottom: 24, color: "rgba(255,255,255,0.6)" }}>Do not commission this if —</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, paddingLeft: 24, position: "relative" }}><span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.4)" }}>—</span> You want a logo and three brand colors</li>
                <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, paddingLeft: 24, position: "relative" }}><span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.4)" }}>—</span> You are looking for performance marketing tactics</li>
                <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, paddingLeft: 24, position: "relative" }}><span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.4)" }}>—</span> You need an answer this week</li>
                <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, paddingLeft: 24, position: "relative" }}><span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.4)" }}>—</span> You believe brand is a cost, not the asset</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section ref={invest.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", opacity: invest.visible ? 1 : 0, transform: invest.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 40, textTransform: "uppercase" }}>The Investment</div>
          <div style={{ fontFamily: SERIF, fontSize: "clamp(4rem,8vw,6rem)", fontWeight: 700, lineHeight: 1, marginBottom: 16, letterSpacing: "-0.04em" }}>
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>9,500€</span>
          </div>
          <div style={{ fontSize: 13, letterSpacing: "0.2em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: 48 }}>One commission · Four weeks · One constitution</div>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.1rem,1.6vw,1.35rem)", fontStyle: "italic", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, maxWidth: 640, margin: "0 auto" }}>
            A McKinsey engagement of comparable depth starts at 80,000€. We are not McKinsey — we are the studio they would commission for the narrative they cannot write themselves.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section ref={cta.ref as any} style={{ padding: "140px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.5, pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", opacity: cta.visible ? 1 : 0, transform: cta.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 40 }}>
            Make your house unforgettable.
          </h2>
          <Link href={STRIPE_URL} target="_blank" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "20px 52px", borderRadius: 100, fontSize: 16, fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em", boxShadow: `0 20px 60px ${GLOW}` }}>
            Commission the Audit →
          </Link>
          <div style={{ marginTop: 24, fontSize: 13, color: "rgba(255,255,255,0.45)", letterSpacing: "0.05em" }}>
            Limited to four commissions per quarter.
          </div>
        </div>
      </section>

    </main>
  )
}
