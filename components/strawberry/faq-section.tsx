"use client"

import { useState } from "react"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

const FAQS = [
  {
    q: "Is this for me?",
    a: "If you're a founder, creator, or consultant who can't clearly articulate what makes you different — yes. If you're looking for someone to \"do content\" — no.",
  },
  {
    q: "Why 4,500€?",
    a: "It's the price of a few weeks of advertising that vanishes the moment you stop paying. Your narrative belongs to you and works for you indefinitely.",
  },
  {
    q: "How long does it take?",
    a: "3 to 4 weeks from onboarding to delivery. The document is ready to use the Monday after it lands.",
  },
  {
    q: "Why only 4 commissions per quarter?",
    a: "Not a sales argument — a real constraint. Every house is built from scratch. Beyond four, quality drops. I'd rather decline than deliver ordinary work.",
  },
  {
    q: "Can't I just do this myself?",
    a: "You could. But you've been inside your own story for so long you can no longer see what makes it singular. That's exactly what this work extracts.",
  },
  {
    q: "How does the process work?",
    a: "After your commission is confirmed, you receive an onboarding questionnaire. It takes 20 to 30 minutes to complete and contains everything I need to build your narrative architecture from scratch.",
  },
  {
    q: "What if I'm not satisfied?",
    a: "If the deliverable doesn't hit the mark, I write a V2. No questions asked.",
  },
  {
    q: "Do you sign an NDA?",
    a: "Yes, on request. And by default, your work will never be mentioned, adapted, or reused for another house.",
  },
  {
    q: "In what language is the document delivered?",
    a: "In the language you build your brand in — French or English.",
  },
  {
    q: "How do I know if slots are still open?",
    a: "Send a message. If we're full, you'll be the first told when the next quarter opens.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section style={{ padding: "140px clamp(1.5rem,4vw,4rem)", background: "#0a0a0a", color: "#fff", borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative", overflow: "hidden" }}>

      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 65%)`, opacity: 0.15, pointerEvents: "none" }} />

      <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>

        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase", fontFamily: SANS }}>
            FAQ
          </div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2.25rem,5vw,3.75rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
            Everything you need{" "}
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              to decide.
            </span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {FAQS.map((faq, i) => (
            <div key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "28px 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: 24,
                }}
              >
                <span style={{ fontFamily: SERIF, fontSize: "clamp(1rem,1.8vw,1.25rem)", color: "#fff", fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                  {faq.q}
                </span>
                <span style={{ color: COLOR, fontSize: 22, flexShrink: 0, transition: "transform 0.3s", display: "block", transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>
                  +
                </span>
              </button>
              <div style={{ maxHeight: open === i ? 300 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
                <p style={{ fontFamily: SANS, fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, paddingBottom: 28, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />
        </div>

      </div>
    </section>
  )
}
