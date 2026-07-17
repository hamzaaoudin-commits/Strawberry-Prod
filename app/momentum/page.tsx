"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { useT } from "@/lib/i18n"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

const T = {
  en: {
    badge: "After the audit · monthly retainer",
    h1a: "The architecture is built.",
    h1b: "MOMENTUM keeps it alive.",
    lead: "The commission gives you the architecture — position, identity, language. MOMENTUM is the team that carries it forward: creative direction that guards the narrative, and content execution that puts it into the feed, every week.",
    cta: "Start MOMENTUM",
    seeTiers: "See the tiers",
    collisionTitle: "Wait — isn't the audit already 4,500€?",
    collisionBody: "Yes. The audit is one-shot: you pay 4,500€ once, you own the architecture forever. MOMENTUM is different — it starts after the audit, monthly, only if you want the studio to keep executing. One is the blueprint. The other is the crew that keeps building. You never pay twice for the same thing.",
    twoKicker: "Two arms, one retainer",
    arms: [
      { t: "Creative direction", b: "The guardrail. Every campaign, page, film and post checked against the architecture — so the narrative never drifts as you scale." },
      { t: "Content execution", b: "The output. Story, design, web and sound produced in-house to the same standard — the arm that turns the position into a feed, not a folder." },
    ],
    tiersKicker: "The tiers",
    tiers: [
      { name: "Établi", price: "1,500€", cadence: "/ month", line: "Creative direction + a steady content cadence. The narrative stays coherent while you run.", featured: false },
      { name: "Maison", price: "2,500€", cadence: "/ month", line: "Direction, execution and monthly campaigns across channels. The full studio, on tap.", featured: true },
      { name: "Souverain", price: "4,500€", cadence: "/ month", line: "Priority direction, high-volume execution and a partner in the room for every major move.", featured: false },
    ],
    tierCta: "Talk to the studio",
    bridge: "No architecture yet? MOMENTUM comes after. Start with the commission.",
    bridgeCta: "See BRAND NARRATIVE ARCHITECTURE →",
  },
  fr: {
    badge: "Après l'audit · au mois",
    h1a: "L'architecture est posée.",
    h1b: "MOMENTUM la fait vivre.",
    lead: "La commande te donne l'architecture — position, identité, langage. MOMENTUM, c'est l'équipe qui la porte dans le temps : une direction créative qui garde le récit, et une exécution de contenu qui le met dans le feed, chaque semaine.",
    cta: "Démarrer MOMENTUM",
    seeTiers: "Voir les paliers",
    collisionTitle: "Attends — l'audit n'est-il pas déjà à 4 500€ ?",
    collisionBody: "Si. L'audit est one-shot : tu paies 4 500€ une fois, l'architecture est à toi pour toujours. MOMENTUM, c'est autre chose — ça commence après l'audit, au mois, seulement si tu veux que le studio continue d'exécuter. L'un est le plan. L'autre, l'équipe qui continue de construire. Tu ne paies jamais deux fois la même chose.",
    twoKicker: "Deux bras, un retainer",
    arms: [
      { t: "Direction créative", b: "Le garde-fou. Chaque campagne, page, film et post confronté à l'architecture — pour que le récit ne dérive pas quand tu passes à l'échelle." },
      { t: "Exécution de contenu", b: "La production. Récit, design, web et son produits en interne au même standard — le bras qui transforme la position en feed, pas en dossier." },
    ],
    tiersKicker: "Les paliers",
    tiers: [
      { name: "Établi", price: "1 500€", cadence: "/ mois", line: "Direction créative + une cadence de contenu régulière. Le récit reste cohérent pendant que tu avances.", featured: false },
      { name: "Maison", price: "2 500€", cadence: "/ mois", line: "Direction, exécution et campagnes mensuelles multicanal. Le studio complet, à volonté.", featured: true },
      { name: "Souverain", price: "4 500€", cadence: "/ mois", line: "Direction prioritaire, exécution à haut volume et un partenaire dans la pièce à chaque grand mouvement.", featured: false },
    ],
    tierCta: "Parler au studio",
    bridge: "Pas encore d'architecture ? MOMENTUM vient après. Commence par la commande.",
    bridgeCta: "Voir BRAND NARRATIVE ARCHITECTURE →",
  },
  es: {
    badge: "Tras la auditoría · mensual",
    h1a: "La arquitectura está construida.",
    h1b: "MOMENTUM la mantiene viva.",
    lead: "El encargo te da la arquitectura — posición, identidad, lenguaje. MOMENTUM es el equipo que la lleva adelante: dirección creativa que cuida el relato, y ejecución de contenido que lo pone en el feed, cada semana.",
    cta: "Empezar MOMENTUM",
    seeTiers: "Ver los niveles",
    collisionTitle: "Espera — ¿la auditoría no cuesta ya 4.500€?",
    collisionBody: "Sí. La auditoría es de pago único: pagas 4.500€ una vez y la arquitectura es tuya para siempre. MOMENTUM es distinto — empieza después de la auditoría, mensual, solo si quieres que el estudio siga ejecutando. Uno es el plano. El otro, el equipo que sigue construyendo. Nunca pagas dos veces por lo mismo.",
    twoKicker: "Dos brazos, un retainer",
    arms: [
      { t: "Dirección creativa", b: "La barandilla. Cada campaña, página, film y post contrastado con la arquitectura — para que el relato no se desvíe al escalar." },
      { t: "Ejecución de contenido", b: "La producción. Relato, diseño, web y sonido producidos en casa al mismo estándar — el brazo que convierte la posición en feed, no en carpeta." },
    ],
    tiersKicker: "Los niveles",
    tiers: [
      { name: "Établi", price: "1.500€", cadence: "/ mes", line: "Dirección creativa + una cadencia de contenido constante. El relato se mantiene coherente mientras avanzas.", featured: false },
      { name: "Maison", price: "2.500€", cadence: "/ mes", line: "Dirección, ejecución y campañas mensuales multicanal. El estudio completo, a demanda.", featured: true },
      { name: "Souverain", price: "4.500€", cadence: "/ mes", line: "Dirección prioritaria, ejecución de alto volumen y un socio en la sala en cada gran movimiento.", featured: false },
    ],
    tierCta: "Hablar con el estudio",
    bridge: "¿Aún sin arquitectura? MOMENTUM viene después. Empieza por el encargo.",
    bridgeCta: "Ver BRAND NARRATIVE ARCHITECTURE →",
  },
}

