"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { useT } from "@/lib/i18n"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

// TODO: replace with the live NOVA Stripe payment link (currently placeholder in the NOVA app).
const NOVA_BUY_URL = "/#contact"

const T = {
  en: {
    badge: "A Strawberry Production app · 999€ one-time",
    h1a: "From a blurry idea",
    h1b: "to a business ready to launch.",
    lead: "NOVA is the step-by-step app that moves you forward, one decision at a time. Not an audit, not a done-for-you deliverable — an application, and you at the controls.",
    quote: "\u201CWe don't hand you a brand. We bring the business to life with you.\u201D",
    start: "Start my journey — 999€",
    seeSteps: "See the 5 steps",
    why: [
      { t: "You stay the founder", b: "The app never decides for you. It structures the work — you make every call." },
      { t: "One thread, not ten vendors", b: "Everything coordinated inside a single coherent tool." },
      { t: "Your pace, no deadline", b: "One payment, unlimited access, progress saved as you go." },
    ],
    journeyKicker: "The journey",
    journeyTitle: "Five steps. Each waits for a decision.",
    steps: [
      { t: "Clarifying the idea", r: "Your role: name what you're really building, and for whom." },
      { t: "Validating the positioning", r: "Your role: choose the ground you'll own — and refuse the rest." },
      { t: "Name and identity", r: "Your role: keep the name and world that truly become yours." },
      { t: "The site", r: "Your role: dictate what the site must say first." },
      { t: "90-day launch plan", r: "Your role: commit to the actions you'll actually hold to." },
    ],
    priceLabel: "One-time payment",
    priceBody: "Full access to the application — 5 steps, from idea to launched business. No deadline, progress saved.",
    startShort: "Start my journey",
    footNote1: "Already have an established brand? NOVA is for the idea stage — the full repositioning for existing companies is ",
    footLink: "Brand Narrative Architecture",
  },
  fr: {
    badge: "Une application Strawberry Production · 999€ one-shot",
    h1a: "D'une idée floue",
    h1b: "à une entreprise prête à lancer.",
    lead: "NOVA est l'application pas-à-pas qui te fait avancer, une décision à la fois. Pas un audit, pas un livrable fait-pour-toi — une application, et toi aux commandes.",
    quote: "\u201COn ne te remet pas une marque. On fait naître l'entreprise avec toi.\u201D",
    start: "Démarrer mon parcours — 999€",
    seeSteps: "Voir les 5 étapes",
    why: [
      { t: "Tu restes le fondateur", b: "L'app ne décide jamais à ta place. Elle structure le travail — tu tranches à chaque fois." },
      { t: "Un seul fil, pas dix prestataires", b: "Tout coordonné dans un outil unique et cohérent." },
      { t: "Ton rythme, pas de deadline", b: "Un paiement, accès illimité, progression sauvegardée au fil de l'eau." },
    ],
    journeyKicker: "Le parcours",
    journeyTitle: "Cinq étapes. Chacune attend une décision.",
    steps: [
      { t: "Clarifier l'idée", r: "Ton rôle : nommer ce que tu construis vraiment, et pour qui." },
      { t: "Valider le positionnement", r: "Ton rôle : choisir le terrain que tu occupes — et refuser le reste." },
      { t: "Nom et identité", r: "Ton rôle : garder le nom et l'univers qui deviennent vraiment les tiens." },
      { t: "Le site", r: "Ton rôle : dicter ce que le site doit dire en premier." },
      { t: "Plan de lancement 90 jours", r: "Ton rôle : t'engager sur les actions que tu tiendras vraiment." },
    ],
    priceLabel: "Paiement unique",
    priceBody: "Accès complet à l'application — 5 étapes, de l'idée à l'entreprise lancée. Pas de deadline, progression sauvegardée.",
    startShort: "Démarrer mon parcours",
    footNote1: "Déjà une marque établie ? NOVA, c'est pour le stade de l'idée — le repositionnement complet des entreprises existantes, c'est ",
    footLink: "Brand Narrative Architecture",
  },
  es: {
    badge: "Una app de Strawberry Production · 999€ pago único",
    h1a: "De una idea difusa",
    h1b: "a un negocio listo para lanzar.",
    lead: "NOVA es la app paso a paso que te hace avanzar, una decisión a la vez. No una auditoría, no un entregable hecho-por-ti — una aplicación, y tú a los mandos.",
    quote: "\u201CNo te entregamos una marca. Damos vida al negocio contigo.\u201D",
    start: "Empezar mi recorrido — 999€",
    seeSteps: "Ver los 5 pasos",
    why: [
      { t: "Tú sigues siendo el fundador", b: "La app nunca decide por ti. Estructura el trabajo — tú tomas cada decisión." },
      { t: "Un solo hilo, no diez proveedores", b: "Todo coordinado dentro de una única herramienta coherente." },
      { t: "Tu ritmo, sin plazo", b: "Un pago, acceso ilimitado, progreso guardado sobre la marcha." },
    ],
    journeyKicker: "El recorrido",
    journeyTitle: "Cinco pasos. Cada uno espera una decisión.",
    steps: [
      { t: "Clarificar la idea", r: "Tu rol: nombrar lo que de verdad construyes, y para quién." },
      { t: "Validar el posicionamiento", r: "Tu rol: elegir el terreno que ocuparás — y rechazar el resto." },
      { t: "Nombre e identidad", r: "Tu rol: quedarte con el nombre y el mundo que de verdad se vuelven tuyos." },
      { t: "El sitio", r: "Tu rol: dictar lo que el sitio debe decir primero." },
      { t: "Plan de lanzamiento a 90 días", r: "Tu rol: comprometerte con las acciones que de verdad vas a sostener." },
    ],
    priceLabel: "Pago único",
    priceBody: "Acceso completo a la aplicación — 5 pasos, de la idea al negocio lanzado. Sin plazo, progreso guardado.",
    startShort: "Empezar mi recorrido",
    footNote1: "¿Ya tienes una marca establecida? NOVA es para la fase de idea — el reposicionamiento completo de empresas existentes es ",
    footLink: "Brand Narrative Architecture",
  },
}

