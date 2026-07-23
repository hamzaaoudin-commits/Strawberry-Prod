"use client"

import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { useT } from "@/lib/i18n"
import { STRIPE_LINKS } from "@/lib/config"
import { FaqSection } from "@/components/strawberry/faq-section"
import { FAQ_RADAR } from "@/lib/faqs"
import { BackHomeButton } from "@/components/strawberry/back-home-button"


// TODO: replace with the live RADAR subscription Stripe link when created.


const T = {
  en: {
    badge: "A Strawberry Production publication · daily",
    h1a: "Catch a brand's signal",
    h1b: "before the market does.",
    lead: "Every day, one real brand goes under the radar: what it emits, what jams it, and the heading I'd give it. Not a course — an instrument. The edge your competitors don't have, day after day.",
    subscribe: "Subscribe — 15€/month",
    access: "I'm already a subscriber",
    read: [
      { label: "The signal", body: "What the brand genuinely emits — the position that actually lands, isolated from everything around it." },
      { label: "The noise", body: "What blurs it: the borrowed words, the me-too claims, the promise that fights itself." },
      { label: "The heading", body: "The single repositioning move I'd give it — the decision that would make it unmistakable." },
    ],
    inKicker: "What the subscription contains",
    inTitle: "Everything below, for 15€ a month.",
    contents: [
      { n: "30+", t: "Brand reads", d: "Thirty real brands already dissected, a new one every day. Same six-block grid each time." },
      { n: "IX", t: "The manifestos", d: "The nine Strawberry manifestos, in full — the doctrine the studio works from." },
      { n: "05", t: "The lessons", d: "The method broken into pieces: the sentence test, the reference class, the forbidden words, extraction, refusal." },
      { n: "03", t: "The applications", d: "Daily exercise, the sentence library, and the watch list on your own competitors." },
    ],
    gridKicker: "The grid",
    gridTitle: "Six blocks. Never changes.",
    grid: ["Context", "The signal", "The noise", "The tension", "The heading", "Verdict"],
    manifestoNote: "Previously published free. Now part of the subscription.",
    bridge: "Reading positions well is one thing. Having yours written is another — and that is what the commission does.",
    subLabel: "Subscription · 15€/mo",
    subTitle: "The daily read, on tap.",
    subBody: "The full library, one new read a day, and the habit that lets you price any positioning in seconds. Cancel anytime.",
    bridgeCta: "See BRAND NARRATIVE ARCHITECTURE →",
  },
  fr: {
    badge: "Une publication de Strawberry Production · quotidien",
    h1a: "Captez le signal d'une marque",
    h1b: "avant le marché.",
    lead: "Chaque jour, une marque réelle passe au radar : ce qui émet (le signal), ce qui parasite (le bruit), et le cap que je lui donnerais. Pas un cours — un instrument. L'avance que vos concurrents n'ont pas, jour après jour.",
    subscribe: "S'abonner — 15€/mois",
    access: "Je suis déjà abonné",
    read: [
      { label: "Le signal", body: "Ce que la marque émet vraiment — la position qui porte, isolée de tout le reste." },
      { label: "Le bruit", body: "Ce qui la brouille : les mots empruntés, les promesses me-too, la promesse qui se contredit." },
      { label: "Le cap", body: "Le seul mouvement de repositionnement que je lui donnerais — la décision qui la rendrait indiscutable." },
    ],
    inKicker: "Ce que contient l'abonnement",
    inTitle: "Tout ce qui suit, pour 15€ par mois.",
    contents: [
      { n: "30+", t: "Les fiches", d: "Trente marques réelles déjà disséquées, une nouvelle chaque jour. La même grille en six blocs à chaque fois." },
      { n: "IX", t: "Les manifestes", d: "Les neuf manifestes Strawberry, en entier — la doctrine dont le studio travaille." },
      { n: "05", t: "Les leçons", d: "La méthode découpée en pièces : le test de la phrase, la classe de référence, les mots interdits, l'extraction, le refus." },
      { n: "03", t: "Les applications", d: "L'entraînement du jour, la bibliothèque des phrases, et le carnet de veille sur vos propres concurrents." },
    ],
    gridKicker: "La grille",
    gridTitle: "Six blocs. Elle ne change jamais.",
    grid: ["Contexte", "Le signal", "Le bruit", "La tension", "Le cap", "Verdict"],
    manifestoNote: "Auparavant publiés en accès libre. Désormais dans l'abonnement.",
    bridge: "Bien lire les positions est une chose. Faire écrire la vôtre en est une autre — et c'est le travail de la commande.",
    subLabel: "Abonnement · 15€/mois",
    subTitle: "La lecture du jour, à volonté.",
    subBody: "La bibliothèque complète, une nouvelle fiche par jour, et l'habitude qui vous fait lire n'importe quel positionnement en quelques secondes. Résiliable à tout moment.",
    bridgeCta: "Voir BRAND NARRATIVE ARCHITECTURE →",
  },
  es: {
    badge: "Una publicación de Strawberry Production · diario",
    h1a: "Capta la señal de una marca",
    h1b: "antes que el mercado.",
    lead: "Cada día, una marca real pasa por el radar: lo que emite (la señal), lo que interfiere (el ruido) y el rumbo que le daría. No un curso — un instrumento. La ventaja que sus competidores no tienen, día tras día.",
    subscribe: "Suscribirse — 15€/mes",
    access: "Ya estoy suscrito",
    read: [
      { label: "La señal", body: "Lo que la marca emite de verdad — la posición que aterriza, aislada de todo lo demás." },
      { label: "El ruido", body: "Lo que la enturbia: las palabras prestadas, los reclamos me-too, la promesa que se contradice." },
      { label: "El rumbo", body: "El único movimiento de reposicionamiento que le daría — la decisión que la haría inconfundible." },
    ],
    inKicker: "Lo que contiene la suscripción",
    inTitle: "Todo lo que sigue, por 15€ al mes.",
    contents: [
      { n: "30+", t: "Las fichas", d: "Treinta marcas reales ya diseccionadas, una nueva cada día. La misma grilla de seis bloques cada vez." },
      { n: "IX", t: "Los manifiestos", d: "Los nueve manifiestos Strawberry, enteros — la doctrina desde la que trabaja el estudio." },
      { n: "05", t: "Las lecciones", d: "El método desglosado: la prueba de la frase, la clase de referencia, las palabras prohibidas, la extracción, el rechazo." },
      { n: "03", t: "Las aplicaciones", d: "El entrenamiento del día, la biblioteca de frases y el cuaderno de vigilancia sobre sus competidores." },
    ],
    gridKicker: "La grilla",
    gridTitle: "Seis bloques. Nunca cambia.",
    grid: ["Contexto", "La señal", "El ruido", "La tensión", "El rumbo", "Veredicto"],
    manifestoNote: "Antes publicados en acceso libre. Ahora dentro de la suscripción.",
    bridge: "Leer bien las posiciones es una cosa. Que escriban la suya es otra — y ese es el trabajo del encargo.",
    subLabel: "Suscripción · 15€/mes",
    subTitle: "La lectura diaria, a demanda.",
    subBody: "La biblioteca complete, una ficha nueva al día, y el hábito que le permite tasar cualquier posicionamiento en segundos. Cancele cuando quiera.",
    bridgeCta: "Ver BRAND NARRATIVE ARCHITECTURE →",
  },
}

