"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"

const COLOR = "#ff1a1a"
const GLOW = "rgba(255,26,26,0.35)"
const STRIPE_URL = "https://buy.stripe.com/00wcMY4EcfDe3g28buf7i03"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"

const INSIDE = [
  { title: "3–5 Premium Video Scripts", desc: "Cinematic structure, hook engineering, retention beats baked in. Built to be filmed by you or your editor — no improvisation required." },
  { title: "20 High-Impact Short-Form Scripts", desc: "Reels, Shorts, TikTok-native. Each one architected around a single conversion idea — not noise, not trends, signal." },
  { title: "4 Authority Newsletters", desc: "Long-form narrative emails that build belief over weeks. The kind subscribers screenshot and forward." },
  { title: "1 Premium Lead Magnet", desc: "A signature asset — guide, framework, or playbook — that captures qualified attention and pre-frames every sales conversation." },
  { title: "5 Content Territories", desc: "Strategic pillars defined and owned. Each territory has a thesis, an angle, a tone, and 10 angles of attack." },
  { title: "Omnichannel Distribution System", desc: "How the same idea gets reformatted across YouTube, LinkedIn, Instagram, email, and X — without diluting the message." },
]

const BONUSES = [
  "Hook Library (100 tested patterns)",
  "Editing brief template for your video editor",
  "Posting cadence calendar (90 days mapped)",
]

const OUTCOMES = [
  "Monthly content shipped — without creative friction.",
  "Inbound DMs and replies start mentioning specific lines from your work.",
  "Sales calls become shorter because prospects arrive pre-sold.",
  "You stop chasing trends. Trends start chasing your category.",
]

export default function ContentDominationPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0a0a", color: "#fff" }}>
      <NavBar />

      <section style={{ padding: "160px clamp(1.5rem,4vw,4rem) 80px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: "10%", right: "5%", width: 600, height: 600, background: `radial-gradient(circle, ${COLOR}, transparent 70%)`, opacity: 0.12, filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 980, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-block", background: `${COLOR}1a`, border: `1px solid ${COLOR}44`, color: COLOR, fontSize: 11, fontFamily: SANS, fontWeight: 700, padding: "6px 18px", borderRadius: 100, letterSpacing: "0.14em", marginBottom: 28 }}>
            AUTHORITY · 7,500€ / MONTH
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 28 }}>
            Content Domination<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #e63946)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>System</span>
          </h1>
          <p style={{ fontFamily: SANS, fontSize: 20, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", maxWidth: 720, marginBottom: 40 }}>
            A monthly cinematic content engine designed to turn attention into authority. Not content creation — narrative infrastructure that compounds month after month.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #e63946)`, color: "#fff", padding: "16px 36px", borderRadius: 100, fontFamily: SANS, fontSize: 15, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em", boxShadow: `0 12px 40px ${GLOW}` }}>
              Get Started — 7,500€ / month
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
            Posting more isn&apos;t the answer.<br />Posting with architecture is.
          </h2>
          <div style={{ display: "grid", gap: 20, fontFamily: SANS, fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.6)" }}>
            <p>Most founders are stuck in a content loop they can&apos;t scale: ideas that don&apos;t connect, posts that don&apos;t convert, formats they copy because everyone else does. Output without compounding.</p>
            <p>Real authority isn&apos;t built by volume. It&apos;s built by <em>narrative coherence</em> — every asset reinforcing the same worldview, the same vocabulary, the same gravitational pull. Cinema-grade structure, not creator-grade improvisation.</p>
            <p>Content Domination is the system that replaces guessing with infrastructure.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px clamp(1.5rem,4vw,4rem)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>WHAT&apos;S INSIDE — EVERY MONTH</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>A narrative engine that compounds.</h2>
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
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 40, lineHeight: 1.2 }}>What changes 90 days in.</h2>
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
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 28, lineHeight: 1.2 }}>7,500€/month for compounding output.</h2>
          <p style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.6)", marginBottom: 18 }}>
            A senior in-house content lead with the skill to ship at this level costs 8–12k/month before benefits — and still needs strategy, copywriting, and editing support around them. Specialist agencies charge 15–25k/month for less narrative depth and more recycled trends.
          </p>
          <p style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.6)" }}>
            Content Domination is built for founders who&apos;ve outgrown DIY but aren&apos;t ready to staff up. One subscription, one operating system, output that keeps appreciating.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px clamp(1.5rem,4vw,4rem)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "40px 44px", borderRadius: 24, background: `linear-gradient(135deg, ${COLOR}14, rgba(255,255,255,0.02))`, border: `1px solid ${COLOR}33` }}>
          <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 16 }}>RISK-FREE</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, marginBottom: 16 }}>Monthly. Pause or cancel anytime.</h2>
          <p style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: 0 }}>
            No annual lock-in. Every month includes unlimited revisions on each asset until it&apos;s production-ready. If the system isn&apos;t generating real traction by month three, we&apos;ll have an honest conversation about whether it&apos;s the right fit — and you can step out without friction.
          </p>
        </div>
      </section>

      <section style={{ padding: "120px clamp(1.5rem,4vw,4rem) 140px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 700, height: 700, background: `radial-gradient(circle, ${COLOR}, transparent 70%)`, opacity: 0.08, filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 24 }}>
            Stop creating.<br />Start compounding.
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", marginBottom: 40 }}>
            Monthly subscription. Pause or cancel anytime. Onboarding starts within 7 days of checkout.
          </p>
          <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #e63946)`, color: "#fff", padding: "20px 56px", borderRadius: 100, fontFamily: SANS, fontSize: 17, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em", boxShadow: `0 16px 48px ${GLOW}` }}>
            Get Started — 7,500€ / month
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
