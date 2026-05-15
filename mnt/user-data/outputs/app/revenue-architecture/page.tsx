"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"

const COLOR = "#dc2626"
const GLOW = "rgba(220,38,38,0.35)"
const STRIPE_URL = "https://buy.stripe.com/bJe8wIeeMfDe8Am4Zif7i04"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"

const INSIDE = [
  { title: "High-Converting Offer Architecture", desc: "Your offer rewritten as a decision, not a description. Pricing structure, anchoring, bonus stack — engineered to make the buy feel obvious." },
  { title: "Sales Page Copywriting & Design", desc: "One long-form sales page, fully written and structured for design handoff. The page that does the closing while you sleep." },
  { title: "Email Welcome Sequence", desc: "5–7 emails that introduce, frame, and convert. Built around your narrative — not a generic 'nice to meet you' drip." },
  { title: "Trust-Building Nurture Sequence", desc: "Ongoing email cadence that keeps cold leads warm and warm leads buying. Stories, proofs, soft asks." },
  { title: "Checkout Flow Optimization", desc: "Audit and rework of the checkout step itself — order bump, payment plan presentation, confirmation page upsell." },
  { title: "Revenue Dashboard & KPIs", desc: "A single tracker for the metrics that actually matter: visitor-to-buyer rate, AOV, refund rate, LTV. No vanity numbers." },
]

const BONUSES = [
  "Refund handling script (preserve relationships, not just MRR)",
  "Upsell sequence template (1 product → 3 paths)",
  "Pricing test framework (when and how to raise prices)",
]

const OUTCOMES = [
  "Your sales page does the work. Conversations get shorter or disappear entirely.",
  "Revenue stops being lumpy. The funnel becomes a reliable system.",
  "You can finally see — in real numbers — what each part of the customer journey is worth.",
  "Scaling ad spend or partnerships becomes a calculation, not a gamble.",
]

export default function RevenueArchitecturePage() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0a0a", color: "#fff" }}>
      <NavBar />

      <section style={{ padding: "160px clamp(1.5rem,4vw,4rem) 80px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: "10%", right: "5%", width: 600, height: 600, background: `radial-gradient(circle, ${COLOR}, transparent 70%)`, opacity: 0.12, filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 980, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-block", background: `${COLOR}1a`, border: `1px solid ${COLOR}44`, color: COLOR, fontSize: 11, fontFamily: SANS, fontWeight: 700, padding: "6px 18px", borderRadius: 100, letterSpacing: "0.14em", marginBottom: 28 }}>
            REVENUE · 6,000€
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 28 }}>
            Revenue Architecture<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>System</span>
          </h1>
          <p style={{ fontFamily: SANS, fontSize: 20, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", maxWidth: 720, marginBottom: 40 }}>
            The complete conversion infrastructure that turns your audience into customers. Funnels, offers, and sales systems engineered for maximum revenue.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "16px 36px", borderRadius: 100, fontFamily: SANS, fontSize: 15, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em", boxShadow: `0 12px 40px ${GLOW}` }}>
              Get Started — 6,000€
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
            You have an audience.<br />You don&apos;t have a machine.
          </h2>
          <div style={{ display: "grid", gap: 20, fontFamily: SANS, fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.6)" }}>
            <p>Most founders with traction hit the same wall: attention without architecture. A great audience that doesn&apos;t convert at the rate it should. Launches that feel like coin flips. A funnel that&apos;s actually just a landing page and hope.</p>
            <p>The fix isn&apos;t more traffic. It&apos;s <em>conversion infrastructure</em> — an offer engineered to feel inevitable, a sales page that closes without you, sequences that warm cold leads while you sleep, a checkout that doesn&apos;t leak money.</p>
            <p>Revenue Architecture is the system that turns audience into revenue — predictably.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px clamp(1.5rem,4vw,4rem)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>WHAT&apos;S INSIDE</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>Six conversion pillars. One system.</h2>
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
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 40, lineHeight: 1.2 }}>What changes 60 days after delivery.</h2>
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
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 28, lineHeight: 1.2 }}>6,000€ pays itself back in the first launch.</h2>
          <p style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.6)", marginBottom: 18 }}>
            A senior conversion copywriter charges 8–15k for a single sales page. A full funnel build with a respected agency starts at 20–40k. We&apos;re positioned at the founder level — direct work with the operator, no account managers between you and the deliverable.
          </p>
          <p style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.6)" }}>
            Most clients recoup the investment in their first proper launch — sometimes from a single offer restructure that doubles conversion on traffic they were already paying for.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px clamp(1.5rem,4vw,4rem)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "40px 44px", borderRadius: 24, background: `linear-gradient(135deg, ${COLOR}14, rgba(255,255,255,0.02))`, border: `1px solid ${COLOR}33` }}>
          <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 16 }}>RISK-FREE</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, marginBottom: 16 }}>Two-week revision window.</h2>
          <p style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: 0 }}>
            After delivery, you have 14 days of unlimited revisions on every asset. Sales pages, emails, dashboards — we rework until the copy lands and the numbers move.
          </p>
        </div>
      </section>

      <section style={{ padding: "120px clamp(1.5rem,4vw,4rem) 140px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 700, height: 700, background: `radial-gradient(circle, ${COLOR}, transparent 70%)`, opacity: 0.08, filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 24 }}>
            Turn the audience<br />into the machine.
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", marginBottom: 40 }}>
            6-week delivery. 14-day revision windows. Payment in full or two installments at checkout.
          </p>
          <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "20px 56px", borderRadius: 100, fontFamily: SANS, fontSize: 17, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em", boxShadow: `0 16px 48px ${GLOW}` }}>
            Get Started — 6,000€
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