function RadarScope() {
  return (
    <div className="hero-stage" aria-hidden="true">
      <div className="radar-scope">
        <div className="scope-ring r1" />
        <div className="scope-ring r2" />
        <div className="scope-ring r3" />
        <div className="scope-cross" />
        <div className="scope-sweep" />
        <div className="scope-center" />
        <div className="blip" style={{ "--a": "38deg", "--d": "120px", "--phase": "0.58s" } as React.CSSProperties}><span className="dot" /><span className="ping" /><span className="blip-label">Sézane</span></div>
        <div className="blip" style={{ "--a": "118deg", "--d": "92px", "--phase": "1.8s" } as React.CSSProperties}><span className="dot" /><span className="ping" /><span className="blip-label">Qonto</span></div>
        <div className="blip left" style={{ "--a": "212deg", "--d": "128px", "--phase": "3.24s" } as React.CSSProperties}><span className="dot" /><span className="ping" /><span className="blip-label">Typology</span></div>
        <div className="blip left" style={{ "--a": "300deg", "--d": "76px", "--phase": "4.58s" } as React.CSSProperties}><span className="dot" /><span className="ping" /><span className="blip-label">Diptyque</span></div>
      </div>
      <style jsx>{`
        .hero-stage { position: relative; height: 320px; margin-top: 40px; display: flex; align-items: center; justify-content: center; }
        .radar-scope { position: relative; width: 300px; height: 300px; border-radius: 50%; }
        .scope-ring { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); border: 1px solid rgba(255,255,255,0.12); border-radius: 50%; }
        .scope-ring.r1 { width: 300px; height: 300px; }
        .scope-ring.r2 { width: 200px; height: 200px; }
        .scope-ring.r3 { width: 100px; height: 100px; }
        .scope-cross::before, .scope-cross::after { content: ""; position: absolute; top: 50%; left: 50%; background: rgba(255,255,255,0.12); }
        .scope-cross::before { width: 300px; height: 1px; transform: translate(-50%,-50%); }
        .scope-cross::after { width: 1px; height: 300px; transform: translate(-50%,-50%); }
        .scope-center { position: absolute; top: 50%; left: 50%; width: 8px; height: 8px; background: #fff; border-radius: 50%; transform: translate(-50%,-50%); z-index: 3; }
        .scope-sweep { position: absolute; inset: 0; border-radius: 50%; background: conic-gradient(from 0deg, rgba(230,57,70,0) 0deg, rgba(230,57,70,0) 300deg, rgba(230,57,70,0.10) 340deg, rgba(230,57,70,0.32) 356deg, rgba(230,57,70,0.6) 360deg); animation: radar-sweep 5.5s linear infinite; z-index: 2; }
        .scope-sweep::after { content: ""; position: absolute; top: 0; left: 50%; width: 1px; height: 50%; background: linear-gradient(#e63946, rgba(230,57,70,0)); transform-origin: bottom center; }
        .blip { position: absolute; top: 50%; left: 50%; width: 9px; height: 9px; transform: rotate(var(--a)) translateY(calc(-1 * var(--d))) rotate(calc(-1 * var(--a))); z-index: 3; }
        .blip .dot { position: absolute; inset: 0; background: #e63946; border-radius: 50%; box-shadow: 0 0 8px rgba(230,57,70,0.35); }
        .blip .ping { position: absolute; top: 50%; left: 50%; width: 9px; height: 9px; border-radius: 50%; border: 1.5px solid #e63946; transform: translate(-50%,-50%) scale(1); opacity: 0; animation: blip-ping 5.5s linear infinite; animation-delay: var(--phase, 0s); }
        .blip .blip-label { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); font-family: 'DM Sans', monospace; font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase; white-space: nowrap; color: rgba(255,255,255,0.7); background: rgba(10,10,10,0.7); padding: 2px 6px; border-radius: 4px; }
        .blip.left .blip-label { left: auto; right: 16px; }
        @keyframes radar-sweep { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes blip-ping {
          0% { opacity: 0; transform: translate(-50%,-50%) scale(1); }
          4% { opacity: 0.9; transform: translate(-50%,-50%) scale(1); }
          22% { opacity: 0; transform: translate(-50%,-50%) scale(3.4); }
          100% { opacity: 0; transform: translate(-50%,-50%) scale(3.4); }
        }
        @media (prefers-reduced-motion: reduce) {
          .scope-sweep { animation: none; background: conic-gradient(from 300deg, rgba(230,57,70,0) 0deg, rgba(230,57,70,0.28) 55deg, rgba(230,57,70,0) 60deg); }
          .blip .ping { animation: none; opacity: 0; }
        }
      `}</style>
    </div>
  )
}