export default function MomentumPage() {
  const t = useT(T)
  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>
      <NavBar />

      {/* HERO */}
      <section style={{ padding: "160px clamp(1.5rem,4vw,4rem) 90px", position: "relative", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 0%, ${GLOW} 0%, transparent 60%)`, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 36, textTransform: "uppercase" }}>{t.badge}</div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.25rem,6vw,4.25rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: 28 }}>
            {t.h1a}<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{t.h1b}</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.2rem)", color: "rgba(255,255,255,0.68)", maxWidth: 660, margin: "0 auto 40px", lineHeight: 1.65 }}>{t.lead}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <a href="/#contact" style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "15px 32px", borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>{t.cta}</a>
            <a href="#tiers" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "15px 32px", borderRadius: 100, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>{t.seeTiers}</a>
          </div>
        </div>
      </section>

      {/* TWO ARMS (ex-NOCTA merged) */}
      <section style={{ padding: "80px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 18, textTransform: "uppercase" }}>{t.twoKicker}</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {t.arms.map((a) => (
              <div key={a.t} style={{ padding: "34px 30px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.09)" }}>
                <h3 style={{ fontFamily: SERIF, fontSize: "1.5rem", fontWeight: 700, marginBottom: 12 }}>{a.t}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,0.62)" }}>{a.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE-COLLISION RESOLVER */}
      <section style={{ padding: "70px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "clamp(2rem,4vw,3rem)", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.02)" }}>
          <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.4rem,2.5vw,1.9rem)", fontWeight: 700, marginBottom: 16 }}>{t.collisionTitle}</h3>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "rgba(255,255,255,0.72)" }}>{t.collisionBody}</p>
        </div>
      </section>

      {/* TIERS */}
      <section id="tiers" style={{ padding: "80px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 18, textTransform: "uppercase" }}>{t.tiersKicker}</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {t.tiers.map((tier) => (
              <div key={tier.name} style={{ position: "relative", padding: "36px 30px", background: tier.featured ? "linear-gradient(180deg, rgba(230,57,70,0.08) 0%, rgba(10,10,10,0.6) 100%)" : "rgba(255,255,255,0.02)", border: tier.featured ? "1px solid rgba(230,57,70,0.4)" : "1px solid rgba(255,255,255,0.09)" }}>
                {tier.featured && (<>
                  <div style={{ position: "absolute", top: -1, left: -1, width: 34, height: 34, borderTop: `2px solid ${COLOR}`, borderLeft: `2px solid ${COLOR}` }} />
                  <div style={{ position: "absolute", bottom: -1, right: -1, width: 34, height: 34, borderBottom: `2px solid ${COLOR}`, borderRight: `2px solid ${COLOR}` }} />
                </>)}
                <h3 style={{ fontFamily: SERIF, fontSize: "1.6rem", fontWeight: 700, marginBottom: 14 }}>{tier.name}</h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 18 }}>
                  <span style={{ fontFamily: SERIF, fontSize: "2rem", fontWeight: 700, color: tier.featured ? COLOR : "#fff" }}>{tier.price}</span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{tier.cadence}</span>
                </div>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,0.62)", marginBottom: 26 }}>{tier.line}</p>
                <a href="/#contact" style={{ display: "inline-block", background: tier.featured ? `linear-gradient(135deg, ${COLOR}, #ff1a1a)` : "transparent", border: tier.featured ? "none" : "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "12px 26px", borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>{t.tierCta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRIDGE */}
      <section style={{ padding: "70px clamp(1.5rem,4vw,4rem) 110px", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.15rem,2vw,1.5rem)", fontStyle: "italic", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{t.bridge}</p>
          <Link href="/brand-narrative-audit" style={{ display: "inline-block", marginTop: 20, color: COLOR, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>{t.bridgeCta}</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
