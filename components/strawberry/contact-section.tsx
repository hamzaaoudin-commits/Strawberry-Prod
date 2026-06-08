"use client"

import { useEffect, useRef, useState } from "react"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

const FORMSPREE_URL = "https://formspree.io/f/xnjwroeq"

const CONTACT_INFO = [
  { label: "Email", value: "hamza@gostrawberryprod.com", icon: "✉" },
  { label: "Instagram", value: "@strawberry_prods", icon: "◈" },
  { label: "Location", value: "Paris, France", icon: "◎" },
]

const GOALS = [
  "Commission the Brand Narrative Architecture",
  "Just exploring",
  "Other",
]

type Status = "idle" | "sending" | "sent" | "error"

function useReveal() {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.05 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

export function ContactSection() {
  const { ref, visible } = useReveal()
  const [form, setForm] = useState({ name: "", email: "", goal: "", message: "" })
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setErrorMsg("")
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          goal: form.goal,
          message: form.message,
          _subject: `New contact from ${form.name} — ${form.goal || "no goal selected"}`,
        }),
      })
      if (res.ok) {
        setStatus("sent")
      } else {
        let msg = "Something went wrong. Please email us directly at hamza@gostrawberryprod.com."
        try {
          const data = await res.json()
          if (data?.errors?.[0]?.message) msg = data.errors[0].message
        } catch {}
        setStatus("error")
        setErrorMsg(msg)
      }
    } catch {
      setStatus("error")
      setErrorMsg("Could not connect. Please email us directly at hamza@gostrawberryprod.com.")
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "16px 20px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    fontFamily: SANS,
    fontSize: 14,
    letterSpacing: "0.02em",
    outline: "none",
    transition: "border-color 0.2s",
  }

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 10,
    letterSpacing: "0.25em",
    color: "rgba(255,255,255,0.55)",
    marginBottom: 10,
    textTransform: "uppercase",
    fontFamily: SANS,
  }

  return (
    <section id="contact" ref={ref as any} style={{ padding: "140px clamp(1.5rem,4vw,4rem)", background: "#0a0a0a", color: "#fff", borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative", overflow: "hidden" }}>

      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 65%)`, opacity: 0.25, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>

        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase", fontFamily: SANS }}>
            Reach out
          </div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2.25rem,5vw,3.75rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 28 }}>
            Let&apos;s <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>talk.</span>
          </h2>
          <p style={{ fontFamily: SANS, fontSize: "clamp(1rem,1.4vw,1.15rem)", color: "rgba(255,255,255,0.65)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
            Tell me about your house. The conviction you can&apos;t articulate yet. The thing your competitors keep stealing — or copying badly. I read every message myself.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 48, alignItems: "start" }}>

          <div>
            <div style={{ marginBottom: 40 }}>
              <div style={{ fontSize: 11, letterSpacing: "0.25em", color: COLOR, marginBottom: 24, textTransform: "uppercase", fontFamily: SANS }}>
                Direct lines
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {CONTACT_INFO.map((c) => (
                  <div key={c.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${COLOR}`, color: COLOR, fontSize: 14, flexShrink: 0 }}>
                      {c.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 10, letterSpacing: "0.2em", color: "rgba(255,255,255,0.5)", marginBottom: 4, textTransform: "uppercase", fontFamily: SANS }}>
                        {c.label}
                      </div>
                      <div style={{ fontSize: 14, color: "rgba(255,255,255,0.9)", fontFamily: SANS, letterSpacing: "0.01em" }}>
                        {c.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: "24px 28px", borderLeft: `2px solid ${COLOR}`, background: "rgba(255,255,255,0.02)" }}>
              <p style={{ fontFamily: SERIF, fontSize: "1.05rem", fontStyle: "italic", color: "rgba(255,255,255,0.8)", lineHeight: 1.55, margin: 0 }}>
                Limited to four commissions per quarter. If we&apos;re full, you&apos;ll be the first told when the next slot opens.
              </p>
            </div>
          </div>

          <div>
            {status === "sent" ? (
              <div style={{ padding: "48px 36px", border: `1px solid ${COLOR}`, background: "rgba(230,57,70,0.06)", textAlign: "center" }}>
                <div style={{ fontSize: 36, marginBottom: 20 }}>🍓</div>
                <h3 style={{ fontFamily: SERIF, fontSize: "1.6rem", fontWeight: 600, marginBottom: 16, letterSpacing: "-0.02em" }}>
                  Message received.
                </h3>
                <p style={{ fontFamily: SANS, fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                  I read every one personally. Expect a reply within 48 hours — often faster.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>

                <div>
                  <label style={labelStyle} htmlFor="name">Your name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    disabled={status === "sending"}
                  />
                </div>

                <div>
                  <label style={labelStyle} htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    disabled={status === "sending"}
                  />
                </div>

                <div>
                  <label style={labelStyle}>What brings you here</label>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {GOALS.map((g) => {
                      const selected = form.goal === g
                      return (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setForm({ ...form, goal: g })}
                          disabled={status === "sending"}
                          style={{
                            padding: "14px 20px",
                            background: selected ? "rgba(230,57,70,0.1)" : "rgba(255,255,255,0.03)",
                            border: selected ? `1px solid ${COLOR}` : "1px solid rgba(255,255,255,0.1)",
                            color: selected ? "#fff" : "rgba(255,255,255,0.7)",
                            fontFamily: SANS,
                            fontSize: 14,
                            textAlign: "left",
                            cursor: "pointer",
                            transition: "all 0.2s",
                            letterSpacing: "0.01em",
                          }}
                        >
                          {selected && <span style={{ color: COLOR, marginRight: 10 }}>✦</span>}
                          {g}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <label style={labelStyle} htmlFor="message">Your message</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical", minHeight: 120, lineHeight: 1.6 }}
                    disabled={status === "sending"}
                    placeholder="Tell me about your house, your stage, what you want to be unforgettable for."
                  />
                </div>

                {status === "error" && (
                  <div style={{ padding: "14px 18px", border: `1px solid ${COLOR}`, background: "rgba(230,57,70,0.08)", color: "rgba(255,255,255,0.9)", fontSize: 13, fontFamily: SANS, lineHeight: 1.5 }}>
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    padding: "18px 32px",
                    background: status === "sending" ? "rgba(230,57,70,0.4)" : `linear-gradient(135deg, ${COLOR}, #ff1a1a)`,
                    color: "#fff",
                    border: "none",
                    borderRadius: 100,
                    fontSize: 14,
                    fontWeight: 600,
                    fontFamily: SANS,
                    letterSpacing: "0.05em",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    boxShadow: status === "sending" ? "none" : `0 15px 40px ${GLOW}`,
                    transition: "all 0.2s",
                    marginTop: 8,
                  }}
                >
                  {status === "sending" ? "Sending..." : "Send Message →"}
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}
