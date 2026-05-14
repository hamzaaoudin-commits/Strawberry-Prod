import type { Metadata } from "next"
import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"

export const metadata: Metadata = {
  title: "Manifesto — Strawberry Production",
  description:
    "Nine acts on perception, narrative, and the architecture of attention. A free interactive reading experience.",
}

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.4)"

// The manifesto is a self-contained interactive HTML file shipped in /public.
// Place "neuro_cinema_manifesto_reader_v2.html" (or renamed "manifesto-reader.html")
// in the project's /public folder and Next.js will serve it as a static asset.
const MANIFESTO_URL = "/manifesto-reader.html"

const ACTS = [
  { n: "I", title: "The Saturation Problem", line: "Why more content stopped working." },
  { n: "II", title: "Perception as Substrate", line: "What the audience actually buys before the product." },
  { n: "III", title: "The Cinematic Frame", line: "Borrowing structure from cinema, not from marketing." },
  { n: "IV", title: "Narrative Gravity", line: "Why some brands pull and others push." },
  { n: "V", title: "Status Architecture", line: "Engineering the room the buyer wants to enter." },
  { n: "VI", title: "Signal Density", line: "Compression as a form of authority." },
  { n: "VII", title: "Compounding Belief", line: "What makes a content asset appreciate." },
  { n: "VIII", title: "The Long Tail of Worldview", line: "Building an empire that survives platform shifts." },
  { n: "IX", title: "The Author Position", line: "Why every founder is, eventually, a narrator." },
]

export default function ManifestoPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0a0a", color: "#fff" }}>
      <NavBar />

      {/* HERO */}
      <section style={{ padding: "160px clamp(1.5rem,4vw,4rem) 80px", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 1000,
            height: 1000,
            background: `radial-gradient(circle, ${COLOR}, transparent 70%)`,
            opacity: 0.1,
            filter: "blur(100px)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <div
            style={{
              display: "inline-block",
              background: `${COLOR}1a`,
              border: `1px solid ${COLOR}44`,
              color: COLOR,
              fontSize: 11,
              fontFamily: SANS,
              fontWeight: 700,
              padding: "6px 18px",
              borderRadius: 100,
              letterSpacing: "0.14em",
              marginBottom: 32,
            }}
          >
            FREE · 9 ACTS · INTERACTIVE
          </div>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.8rem, 7vw, 5.6rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              marginBottom: 32,
            }}
          >
            The Strawberry
            <br />
            <span
              style={{
                background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Manifesto
            </span>
          </h1>
          <p
            style={{
              fontFamily: SANS,
              fontSize: 20,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 680,
              margin: "0 auto 44px",
            }}
          >
            Nine acts on perception, narrative, and the architecture of attention. The full thesis behind every system we
            build — open, free to read, no email required.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <a
              href={MANIFESTO_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`,
                color: "#fff",
                padding: "20px 48px",
                borderRadius: 100,
                fontFamily: SANS,
                fontSize: 16,
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.06em",
                boxShadow: `0 16px 48px ${GLOW}`,
              }}
            >
              Read the Manifesto →
            </a>
            <Link
              href="/#offers"
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.8)",
                padding: "20px 36px",
                borderRadius: 100,
                fontFamily: SANS,
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "0.06em",
              }}
            >
              See our offers
            </Link>
          </div>

          <p style={{ fontFamily: SANS, fontSize: 13, color: "rgba(255,255,255,0.35)", marginTop: 32 }}>
            Opens in a new tab · ~25 min read · No login, no paywall
          </p>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section style={{ padding: "80px clamp(1.5rem,4vw,4rem) 120px", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>
              TABLE OF CONTENTS
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              The nine acts.
            </h2>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            {ACTS.map((a) => (
              <div
                key={a.n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "60px 1fr",
                  gap: 24,
                  padding: "22px 28px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 14,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: SERIF,
                    fontSize: 28,
                    color: COLOR,
                    fontWeight: 700,
                    fontStyle: "italic",
                    letterSpacing: "0.04em",
                  }}
                >
                  {a.n}.
                </div>
                <div>
                  <div style={{ fontFamily: SERIF, fontSize: 19, fontWeight: 700, marginBottom: 4 }}>{a.title}</div>
                  <div style={{ fontFamily: SANS, fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{a.line}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <a
              href={MANIFESTO_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`,
                color: "#fff",
                padding: "18px 44px",
                borderRadius: 100,
                fontFamily: SANS,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.06em",
                boxShadow: `0 12px 36px ${GLOW}`,
              }}
            >
              Open the Manifesto →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
