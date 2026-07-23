import type { Motif } from "@/lib/radar-reads"
import type { Lang } from "@/lib/lang"

/**
 * Couvertures.
 *
 * Aucune image de marque : reprendre les visuels de Sézane ou de Diptyque
 * exposerait au droit des marques et transformerait RADAR en agrégateur.
 * Chaque couverture est un signe abstrait qui traduit le type de contradiction
 * relevée dans la fiche — la grille se lit donc avant d'être ouverte.
 */
export function CoverMotif({ motif }: { motif: Motif }) {
  const s = "#e63946"
  switch (motif) {
    case "drift":
      return (
        <>
          <circle cx="38" cy="56" r="25" fill="none" stroke={s} strokeWidth="1.1" opacity="0.85" />
          <circle cx="62" cy="56" r="25" fill="none" stroke={s} strokeWidth="1.1" opacity="0.4" />
          <circle cx="50" cy="56" r="2.3" fill={s} />
        </>
      )
    case "signal":
      return (
        <>
          <path d="M20 76 L38 50 L52 64 L66 38 L82 56" fill="none" stroke={s} strokeWidth="1.3" />
          <line x1="20" y1="86" x2="82" y2="86" stroke={s} strokeWidth="0.7" opacity="0.35" />
        </>
      )
    case "dissolve":
      return (
        <g fill={s}>
          {[42, 58, 74].map((y, r) =>
            [30, 46, 62].map((x, c) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="1.8" opacity={1 - (r + c) * 0.17} />
            ))
          )}
        </g>
      )
    case "nested":
      return (
        <>
          <rect x="30" y="36" width="40" height="40" fill="none" stroke={s} strokeWidth="1.1" />
          <rect x="37" y="43" width="26" height="26" fill="none" stroke={s} strokeWidth="0.9" opacity="0.6" />
          <rect x="44" y="50" width="12" height="12" fill="none" stroke={s} strokeWidth="0.8" opacity="0.35" />
        </>
      )
    case "shrink":
      return (
        <>
          <line x1="24" y1="38" x2="76" y2="38" stroke={s} strokeWidth="1.2" />
          <line x1="24" y1="52" x2="62" y2="52" stroke={s} strokeWidth="1.2" opacity="0.7" />
          <line x1="24" y1="66" x2="48" y2="66" stroke={s} strokeWidth="1.2" opacity="0.45" />
          <line x1="24" y1="80" x2="34" y2="80" stroke={s} strokeWidth="1.2" opacity="0.22" />
        </>
      )
    case "ceiling":
      return (
        <>
          <path d="M28 72 L50 38 L72 72" fill="none" stroke={s} strokeWidth="1.2" />
          <line x1="28" y1="72" x2="72" y2="72" stroke={s} strokeWidth="0.8" opacity="0.4" />
        </>
      )
    case "refusal":
      return (
        <>
          <path d="M32 42 L68 74 M68 42 L32 74" stroke={s} strokeWidth="1.2" />
          <circle cx="50" cy="58" r="26" fill="none" stroke={s} strokeWidth="0.7" opacity="0.3" />
        </>
      )
    case "split":
      return (
        <>
          <rect x="26" y="40" width="19" height="32" fill="none" stroke={s} strokeWidth="1" />
          <rect x="55" y="40" width="19" height="32" fill="none" stroke={s} strokeWidth="1" opacity="0.45" />
        </>
      )
    case "two":
      return (
        <>
          <line x1="36" y1="36" x2="36" y2="80" stroke={s} strokeWidth="1.2" />
          <line x1="64" y1="36" x2="64" y2="80" stroke={s} strokeWidth="1.2" opacity="0.45" />
          <line x1="36" y1="58" x2="64" y2="58" stroke={s} strokeWidth="0.7" opacity="0.35" />
        </>
      )
    case "word":
      return (
        <>
          <line x1="30" y1="44" x2="70" y2="44" stroke={s} strokeWidth="1.1" />
          <line x1="30" y1="56" x2="70" y2="56" stroke={s} strokeWidth="1.1" opacity="0.55" />
          <line x1="30" y1="68" x2="70" y2="68" stroke={s} strokeWidth="1.1" opacity="0.25" />
          <line x1="26" y1="38" x2="74" y2="74" stroke={s} strokeWidth="0.9" />
        </>
      )
  }
}

/* ------------------------------------------------------------------------ */

export type Manifesto = {
  n: string
  slug: string
  title: Record<Lang, string>
  verb: Record<Lang, string>
  tagline: Record<Lang, string>
}

/**
 * Les neuf manifestes.
 *
 * Ils vivaient sur une page publique gratuite ; ils sont désormais dans
 * l'abonnement. C'est ce qui donne son épaisseur à RADAR — un abonné n'achète
 * pas seulement une fiche par jour, il achète la doctrine du studio.
 */
