"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

const STRIPE_URL = "https://buy.stripe.com/4gMeV6eeMdv6g2O3Vef7i0a"

const PILLARS = [
  { n: "I", title: "The Narrative Spine", body: "The core mythology your house is built on. Origin, conviction, enemy, promise — written as a constitution, not a tagline." },
  { n: "II", title: "The Perception Map", body: "How the world sees your category today, where the cultural vacuums are, and which territory you can own without permission." },
  { n: "III", title: "The Founder Archetype", body: "The figure your audience needs you to be. Posture, voice, references, recurring obsessions — the persona made operational." },
  { n: "IV", title: "The Audience Universe", body: "Four psychographic profiles written like film characters. What they fear at 3am, what they want to be seen as, what they refuse to say out loud." },
  { n: "V", title: "The 90-Day Doctrine", body: "The first three months of execution mapped as a single narrative arc. What to say, in what order, on what surface, and why each piece compounds the next." },
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
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.05 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

// ============ ACT I — THE FRAME ============

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

function MockupDedication() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="60" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="3" textAnchor="middle">— DEDICATION —</text>
      <line x1="170" y1="80" x2="230" y2="80" stroke="#e63946" strokeWidth="1" />
      <text x="200" y="200" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" textAnchor="middle">To the founders</text>
      <text x="200" y="230" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" textAnchor="middle">who refuse</text>
      <text x="200" y="260" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" textAnchor="middle">to sound like</text>
      <text x="200" y="290" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" textAnchor="middle">everyone else.</text>
      <line x1="180" y1="330" x2="220" y2="330" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <text x="200" y="360" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic" textAnchor="middle">This document is</text>
      <text x="200" y="378" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic" textAnchor="middle">your constitution.</text>
      <text x="200" y="396" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic" textAnchor="middle">Treat it as one.</text>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">P. 02 · THE BRAND NARRATIVE AUDIT</text>
    </svg>
  )
}

function MockupIndex() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">CONTENTS</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 03</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="100" fill="#fff" fontFamily="Playfair Display, serif" fontSize="22" fontWeight="700">Index.</text>
      <g transform="translate(30, 150)">
        <text x="0" y="0" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">I.</text>
        <text x="26" y="0" fill="#fff" fontFamily="Playfair Display, serif" fontSize="12">The Narrative Bible</text>
        <text x="340" y="0" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">04</text>
        <text x="0" y="32" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">II.</text>
        <text x="26" y="32" fill="#fff" fontFamily="Playfair Display, serif" fontSize="12">Narrative Audit & Strategy</text>
        <text x="340" y="32" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">14</text>
        <text x="0" y="64" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">III.</text>
        <text x="26" y="64" fill="#fff" fontFamily="Playfair Display, serif" fontSize="12">Business Intelligence</text>
        <text x="340" y="64" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">22</text>
        <text x="0" y="96" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">IV.</text>
        <text x="26" y="96" fill="#fff" fontFamily="Playfair Display, serif" fontSize="12">Content Flywheel Blueprint</text>
        <text x="340" y="96" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">36</text>
        <line x1="0" y1="130" x2="340" y2="130" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="0" y="158" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2">APPENDIX</text>
        <text x="0" y="184" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="11">Executive Synthesis</text>
        <text x="340" y="184" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">42</text>
        <text x="0" y="204" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="11">Decision Matrix</text>
        <text x="340" y="204" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">43</text>
        <text x="0" y="224" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="11">Quick Wins · 14 days</text>
        <text x="340" y="224" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">44</text>
        <text x="0" y="244" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="11">Signature</text>
        <text x="340" y="244" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">45</text>
      </g>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">THE BRAND NARRATIVE AUDIT</text>
    </svg>
  )
}

// ============ ACT II — THE SOUL ============

function MockupSpine() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">SECTION I · BIBLE</text>
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

