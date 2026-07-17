"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { useT } from "@/lib/i18n"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

// TODO: replace with the live Arsenal Stripe link when created.
const ARSENAL_BUY_URL = "/#contact"

const T = {
  en: {
    badge: "The RADAR method · as a toolkit",
    h1a: "Run the read",
    h1b: "on your own brand.",
    lead: "Arsenal hands you the five instruments RADAR uses every day — the exact grid, worked into templates you apply yourself. Same method, your hands on the controls.",
    buy: "Get Arsenal — 147€",
    seeTools: "See the five instruments",
    toolsKicker: "The five instruments",
    tools: [
      { t: "The Signal map", b: "Isolate the position that actually lands from everything around it." },
      { t: "The Noise filter", b: "Spot the borrowed words and me-too claims quietly mis-pricing you." },
      { t: "The Reference-class test", b: "Find the category you're being benchmarked against — and why it caps you." },
      { t: "The Heading move", b: "Name the single repositioning decision that would make you unmistakable." },
      { t: "The Coherence check", b: "The one question to run every future message through before it ships." },
    ],
    priceLabel: "One-shot · toolkit",
    priceTitle: "Everything, once.",
    priceBody: "The full toolkit — five instruments, templates and worked examples — yours to keep. From 147€.",
    bridge: "Arsenal is for those who'd rather do it themselves. When you want the read done for you, RADAR runs daily — and the full build is the commission.",
    bridgeRadar: "See RADAR →",
    bridgeAudit: "See the commission →",
  },
  fr: {
    badge: "La méthode RADAR · en boîte à outils",
    h1a: "Fais la lecture",
    h1b: "sur ta propre marque.",
    lead: "Arsenal te met en main les cinq instruments que RADAR utilise chaque jour — la grille exacte, mise en templates que tu appliques toi-même. Même méthode, les commandes entre tes mains.",
    buy: "Obtenir Arsenal — 147€",
    seeTools: "Voir les cinq instruments",
    toolsKicker: "Les cinq instruments",
    tools: [
      { t: "La carte du Signal", b: "Isole la position qui porte vraiment, séparée de tout le reste." },
      { t: "Le filtre à Bruit", b: "Repère les mots empruntés et les promesses me-too qui te mésestiment." },
      { t: "Le test de classe de référence", b: "Trouve la catégorie à laquelle on te compare — et pourquoi elle te plafonne." },
      { t: "Le mouvement de Cap", b: "Nomme la seule décision de repositionnement qui te rendrait indiscutable." },
      { t: "Le contrôle de Cohérence", b: "L'unique question à passer sur chaque futur message avant de le publier." },
    ],
    priceLabel: "One-shot · toolkit",
    priceTitle: "Tout, une fois.",
    priceBody: "La boîte complète — cinq instruments, templates et exemples travaillés — à toi pour de bon. Dès 147€.",
    bridge: "Arsenal, c'est pour ceux qui préfèrent le faire eux-mêmes. Quand tu veux la lecture faite pour toi, RADAR tourne chaque jour — et le build complet, c'est la commande.",
    bridgeRadar: "Voir RADAR →",
    bridgeAudit: "Voir la commande →",
  },
  es: {
    badge: "El método RADAR · como kit",
    h1a: "Haz la lectura",
    h1b: "sobre tu propia marca.",
    lead: "Arsenal te pone en las manos los cinco instrumentos que RADAR usa cada día — la grilla exacta, convertida en plantillas que aplicas tú mismo. Mismo método, los mandos en tus manos.",
    buy: "Obtener Arsenal — 147€",
    seeTools: "Ver los cinco instrumentos",
    toolsKicker: "Los cinco instrumentos",
    tools: [
      { t: "El mapa de Señal", b: "Aísla la posición que de verdad aterriza, separada de todo lo demás." },
      { t: "El filtro de Ruido", b: "Detecta las palabras prestadas y los reclamos me-too que te infravaloran." },
      { t: "El test de clase de referencia", b: "Encuentra la categoría con la que te comparan — y por qué te limita." },
      { t: "El movimiento de Rumbo", b: "Nombra la única decisión de reposicionamiento que te haría inconfundible." },
      { t: "El control de Coherencia", b: "La única pregunta para pasar cada mensaje futuro antes de publicarlo." },
    ],
    priceLabel: "Pago único · kit",
    priceTitle: "Todo, una vez.",
    priceBody: "El kit completo — cinco instrumentos, plantillas y ejemplos trabajados — tuyo para siempre. Desde 147€.",
    bridge: "Arsenal es para quien prefiere hacerlo solo. Cuando quieras la lectura hecha por nosotros, RADAR funciona a diario — y el build completo es el encargo.",
    bridgeRadar: "Ver RADAR →",
    bridgeAudit: "Ver el encargo →",
  },
}

