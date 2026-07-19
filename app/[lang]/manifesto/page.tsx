import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { pick } from "@/lib/t"
import { isLang, type Lang } from "@/lib/lang"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.4)"

const HREFS = [
  "/manifesto-reader.html",
  "/manifesto-vol-2.html",
  "/manifesto-vol-3.html",
  "/Vol_IV_The_Founder_Codex.html",
  "/Vol_V_The_Refusal_Manifesto.html",
  "/Vol_VI_The_Aesthetic_Constitution.html",
  "/Vol_VII_The_Rarity_Engine.html",
  "/Vol_VIII_The_Patience_Doctrine.html",
  "/Vol_IX_The_Devotion_Codex.html",
]
const NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]

const T = {
  en: {
    badge: "NINE VOLUMES · ONE DOCTRINE",
    h1a: "The Strawberry",
    h1b: "Manifestos.",
    lead: "Nine manifestos. One doctrine. A complete blueprint for brands that refuse to disappear in the AI decade. Open, free, readable in your browser.",
    verbLabel: "The verb:",
    readVol: "Read Vol.",
    ctaH2: "When you're ready to build.",
    ctaP: "The manifestos lay out the doctrine. The commission makes it real.",
    cta: "See the Commission →",
    volumes: [
      { title: "Neuro-Cinema Manifesto", verb: "Remember.", tagline: "How elite brands build unforgettable identity when everyone else sounds like a machine. The architecture of narrative immunity." },
      { title: "The Tribe Doctrine", verb: "Be followed.", tagline: "Why rewriting your company's narrative is the only way to survive the AI wave. And how to build a tribe that won't disappear with it." },
      { title: "The Editorial Empire", verb: "Remain.", tagline: "Why every serious brand will become a media house — or be erased by the ones that did. The infrastructure of narrative power." },
      { title: "The Founder Codex", verb: "Be irreplaceable.", tagline: "The personal doctrine of founders who refuse to be genericized. How to build a presence that survives any market shift." },
      { title: "The Refusal Manifesto", verb: "Refuse.", tagline: "A declaration of what this studio will never do, never say, and never become. The architecture of selective practice." },
      { title: "The Aesthetic Constitution", verb: "Distinguish.", tagline: "Why aesthetic coherence is the last competitive advantage AI cannot replicate. The doctrine of visual and verbal singularity." },
      { title: "The Rarity Engine", verb: "Become scarce.", tagline: "How deliberate scarcity becomes the most powerful positioning tool available to a founder. The mechanics of desirable refusal." },
      { title: "The Patience Doctrine", verb: "Outlast.", tagline: "Why the founders who win are the ones who refuse to be rushed. The architecture of long-game positioning in an impatient market." },
      { title: "The Devotion Codex", verb: "Be chosen.", tagline: "How the most enduring houses build not an audience but a devotion. The doctrine of depth over reach." },
    ],
  },
  fr: {
    badge: "NEUF VOLUMES · UNE DOCTRINE",
    h1a: "Les Manifestes",
    h1b: "Strawberry.",
    lead: "Neuf manifestes. Une doctrine. Un plan complet pour les marques qui refusent de disparaître dans la décennie de l'IA. Ouverts, gratuits, lisibles dans votre navigateur.",
    verbLabel: "Le verbe :",
    readVol: "Lire le Vol.",
    ctaH2: "Quand vous êtes prêt à bâtir.",
    ctaP: "Les manifestes posent la doctrine. La commande la rend réelle.",
    cta: "Voir la commande →",
    volumes: [
      { title: "Manifeste Neuro-Cinéma", verb: "Se souvenir.", tagline: "Comment les marques d'élite bâtissent une identité inoubliable quand tout le monde sonne comme une machine. L'architecture de l'immunité narrative." },
      { title: "La Doctrine de la Tribu", verb: "Être suivi.", tagline: "Pourquoi réécrire le récit de votre entreprise est le seul moyen de survivre à la vague IA. Et comment bâtir une tribu qui ne disparaîtra pas avec elle." },
      { title: "L'Empire Éditorial", verb: "Demeurer.", tagline: "Pourquoi toute marque sérieuse deviendra une maison de média — ou sera effacée par celles qui l'ont fait. L'infrastructure du pouvoir narratif." },
      { title: "Le Codex du Fondateur", verb: "Être irremplaçable.", tagline: "La doctrine personnelle des fondateurs qui refusent d'être génériques. Comment bâtir une présence qui survit à tout retournement de marché." },
      { title: "Le Manifeste du Refus", verb: "Refuser.", tagline: "Une déclaration de ce que ce studio ne fera jamais, ne dira jamais, et ne deviendra jamais. L'architecture d'une pratique sélective." },
      { title: "La Constitution Esthétique", verb: "Distinguer.", tagline: "Pourquoi la cohérence esthétique est le dernier avantage compétitif que l'IA ne peut répliquer. La doctrine de la singularité visuelle et verbale." },
      { title: "Le Moteur de Rareté", verb: "Devenir rare.", tagline: "Comment la rareté délibérée devient l'outil de positionnement le plus puissant à disposition d'un fondateur. La mécanique du refus désirable." },
      { title: "La Doctrine de la Patience", verb: "Durer plus longtemps.", tagline: "Pourquoi les fondateurs qui gagnent sont ceux qui refusent d'être pressés. L'architecture du positionnement long terme dans un marché impatient." },
      { title: "Le Codex de la Dévotion", verb: "Être choisi.", tagline: "Comment les maisons les plus durables bâtissent non pas une audience mais une dévotion. La doctrine de la profondeur avant la portée." },
    ],
  },
  es: {
    badge: "NUEVE VOLÚMENES · UNA DOCTRINA",
    h1a: "Los Manifiestos",
    h1b: "Strawberry.",
    lead: "Nueve manifiestos. Una doctrina. Un plano completo para las marcas que se niegan a desaparecer en la década de la IA. Abiertos, gratuitos, legibles en su navegador.",
    verbLabel: "El verbo:",
    readVol: "Leer el Vol.",
    ctaH2: "Cuando esté listo para construir.",
    ctaP: "Los manifiestos exponen la doctrina. El encargo la hace real.",
    cta: "Ver el encargo →",
    volumes: [
      { title: "Manifiesto Neuro-Cine", verb: "Recordar.", tagline: "Cómo las marcas de élite construyen una identidad inolvidable cuando todos los demás suenan como una máquina. La arquitectura de la inmunidad narrativa." },
      { title: "La Doctrina de la Tribu", verb: "Ser seguido.", tagline: "Por qué reescribir el relato de su empresa es la única forma de sobrevivir a la ola de la IA. Y cómo construir una tribu que no desaparezca con ella." },
      { title: "El Imperio Editorial", verb: "Permanecer.", tagline: "Por qué toda marca seria se convertirá en una casa de medios — o será borrada por las que lo hicieron. La infraestructura del poder narrativo." },
      { title: "El Códice del Fundador", verb: "Ser irremplazable.", tagline: "La doctrina personal de los fundadores que se niegan a ser genéricos. Cómo construir una presencia que sobrevive a cualquier giro del mercado." },
      { title: "El Manifiesto del Rechazo", verb: "Rechazar.", tagline: "Una declaración de lo que este estudio nunca hará, nunca dirá y nunca será. La arquitectura de una práctica selectiva." },
      { title: "La Constitución Estética", verb: "Distinguir.", tagline: "Por qué la coherencia estética es la última ventaja competitiva que la IA no puede replicar. La doctrina de la singularidad visual y verbal." },
      { title: "El Motor de la Rareza", verb: "Volverse escaso.", tagline: "Cómo la escasez deliberada se convierte en la herramienta de posicionamiento más potente al alcance de un fundador. La mecánica del rechazo deseable." },
      { title: "La Doctrina de la Paciencia", verb: "Perdurar.", tagline: "Por qué los fundadores que ganan son los que se niegan a ser apurados. La arquitectura del posicionamiento a largo plazo en un mercado impaciente." },
      { title: "El Códice de la Devoción", verb: "Ser elegido.", tagline: "Cómo las casas más duraderas construyen no una audiencia sino una devoción. La doctrina de la profundidad por encima del alcance." },
    ],
  },
}

