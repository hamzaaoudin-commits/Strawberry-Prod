"use client"

import { useState } from "react"
import Link from "next/link"
import { useT } from "@/lib/i18n"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

type Stage = "all" | "explore" | "idea" | "established"
type Fmt = "sub" | "shot" | "post"

type Rung = { key: string; name: string; price: string; cadence: string; fmt: Fmt; stage: Stage; stageLabel: string; line: string; href: string; featured?: boolean }

const T = {
  en: {
    kicker: "The Ladder",
    h1a: "One studio. One method.",
    h1b: "Five ways in.",
    sub: "Not a menu — a ladder. Every rung is the same conviction about narrative truth, entered at a different altitude. Start where you are.",
    where: "Where are you?",
    routes: [
      { id: "all" as Stage, label: "Show everything" },
      { id: "explore" as Stage, label: "I'm just exploring" },
      { id: "idea" as Stage, label: "I have an idea" },
      { id: "established" as Stage, label: "I have an established brand" },
    ],
    fmt: { sub: "Subscription", shot: "One-shot", post: "After the audit" },
    featuredCta: "See the commission →",
    cta: "Learn more →",
    foot: "Every rung feeds the next. RADAR trains the eye, the Audit builds the architecture, MOMENTUM keeps it alive. You never pay for the same thing twice.",
    rungs: [
      { key: "radar", name: "RADAR", price: "15€", cadence: "/ month", fmt: "sub", stage: "explore", stageLabel: "Just exploring", line: "One real brand read every day. Read positioning in seconds — the instrument your competitors don't have.", href: "/radar" },
      { key: "arsenal", name: "Arsenal", price: "147–197€", cadence: "one-time", fmt: "shot", stage: "explore", stageLabel: "Do it yourself", line: "The RADAR method as a toolkit. The frameworks to run the read on your own brand, without us.", href: "/arsenal" },
      { key: "nova", name: "NOVA", price: "999€", cadence: "one-time", fmt: "shot", stage: "idea", stageLabel: "You have an idea", line: "The step-by-step app that takes a blurry idea to a business ready to launch. You stay the founder.", href: "/nova" },
      { key: "audit", name: "BRAND NARRATIVE ARCHITECTURE", price: "4,500€", cadence: "one-time", fmt: "shot", stage: "established", stageLabel: "Established brand", line: "The signature commission. A complete repositioning — identity, position and language — impossible to confuse, impossible to generate.", href: "/brand-narrative-audit", featured: true },
      { key: "momentum", name: "MOMENTUM", price: "from 1,500€", cadence: "/ month", fmt: "post", stage: "established", stageLabel: "After the audit", line: "Creative direction + content execution on retainer. Once the architecture exists, the team that keeps telling your story — and carries it into the feed every day.", href: "/momentum" },
    ] as Rung[],
  },
  fr: {
    kicker: "L'Échelle",
    h1a: "Un studio. Une méthode.",
    h1b: "Cinq façons d'entrer.",
    sub: "Pas un menu — une échelle. Chaque barreau, c'est la même conviction sur la vérité narrative, à une altitude différente. Commence là où tu en es.",
    where: "Où en es-tu ?",
    routes: [
      { id: "all" as Stage, label: "Tout afficher" },
      { id: "explore" as Stage, label: "J'explore" },
      { id: "idea" as Stage, label: "J'ai une idée" },
      { id: "established" as Stage, label: "J'ai une marque établie" },
    ],
    fmt: { sub: "Abonnement", shot: "One-shot", post: "Après l'audit" },
    featuredCta: "Voir la commande →",
    cta: "En savoir plus →",
    foot: "Chaque barreau nourrit le suivant. RADAR forme l'œil, l'Audit bâtit l'architecture, MOMENTUM la fait vivre. Tu ne paies jamais deux fois la même chose.",
    rungs: [
      { key: "radar", name: "RADAR", price: "15€", cadence: "/ mois", fmt: "sub", stage: "explore", stageLabel: "J'explore", line: "Une vraie marque disséquée chaque jour. Lis un positionnement en quelques secondes — l'instrument que tes concurrents n'ont pas.", href: "/radar" },
      { key: "arsenal", name: "Arsenal", price: "147–197€", cadence: "one-time", fmt: "shot", stage: "explore", stageLabel: "En autonomie", line: "La méthode RADAR en boîte à outils. Les cadres pour faire tourner la grille sur ta propre marque, sans nous.", href: "/arsenal" },
      { key: "nova", name: "NOVA", price: "999€", cadence: "one-time", fmt: "shot", stage: "idea", stageLabel: "Tu as une idée", line: "L'application pas-à-pas qui mène d'une idée floue à une entreprise prête à lancer. Tu restes le fondateur.", href: "/nova" },
      { key: "audit", name: "BRAND NARRATIVE ARCHITECTURE", price: "4 500€", cadence: "one-time", fmt: "shot", stage: "established", stageLabel: "Marque établie", line: "La commande signature. Un repositionnement complet — identité, position et langage — impossible à confondre, impossible à générer.", href: "/brand-narrative-audit", featured: true },
      { key: "momentum", name: "MOMENTUM", price: "dès 1 500€", cadence: "/ mois", fmt: "post", stage: "established", stageLabel: "Après l'audit", line: "Direction créative + exécution de contenu au mois. Une fois l'architecture posée, l'équipe qui continue de raconter ton histoire — et la fait vivre au quotidien.", href: "/momentum" },
    ] as Rung[],
  },
  es: {
    kicker: "La Escalera",
    h1a: "Un estudio. Un método.",
    h1b: "Cinco formas de entrar.",
    sub: "No es un menú — es una escalera. Cada peldaño es la misma convicción sobre la verdad narrativa, a otra altura. Empieza donde estás.",
    where: "¿Dónde estás?",
    routes: [
      { id: "all" as Stage, label: "Ver todo" },
      { id: "explore" as Stage, label: "Solo explorando" },
      { id: "idea" as Stage, label: "Tengo una idea" },
      { id: "established" as Stage, label: "Tengo una marca establecida" },
    ],
    fmt: { sub: "Suscripción", shot: "Pago único", post: "Tras la auditoría" },
    featuredCta: "Ver el encargo →",
    cta: "Saber más →",
    foot: "Cada peldaño alimenta el siguiente. RADAR entrena el ojo, la Auditoría construye la arquitectura, MOMENTUM la mantiene viva. Nunca pagas dos veces por lo mismo.",
    rungs: [
      { key: "radar", name: "RADAR", price: "15€", cadence: "/ mes", fmt: "sub", stage: "explore", stageLabel: "Explorando", line: "Una marca real diseccionada cada día. Lee un posicionamiento en segundos — el instrumento que tus competidores no tienen.", href: "/radar" },
      { key: "arsenal", name: "Arsenal", price: "147–197€", cadence: "pago único", fmt: "shot", stage: "explore", stageLabel: "Hazlo tú", line: "El método RADAR como kit. Los marcos para aplicar la grilla a tu propia marca, sin nosotros.", href: "/arsenal" },
      { key: "nova", name: "NOVA", price: "999€", cadence: "pago único", fmt: "shot", stage: "idea", stageLabel: "Tienes una idea", line: "La app paso a paso que lleva de una idea difusa a un negocio listo para lanzar. Tú sigues siendo el fundador.", href: "/nova" },
      { key: "audit", name: "BRAND NARRATIVE ARCHITECTURE", price: "4.500€", cadence: "pago único", fmt: "shot", stage: "established", stageLabel: "Marca establecida", line: "El encargo insignia. Un reposicionamiento completo — identidad, posición y lenguaje — imposible de confundir, imposible de generar.", href: "/brand-narrative-audit", featured: true },
      { key: "momentum", name: "MOMENTUM", price: "desde 1.500€", cadence: "/ mes", fmt: "post", stage: "established", stageLabel: "Tras la auditoría", line: "Dirección creativa + ejecución de contenido mensual. Una vez existe la arquitectura, el equipo que sigue contando tu historia — y la lleva al feed cada día.", href: "/momentum" },
    ] as Rung[],
  },
}

