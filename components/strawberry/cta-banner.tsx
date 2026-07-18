"use client"
import Link from "next/link"
import { useScrollReveal } from "@/hooks/use-strawberry"
import { useT } from "@/lib/i18n"

const T = {
  en: { h2: "Become impossible to confuse.", sub: "Most houses wait. Yours shouldn't have to.", cta1: "See the Commission", cta2: "View Case Studies" },
  fr: { h2: "Deviens impossible à confondre.", sub: "La plupart des maisons attendent. La tienne n'a pas à le faire.", cta1: "Voir la commande", cta2: "Voir les études de cas" },
  es: { h2: "Vuélvete imposible de confundir.", sub: "La mayoría de las casas esperan. La tuya no tiene por qué.", cta1: "Ver el encargo", cta2: "Ver casos de estudio" },
}

export function CTABanner() {
  const t = useT(T)
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
            {t.h2}
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 18, maxWidth: 500, margin: "0 auto 48px", lineHeight: 1.7 }}>
            {t.sub}
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/brand-narrative-audit" style={{
              background: "linear-gradient(135deg,#e63946,#ff1a1a)",
              color: "#fff", padding: "18px 44px", borderRadius: 100,
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 700,
              textDecoration: "none", letterSpacing: "0.06em",
              boxShadow: "0 8px 32px rgba(230,57,70,0.4)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(230,57,70,0.6)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(230,57,70,0.4)"; }}
            >
              {t.cta1}
            </Link>
            <Link href="/case-studies" style={{
              background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.7)", padding: "18px 44px", borderRadius: 100,
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600,
              textDecoration: "none", letterSpacing: "0.06em",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"; }}
            >
              {t.cta2}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
