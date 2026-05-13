"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { AnimatedOrb } from "@/components/strawberry/animated-orb"
import { GlassCard } from "@/components/strawberry/glass-card"
import { useScrollReveal } from "@/hooks/use-strawberry"

// The interactive manifesto reader is a standalone HTML file in /public.
// It opens in a new tab so the immersive design stays intact (its own fonts,
// nav, animations, letterbox, grain — preserved verbatim).
const READER_PATH = "/manifesto-reader.html"

const MANIFESTO_POINTS = [
  {
    title: "Break Indifference",
    content: "In a world of infinite scroll, being good is not enough. You must be impossible to ignore. We engineer narratives that command attention — not request it.",
  },
  {
    title: "Perception is Reality",
    content: "Your audience doesn't buy your product. They buy the story they tell themselves about your product. We architect that story from the ground up.",
  },
  {
    title: "Cinematic Precision",
    content: "Every frame matters. Every word carries weight. We apply big-screen storytelling codes to create content that triggers emotion and maximizes retention.",
  },
  {
    title: "The Aesthetic Edge",
    content: "Every project deserves a distinct aura — a 'Main Character Energy' that commands respect. We don't do average. We don't do forgettable.",
  },
  {
    title: "Neuro-Cinema",
    content: "The fusion of neuroscience and cinematic craft. We use psychological structures proven to capture attention, trigger emotion, and drive action.",
  },
  {
    title: "Empire Building",
    content: "We don't fix your marketing. We redesign how the world perceives you. One unified vision. One cohesive narrative. One dominant presence.",
  },
]

