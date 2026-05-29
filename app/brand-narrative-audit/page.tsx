"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

const STRIPE_URL = "https://buy.stripe.com/fZu8wIb2A62E9Eq8buf7i0b"

const DELIVERABLES = [
  {
    n: "01",
    title: "The Differentiation Diagnostic",
    body: "An analysis of your narrative competitive field: what your 5-6 direct competitors say, the words and promises they all share, and a map of the territories already saturated. You see in black and white why you all sound alike — and the open ground no one occupies, that you will take.",
  },
  {
    n: "02",
    title: "The Narrative Platform",
    body: "Your unique position written as one defensible sentence. Your brand story structured — origin, fight, vision. And your 3-4 message pillars: the ideas you will hammer until people associate them with you instinctively.",
  },
  {
    n: "03",
    title: "The Language System",
    body: "Your tone of voice described with precision. Your lexicon: the words that belong to you, and the forbidden list — your competitors' words — so you never sound like them. With before/after examples drawn from your own communications.",
  },
  {
    n: "04",
    title: "The Deployment Kit",
    body: "The part you use the Monday after. Ready-to-use copy, not abstract recommendations: a rewrite of your homepage (headline, subhead, key sections); your presentation line in three formats (one line / one paragraph / 30-second pitch); 10 to 15 speaking angles ready to turn into posts, articles or newsletters, each tied to one of your pillars; a reusable bio and company description.",
  },
  {
    n: "05",
    title: "The Coherence Guide",
    body: "A short document that lets anyone on your team write in your voice without consulting you: rules, examples, do/don't. Your identity holds, even when you are not the one writing.",
  },
]

const HUMAN_PACT = [
  {
    title: "Anyone can prompt 45 pages in three minutes.",
    body: "Most do. The result reads like every other brand document. This is what happens when a human spends weeks listening, refusing, and choosing — when the goal is not to be produced, but to be unforgettable. The AI can write a brand document. It cannot decide which sentence deserves to be torn out.",
  },
  {
    title: "Written once. For you only.",
    body: "Each brand is built from scratch. The narrative I write for your house will never appear — not adapted, not echoed, not inspired by — in another commission. AI recycles. I do not.",
  },
  {
    title: "From Paris. By inheritance.",
    body: "This studio operates from Paris — heir to a French school of narrative precision. Barthes. Foucault. Pivot. Beigbeder. A culture where what is not said matters as much as what is. Where a sentence is rewritten until nothing can be removed.",
  },
  {
    title: "Four commissions per quarter. No more.",
    body: "Not a sales tactic — a structural choice. AI scales infinitely. I do not. Four houses per quarter, written by hand. If you commission this work, you receive something built only for you, by someone whose attention is rationed by design.",
  },
]

const ALSO_RECEIVE = [
  {
    label: "The Walkthrough",
    title: "A walkthrough. Thirty days later.",
    body: "One month after delivery, we meet again. Ninety minutes, on call or in person. I ask one question: what have you changed? The document is the artifact. The walkthrough is the moment it becomes operational. AI has no memory of your house. I do.",
  },
  {
    label: "The Object",
    title: "The artifact, optionally bound.",
    body: "On request, the work is printed, hand-bound, and signed. A single numbered edition for your house. Delivered to your office or your home. The PDF is for working. The bound edition is for keeping. AI cannot deliver an object.",
  },
]

