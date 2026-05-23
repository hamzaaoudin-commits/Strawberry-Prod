"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

const STRIPE_URL = "https://buy.stripe.com/4gMeV6eeMdv6g2O3Vef7i0a"

const PILLARS = [
  {
    n: "I",
    title: "The Narrative Spine",
    body: "The core mythology your house is built on. Origin, conviction, enemy, promise — written as a constitution, not a tagline.",
  },
  {
    n: "II",
    title: "The Perception Map",
    body: "How the world sees your category today, where the cultural vacuums are, and which territory you can own without permission.",
  },
  {
    n: "III",
    title: "The Founder Archetype",
    body: "The figure your audience needs you to be. Posture, voice, references, recurring obsessions — the persona made operational.",
  },
  {
    n: "IV",
    title: "The Audience Universe",
    body: "Four psychographic profiles written like film characters. What they fear at 3am, what they want to be seen as, what they refuse to say out loud.",
  },
  {
    n: "V",
    title: "The 90-Day Doctrine",
    body: "The first three months of execution mapped as a single narrative arc. What to say, in what order, on what surface, and why each piece compounds the next.",
  },
]

const PHASES = [
  { week: "Week 1", title: "Immersion", body: "Deep interviews, archive review, market and cultural intake. We absorb the house from the inside." },
  { week: "Week 2", title: "Architecture", body: "The narrative spine is drafted. Perception map and archetype defined. First doctrine sketch." },
  { week: "Week 3", title: "Refinement", body: "Audience profiles written. The 90-day doctrine laid out. Two rounds of revision with the founder." },
  { week: "Week 4", title: "Delivery", body: "Final 45+ page intelligence report. Walkthrough session. The house is given its constitution." },
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
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

function MockupCover() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <rect x="40" y="60" width="40" height="2" fill="#e63946" />
      <text x="40" y="88" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">N° 001</text>
      <text x="40" y="240" fill="#fff" fontFamily="Playfair Display, serif" fontSize="34" fontWeight="700">The Brand</text>
      <text x="40" y="278" fill="#fff" fontFamily="Playfair Display, serif" fontSize="34" fontWeight="700">Narrative</text>
      <text x="40" y="316" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="34" fontStyle="italic" fontWeight="400">Audit.</text>
      <line x1="40" y1="430" x2="360" y2="430" stroke="#2a2a2a" strokeWidth="1" />
      <text x="40" y="455" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2">COMMISSIONED FOR</text>
      <text x="40" y="472" fill="#fff" fontFamily="Playfair Display, serif" fontSize="14" fontStyle="italic">The House</text>
      <text x="360" y="472" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" textAnchor="end">STRAWBERRY PROD.</text>
    </svg>
  )
}

function MockupSpine() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">PILLAR I</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 04</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="100" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">THE NARRATIVE SPINE</text>
      <text x="30" y="140" fill="#fff" fontFamily="Playfair Display, serif" fontSize="22" fontWeight="700">A house is not</text>
      <text x="30" y="166" fill="#fff" fontFamily="Playfair Display, serif" fontSize="22" fontWeight="700">a positioning.</text>
      <text x="30" y="192" fill="#fff" fontFamily="Playfair Display, serif" fontSize="22" fontStyle="italic" fontWeight="400">It is a mythology.</text>
      <g fill="rgba(255,255,255,0.35)">
        <rect x="30" y="230" width="340" height="3" />
        <rect x="30" y="240" width="320" height="3" />
        <rect x="30" y="250" width="335" height="3" />
        <rect x="30" y="260" width="290" height="3" />
        <rect x="30" y="270" width="310" height="3" />
        <rect x="30" y="280" width="325" height="3" />
      </g>
      <line x1="30" y1="320" x2="32" y2="380" stroke="#e63946" strokeWidth="2" />
      <text x="48" y="338" fill="rgba(255,255,255,0.85)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">The conviction the</text>
      <text x="48" y="356" fill="rgba(255,255,255,0.85)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">founder holds when</text>
      <text x="48" y="374" fill="rgba(255,255,255,0.85)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">no one is watching.</text>
      <g fill="rgba(255,255,255,0.35)">
        <rect x="30" y="415" width="340" height="3" />
        <rect x="30" y="425" width="305" height="3" />
        <rect x="30" y="435" width="320" height="3" />
        <rect x="30" y="445" width="280" height="3" />
      </g>
      <line x1="30" y1="485" x2="370" y2="485" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="500" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">THE BRAND NARRATIVE AUDIT</text>
    </svg>
  )
}