function MockupOrigin() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">SECTION I · BIBLE</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 06</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="100" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">THE ORIGIN STORY</text>
      <text x="30" y="130" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontWeight="700">The moment</text>
      <text x="30" y="154" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" fontWeight="400">everything changed.</text>
      <g transform="translate(30, 200)">
        <line x1="0" y1="20" x2="340" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <circle cx="20" cy="20" r="8" fill="#0d0d0d" stroke="#e63946" strokeWidth="1.5" />
        <text x="20" y="50" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="8" textAnchor="middle">BEFORE</text>
        <circle cx="130" cy="20" r="8" fill="#0d0d0d" stroke="#e63946" strokeWidth="1.5" />
        <text x="130" y="50" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="8" textAnchor="middle">RUPTURE</text>
        <circle cx="240" cy="20" r="10" fill="#e63946" />
        <text x="240" y="50" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="8" textAnchor="middle" fontWeight="700">THE MOMENT</text>
        <circle cx="330" cy="20" r="8" fill="#0d0d0d" stroke="#e63946" strokeWidth="1.5" />
        <text x="330" y="50" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="8" textAnchor="middle">AFTER</text>
      </g>
      <line x1="30" y1="290" x2="32" y2="380" stroke="#e63946" strokeWidth="2" />
      <text x="48" y="310" fill="rgba(255,255,255,0.85)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">There is always a date.</text>
      <text x="48" y="332" fill="rgba(255,255,255,0.85)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">A conversation. A failure.</text>
      <text x="48" y="354" fill="rgba(255,255,255,0.85)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">A refusal. We name it,</text>
      <text x="48" y="376" fill="rgba(255,255,255,0.85)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">and the house begins.</text>
      <g fill="rgba(255,255,255,0.35)">
        <rect x="30" y="420" width="340" height="3" />
        <rect x="30" y="430" width="310" height="3" />
        <rect x="30" y="440" width="335" height="3" />
        <rect x="30" y="450" width="290" height="3" />
      </g>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">THE BRAND NARRATIVE AUDIT</text>
    </svg>
  )
}

function MockupManifesto() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="60" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="3" textAnchor="middle">— MANIFESTO —</text>
      <line x1="170" y1="80" x2="230" y2="80" stroke="#e63946" strokeWidth="1" />
      <text x="200" y="150" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" textAnchor="middle">We do not whisper.</text>
      <text x="200" y="180" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" textAnchor="middle">We do not shout.</text>
      <text x="200" y="220" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" textAnchor="middle">We are heard.</text>
      <line x1="160" y1="250" x2="240" y2="250" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <text x="200" y="290" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="13" textAnchor="middle">We refuse the consensus.</text>
      <text x="200" y="312" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="13" textAnchor="middle">We refuse the algorithm.</text>
      <text x="200" y="334" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="13" textAnchor="middle">We refuse the noise.</text>
      <line x1="180" y1="360" x2="220" y2="360" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <text x="200" y="395" fill="#fff" fontFamily="Playfair Display, serif" fontSize="14" fontWeight="700" textAnchor="middle">This is our house.</text>
      <text x="200" y="415" fill="#fff" fontFamily="Playfair Display, serif" fontSize="14" fontWeight="700" textAnchor="middle">Built to be remembered.</text>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">P. 12 · THE BRAND NARRATIVE AUDIT</text>
    </svg>
  )
}

// ============ ACT III — THE INTELLIGENCE ============

function MockupPerceptionMap() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">SECTION II · AUDIT</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 14</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">THE PERCEPTION MAP</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="18" fontWeight="700">Where the field stands.</text>
      <text x="30" y="142" fill="rgba(255,255,255,0.55)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">And where ground is unclaimed.</text>
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
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">SECTION II · AUDIT</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 18</text>
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

