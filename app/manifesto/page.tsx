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
    code: "N° 001",
    title: "Neuro-Cinema Manifesto",
    verb: "Remember.",
    tagline: "How elite brands build unforgettable identity when everyone else sounds like a machine. The architecture of narrative immunity.",
    href: "/manifesto-reader.html",
  },
  {
    n: "II",
    code: "N° 002",
    title: "The Tribe Doctrine",
    verb: "Be followed.",
    tagline: "Why rewriting your company's narrative is the only way to survive the AI wave. And how to build a tribe that won't disappear with it.",
    href: "/manifesto-vol-2.html",
  },
  {
    n: "III",
    code: "N° 003",
    title: "The Editorial Empire",
    verb: "Remain.",
    tagline: "Why every serious brand will become a media house — or be erased by the ones that did. The infrastructure of narrative power.",
    href: "/manifesto-vol-3.html",
  },
]

export default function ManifestoPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0a0a", color: "#fff" }}>
      <NavBar />

      {/* HERO */}
      <section style={{ padding: "160px clamp(1.5rem,4vw,4rem) 60px", position: "relative", overflow: "hidden", textAlign: "center" }}>
        <div aria-hidden style={{ position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", width: 1000, height: 1000, background: `radial-gradient(circle, ${COLOR}, transparent 70%)`, opacity: 0.1, filter: "blur(100px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-block", background: `${COLOR}1a`, border: `1px solid ${COLOR}44`, color: COLOR, fontSize: 11, fontFamily: SANS, fontWeight: 700, padding: "6px 18px", borderRadius: 100, letterSpacing: "0.14em", marginBottom: 32 }}>
            THREE VOLUMES · ONE DOCTRINE
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.8rem, 7vw, 5.6rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 28 }}>
            The Strawberry<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Manifestos.</span>
          </h1>
          <p style={{ fontFamily: SANS, fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", maxWidth: 680, margin: "0 auto" }}>
            Three manifestos. One doctrine. A complete blueprint for brands that refuse to disappear in the AI decade. Open, free, readable in your browser.
          </p>
        </div>
      </section>

      {/* BOX SET — HERO CTA */}
      <section style={{ padding: "20px clamp(1.5rem,4vw,4rem) 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ position: "relative", borderRadius: 28, padding: "clamp(2rem, 4vw, 3.5rem)", background: `linear-gradient(135deg, ${COLOR}1f, rgba(255,255,255,0.02))`, border: `1px solid ${COLOR}55`, overflow: "hidden" }}>
            <div aria-hidden style={{ position: "absolute", top: "-30%", right: "-10%", width: 700, height: 700, background: `radial-gradient(circle, ${COLOR}, transparent 70%)`, opacity: 0.2, filter: "blur(90px)", pointerEvents: "none" }} />
            <div aria-hidden style={{ position: "absolute", bottom: "-30%", left: "-10%", width: 500, height: 500, background: `radial-gradient(circle, #ff1a1a, transparent 70%)`, opacity: 0.12, filter: "blur(80px)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center" }} className="boxset-grid">
              <div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 18 }}>
                  <div style={{ display: "inline-block", background: `${COLOR}33`, color: "#fff", fontSize: 10, fontFamily: SANS, fontWeight: 700, padding: "5px 14px", borderRadius: 100, letterSpacing: "0.14em" }}>BOX SET</div>
                  <div style={{ display: "inline-block", background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: 10, fontFamily: SANS, fontWeight: 700, padding: "5px 14px", borderRadius: 100, letterSpacing: "0.14em" }}>ALL THREE VOLUMES</div>
                </div>
                <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, color: "#fff", marginBottom: 16, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                  The Trilogy<br />
                  <span style={{ color: COLOR }}>Box Set.</span>
                </h2>
                <p style={{ fontFamily: SANS, fontSize: 16, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: "0 0 8px 0", maxWidth: 620 }}>
                  The complete trilogy in one immersive reader. Three movements, one operating system for brands that intend to remain.
                </p>
                <p style={{ fontFamily: SERIF, fontSize: 17, fontStyle: "italic", color: "rgba(255,255,255,0.6)", margin: "12px 0 0 0", maxWidth: 620, lineHeight: 1.5 }}>
                  Read Vol. I to be remembered. Vol. II to be followed. Vol. III to remain. Read all three to become an institution.
                </p>
              </div>
              <div style={{ minWidth: 240, display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="/manifesto-box-set.html" target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "18px 32px", borderRadius: 100, fontFamily: SANS, fontSize: 15, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em", boxShadow: `0 16px 48px ${GLOW}` }}>
                  Read the Box Set →
                </a>
                <div style={{ fontFamily: SANS, fontSize: 11, color: "rgba(255,255,255,0.4)", textAlign: "center", letterSpacing: "0.04em" }}>
                  Opens in a new tab · Free · Browser reader
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OR — divider */}
      <section style={{ padding: "20px clamp(1.5rem,4vw,4rem) 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 280, margin: "0 auto", display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.1)" }} />
          <div style={{ fontFamily: SANS, fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.2em", fontWeight: 600 }}>OR · ONE AT A TIME</div>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.1)" }} />
        </div>
      </section>

      {/* THREE VOLUMES */}
      <section style={{ padding: "20px clamp(1.5rem,4vw,4rem) 120px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: 22 }}>
            {VOLUMES.map((v) => (
              <article key={v.n} style={{ position: "relative", background: "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))", border: `1px solid ${COLOR}22`, borderRadius: 24, padding: "36px 32px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div aria-hidden style={{ position: "absolute", top: "-40%", right: "-30%", width: 280, height: 280, background: `radial-gradient(circle, ${COLOR}, transparent 70%)`, opacity: 0.08, filter: "blur(60px)", pointerEvents: "none" }} />
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
                  <a href={v.href} target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", background: "rgba(255,255,255,0.05)", border: `1px solid ${COLOR}55`, color: "#fff", padding: "14px 24px", borderRadius: 100, fontFamily: SANS, fontSize: 13, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em" }}>
                    Read Vol. {v.n} →
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
            The manifestos lay out the doctrine. The systems make it real.
          </p>
          <Link href="/#offers" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "16px 36px", borderRadius: 100, fontFamily: SANS, fontSize: 14, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em", boxShadow: `0 12px 36px ${GLOW}` }}>
            See the systems →
          </Link>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 720px) {
          .boxset-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
