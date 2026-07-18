"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { useT } from "@/lib/i18n"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"

const T = {
  en: {
    kicker: "Selected Results · Anonymized",
    h2: "The work, in numbers.",
    intro: "Our founders rarely speak publicly about the work. Sectors and stages disclosed; names withheld by their preference, not ours.",
    cta: "See full method cases →",
    results: [
      { metric: "+312%", label: "Revenue in 90 days", descriptor: "B2B SaaS · Paris · Post-Series A", detail: "From 14k MRR to 58k MRR after the Brand Narrative Architecture. The Differentiation Diagnostic alone unlocked an enterprise tier the founder couldn't sell before." },
      { metric: "2.4M", label: "Organic views in one quarter", descriptor: "Executive coaching · Independent · Solo founder", detail: "Zero ad spend. The Narrative Platform and Deployment Kit isolated the one territory only this founder could own — one short-form essay alone did 870k views." },
      { metric: "4x", label: "Inbound pipeline value", descriptor: "Financial education · Lyon · Bootstrapped", detail: "Before, leads came in cold and unqualified. After: founders DMing her with the exact phrasing from the Language System. The pipeline filled itself." },
    ],
    quotes: [
      { quote: "We'd been trying to articulate what we do for three years. They got it in three weeks. Our sales cycle is now shorter than our onboarding.", descriptor: "Co-founder · B2B SaaS · Paris", system: "Brand Narrative Architecture" },
      { quote: "I stopped guessing what to post. The Language System they wrote is the closest thing I've had to a creative co-founder — except it doesn't sleep.", descriptor: "Founder · Executive coaching · Independent", system: "Brand Narrative Architecture" },
      { quote: "It named the thing I'd been circling for two years. After delivery, prospects started repeating my own words back to me.", descriptor: "Founder · Financial education · Lyon", system: "Brand Narrative Architecture" },
    ],
  },
  fr: {
    kicker: "Résultats sélectionnés · Anonymisés",
    h2: "Le travail, en chiffres.",
    intro: "Nos fondateurs parlent rarement publiquement du travail. Secteurs et stades communiqués ; noms tus par leur choix, pas le nôtre.",
    cta: "Voir les cas de méthode complets →",
    results: [
      { metric: "+312%", label: "Revenus en 90 jours", descriptor: "SaaS B2B · Paris · Post-Series A", detail: "De 14k à 58k de MRR après la Brand Narrative Architecture. Le seul Diagnostic de différenciation a débloqué une offre enterprise que le fondateur n'arrivait pas à vendre." },
      { metric: "2,4M", label: "Vues organiques en un trimestre", descriptor: "Coaching de dirigeants · Indépendant · Fondateur solo", detail: "Zéro budget pub. La Plateforme narrative et le Kit de déploiement ont isolé le seul territoire que ce fondateur pouvait occuper — un seul essai court a fait 870k vues." },
      { metric: "4x", label: "Valeur du pipeline entrant", descriptor: "Éducation financière · Lyon · Bootstrappé", detail: "Avant, les leads arrivaient froids et non qualifiés. Après : des fondateurs qui la contactent en reprenant mot pour mot les formulations du Système de langage. Le pipeline s'est rempli seul." },
    ],
    quotes: [
      { quote: "On essayait d'articuler ce qu'on fait depuis trois ans. Ils l'ont eu en trois semaines. Notre cycle de vente est désormais plus court que notre onboarding.", descriptor: "Co-fondateur · SaaS B2B · Paris", system: "Brand Narrative Architecture" },
      { quote: "J'ai arrêté de deviner quoi poster. Le Système de langage qu'ils ont écrit est ce qui se rapproche le plus d'un co-fondateur créatif — sauf qu'il ne dort pas.", descriptor: "Fondatrice · Coaching de dirigeants · Indépendante", system: "Brand Narrative Architecture" },
      { quote: "Ça a nommé la chose autour de laquelle je tournais depuis deux ans. Après la livraison, les prospects ont commencé à me répéter mes propres mots.", descriptor: "Fondatrice · Éducation financière · Lyon", system: "Brand Narrative Architecture" },
    ],
  },
  es: {
    kicker: "Resultados seleccionados · Anonimizados",
    h2: "El trabajo, en cifras.",
    intro: "Nuestros fundadores rara vez hablan públicamente del trabajo. Sectores y etapas revelados; nombres omitidos por su preferencia, no la nuestra.",
    cta: "Ver los casos de método completos →",
    results: [
      { metric: "+312%", label: "Ingresos en 90 días", descriptor: "SaaS B2B · París · Post-Series A", detail: "De 14k a 58k de MRR tras la Brand Narrative Architecture. Solo el Diagnóstico de diferenciación desbloqueó un nivel enterprise que el fundador no lograba vender." },
      { metric: "2,4M", label: "Visualizaciones orgánicas en un trimestre", descriptor: "Coaching ejecutivo · Independiente · Fundador solo", detail: "Cero inversión en publicidad. La Plataforma narrativa y el Kit de despliegue aislaron el único territorio que este fundador podía ocupar — un solo ensayo breve hizo 870k visualizaciones." },
      { metric: "4x", label: "Valor del pipeline entrante", descriptor: "Educación financiera · Lyon · Bootstrapped", detail: "Antes, los leads llegaban fríos y sin cualificar. Después: fundadores escribiéndole con las formulaciones exactas del Sistema de lenguaje. El pipeline se llenó solo." },
    ],
    quotes: [
      { quote: "Llevábamos tres años intentando articular lo que hacemos. Ellos lo lograron en tres semanas. Nuestro ciclo de venta es ahora más corto que nuestro onboarding.", descriptor: "Cofundador · SaaS B2B · París", system: "Brand Narrative Architecture" },
      { quote: "Dejé de adivinar qué publicar. El Sistema de lenguaje que escribieron es lo más parecido a un cofundador creativo que he tenido — salvo que no duerme.", descriptor: "Fundadora · Coaching ejecutivo · Independiente", system: "Brand Narrative Architecture" },
      { quote: "Nombró aquello alrededor de lo que llevaba dos años girando. Tras la entrega, los prospectos empezaron a repetirme mis propias palabras.", descriptor: "Fundadora · Educación financiera · Lyon", system: "Brand Narrative Architecture" },
    ],
  },
}

