"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { useT } from "@/lib/i18n"
import { FaqSection } from "@/components/strawberry/faq-section"
import { FAQ_NOVA } from "@/lib/faqs"


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
    <main className="min-h-screen overflow-hidden bg-ink font-sans text-white">
      <NavBar />

      <section className="section-hero pb-24 pt-40">
        <div className="glow-top" aria-hidden />
        <div className="shell-md relative">
          <div className="pill mb-9">{t.badge}</div>

          <h1 className="h-display mb-7">
            {t.h1a}
            <br />
            <span className="text-gradient">{t.h1b}</span>
          </h1>

          <p className="lede mx-auto mb-4 max-w-[620px]">{t.lead}</p>
          <p className="mb-10 font-serif text-[1.15rem] italic text-chalk-55">{t.quote}</p>

          <div className="flex flex-wrap justify-center gap-3.5">
            <a href={NOVA_BUY_URL} className="btn-primary" rel="noopener">{t.start}</a>
            <a href="#journey" className="btn-ghost">{t.seeSteps}</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell-lg grid-auto">
          {t.why.map((c) => (
            <div key={c.t} className="card px-7 py-8">
              <h3 className="mb-3 font-serif text-[1.3rem] font-bold">{c.t}</h3>
              <p className="body-sm">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="journey" className="section">
        <div className="mx-auto max-w-[820px]">
          <div className="mb-14 text-center">
            <div className="kicker mb-5">{t.journeyKicker}</div>
            <h2 className="h-section">{t.journeyTitle}</h2>
          </div>

          <div className="flex flex-col gap-px border border-white/[0.07] bg-white/[0.07]">
            {t.steps.map((s, i) => (
              <div key={s.t} className="flex items-start gap-6 bg-ink px-7 py-7">
                <div className="min-w-[44px] font-serif text-3xl font-bold leading-none text-brand">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="mb-1.5 font-serif text-[1.3rem] font-bold">{s.t}</h3>
                  <p className="font-sans text-sm leading-relaxed text-white/60">{s.r}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="card-featured mx-auto max-w-[620px] p-10 md:p-14">
          <span className="bracket-tl" aria-hidden />
          <span className="bracket-br" aria-hidden />

          <span className="tag border-brand text-brand">{t.priceLabel}</span>

          <div className="mb-1.5 mt-6 font-serif text-[3.5rem] font-bold">999€</div>
          <p className="mx-auto mb-8 max-w-[420px] font-sans text-[15px] leading-relaxed text-chalk-65">
            {t.priceBody}
          </p>

          <a href={NOVA_BUY_URL} className="btn-primary px-9" rel="noopener">{t.startShort}</a>
        </div>

        <div className="mx-auto mt-12 max-w-[640px]">
          <p className="font-sans text-[14.5px] leading-relaxed text-white/50">
            {t.footNote1}
            <Link href="/brand-narrative-audit" className="text-brand no-underline">{t.footLink}</Link>.
          </p>
        </div>
      </section>

      <FaqSection faqs={FAQ_NOVA} />

      <Footer />
    </main>
  )
}