export default function ManifestoPage() {
  const [ref, vis] = useScrollReveal()
  const [ref2, vis2] = useScrollReveal()

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <NavBar />

      {/* Hero */}
      <section style={{ minHeight: "80vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 100 }}>
        <AnimatedOrb color="radial-gradient(circle,#e63946,transparent)" size={700} x="50%" y="30%" opacity={0.12} />
        <AnimatedOrb color="radial-gradient(circle,#ff1a1a,transparent)" size={400} x="10%" y="70%" opacity={0.08} />

        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%,black 20%,transparent 100%)",
        }} />

        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 clamp(1.5rem,4vw,4rem)", position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(230,57,70,0.12)", border: "1px solid rgba(230,57,70,0.35)",
            borderRadius: 100, padding: "8px 20px", marginBottom: 40,
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#e63946", boxShadow: "0 0 8px #e63946" }} />
            <span style={{ color: "#e63946", fontSize: 12, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 600 }}>FREE · INTERACTIVE READER</span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(3rem,8vw,6rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            color: "#fff",
            marginBottom: 32,
            letterSpacing: "-0.03em",
          }}>
            The Neuro Cinema{" "}
            <span style={{ background: "linear-gradient(135deg,#e63946,#ff1a1a,#dc2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Manifesto
            </span>
          </h1>

          <p style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: "clamp(1.1rem,2vw,1.4rem)",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7,
            maxWidth: 700,
            margin: "0 auto 48px",
          }}>
            A nine-act framework for engineering narratives that capture attention, trigger emotion, and transform audiences into believers.
          </p>

          <a
            href={READER_PATH}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              background: "linear-gradient(135deg,#e63946,#ff1a1a)",
              color: "#fff", padding: "20px 52px", borderRadius: 100,
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, fontWeight: 700,
              textDecoration: "none", letterSpacing: "0.04em",
              boxShadow: "0 12px 48px rgba(230,57,70,0.4)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
          >
            Open The Manifesto <span style={{ fontSize: 18 }}>→</span>
          </a>

          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.3)", fontSize: 13, marginTop: 20, letterSpacing: "0.04em" }}>
            Opens in a new tab · 9 acts · Best viewed on desktop
          </p>
        </div>
      </section>

      {/* What's Inside */}
      <section ref={ref} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ fontSize: 11, color: "#e63946", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>WHAT YOU&apos;LL DISCOVER</div>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 700, marginBottom: 16 }}>
              The Core Principles
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.45)", fontSize: 17, maxWidth: 560, margin: "0 auto" }}>
              Six foundational beliefs that guide every narrative we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {MANIFESTO_POINTS.map((point, i) => (
              <GlassCard key={i} style={{ padding: "40px 32px" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: "rgba(230,57,70,0.15)", border: "1px solid rgba(230,57,70,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 24,
                }}>
                  <span style={{ color: "#e63946", fontSize: 18, fontWeight: 700, fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 16, lineHeight: 1.3 }}>{point.title}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.8, margin: 0 }}>{point.content}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Big CTA to open reader */}
      <section ref={ref2} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", position: "relative", opacity: vis2 ? 1 : 0, transform: vis2 ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <AnimatedOrb color="radial-gradient(circle,#e63946,transparent)" size={600} x="50%" y="50%" opacity={0.1} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{
            borderRadius: 36, padding: "80px clamp(2rem,6vw,80px)",
            background: "linear-gradient(135deg,rgba(230,57,70,0.15),rgba(255,26,26,0.1),rgba(220,38,38,0.08))",
            border: "2px solid rgba(230,57,70,0.3)",
            boxShadow: "0 0 120px rgba(230,57,70,0.15)",
            textAlign: "center",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%,rgba(230,57,70,0.1),transparent 70%)", pointerEvents: "none" }} />

            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "#e63946", fontSize: 11, letterSpacing: "0.18em", fontWeight: 700, marginBottom: 20, position: "relative" }}>
              — STRAWBERRY · PRODUCTION —
            </div>

            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#fff", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 32, fontStyle: "italic", position: "relative" }}>
              &ldquo;We don&apos;t write{" "}
              <span style={{ textDecoration: "line-through", textDecorationColor: "#e63946", opacity: 0.6, fontStyle: "normal" }}>content</span>.
              <br />
              We design how you are{" "}
              <span style={{ color: "#e63946", fontWeight: 400 }}>remembered</span>.&rdquo;
            </h2>

            <a
              href={READER_PATH}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 12, marginTop: 16,
                background: "linear-gradient(135deg,#e63946,#ff1a1a)",
                color: "#fff", padding: "20px 56px", borderRadius: 100,
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, fontWeight: 700,
                textDecoration: "none", letterSpacing: "0.04em",
                boxShadow: "0 12px 48px rgba(230,57,70,0.4)",
                position: "relative",
              }}
            >
              Read The Full Manifesto <span style={{ fontSize: 18 }}>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Next step */}
      <section style={{ padding: "100px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#e63946", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 24 }}>READY TO APPLY IT?</div>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "#fff", fontWeight: 700, marginBottom: 24, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            The manifesto is the philosophy.
            <br />The systems are how you live it.
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.55)", fontSize: 17, lineHeight: 1.7, marginBottom: 40, maxWidth: 600, margin: "0 auto 40px" }}>
            Once you&apos;ve internalized the principles, the next step is implementation. See how we turn philosophy into perception infrastructure.
          </p>
          <Link href="/#offers" style={{
            display: "inline-block",
            background: "linear-gradient(135deg,#e63946,#ff1a1a)",
            color: "#fff", padding: "18px 44px", borderRadius: 100,
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 700,
            textDecoration: "none", letterSpacing: "0.06em",
            boxShadow: "0 8px 32px rgba(230,57,70,0.4)",
          }}>
            See Our Offers
          </Link>
        </div>
      </section>

      {/* Back */}
      <section style={{ padding: "60px clamp(1.5rem,4vw,4rem)", textAlign: "center" }}>
        <Link href="/" style={{
          color: "rgba(255,255,255,0.5)", fontSize: 15,
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", textDecoration: "none",
          borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: 2,
        }}>
          ← Back to Home
        </Link>
      </section>

      <Footer />
    </main>
  )
}