export function LadderSection() {
  const t = useT(T)
  const [stage, setStage] = useState<Stage>("all")
  const isDimmed = (s: Stage) => stage !== "all" && s !== stage

  return (
    <section id="ladder" style={{ padding: "140px clamp(1.5rem,4vw,4rem)", background: "#0a0a0a", color: "#fff", position: "relative", overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 0%, ${GLOW} 0%, transparent 60%)`, opacity: 0.18, pointerEvents: "none" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase", fontFamily: SANS }}>{t.kicker}</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2.25rem,5vw,3.75rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 28 }}>
            {t.h1a}<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{t.h1b}</span>
          </h2>
          <p style={{ fontFamily: SANS, fontSize: "clamp(1rem,1.4vw,1.15rem)", color: "rgba(255,255,255,0.65)", maxWidth: 620, margin: "0 auto", lineHeight: 1.6 }}>{t.sub}</p>
        </div>

        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontFamily: SANS, fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 20 }}>{t.where}</div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginBottom: 64 }}>
            {t.routes.map((r) => {
              const active = stage === r.id
              return (
                <button key={r.id} onClick={() => setStage(r.id)} style={{ fontFamily: SANS, fontSize: 13, letterSpacing: "0.02em", padding: "10px 20px", borderRadius: 100, cursor: "pointer", transition: "all 0.25s ease", border: active ? `1px solid ${COLOR}` : "1px solid rgba(255,255,255,0.14)", background: active ? `linear-gradient(135deg, ${COLOR}, #ff1a1a)` : "transparent", color: active ? "#fff" : "rgba(255,255,255,0.7)", fontWeight: active ? 600 : 400 }}>{r.label}</button>
              )
            })}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {t.rungs.map((r) => {
            const dimmed = isDimmed(r.stage)
            const fmtBorder = r.fmt === "sub" ? "rgba(120,180,255,0.4)" : r.fmt === "post" ? "rgba(255,255,255,0.2)" : "rgba(230,57,70,0.4)"
            const fmtColor = r.fmt === "sub" ? "rgba(150,195,255,0.9)" : r.fmt === "post" ? "rgba(255,255,255,0.6)" : COLOR
            return (
              <Link key={r.key} href={r.href} style={{ textDecoration: "none", color: "inherit", display: "block", position: "relative", padding: "34px 28px 28px", background: r.featured ? "linear-gradient(180deg, rgba(230,57,70,0.08) 0%, rgba(10,10,10,0.6) 100%)" : "rgba(255,255,255,0.02)", border: r.featured ? "1px solid rgba(230,57,70,0.4)" : "1px solid rgba(255,255,255,0.09)", opacity: dimmed ? 0.32 : 1, filter: dimmed ? "saturate(0.4)" : "none", transition: "all 0.35s ease" }} onMouseEnter={(e) => { if (!dimmed) (e.currentTarget as HTMLElement).style.borderColor = COLOR }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = r.featured ? "rgba(230,57,70,0.4)" : "rgba(255,255,255,0.09)" }}>
                {r.featured && (<>
                  <div style={{ position: "absolute", top: -1, left: -1, width: 34, height: 34, borderTop: `2px solid ${COLOR}`, borderLeft: `2px solid ${COLOR}` }} />
                  <div style={{ position: "absolute", bottom: -1, right: -1, width: 34, height: 34, borderBottom: `2px solid ${COLOR}`, borderRight: `2px solid ${COLOR}` }} />
                </>)}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 22 }}>
                  <span style={{ fontFamily: SANS, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 100, border: `1px solid ${fmtBorder}`, color: fmtColor }}>{t.fmt[r.fmt]}</span>
                  <span style={{ fontFamily: SANS, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.5)" }}>{r.stageLabel}</span>
                </div>
                <h3 style={{ fontFamily: SERIF, fontSize: r.featured ? "1.45rem" : "1.5rem", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 12 }}>{r.name}</h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 18 }}>
                  <span style={{ fontFamily: SERIF, fontSize: "1.7rem", fontWeight: 700, color: r.featured ? COLOR : "#fff" }}>{r.price}</span>
                  <span style={{ fontFamily: SANS, fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{r.cadence}</span>
                </div>
                <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.62)", marginBottom: 22 }}>{r.line}</p>
                <span style={{ fontFamily: SANS, fontSize: 13, fontWeight: 600, color: COLOR, letterSpacing: "0.02em" }}>{r.featured ? t.featuredCta : t.cta}</span>
              </Link>
            )
          })}
        </div>

        <p style={{ fontFamily: SANS, fontSize: 13, color: "rgba(255,255,255,0.4)", textAlign: "center", marginTop: 48, maxWidth: 640, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>{t.foot}</p>
      </div>
    </section>
  )
}
