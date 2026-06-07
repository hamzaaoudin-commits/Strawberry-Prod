"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

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

const NEXT_STEPS = [
  {
    n: "01",
    title: "Check your inbox",
    body: "A confirmation email with your invoice is on its way. If you don't see it within a few minutes, check your spam folder.",
  },
  {
    n: "02",
    title: "Complete the Onboarding Questionnaire",
    body: "You will receive a second email with your Onboarding Questionnaire. This is where the extraction begins — your answers become the raw material of your Architecture. Take your time. There are no wrong answers, only honest ones.",
  },
  {
    n: "03",
    title: "The work begins",
    body: "Once your questionnaire is received, I start. You will not hear silence — you will hear nothing until the work is ready to be exceptional. Delivery within the agreed timeline.",
  },
]

const WHAT_IS_COMING = [
  "A Differentiation Diagnostic that shows you in black and white the open ground no competitor occupies.",
  "A Narrative Platform — your position written as one defensible sentence, your story structured, your pillars named.",
  "A Language System — the words that belong to you, the words forbidden to you, before and after examples drawn from your own communications.",
  "A Deployment Kit — copy you can use the Monday after. Homepage rewrite. Pitch in three formats. 10 to 15 speaking angles ready to post.",
  "A Coherence Guide — so your identity holds, even when you are not the one writing.",
]

