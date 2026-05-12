"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { AnimatedOrb } from "@/components/strawberry/animated-orb"
import { GlassCard } from "@/components/strawberry/glass-card"
import { useScrollReveal } from "@/hooks/use-strawberry"

const SYSTEMS = [
  {
    title: "Brand Intelligence System",
    price: "2,500",
    color: "#e63946",
    items: [
      "Brand Narrative Bible (mission, vision, mythology)",
      "Market Intelligence Report (TAM/SAM/SOM)",
      "Competitor Intelligence (top 10 players)",
      "4 Advanced Persona profiles",
      "90-Day Go-To-Market plan",
      "Content Territory Map (5 pillars, 50 ideas)",
    ],
  },
  {
    title: "Content Domination System",
    price: "5,000",
    color: "#ff1a1a",
    items: [
      "3–5 Premium Video Scripts (cinematic structure)",
      "20 High-Impact Short-Form Scripts",
      "4 Narrative Authority Newsletters",
      "1 Premium Lead Magnet asset",
      "5 Strategic Content Territories defined",
      "Omnichannel distribution system (5 platforms)",
    ],
  },
  {
    title: "Revenue Architecture System",
    price: "2,500",
    color: "#dc2626",
    items: [
      "High-Converting Offer Architecture",
      "Sales Page Copywriting & Design",
      "Email Welcome Sequence (5-7 emails)",
      "Trust-Building Nurture Sequence",
      "Checkout Flow Optimization",
      "Revenue Dashboard & KPI Tracking",
    ],
  },
]

const BONUSES = [
  { title: "Weekly Strategy Syncs", desc: "Direct access to our team for alignment and optimization throughout the engagement." },
  { title: "Priority Execution", desc: "Your project moves to the front of our queue. No waiting, no delays." },
  { title: "Integrated Systems", desc: "Identity feeds Content, Content feeds Revenue. One cohesive ecosystem, not disconnected pieces." },
  { title: "Lifetime Asset Library", desc: "All deliverables remain yours forever. Full ownership, no recurring fees." },
]

