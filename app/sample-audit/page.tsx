"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { useT } from "@/lib/i18n"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

type Para = { b?: string; text: string; muted?: boolean; accent?: boolean }
type Block = { kicker: string; title: string; paras: Para[] }

const T = {
  en: {
    badge: "Sample audit · the method on ourselves",
    h1: "Strawberry, audited by Strawberry.",
    lead: "Instead of someone else's numbers, here is the method applied to the hardest brand to see clearly — our own. This is an abridged read: the shape of what a commission delivers, run on Strawberry Production.",
    ctaLead: "This is the shape of the work — abridged. The full commission runs it on ",
    ctaLeadAccent: "your",
    ctaLeadEnd: " brand.",
    cta: "See Brand Narrative Architecture — 4,500€",
    blocks: [
      {
        kicker: "Differentiation Diagnostic",
        title: "The field, and where it sounds alike",
        paras: [
          { text: "The narrative studio field crowds around the same four words: storytelling, identity, brand, strategy. Everyone promises \u201Ca story that stands out\u201D and delivers a logo, a moodboard, a tagline. The category has trained founders to expect decoration — so a positioning offer gets benchmarked against a design deliverable, and mis-priced accordingly." },
          { text: "The open ground no one occupies: treating the brand's story as an architecture — a load-bearing structure, not a surface — and refusing the one thing the whole field leans on: work a machine can now generate. That refusal is the territory." },
        ],
      },
      {
        kicker: "Narrative Platform",
        title: "The position, in one defensible sentence",
        paras: [
          { b: "Strawberry builds the part of a brand that cannot be generated:", text: " the narrative architecture a founder is too close to see, and a machine has no truth to write." },
          { text: "The fight: against sameness, and against the flattening effect of AI on brand language. The vision: a market where being recognizable at first glance is the last real moat." },
        ],
      },
      {
        kicker: "Message Pillars",
        title: "The three ideas we hammer",
        paras: [
          { b: "1. Impossible to confuse.", text: " Differentiation is not a style; it's a structural position competitors can't occupy." },
          { b: "2. Impossible to generate.", text: " The extraction at the core of the work — your truth, your singularity — is the one input no model has." },
          { b: "3. Exploitable the Monday after.", text: " An architecture you deploy, not a manifesto you frame." },
        ],
      },
      {
        kicker: "Language System",
        title: "The words that are ours — and the ones we refuse",
        paras: [
          { b: "Ours:", text: " architecture, extraction, singularity, position, recognizable, commission, deploy." },
          { b: "Forbidden", text: " (because the field is saturated with them): storytelling, disruptive, authentic, journey, DNA, elevate, unleash. Every time we reach for a saturated word, we sound like the people we're trying not to sound like." },
        ],
      },
      {
        kicker: "Tone",
        title: "How it should feel to read us",
        paras: [
          { text: "Declarative, not persuasive. Short sentences that land like verdicts. Confidence without adjectives — the certainty comes from the structure of the claim, not from intensifiers. We state; we don't sell." },
        ],
      },
      {
        kicker: "Before / After",
        title: "The same idea, mis-said then well-said",
        paras: [
          { b: "Before:", text: " \u201CWe help brands tell their authentic story and stand out with a disruptive identity.\u201D", muted: true },
          { b: "After:", text: " \u201CWe build the narrative architecture that makes you impossible to confuse — and impossible to generate.\u201D", accent: true },
        ],
      },
      {
        kicker: "Deployment Kit",
        title: "Where it goes to work first",
        paras: [
          { text: "The one-line on the site hero, the first line of every cold email, the subject a prospect reads before anything else, and the page a warm reply lands on. Positioning that never touches these four surfaces stays theoretical." },
        ],
      },
      {
        kicker: "Coherence Guide",
        title: "The test for every future decision",
        paras: [
          { text: "Before publishing anything, one question: " },
          { b: "could a competitor say this too?", text: " If yes, it isn't ours yet. The architecture holds only if every new sentence could sit next to the position without contradicting it." },
        ],
      },
    ] as Block[],
  },
  fr: {
    badge: "Extrait d'audit · la méthode sur nous-mêmes",
    h1: "Strawberry, audité par Strawberry.",
    lead: "Plutôt que les chiffres de quelqu'un d'autre, voici la méthode appliquée à la marque la plus difficile à voir clairement — la nôtre. C'est une lecture abrégée : la forme de ce que livre une commande, appliquée à Strawberry Production.",
    ctaLead: "Voilà la forme du travail — en abrégé. La commande complète l'applique à ",
    ctaLeadAccent: "ta",
    ctaLeadEnd: " marque.",
    cta: "Voir Brand Narrative Architecture — 4 500€",
    blocks: [
      {
        kicker: "Diagnostic de différenciation",
        title: "Le champ, et là où tout se ressemble",
        paras: [
          { text: "Le champ des studios narratifs se presse autour des mêmes quatre mots : storytelling, identité, marque, stratégie. Tout le monde promet « une histoire qui sort du lot » et livre un logo, un moodboard, une tagline. La catégorie a entraîné les fondateurs à attendre de la décoration — du coup une offre de positionnement est comparée à un livrable de design, et mal valorisée en conséquence." },
          { text: "Le terrain libre que personne n'occupe : traiter le récit de la marque comme une architecture — une structure porteuse, pas une surface — et refuser la seule chose sur laquelle tout le champ s'appuie : un travail qu'une machine sait désormais générer. Ce refus est le territoire." },
        ],
      },
      {
        kicker: "Plateforme narrative",
        title: "La position, en une phrase défendable",
        paras: [
          { b: "Strawberry bâtit la part d'une marque qui ne peut pas être générée :", text: " l'architecture narrative qu'un fondateur est trop proche pour voir, et dont une machine n'a aucune vérité à écrire." },
          { text: "Le combat : contre l'uniformité, et contre l'effet d'aplatissement de l'IA sur le langage de marque. La vision : un marché où être reconnaissable au premier regard est la dernière vraie douve." },
        ],
      },
      {
        kicker: "Piliers de message",
        title: "Les trois idées qu'on martèle",
        paras: [
          { b: "1. Impossible à confondre.", text: " La différenciation n'est pas un style ; c'est une position structurelle que les concurrents ne peuvent pas occuper." },
          { b: "2. Impossible à générer.", text: " L'extraction au cœur du travail — ta vérité, ta singularité — est le seul input qu'aucun modèle ne possède." },
          { b: "3. Exploitable dès le lundi suivant.", text: " Une architecture que tu déploies, pas un manifeste que tu encadres." },
        ],
      },
      {
        kicker: "Système de langage",
        title: "Les mots qui sont les nôtres — et ceux qu'on refuse",
        paras: [
          { b: "Les nôtres :", text: " architecture, extraction, singularité, position, reconnaissable, commande, déployer." },
          { b: "Interdits", text: " (parce que le champ en est saturé) : storytelling, disruptif, authentique, voyage, ADN, élever, libérer. Chaque fois qu'on attrape un mot saturé, on sonne comme ceux dont on essaie de ne pas sonner." },
        ],
      },
      {
        kicker: "Ton",
        title: "L'effet que ça doit faire de nous lire",
        paras: [
          { text: "Déclaratif, pas persuasif. Des phrases courtes qui tombent comme des verdicts. De l'assurance sans adjectifs — la certitude vient de la structure de l'affirmation, pas des intensificateurs. On énonce ; on ne vend pas." },
        ],
      },
      {
        kicker: "Avant / Après",
        title: "La même idée, mal dite puis bien dite",
        paras: [
          { b: "Avant :", text: " « On aide les marques à raconter leur histoire authentique et à se démarquer avec une identité disruptive. »", muted: true },
          { b: "Après :", text: " « On bâtit l'architecture narrative qui te rend impossible à confondre — et impossible à générer. »", accent: true },
        ],
      },
      {
        kicker: "Kit de déploiement",
        title: "Là où ça se met au travail en premier",
        paras: [
          { text: "La ligne du hero du site, la première ligne de chaque email à froid, l'objet qu'un prospect lit avant tout le reste, et la page sur laquelle atterrit une réponse chaude. Un positionnement qui ne touche jamais ces quatre surfaces reste théorique." },
        ],
      },
      {
        kicker: "Guide de cohérence",
        title: "Le test de chaque décision future",
        paras: [
          { text: "Avant de publier quoi que ce soit, une question : " },
          { b: "un concurrent pourrait-il dire ça aussi ?", text: " Si oui, ce n'est pas encore à nous. L'architecture ne tient que si chaque nouvelle phrase peut se poser à côté de la position sans la contredire." },
        ],
      },
    ] as Block[],
  },
  es: {
    badge: "Muestra de auditoría · el método sobre nosotros mismos",
    h1: "Strawberry, auditado por Strawberry.",
    lead: "En lugar de las cifras de otro, aquí está el método aplicado a la marca más difícil de ver con claridad — la nuestra. Es una lectura abreviada: la forma de lo que entrega un encargo, aplicada a Strawberry Production.",
    ctaLead: "Esta es la forma del trabajo — abreviada. El encargo completo lo aplica a ",
    ctaLeadAccent: "tu",
    ctaLeadEnd: " marca.",
    cta: "Ver Brand Narrative Architecture — 4.500€",
    blocks: [
      {
        kicker: "Diagnóstico de diferenciación",
        title: "El campo, y dónde todo suena igual",
        paras: [
          { text: "El campo de los estudios narrativos se apiña alrededor de las mismas cuatro palabras: storytelling, identidad, marca, estrategia. Todos prometen «una historia que destaca» y entregan un logo, un moodboard, una tagline. La categoría ha entrenado a los fundadores a esperar decoración — así que una oferta de posicionamiento se compara con un entregable de diseño, y se valora mal en consecuencia." },
          { text: "El terreno libre que nadie ocupa: tratar el relato de la marca como una arquitectura — una estructura portante, no una superficie — y rechazar lo único en lo que todo el campo se apoya: un trabajo que una máquina ya sabe generar. Ese rechazo es el territorio." },
        ],
      },
      {
        kicker: "Plataforma narrativa",
        title: "La posición, en una frase defendible",
        paras: [
          { b: "Strawberry construye la parte de una marca que no puede generarse:", text: " la arquitectura narrativa que un fundador está demasiado cerca para ver, y de la que una máquina no tiene ninguna verdad que escribir." },
          { text: "La lucha: contra la uniformidad, y contra el efecto aplanador de la IA sobre el lenguaje de marca. La visión: un mercado donde ser reconocible a primera vista es el último foso real." },
        ],
      },
      {
        kicker: "Pilares de mensaje",
        title: "Las tres ideas que martillamos",
        paras: [
          { b: "1. Imposible de confundir.", text: " La diferenciación no es un estilo; es una posición estructural que los competidores no pueden ocupar." },
          { b: "2. Imposible de generar.", text: " La extracción en el centro del trabajo — tu verdad, tu singularidad — es el único input que ningún modelo posee." },
          { b: "3. Utilizable el lunes siguiente.", text: " Una arquitectura que despliegas, no un manifiesto que enmarcas." },
        ],
      },
      {
        kicker: "Sistema de lenguaje",
        title: "Las palabras que son nuestras — y las que rechazamos",
        paras: [
          { b: "Nuestras:", text: " arquitectura, extracción, singularidad, posición, reconocible, encargo, desplegar." },
          { b: "Prohibidas", text: " (porque el campo está saturado de ellas): storytelling, disruptivo, auténtico, viaje, ADN, elevar, liberar. Cada vez que echamos mano de una palabra saturada, sonamos como aquellos a quienes intentamos no parecernos." },
        ],
      },
      {
        kicker: "Tono",
        title: "Cómo debe sentirse leernos",
        paras: [
          { text: "Declarativo, no persuasivo. Frases cortas que caen como veredictos. Confianza sin adjetivos — la certeza viene de la estructura de la afirmación, no de los intensificadores. Enunciamos; no vendemos." },
        ],
      },
      {
        kicker: "Antes / Después",
        title: "La misma idea, mal dicha y luego bien dicha",
        paras: [
          { b: "Antes:", text: " «Ayudamos a las marcas a contar su historia auténtica y a destacar con una identidad disruptiva.»", muted: true },
          { b: "Después:", text: " «Construimos la arquitectura narrativa que te hace imposible de confundir — e imposible de generar.»", accent: true },
        ],
      },
      {
        kicker: "Kit de despliegue",
        title: "Dónde se pone a trabajar primero",
        paras: [
          { text: "La línea del hero del sitio, la primera línea de cada email en frío, el asunto que un prospecto lee antes que nada, y la página en la que aterriza una respuesta cálida. Un posicionamiento que nunca toca estas cuatro superficies se queda en teoría." },
        ],
      },
      {
        kicker: "Guía de coherencia",
        title: "La prueba para cada decisión futura",
        paras: [
          { text: "Antes de publicar cualquier cosa, una pregunta: " },
          { b: "¿podría un competidor decir esto también?", text: " Si la respuesta es sí, aún no es nuestro. La arquitectura se sostiene solo si cada nueva frase puede colocarse junto a la posición sin contradecirla." },
        ],
      },
    ] as Block[],
  },
}