function MockupPerceptionMap() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">PILLAR II</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 12</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">THE PERCEPTION MAP</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="18" fontWeight="700">Where the field stands.</text>
      <text x="30" y="142" fill="rgba(255,255,255,0.55)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">And where it has left ground unclaimed.</text>
      <g transform="translate(60, 180)">
        <line x1="140" y1="0" x2="140" y2="280" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="0" y1="140" x2="280" y2="140" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <rect x="0" y="0" width="280" height="280" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="140" y="-10" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">EMOTIONAL</text>
        <text x="140" y="298" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">RATIONAL</text>
        <text x="-8" y="143" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="end">QUIET</text>
        <text x="288" y="143" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2">LOUD</text>
        <circle cx="200" cy="90" r="4" fill="rgba(255,255,255,0.3)" />
        <text x="208" y="93" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="8">Comp. A</text>
        <circle cx="220" cy="170" r="4" fill="rgba(255,255,255,0.3)" />
        <text x="228" y="173" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="8">Comp. B</text>
        <circle cx="180" cy="220" r="4" fill="rgba(255,255,255,0.3)" />
        <text x="188" y="223" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="8">Comp. C</text>
        <circle cx="100" cy="180" r="4" fill="rgba(255,255,255,0.3)" />
        <text x="108" y="183" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="8">Comp. D</text>
        <circle cx="70" cy="70" r="14" fill="#e63946" opacity="0.2" />
        <circle cx="70" cy="70" r="7" fill="#e63946" />
        <text x="70" y="55" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="1" textAnchor="middle" fontWeight="700">THE HOUSE</text>
      </g>
    </svg>
  )
}

function MockupArchetype() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">PILLAR III · IV</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 24</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">THE FOUNDER ARCHETYPE</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontWeight="700">The Outsider Operator.</text>
      <g transform="translate(40, 160)">
        <rect x="0" y="0" width="100" height="130" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" />
        <circle cx="50" cy="45" r="22" fill="rgba(230,57,70,0.15)" stroke="#e63946" strokeWidth="1" />
        <path d="M 22 110 Q 22 75 50 75 Q 78 75 78 110 Z" fill="rgba(230,57,70,0.15)" stroke="#e63946" strokeWidth="1" />
      </g>
      <g transform="translate(160, 160)">
        <text x="0" y="0" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2">POSTURE</text>
        <text x="0" y="16" fill="#fff" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">Refuses the consensus.</text>
        <text x="0" y="44" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2">OBSESSION</text>
        <text x="0" y="60" fill="#fff" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">What others will not say.</text>
        <text x="0" y="88" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2">REFERENCES</text>
        <text x="0" y="104" fill="#fff" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">Didion. Burnham. Lynch.</text>
        <text x="0" y="132" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2">VOICE</text>
        <text x="0" y="148" fill="#fff" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">Cinematic. Unhurried.</text>
      </g>
      <line x1="30" y1="335" x2="370" y2="335" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="360" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">AUDIENCE · 01 of 04</text>
      <text x="30" y="385" fill="#fff" fontFamily="Playfair Display, serif" fontSize="16" fontWeight="700">The Quiet Operator.</text>
      <g fill="rgba(255,255,255,0.4)">
        <rect x="30" y="405" width="340" height="3" />
        <rect x="30" y="415" width="310" height="3" />
        <rect x="30" y="425" width="335" height="3" />
        <rect x="30" y="435" width="280" height="3" />
        <rect x="30" y="445" width="320" height="3" />
        <rect x="30" y="455" width="295" height="3" />
        <rect x="30" y="465" width="315" height="3" />
      </g>
      <line x1="30" y1="495" x2="370" y2="495" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="510" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">THE BRAND NARRATIVE AUDIT</text>
    </svg>
  )
}

function MockupDoctrine() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">PILLAR V</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 38</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">THE 90-DAY DOCTRINE</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontWeight="700">Three months,</text>
      <text x="30" y="146" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" fontWeight="400">one arc.</text>
      <g transform="translate(30, 200)">
        <line x1="0" y1="40" x2="340" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="0" y1="35" x2="0" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1="31" y1="35" x2="31" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1="62" y1="35" x2="62" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1="93" y1="35" x2="93" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1="124" y1="35" x2="124" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1="155" y1="35" x2="155" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1="186" y1="35" x2="186" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1="217" y1="35" x2="217" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1="248" y1="35" x2="248" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1="279" y1="35" x2="279" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1="310" y1="35" x2="310" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1="341" y1="35" x2="341" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <rect x="0" y="20" width="93" height="4" fill="#e63946" opacity="0.7" />
        <text x="0" y="14" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="1">MONTH 01 · SET THE FRAME</text>
        <rect x="93" y="60" width="124" height="4" fill="#e63946" opacity="0.5" />
        <text x="93" y="80" fill="rgba(255,255,255,0.65)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="1">MONTH 02 · BUILD THE GRAVITY</text>
        <rect x="217" y="20" width="123" height="4" fill="#e63946" opacity="0.3" />
        <text x="217" y="14" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="1">MONTH 03 · COMPOUND</text>
        <circle cx="30" cy="40" r="4" fill="#e63946" />
        <circle cx="62" cy="40" r="3" fill="#fff" />
        <circle cx="155" cy="40" r="5" fill="#e63946" />
        <circle cx="217" cy="40" r="3" fill="#fff" />
        <circle cx="310" cy="40" r="4" fill="#e63946" />
      </g>
      <g transform="translate(30, 340)">
        <text x="0" y="0" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2">CADENCE</text>
        <text x="0" y="20" fill="#fff" fontFamily="Playfair Display, serif" fontSize="11">✦ One foundational essay / month</text>
        <text x="0" y="38" fill="#fff" fontFamily="Playfair Display, serif" fontSize="11">✦ Two short-form pieces / week</text>
        <text x="0" y="56" fill="#fff" fontFamily="Playfair Display, serif" fontSize="11">✦ One signature campaign / quarter</text>
        <text x="0" y="74" fill="#fff" fontFamily="Playfair Display, serif" fontSize="11">✦ Distribution sequenced, not random</text>
      </g>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">THE BRAND NARRATIVE AUDIT</text>
    </svg>
  )
}

