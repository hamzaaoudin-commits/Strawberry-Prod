"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"

const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"
const STRIPE_URL = "https://buy.stripe.com/9B6eV63A8aiU2bYcrKf7i06"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"

const INSIDE = [
  { title: "Brand Narrative Bible", desc: "Mission, vision, mythology, tone of voice, archetypes. Your business constitution — the document everything else flows from." },
  { title: "Market Intelligence Report", desc: "TAM / SAM / SOM analysis. Where the money actually is, where you can realistically win, and what the next 24 months look like." },
  { title: "Competitor Intelligence (Top 10)", desc: "Forensic breakdown of the ten players you'll be measured against. Positioning gaps, content strategies, pricing, weaknesses." },
  { title: "4 Advanced Persona Profiles", desc: "Not demographics — psychographics. Beliefs, frustrations, status games, buying triggers. The people who will pay you." },
  { title: "90-Day Go-To-Market Plan", desc: "Week-by-week execution roadmap. What to launch, in what order, with what message, on what channels." },
  { title: "Content Territory Map", desc: "5 strategic pillars × 10 ideas each = 50 content angles you own. Never wonder what to post again." },
]

const BONUSES = [
  "Brand Naming framework (if pivoting)",
  "Visual identity direction brief (for designers)",
  "Founder positioning statement (LinkedIn / bio-ready)",
]

const OUTCOMES = [
  "Total strategic clarity — you know who you are and where you win.",
  "Sales conversations get shorter because positioning does the heavy lifting.",
  "Your content stops being random and starts compounding.",
  "Future hires, partners, and investors instantly understand the vision.",
]

export default function BrandIntelligencePage() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0a0a", color: "#fff" }}>
      <NavBar />

      <section style={{ padding: "160px clamp(1.5rem,4vw,4rem) 80px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: "10%", right: "5%", width: 600, height: 600, background: `radial-gradient(circle, ${COLOR}, transparent 70%)`, opacity: 0.12, filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 980, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-block", background: `${COLOR}1a`, border: `1px solid ${COLOR}44`, color: COLOR, fontSize: 11, fontFamily: SANS, fontWeight: 700, padding: "6px 18px", borderRadius: 100, letterSpacing: "0.14em", marginBottom: 28 }}>
            FOUNDATION · 5,000€
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 28 }}>
            Brand Intelligence<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>System</span>
          </h1>
          <p style={{ fontFamily: SANS, fontSize: 20, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", maxWidth: 720, marginBottom: 40 }}>
            A 45+ page intelligence report combining McKinsey-level market analysis with cinematic brand architecture. This is not a brand guide — this is your business constitution.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "16px 36px", borderRadius: 100, fontFamily: SANS, fontSize: 15, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em", boxShadow: `0 12px 40px ${GLOW}` }}>
              Get Started — 5,000€
            </a>
            <Link href="/#offers" style={{ display: "inline-block", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)", padding: "16px 32px", borderRadius: 100, fontFamily: SANS, fontSize: 15, fontWeight: 600, textDecoration: "none", letterSpacing: "0.06em" }}>
              ← Compare all systems
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>THE PROBLEM</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 32, lineHeight: 1.2 }}>
            You don&apos;t have a content problem.<br />You have a clarity problem.
          </h2>
          <div style={{ display: "grid", gap: 20, fontFamily: SANS, fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.6)" }}>
            <p>Most founders post inconsistently because they&apos;re not sure what to say. They tweak their bio every two weeks because the positioning never quite lands. They look at competitors and feel both behind and indistinguishable.</p>
            <p>The real issue is upstream: no <em>strategic substrate</em>. No documented market map. No real persona work. No narrative spine. Just instinct and vibes — which works for a while, then stops scaling.</p>
            <p>The Brand Intelligence System is the document that ends that phase of your business.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px clamp(1.5rem,4vw,4rem)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>WHAT&apos;S INSIDE</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>45+ pages. Six chapters.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {INSIDE.map((item, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "32px 28px" }}>
                <div style={{ fontFamily: SERIF, fontSize: 14, color: COLOR, fontWeight: 700, marginBottom: 10, letterSpacing: "0.05em" }}>0{i + 1}</div>
                <h3 style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 700, marginBottom: 12, color: "#fff" }}>{item.title}</h3>
                <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>BONUSES INCLUDED</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 32 }}>Three extras that usually cost extra.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {BONUSES.map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${COLOR}22`, border: `1px solid ${COLOR}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: COLOR, fontFamily: SANS, fontSize: 14, fontWeight: 700 }}>+</div>
                <span style={{ fontFamily: SANS, fontSize: 17, color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px clamp(1.5rem,4vw,4rem)" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>OUTCOMES</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 40, lineHeight: 1.2 }}>What changes 30 days after delivery.</h2>
          <div style={{ display: "grid", gap: 16 }}>
            {OUTCOMES.map((o, i) => (
              <div key={i} style={{ background: `${COLOR}0d`, border: `1px solid ${COLOR}22`, borderRadius: 16, padding: "20px 24px", fontFamily: SANS, fontSize: 16, color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
                ✦ {o}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>WHY THIS PRICE</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 28, lineHeight: 1.2 }}>5,000€ is not the cost. It&apos;s the floor.</h2>
          <p style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.6)", marginBottom: 18 }}>
            A McKinsey junior bills this in 5 days. A branding agency would charge 20–35k for less depth and more buzzwords. We&apos;re positioned where the actual work is happening — at the founder level, with the kind of granularity you&apos;d only otherwise get by hiring full-time.
          </p>
          <p style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.6)" }}>
            Most clients recoup it within the first quarter — usually from a single positioning shift that lets them raise prices or close a deal that was previously stuck.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px clamp(1.5rem,4vw,4rem)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "40px 44px", borderRadius: 24, background: `linear-gradient(135deg, ${COLOR}14, rgba(255,255,255,0.02))`, border: `1px solid ${COLOR}33` }}>
          <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 16 }}>RISK-FREE</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, marginBottom: 16 }}>Two-week revision window.</h2>
          <p style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: 0 }}>
            After delivery, you have 14 days of unlimited revisions. If something doesn&apos;t fit your reality, we rework it until it does. The deliverable is a living document, not a PDF you bury in Drive.
          </p>
        </div>
      </section>

      <section style={{ padding: "120px clamp(1.5rem,4vw,4rem) 140px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 700, height: 700, background: `radial-gradient(circle, ${COLOR}, transparent 70%)`, opacity: 0.08, filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 24 }}>
            Stop guessing.<br />Start with the substrate.
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", marginBottom: 40 }}>
            4-week delivery. 14-day revision window. Payment in full or two installments at checkout.
          </p>
          <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "20px 56px", borderRadius: 100, fontFamily: SANS, fontSize: 17, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em", boxShadow: `0 16px 48px ${GLOW}` }}>
            Get Started — 5,000€
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