const SUCCESS_SIGNALS = [
  "You are cited as a reference, not just another option",
  "People come to you, instead of you chasing them",
  "You hold your prices without negotiating them down",
  "People start repeating your own words back to you",
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
      <text x="40" y="236" fill="#fff" fontFamily="Playfair Display, serif" fontSize="30" fontWeight="700">The Brand</text>
      <text x="40" y="272" fill="#fff" fontFamily="Playfair Display, serif" fontSize="30" fontWeight="700">Narrative</text>
      <text x="40" y="308" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="30" fontStyle="italic" fontWeight="400">Architecture.</text>
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
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">P. 02 · BRAND NARRATIVE ARCHITECTURE</text>
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
        <text x="0" y="0" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">01.</text>
        <text x="34" y="0" fill="#fff" fontFamily="Playfair Display, serif" fontSize="12">Differentiation Diagnostic</text>
        <text x="340" y="0" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">04</text>
        <text x="0" y="36" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">02.</text>
        <text x="34" y="36" fill="#fff" fontFamily="Playfair Display, serif" fontSize="12">The Narrative Platform</text>
        <text x="340" y="36" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">10</text>
        <text x="0" y="72" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">03.</text>
        <text x="34" y="72" fill="#fff" fontFamily="Playfair Display, serif" fontSize="12">The Language System</text>
        <text x="340" y="72" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">16</text>
        <text x="0" y="108" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">04.</text>
        <text x="34" y="108" fill="#fff" fontFamily="Playfair Display, serif" fontSize="12">The Deployment Kit</text>
        <text x="340" y="108" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">22</text>
        <text x="0" y="144" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">05.</text>
        <text x="34" y="144" fill="#fff" fontFamily="Playfair Display, serif" fontSize="12">The Coherence Guide</text>
        <text x="340" y="144" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">28</text>
        <line x1="0" y1="180" x2="340" y2="180" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="0" y="210" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2">APPENDIX</text>
        <text x="0" y="236" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="11">Signature</text>
        <text x="340" y="236" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">32</text>
      </g>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">BRAND NARRATIVE ARCHITECTURE</text>
    </svg>
  )
}

// ============ ACT II — THE IDENTITY ============

function MockupSpine() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">02 · PLATFORM</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 10</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="100" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">THE NARRATIVE PLATFORM</text>
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
      <text x="200" y="500" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">BRAND NARRATIVE ARCHITECTURE</text>
    </svg>
  )
}

function MockupOrigin() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">02 · PLATFORM</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 12</text>
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
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">BRAND NARRATIVE ARCHITECTURE</text>
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
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">P. 14 · BRAND NARRATIVE ARCHITECTURE</text>
    </svg>
  )
}

function MockupPerceptionMap() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">01 · DIAGNOSTIC</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 06</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">DIFFERENTIATION DIAGNOSTIC</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="18" fontWeight="700">Where the field stands.</text>
      <text x="30" y="142" fill="rgba(255,255,255,0.55)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">And the ground no one occupies.</text>
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
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">03 · LANGUAGE</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 16</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">THE LANGUAGE SYSTEM</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="18" fontWeight="700">Words that belong to you.</text>
      <g transform="translate(30, 150)">
        <text x="0" y="0" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">WORDS WE USE</text>
        <text x="0" y="22" fill="rgba(255,255,255,0.8)" fontFamily="Playfair Display, serif" fontSize="12">house · doctrine · craft · refuse</text>
        <text x="0" y="42" fill="rgba(255,255,255,0.8)" fontFamily="Playfair Display, serif" fontSize="12">unforgettable · constitution</text>
        <text x="0" y="78" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">WORDS WE NEVER USE</text>
        <text x="0" y="100" fill="rgba(255,255,255,0.4)" fontFamily="Playfair Display, serif" fontSize="12" textDecoration="line-through">solutions · synergy · leverage</text>
        <text x="0" y="120" fill="rgba(255,255,255,0.4)" fontFamily="Playfair Display, serif" fontSize="12" textDecoration="line-through">disrupt · game-changer · ROI</text>
      </g>
      <line x1="30" y1="300" x2="370" y2="300" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="326" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">BEFORE</text>
      <text x="30" y="346" fill="rgba(255,255,255,0.45)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">We provide innovative branding solutions</text>
      <text x="30" y="364" fill="rgba(255,255,255,0.45)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">to help businesses grow.</text>
      <text x="30" y="396" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">AFTER</text>
      <text x="30" y="416" fill="#fff" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">We build the universe your brand lives in.</text>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">BRAND NARRATIVE ARCHITECTURE</text>
    </svg>
  )
}

