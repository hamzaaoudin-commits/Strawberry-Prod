"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { AnimatedOrb } from "@/components/strawberry/animated-orb"
import { useScrollReveal } from "@/hooks/use-strawberry"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

const REFUSALS = [
  {
    n: "01",
    title: "I refuse to scale.",
    body: "No team, no associates, no plans for either. Every word delivered to a commission has been written by me. AI scales infinitely. I do not. Four houses per quarter is not a sales tactic — it is the structural limit of one mind paying full attention.",
  },
  {
    n: "02",
    title: "I refuse to work with everyone.",
    body: "Most inquiries do not become commissions. Some founders are not ready. Some are ready but for a different studio. The work I do depends on selecting houses whose convictions I find worth defending. Politeness is not enough — alignment is.",
  },
  {
    n: "03",
    title: "I refuse the agency model.",
    body: "No retainers, no scope creep, no hourly billing, no account managers. Each engagement is a commission — a defined four-week architecture for a single house, delivered as a single editorial document. The agency economy optimizes for volume. This studio optimizes for what survives a decade.",
  },
  {
    n: "04",
    title: "I refuse the vocabulary of the field.",
    body: "Solutions, synergy, leverage, disrupt, game-changer, ROI — these are the words by which mediocre studios announce themselves. They appear nowhere in the work this studio produces. The first thing I retire from your brand is the language that makes you sound like the field.",
  },
]

const INHERITANCE = [
  { name: "Roland Barthes", note: "On the architecture of myth and the precision of signs." },
  { name: "Michel Foucault", note: "On how discourse shapes what can be said — and what becomes invisible." },
  { name: "Bernard Pivot", note: "On the dignity of reading carefully, and writing only what survives the page." },
  { name: "Fr\u00e9d\u00e9ric Beigbeder", note: "On the editorial voice as a weapon, and refusal as a form of authorship." },
]

const DISCIPLINE = [
  {
    n: "01",
    title: "Extraction before architecture.",
    body: "Every commission begins with conversation, not strategy. I make founders talk, at length, until something appears that no machine could have written — the conviction beneath the elevator pitch, the refusal beneath the founding story. From that human material, the architecture is built.",
  },
  {
    n: "02",
    title: "Single authorship, no committees.",
    body: "One person extracts the founder's truth. The same person writes the architecture. The same person delivers it. No handoffs, no telephone games, no smoothing committees. The voice of the document is the voice of one mind that paid attention to one founder for four weeks.",
  },
  {
    n: "03",
    title: "Editorial, not advisory.",
    body: "I do not produce decks. I produce documents — designed to be read like manifestos and consulted like constitutions. The artifact is built to outlive the engagement. The bound edition, optional, is delivered to be kept on a shelf, not opened on a screen.",
  },
  {
    n: "04",
    title: "The thirty-day walkthrough.",
    body: "One month after delivery, we meet again. Ninety minutes, on call or in person. The question I ask is what has changed. The document is the artifact. The walkthrough is the moment it becomes operational. AI has no memory of your house. I do.",
  },
]