export const MANIFESTOS: Manifesto[] = [
  {
    n: "I",
    slug: "neuro-cinema",
    title: { fr: "Manifeste Neuro-Cinéma", en: "Neuro-Cinema Manifesto", es: "Manifiesto Neuro-Cine" },
    verb: { fr: "Se souvenir.", en: "Remember.", es: "Recordar." },
    tagline: { fr: "Comment les marques d'élite bâtissent une identité inoubliable quand tout le monde sonne comme une machine. L'architecture de l'immunité narrative.", en: "How elite brands build unforgettable identity when everyone else sounds like a machine. The architecture of narrative immunity.", es: "Cómo las marcas de élite construyen una identidad inolvidable cuando todos los demás suenan como una máquina. La arquitectura de la inmunidad narrativa." },
  },
  {
    n: "II",
    slug: "tribu",
    title: { fr: "La Doctrine de la Tribu", en: "The Tribe Doctrine", es: "La Doctrina de la Tribu" },
    verb: { fr: "Être suivi.", en: "Be followed.", es: "Ser seguido." },
    tagline: { fr: "Pourquoi réécrire le récit de votre entreprise est le seul moyen de survivre à la vague IA. Et comment bâtir une tribu qui ne disparaîtra pas avec elle.", en: "Why rewriting your company's narrative is the only way to survive the AI wave. And how to build a tribe that won't disappear with it.", es: "Por qué reescribir el relato de su empresa es la única forma de sobrevivir a la ola de la IA. Y cómo construir una tribu que no desaparezca con ella." },
  },
  {
    n: "III",
    slug: "empire-editorial",
    title: { fr: "L'Empire Éditorial", en: "The Editorial Empire", es: "El Imperio Editorial" },
    verb: { fr: "Demeurer.", en: "Remain.", es: "Permanecer." },
    tagline: { fr: "Pourquoi toute marque sérieuse deviendra une maison de média — ou sera effacée par celles qui l'ont fait. L'infrastructure du pouvoir narratif.", en: "Why every serious brand will become a media house — or be erased by the ones that did. The infrastructure of narrative power.", es: "Por qué toda marca seria se convertirá en una casa de medios — o será borrada por las que lo hicieron. La infraestructura del poder narrativo." },
  },
  {
    n: "IV",
    slug: "codex-fondateur",
    title: { fr: "Le Codex du Fondateur", en: "The Founder Codex", es: "El Códice del Fundador" },
    verb: { fr: "Être irremplaçable.", en: "Be irreplaceable.", es: "Ser irremplazable." },
    tagline: { fr: "La doctrine personnelle des fondateurs qui refusent d'être génériques. Comment bâtir une présence qui survit à tout retournement de marché.", en: "The personal doctrine of founders who refuse to be genericized. How to build a presence that survives any market shift.", es: "La doctrina personal de los fundadores que se niegan a ser genéricos. Cómo construir una presencia que sobrevive a cualquier giro del mercado." },
  },
  {
    n: "V",
    slug: "refus",
    title: { fr: "Le Manifeste du Refus", en: "The Refusal Manifesto", es: "El Manifiesto del Rechazo" },
    verb: { fr: "Refuser.", en: "Refuse.", es: "Rechazar." },
    tagline: { fr: "Une déclaration de ce que ce studio ne fera jamais, ne dira jamais, et ne deviendra jamais. L'architecture d'une pratique sélective.", en: "A declaration of what this studio will never do, never say, and never become. The architecture of selective practice.", es: "Una declaración de lo que este estudio nunca hará, nunca dirá y nunca será. La arquitectura de una práctica selectiva." },
  },
  {
    n: "VI",
    slug: "constitution-esthetique",
    title: { fr: "La Constitution Esthétique", en: "The Aesthetic Constitution", es: "La Constitución Estética" },
    verb: { fr: "Distinguer.", en: "Distinguish.", es: "Distinguir." },
    tagline: { fr: "Pourquoi la cohérence esthétique est le dernier avantage compétitif que l'IA ne peut répliquer. La doctrine de la singularité visuelle et verbale.", en: "Why aesthetic coherence is the last competitive advantage AI cannot replicate. The doctrine of visual and verbal singularity.", es: "Por qué la coherencia estética es la última ventaja competitiva que la IA no puede replicar. La doctrina de la singularidad visual y verbal." },
  },
  {
    n: "VII",
    slug: "rarete",
    title: { fr: "Le Moteur de Rareté", en: "The Rarity Engine", es: "El Motor de la Rareza" },
    verb: { fr: "Devenir rare.", en: "Become scarce.", es: "Volverse escaso." },
    tagline: { fr: "Comment la rareté délibérée devient l'outil de positionnement le plus puissant à disposition d'un fondateur. La mécanique du refus désirable.", en: "How deliberate scarcity becomes the most powerful positioning tool available to a founder. The mechanics of desirable refusal.", es: "Cómo la escasez deliberada se convierte en la herramienta de posicionamiento más potente al alcance de un fundador. La mecánica del rechazo deseable." },
  },
  {
    n: "VIII",
    slug: "patience",
    title: { fr: "La Doctrine de la Patience", en: "The Patience Doctrine", es: "La Doctrina de la Paciencia" },
    verb: { fr: "Durer plus longtemps.", en: "Outlast.", es: "Perdurar." },
    tagline: { fr: "Pourquoi les fondateurs qui gagnent sont ceux qui refusent d'être pressés. L'architecture du positionnement long terme dans un marché impatient.", en: "Why the founders who win are the ones who refuse to be rushed. The architecture of long-game positioning in an impatient market.", es: "Por qué los fundadores que ganan son los que se niegan a ser apurados. La arquitectura del posicionamiento a largo plazo en un mercado impaciente." },
  },
  {
    n: "IX",
    slug: "devotion",
    title: { fr: "Le Codex de la Dévotion", en: "The Devotion Codex", es: "El Códice de la Devoción" },
    verb: { fr: "Être choisi.", en: "Be chosen.", es: "Ser elegido." },
    tagline: { fr: "Comment les maisons les plus durables bâtissent non pas une audience mais une dévotion. La doctrine de la profondeur avant la portée.", en: "How the most enduring houses build not an audience but a devotion. The doctrine of depth over reach.", es: "Cómo las casas más duraderas construyen no una audiencia sino una devoción. La doctrina de la profundidad por encima del alcance." },
  },
]

