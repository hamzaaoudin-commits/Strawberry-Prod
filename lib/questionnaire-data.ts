/**
 * Question bank for the client onboarding questionnaire.
 *
 * One shared list drives both offers: each question declares which offer(s)
 * include it via `offers`. Audit gets the factual/diagnostic + choice
 * questions only (per its own sales page: "no deep extraction"). Architecture
 * gets everything, including the narrative extraction and its optional
 * "dig deeper" follow-ups.
 *
 * This file has no "use client" — it's plain data, safe to import from a
 * server component (for prefill/labels) or the client flow.
 */

export type OfferKey = "audit" | "architecture"

export type QuestionType =
  | "identity"
  | "textarea"
  | "shorttext"
  | "competitors"
  | "links"
  | "choice"
  | "sliders"
  | "wordbank"

export interface SliderAxis {
  id: string
  l: string
  r: string
}

export interface Question {
  id: string
  offers: OfferKey[]
  type: QuestionType
  label: string
  help?: string
  ph?: string
  tag?: string
  optional?: boolean
  /** Optional follow-up prompt, revealed on demand for textarea questions. */
  deep?: string
  options?: string[]
  multi?: boolean
  max?: number
  axes?: SliderAxis[]
}

export const ARCHETYPES = [
  "Le Créateur",
  "Le Rebelle",
  "Le Sage",
  "Le Magicien",
  "Le Héros",
  "L'Amoureux",
  "Le Bouffon",
  "Le Gars d'à côté",
  "Le Protecteur",
  "Le Souverain",
  "L'Explorateur",
  "L'Innocent",
] as const

export const WORDS = [
  "rare", "brut", "chirurgical", "chaleureux", "feutré", "radical",
  "discret", "luxueux", "accessible", "provocateur", "apaisant", "audacieux",
  "minutieux", "spontané", "classique", "avant-gardiste", "artisanal",
  "systémique", "intime", "spectaculaire", "sobre", "généreux", "tranchant",
  "ludique",
] as const

