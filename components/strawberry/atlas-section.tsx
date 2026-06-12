"use client"

import { useState } from "react"
import { track } from "@vercel/analytics"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"
const FORMSPREE = "https://formspree.io/f/xnjwroeq"

function AtlasModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, source: "atlas_download_home" }),
      })
      if (res.ok) {
        setStatus("done")
        track("atlas_email_captured", { from: "home" })
        setTimeout(() => {
          window.location.href = "/30-architectures-atlas.pdf"
          onClose()
        }, 1200)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#0d0d0d", border: "1px solid " + COLOR + "44", borderRadius: 12, padding: "clamp(2rem,4vw,3rem)", maxWidth: 480, width: "100%", position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 20, background: "none", border: "none", color: "rgba(255,255,255,0.4)", fontSize: 22, cursor: "pointer", lineHeight: 1 }}>×</button>
        <div style={{ fontSize: 10, letterSpacing: "0.25em", color: COLOR, marginBottom: 16, fontFamily: SANS, textTransform: "uppercase" }}>Free Resource</div>
        <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 12, color: "#fff" }}>
          30 Architectures.<br />An Atlas.
        </h2>
        <p style={{ fontFamily: SANS, fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, marginBottom: 28 }}>
          128 pages. Free. Enter your email and the Atlas opens immediately.
        </p>
        {status === "done" ? (
          <p style={{ fontFamily: SERIF, fontSize: 16, fontStyle: "italic", color: COLOR, textAlign: "center", padding: "1rem 0" }}>Opening the Atlas&hellip;</p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <input
              type="email" required placeholder="Your email" value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, padding: "14px 16px", color: "#fff", fontSize: 15, fontFamily: SANS, outline: "none", width: "100%" }}
            />
            <button
              type="submit" disabled={status === "loading"}
              style={{ background: "linear-gradient(135deg," + COLOR + ",#ff1a1a)", color: "#fff", border: "none", borderRadius: 100, padding: "14px 28px", fontSize: 14, fontFamily: SANS, fontWeight: 700, letterSpacing: "0.06em", cursor: "pointer", boxShadow: "0 8px 30px " + GLOW }}
            >
              {status === "loading" ? "Opening\u2026" : "Read the Atlas \u2192"}
            </button>
            {status === "error" && <p style={{ fontSize: 13, color: COLOR, textAlign: "center", margin: 0 }}>Something went wrong. Try again.</p>}
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", textAlign: "center", margin: 0, fontFamily: SANS }}>No spam. One email to receive the Atlas.</p>
          </form>
        )}
      </div>
    </div>
  )
}

export function AtlasSection() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section style={{ background: "#0d0d0d", padding: "clamp(4rem,10vw,8rem) clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>

      {showModal && <AtlasModal onClose={() => setShowModal(false)} />}

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(230,57,70,0.10)", border: "1px solid rgba(230,57,70,0.3)", borderRadius: 100, padding: "5px 14px", marginBottom: 24 }}>
                <span style={{ color: "#e63946", fontSize: 11, fontFamily: SANS, letterSpacing: "0.1em", fontWeight: 600 }}>FREE RESOURCE</span>
              </div>
              <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}>
                30 Architectures.<br />
                <span style={{ background: "linear-gradient(135deg,#e63946,#ff1a1a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>An Atlas.</span>
              </h2>
            </div>
            <div style={{ maxWidth: 480, paddingTop: 8 }}>
              <p style={{ fontFamily: SANS, fontSize: "clamp(0.95rem,1.6vw,1.1rem)", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, margin: "0 0 32px" }}>
                Thirty composite portraits of the narrative situations founders find themselves in &mdash; and the architectural moves that resolved them. Not a portfolio. A map.
              </p>
              <p style={{ fontFamily: SERIF, fontSize: "clamp(0.95rem,1.4vw,1.05rem)", color: "rgba(255,255,255,0.35)", fontStyle: "italic", lineHeight: 1.7, margin: "0 0 32px" }}>
                If you recognize yourself in one of them &mdash; you have already begun the work.
              </p>
              <button
                onClick={() => { track("atlas_click", { from: "home" }); setShowModal(true) }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  background: "linear-gradient(135deg,#e63946,#ff1a1a)",
                  color: "#fff", padding: "14px 32px", borderRadius: 100,
                  fontSize: 14, fontFamily: SANS, fontWeight: 700,
                  letterSpacing: "0.04em", border: "none", cursor: "pointer",
                  boxShadow: "0 8px 32px rgba(230,57,70,0.35)",
                }}
              >
                Read the Atlas &rarr;
              </button>
              <p style={{ marginTop: 12, color: "rgba(255,255,255,0.25)", fontSize: 12, fontFamily: SANS, letterSpacing: "0.05em" }}>
                128 pages &middot; PDF &middot; Free &middot; One email. No spam.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 1, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, overflow: "hidden" }}>
            {[
              { n: "01", text: "We had pivoted three times. I no longer knew what to say at dinner." },
              { n: "03", text: "I sold the company. I took two years. I came back. I refuse to be the founder of my last company." },
              { n: "07", text: "I refuse to hire. I refuse to scale. I cannot keep apologizing for it." },
              { n: "13", text: "Every brief we receive treats us as an agency. We are not." },
              { n: "19", text: "We are building something that does not exist. Every prospect tries to put us in a box that already does." },
              { n: "...", text: "+ 25 more architectures across 5 categories." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#0a0a0a", padding: "28px 24px", display: "flex", gap: 16 }}>
                <span style={{ color: "#e63946", fontSize: 11, fontFamily: SANS, fontWeight: 700, letterSpacing: "0.08em", flexShrink: 0, paddingTop: 3 }}>{item.n}</span>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, fontFamily: SERIF, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