export default function AboutPage() {
  const hero = useScrollReveal()
  const why = useScrollReveal()
  const refuse = useScrollReveal()
  const inheritance = useScrollReveal()
  const founder = useScrollReveal()
  const discipline = useScrollReveal()
  const cta = useScrollReveal()

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>
      <NavBar />

      {/* HERO */}
      <section
        ref={hero[0] as any}
        style={{
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          padding: "140px clamp(1.5rem,4vw,4rem) 80px",
          position: "relative",
          opacity: hero[1] ? 1 : 0,
          transform: hero[1] ? "translateY(0)" : "translateY(30px)",
          transition: "all 1s ease",
        }}
      >
        <AnimatedOrb color="radial-gradient(circle,#e63946,transparent)" size={600} x="-5%" y="20%" opacity={0.15} />
        <AnimatedOrb color="radial-gradient(circle,#ff1a1a,transparent)" size={400} x="70%" y="60%" opacity={0.08} />

        <div style={{ maxWidth: 1100, width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(230,57,70,0.12)",
              border: "1px solid rgba(230,57,70,0.35)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 40,
            }}
          >
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: COLOR, boxShadow: "0 0 8px " + COLOR }} />
            <span style={{ color: COLOR, fontSize: 11, letterSpacing: "0.2em", fontWeight: 600, textTransform: "uppercase" }}>
              The Studio
            </span>
          </div>

          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.5rem,6vw,5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 40,
              maxWidth: 900,
            }}
          >
            A studio of one.<br />
            <span style={{ background: "linear-gradient(135deg," + COLOR + ",#ff1a1a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              From Paris. By inheritance.
            </span>
          </h1>

          <p
            style={{
              fontFamily: SANS,
              fontSize: "clamp(1.05rem,1.5vw,1.3rem)",
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.7,
              maxWidth: 720,
              marginBottom: 0,
            }}
          >
            Strawberry Production is a narrative perception studio operating from Paris. One founder. Four commissions per quarter. A single offer, refined commission after commission. This page is what you should know before you write.
          </p>
        </div>
      </section>

      {/* WHY THIS STUDIO EXISTS */}
      <section
        ref={why[0] as any}
        style={{
          padding: "120px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          opacity: why[1] ? 1 : 0,
          transform: why[1] ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>
            Why this studio exists
          </div>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(1.75rem,3.5vw,2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 40,
              lineHeight: 1.2,
            }}
          >
            Every market eventually agrees on how to be talked about.
          </h2>
          <p
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(1.15rem,1.8vw,1.4rem)",
              fontWeight: 400,
              lineHeight: 1.6,
              letterSpacing: "-0.01em",
              color: "rgba(255,255,255,0.85)",
              marginBottom: 28,
            }}
          >
            Founders adopt the words of their category because language is contagious. AI accelerates this collapse — generating, infinitely, the same brand documents that already sound alike. In that noise, quality is no longer enough. Everyone has become competent.
          </p>
          <p
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(1.15rem,1.8vw,1.4rem)",
              fontWeight: 400,
              lineHeight: 1.6,
              letterSpacing: "-0.01em",
              color: COLOR,
              fontStyle: "italic",
              marginTop: 32,
            }}
          >
            What cannot be generated is an identity. This studio exists to write the identity AI cannot.
          </p>
        </div>
      </section>

      {/* WHAT I REFUSE */}
      <section
        ref={refuse[0] as any}
        style={{
          padding: "140px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          background: "#0d0d0d",
          position: "relative",
          opacity: refuse[1] ? 1 : 0,
          transform: refuse[1] ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center," + GLOW + " 0%,transparent 65%)",
            opacity: 0.15,
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>
              The Discipline
            </div>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(2rem,4.5vw,3.25rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: 24,
                lineHeight: 1.1,
              }}
            >
              What this studio refuses.
            </h2>
            <p
              style={{
                fontFamily: SANS,
                fontSize: "clamp(0.98rem,1.4vw,1.15rem)",
                color: "rgba(255,255,255,0.6)",
                maxWidth: 640,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              A studio is defined by what it does not do. The list below is the structural backbone of the practice.
            </p>
          </div>

          <div
            className="refuse-grid"
            style={{ display: "grid", gap: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {REFUSALS.map((r) => (
              <div
                key={r.n}
                style={{
                  background: "#0a0a0a",
                  padding: "44px clamp(1.5rem,3vw,2.5rem)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                <div style={{ fontFamily: SERIF, fontSize: "1.6rem", color: COLOR, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em" }}>
                  {r.n}.
                </div>
                <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.25rem,1.8vw,1.55rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.25, color: "#fff", margin: 0 }}>
                  {r.title}
                </h3>
                <p style={{ fontFamily: SANS, fontSize: "0.96rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.7, margin: 0 }}>
                  {r.body}
                </p>
              </div>
            ))}
          </div>

          <style jsx>{`
            .refuse-grid { grid-template-columns: repeat(1, 1fr); }
            @media (min-width: 720px) { .refuse-grid { grid-template-columns: repeat(2, 1fr); } }
          `}</style>
        </div>
      </section>

      {/* WHAT I INHERIT */}
      <section
        ref={inheritance[0] as any}
        style={{
          padding: "120px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          opacity: inheritance[1] ? 1 : 0,
          transform: inheritance[1] ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>
              By Inheritance
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 28, lineHeight: 1.15 }}>
              A French school of narrative precision.
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "clamp(1rem,1.4vw,1.15rem)", color: "rgba(255,255,255,0.7)", maxWidth: 680, margin: "0 auto", lineHeight: 1.7 }}>
              This studio operates from Paris because the work belongs to a lineage — a culture where what is not said matters as much as what is, where a sentence is rewritten until nothing can be removed, where the editorial register is a form of authorship rather than a marketing tool.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {INHERITANCE.map((p, i) => (
              <div key={i} style={{ padding: "32px 24px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", textAlign: "center" }}>
                <div style={{ fontFamily: SERIF, fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: 14, letterSpacing: "-0.01em" }}>
                  {p.name}
                </div>
                <div style={{ width: 24, height: 1, background: COLOR, margin: "0 auto 14px" }} />
                <p style={{ fontFamily: SERIF, fontSize: "0.92rem", fontStyle: "italic", color: "rgba(255,255,255,0.65)", lineHeight: 1.55, margin: 0 }}>
                  {p.note}
                </p>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.1rem,1.6vw,1.35rem)", fontStyle: "italic", color: "rgba(255,255,255,0.75)", textAlign: "center", maxWidth: 720, margin: "60px auto 0", lineHeight: 1.6, letterSpacing: "-0.01em" }}>
            The studio does not invoke these names for decoration. It inherits a discipline — and applies that discipline to founders whose houses deserve it.
          </p>
        </div>
      </section>

      {/* THE FOUNDER */}
      <section
        ref={founder[0] as any}
        style={{
          padding: "120px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          background: "#0d0d0d",
          opacity: founder[1] ? 1 : 0,
          transform: founder[1] ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>
              The Founder
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16, lineHeight: 1.15 }}>
              Hamza El Jaouahiry.
            </h2>
            <div style={{ width: 32, height: 1, background: COLOR, margin: "0 auto 0" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,6vw,6rem)", alignItems: "start" }} className="founder-grid">
            <div style={{ position: "relative" }}>
              <img
                src="/founder.jpg"
                alt="Hamza El Jaouahiry — Strawberry Production"
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  objectFit: "cover",
                  objectPosition: "center top",
                  filter: "grayscale(100%) contrast(1.05)",
                  display: "block",
                }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", background: "linear-gradient(to top,#0d0d0d,transparent)" }} />
            </div>

            <div style={{ paddingTop: "clamp(1rem,3vw,2rem)" }}>
              <div style={{ fontFamily: SERIF, fontSize: "clamp(1.05rem,1.4vw,1.2rem)", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, letterSpacing: "-0.005em" }}>
                <p style={{ marginBottom: 24 }}>
                  I founded this studio because I could not find the work I wanted to read. The brand documents being produced by every consultancy I respected had collapsed into a shared, unreadable register — competent, polished, indistinguishable, machine-replaceable. The houses I admired most were being described in language that erased them.
                </p>
                <p style={{ marginBottom: 24 }}>
                  Strawberry Production is the studio I would have hired. A single founder, working at full attention on four houses per quarter, writing every word by hand, refusing the vocabulary of the field. The work is editorial in shape because it inherits a French school where editorial writing was never separate from intellectual seriousness.
                </p>
                <p style={{ marginBottom: 0 }}>
                  When you commission the work, you commission me. There is no team to be passed to, no junior writer to be substituted, no scope to be negotiated downward. The document you receive will have been written entirely by the person whose name appears on the signature page.
                </p>
              </div>

              <div style={{ marginTop: 48, padding: "32px clamp(1.5rem,3vw,2.5rem)", border: "1px solid rgba(230,57,70,0.25)", background: "rgba(230,57,70,0.04)" }}>
                <div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(1.05rem,1.5vw,1.25rem)", color: "#fff", lineHeight: 1.55, letterSpacing: "-0.01em" }}>
                  "I do not build brands. I write the constitution by which a house declares what it is, what it refuses, and how it sounds when it speaks."
                </div>
                <div style={{ marginTop: 20, fontSize: 10, letterSpacing: "0.3em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", fontFamily: SANS }}>
                  Hamza El Jaouahiry &middot; Founder
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .founder-grid { grid-template-columns: 1fr 1fr; }
          @media (max-width: 768px) { .founder-grid { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* HOW I WORK */}
      <section
        ref={discipline[0] as any}
        style={{
          padding: "120px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          opacity: discipline[1] ? 1 : 0,
          transform: discipline[1] ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>
              The Practice
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24, lineHeight: 1.15 }}>
              How the work is made.
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "clamp(0.98rem,1.4vw,1.15rem)", color: "rgba(255,255,255,0.6)", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
              Four operating principles. They explain why a commission takes four weeks, why no two ever look alike, and why the work survives the month after delivery.
            </p>
          </div>

          <div style={{ display: "grid", gap: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)" }}>
            {DISCIPLINE.map((d) => (
              <div key={d.n} style={{ background: "#0a0a0a", padding: "44px clamp(1.5rem,3vw,3rem)", display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(1.5rem,4vw,3.5rem)", alignItems: "start" }}>
                <div style={{ fontFamily: SERIF, fontSize: "clamp(1.5rem,2.5vw,2rem)", color: COLOR, fontWeight: 700, lineHeight: 1, minWidth: 60 }}>
                  {d.n}
                </div>
                <div>
                  <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.2rem,1.8vw,1.55rem)", fontWeight: 600, marginBottom: 14, letterSpacing: "-0.02em", color: "#fff" }}>
                    {d.title}
                  </h3>
                  <p style={{ fontFamily: SANS, fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.72)", lineHeight: 1.75, margin: 0 }}>
                    {d.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        ref={cta[0] as any}
        style={{
          padding: "140px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          position: "relative",
          opacity: cta[1] ? 1 : 0,
          transform: cta[1] ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center," + GLOW + " 0%,transparent 60%)", opacity: 0.5, pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 32 }}>
            Now you know who you would be working with.
          </h2>
          <p style={{ fontFamily: SANS, fontSize: "clamp(1rem,1.4vw,1.15rem)", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: 620, margin: "0 auto 48px" }}>
            One commission per house. Four houses per quarter. The next slot opens to the founder whose house deserves it most.
          </p>
          <Link
            href="/brand-narrative-audit"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg," + COLOR + ",#ff1a1a)",
              color: "#fff", padding: "20px 52px", borderRadius: 100,
              fontSize: 16, fontWeight: 600, textDecoration: "none",
              letterSpacing: "0.04em", fontFamily: SANS,
              boxShadow: "0 20px 60px " + GLOW,
            }}
          >
            See the Commission &rarr;
          </Link>
          <div style={{ marginTop: 24, fontSize: 13, color: "rgba(255,255,255,0.45)", letterSpacing: "0.05em", fontFamily: SANS }}>
            Confidential commission &middot; NDA available
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