// ============ ACT III — DEPLOYMENT ============

function MockupContentIdeas() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">04 · DEPLOYMENT</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 24</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">SPEAKING ANGLES · BY PILLAR</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontWeight="700">Ready by Monday.</text>
      <g transform="translate(30, 160)">
        <rect x="0" y="0" width="340" height="58" fill="rgba(230,57,70,0.04)" stroke="rgba(230,57,70,0.2)" strokeWidth="1" />
        <text x="12" y="22" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">PILLAR I · AUTHORITY</text>
        <text x="12" y="40" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">Why I refuse the playbook everyone follows.</text>
        <text x="12" y="54" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">The thing nobody says about scaling.</text>
        <rect x="0" y="68" width="340" height="58" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="12" y="90" fill="#fff" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">PILLAR II · CONTRARIAN</text>
        <text x="12" y="108" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">The myth of growth hacks.</text>
        <text x="12" y="122" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">Why your funnel quietly died.</text>
        <rect x="0" y="136" width="340" height="58" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="12" y="158" fill="#fff" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">PILLAR III · TRANSFORMATION</text>
        <text x="12" y="176" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">From service provider to category leader.</text>
        <text x="12" y="190" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">The identity shift nobody prepared you for.</text>
        <rect x="0" y="204" width="340" height="58" fill="rgba(230,57,70,0.04)" stroke="rgba(230,57,70,0.2)" strokeWidth="1" />
        <text x="12" y="226" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">PILLAR IV · PROOF</text>
        <text x="12" y="244" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">The before and after of a real house.</text>
        <text x="12" y="258" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">What changed when the words changed.</text>
      </g>
      <line x1="30" y1="440" x2="370" y2="440" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="30" y="466" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">10-15 angles, each tied to a pillar. Posts, articles, newsletters.</text>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">BRAND NARRATIVE ARCHITECTURE</text>
    </svg>
  )
}

function MockupDistribution() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">05 · COHERENCE</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 28</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">THE COHERENCE GUIDE</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontWeight="700">One voice. Any hand.</text>
      <g transform="translate(30, 160)">
        <rect x="0" y="0" width="162" height="120" fill="rgba(230,57,70,0.04)" stroke="rgba(230,57,70,0.25)" strokeWidth="1" />
        <text x="14" y="26" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">DO</text>
        <text x="14" y="50" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="11">✦ Lead with conviction</text>
        <text x="14" y="72" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="11">✦ Name the enemy</text>
        <text x="14" y="94" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="11">✦ Short. Declarative.</text>
        <text x="14" y="112" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="11">✦ Cut the qualifier</text>
        <rect x="178" y="0" width="162" height="120" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <text x="192" y="26" fill="rgba(255,255,255,0.6)" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">DO NOT</text>
        <text x="192" y="50" fill="rgba(255,255,255,0.45)" fontFamily="Playfair Display, serif" fontSize="11">— Hedge with maybe</text>
        <text x="192" y="72" fill="rgba(255,255,255,0.45)" fontFamily="Playfair Display, serif" fontSize="11">— Use corporate jargon</text>
        <text x="192" y="94" fill="rgba(255,255,255,0.45)" fontFamily="Playfair Display, serif" fontSize="11">— Chase every trend</text>
        <text x="192" y="112" fill="rgba(255,255,255,0.45)" fontFamily="Playfair Display, serif" fontSize="11">— Sound like the field</text>
      </g>
      <g transform="translate(30, 320)" fill="rgba(255,255,255,0.35)">
        <rect x="0" y="0" width="340" height="3" />
        <rect x="0" y="12" width="310" height="3" />
        <rect x="0" y="24" width="330" height="3" />
        <rect x="0" y="36" width="285" height="3" />
        <rect x="0" y="48" width="320" height="3" />
      </g>
      <line x1="30" y1="410" x2="370" y2="410" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="30" y="436" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">Your identity holds, even when you are not the one writing.</text>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">BRAND NARRATIVE ARCHITECTURE</text>
    </svg>
  )
}

