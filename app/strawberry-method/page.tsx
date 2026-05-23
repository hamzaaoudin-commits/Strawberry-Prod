"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

const STRIPE_URL = "https://buy.stripe.com/4gMeV6eeMdv6g2O3Vef7i0a"

const LETTERS = [
  { letter: "S", name: "Soul", verb: "Find the soul." },
  { letter: "T", name: "Territory", verb: "Map the territory." },
  { letter: "R", name: "Reframe", verb: "Reframe the field." },
  { letter: "A", name: "Architecture", verb: "Build the architecture." },
  { letter: "W", name: "Weaponize", verb: "Embody the universe." },
]

const PRINCIPLES = [
  {
    title: "Speed without shortcuts",
    body: "A method is repeatable. We do not invent the process for each house — we apply a refined one, freeing the time for what is irreducibly creative.",
  },
  {
    title: "Precision over instinct",
    body: "Improvisation is for poets. Building a remembered house demands a structure that holds — five stages, each one earning the next.",
  },
  {
    title: "Refined commission after commission",
    body: "Each engagement sharpens the method. What worked stays, what didn't is rewritten. The S.T.R.A.W. of next year will be sharper than this one.",
  },
]

const STAGES = [
  {
    letter: "S",
    name: "Soul",
    verb: "Find the soul.",
    description: "Before architecture, before language, before strategy — what is the irreducible reason this house exists? Not the elevator pitch. The conviction. The unreasonable belief the founder holds about the world.",
    delivers: [
      "Origin story rewritten as mythology",
      "Founder conviction articulated in one sentence",
      "The enemy named — what this house refuses to accept",
      "The promise — what this house owes the world",
    ],
    output: "A soul document. The constitutional preamble every other decision flows from.",
  },
  {
    letter: "T",
    name: "Territory",
    verb: "Map the territory.",
    description: "A category is a battlefield of perception. Where does the audience currently stand, what stories already occupy their mind, and where are the cultural vacuums — the unclaimed ground that this house can occupy without permission?",
    delivers: [
      "Cultural mapping of the category",
      "Top competitors analyzed for narrative posture",
      "Identification of three territorial vacuums",
      "The chosen ground — the perception territory to own",
    ],
    output: "A perception map. The terrain on which the rest of the work is fought.",
  },
  {
    letter: "R",
    name: "Reframe",
    verb: "Reframe the field.",
    description: "Most brands compete inside the frame the category has set. The remembered ones rewrite the frame itself. We do not position the house against competitors — we redefine the conversation so the house becomes its own category.",
    delivers: [
      "Category redefinition — the new frame proposed",
      "Foundational reframes (3 to 5 conceptual moves)",
      "Language pivot — old words retired, new ones installed",
      "The point of view the audience cannot ignore",
    ],
    output: "A reframe doctrine. The intellectual stance that makes comparison irrelevant.",
  },
  {
    letter: "A",
    name: "Architecture",
    verb: "Build the architecture.",
    description: "Once the soul is found and the field reframed, the narrative architecture is constructed. Five pillars, each a recurring obsession of the house. A founder archetype. Four audience profiles written like film characters. The skeleton on which every piece of communication will hang.",
    delivers: [
      "Five narrative pillars defined and named",
      "Founder archetype articulated — posture, voice, references",
      "Four audience profiles written as characters",
      "The narrative spine — how the pillars connect into one story",
    ],
    output: "A narrative architecture. The structural blueprint of the universe.",
  },
  {
    letter: "W",
    name: "Weaponize",
    verb: "Embody the universe.",
    description: "Architecture without execution is theory. The final stage maps the first ninety days — exactly what the house says, in what order, on which surface, and why each piece compounds the next. The universe becomes operational.",
    delivers: [
      "90-day narrative doctrine",
      "Content territories — the five obsessions to dramatize",
      "Sequencing — which essay sets up which campaign",
      "Distribution logic — surfaces, cadence, tone calibration",
    ],
    output: "A 90-day doctrine. The first three months of the universe made real.",
  },
]

const CONSEQUENCES = [
  { letter: "S", text: "Without Soul — no anchor. Every decision becomes negotiable." },
  { letter: "T", text: "Without Territory — no battlefield. You compete where you cannot win." },
  { letter: "R", text: "Without Reframe — no ownership. You sound like the others, only louder." },
  { letter: "A", text: "Without Architecture — no compounding. Every piece starts from scratch." },
  { letter: "W", text: "Without Weaponize — no embodiment. The doctrine never meets the world." },
]