export const QUESTIONS: Question[] = [
  { id: "identity", offers: ["audit", "architecture"], type: "identity",
    label: "Votre nom et le nom de la maison.",
    help: "Prérempli quand le lien vient de vous.", tag: "Identité" },

  { id: "positioning", offers: ["audit", "architecture"], type: "textarea",
    label: "Quelle phrase décrit votre maison aujourd'hui ?",
    help: "Celle qui est sur votre accueil ou votre bio LinkedIn. Collez-la telle quelle — y compris la version dont vous n'êtes pas fier.",
    ph: "Nous aidons les fondateurs à...", tag: "Diagnostic" },

  { id: "awareness", offers: ["audit", "architecture"], type: "choice",
    label: "Où en est la plupart de vos acheteurs quand ils vous trouvent ?",
    help: "Le niveau de conscience du marché, au sens de Schwartz.",
    options: [
      "Inconscient du problème",
      "Conscient du problème, pas des solutions",
      "Conscient qu'il existe des solutions, pas de vous",
      "Conscient de vous, pas encore convaincu",
      "Le plus conscient : prêt, cherche juste le bon moment",
    ], tag: "Diagnostic" },

  { id: "maturity", offers: ["audit", "architecture"], type: "choice",
    label: "Comment décririez-vous votre marché aujourd'hui ?",
    options: [
      "Jeune, flou, tout reste à définir",
      "Mature et saturé de génériques",
      "En train de se re-définir (nouvel usage, nouvelle technologie)",
      "Dominé par un ou deux acteurs installés",
    ], tag: "Diagnostic" },

  { id: "competitors", offers: ["audit", "architecture"], type: "competitors",
    label: "Nommez 3 à 5 concurrents directs, et leur phrase.",
    help: "Le texte exact — tiré de leur accueil, leur bio LinkedIn ou leur signature email. Copié-collé, sans analyse de votre part.",
    tag: "Diagnostic" },

  { id: "competitor_edge", offers: ["architecture"], type: "textarea",
    label: "Qu'est-ce qu'un concurrent fait mieux que vous, honnêtement ?",
    help: "Sans ça, le contre-positionnement sonne un peu trop confortable.",
    ph: "Ils sont meilleurs sur...", tag: "Diagnostic" },

  { id: "conviction", offers: ["architecture"], type: "textarea",
    label: "Quelle conviction tenez-vous sur votre secteur que la plupart refuseraient de dire à voix haute ?",
    help: "Pas une mission. Pas un slogan. Ce que vous croyez vraiment — sur votre industrie, votre catégorie, la façon dont les choses se font — et qui mettrait un concurrent mal à l'aise si vous le disiez en dîner.",
    ph: "La conviction que je tiens...",
    deep: "La version que vous n'avez jamais dite publiquement, celle qui vous ferait le plus de tort si on la lisait de travers.",
    tag: "La vérité" },

  { id: "tone", offers: ["audit", "architecture"], type: "sliders",
    label: "Où se situe votre ton, entre ces pôles ?",
    help: "Pas de bonne réponse, juste un instantané honnête.",
    axes: [
      { id: "a1", l: "Formelle", r: "Familière" },
      { id: "a2", l: "Sérieuse", r: "Ludique" },
      { id: "a3", l: "Discrète", r: "Théâtrale" },
      { id: "a4", l: "Classique", r: "Avant-gardiste" },
      { id: "a5", l: "Minimaliste", r: "Maximaliste" },
    ], tag: "Langage" },

  { id: "rupture", offers: ["architecture"], type: "textarea",
    label: "Racontez le moment de rupture.",
    help: "Le jour, la conversation, l'échec ou le refus précis qui a fait exister cette maison. Une date si possible. Pas l'histoire polie que vous racontez aux investisseurs — la vraie.",
    ph: "Le jour où...",
    deep: "Y a-t-il une rupture plus ancienne, avant celle-là, que vous n'aviez jamais reliée à cette histoire jusqu'ici ?",
    tag: "La vérité" },

  { id: "archetype", offers: ["audit", "architecture"], type: "choice", multi: true, max: 2,
    label: "Choisissez un ou deux archétypes qui vous ressemblent.",
    help: "Le répertoire classique du storytelling de marque. Instinctif, pas de calcul.",
    options: [...ARCHETYPES], tag: "Identité & langage" },

  { id: "enemy", offers: ["architecture"], type: "textarea",
    label: "Qui ou qu'est-ce qui est l'ennemi de cette maison ?",
    help: "Pas un concurrent — une façon de penser, une méthode, une habitude que cette maison refuse d'accepter.",
    ph: "Ce contre quoi nous nous tenons...", tag: "La vérité" },

  { id: "decision", offers: ["architecture"], type: "choice",
    label: "Qui décide de l'achat, en face de vous ?",
    options: [
      "Moi seul : je décide et je paie",
      "Un associé ou un conjoint à convaincre",
      "Un comité ou une hiérarchie",
      "Le grand public : une décision individuelle mais nombreuse",
    ], tag: "Audience" },

  { id: "audience", offers: ["architecture"], type: "textarea",
    label: "Décrivez la personne exacte qui devrait vous commander aujourd'hui.",
    help: "Pas une catégorie, une personne. Ce qu'elle a déjà essayé avant vous, ce qui l'a déçue, ce qu'elle ne dirait jamais tout haut à un prestataire.",
    ph: "Elle a déjà essayé...", tag: "Audience" },

  { id: "risk", offers: ["architecture"], type: "choice",
    label: "Si un client se trompe en vous choisissant, le risque est surtout...",
    options: [
      "Financier : perdre de l'argent",
      "Réputationnel : mal paraître",
      "Temporel : perdre du temps, devoir recommencer",
      "Émotionnel : se sentir jugé ou incompris",
      "Faible : l'achat est presque anodin",
    ], tag: "Audience" },

  { id: "repoussoir", offers: ["architecture"], type: "textarea",
    label: "Décrivez un client que vous avez refusé, ou que vous refuseriez.",
    help: "Pourquoi, précisément ?",
    ph: "Le client que je refuserais...", tag: "Audience" },

  { id: "support_scene", offers: ["architecture"], type: "textarea",
    label: "Racontez la dernière fois qu'un client a été déçu ou en colère.",
    help: "Qu'avez-vous répondu ? Le referiez-vous ?",
    ph: "La dernière fois...", tag: "Playbooks" },

  { id: "hr_disqualifier", offers: ["architecture"], type: "textarea",
    label: "Chez quelqu'un que vous embaucheriez, quelle qualité est non-négociable, et laquelle disqualifie immédiatement ?",
    help: "Même avec un CV parfait.",
    ph: "Non-négociable : ... Disqualifiant : ...", tag: "Playbooks" },

  { id: "model", offers: ["architecture"], type: "choice",
    label: "Comment vendez-vous aujourd'hui ?",
    options: ["Paiement unique", "Abonnement", "Sur devis, du sur-mesure", "Un mix des deux"],
    tag: "Business" },

  { id: "content_format", offers: ["architecture"], type: "choice",
    label: "Quel format pouvez-vous tenir dans la durée, sans vous épuiser ?",
    options: ["Écrit long", "Court et visuel", "Vidéo", "Audio", "Je ne sais pas encore"],
    tag: "Playbooks" },

  { id: "traction", offers: ["architecture"], type: "shorttext", optional: true,
    label: "Quel chiffre concret prouve que ça marche déjà ?",
    help: "Clients, mois d'existence, taux de retour, chiffre d'affaires. Un seul suffit.",
    ph: "Ex : 43 clients en 14 mois", tag: "Business" },

  { id: "price", offers: ["architecture"], type: "textarea",
    label: "L'objection qu'on vous oppose le plus souvent avant d'acheter, et ce qui justifierait de doubler votre prix demain.",
    help: "La vraie objection, pas la version qu'on vous fait en étant poli.",
    ph: "On me dit souvent que...", tag: "Business" },

  { id: "forbidden", offers: ["architecture"], type: "textarea",
    label: "Quel sujet, ton ou blague ne franchirez-vous jamais, même si ça faisait vendre ?",
    help: "La limite qui protège la maison, même quand ce n'est pas vous qui écrivez.",
    ph: "Nous ne ferons jamais...", tag: "Langage" },

  { id: "wordbank", offers: ["architecture"], type: "wordbank",
    label: "Vos mots, et ceux qui ne le seront jamais.",
    help: "Cochez dans chaque colonne. Un mot ne peut pas être dans les deux.",
    tag: "Langage" },

  { id: "deploy", offers: ["architecture"], type: "choice",
    label: "Aujourd'hui, où de meilleurs mots changeraient immédiatement votre chiffre d'affaires ?",
    options: [
      "La page d'accueil",
      "Le pitch aux investisseurs ou partenaires",
      "La prospection à froid",
      "Les réseaux sociaux",
      "Les rendez-vous de vente en direct",
    ], tag: "Déploiement" },

  { id: "portrait_house", offers: ["architecture"], type: "textarea",
    label: "Si cette maison était une personne, décrivez-la.",
    help: "Sa posture, sa façon de parler, l'endroit où elle se sentirait chez elle. Soyez précis — les réponses vagues produisent des maisons vagues.",
    ph: "Elle porterait...",
    deep: "Et ce qui la trahirait immédiatement comme n'étant PAS elle : le lieu, le ton, la référence qu'elle refuserait.",
    tag: "Identité visuelle" },

  { id: "outside_refs", offers: ["architecture"], type: "textarea", optional: true,
    label: "Trois références hors de votre secteur qui disent ce que la maison devrait ressentir.",
    help: "Un film, un lieu, un objet, une époque : rien qui vienne de votre industrie.",
    ph: "Le film... Le lieu... L'objet...", tag: "Identité visuelle" },

  { id: "proof", offers: ["architecture"], type: "textarea",
    label: "Racontez une fois précise où quelqu'un a compris votre maison sans que vous ayez eu à l'expliquer.",
    help: "Ce qui s'est passé, ce qui a été dit.",
    ph: "C'était le jour où...", tag: "Preuve" },

  { id: "headline", offers: ["architecture"], type: "textarea", optional: true,
    label: "Imaginez un article de presse sur votre maison dans trois ans. Quel est le titre ?",
    help: "Une phrase. Ce que vous espérez qu'on dise de vous, écrit comme si c'était déjà vrai.",
    ph: "Le titre serait...", tag: "Ambition" },

  { id: "links", offers: ["audit", "architecture"], type: "links",
    label: "Liens et accès.",
    help: "Site actuel, LinkedIn du fondateur, un ou deux contenus déjà publiés.",
    tag: "Accès" },

  { id: "portrait_founder", offers: ["architecture"], type: "textarea",
    label: "Décrivez le fondateur dans un an, une fois ce document appliqué.",
    help: "Ne listez pas des chiffres. Décrivez une scène — quelque chose qu'il n'aurait pas pu vivre douze mois plus tôt.",
    ph: "Dans un an...", tag: "Ambition" },
]

export function stepsForOffer(offer: OfferKey): Question[] {
  return QUESTIONS.filter((q) => q.offers.includes(offer))
}

export function isOfferKey(value: string): value is OfferKey {
  return value === "audit" || value === "architecture"
}
