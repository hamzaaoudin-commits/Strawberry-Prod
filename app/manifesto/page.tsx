"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.4)"

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

type Status = "idle" | "sending" | "sent" | "error"

export default function ManifestoPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden"
      return () => { document.body.style.overflow = "" }
    }
  }, [modalOpen])

  const closeModal = () => {
    setModalOpen(false)
    setTimeout(() => {
      setEmail(""); setFirstName(""); setStatus("idle"); setErrorMsg("")
    }, 300)
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setErrorMsg("")
    try {
      const res = await fetch("/api/manifesto-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data?.success) setStatus("sent")
      else { setStatus("error"); setErrorMsg(data?.error || "Something went wrong.") }
    } catch {
      setStatus("error")
      setErrorMsg("Could not connect. Try again.")
    }
  }

  return (
    <main className="min-h-screen" style={{ background: "#0a0a0a", color: "#fff" }}>
      <NavBar />

      <section style={{ padding: "160px clamp(1.5rem,4vw,4rem) 80px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", width: 1000, height: 1000, background: `radial-gradient(circle, ${COLOR}, transparent 70%)`, opacity: 0.1, filter: "blur(100px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${COLOR}1a`, border: `1px solid ${COLOR}44`, color: COLOR, fontSize: 11, fontFamily: SANS, fontWeight: 700, padding: "6px 18px", borderRadius: 100, letterSpacing: "0.14em", marginBottom: 32 }}>
            FREE · 9 ACTS · INTERACTIVE
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.8rem, 7vw, 5.6rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 32 }}>
            The Strawberry<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Manifesto</span>
          </h1>
          <p style={{ fontFamily: SANS, fontSize: 20, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", maxWidth: 680, margin: "0 auto 44px" }}>
            Nine acts on perception, narrative, and the architecture of attention. The full thesis behind every system we build — open and free.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <a href={MANIFESTO_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "20px 40px", borderRadius: 100, fontFamily: SANS, fontSize: 16, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em", boxShadow: `0 16px 48px ${GLOW}` }}>
              Read the Manifesto →
            </a>
            <button onClick={() => setModalOpen(true)} style={{ display: "inline-block", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.85)", padding: "20px 40px", borderRadius: 100, fontFamily: SANS, fontSize: 16, fontWeight: 600, cursor: "pointer", letterSpacing: "0.06em" }}>
              ✉ Email me a copy
            </button>
          </div>
          <p style={{ fontFamily: SANS, fontSize: 13, color: "rgba(255,255,255,0.35)", marginTop: 28 }}>
            Read instantly in your browser, or get it sent to your inbox.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px clamp(1.5rem,4vw,4rem) 120px", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 11, color: COLOR, fontFamily: SANS, letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>TABLE OF CONTENTS</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>The nine acts.</h2>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            {ACTS.map((a) => (
              <div key={a.n} style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 24, padding: "22px 28px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, alignItems: "center" }}>
                <div style={{ fontFamily: SERIF, fontSize: 28, color: COLOR, fontWeight: 700, fontStyle: "italic", letterSpacing: "0.04em" }}>{a.n}.</div>
                <div>
                  <div style={{ fontFamily: SERIF, fontSize: 19, fontWeight: 700, marginBottom: 4 }}>{a.title}</div>
                  <div style={{ fontFamily: SANS, fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{a.line}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <Link href="/#offers" style={{ fontFamily: SANS, fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none", letterSpacing: "0.06em" }}>
              Or see our offers →
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {modalOpen && (
        <div onClick={closeModal} style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.78)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
          <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", width: "100%", maxWidth: 480, background: "linear-gradient(160deg, #131313, #0d0d0d)", border: `1px solid ${COLOR}33`, borderRadius: 24, padding: "44px 40px", boxShadow: `0 24px 80px rgba(0,0,0,0.6), 0 0 60px ${GLOW}` }}>
            <button onClick={closeModal} aria-label="Close" style={{ position: "absolute", top: 16, right: 16, width: 36, height: 36, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "50%", color: "rgba(255,255,255,0.7)", fontSize: 18, cursor: "pointer" }}>✕</button>

            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "20px 0 8px" }}>
                <div style={{ fontSize: 54, marginBottom: 20 }}>🍓</div>
                <h3 style={{ fontFamily: SERIF, fontSize: 26, fontWeight: 700, color: "#fff", marginBottom: 14 }}>Check your inbox.</h3>
                <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginBottom: 28 }}>
                  The manifesto is on its way to <strong style={{ color: "#fff" }}>{email}</strong>. Check Promotions or Spam if you don&apos;t see it.
                </p>
                <a href={MANIFESTO_URL} target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "14px 24px", borderRadius: 100, fontFamily: SANS, fontSize: 14, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em" }}>
                  Read it now while you wait →
                </a>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div style={{ display: "inline-block", background: `${COLOR}1a`, border: `1px solid ${COLOR}44`, color: COLOR, fontSize: 10, fontFamily: SANS, fontWeight: 700, padding: "5px 14px", borderRadius: 100, letterSpacing: "0.14em", marginBottom: 16 }}>FREE · NO SPAM</div>
                <h3 style={{ fontFamily: SERIF, fontSize: 26, fontWeight: 700, color: "#fff", marginBottom: 10, lineHeight: 1.2 }}>
                  Get the Manifesto<br />in your inbox.
                </h3>
                <p style={{ fontFamily: SANS, fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, marginBottom: 28 }}>
                  Nine acts on perception and narrative. Yours to keep, re-read, and forward.
                </p>

                <div style={{ marginBottom: 14 }}>
                  <label style={{ fontFamily: SANS, color: "rgba(255,255,255,0.45)", fontSize: 11, letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>FIRST NAME (OPTIONAL)</label>
                  <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Your name" style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "13px 16px", color: "#fff", fontSize: 15, fontFamily: SANS, outline: "none", boxSizing: "border-box" }} />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontFamily: SANS, color: "rgba(255,255,255,0.45)", fontSize: 11, letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>EMAIL</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required autoFocus style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "13px 16px", color: "#fff", fontSize: 15, fontFamily: SANS, outline: "none", boxSizing: "border-box" }} />
                </div>

                {status === "error" && errorMsg && (
                  <div style={{ fontFamily: SANS, fontSize: 13, color: "#ff8a8a", background: "rgba(230,57,70,0.08)", border: "1px solid rgba(230,57,70,0.3)", borderRadius: 10, padding: "10px 14px", marginBottom: 16 }}>{errorMsg}</div>
                )}

                <button type="submit" disabled={status === "sending"} style={{ width: "100%", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", border: "none", borderRadius: 100, padding: "15px 24px", fontFamily: SANS, fontSize: 15, fontWeight: 700, cursor: status === "sending" ? "wait" : "pointer", letterSpacing: "0.06em", boxShadow: `0 12px 36px ${GLOW}`, opacity: status === "sending" ? 0.7 : 1 }}>
                  {status === "sending" ? "Sending..." : "Send me the Manifesto"}
                </button>

                <p style={{ fontFamily: SANS, fontSize: 11, color: "rgba(255,255,255,0.3)", textAlign: "center", marginTop: 16, marginBottom: 0 }}>
                  One email. Unsubscribe anytime. We never sell your address.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