export default function EmpireBundlePage() {
  const [ref, vis] = useScrollReveal()
  const [ref2, vis2] = useScrollReveal()
  const [ref3, vis3] = useScrollReveal()
  
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <NavBar />
      
      {/* Hero */}
      <section style={{ minHeight: "85vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 100 }}>
        <AnimatedOrb color="radial-gradient(circle,#e63946,transparent)" size={800} x="50%" y="40%" opacity={0.15} />
        <AnimatedOrb color="radial-gradient(circle,#ff1a1a,transparent)" size={400} x="80%" y="20%" opacity={0.1} />
        <AnimatedOrb color="radial-gradient(circle,#dc2626,transparent)" size={300} x="10%" y="70%" opacity={0.08} />
        
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 clamp(1.5rem,4vw,4rem)", position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "linear-gradient(135deg,rgba(230,57,70,0.2),rgba(255,26,26,0.15))",
            border: "1px solid rgba(230,57,70,0.4)",
            borderRadius: 100, padding: "8px 20px", marginBottom: 40,
          }}>
            <span style={{ color: "#e63946", fontSize: 12, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.12em", fontWeight: 700 }}>SAVE 2,500 — LIMITED OFFER</span>
          </div>
          
          <h1 style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(3rem,8vw,6.5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            color: "#fff",
            marginBottom: 32,
            letterSpacing: "-0.03em",
          }}>
            The{" "}
            <span style={{ background: "linear-gradient(135deg,#e63946,#ff1a1a,#dc2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Empire Bundle
            </span>
          </h1>
          
          <p style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: "clamp(1.1rem,2vw,1.35rem)",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7,
            maxWidth: 700,
            margin: "0 auto 48px",
          }}>
            All three systems integrated simultaneously. Identity feeds Content, Content feeds Revenue. One vision, one partner, one empire.
          </p>
          
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, marginBottom: 48, flexWrap: "wrap" }}>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 24, textDecoration: "line-through" }}>10,000</div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(4rem,10vw,6rem)", color: "#e63946", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>
              7,500
            </div>
          </div>
          
          <a href="#cta" style={{
            display: "inline-block",
            background: "linear-gradient(135deg,#e63946,#ff1a1a)",
            color: "#fff", padding: "20px 56px", borderRadius: 100,
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, fontWeight: 700,
            textDecoration: "none", letterSpacing: "0.04em",
            boxShadow: "0 12px 48px rgba(230,57,70,0.4)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}>
            Claim Your Empire Bundle
          </a>
        </div>
      </section>

      {/* What's Included */}
      <section ref={ref} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ fontSize: 11, color: "#e63946", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>WHAT&apos;S INCLUDED</div>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 700, marginBottom: 16 }}>
              Three Complete Systems. One Price.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SYSTEMS.map((system, i) => (
              <GlassCard key={i} style={{ padding: "40px 32px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg,${system.color},transparent)` }} />
                <div style={{ 
                  display: "inline-block",
                  background: `${system.color}22`, border: `1px solid ${system.color}44`,
                  color: system.color, fontSize: 11, fontWeight: 700,
                  padding: "6px 14px", borderRadius: 100, marginBottom: 20,
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.1em",
                }}>
                  VALUE: {system.price}
                </div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 24, lineHeight: 1.2 }}>{system.title}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {system.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{ width: 18, height: 18, borderRadius: "50%", background: `${system.color}22`, border: `1px solid ${system.color}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: system.color }} />
                      </div>
                      <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section ref={ref2} style={{ padding: "100px clamp(1.5rem,4vw,4rem)", opacity: vis2 ? 1 : 0, transform: vis2 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, color: "#dc2626", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>EMPIRE BUNDLE EXCLUSIVES</div>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 700 }}>
              Bonuses Only For The Bundle
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BONUSES.map((bonus, i) => (
              <div key={i} style={{ padding: "32px 36px", borderRadius: 20, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(230,57,70,0.15)", border: "1px solid rgba(230,57,70,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#e63946", fontSize: 18 }}>&#10003;</span>
                </div>
                <div>
                  <h4 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{bonus.title}</h4>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{bonus.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" ref={ref3} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d", opacity: vis3 ? 1 : 0, transform: vis3 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{
            borderRadius: 36, padding: "80px clamp(2rem,6vw,100px)",
            background: "linear-gradient(135deg,rgba(230,57,70,0.15),rgba(255,26,26,0.1),rgba(220,38,38,0.08))",
            border: "2px solid rgba(230,57,70,0.3)",
            boxShadow: "0 0 120px rgba(230,57,70,0.15)",
            textAlign: "center",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%,rgba(230,57,70,0.1),transparent 70%)", pointerEvents: "none" }} />
            
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,5vw,3.5rem)", color: "#fff", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 20, position: "relative" }}>
              Ready to Build Your Empire?
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 18, maxWidth: 500, margin: "0 auto 20px", lineHeight: 1.7, position: "relative" }}>
              Join the founders, creators, and brands who stopped blending in and started dominating.
            </p>
            
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 40, flexWrap: "wrap", position: "relative" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 20, textDecoration: "line-through" }}>10,000</span>
              <span style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(3rem,8vw,4.5rem)", color: "#e63946", fontWeight: 700, letterSpacing: "-0.03em" }}>7,500</span>
            </div>
            
            <Link href="/#contact" style={{
              display: "inline-block",
              background: "linear-gradient(135deg,#e63946,#ff1a1a)",
              color: "#fff", padding: "20px 56px", borderRadius: 100,
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, fontWeight: 700,
              textDecoration: "none", letterSpacing: "0.04em",
              boxShadow: "0 12px 48px rgba(230,57,70,0.4)",
              position: "relative",
            }}>
              Book Your Strategy Call
            </Link>
            
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.35)", fontSize: 14, marginTop: 24, position: "relative" }}>
              Limited spots available. We work with a select number of clients each quarter.
            </p>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section style={{ padding: "60px clamp(1.5rem,4vw,4rem)", textAlign: "center" }}>
        <Link href="/" style={{
          color: "rgba(255,255,255,0.5)", fontSize: 15,
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", textDecoration: "none",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
          paddingBottom: 2, transition: "color 0.2s",
        }}>
          ← Back to Home
        </Link>
      </section>

      <Footer />
    </main>
  )
}