export default function NovaPage() {
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
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.2rem)", color: "rgba(255,255,255,0.68)", maxWidth: 620, margin: "0 auto 16px", lineHeight: 1.65 }}>{t.lead}</p>
          <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "1.15rem", color: "rgba(255,255,255,0.55)", marginBottom: 40 }}>{t.quote}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <a href={NOVA_BUY_URL} style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "15px 32px", borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>{t.start}</a>
            <a href="#journey" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "15px 32px", borderRadius: 100, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>{t.seeSteps}</a>
          </div>
        </div>
      </section>

      {/* WHY IT WORKS */}
      <section style={{ padding: "80px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {t.why.map((c) => (
            <div key={c.t} style={{ padding: "30px 26px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.09)" }}>
              <h3 style={{ fontFamily: SERIF, fontSize: "1.3rem", fontWeight: 700, marginBottom: 12 }}>{c.t}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "rgba(255,255,255,0.62)" }}>{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" style={{ padding: "90px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 20, textTransform: "uppercase" }}>{t.journeyKicker}</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.9rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}>{t.journeyTitle}</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)" }}>
            {t.steps.map((s, i) => (
              <div key={s.t} style={{ background: "#0a0a0a", padding: "26px 28px", display: "flex", gap: 22, alignItems: "flex-start" }}>
                <div style={{ fontFamily: SERIF, fontSize: 30, fontWeight: 700, color: COLOR, lineHeight: 1, minWidth: 44 }}>0{i + 1}</div>
                <div>
                  <h3 style={{ fontFamily: SERIF, fontSize: "1.3rem", fontWeight: 700, marginBottom: 6 }}>{s.t}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.58)" }}>{s.r}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section style={{ padding: "90px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
        <div style={{ maxWidth: 620, margin: "0 auto", border: `1px solid rgba(230,57,70,0.3)`, background: "linear-gradient(180deg, rgba(230,57,70,0.06) 0%, rgba(10,10,10,0.6) 100%)", padding: "clamp(2.5rem,5vw,3.5rem)", position: "relative" }}>
          <div style={{ position: "absolute", top: -1, left: -1, width: 44, height: 44, borderTop: `2px solid ${COLOR}`, borderLeft: `2px solid ${COLOR}` }} />
          <div style={{ position: "absolute", bottom: -1, right: -1, width: 44, height: 44, borderBottom: `2px solid ${COLOR}`, borderRight: `2px solid ${COLOR}` }} />
          <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 100, border: `1px solid ${COLOR}`, color: COLOR }}>{t.priceLabel}</span>
          <div style={{ fontFamily: SERIF, fontSize: "3.5rem", fontWeight: 700, margin: "22px 0 6px" }}>999€</div>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,0.65)", margin: "0 auto 32px", maxWidth: 420 }}>{t.priceBody}</p>
          <a href={NOVA_BUY_URL} style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "15px 36px", borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>{t.startShort}</a>
        </div>
        <div style={{ maxWidth: 640, margin: "48px auto 0" }}>
          <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
            {t.footNote1}
            <Link href="/brand-narrative-audit" style={{ color: COLOR, textDecoration: "none" }}>{t.footLink}</Link>.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
