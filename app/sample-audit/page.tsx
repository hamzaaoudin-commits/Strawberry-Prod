"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

const Section = ({ n, kicker, title, children }: { n: string; kicker: string; title: string; children: React.ReactNode }) => (
  <section style={{ padding: "clamp(2.5rem,5vw,4rem) 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 10 }}>
      <span style={{ fontFamily: SERIF, fontSize: 28, fontWeight: 700, color: COLOR }}>{n}</span>
      <span style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>{kicker}</span>
    </div>
    <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.5rem,3vw,2.15rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>{title}</h2>
    <div style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.72)" }}>{children}</div>
  </section>
)

const P = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => <p style={{ marginBottom: 16, ...style }}>{children}</p>

export default function SampleAuditPage() {
  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>
      <NavBar />

      {/* HERO */}
      <section style={{ padding: "160px clamp(1.5rem,4vw,4rem) 60px", position: "relative", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 0%, ${GLOW} 0%, transparent 60%)`, opacity: 0.28, pointerEvents: "none" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>
            Sample audit · the method on ourselves
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.1rem,5.5vw,3.75rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 24 }}>
            Strawberry, audited by Strawberry.
          </h1>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.15rem)", color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>
            Instead of someone else&apos;s numbers, here is the method applied to the hardest brand to see clearly — our own. This is an abridged read: the shape of what a commission delivers, run on Strawberry Production.
          </p>
        </div>
      </section>

      {/* DOCUMENT */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 clamp(1.5rem,4vw,4rem) 40px" }}>
        <Section n="01" kicker="Differentiation Diagnostic" title="The field, and where it sounds alike">
          <P>The narrative studio field crowds around the same four words: <em>storytelling, identity, brand, strategy</em>. Everyone promises &ldquo;a story that stands out&rdquo; and delivers a logo, a moodboard, a tagline. The category has trained founders to expect decoration — so a positioning offer gets benchmarked against a design deliverable, and mis-priced accordingly.</P>
          <P>The open ground no one occupies: treating the brand&apos;s story as an <strong style={{ color: "#fff" }}>architecture</strong> — a load-bearing structure, not a surface — and refusing the one thing the whole field leans on: work a machine can now generate. That refusal is the territory.</P>
        </Section>

        <Section n="02" kicker="Narrative Platform" title="The position, in one defensible sentence">
          <P><strong style={{ color: "#fff" }}>Strawberry builds the part of a brand that cannot be generated:</strong> the narrative architecture a founder is too close to see, and a machine has no truth to write.</P>
          <P>The fight: against sameness, and against the flattening effect of AI on brand language. The vision: a market where being recognizable at first glance is the last real moat.</P>
        </Section>

        <Section n="03" kicker="Message Pillars" title="The three ideas we hammer">
          <P><strong style={{ color: "#fff" }}>1. Impossible to confuse.</strong> Differentiation is not a style; it&apos;s a structural position competitors can&apos;t occupy.</P>
          <P><strong style={{ color: "#fff" }}>2. Impossible to generate.</strong> The extraction at the core of the work — your truth, your singularity — is the one input no model has.</P>
          <P><strong style={{ color: "#fff" }}>3. Exploitable the Monday after.</strong> An architecture you deploy, not a manifesto you frame.</P>
        </Section>

        <Section n="04" kicker="Language System" title="The words that are ours — and the ones we refuse">
          <P><strong style={{ color: "#fff" }}>Ours:</strong> architecture, extraction, singularity, position, recognizable, commission, deploy.</P>
          <P><strong style={{ color: "#fff" }}>Forbidden</strong> (because the field is saturated with them): storytelling, disruptive, authentic, journey, DNA, elevate, unleash. Every time we reach for a saturated word, we sound like the people we&apos;re trying not to sound like.</P>
        </Section>

        <Section n="05" kicker="Tone" title="How it should feel to read us">
          <P>Declarative, not persuasive. Short sentences that land like verdicts. Confidence without adjectives — the certainty comes from the structure of the claim, not from intensifiers. We state; we don&apos;t sell.</P>
        </Section>

        <Section n="06" kicker="Before / After" title="The same idea, mis-said then well-said">
          <P style={{ color: "rgba(255,255,255,0.45)" }}><em>Before:</em> &ldquo;We help brands tell their authentic story and stand out with a disruptive identity.&rdquo;</P>
          <P><em style={{ color: COLOR }}>After:</em> &ldquo;We build the narrative architecture that makes you impossible to confuse — and impossible to generate.&rdquo;</P>
        </Section>

        <Section n="07" kicker="Deployment Kit" title="Where it goes to work first">
          <P>The one-line on the site hero, the first line of every cold email, the subject a prospect reads before anything else, and the page a warm reply lands on. Positioning that never touches these four surfaces stays theoretical.</P>
        </Section>

        <Section n="08" kicker="Coherence Guide" title="The test for every future decision">
          <P>Before publishing anything, one question: <strong style={{ color: "#fff" }}>could a competitor say this too?</strong> If yes, it isn&apos;t ours yet. The architecture holds only if every new sentence could sit next to the position without contradicting it.</P>
        </Section>
      </div>

      {/* CTA */}
      <section style={{ padding: "70px clamp(1.5rem,4vw,4rem) 110px", borderTop: "1px solid rgba(255,255,255,0.08)", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.3rem,2.5vw,1.85rem)", fontWeight: 700, lineHeight: 1.3, letterSpacing: "-0.02em", marginBottom: 24 }}>
            This is the shape of the work — abridged. The full commission runs it on <span style={{ color: COLOR }}>your</span> brand.
          </p>
          <Link href="/brand-narrative-audit" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "15px 36px", borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
            See Brand Narrative Architecture — 4,500€
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
