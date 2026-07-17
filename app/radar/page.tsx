"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

// TODO: replace with the live RADAR subscription Stripe link when created.
const RADAR_SUBSCRIBE_URL = "/#contact"

const READ = [
  {
    label: "The signal",
    body: "What the brand genuinely emits — the position that actually lands, isolated from everything around it.",
  },
  {
    label: "The noise",
    body: "What blurs it: the borrowed words, the me-too claims, the promise that fights itself.",
  },
  {
    label: "The heading",
    body: "The single repositioning move I'd give it — the decision that would make it unmistakable.",
  },
]

export default function RadarPage() {
  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>
      <NavBar />

      {/* HERO */}
      <section style={{ padding: "160px clamp(1.5rem,4vw,4rem) 90px", position: "relative", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 0%, ${GLOW} 0%, transparent 60%)`, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 36, textTransform: "uppercase" }}>
            A Strawberry Production publication · daily
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.25rem,6vw,4.25rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: 28 }}>
            Catch a brand&apos;s signal<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>before the market does.</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.2rem)", color: "rgba(255,255,255,0.68)", maxWidth: 640, margin: "0 auto 40px", lineHeight: 1.65 }}>
            Every day, one real brand goes under the radar: what it emits, what jams it, and the heading I&apos;d give it. Not a course — an instrument. The edge your competitors don&apos;t have, day after day.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <a href={RADAR_SUBSCRIBE_URL} style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "15px 32px", borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: "none", letterSpacing: "0.02em" }}>
              Subscribe — 15€/month
            </a>
            <a href="#today" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "15px 32px", borderRadius: 100, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>
              See today&apos;s read
            </a>
          </div>
        </div>
      </section>

      {/* THE READ STRUCTURE */}
      <section style={{ padding: "90px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 20, textTransform: "uppercase" }}>The read</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.9rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              Same structure, every day.<br />Only the brand changes.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {READ.map((r, i) => (
              <div key={r.label} style={{ padding: "32px 28px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.09)" }}>
                <div style={{ fontFamily: SERIF, fontSize: 32, fontWeight: 700, color: COLOR, marginBottom: 14 }}>0{i + 1}</div>
                <h3 style={{ fontFamily: SERIF, fontSize: "1.35rem", fontWeight: 700, marginBottom: 12, letterSpacing: "-0.01em" }}>{r.label}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "rgba(255,255,255,0.62)" }}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE OF THE DAY */}
      <section id="today" style={{ padding: "90px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", border: `1px solid rgba(230,57,70,0.25)`, background: "linear-gradient(180deg, rgba(230,57,70,0.04) 0%, rgba(10,10,10,0.6) 100%)", padding: "clamp(2rem,5vw,3.5rem)", position: "relative" }}>
          <div style={{ position: "absolute", top: -1, left: -1, width: 44, height: 44, borderTop: `2px solid ${COLOR}`, borderLeft: `2px solid ${COLOR}` }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: 11, letterSpacing: "0.2em", color: COLOR, textTransform: "uppercase" }}>Free read · today</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>Read n°014 · 11 min</span>
          </div>
          <h3 style={{ fontFamily: SERIF, fontSize: "2rem", fontWeight: 700, marginBottom: 4 }}>Sézane</h3>
          <div style={{ fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 28 }}>Sector · Fashion / DNVB</div>

          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: COLOR, marginBottom: 8 }}>What works</div>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,0.75)" }}>An &quot;accessible premium&quot; made-in-France, held without drifting.</p>
          </div>
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: COLOR, marginBottom: 8 }}>What&apos;s blurry</div>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,0.75)" }}>The promise of rarity sits awkwardly against a very high release cadence.</p>
          </div>
          <div>
            <div style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: COLOR, marginBottom: 8 }}>Repositioning</div>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,0.75)" }}>Decide: honour rarity by slowing down, or own the pace and move the promise.</p>
          </div>
        </div>
        <p style={{ textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 20 }}>Brand analysed from public information. Editorial opinion — never a client.</p>
      </section>

      {/* PRICING: SUBSCRIPTION + ARSENAL */}
      <section id="arsenal" style={{ padding: "90px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {/* Subscription */}
          <div style={{ padding: "40px 32px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 100, border: "1px solid rgba(120,180,255,0.4)", color: "rgba(150,195,255,0.9)" }}>Subscription</span>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, margin: "24px 0 6px" }}>
              <span style={{ fontFamily: SERIF, fontSize: "2.6rem", fontWeight: 700 }}>15€</span>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>/ month</span>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,0.62)", margin: "12px 0 28px" }}>The daily read, the full library, and the habit that lets you price any positioning in seconds. Cancel anytime.</p>
            <a href={RADAR_SUBSCRIBE_URL} style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "13px 28px", borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Subscribe</a>
          </div>
          {/* Arsenal */}
          <div style={{ padding: "40px 32px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 100, border: `1px solid rgba(230,57,70,0.4)`, color: COLOR }}>One-shot · toolkit</span>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, margin: "24px 0 6px" }}>
              <span style={{ fontFamily: SERIF, fontSize: "2.6rem", fontWeight: 700 }}>147–197€</span>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,0.62)", margin: "12px 0 28px" }}>Arsenal — the RADAR method as a toolkit. The frameworks to run the read on your own brand, without us. For those who&apos;d rather do it themselves.</p>
            <a href="/#contact" style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.22)", color: "#fff", padding: "13px 28px", borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Get Arsenal</a>
          </div>
        </div>

        {/* bridge to audit */}
        <div style={{ maxWidth: 720, margin: "56px auto 0", textAlign: "center" }}>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.15rem,2vw,1.5rem)", fontStyle: "italic", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
            RADAR trains the eye. When you&apos;re ready to build the architecture — not just read it — the commission is waiting.
          </p>
          <Link href="/brand-narrative-audit" style={{ display: "inline-block", marginTop: 20, color: COLOR, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>See Brand Narrative Architecture →</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