const Section = ({ n, kicker, title, children }: { n: string; kicker: string; title: string; children: React.ReactNode }) => (
  <section style={{ padding: "clamp(2.5rem,5vw,4rem) 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 10 }}>
      <span style={{ fontFamily: SERIF, fontSize: 28, fontWeight: 700, color: COLOR }}>{n}</span>
      <span style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>{kicker}</span>
    </div>
    <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.5rem,3vw,2.15rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>{title}</h2>
    <div style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.72)" }}>{children}</div>
  </section>
)

export default function SampleAuditPage() {
  const t = useT(T)
  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>
      <NavBar />

      {/* HERO */}
      <section style={{ padding: "160px clamp(1.5rem,4vw,4rem) 60px", position: "relative", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 0%, ${GLOW} 0%, transparent 60%)`, opacity: 0.28, pointerEvents: "none" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>{t.badge}</div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.1rem,5.5vw,3.75rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 24 }}>{t.h1}</h1>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.15rem)", color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>{t.lead}</p>
        </div>
      </section>

      {/* DOCUMENT */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 clamp(1.5rem,4vw,4rem) 40px" }}>
        {t.blocks.map((block, bi) => (
          <Section key={block.kicker} n={`0${bi + 1}`} kicker={block.kicker} title={block.title}>
            {block.paras.map((p, pi) => (
              <p key={pi} style={{ marginBottom: 16, color: p.muted ? "rgba(255,255,255,0.45)" : undefined }}>
                {p.b && <strong style={{ color: p.accent ? COLOR : "#fff" }}>{p.b}</strong>}
                {p.text}
              </p>
            ))}
          </Section>
        ))}
      </div>

      {/* CTA */}
      <section style={{ padding: "70px clamp(1.5rem,4vw,4rem) 110px", borderTop: "1px solid rgba(255,255,255,0.08)", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.3rem,2.5vw,1.85rem)", fontWeight: 700, lineHeight: 1.3, letterSpacing: "-0.02em", marginBottom: 24 }}>
            {t.ctaLead}<span style={{ color: COLOR }}>{t.ctaLeadAccent}</span>{t.ctaLeadEnd}
          </p>
          <Link href="/brand-narrative-audit" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "15px 36px", borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
            {t.cta}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
