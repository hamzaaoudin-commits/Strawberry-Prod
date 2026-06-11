"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { track } from "@vercel/analytics"

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
        <text x="14" y="72" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Dis
