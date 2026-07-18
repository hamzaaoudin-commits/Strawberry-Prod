"use client"

import { useScrollReveal } from "@/hooks/use-strawberry"
import { GlassCard } from "./glass-card"
import { useT } from "@/lib/i18n"

const T = {
  en: {
    kicker: "THE PROBLEM",
    h2: "You're not being ignored because your work isn't good enough.",
    p1a: "You're being ignored because you're ",
    p1strong: "indistinguishable",
    p1b: ". In a world where everyone posts, everyone creates content, and everyone claims expertise — the winners aren't the most talented.",
    p2: "They're the ones who control perception.",
    needs: [
      "A clear identity people recognize instantly",
      "A narrative universe people want to be part of",
      "A revenue system that converts attention into income",
    ],
    quote1: "\"Most brands have fragments. ",
    quote2: "We build empires.\"",
  },
  fr: {
    kicker: "LE PROBLÈME",
    h2: "On ne t'ignore pas parce que ton travail n'est pas assez bon.",
    p1a: "On t'ignore parce que tu es ",
    p1strong: "indifférenciable",
    p1b: ". Dans un monde où tout le monde poste, produit du contenu et se dit expert — les gagnants ne sont pas les plus talentueux.",
    p2: "Ce sont ceux qui maîtrisent la perception.",
    needs: [
      "Une identité claire qu'on reconnaît instantanément",
      "Un univers narratif dont on veut faire partie",
      "Un système de revenus qui convertit l'attention en chiffre d'affaires",
    ],
    quote1: "« La plupart des marques ont des fragments. ",
    quote2: "Nous, on bâtit des empires. »",
  },
  es: {
    kicker: "EL PROBLEMA",
    h2: "No te ignoran porque tu trabajo no sea lo bastante bueno.",
    p1a: "Te ignoran porque eres ",
    p1strong: "indistinguible",
    p1b: ". En un mundo donde todos publican, todos crean contenido y todos se dicen expertos — los que ganan no son los más talentosos.",
    p2: "Son los que controlan la percepción.",
    needs: [
      "Una identidad clara que se reconoce al instante",
      "Un universo narrativo del que la gente quiere formar parte",
      "Un sistema de ingresos que convierte la atención en facturación",
    ],
    quote1: "«La mayoría de las marcas tienen fragmentos. ",
    quote2: "Nosotros construimos imperios.»",
  },
}

export function ProblemSection() {
  const t = useT(T)
  const [ref, vis] = useScrollReveal()
  const NEED_ICONS = [
    { icon: "◎", c: "#e63946" },
    { icon: "◉", c: "#ff1a1a" },
    { icon: "◈", c: "#dc2626" },
  ]
  const needs = NEED_ICONS.map((n, i) => ({ ...n, label: t.needs[i] }))

  return (
    <section style={{ background: "#0d0d0d", padding: "120px clamp(1.5rem,4vw,4rem)", overflow: "hidden" }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(40px)", transition: "all 0.9s cubic-bezier(.22,.68,0,1.2)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div style={{ fontSize: 11, color: "#e63946", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>{t.kicker}</div>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3.5rem)", color: "#fff", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 28 }}>
              {t.h2}
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 17, lineHeight: 1.8 }}>
              {t.p1a}<strong style={{ color: "rgba(255,255,255,0.85)" }}>{t.p1strong}</strong>{t.p1b}
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 17, lineHeight: 1.8, marginTop: 20 }}>
              {t.p2}
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
                {t.quote1}<br />{t.quote2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