const CHART_IDS = ["chart1", "chart2", "chart3"]

function useCharts() {
  const initialized = useRef(false)
  useEffect(() => {
    if (initialized.current) return
    const script = document.createElement("script")
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"
    script.onload = () => {
      initialized.current = true
      const Chart = (window as any).Chart
      const gridColor = "rgba(255,255,255,0.08)"
      const tickColor = "rgba(255,255,255,0.4)"

      new Chart(document.getElementById("chart1"), {
        type: "bar",
        data: {
          labels: ["Before", "After"],
          datasets: [{
            data: [14, 58],
            backgroundColor: ["rgba(255,255,255,0.15)", "#e63946"],
            borderRadius: 4,
            barThickness: 40,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: (ctx: any) => ctx.parsed.y + "k MRR" } },
          },
          scales: {
            x: { grid: { display: false }, ticks: { color: tickColor, font: { size: 11 } }, border: { display: false } },
            y: { grid: { color: gridColor }, border: { display: false }, ticks: { color: tickColor, font: { size: 10 }, callback: (v: any) => v + "k" }, min: 0, max: 70 },
          },
        },
      })

      new Chart(document.getElementById("chart2"), {
        type: "line",
        data: {
          labels: ["Month 1", "Month 2", "Month 3"],
          datasets: [{
            data: [120, 980, 2400],
            borderColor: "#e63946",
            backgroundColor: "rgba(230,57,70,0.1)",
            fill: true,
            tension: 0.4,
            pointBackgroundColor: "#e63946",
            pointRadius: 4,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: (ctx: any) => ctx.parsed.y + "k views" } },
          },
          scales: {
            x: { grid: { display: false }, ticks: { color: tickColor, font: { size: 11 } }, border: { display: false } },
            y: { grid: { color: gridColor }, border: { display: false }, ticks: { color: tickColor, font: { size: 10 }, callback: (v: any) => v + "k" }, min: 0 },
          },
        },
      })

      new Chart(document.getElementById("chart3"), {
        type: "bar",
        data: {
          labels: ["Before", "After"],
          datasets: [{
            data: [1, 4],
            backgroundColor: ["rgba(255,255,255,0.15)", "#e63946"],
            borderRadius: 4,
            barThickness: 40,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: (ctx: any) => ctx.parsed.y + "x pipeline" } },
          },
          scales: {
            x: { grid: { display: false }, ticks: { color: tickColor, font: { size: 11 } }, border: { display: false } },
            y: { grid: { color: gridColor }, border: { display: false }, ticks: { color: tickColor, font: { size: 10 }, callback: (v: any) => v + "x" }, min: 0, max: 5 },
          },
        },
      })
    }
    document.head.appendChild(script)
  }, [])
}

