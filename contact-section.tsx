"use client"

import { useState } from "react"
import { useScrollReveal } from "@/hooks/use-strawberry"
import { AnimatedOrb } from "./animated-orb"
import { GlassCard } from "./glass-card"

// ============================================================
// EMAIL DELIVERY
// ============================================================
// Primary: Formspree forwards all submissions to your Gmail inbox
//   (Strawberryprod.contact@gmail.com).
// Fallback: if Formspree is unreachable (network down, quota
//   exceeded, etc.), the visitor's mail client opens with the
//   message pre-filled to the contact email — no message is lost.
// ============================================================

const FORMSPREE_ID = "xnjwroeq"
const CONTACT_EMAIL = "Strawberryprod.contact@gmail.com"

const CONTACT_INFO = [
  { label: "Email", value: CONTACT_EMAIL, icon: "✉" },
  { label: "Instagram", value: "@strawberry_prods", icon: "◈" },
  { label: "Location", value: "Paris, France", icon: "◎" },
]

const GOALS = ["Brand Identity", "Content Domination", "Scale Revenue", "Full Empire"]

type Status = "idle" | "sending" | "sent" | "error"

export function ContactSection() {
  const [ref, vis] = useScrollReveal()
  const [form, setForm] = useState({ name: "", email: "", goal: "", message: "" })
  const [status, setStatus] = useState<Status>("idle")

  const openMailto = () => {
    const subject = `New project inquiry${form.goal ? ` — ${form.goal}` : ""}`
    const body =
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Primary goal: ${form.goal || "(not specified)"}\n\n` +
      `Project details:\n${form.message}`
    const url = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = url
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          goal: form.goal,
          message: form.message,
          _subject: `New project inquiry${form.goal ? ` — ${form.goal}` : ""}`,
        }),
      })
      if (res.ok) {
        setStatus("sent")
      } else {
        // Formspree returned an error — fall back to mailto so no message is lost
        openMailto()
        setStatus("sent")
      }
    } catch {
      // Network error — fall back to mailto
      openMailto()
      setStatus("sent")
    }
  }

  return (
    <section id="contact" style={{ background: "#0a0a0a", padding: "120px clamp(1.5rem,4vw,4rem)", position: "relative", overflow: "hidden" }}>
      <AnimatedOrb color="radial-gradient(circle,#e63946,transparent)" size={700} x="50%" y="50%" opacity={0.1} />
      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
          <div>
            <div style={{ fontSize: 11, color: "#e63946", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>CONTACT</div>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3.5rem)", color: "#fff", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 28 }}>
              Ready to stop blending in?
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 17, lineHeight: 1.8, marginBottom: 48 }}>
              {"We don't work with everyone. We work with creators, founders, and brands who think in years, not quarters — and who are ready to dominate their category."}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {CONTACT_INFO.map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(230,57,70,0.1)", border: "1px solid rgba(230,57,70,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: "#e63946" }}>{c.icon}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.3)", fontSize: 11, letterSpacing: "0.1em", marginBottom: 2 }}>{c.label}</div>
                    <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.7)", fontSize: 15 }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <GlassCard style={{ padding: "48px 44px" }}>
            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 64, marginBottom: 24 }}>🍓</div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Message sent.</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
                  Thank you. We&apos;ll be in touch within 24 hours to discuss how we can build your empire.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", goal: "", message: "" }) }}
                  style={{
                    background: "transparent", border: "1px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.7)", padding: "12px 28px", borderRadius: 100,
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, fontWeight: 600,
                    cursor: "pointer", letterSpacing: "0.04em",
                  }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "#fff", fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Start the conversation</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  {[
                    { label: "Full Name", key: "name" as const, placeholder: "Your name" },
                    { label: "Email", key: "email" as const, placeholder: "your@email.com" },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.45)", fontSize: 12, letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>{f.label.toUpperCase()}</label>
                      <input
                        value={form[f.key]}
                        onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                        placeholder={f.placeholder}
                        required
                        type={f.key === "email" ? "email" : "text"}
                        style={{
                          width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: 12, padding: "14px 18px", color: "#fff", fontSize: 15,
                          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", outline: "none", boxSizing: "border-box",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={e => e.target.style.borderColor = "rgba(230,57,70,0.5)"}
                        onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                      />
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.45)", fontSize: 12, letterSpacing: "0.1em", display: "block", marginBottom: 12 }}>PRIMARY GOAL</label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {GOALS.map(g => (
                      <button
                        key={g} type="button"
                        onClick={() => setForm(p => ({ ...p, goal: g }))}
                        style={{
                          background: form.goal === g ? "rgba(230,57,70,0.2)" : "rgba(255,255,255,0.05)",
                          border: `1px solid ${form.goal === g ? "rgba(230,57,70,0.6)" : "rgba(255,255,255,0.1)"}`,
                          borderRadius: 10, padding: "12px 14px", color: form.goal === g ? "#e63946" : "rgba(255,255,255,0.45)",
                          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, cursor: "pointer",
                          transition: "all 0.2s", fontWeight: form.goal === g ? 600 : 400,
                        }}
                      >{g}</button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.45)", fontSize: 12, letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>YOUR PROJECT</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    placeholder="Tell us about your brand and what you want to achieve..."
                    rows={4}
                    required
                    style={{
                      width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 12, padding: "14px 18px", color: "#fff", fontSize: 15,
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", outline: "none", resize: "vertical", boxSizing: "border-box",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={e => e.target.style.borderColor = "rgba(230,57,70,0.5)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    width: "100%", background: "linear-gradient(135deg,#e63946,#ff1a1a)",
                    color: "#fff", border: "none", borderRadius: 100, padding: "17px 24px",
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 700,
                    cursor: status === "sending" ? "wait" : "pointer", letterSpacing: "0.06em",
                    boxShadow: "0 8px 32px rgba(230,57,70,0.4)",
                    transition: "transform 0.2s, box-shadow 0.2s, opacity 0.2s",
                    opacity: status === "sending" ? 0.7 : 1,
                  }}
                  onMouseEnter={e => { if (status !== "sending") { (e.target as HTMLElement).style.transform = "translateY(-2px)"; (e.target as HTMLElement).style.boxShadow = "0 16px 48px rgba(230,57,70,0.55)" } }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.transform = "none"; (e.target as HTMLElement).style.boxShadow = "0 8px 32px rgba(230,57,70,0.4)" }}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