export function getManifesto(slug: string): Manifesto | undefined {
  return MANIFESTOS.find((m) => m.slug === slug)
}

export type Lesson = { n: string; title: Record<Lang, string>; minutes: number; motif: Motif; href: string }

/** Les leçons : la méthode découpée en pièces. */
export const LESSONS: Lesson[] = [
  { n: "01", title: { fr: "Le test de la phrase", en: "The sentence test", es: "La prueba de la frase" }, minutes: 6, motif: "two", href: "/strawberry-method" },
  { n: "02", title: { fr: "La classe de référence", en: "The reference class", es: "La clase de referencia" }, minutes: 8, motif: "split", href: "/strawberry-method" },
  { n: "03", title: { fr: "Les mots interdits", en: "The forbidden words", es: "Las palabras prohibidas" }, minutes: 5, motif: "word", href: "/strawberry-method" },
  { n: "04", title: { fr: "L'extraction", en: "The extraction", es: "La extracción" }, minutes: 9, motif: "shrink", href: "/strawberry-method" },
  { n: "05", title: { fr: "Le refus comme position", en: "Refusal as position", es: "El rechazo como posición" }, minutes: 7, motif: "refusal", href: "/strawberry-method" },
]

export type Application = {
  key: string
  title: Record<Lang, string>
  body: Record<Lang, string>
  cta: Record<Lang, string>
  /** Aucune n'est encore construite : la carte le dit plutôt que de mener nulle part. */
  ready: boolean
}

export const APPLICATIONS: Application[] = [
  {
    key: "training",
    ready: false,
    title: { fr: "L'entraînement du jour", en: "Today's exercise", es: "El entrenamiento del día" },
    body: {
      fr: "Une phrase de positionnement réelle, sans le nom. Trois questions. La réponse ensuite.",
      en: "A real positioning sentence, without the name. Three questions. The answer after.",
      es: "Una frase de posicionamiento real, sin el nombre. Tres preguntas. La respuesta después.",
    },
    cta: { fr: "Commencer", en: "Start", es: "Empezar" },
  },
  {
    key: "corpus",
    ready: false,
    title: { fr: "La bibliothèque des phrases", en: "The sentence library", es: "La biblioteca de frases" },
    body: {
      fr: "Les positionnements réels, cherchables par secteur et par mot revendiqué.",
      en: "Real positioning sentences, searchable by sector and by claimed word.",
      es: "Posicionamientos reales, buscables por sector y por palabra reivindicada.",
    },
    cta: { fr: "Explorer", en: "Explore", es: "Explorar" },
  },
  {
    key: "watch",
    ready: false,
    title: { fr: "Le carnet de veille", en: "The watch list", es: "El cuaderno de vigilancia" },
    body: {
      fr: "Vos concurrents sous surveillance. Alerte quand leur phrase d'accueil change.",
      en: "Your competitors watched. An alert when their homepage sentence changes.",
      es: "Sus competidores vigilados. Alerta cuando cambia su frase de inicio.",
    },
    cta: { fr: "Configurer", en: "Set up", es: "Configurar" },
  },
]