function useReveal() {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

export default function StrawberryMethodPage() {
  const hero = useReveal()
  const why = useReveal()
  const reveal = useReveal()
  const stages = useReveal()
  const dependency = useReveal()
  const cta = useReveal()

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>

      {/* HERO */}
      <section ref={hero.ref as any} style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px clamp(1.5rem,4vw,4rem) 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.4, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, width: "100%", textAlign: "center", position: "relative", opacity: hero.visible ? 1 : 0, transform: hero.visible ? "translateY(0)" : "translateY(30px)", transition: "all 1s ease" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 40, textTransform: "uppercase" }}>
            The Proprietary Framework
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem,7vw,5.5rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 32 }}>
            The Strawberry<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Method.</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.25rem)", color: "rgba(255,255,255,0.7)", maxWidth: 720, margin: "0 auto 64px", lineHeight: 1.6 }}>
            Five stages. One doctrine. The repeatable architecture behind every house we make unforgettable.
          </p>

          {/* Letter cards preview */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "clamp(8px, 1.5vw, 16px)", maxWidth: 720, margin: "0 auto 48px" }}>
            {LETTERS.map((l) => (
              <div key={l.letter} style={{ textAlign: "center" }}>
                <div style={{ border: `1px solid ${COLOR}`, padding: "clamp(12px, 2vw, 20px) 0", fontFamily: SERIF, fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)", fontWeight: 700, color: COLOR, lineHeight: 1, marginBottom: 8, background: "rgba(230,57,70,0.04)" }}>
                  {l.letter}
                </div>
                <div style={{ fontFamily: SANS, fontSize: "clamp(9px, 1.1vw, 11px)", color: "rgba(255,255,255,0.7)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {l.name}
                </div>
              </div>
            ))}
          </div>

          <div style={{ fontFamily: SERIF, fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)", fontStyle: "italic", color: "rgba(255,255,255,0.55)", letterSpacing: "0.02em" }}>
            Not a checklist. A category-creation engine.
          </div>
        </div>
      </section>

      {/* WHY A METHOD */}
      <section ref={why.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", opacity: why.visible ? 1 : 0, transform: why.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>Why a Framework</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24, lineHeight: 1.15 }}>
              Most studios improvise.<br />We do not.
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "clamp(1rem, 1.3vw, 1.1rem)", color: "rgba(255,255,255,0.65)", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
              A framework is not a constraint — it is the discipline that frees creative depth. The Strawberry Method is what we have refined across every commission so that no part of building a remembered house is left to chance.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {PRINCIPLES.map((p, i) => (
              <div key={i} style={{ padding: "36px 28px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ fontFamily: SERIF, fontSize: "2rem", color: COLOR, fontWeight: 700, lineHeight: 1, marginBottom: 24 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontFamily: SERIF, fontSize: "1.35rem", fontWeight: 600, marginBottom: 16, letterSpacing: "-0.02em" }}>{p.title}</h3>
                <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE REVEAL */}
      <section ref={reveal.ref as any} style={{ padding: "140px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 65%)`, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>The Acronym</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Five stages. In order. Always.
            </h2>
          </div>

          {/* Giant letter cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "clamp(8px, 1.2vw, 16px)", marginBottom: 64 }}>
            {LETTERS.map((l) => (
              <div key={l.letter} style={{ textAlign: "center" }}>
                <div style={{ border: `2px solid ${COLOR}`, padding: "clamp(20px, 4vw, 48px) 0", fontFamily: SERIF, fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, color: COLOR, lineHeight: 1, marginBottom: 20, background: "rgba(230,57,70,0.06)", boxShadow: `0 20px 60px ${GLOW}` }}>
                  {l.letter}
                </div>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR, margin: "0 auto 12px" }} />
                <div style={{ fontFamily: SANS, fontSize: "clamp(10px, 1.3vw, 13px)", color: "#fff", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                  {l.name}
                </div>
              </div>
            ))}
          </div>

          {/* Journey flow */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "clamp(8px, 1.5vw, 20px)", marginBottom: 56 }}>
            {LETTERS.map((l, i) => (
              <div key={l.letter} style={{ display: "flex", alignItems: "center", gap: "clamp(8px, 1.5vw, 20px)" }}>
                <div style={{ fontFamily: SANS, fontSize: "clamp(11px, 1.3vw, 13px)", color: "rgba(255,255,255,0.75)", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
                  {l.verb}
                </div>
                {i < LETTERS.length - 1 && (
                  <div style={{ color: COLOR, fontSize: 14, fontFamily: SANS }}>—</div>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
            <p style={{ fontFamily: SERIF, fontSize: "clamp(1.1rem, 1.7vw, 1.4rem)", fontStyle: "italic", color: "rgba(255,255,255,0.8)", lineHeight: 1.55, letterSpacing: "-0.01em" }}>
              Not a checklist. A category-creation engine.
            </p>
          </div>
        </div>
      </section>

      {/* STAGES */}
      <section ref={stages.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", opacity: stages.visible ? 1 : 0, transform: stages.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>

          <div style={{ textAlign: "center", marginBottom: 96 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>The Five Stages</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              How a house is made unforgettable.
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
            {STAGES.map((s, i) => (
              <article key={s.letter} style={{ position: "relative", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", padding: "clamp(2rem, 4vw, 3.5rem)", overflow: "hidden" }}>

                {/* Ghost letter */}
                <div style={{ position: "absolute", bottom: -40, right: -20, fontFamily: SERIF, fontSize: "clamp(8rem, 18vw, 14rem)", fontWeight: 700, color: "rgba(230,57,70,0.05)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>
                  {s.letter}
                </div>

                <div style={{ position: "relative" }}>
                  {/* Header */}
                  <div style={{ display: "flex", alignItems: "baseline", gap: 24, marginBottom: 16, flexWrap: "wrap" }}>
                    <div style={{ fontFamily: SERIF, fontSize: "clamp(3rem, 6vw, 4.5rem)", color: COLOR, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.04em" }}>
                      {s.letter}.
                    </div>
                    <div style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>
                      {s.name}.
                    </div>
                  </div>

                  <div style={{ fontFamily: SERIF, fontSize: "clamp(1.15rem, 1.8vw, 1.5rem)", fontStyle: "italic", color: COLOR, marginBottom: 32, letterSpacing: "-0.01em" }}>
                    {s.verb}
                  </div>

                  <p style={{ fontFamily: SANS, fontSize: "clamp(0.98rem, 1.3vw, 1.1rem)", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 40, maxWidth: 720 }}>
                    {s.description}
                  </p>

                  {/* What you receive */}
                  <div style={{ marginBottom: 32 }}>
                    <div style={{ fontSize: 10, letterSpacing: "0.25em", color: "rgba(255,255,255,0.5)", marginBottom: 20, textTransform: "uppercase", fontFamily: SANS }}>
                      What we craft
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
                      {s.delivers.map((d, j) => (
                        <li key={j} style={{ fontFamily: SANS, fontSize: "0.95rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.55, paddingLeft: 24, position: "relative" }}>
                          <span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Output */}
                  <div style={{ borderLeft: `2px solid ${COLOR}`, padding: "20px 24px", background: "rgba(230,57,70,0.04)", maxWidth: 720 }}>
                    <div style={{ fontSize: 10, letterSpacing: "0.25em", color: COLOR, marginBottom: 10, textTransform: "uppercase", fontFamily: SANS }}>
                      Output
                    </div>
                    <p style={{ fontFamily: SERIF, fontSize: "clamp(1rem, 1.4vw, 1.15rem)", fontStyle: "italic", color: "rgba(255,255,255,0.9)", lineHeight: 1.55, letterSpacing: "-0.01em" }}>
                      {s.output}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT WORKS — Dependency chain */}
      <section ref={dependency.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", opacity: dependency.visible ? 1 : 0, transform: dependency.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>Why It Works</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24, lineHeight: 1.15 }}>
              Each stage earns the next.
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "1rem", color: "rgba(255,255,255,0.6)", maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
              The order is not aesthetic. Skip a stage and the rest collapses.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {CONSEQUENCES.map((c) => (
              <div key={c.letter} style={{ display: "flex", alignItems: "center", gap: 24, padding: "20px 24px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ flexShrink: 0, width: 56, height: 56, border: `2px solid ${COLOR}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: "1.6rem", fontWeight: 700, color: COLOR, background: "rgba(230,57,70,0.06)" }}>
                  {c.letter}
                </div>
                <p style={{ fontFamily: SERIF, fontSize: "clamp(1rem, 1.4vw, 1.2rem)", color: "rgba(255,255,255,0.85)", lineHeight: 1.5, fontStyle: "italic", letterSpacing: "-0.01em" }}>
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section ref={cta.ref as any} style={{ padding: "140px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.5, pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", opacity: cta.visible ? 1 : 0, transform: cta.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>The Method, Applied</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 32 }}>
            Run S.T.R.A.W.<br />on your house.
          </h2>
          <p style={{ fontFamily: SANS, fontSize: "1.05rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: 48, maxWidth: 600, margin: "0 auto 48px" }}>
            The Brand Narrative Audit is the method, made operational for your house. Four weeks. Five stages. One constitution.
          </p>

          <div style={{ marginBottom: 32, padding: "24px 32px", border: `1px solid rgba(230,57,70,0.3)`, background: "rgba(230,57,70,0.04)", maxWidth: 520, margin: "0 auto 48px" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 12, textTransform: "uppercase" }}>The Signature Commission</div>
            <div style={{ fontFamily: SERIF, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, marginBottom: 8, letterSpacing: "-0.02em" }}>
              The Brand Narrative Audit
            </div>
            <div style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 700, color: COLOR, letterSpacing: "-0.03em" }}>
              9,500€
            </div>
          </div>

          <Link href={STRIPE_URL} target="_blank" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "20px 52px", borderRadius: 100, fontSize: 16, fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em", fontFamily: SANS, boxShadow: `0 20px 60px ${GLOW}`, marginBottom: 24 }}>
            Apply the Method →
          </Link>

          <div style={{ marginTop: 32, fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: SANS }}>
            Proprietary Framework · Strawberry Production
          </div>
        </div>
      </section>

    </main>
  )
}
