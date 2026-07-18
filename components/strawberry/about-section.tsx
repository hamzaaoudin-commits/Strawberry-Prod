"use client"

import { useScrollReveal } from "@/hooks/use-strawberry"
import { AnimatedOrb } from "./animated-orb"
import { GlassCard } from "./glass-card"
import { useT } from "@/lib/i18n"

const BELIEF_COLORS = ["#e63946", "#ff1a1a", "#dc2626"]

const T = {
  en: {
    kicker: "THE STUDIO",
    h2a: "What this studio is.",
    h2b: "And what it is not.",
    p1: "Strawberry Production is a narrative perception studio operating from Paris. One founder. Four commissions per quarter. A single offer, refined commission after commission. The work is editorial in shape and disciplined by inheritance.",
    p2a: "We do not write content. We do not run campaigns. We design the ",
    p2strong: "identity, position, and language",
    p2b: " that make a founder impossible to confuse with the field and impossible to generate by a machine.",
    quote: "In a market where everyone has access to the same machine, the best product no longer wins. The clearest doctrine does.",
    beliefs: [
      { t: "Not a brand agency. A studio of doctrine.", d: "We do not deliver marketing assets. We write the document that declares what a house is, what it refuses, and how it sounds when it speaks. The artifact is a constitution, not a deck." },
      { t: "Not content. Architecture.", d: "Content is what a house produces. Architecture is what makes that content cohere across years, surfaces, and hands. We build the second. The first follows on its own." },
      { t: "Not for everyone. By selection.", d: "Four commissions per quarter. Most inquiries do not become engagements. The work depends on selecting houses whose convictions deserve the discipline. Politeness is not enough. Alignment is." },
    ],
  },
  fr: {
    kicker: "LE STUDIO",
    h2a: "Ce qu'est ce studio.",
    h2b: "Et ce qu'il n'est pas.",
    p1: "Strawberry Production est un studio de perception narrative basé à Paris. Un fondateur. Quatre commandes par trimestre. Une seule offre, affinée commande après commande. Un travail éditorial dans sa forme, discipliné par l'héritage.",
    p2a: "On n'écrit pas de contenu. On ne gère pas de campagnes. On conçoit l'",
    p2strong: "identité, la position et le langage",
    p2b: " qui rendent un fondateur impossible à confondre avec le champ — et impossible à générer par une machine.",
    quote: "Dans un marché où tout le monde a accès à la même machine, le meilleur produit ne gagne plus. La doctrine la plus claire, si.",
    beliefs: [
      { t: "Pas une agence de marque. Un studio de doctrine.", d: "On ne livre pas des assets marketing. On écrit le document qui déclare ce qu'est une maison, ce qu'elle refuse, et comment elle sonne quand elle parle. L'artefact est une constitution, pas un deck." },
      { t: "Pas du contenu. De l'architecture.", d: "Le contenu, c'est ce qu'une maison produit. L'architecture, c'est ce qui fait tenir ce contenu à travers les années, les surfaces et les mains. On bâtit la seconde. Le premier suit tout seul." },
      { t: "Pas pour tout le monde. Sur sélection.", d: "Quatre commandes par trimestre. La plupart des demandes ne deviennent pas des engagements. Le travail dépend du choix de maisons dont les convictions méritent la discipline. La politesse ne suffit pas. L'alignement, si." },
    ],
  },
  es: {
    kicker: "EL ESTUDIO",
    h2a: "Lo que es este estudio.",
    h2b: "Y lo que no es.",
    p1: "Strawberry Production es un estudio de percepción narrativa que opera desde París. Un fundador. Cuatro encargos por trimestre. Una sola oferta, afinada encargo tras encargo. Un trabajo editorial en su forma, disciplinado por la herencia.",
    p2a: "No escribimos contenido. No gestionamos campañas. Diseñamos la ",
    p2strong: "identidad, la posición y el lenguaje",
    p2b: " que hacen a un fundador imposible de confundir con el resto — e imposible de generar por una máquina.",
    quote: "En un mercado donde todos acceden a la misma máquina, el mejor producto ya no gana. Lo hace la doctrina más clara.",
    beliefs: [
      { t: "No una agencia de marca. Un estudio de doctrina.", d: "No entregamos assets de marketing. Escribimos el documento que declara lo que es una casa, lo que rechaza y cómo suena cuando habla. El artefacto es una constitución, no un deck." },
      { t: "No contenido. Arquitectura.", d: "El contenido es lo que una casa produce. La arquitectura es lo que hace que ese contenido sea coherente a lo largo de los años, las superficies y las manos. Construimos la segunda. El primero llega solo." },
      { t: "No para todos. Por selección.", d: "Cuatro encargos por trimestre. La mayoría de las consultas no se convierten en proyectos. El trabajo depende de elegir casas cuyas convicciones merecen la disciplina. La cortesía no basta. La alineación, sí." },
    ],
  },
}

export function AboutSection() {
  const t = useT(T)
  const [ref, vis] = useScrollReveal()
  const BELIEFS = t.beliefs.map((b, i) => ({ ...b, n: `0${i + 1}`, color: BELIEF_COLORS[i] }))

  return (
    <section id="about" style={{ background: "#0a0a0a", padding: "120px clamp(1.5rem,4vw,4rem)", position: "relative", overflow: "hidden" }}>
      <AnimatedOrb color="radial-gradient(circle,#dc2626,transparent)" size={400} x="10%" y="60%" opacity={0.08} />
      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(40px)", transition: "all 0.9s" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <div style={{ fontSize: 11, color: "#dc2626", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>{t.kicker}</div>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3.5rem)", color: "#fff", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 32 }}>
              {t.h2a}
              <br />
              {t.h2b}
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 17, lineHeight: 1.8, marginBottom: 24 }}>
              {t.p1}
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 17, lineHeight: 1.8, marginBottom: 48 }}>
              {t.p2a}<strong style={{ color: "rgba(255,255,255,0.85)" }}>{t.p2strong}</strong>{t.p2b}
            </p>
            <div style={{ padding: "28px 36px", borderRadius: 20, background: "rgba(230,57,70,0.08)", border: "1px solid rgba(230,57,70,0.2)" }}>
              <p style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "rgba(255,255,255,0.9)", fontSize: 20, fontStyle: "italic", lineHeight: 1.5, margin: 0 }}>
                {t.quote}
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {BELIEFS.map((b, i) => (
              <GlassCard key={i} style={{ padding: "28px 32px", display: "flex", gap: 24, alignItems: "flex-start" }}>
                <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: b.color + "33", lineHeight: 1, flexShrink: 0 }}>{b.n}</div>
                <div>
                  <h4 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "#fff", fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{b.t}</h4>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{b.d}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
