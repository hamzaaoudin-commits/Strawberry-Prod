"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { AnimatedOrb } from "@/components/strawberry/animated-orb"
import { GlassCard } from "@/components/strawberry/glass-card"
import { useScrollReveal } from "@/hooks/use-strawberry"

const USP = [
  { title: "Cinematic Vision", desc: "We think in images, not just words. Every script is delivered with staging intention, rhythm guidance, and visual direction." },
  { title: "Retention Engineering", desc: "For digital platforms (YouTube, TikTok, Shorts), we apply psychological structures that keep viewers watching until the very last second." },
  { title: "Multidisciplinary Expertise", desc: "From 30-second emotional ads to feature-length treatments, we master narrative arcs in all their forms." },
  { title: "Agility & Technology", desc: "We leverage cutting-edge tools (AI-assisted storytelling, data analysis) to deliver production-studio quality at startup speed." },
]

const EXPERTISE = [
  { n: "01", title: "Fiction & Cinema", desc: "Original screenplays, treatments, and script doctoring." },
  { n: "02", title: "Brand Content & Advertising", desc: "Narrative-driven ads that don't feel like ads." },
  { n: "03", title: "Digital Media", desc: "High-retention scripts for creators (YouTube, TikTok, Shorts)." },
  { n: "04", title: "Strategy", desc: "Personal brand positioning and influence architecture." },
]

export default function AboutPage() {
  const [ref, vis] = useScrollReveal()
  const [ref2, vis2] = useScrollReveal()
  const [ref3, vis3] = useScrollReveal()
  
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <NavBar />
      
      {/* Hero */}
      <section style={{ minHeight: "70vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 120 }}>
        <AnimatedOrb color="radial-gradient(circle,#e63946,transparent)" size={600} x="-5%" y="20%" opacity={0.15} />
        <AnimatedOrb color="radial-gradient(circle,#ff1a1a,transparent)" size={400} x="70%" y="60%" opacity={0.1} />
        
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1.5rem,4vw,4rem)", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(230,57,70,0.12)", border: "1px solid rgba(230,57,70,0.35)",
            borderRadius: 100, padding: "6px 16px", marginBottom: 32,
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#e63946", boxShadow: "0 0 8px #e63946" }} />
            <span style={{ color: "#e63946", fontSize: 12, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.12em", fontWeight: 600 }}>WHO WE ARE</span>
          </div>
          
          <h1 style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(2.5rem,6vw,5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#fff",
            marginBottom: 32,
            letterSpacing: "-0.03em",
            maxWidth: 800,
          }}>
            Cinematic Storytelling &{" "}
            <span style={{ background: "linear-gradient(135deg,#e63946,#ff1a1a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Narrative Architecture
            </span>
          </h1>
          
          <p style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: 20,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7,
            maxWidth: 700,
            marginBottom: 24,
            fontStyle: "italic",
          }}>
            {'"We don\'t just write scripts. We build immersive experiences that capture attention and trigger emotion."'}
          </p>
        </div>
      </section>

      {/* Positioning */}
      <section ref={ref} style={{ padding: "100px clamp(1.5rem,4vw,4rem)", position: "relative", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 700, marginBottom: 32, lineHeight: 1.2 }}>
                A Narrative Direction Studio
              </h2>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 17, lineHeight: 1.9, marginBottom: 24 }}>
                Strawberry Production is a narrative creation studio specializing in the fusion of <strong style={{ color: "rgba(255,255,255,0.85)" }}>cinematic aesthetics</strong> and <strong style={{ color: "rgba(255,255,255,0.85)" }}>marketing performance</strong>.
              </p>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 17, lineHeight: 1.9, marginBottom: 24 }}>
                Built on the belief that every second of content must be an investment, we help filmmakers, brands, and content creators transform vague ideas into powerful, visual, and unforgettable stories.
              </p>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 17, lineHeight: 1.9, marginBottom: 32 }}>
                Our signature? <strong style={{ color: "#e63946" }}>Neuro-Cinema</strong> — the art of using big-screen storytelling codes to maximize retention and conversion.
              </p>
              
              <div style={{ padding: "28px 36px", borderRadius: 20, background: "rgba(230,57,70,0.08)", border: "1px solid rgba(230,57,70,0.2)" }}>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "#e63946", fontSize: 13, letterSpacing: "0.12em", fontWeight: 600, marginBottom: 12 }}>LABEL DE HAUTE-COUTURE NARRATIVE</p>
                <p style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "rgba(255,255,255,0.9)", fontSize: 20, fontStyle: "italic", lineHeight: 1.5, margin: 0 }}>
                  On ne vend pas le processus mais la transformation.
                </p>
              </div>
            </div>
            
            <div>
              <div style={{ padding: "40px", borderRadius: 24, background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.09)" }}>
                <div style={{ fontSize: 11, color: "#e63946", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 24 }}>OUR POSITIONING</div>
                <p style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 28, color: "#fff", fontWeight: 700, lineHeight: 1.3, marginBottom: 20 }}>
                  {'"We don\'t write content. We design narrative perception systems."'}
                </p>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
                  A narrative direction studio designing perception systems, cinematic identities, and cultural presence in a post-content world.
                </p>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.8 }}>
                  Pas {'"écrire des histoires"'} mais : <strong style={{ color: "rgba(255,255,255,0.85)" }}>créer une signature narrative reconnaissable entre 1000 autres</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Strawberry */}
      <section ref={ref2} style={{ padding: "100px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d", opacity: vis2 ? 1 : 0, transform: vis2 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, color: "#e63946", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>WHY STRAWBERRY?</div>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 700, marginBottom: 16 }}>
              Our Unique Selling Points
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {USP.map((item, i) => (
              <GlassCard key={i} style={{ padding: "40px 36px" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(230,57,70,0.15)", border: "1px solid rgba(230,57,70,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                  <span style={{ color: "#e63946", fontSize: 20, fontWeight: 700, fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 16 }}>{item.title}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section ref={ref3} style={{ padding: "100px clamp(1.5rem,4vw,4rem)", position: "relative", opacity: vis3 ? 1 : 0, transform: vis3 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <AnimatedOrb color="radial-gradient(circle,#dc2626,transparent)" size={400} x="80%" y="50%" opacity={0.08} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ fontSize: 11, color: "#dc2626", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>EXPERTISE</div>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 700, marginBottom: 16 }}>
              Our Areas of Expertise
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EXPERTISE.map((item, i) => (
              <div key={i} style={{ padding: "32px 36px", borderRadius: 20, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: 24, alignItems: "flex-start" }}>
                <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: "rgba(230,57,70,0.3)", lineHeight: 1 }}>{item.n}</div>
                <div>
                  <h4 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{item.title}</h4>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section style={{ padding: "100px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#e63946", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 32 }}>THE STRAWBERRY PROMISE</div>
          <p style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#fff", fontWeight: 500, lineHeight: 1.6, fontStyle: "italic", marginBottom: 48 }}>
            {'"Collaborating with Strawberry Production means ensuring your vision will not only be seen — but felt. We are the guardians of your story."'}
          </p>
          <Link href="/#offers" style={{
            display: "inline-block",
            background: "linear-gradient(135deg,#e63946,#ff1a1a)",
            color: "#fff", padding: "18px 44px", borderRadius: 100,
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 700,
            textDecoration: "none", letterSpacing: "0.06em",
            boxShadow: "0 8px 32px rgba(230,57,70,0.4)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}>
            See Our Offers
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
