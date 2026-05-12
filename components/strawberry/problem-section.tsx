"use client"

import { useScrollReveal } from "@/hooks/use-strawberry"
import { GlassCard } from "./glass-card"

export function ProblemSection() {
  const [ref, vis] = useScrollReveal()
  
  const needs = [
    { icon: "◎", label: "A clear identity people recognize instantly", c: "#e63946" },
    { icon: "◉", label: "A narrative universe people want to be part of", c: "#ff1a1a" },
    { icon: "◈", label: "A revenue system that converts attention into income", c: "#dc2626" },
  ]
  
  return (
    <section style={{ background: "#0d0d0d", padding: "120px clamp(1.5rem,4vw,4rem)", overflow: "hidden" }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(40px)", transition: "all 0.9s cubic-bezier(.22,.68,0,1.2)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div style={{ fontSize: 11, color: "#e63946", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>THE PROBLEM</div>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3.5rem)", color: "#fff", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 28 }}>
              {"You're not being ignored because your work isn't good enough."}
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 17, lineHeight: 1.8 }}>
              {"You're being ignored because you're "}<strong style={{ color: "rgba(255,255,255,0.85)" }}>indistinguishable</strong>{". In a world where everyone posts, everyone creates content, and everyone claims expertise — the winners aren't the most talented."}
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 17, lineHeight: 1.8, marginTop: 20 }}>
              They&apos;re the ones who control perception.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {needs.map((item, i) => (
              <GlassCard key={i} style={{ padding: "24px 28px", display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ fontSize: 28, color: item.c, flexShrink: 0 }}>{item.icon}</div>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.75)", fontSize: 16, lineHeight: 1.5, margin: 0 }}>{item.label}</p>
              </GlassCard>
            ))}
            <div style={{ marginTop: 8, padding: "20px 28px", borderLeft: "3px solid rgba(255,255,255,0.1)" }}>
              <p style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "rgba(255,255,255,0.35)", fontSize: 18, fontStyle: "italic", lineHeight: 1.5, margin: 0 }}>
                {"\"Most brands have fragments. "}<br />{"We build empires.\""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