export default function RadarPage() {
  const t = useT(T)

  return (
    <main className="min-h-screen overflow-hidden bg-ink font-sans text-white">
      <NavBar />
      <BackHomeButton />

      <section className="section-hero pb-16 pt-40">
        <div className="glow-top" aria-hidden />
        <div className="shell-md relative">
          <div className="pill mb-8">{t.badge}</div>

          <h1 className="h-display mb-6">
            {t.h1a}
            <br />
            <span className="text-gradient">{t.h1b}</span>
          </h1>

          <p className="lede mx-auto mb-9 max-w-[640px]">{t.lead}</p>

          <div className="flex flex-wrap justify-center gap-3.5">
            <a href={STRIPE_LINKS.radar} className="btn-primary" rel="noopener">{t.subscribe}</a>
            <Link href="/radar/acces" className="btn-ghost">{t.access}</Link>
          </div>

          <RadarScope />
        </div>
      </section>

      {/* CE QUE CONTIENT L'ABONNEMENT — la question à 15€ se règle ici */}
      <section className="section">
        <div className="shell-lg">
          <div className="mb-12 text-center">
            <div className="kicker mb-5">{t.inKicker}</div>
            <h2 className="h-section">{t.inTitle}</h2>
          </div>

          <div className="grid-auto">
            {t.contents.map((c) => (
              <div key={c.t} className="card px-7 py-8">
                <div className="mb-3.5 font-serif text-[2.25rem] font-bold leading-none text-brand">{c.n}</div>
                <h3 className="mb-2.5 font-serif text-[1.3rem] font-bold">{c.t}</h3>
                <p className="body-sm">{c.d}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center font-sans text-[12.5px] text-chalk-40">{t.manifestoNote}</p>
        </div>
      </section>

      {/* LA GRILLE — ce qui rend les fiches comparables entre elles */}
      <section className="section">
        <div className="mx-auto max-w-[820px] text-center">
          <div className="kicker mb-5">{t.gridKicker}</div>
          <h2 className="h-section mb-10">{t.gridTitle}</h2>

          <div className="grid gap-px border border-white/[0.07] bg-white/[0.07] [grid-template-columns:repeat(auto-fit,minmax(120px,1fr))]">
            {t.grid.map((g, i) => (
              <div key={g} className="bg-ink px-4 py-6">
                <div className="mb-2 font-serif text-[15px] font-bold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-sans text-[12.5px] leading-snug text-chalk-75">{g}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL FREE SÉZANE READ */}
      <section className="section text-center">
        <div className="card mx-auto max-w-[560px] px-8 py-11">
          <span className="tag border-[rgba(120,180,255,0.4)] text-[rgba(150,195,255,0.9)]">{t.subLabel}</span>
          <h3 className="mb-3 mt-5 font-serif text-[1.8rem] font-bold">{t.subTitle}</h3>
          <p className="mb-7 font-sans text-[15px] leading-relaxed text-chalk-65">{t.subBody}</p>
          <a href={STRIPE_LINKS.radar} className="btn-primary" rel="noopener">{t.subscribe}</a>
        </div>
      </section>

      <section className="section pb-28 text-center">
        <div className="mx-auto max-w-[720px]">
          <p className="font-serif text-[clamp(1.15rem,2vw,1.5rem)] italic leading-snug text-chalk-75">
            {t.bridge}
          </p>
          <Link href="/brand-narrative-audit" className="btn-quiet mt-5">{t.bridgeCta}</Link>
        </div>
      </section>

      <FaqSection faqs={FAQ_RADAR} />

      <Footer />
    </main>
  )
}