function MockupMarketSizing() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">SECTION III · INTELLIGENCE</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 22</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">MARKET SIZING · TAM / SAM / SOM</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontWeight="700">How big the ground is.</text>
      <g transform="translate(200, 290)">
        <circle cx="0" cy="0" r="115" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <text x="0" y="-95" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" textAnchor="middle">TAM</text>
        <text x="0" y="-78" fill="#fff" fontFamily="Playfair Display, serif" fontSize="11" textAnchor="middle">€8.4B</text>
        <circle cx="0" cy="20" r="75" fill="rgba(230,57,70,0.08)" stroke="rgba(230,57,70,0.4)" strokeWidth="1" />
        <text x="0" y="-40" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" textAnchor="middle">SAM</text>
        <text x="0" y="-24" fill="#fff" fontFamily="Playfair Display, serif" fontSize="11" textAnchor="middle">€1.2B</text>
        <circle cx="0" cy="40" r="35" fill="#e63946" opacity="0.3" stroke="#e63946" strokeWidth="1.5" />
        <text x="0" y="42" fill="#fff" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" textAnchor="middle" fontWeight="700">SOM</text>
        <text x="0" y="58" fill="#fff" fontFamily="Playfair Display, serif" fontSize="11" textAnchor="middle">€48M</text>
      </g>
      <line x1="30" y1="450" x2="370" y2="450" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="30" y="475" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">Top-down & bottom-up. 5-year CAGR projections.</text>
      <line x1="30" y1="495" x2="370" y2="495" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="510" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">THE BRAND NARRATIVE AUDIT</text>
    </svg>
  )
}

function MockupCompetitive() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">SECTION III · INTELLIGENCE</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 26</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">COMPETITIVE LANDSCAPE</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontWeight="700">Top 10. The moats.</text>
      <g transform="translate(30, 160)">
        <line x1="0" y1="0" x2="340" y2="0" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <text x="0" y="-8" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2">RANK</text>
        <text x="80" y="-8" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2">ACTOR</text>
        <text x="220" y="-8" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2">REVENUE</text>
        <text x="310" y="-8" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2">MOAT</text>
        <g fill="rgba(255,255,255,0.75)" fontFamily="Playfair Display, serif" fontSize="11">
          <text x="0" y="22">01</text><text x="80" y="22">Atelier A.</text><text x="220" y="22">€42M</text><text x="310" y="22" fill="#e63946">★★★★</text>
          <text x="0" y="46">02</text><text x="80" y="46">Maison B.</text><text x="220" y="46">€28M</text><text x="310" y="46" fill="#e63946">★★★</text>
          <text x="0" y="70">03</text><text x="80" y="70">Studio C.</text><text x="220" y="70">€19M</text><text x="310" y="70" fill="#e63946">★★★</text>
          <text x="0" y="94">04</text><text x="80" y="94">House D.</text><text x="220" y="94">€14M</text><text x="310" y="94" fill="#e63946">★★</text>
          <text x="0" y="118">05</text><text x="80" y="118">Order E.</text><text x="220" y="118">€11M</text><text x="310" y="118" fill="#e63946">★★</text>
          <text x="0" y="142">06</text><text x="80" y="142">Brand F.</text><text x="220" y="142">€8M</text><text x="310" y="142" fill="#e63946">★</text>
          <text x="0" y="166">07</text><text x="80" y="166">Lab G.</text><text x="220" y="166">€6M</text><text x="310" y="166" fill="#e63946">★</text>
          <text x="0" y="190">08</text><text x="80" y="190">Office H.</text><text x="220" y="190">€4M</text><text x="310" y="190" fill="#e63946">★</text>
          <text x="0" y="214">09</text><text x="80" y="214">Bureau I.</text><text x="220" y="214">€3M</text><text x="310" y="214" fill="rgba(255,255,255,0.3)">—</text>
          <text x="0" y="238">10</text><text x="80" y="238">Press J.</text><text x="220" y="238">€2M</text><text x="310" y="238" fill="rgba(255,255,255,0.3)">—</text>
        </g>
        <line x1="0" y1="260" x2="340" y2="260" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      </g>
      <g transform="translate(30, 440)">
        <rect x="0" y="0" width="340" height="30" fill="rgba(230,57,70,0.08)" stroke="rgba(230,57,70,0.3)" strokeWidth="1" />
        <text x="170" y="19" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic" textAnchor="middle">White space identified · 3 territories unclaimed</text>
      </g>
      <line x1="30" y1="495" x2="370" y2="495" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="510" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">THE BRAND NARRATIVE AUDIT</text>
    </svg>
  )
}