export function CasesSection() {
  const t = useT(T)
  const RESULTS = t.results.map((r, i) => ({ ...r, chartId: CHART_IDS[i] }))
  const QUOTES = t.quotes
  useCharts()

  return (
    <section id="cases" style={{ padding: "140px clamp(1.5rem,4vw,4rem)", background: "#0d0d0d", color: "#fff", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase", fontFamily: SANS }}>
            {t.kicker}
          </div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2.25rem,5vw,3.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 32 }}>
            {t.h2}
          </h2>
          <p style={{ fontFamily: SANS, fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.55)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7, fontStyle: "italic" }}>
            {t.intro}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 100 }}>
          {RESULTS.map((r, i) => (
            <div key={i} style={{ padding: "40px 32px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
              <div style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem,4vw,3.5rem)", fontWeight: 700, color: COLOR, lineHeight: 1, marginBottom: 8, letterSpacing: "-0.03em" }}>
                {r.metric}
              </div>
              <div style={{ fontFamily: SANS, fontSize: 13, color: "rgba(255,255,255,0.9)", letterSpacing: "0.04em", marginBottom: 24, textTransform: "uppercase" }}>
                {r.label}
              </div>
              <div style={{ fontFamily: SANS, fontSize: 12, color: COLOR, marginBottom: 16, letterSpacing: "0.02em" }}>
                {r.descriptor}
              </div>
              <div style={{ position: "relative", width: "100%", height: 160, marginBottom: 24 }}>
                <canvas id={r.chartId} role="img" aria-label={r.label} />
              </div>
              <p style={{ fontFamily: SANS, fontSize: "0.92rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>
                {r.detail}
              </p>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 80 }}>
          {QUOTES.map((q, i) => (
            <div key={i} style={{ padding: "36px 28px", borderLeft: `2px solid ${COLOR}`, background: "rgba(255,255,255,0.02)" }}>
              <p style={{ fontFamily: SERIF, fontSize: "1.05rem", fontStyle: "italic", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, marginBottom: 24 }}>
                "{q.quote}"
              </p>
              <div style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.7)", marginBottom: 12, letterSpacing: "0.02em" }}>
                {q.descriptor}
              </div>
              <div style={{ display: "inline-block", fontSize: 10, letterSpacing: "0.2em", color: COLOR, padding: "4px 10px", border: `1px solid ${COLOR}`, borderRadius: 100, textTransform: "uppercase", fontFamily: SANS }}>
                {q.system}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/case-studies" style={{ display: "inline-block", color: COLOR, fontSize: 14, fontFamily: SANS, letterSpacing: "0.05em", textDecoration: "none", borderBottom: `1px solid ${COLOR}`, paddingBottom: 4 }}>
            {t.cta}
          </Link>
        </div>

      </div>
    </section>
  )
}
