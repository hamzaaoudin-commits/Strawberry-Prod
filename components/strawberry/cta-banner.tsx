"use client"

import { useScrollReveal } from "@/hooks/use-strawberry"

export function CTABanner() {
  const [ref, vis] = useScrollReveal()
  
  return (
    <section style={{ padding: "80px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d", position: "relative", overflow: "hidden" }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          borderRadius: 36, padding: "80px clamp(2rem,6vw,100px)",
          background: "linear-gradient(135deg,rgba(230,57,70,0.15),rgba(255,26,26,0.1),rgba(220,38,38,0.08))",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 0 120px rgba(230,57,70,0.15)",
          textAlign: "center",
          opacity: vis ? 1 : 0,
          transform: vis ? "none" : "translateY(40px)",
          transition: "all 0.9s cubic-bezier(.22,.68,0,1.2)",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%,rgba(230,57,70,0.12),transparent 70%)", pointerEvents: "none" }} />
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,5vw,4rem)", color: "#fff", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 20, position: "relative" }}>
            Ready to stop blending in?
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 18, maxWidth: 500, margin: "0 auto 48px", lineHeight: 1.7 }}>
            Most brands wait for permission to stand out. Ours take the stage.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#offers" style={{
              background: "linear-gradient(135deg,#e63946,#ff1a1a)",
              color: "#fff", padding: "18px 44px", borderRadius: 100,
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 700,
              textDecoration: "none", letterSpacing: "0.06em",
              boxShadow: "0 8px 32px rgba(230,57,70,0.4)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { (e.target as HTMLElement).style.transform = "translateY(-3px)"; (e.target as HTMLElement).style.boxShadow = "0 16px 48px rgba(230,57,70,0.6)"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.transform = "none"; (e.target as HTMLElement).style.boxShadow = "0 8px 32px rgba(230,57,70,0.4)"; }}
            >
              See Pricing
            </a>
            <a href="#cases" style={{
              background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.7)", padding: "18px 44px", borderRadius: 100,
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600,
              textDecoration: "none", letterSpacing: "0.06em",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { (e.target as HTMLElement).style.background = "rgba(255,255,255,0.12)"; (e.target as HTMLElement).style.color = "#fff"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.background = "rgba(255,255,255,0.07)"; (e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)"; }}
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