// ============ ACT IV — THE SIGNATURE ============

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
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">P. 32 · BRAND NARRATIVE ARCHITECTURE</text>
    </svg>
  )
}

// ============ MOCKUP GROUPS ============

const ACT_I = [
  { component: <MockupCover />, label: "The Cover", caption: "A numbered edition. Your house, given its name." },
  { component: <MockupDedication />, label: "The Dedication", caption: "The opening invocation. The reason this document exists." },
  { component: <MockupIndex />, label: "The Index", caption: "Five deliverables, one signature. The architecture, declared." },
]

const ACT_II = [
  { component: <MockupPerceptionMap />, label: "The Differentiation Diagnostic", caption: "The narrative field, with the ground no one occupies located." },
  { component: <MockupSpine />, label: "The Narrative Platform", caption: "Your position, your story, your pillars — articulated." },
  { component: <MockupOrigin />, label: "The Origin Story", caption: "The rupture before. The conviction after. Named with precision." },
  { component: <MockupManifesto />, label: "The Manifesto", caption: "A single page. The doctrine, made unforgettable." },
  { component: <MockupArchetype />, label: "The Language System", caption: "Your words. The forbidden ones. Before and after." },
]

const ACT_III = [
  { component: <MockupContentIdeas />, label: "The Deployment Kit", caption: "Speaking angles by pillar. Ready the Monday after." },
  { component: <MockupDistribution />, label: "The Coherence Guide", caption: "One voice, any hand. Your identity holds without you." },
]

