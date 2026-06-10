"use client"

import Link from "next/link"

export function AtlasSection() {
  return (
    <section style={{ background: "#0d0d0d", padding: "clamp(4rem,10vw,8rem) clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(230,57,70,0.10)", border: "1px solid rgba(230,57,70,0.3)", borderRadius: 100, padding: "5px 14px", marginBottom: 24 }}>
                <span style={{ color: "#e63946", fontSize: 11, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.1em", fontWeight: 600 }}>FREE RESOURCE</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}>
                30 Architectures.<br />
                <span style={{ background: "linear-gradient(135deg,#e63946,#ff1a1a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>An Atlas.</span>
              </h2>
            </div>
            <div style={{ maxWidth: 480, paddingTop: 8 }}>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(0.95rem,1.6vw,1.1rem)", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, margin: "0 0 32px" }}>
                Thirty composite portraits of the narrative situations founders find themselves in &mdash; and the architectural moves that resolved them. Not a portfolio. A map.
              </p>
              <p style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(0.95rem,1.4vw,1.05rem)", color: "rgba(255,255,255,0.35)", fontStyle: "italic", lineHeight: 1.7, margin: "0 0 32px" }}>
                If you recognize yourself in one of them &mdash; you have already begun the work.
              </p>
              <Link
                href="/30-architectures-atlas.pdf"
                target="_blank"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  background: "linear-gradient(135deg,#e63946,#ff1a1a)",
                  color: "#fff", padding: "14px 32px", borderRadius: 100,
                  fontSize: 14, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 700,
                  textDecoration: "none", letterSpacing: "0.04em",
                  boxShadow: "0 8px 32px rgba(230,57,70,0.35)",
                }}
              >
                Read the Atlas &rarr;
              </Link>
              <p style={{ marginTop: 12, color: "rgba(255,255,255,0.25)", fontSize: 12, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.05em" }}>
                128 pages &middot; PDF &middot; Free &middot; No sign-up
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 1, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, overflow: "hidden" }}>
            {[
              { n: "01", text: "We had pivoted three times. I no longer knew what to say at dinner." },
              { n: "03", text: "I sold the company. I took two years. I came back. I refuse to be the founder of my last company." },
              { n: "07", text: "I refuse to hire. I refuse to scale. I cannot keep apologizing for it." },
              { n: "13", text: "Every brief we receive treats us as an agency. We are not." },
              { n: "19", text: "We are building something that does not exist. Every prospect tries to put us in a box that already does." },
              { n: "...", text: "+ 25 more architectures across 5 categories." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#0a0a0a", padding: "28px 24px", display: "flex", gap: 16 }}>
                <span style={{ color: "#e63946", fontSize: 11, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 700, letterSpacing: "0.08em", flexShrink: 0, paddingTop: 3 }}>{item.n}</span>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