export default function ArsenalPage() {
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
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.2rem)", color: "rgba(255,255,255,0.68)", maxWidth: 640, margin: "0 auto 40px", lineHeight: 1.65 }}>{t.lead}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <a href={ARSENAL_BUY_URL} style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "15px 32px", borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>{t.buy}</a>
            <a href="#tools" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "15px 32px", borderRadius: 100, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>{t.seeTools}</a>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" style={{ padding: "80px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 18, textTransform: "uppercase" }}>{t.toolsKicker}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)" }}>
            {t.tools.map((tool, i) => (
              <div key={tool.t} style={{ background: "#0a0a0a", padding: "26px 28px", display: "flex", gap: 22, alignItems: "flex-start" }}>
                <div style={{ fontFamily: SERIF, fontSize: 30, fontWeight: 700, color: COLOR, lineHeight: 1, minWidth: 44 }}>0{i + 1}</div>
                <div>
                  <h3 style={{ fontFamily: SERIF, fontSize: "1.3rem", fontWeight: 700, marginBottom: 6 }}>{tool.t}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.58)" }}>{tool.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section style={{ padding: "80px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", border: `1px solid rgba(230,57,70,0.3)`, background: "linear-gradient(180deg, rgba(230,57,70,0.06) 0%, rgba(10,10,10,0.6) 100%)", padding: "clamp(2.5rem,5vw,3.5rem)", position: "relative" }}>
          <div style={{ position: "absolute", top: -1, left: -1, width: 44, height: 44, borderTop: `2px solid ${COLOR}`, borderLeft: `2px solid ${COLOR}` }} />
          <div style={{ position: "absolute", bottom: -1, right: -1, width: 44, height: 44, borderBottom: `2px solid ${COLOR}`, borderRight: `2px solid ${COLOR}` }} />
          <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 100, border: `1px solid ${COLOR}`, color: COLOR }}>{t.priceLabel}</span>
          <div style={{ fontFamily: SERIF, fontSize: "3.2rem", fontWeight: 700, margin: "22px 0 6px" }}>147–197€</div>
          <h3 style={{ fontFamily: SERIF, fontSize: "1.4rem", fontWeight: 700, marginBottom: 12 }}>{t.priceTitle}</h3>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,0.65)", margin: "0 auto 30px", maxWidth: 400 }}>{t.priceBody}</p>
          <a href={ARSENAL_BUY_URL} style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "14px 34px", borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>{t.buy}</a>
        </div>
      </section>

      {/* BRIDGE */}
      <section style={{ padding: "70px clamp(1.5rem,4vw,4rem) 110px", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.15rem,2vw,1.5rem)", fontStyle: "italic", color: "rgba(255,255,255,0.7)", lineHeight: 1.5, marginBottom: 22 }}>{t.bridge}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <Link href="/radar" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "13px 26px", borderRadius: 100, fontSize: 14, fontWeight: 500, textDecoration: "none" }}>{t.bridgeRadar}</Link>
            <Link href="/brand-narrative-audit" style={{ color: COLOR, padding: "13px 20px", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>{t.bridgeAudit}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