function MockupSwot() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">SECTION III · INTELLIGENCE</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 30</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">SWOT · PORTER FIVE FORCES</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontWeight="700">Strategic terrain.</text>
      <g transform="translate(30, 160)">
        <rect x="0" y="0" width="165" height="100" fill="rgba(230,57,70,0.05)" stroke="rgba(230,57,70,0.3)" strokeWidth="1" />
        <text x="12" y="22" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">STRENGTHS</text>
        <text x="12" y="42" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="10">✦ Narrative depth</text>
        <text x="12" y="58" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="10">✦ Founder authority</text>
        <text x="12" y="74" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="10">✦ Cultural fluency</text>
        <text x="12" y="90" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="10">✦ Premium positioning</text>
        <rect x="175" y="0" width="165" height="100" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <text x="187" y="22" fill="rgba(255,255,255,0.7)" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">WEAKNESSES</text>
        <text x="187" y="42" fill="rgba(255,255,255,0.55)" fontFamily="Playfair Display, serif" fontSize="10">✦ Operational scale</text>
        <text x="187" y="58" fill="rgba(255,255,255,0.55)" fontFamily="Playfair Display, serif" fontSize="10">✦ Tech depth</text>
        <text x="187" y="74" fill="rgba(255,255,255,0.55)" fontFamily="Playfair Display, serif" fontSize="10">✦ Distribution gaps</text>
        <text x="187" y="90" fill="rgba(255,255,255,0.55)" fontFamily="Playfair Display, serif" fontSize="10">✦ Founder dependency</text>
        <rect x="0" y="110" width="165" height="100" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <text x="12" y="132" fill="rgba(255,255,255,0.7)" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">OPPORTUNITIES</text>
        <text x="12" y="152" fill="rgba(255,255,255,0.55)" fontFamily="Playfair Display, serif" fontSize="10">✦ AI saturation</text>
        <text x="12" y="168" fill="rgba(255,255,255,0.55)" fontFamily="Playfair Display, serif" fontSize="10">✦ Trust collapse</text>
        <text x="12" y="184" fill="rgba(255,255,255,0.55)" fontFamily="Playfair Display, serif" fontSize="10">✦ Editorial revival</text>
        <text x="12" y="200" fill="rgba(255,255,255,0.55)" fontFamily="Playfair Display, serif" fontSize="10">✦ Premium ceiling</text>
        <rect x="175" y="110" width="165" height="100" fill="rgba(230,57,70,0.05)" stroke="rgba(230,57,70,0.3)" strokeWidth="1" />
        <text x="187" y="132" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">THREATS</text>
        <text x="187" y="152" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="10">✦ Commoditization</text>
        <text x="187" y="168" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="10">✦ Macro pressure</text>
        <text x="187" y="184" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="10">✦ AI-content flood</text>
        <text x="187" y="200" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="10">✦ Margin erosion</text>
      </g>
      <g transform="translate(30, 390)">
        <text x="0" y="0" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">PORTER · FIVE FORCES</text>
        <line x1="0" y1="14" x2="340" y2="14" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <g fontFamily="Inter, sans-serif" fontSize="9" fill="rgba(255,255,255,0.55)">
          <text x="0" y="34">▸ New entrants</text><rect x="120" y="28" width="40" height="6" fill="#e63946" opacity="0.7" /><text x="170" y="34">HIGH</text>
          <text x="0" y="54">▸ Substitutes</text><rect x="120" y="48" width="55" height="6" fill="#e63946" /><text x="185" y="54">CRITICAL</text>
          <text x="0" y="74">▸ Buyer power</text><rect x="120" y="68" width="30" height="6" fill="#e63946" opacity="0.5" /><text x="160" y="74">MED</text>
          <text x="0" y="94">▸ Supplier power</text><rect x="120" y="88" width="15" height="6" fill="#e63946" opacity="0.3" /><text x="145" y="94">LOW</text>
        </g>
      </g>
      <line x1="30" y1="495" x2="370" y2="495" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="510" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">THE BRAND NARRATIVE AUDIT</text>
    </svg>
  )
}