const MOCKUPS = [
  { component: <MockupCover />, label: "The Cover", caption: "A numbered edition. Your house, given its name." },
  { component: <MockupSpine />, label: "The Narrative Spine", caption: "The mythology, articulated in pages — not slogans." },
  { component: <MockupPerceptionMap />, label: "The Perception Map", caption: "The cultural field, with the unclaimed ground located." },
  { component: <MockupArchetype />, label: "Founder Archetype & Audience", caption: "Characters, not personas. Posture, obsessions, voice." },
  { component: <MockupDoctrine />, label: "The 90-Day Doctrine", caption: "The first three months sequenced as one arc." },
]

export default function BrandNarrativeAuditPage() {
  const hero = useReveal()
  const problem = useReveal()
  const pillars = useReveal()
  const inside = useReveal()
  const process = useReveal()
  const whom = useReveal()
  const invest = useReveal()
  const cta = useReveal()

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>

      <section ref={hero.ref as any} style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px clamp(1.5rem,4vw,4rem) 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.4, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, width: "100%", textAlign: "center", position: "relative", opacity: hero.visible ? 1 : 0, transform: hero.visible ? "translateY(0)" : "translateY(30px)", transition: "all 1s ease" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 40, textTransform: "uppercase" }}>
            The Signature Commission · 9,500€
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem,7vw,5.5rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 32 }}>
            We don&apos;t build brands.<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>We build the universe<br />they live in.</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.25rem)", color: "rgba(255,255,255,0.7)", maxWidth: 720, margin: "0 auto 56px", lineHeight: 1.6 }}>
            The Brand Narrative Audit is a four-week commission. At the end, your house has a constitution: a 45+ page intelligence report that turns a business into a world worth remembering.
          </p>
          <Link href={STRIPE_URL} target="_blank" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "18px 44px", borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em", boxShadow: `0 20px 60px ${GLOW}` }}>
            Commission the Audit →
          </Link>
        </div>
      </section>

      <section ref={problem.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", opacity: problem.visible ? 1 : 0, transform: problem.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>The Saturation</div>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.5rem,3vw,2.25rem)", fontWeight: 400, lineHeight: 1.4, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.92)" }}>
            Most brands today are forgettable before they are seen. A generation of AI-generic identity, founder-led content that sounds like everyone else, and category sameness has made being remembered the hardest commercial problem of the decade.
          </p>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.25rem,2vw,1.5rem)", fontWeight: 400, lineHeight: 1.5, color: COLOR, marginTop: 32, fontStyle: "italic" }}>
            We make houses that survive the noise.
          </p>
        </div>
      </section>

      <section ref={pillars.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", opacity: pillars.visible ? 1 : 0, transform: pillars.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>What We Craft</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Five pillars of a remembered house.
            </h2>
          </div>
          <div style={{ display: "grid", gap: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)" }}>
            {PILLARS.map((p) => (
              <div key={p.n} style={{ background: "#0a0a0a", padding: "48px clamp(1.5rem,3vw,3rem)", display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(1.5rem,4vw,4rem)", alignItems: "start" }}>
                <div style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", color: COLOR, fontWeight: 700, lineHeight: 1, minWidth: 80 }}>{p.n}</div>
                <div>
                  <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.25rem,2vw,1.75rem)", fontWeight: 600, marginBottom: 16, letterSpacing: "-0.02em" }}>{p.title}</h3>
                  <p style={{ fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={inside.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", background: "#0d0d0d", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center top, ${GLOW} 0%, transparent 60%)`, opacity: 0.2, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", opacity: inside.visible ? 1 : 0, transform: inside.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>Inside the Audit</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24, lineHeight: 1.15 }}>
              A glimpse of the artifact.
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "clamp(0.95rem,1.3vw,1.1rem)", color: "rgba(255,255,255,0.6)", maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
              The Audit is delivered as a single editorial document. Forty-five pages, set in serif, designed to be read like a manifesto and consulted like a constitution. Below, a preview of what lives inside.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28 }}>
            {MOCKUPS.map((m, i) => (
              <figure key={i} style={{ margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)`, borderRadius: 2, overflow: "hidden" }}>
                  {m.component}
                </div>
                <figcaption>
                  <div style={{ fontSize: 10, letterSpacing: "0.25em", color: COLOR, marginBottom: 6, textTransform: "uppercase", fontFamily: SANS }}>
                    {String(i + 1).padStart(2, "0")} — {m.label}
                  </div>
                  <p style={{ fontFamily: SERIF, fontSize: "0.95rem", fontStyle: "italic", color: "rgba(255,255,255,0.7)", lineHeight: 1.55, margin: 0 }}>
                    {m.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div style={{ marginTop: 80, textAlign: "center" }}>
            <p style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Stylized previews · Final document delivered as PDF
            </p>
          </div>
        </div>
      </section>

      <section ref={process.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", opacity: process.visible ? 1 : 0, transform: process.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>The Process</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Four weeks. One constitution.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {PHASES.map((ph, i) => (
              <div key={i} style={{ padding: "32px 28px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", position: "relative" }}>
                <div style={{ fontSize: 10, letterSpacing: "0.25em", color: COLOR, marginBottom: 16, textTransform: "uppercase" }}>{ph.week}</div>
                <h3 style={{ fontFamily: SERIF, fontSize: "1.5rem", fontWeight: 600, marginBottom: 16, letterSpacing: "-0.02em" }}>{ph.title}</h3>
                <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>{ph.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={whom.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", opacity: whom.visible ? 1 : 0, transform: whom.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 32, textTransform: "uppercase", textAlign: "center" }}>For Whom</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,5rem)" }}>
            <div>
              <h3 style={{ fontFamily: SERIF, fontSize: "1.4rem", fontWeight: 600, marginBottom: 24, color: "#fff" }}>Commission this if —</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, paddingLeft: 24, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> You are a founder, not a marketing department</li>
                <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, paddingLeft: 24, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> Your business deserves a world, not a tagline</li>
                <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, paddingLeft: 24, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> You sense that being remembered will outrun being seen</li>
                <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, paddingLeft: 24, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> You will read 45 pages and let them change how you operate</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: SERIF, fontSize: "1.4rem", fontWeight: 600, marginBottom: 24, color: "rgba(255,255,255,0.6)" }}>Do not commission this if —</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, paddingLeft: 24, position: "relative" }}><span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.4)" }}>—</span> You want a logo and three brand colors</li>
                <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, paddingLeft: 24, position: "relative" }}><span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.4)" }}>—</span> You are looking for performance marketing tactics</li>
                <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, paddingLeft: 24, position: "relative" }}><span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.4)" }}>—</span> You need an answer this week</li>
                <li style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, paddingLeft: 24, position: "relative" }}><span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.4)" }}>—</span> You believe brand is a cost, not the asset</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section ref={invest.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", opacity: invest.visible ? 1 : 0, transform: invest.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 40, textTransform: "uppercase" }}>The Investment</div>
          <div style={{ fontFamily: SERIF, fontSize: "clamp(4rem,8vw,6rem)", fontWeight: 700, lineHeight: 1, marginBottom: 16, letterSpacing: "-0.04em" }}>
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>9,500€</span>
          </div>
          <div style={{ fontSize: 13, letterSpacing: "0.2em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: 48 }}>One commission · Four weeks · One constitution</div>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.1rem,1.6vw,1.35rem)", fontStyle: "italic", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, maxWidth: 640, margin: "0 auto" }}>
            A McKinsey engagement of comparable depth starts at 80,000€. We are not McKinsey — we are the studio they would commission for the narrative they cannot write themselves.
          </p>
        </div>
      </section>

      <section ref={cta.ref as any} style={{ padding: "140px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.5, pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", opacity: cta.visible ? 1 : 0, transform: cta.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 40 }}>
            Make your house unforgettable.
          </h2>
          <Link href={STRIPE_URL} target="_blank" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "20px 52px", borderRadius: 100, fontSize: 16, fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em", boxShadow: `0 20px 60px ${GLOW}` }}>
            Commission the Audit →
          </Link>
          <div style={{ marginTop: 24, fontSize: 13, color: "rgba(255,255,255,0.45)", letterSpacing: "0.05em" }}>
            Limited to four commissions per quarter.
          </div>
        </div>
      </section>

    </main>
  )
}