const ACT_IV = [
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

export default function BrandNarrativeArchitecturePage() {
  const hero = useReveal()
  const why = useReveal()
  const human = useReveal()
  const build = useReveal()
  const extraction = useReveal()
  const deliver = useReveal()
  const inside = useReveal()
  const success = useReveal()
  const also = useReveal()
  const invest = useReveal()
  const cta = useReveal()

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>

      <section ref={hero.ref as any} style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px clamp(1.5rem,4vw,4rem) 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.4, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, width: "100%", textAlign: "center", position: "relative", opacity: hero.visible ? 1 : 0, transform: hero.visible ? "translateY(0)" : "translateY(30px)", transition: "all 1s ease" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 40, textTransform: "uppercase" }}>
            Brand Narrative Architecture · 4,500€
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.25rem,6vw,4.75rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: 32 }}>
            The brand story that makes you<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>impossible to confuse —<br />and impossible to generate.</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.25rem)", color: "rgba(255,255,255,0.7)", maxWidth: 720, margin: "0 auto 56px", lineHeight: 1.6 }}>
            The identity, position, and language that make you recognizable at first glance — and impossible to confuse with your competitors, even when they arm themselves with AI.
          </p>
          <Link href={STRIPE_URL} target="_blank" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "18px 44px", borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em", boxShadow: `0 20px 60px ${GLOW}` }}>
            Commission the Work →
          </Link>
        </div>
      </section>

      <section ref={why.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", opacity: why.visible ? 1 : 0, transform: why.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>Why Now</div>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.5rem,3vw,2.25rem)", fontWeight: 400, lineHeight: 1.4, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.92)" }}>
            AI is saturating your market faster than you see it. Your competitors now produce in one click what took weeks: articles, visuals, pages, campaigns. Content becomes free, infinite, and perfectly interchangeable. In that noise, quality is no longer enough to set you apart — everyone has become good.
          </p>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.25rem,2vw,1.5rem)", fontWeight: 400, lineHeight: 1.5, color: COLOR, marginTop: 32, fontStyle: "italic" }}>
            What cannot be generated is an identity. Differentiation is no longer a marketing luxury — it is your condition for survival.
          </p>
        </div>
      </section>

      <section ref={human.ref as any} style={{ padding: "140px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", background: "#0d0d0d", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 65%)`, opacity: 0.18, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", opacity: human.visible ? 1 : 0, transform: human.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 88 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>Why a Human</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4.5vw,3.25rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 28, lineHeight: 1.1 }}>
              The AI-proof pact.
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "clamp(0.98rem,1.4vw,1.15rem)", color: "rgba(255,255,255,0.6)", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
              What makes a house unforgettable is no longer the document. It is who refused to write it like everyone else.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)" }}>
            {HUMAN_PACT.map((p, i) => (
              <div key={i} style={{ background: "#0a0a0a", padding: "44px clamp(1.5rem,3vw,2.5rem)", display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ fontFamily: SERIF, fontSize: "1.6rem", color: COLOR, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em" }}>0{i + 1}.</div>
                <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.2rem,1.8vw,1.5rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.25, color: "#fff", margin: 0 }}>{p.title}</h3>
                <p style={{ fontFamily: SANS, fontSize: "0.96rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.7, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 64, textAlign: "center" }}>
            <p style={{ fontFamily: SERIF, fontSize: "clamp(1.1rem,1.6vw,1.4rem)", fontStyle: "italic", color: COLOR, letterSpacing: "-0.01em", lineHeight: 1.5, maxWidth: 700, margin: "0 auto" }}>
              When everyone has access to the same machine, the only edge left is the one a human refuses to share.
            </p>
          </div>
        </div>
      </section>

      <section ref={build.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", opacity: build.visible ? 1 : 0, transform: build.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>What I Build</div>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.4rem,2.6vw,2rem)", fontWeight: 400, lineHeight: 1.45, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.9)" }}>
            I build the story that makes your brand recognizable at first glance and impossible to confuse with your competitors — even when they arm themselves with AI. Not a surface slogan: the identity, position, and language that make people remember you, cite you, and choose you, even when the offer across the table costs less.
          </p>
        </div>
      </section>

      <section ref={extraction.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", opacity: extraction.visible ? 1 : 0, transform: extraction.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>How It Happens</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.75rem,3.5vw,2.5rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 32, lineHeight: 1.2 }}>
            It begins with an extraction no one can automate.
          </h2>
          <p style={{ fontFamily: SANS, fontSize: "clamp(1rem,1.4vw,1.15rem)", color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
            I make you talk, at length, to reach what makes you genuinely singular — often what you no longer see because you are inside it. This human material, your truth, becomes the foundation. No AI can produce it, because it has not lived you.
          </p>
        </div>
      </section>

      <section ref={deliver.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", opacity: deliver.visible ? 1 : 0, transform: deliver.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>What You Receive</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Five deliverables. Exploitable Monday.
            </h2>
          </div>
          <div style={{ display: "grid", gap: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)" }}>
            {DELIVERABLES.map((d) => (
              <div key={d.n} style={{ background: "#0a0a0a", padding: "48px clamp(1.5rem,3vw,3rem)", display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(1.5rem,4vw,4rem)", alignItems: "start" }}>
                <div style={{ fontFamily: SERIF, fontSize: "clamp(1.75rem,3vw,2.5rem)", color: COLOR, fontWeight: 700, lineHeight: 1, minWidth: 70 }}>{d.n}</div>
                <div>
                  <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.25rem,2vw,1.75rem)", fontWeight: 600, marginBottom: 16, letterSpacing: "-0.02em" }}>{d.title}</h3>
                  <p style={{ fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>{d.body}</p>
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
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>Inside the Architecture</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24, lineHeight: 1.15 }}>
              A glimpse of the artifact.
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "clamp(0.95rem,1.3vw,1.1rem)", color: "rgba(255,255,255,0.6)", maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
              Delivered as a single editorial document, designed to be read like a manifesto and consulted like a constitution. Below, the work itself — page by page.
            </p>
          </div>

          <ActTitle roman="I" title="The Frame" />
          <MockupGrid items={ACT_I} />

          <div style={{ height: 100 }} />
          <ActTitle roman="II" title="The Identity" />
          <MockupGrid items={ACT_II} />

          <div style={{ height: 100 }} />
          <ActTitle roman="III" title="The Deployment" />
          <MockupGrid items={ACT_III} />

          <div style={{ height: 100 }} />
          <ActTitle roman="IV" title="The Signature" />
          <MockupGrid items={ACT_IV} />

          <div style={{ marginTop: 100, textAlign: "center" }}>
            <p style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Stylized previews · Final document delivered as PDF
            </p>
          </div>
        </div>
      </section>

      <section ref={success.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", opacity: success.visible ? 1 : 0, transform: success.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>How We Will Know It Worked</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              Remarkable is measurable.
            </h2>
          </div>
          <p style={{ fontFamily: SANS, fontSize: "1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
            Before we start, we note together how you would describe today what sets you apart — usually it is vague, and sounds like what the others would say. A few months later, we look at what changed.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {SUCCESS_SIGNALS.map((s, i) => (
              <div key={i} style={{ padding: "28px 28px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ color: COLOR, fontSize: 18, lineHeight: 1.4 }}>✦</span>
                <p style={{ fontFamily: SERIF, fontSize: "1.05rem", fontStyle: "italic", color: "rgba(255,255,255,0.85)", lineHeight: 1.5, margin: 0 }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={also.ref as any} style={{ padding: "140px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", background: "#0d0d0d", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 65%)`, opacity: 0.15, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", opacity: also.visible ? 1 : 0, transform: also.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>What You Also Receive</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Beyond the document.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 28 }}>
            {ALSO_RECEIVE.map((r, i) => (
              <div key={i} style={{ padding: "44px clamp(1.5rem,3vw,2.5rem)", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ fontSize: 10, letterSpacing: "0.3em", color: COLOR, textTransform: "uppercase", fontFamily: SANS }}>{r.label}</div>
                <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.3rem,2vw,1.6rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.25, color: "#fff", margin: 0 }}>{r.title}</h3>
                <p style={{ fontFamily: SANS, fontSize: "0.96rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.7, margin: 0 }}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={invest.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", opacity: invest.visible ? 1 : 0, transform: invest.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 40, textTransform: "uppercase" }}>The Investment</div>
          <div style={{ fontFamily: SERIF, fontSize: "clamp(4rem,8vw,6rem)", fontWeight: 700, lineHeight: 1, marginBottom: 16, letterSpacing: "-0.04em" }}>
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>4,500€</span>
          </div>
          <div style={{ fontSize: 13, letterSpacing: "0.2em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: 48 }}>A complete repositioning · Delivered and exploitable</div>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.1rem,1.6vw,1.35rem)", fontStyle: "italic", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, maxWidth: 640, margin: "0 auto" }}>
            The price of a few weeks of advertising that vanishes the moment you stop paying. Your narrative, by contrast, belongs to you and works for you continuously.
          </p>
        </div>
      </section>

      <section ref={cta.ref as any} style={{ padding: "140px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.5, pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", opacity: cta.visible ? 1 : 0, transform: cta.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 40 }}>
            Become impossible to confuse.
          </h2>
          <Link href={STRIPE_URL} target="_blank" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "20px 52px", borderRadius: 100, fontSize: 16, fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em", boxShadow: `0 20px 60px ${GLOW}` }}>
            Commission the Work →
          </Link>
          <div style={{ marginTop: 24, fontSize: 13, color: "rgba(255,255,255,0.45)", letterSpacing: "0.05em" }}>
            Limited to four commissions per quarter.
          </div>
        </div>
      </section>

    </main>
  )
}