function MockupCustomerJourney() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">SECTION III · INTELLIGENCE</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 34</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">CUSTOMER JOURNEY MAP</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontWeight="700">Awareness to advocacy.</text>
      <g transform="translate(40, 200)">
        <path d="M 0 80 Q 80 20 160 60 T 320 100" stroke="#e63946" strokeWidth="2" fill="none" opacity="0.5" />
        <g fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="1" fill="rgba(255,255,255,0.6)">
          <circle cx="0" cy="80" r="5" fill="#e63946" />
          <text x="0" y="105" textAnchor="middle">AWARE</text>
          <text x="0" y="135" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic" textAnchor="middle">curiosity</text>
          <circle cx="80" cy="42" r="5" fill="#e63946" />
          <text x="80" y="22" textAnchor="middle">CONSIDER</text>
          <text x="80" y="155" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic" textAnchor="middle">doubt</text>
          <circle cx="160" cy="60" r="5" fill="#e63946" />
          <text x="160" y="40" textAnchor="middle">DECIDE</text>
          <text x="160" y="135" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic" textAnchor="middle">conviction</text>
          <circle cx="240" cy="80" r="5" fill="#e63946" />
          <text x="240" y="105" textAnchor="middle">ENGAGE</text>
          <text x="240" y="155" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic" textAnchor="middle">belonging</text>
          <circle cx="320" cy="100" r="7" fill="#e63946" />
          <text x="320" y="125" textAnchor="middle" fill="#e63946" fontWeight="700">ADVOCATE</text>
          <text x="320" y="155" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic" textAnchor="middle">pride</text>
        </g>
      </g>
      <line x1="30" y1="420" x2="370" y2="420" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="30" y="445" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">Every friction point named. Every emotion mapped.</text>
      <g fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="9">
        <text x="30" y="468">▸ 4 stages mapped end-to-end</text>
        <text x="30" y="484">▸ Friction inventory · 12 points identified</text>
      </g>
      <line x1="30" y1="495" x2="370" y2="495" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="510" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">THE BRAND NARRATIVE AUDIT</text>
    </svg>
  )
}

// ============ ACT IV — THE ENGINE ============

function MockupDoctrine() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">SECTION IV · ENGINE</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 36</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">THE 90-DAY DOCTRINE</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontWeight="700">Three months,</text>
      <text x="30" y="146" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" fontWeight="400">one arc.</text>
      <g transform="translate(30, 200)">
        <line x1="0" y1="40" x2="340" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="0" y1="35" x2="0" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1="62" y1="35" x2="62" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1="124" y1="35" x2="124" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1="186" y1="35" x2="186" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1="248" y1="35" x2="248" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1="310" y1="35" x2="310" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <rect x="0" y="20" width="93" height="4" fill="#e63946" opacity="0.7" />
        <text x="0" y="14" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="1">MONTH 01 · SET THE FRAME</text>
        <rect x="93" y="60" width="124" height="4" fill="#e63946" opacity="0.5" />
        <text x="93" y="80" fill="rgba(255,255,255,0.65)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="1">MONTH 02 · BUILD THE GRAVITY</text>
        <rect x="217" y="20" width="123" height="4" fill="#e63946" opacity="0.3" />
        <text x="217" y="14" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="1">MONTH 03 · COMPOUND</text>
        <circle cx="30" cy="40" r="4" fill="#e63946" />
        <circle cx="155" cy="40" r="5" fill="#e63946" />
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

