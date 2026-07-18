"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { useT } from "@/lib/i18n"
import { FaqSection } from "@/components/strawberry/faq-section"
import { FAQ_ARSENAL } from "@/lib/faqs"


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

          <p className="lede mx-auto mb-10 max-w-[640px]">{t.lead}</p>

          <div className="flex flex-wrap justify-center gap-3.5">
            <a href={ARSENAL_BUY_URL} className="btn-primary" rel="noopener">{t.buy}</a>
            <a href="#tools" className="btn-ghost">{t.seeTools}</a>
          </div>
        </div>
      </section>

      <section id="tools" className="section">
        <div className="shell-md">
          <div className="mb-12 text-center">
            <div className="kicker">{t.toolsKicker}</div>
          </div>

          <div className="flex flex-col gap-px border border-white/[0.07] bg-white/[0.07]">
            {t.tools.map((tool, i) => (
              <div key={tool.t} className="flex items-start gap-6 bg-ink px-7 py-7">
                <div className="min-w-[44px] font-serif text-3xl font-bold leading-none text-brand">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="mb-1.5 font-serif text-[1.3rem] font-bold">{tool.t}</h3>
                  <p className="font-sans text-sm leading-relaxed text-white/60">{tool.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="card-featured mx-auto max-w-[560px] p-10 md:p-14">
          <span className="bracket-tl" aria-hidden />
          <span className="bracket-br" aria-hidden />

          <span className="tag border-brand text-brand">{t.priceLabel}</span>

          <div className="mb-1.5 mt-6 font-serif text-[3.2rem] font-bold">147–197€</div>
          <h3 className="mb-3 font-serif text-[1.4rem] font-bold">{t.priceTitle}</h3>
          <p className="mx-auto mb-8 max-w-[400px] font-sans text-[15px] leading-relaxed text-chalk-65">
            {t.priceBody}
          </p>

          <a href={ARSENAL_BUY_URL} className="btn-primary" rel="noopener">{t.buy}</a>
        </div>
      </section>

      <section className="section pb-28 text-center">
        <div className="mx-auto max-w-[720px]">
          <p className="mb-6 font-serif text-[clamp(1.15rem,2vw,1.5rem)] italic leading-snug text-chalk-75">
            {t.bridge}
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Link href="/radar" className="btn-ghost px-7 py-3.5 text-sm">{t.bridgeRadar}</Link>
            <Link href="/brand-narrative-audit" className="btn-quiet px-5 py-3.5">{t.bridgeAudit}</Link>
          </div>
        </div>
      </section>

      <FaqSection faqs={FAQ_ARSENAL} />

      <Footer />
    </main>
  )
}