export default async function ManifestoPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "fr"
  const t = pick(T, lang)
  const VOLUMES = t.volumes.map((v, i) => ({ ...v, n: NUMERALS[i], code: `N\u00b0 00${i + 1}`, href: HREFS[i] }))
  return (
    <main className="min-h-screen" style={{ background: "#0a0a0a", color: "#fff" }}>
      <NavBar />

      {/* HERO */}
      <section style={{ padding: "160px clamp(1.5rem,4vw,4rem) 60px", position: "relative", overflow: "hidden", textAlign: "center" }}>
        <div aria-hidden style={{ position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", width: 1000, height: 1000, background: "radial-gradient(circle," + COLOR + ",transparent 70%)", opacity: 0.1, filter: "blur(100px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-block", background: COLOR + "1a", border: "1px solid " + COLOR + "44", color: COLOR, fontSize: 11, fontFamily: SANS, fontWeight: 700, padding: "6px 18px", borderRadius: 100, letterSpacing: "0.14em", marginBottom: 32 }}>
            {t.badge}
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.8rem, 7vw, 5.6rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 28 }}>
            {t.h1a}<br />
            <span style={{ background: "linear-gradient(135deg," + COLOR + ",#ff1a1a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{t.h1b}</span>
          </h1>
          <p style={{ fontFamily: SANS, fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", maxWidth: 680, margin: "0 auto" }}>
            {t.lead}
          </p>
        </div>
      </section>

      {/* NINE VOLUMES */}
      <section style={{ padding: "20px clamp(1.5rem,4vw,4rem) 120px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: 22 }}>
            {VOLUMES.map((v) => (
              <article key={v.n} style={{ position: "relative", background: "linear-gradient(160deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))", border: "1px solid " + COLOR + "22", borderRadius: 24, padding: "36px 32px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div aria-hidden style={{ position: "absolute", top: "-40%", right: "-30%", width: 280, height: 280, background: "radial-gradient(circle," + COLOR + ",transparent 70%)", opacity: 0.08, filter: "blur(60px)", pointerEvents: "none" }} />
                <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18 }}>
                    <div style={{ fontFamily: SERIF, fontSize: 56, color: COLOR, fontWeight: 700, fontStyle: "italic", letterSpacing: "0.02em", lineHeight: 0.9 }}>
                      {v.n}.
                    </div>
                    <div style={{ fontFamily: SANS, fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.16em", fontWeight: 600 }}>
                      {v.code}
                    </div>
                  </div>
                  <h3 style={{ fontFamily: SERIF, fontSize: 26, fontWeight: 700, marginBottom: 8, color: "#fff", lineHeight: 1.15 }}>
                    {v.title}
                  </h3>
                  <div style={{ fontFamily: SERIF, fontSize: 17, color: COLOR, fontStyle: "italic", marginBottom: 18, fontWeight: 500 }}>
                    {t.verbLabel} <span style={{ color: "#fff" }}>{v.verb}</span>
                  </div>
                  <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", marginBottom: 28, flex: 1 }}>
                    {v.tagline}
                  </p>
                  <a href={v.href} target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", background: "rgba(255,255,255,0.05)", border: "1px solid " + COLOR + "55", color: "#fff", padding: "14px 24px", borderRadius: 100, fontFamily: SANS, fontSize: 13, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em" }}>
                    {t.readVol} {v.n} &rarr;
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "60px clamp(1.5rem,4vw,4rem) 140px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>
            {t.ctaH2}
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 32 }}>
            {t.ctaP}
          </p>
          <Link href="/brand-narrative-audit" style={{ display: "inline-block", background: "linear-gradient(135deg," + COLOR + ",#ff1a1a)", color: "#fff", padding: "16px 36px", borderRadius: 100, fontFamily: SANS, fontSize: 14, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em", boxShadow: "0 12px 36px " + GLOW }}>
            {t.cta}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