function MockupContentIdeas() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">SECTION IV · ENGINE</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 38</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">50 CONTENT IDEAS · 5 PILLARS</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontWeight="700">The ammunition.</text>
      <g transform="translate(30, 160)">
        <rect x="0" y="0" width="340" height="48" fill="rgba(230,57,70,0.04)" stroke="rgba(230,57,70,0.2)" strokeWidth="1" />
        <text x="12" y="20" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">AUTHORITY · 10 ideas</text>
        <text x="12" y="38" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">Why I refuse the playbook · The thing nobody says about scaling · ...</text>
        <rect x="0" y="56" width="340" height="48" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="12" y="76" fill="#fff" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">CONTRARIAN · 10 ideas</text>
        <text x="12" y="94" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">The myth of growth hacks · Why your funnel is dead · ...</text>
        <rect x="0" y="112" width="340" height="48" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="12" y="132" fill="#fff" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">TRANSFORMATION · 10 ideas</text>
        <text x="12" y="150" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">From service provider to category leader · The identity shift · ...</text>
        <rect x="0" y="168" width="340" height="48" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="12" y="188" fill="#fff" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">INTIMACY · 10 ideas</text>
        <text x="12" y="206" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">The night I almost quit · What clients never ask about · ...</text>
        <rect x="0" y="224" width="340" height="48" fill="rgba(230,57,70,0.04)" stroke="rgba(230,57,70,0.2)" strokeWidth="1" />
        <text x="12" y="244" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">PROOF · 10 ideas</text>
        <text x="12" y="262" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">Case study · 312% in 90 days · The before / after of a real house · ...</text>
      </g>
      <line x1="30" y1="450" x2="370" y2="450" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="30" y="475" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">Each idea framed. Sequenced. Ready to be filmed, written, sent.</text>
      <line x1="30" y1="495" x2="370" y2="495" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="510" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">THE BRAND NARRATIVE AUDIT</text>
    </svg>
  )
}

function MockupDistribution() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">SECTION IV · ENGINE</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 40</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">DISTRIBUTION MAP</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontWeight="700">Where the universe</text>
      <text x="30" y="146" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" fontWeight="400">meets the world.</text>
      <g transform="translate(200, 310)">
        <circle cx="0" cy="0" r="44" fill="rgba(230,57,70,0.15)" stroke="#e63946" strokeWidth="1.5" />
        <text x="0" y="-3" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="middle" fontWeight="700">THE HOUSE</text>
        <text x="0" y="11" fill="rgba(255,255,255,0.6)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1" textAnchor="middle">narrative core</text>
        <line x1="0" y1="-44" x2="0" y2="-90" stroke="rgba(230,57,70,0.5)" strokeWidth="1" />
        <circle cx="0" cy="-105" r="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
        <text x="0" y="-101" fill="#fff" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1" textAnchor="middle">LONG</text>
        <text x="0" y="-91" fill="rgba(255,255,255,0.6)" fontFamily="Inter, sans-serif" fontSize="6" textAnchor="middle">essays</text>
        <line x1="38" y1="-22" x2="80" y2="-46" stroke="rgba(230,57,70,0.5)" strokeWidth="1" />
        <circle cx="98" cy="-57" r="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
        <text x="98" y="-53" fill="#fff" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1" textAnchor="middle">SHORT</text>
        <text x="98" y="-43" fill="rgba(255,255,255,0.6)" fontFamily="Inter, sans-serif" fontSize="6" textAnchor="middle">posts</text>
        <line x1="42" y1="14" x2="90" y2="34" stroke="rgba(230,57,70,0.5)" strokeWidth="1" />
        <circle cx="110" cy="44" r="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
        <text x="110" y="48" fill="#fff" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1" textAnchor="middle">VIDEO</text>
        <line x1="0" y1="44" x2="0" y2="90" stroke="rgba(230,57,70,0.5)" strokeWidth="1" />
        <circle cx="0" cy="105" r="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
        <text x="0" y="109" fill="#fff" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1" textAnchor="middle">EMAIL</text>
        <line x1="-42" y1="14" x2="-90" y2="34" stroke="rgba(230,57,70,0.5)" strokeWidth="1" />
        <circle cx="-110" cy="44" r="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
        <text x="-110" y="48" fill="#fff" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1" textAnchor="middle">PODCAST</text>
        <line x1="-38" y1="-22" x2="-80" y2="-46" stroke="rgba(230,57,70,0.5)" strokeWidth="1" />
        <circle cx="-98" cy="-57" r="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
        <text x="-98" y="-53" fill="#fff" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1" textAnchor="middle">EVENT</text>
        <text x="-98" y="-43" fill="rgba(255,255,255,0.6)" fontFamily="Inter, sans-serif" fontSize="6" textAnchor="middle">irl</text>
      </g>
      <line x1="30" y1="460" x2="370" y2="460" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="30" y="482" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">Six surfaces. One voice. One narrative.</text>
      <line x1="30" y1="495" x2="370" y2="495" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="510" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">THE BRAND NARRATIVE AUDIT</text>
    </svg>
  )
}

