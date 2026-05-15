"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"

const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.4)"
const STRIPE_URL = "https://buy.stripe.com/4gM5kw9YwbmYg2O9fyf7i09"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"

const PILLARS = [
  {
    name: "Brand Intelligence",
    badge: "FOUNDATION",
    value: "5,000€",
    href: "/brand-intelligence",
    desc: "The 45+ page intelligence report. Market map, persona work, narrative spine, 90-day GTM plan. The strategic substrate everything else flows from.",
  },
  {
    name: "Content Domination",
    badge: "AUTHORITY",
    value: "22,500€",
    valueNote: "(3 months included)",
    href: "/content-domination",
    desc: "Three months of cinematic content engineering. Long-form scripts, short-form architecture, newsletters, lead magnets, distribution across every channel.",
  },
  {
    name: "Revenue Architecture",
    badge: "CONVERSION",
    value: "6,000€",
    href: "/revenue-architecture",
    desc: "The full conversion infrastructure. Offer engineering, sales page, email sequences, checkout optimization, revenue dashboard. The machine that closes.",
  },
]

const ADVANTAGES = [
  { title: "Strategic coherence", desc: "Three systems built in parallel, not in isolation. Every piece references the same narrative, the same persona, the same positioning — because they were architected together." },
  { title: "15,500€ saved", desc: "Booking Brand Intelligence + 3 months of Content + Revenue Architecture separately costs 33,500€. The bundle is 18,000€. The discount reflects compounded efficiency, not lower quality." },
  { title: "Priority delivery", desc: "Bundle clients move to the front of the production queue. Onboarding starts within 5 days. Phases overlap where it makes sense, compressing total timeline from 22 to 16 weeks." },
  { title: "One operator, end-to-end", desc: "You work with the same lead across all three systems. No handoffs, no re-explaining context, no dilution. The decisions you make in week one show up exactly as intended in week fifteen." },
]

const PHASES = [
  { weeks: "Weeks 1–4", phase: "Foundation", desc: "Brand Intelligence is built first. Market work, persona work, narrative spine. Everything else gets built on top of this." },
  { weeks: "Weeks 3–14", phase: "Authority", desc: "Content Domination begins in parallel from week 3. Three full months of compounding output, starting before the foundation is even closed." },
  { weeks: "Weeks 10–16", phase: "Conversion", desc: "Revenue Architecture closes the system. Offer engineering, sales page, sequences, dashboard. By the time it ships, you have content driving traffic into it." },
]

