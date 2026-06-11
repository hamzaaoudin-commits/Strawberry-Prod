"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.4)"

const VOLUMES = [
  {
    n: "I",
    code: "N\u00b0 001",
    title: "Neuro-Cinema Manifesto",
    verb: "Remember.",
    tagline: "How elite brands build unforgettable identity when everyone else sounds like a machine. The architecture of narrative immunity.",
    href: "/manifesto-reader.html",
  },
  {
    n: "II",
    code: "N\u00b0 002",
    title: "The Tribe Doctrine",
    verb: "Be followed.",
    tagline: "Why rewriting your company's narrative is the only way to survive the AI wave. And how to build a tribe that won't disappear with it.",
    href: "/manifesto-vol-2.html",
  },
  {
    n: "III",
    code: "N\u00b0 003",
    title: "The Editorial Empire",
    verb: "Remain.",
    tagline: "Why every serious brand will become a media house — or be erased by the ones that did. The infrastructure of narrative power.",
    href: "/manifesto-vol-3.html",
  },
  {
    n: "IV",
    code: "N\u00b0 004",
    title: "The Founder Codex",
    verb: "Be irreplaceable.",
    tagline: "The personal doctrine of founders who refuse to be genericized. How to build a presence that survives any market shift.",
    href: "/Vol_IV_The_Founder_Codex.html",
  },
  {
    n: "V",
    code: "N\u00b0 005",
    title: "The Refusal Manifesto",
    verb: "Refuse.",
    tagline: "A declaration of what this studio will never do, never say, and never become. The architecture of selective practice.",
    href: "/Vol_V_The_Refusal_Manifesto.html",
  },
  {
    n: "VI",
    code: "N\u00b0 006",
    title: "The Aesthetic Constitution",
    verb: "Distinguish.",
    tagline: "Why aesthetic coherence is the last competitive advantage AI cannot replicate. The doctrine of visual and verbal singularity.",
    href: "/Vol_VI_The_Aesthetic_Constitution.html",
  },
  {
    n: "VII",
    code: "N\u00b0 007",
    title: "The Rarity Engine",
    verb: "Become scarce.",
    tagline: "How deliberate scarcity becomes the most powerful positioning tool available to a founder. The mechanics of desirable refusal.",
    href: "/Vol_VII_The_Rarity_Engine.html",
  },
  {
    n: "VIII",
    code: "N\u00b0 008",
    title: "The Patience Doctrine",
    verb: "Outlast.",
    tagline: "Why the founders who win are the ones who refuse to be rushed. The architecture of long-game positioning in an impatient market.",
    href: "/Vol_VIII_The_Patience_Doctrine.html",
  },
  {
    n: "IX",
    code: "N\u00b0 009",
    title: "The Devotion Codex",
    verb: "Be chosen.",
    tagline: "How the most enduring houses build not an audience but a devotion. The doctrine of depth over reach.",
    href: "/Vol_IX_The_Devotion_Codex.html",
  },
]

export default function ManifestoPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0a0a", color: "#fff" }}>
      <NavBar />

      {/* HERO */}
      <section style={{ padding: "160px clamp(1.5rem,4vw,4rem) 60px", position: "relative", overflow: "hidden", textAlign: "center" }}>
        <div aria-hidden style={{ position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", width: 1000, height: 1000, background: "radial-gradient(circle," + COLOR + ",transparent 70%)", opacity: 0.1, filter: "blur(100px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-block", background: COLOR + "1a", border: "1px solid " + COLOR + "44", color: COLOR, fontSize: 11, fontFamily: SANS, fontWeight: 700, padding: "6px 18px", borderRadius: 100, letterSpacing: "0.14em", marginBottom: 32 }}>
            NINE VOLUMES &middot; ONE DOCTRINE
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.8rem, 7vw, 5.6rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 28 }}>
            The Strawberry<br />
            <span style={{ background: "linear-gradient(135deg," + COLOR + ",#ff1a1a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Manifestos.</span>
          </h1>
          <p style={{ fontFamily: SANS, fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", maxWidth: 680, margin: "0 auto" }}>
            Nine manifestos. One doctrine. A complete blueprint for brands that refuse to disappear in the AI decade. Open, free, readable in your browser.
          </p>
        </div>
      </section>

      {/* NINE VOLUMES */}
      <section style={{ padding: "20px clamp(1.5rem,4vw,4rem) 120px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: 22 }}>
            {VOLUMES.map((v) => (
              <article key={v.n} style={{ position: "relative", background: "linear-gradient(160deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))", border: "1px solid " + COLOR + "22", borderRadius: 24, padding: "36px 32px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div aria-hidden style={{ position: "absolute", top: "-40%", right: "-30%", width: 280, height: 280, background: "radial-gradient(circle," + COLOR + ",transparent 70%)", opacity: 0.08, filter: "blur(60px)", pointerEvents: "none" }} />
                <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18 }}>
                    <div style={{ fontFamily: SERIF, fontSize: 56, color: COLOR, fontWeight: 700, fontStyle: "italic", letterSpacing: "0.02em", lineHeight: 0.9 }}>
                      {v.n}.
                    </div>
                    <div style={{ fontFamily: SANS, fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.16em", fontWeight: 600 }}>
                      {v.code}
                    </div>
                  </div>
                  <h3 style={{ fontFamily: SERIF, fontSize: 26, fontWeight: 700, marginBottom: 8, color: "#fff", lineHeight: 1.15 }}>
                    {v.title}
                  </h3>
                  <div style={{ fontFamily: SERIF, fontSize: 17, color: COLOR, fontStyle: "italic", marginBottom: 18, fontWeight: 500 }}>
                    The verb: <span style={{ color: "#fff" }}>{v.verb}</span>
                  </div>
                  <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", marginBottom: 28, flex: 1 }}>
                    {v.tagline}
                  </p>
                  <a href={v.href} target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", background: "rgba(255,255,255,0.05)", border: "1px solid " + COLOR + "55", color: "#fff", padding: "14px 24px", borderRadius: 100, fontFamily: SANS, fontSize: 13, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em" }}>
                    Read Vol. {v.n} &rarr;
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "60px clamp(1.5rem,4vw,4rem) 140px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>
            When you&apos;re ready to build.
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 32 }}>
            The manifestos lay out the doctrine. The commission makes it real.
          </p>
          <Link href="/brand-narrative-audit" style={{ display: "inline-block", background: "linear-gradient(135deg," + COLOR + ",#ff1a1a)", color: "#fff", padding: "16px 36px", borderRadius: 100, fontFamily: SANS, fontSize: 14, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em", boxShadow: "0 12px 36px " + GLOW }}>
            See the Commission &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