// ============ ACT V — THE SIGNATURE ============

function MockupSignature() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="60" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="3" textAnchor="middle">— THE END —</text>
      <line x1="170" y1="80" x2="230" y2="80" stroke="#e63946" strokeWidth="1" />
      <text x="200" y="170" fill="#fff" fontFamily="Playfair Display, serif" fontSize="22" fontStyle="italic" textAnchor="middle" fontWeight="400">This was your house.</text>
      <text x="200" y="200" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="22" fontStyle="italic" textAnchor="middle" fontWeight="400">Now build it.</text>
      <line x1="100" y1="260" x2="300" y2="260" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <text x="200" y="290" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="3" textAnchor="middle">COMMISSION</text>
      <text x="200" y="312" fill="#fff" fontFamily="Playfair Display, serif" fontSize="14" fontStyle="italic" textAnchor="middle">N° 001</text>
      <text x="200" y="350" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="3" textAnchor="middle">DELIVERED</text>
      <text x="200" y="372" fill="#fff" fontFamily="Playfair Display, serif" fontSize="14" fontStyle="italic" textAnchor="middle">Date of delivery</text>
      <text x="200" y="410" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="3" textAnchor="middle">SIGNED</text>
      <text x="200" y="438" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="18" fontStyle="italic" textAnchor="middle">Strawberry Production</text>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">P. 45 · THE BRAND NARRATIVE AUDIT</text>
    </svg>
  )
}

// ============ MOCKUP GROUPS ============

const ACT_I = [
  { component: <MockupCover />, label: "The Cover", caption: "A numbered edition. Your house, given its name." },
  { component: <MockupDedication />, label: "The Dedication", caption: "The opening invocation. The reason this document exists." },
  { component: <MockupIndex />, label: "The Index", caption: "Four sections, five appendices. The architecture, declared." },
]

const ACT_II = [
  { component: <MockupSpine />, label: "The Narrative Spine", caption: "The mythology, articulated in pages — not slogans." },
  { component: <MockupOrigin />, label: "The Origin Story", caption: "The rupture before. The conviction after. Named with precision." },
  { component: <MockupManifesto />, label: "The Manifesto", caption: "A single page. The doctrine, made unforgettable." },
]