export default function ThankYouPage() {
  const hero = useReveal()
  const steps = useReveal()
  const coming = useReveal()
  const manifesto = useReveal()
  const cta = useReveal()

  const [count, setCount] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => {
        if (c >= 47) { clearInterval(interval); return 47 }
        return c + 1
      })
    }, 40)
    return () => clearInterval(interval)
  }, [])

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>

      {/* HERO */}
      <section
        ref={hero.ref as any}
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px clamp(1.5rem,4vw,4rem) 80px",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.45, pointerEvents: "none" }} />

        <div style={{
          maxWidth: 900,
          width: "100%",
          textAlign: "center",
          position: "relative",
          opacity: hero.visible ? 1 : 0,
          transform: hero.visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 1s ease",
        }}>

          {/* Badge */}
          <div style={{
            display: "inline-block",
            padding: "8px 20px",
            border: `1px solid ${COLOR}`,
            borderRadius: 100,
            fontSize: 11,
            letterSpacing: "0.2em",
            color: COLOR,
            marginBottom: 48,
            textTransform: "uppercase",
            fontFamily: SANS,
          }}>
            Purchase Confirmed · Commission N° {count}
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: SERIF,
            fontSize: "clamp(2.5rem,6vw,5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: 16,
          }}>
            Your house has
          </h1>
          <h1 style={{
            fontFamily: SERIF,
            fontSize: "clamp(2.5rem,6vw,5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: 40,
            background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontStyle: "italic",
          }}>
            been commissioned.
          </h1>

          <p style={{
            fontFamily: SERIF,
            fontSize: "clamp(1.1rem,1.8vw,1.4rem)",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.72)",
            maxWidth: 680,
            margin: "0 auto 24px",
            lineHeight: 1.6,
          }}>
            Congratulations on securing your Brand Narrative Architecture. 🍓
          </p>

          <p style={{
            fontFamily: SANS,
            fontSize: "clamp(0.95rem,1.3vw,1.05rem)",
            color: "rgba(255,255,255,0.55)",
            maxWidth: 580,
            margin: "0 auto 56px",
            lineHeight: 1.7,
          }}>
            We have successfully received your payment. Your confirmation email with invoice is on its way. Look out for our Onboarding Questionnaire email — it is where everything begins.
          </p>

          {/* Divider ornament */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 0 }}>
            <div style={{ width: 60, height: 1, background: "rgba(255,255,255,0.15)" }} />
            <span style={{ color: COLOR, fontSize: 18 }}>✦</span>
            <div style={{ width: 60, height: 1, background: "rgba(255,255,255,0.15)" }} />
          </div>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section
        ref={steps.ref as any}
        style={{
          padding: "120px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          background: "#0d0d0d",
        }}
      >
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          opacity: steps.visible ? 1 : 0,
          transform: steps.visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase", fontFamily: SANS }}>
              What Happens Now
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              Three steps. Then the work.
            </h2>
          </div>

          <div style={{ display: "grid", gap: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)" }}>
            {NEXT_STEPS.map((s) => (
              <div key={s.n} style={{
                background: "#0a0a0a",
                padding: "48px clamp(1.5rem,3vw,3rem)",
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "clamp(1.5rem,4vw,4rem)",
                alignItems: "start",
              }}>
                <div style={{ fontFamily: SERIF, fontSize: "clamp(1.75rem,3vw,2.5rem)", color: COLOR, fontWeight: 700, lineHeight: 1, minWidth: 70 }}>
                  {s.n}
                </div>
                <div>
                  <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.25rem,2vw,1.6rem)", fontWeight: 600, marginBottom: 16, letterSpacing: "-0.02em" }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: 0 }}>
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS COMING */}
      <section
        ref={coming.ref as any}
        style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div style={{
          maxWidth: 900,
          margin: "0 auto",
          opacity: coming.visible ? 1 : 0,
          transform: coming.visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase", fontFamily: SANS }}>
              What You Commissioned
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              A reminder of what is being built.
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid rgba(255,255,255,0.07)" }}>
            {WHAT_IS_COMING.map((item, i) => (
              <div key={i} style={{
                padding: "28px 32px",
                borderBottom: i < WHAT_IS_COMING.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                display: "flex",
                gap: 20,
                alignItems: "flex-start",
                background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent",
              }}>
                <span style={{ color: COLOR, fontSize: 16, lineHeight: 1.6, flexShrink: 0 }}>✦</span>
                <p style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(0.95rem,1.3vw,1.1rem)",
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO SECTION */}
      <section
        ref={manifesto.ref as any}
        style={{
          padding: "140px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          background: "#0d0d0d",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 65%)`, opacity: 0.18, pointerEvents: "none" }} />
        <div style={{
          maxWidth: 720,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          opacity: manifesto.visible ? 1 : 0,
          transform: manifesto.visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 32, textTransform: "uppercase", fontFamily: SANS }}>
            A Note
          </div>

          <p style={{
            fontFamily: SERIF,
            fontSize: "clamp(1.3rem,2.2vw,1.75rem)",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.55,
            letterSpacing: "-0.01em",
            marginBottom: 32,
          }}>
            "Most founders arrive with fragments. A sentence they've used a hundred times. A pitch that almost works. A story they haven't found the words for yet.
          </p>
          <p style={{
            fontFamily: SERIF,
            fontSize: "clamp(1.3rem,2.2vw,1.75rem)",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.55,
            letterSpacing: "-0.01em",
            marginBottom: 48,
          }}>
            What you commissioned is the thing they were circling. You will recognize it the moment you read it."
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20 }}>
            <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.2)" }} />
            <p style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.45)", letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>
              Hamza · Strawberry Production · Paris
            </p>
            <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.2)" }} />
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section
        ref={cta.ref as any}
        style={{
          padding: "120px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.35, pointerEvents: "none" }} />
        <div style={{
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          opacity: cta.visible ? 1 : 0,
          transform: cta.visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}>
          <h2 style={{
            fontFamily: SERIF,
            fontSize: "clamp(2rem,4.5vw,3.25rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: 24,
          }}>
            While you wait —
          </h2>
          <p style={{
            fontFamily: SERIF,
            fontSize: "clamp(1rem,1.5vw,1.2rem)",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.6,
            maxWidth: 560,
            margin: "0 auto 48px",
          }}>
            Read the method. Understand the architecture you commissioned. The more clearly you see what is being built, the more powerful the extraction session.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/strawberry-method" style={{
              display: "inline-block",
              background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`,
              color: "#fff",
              padding: "16px 36px",
              borderRadius: 100,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.04em",
              boxShadow: `0 20px 60px ${GLOW}`,
            }}>
              Read The Method →
            </Link>

            <Link href="/case-studies" style={{
              display: "inline-block",
              background: "transparent",
              color: "rgba(255,255,255,0.75)",
              padding: "16px 36px",
              borderRadius: 100,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "0.04em",
              border: "1px solid rgba(255,255,255,0.2)",
            }}>
              View Case Studies
            </Link>
          </div>

          <div style={{ marginTop: 56, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p style={{ fontFamily: SANS, fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 8px" }}>
              Questions? Contact directly
            </p>
            <a href="mailto:Strawberryprod.contact@gmail.com" style={{ fontFamily: SERIF, fontSize: "1rem", fontStyle: "italic", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
              Strawberryprod.contact@gmail.com
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
