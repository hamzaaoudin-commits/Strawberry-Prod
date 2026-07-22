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

export type Manifesto = { n: string; title: string; verb: Record<Lang, string>; href: string }

/** Les neuf manifestes. Chiffre romain et verbe — pas de diagramme. */
export const MANIFESTOS: Manifesto[] = [
  { n: "I", title: "Neuro-Cinéma", verb: { fr: "Se souvenir", en: "To be remembered", es: "Ser recordado" }, href: "/manifesto" },
  { n: "II", title: "La Doctrine de la Tribu", verb: { fr: "Être suivi", en: "To be followed", es: "Ser seguido" }, href: "/manifesto" },
  { n: "III", title: "L'Empire éditorial", verb: { fr: "Demeurer", en: "To remain", es: "Permanecer" }, href: "/manifesto" },
  { n: "IV", title: "Le Codex du fondateur", verb: { fr: "Être irremplaçable", en: "To be irreplaceable", es: "Ser irreemplazable" }, href: "/manifesto" },
  { n: "V", title: "Le Manifeste du Refus", verb: { fr: "Refuser", en: "To refuse", es: "Rechazar" }, href: "/manifesto" },
  { n: "VI", title: "La Constitution esthétique", verb: { fr: "Distinguer", en: "To distinguish", es: "Distinguir" }, href: "/manifesto" },
  { n: "VII", title: "Le Moteur de rareté", verb: { fr: "Devenir rare", en: "To become rare", es: "Volverse raro" }, href: "/manifesto" },
  { n: "VIII", title: "La Doctrine de la patience", verb: { fr: "Durer", en: "To outlast", es: "Perdurar" }, href: "/manifesto" },
  { n: "IX", title: "Le Codex de la dévotion", verb: { fr: "Être choisi", en: "To be chosen", es: "Ser elegido" }, href: "/manifesto" },
]

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