export default function EmpireBundlePage() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0a0a", color: "#fff" }}>
      <NavBar />

      <section style={{ padding: "160px clamp(1.5rem,4vw,4rem) 80px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: "5%", right: "-10%", width: 800, height: 800, background: `radial-gradient(circle, ${COLOR}, transparent 70%)`, opacity: 0.15, filter: "blur(80px)", pointerEvents: "none" }} />
        <div aria-hidden style={{ position: "absolute", bottom: "0%", left: "-10%", width: 600, height: 600, background: `radial-gradient(circle, #ff1a1a, transparent 70%)`, opacity: 0.1, filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
            <div style={{ display: "inline-block", background: `${COLOR}1a`, border: `1px solid ${COLOR}44`, color: COLOR, fontSize: 11, fontFamily: SANS, fontWeight: 700, padding: "6px 18px", borderRadius: 100, letterSpacing: "0.14em" }}>
              FLAGSHIP · 18,000€
            </div>
            <div style={{ display: "inline-block", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 11, fontFamily: SANS, fontWeight: 700, padding: "6px 18px", borderRadius: 100, letterSpacing: "0.14em" }}>
              SAVE 15,500€
            </div>
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.8rem, 7vw, 5.8rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 32 }}>
            The Empire<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Bundle</span>
          </h1>
          <p style={{ fontFamily: SANS, fontSize: 20, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", maxWidth: 760, marginBottom: 32 }}>
            All three systems. One operator. Sixteen weeks. The complete transformation — from positioning, to authority, to revenue — built as a single architecture instead of three disconnected projects.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 18, alignItems: "center", marginBottom: 40 }}>
            <div style={{ fontFamily: SERIF, fontSize: 24, color: "rgba(255,255,255,0.4)", textDecoration: "line-through" }}>33,500€</div>
            <div style={{ fontFamily: SERIF, fontSize: 36, fontWeight: 700, color: "#fff" }}>18,000€</div>
            <div style={{ fontFamily: SANS, fontSize: 13, color: COLOR, fontWeight: 700, letterSpacing: "0.08em" }}>SAVE 15,500€</div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "18px 40px", borderRadius: 100, fontFamily: SANS, fontSize: 16, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em", boxShadow: `0 16px 48px ${GLOW}` }}>
              Get the Empire Bundle — 18,000€
            </a>
            <Link href="/#offers" style={{ display: "inline-block", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)", padding: "18px 32px", borderRadius: 100, fontFamily: SANS, fontSize: 15, fontWeight: 600, textDecoration: "none", letterSpacing: "0.06em" }}>
              Compare all systems
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>WHAT&apos;S INSIDE</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>Three systems. One architecture.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: 24 }}>
            {PILLARS.map((p, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${COLOR}22`, borderRadius: 24, padding: "36px 32px", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 10, color: COLOR, fontFamily: SANS, letterSpacing: "0.16em", fontWeight: 700, marginBottom: 14 }}>{p.badge}</div>
                <h3 style={{ fontFamily: SERIF, fontSize: 26, fontWeight: 700, marginBottom: 12, color: "#fff" }}>{p.name}</h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 18 }}>
                  <div style={{ fontFamily: SERIF, fontSize: 22, color: "rgba(255,255,255,0.5)", textDecoration: "line-through" }}>{p.value}</div>
                  {p.valueNote && <div style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{p.valueNote}</div>}
                </div>
                <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", flex: 1, marginBottom: 22 }}>{p.desc}</p>
                <Link href={p.href} style={{ fontFamily: SANS, fontSize: 13, color: COLOR, textDecoration: "none", fontWeight: 600, letterSpacing: "0.06em" }}>
                  See details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px clamp(1.5rem,4vw,4rem)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>WHY THE BUNDLE</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 56, lineHeight: 1.2 }}>
            Booked separately, this is three projects.<br />Booked together, it&apos;s a transformation.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {ADVANTAGES.map((a, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "30px 28px" }}>
                <div style={{ fontFamily: SERIF, fontSize: 14, color: COLOR, fontWeight: 700, marginBottom: 10, letterSpacing: "0.05em" }}>0{i + 1}</div>
                <h3 style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 700, marginBottom: 12, color: "#fff" }}>{a.title}</h3>
                <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>TIMELINE</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16, lineHeight: 1.2 }}>16 weeks. Three overlapping phases.</h2>
          <p style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", marginBottom: 48, maxWidth: 720 }}>
            The phases overlap on purpose. We don&apos;t finish one system and then start the next — we begin layering so the output of each phase feeds the next while you&apos;re still inside it.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {PHASES.map((p, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 24, padding: "26px 28px", background: "rgba(255,255,255,0.03)", border: `1px solid ${COLOR}22`, borderRadius: 18, alignItems: "center" }}>
                <div style={{ fontFamily: SANS, fontSize: 13, color: COLOR, fontWeight: 700, letterSpacing: "0.08em" }}>{p.weeks}</div>
                <div>
                  <div style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 700, marginBottom: 6, color: "#fff" }}>{p.phase}</div>
                  <div style={{ fontFamily: SANS, fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px clamp(1.5rem,4vw,4rem)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "40px 44px", borderRadius: 24, background: `linear-gradient(135deg, ${COLOR}14, rgba(255,255,255,0.02))`, border: `1px solid ${COLOR}33` }}>
          <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 16 }}>RISK-FREE</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, marginBottom: 16 }}>Revisions on every system. Payment in installments.</h2>
          <p style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: 0 }}>
            Each system inside the bundle keeps its revision window. Total commitment is staggered: pay in full at checkout for the full discount, or split across three installments aligned with each phase. The work doesn&apos;t leave the door until it&apos;s right.
          </p>
        </div>
      </section>

      <section style={{ padding: "120px clamp(1.5rem,4vw,4rem) 140px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 900, height: 900, background: `radial-gradient(circle, ${COLOR}, transparent 70%)`, opacity: 0.1, filter: "blur(100px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 5vw, 3.8rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 24 }}>
            Build the empire,<br />not three separate projects.
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", marginBottom: 40 }}>
            16-week delivery. Three overlapping phases. Payment in full or three installments. Onboarding starts within 5 days of checkout.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "20px 56px", borderRadius: 100, fontFamily: SANS, fontSize: 17, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em", boxShadow: `0 16px 48px ${GLOW}` }}>
              Get the Empire Bundle — 18,000€
            </a>
            <Link href="/#offers" style={{ display: "inline-block", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)", padding: "20px 40px", borderRadius: 100, fontFamily: SANS, fontSize: 16, fontWeight: 600, textDecoration: "none", letterSpacing: "0.06em" }}>
              Compare systems
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