const ACT_III = [
  { component: <MockupPerceptionMap />, label: "The Perception Map", caption: "The cultural field, with the unclaimed ground located." },
  { component: <MockupArchetype />, label: "Founder Archetype & Audience", caption: "Characters, not personas. Posture, obsessions, voice." },
  { component: <MockupMarketSizing />, label: "Market Sizing · TAM/SAM/SOM", caption: "Top-down and bottom-up. Five-year CAGR projections." },
  { component: <MockupCompetitive />, label: "Competitive Landscape", caption: "Top 10 actors. Revenue, moats, white space." },
  { component: <MockupSwot />, label: "SWOT · Porter Five Forces", caption: "Strategic terrain. Strengths, threats, force pressure." },
  { component: <MockupCustomerJourney />, label: "Customer Journey Map", caption: "Awareness to advocacy. Every friction point named." },
]

const ACT_IV = [
  { component: <MockupDoctrine />, label: "The 90-Day Doctrine", caption: "The first three months sequenced as one arc." },
  { component: <MockupContentIdeas />, label: "50 Content Ideas", caption: "Five pillars. Ten ideas each. Ammunition, framed." },
  { component: <MockupDistribution />, label: "The Distribution Map", caption: "Six surfaces. One voice. Where the universe meets the world." },
]

const ACT_V = [
  { component: <MockupSignature />, label: "The Signature Page", caption: "Numbered. Dated. Signed. A document built to be kept." },
]

function MockupGrid({ items }: { items: typeof ACT_I }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28 }}>
      {items.map((m, i) => (
        <figure key={i} style={{ margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
            {m.component}
          </div>
          <figcaption>
            <div style={{ fontSize: 10, letterSpacing: "0.25em", color: COLOR, marginBottom: 6, textTransform: "uppercase", fontFamily: SANS }}>
              {m.label}
            </div>
            <p style={{ fontFamily: SERIF, fontSize: "0.95rem", fontStyle: "italic", color: "rgba(255,255,255,0.7)", lineHeight: 1.55, margin: 0 }}>
              {m.caption}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

function ActTitle({ roman, title }: { roman: string; title: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48, marginTop: 24 }}>
      <div style={{ fontFamily: SERIF, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: COLOR, fontStyle: "italic", marginBottom: 8, letterSpacing: "-0.01em" }}>
        Act {roman}
      </div>
      <div style={{ width: 40, height: 1, background: COLOR, margin: "0 auto 16px" }} />
      <div style={{ fontFamily: SANS, fontSize: 11, color: "rgba(255,255,255,0.55)", letterSpacing: "0.3em", textTransform: "uppercase" }}>
        {title}
      </div>
    </div>
  )
}

// ============ PAGE ============

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

      <section ref={inside.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem) 140px", borderTop: "1px solid rgba(255,255,255,0.07)", background: "#0d0d0d", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center top, ${GLOW} 0%, transparent 60%)`, opacity: 0.2, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", opacity: inside.visible ? 1 : 0, transform: inside.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>

          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>Inside the Audit</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24, lineHeight: 1.15 }}>
              The architecture of the artifact.
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "clamp(0.95rem,1.3vw,1.1rem)", color: "rgba(255,255,255,0.6)", maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
              The Audit is a single editorial document. Forty-five pages, designed to be read like a manifesto and consulted like a constitution. Below, the book itself — page by page.
            </p>
          </div>

          <ActTitle roman="I" title="The Frame" />
          <MockupGrid items={ACT_I} />

          <div style={{ height: 100 }} />
          <ActTitle roman="II" title="The Soul" />
          <MockupGrid items={ACT_II} />

          <div style={{ height: 100 }} />
          <ActTitle roman="III" title="The Intelligence" />
          <MockupGrid items={ACT_III} />

          <div style={{ height: 100 }} />
          <ActTitle roman="IV" title="The Engine" />
          <MockupGrid items={ACT_IV} />

          <div style={{ height: 100 }} />
          <ActTitle roman="V" title="The Signature" />
          <MockupGrid items={ACT_V} />

          <div style={{ marginTop: 100, textAlign: "center" }}>
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
