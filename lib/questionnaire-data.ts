import type { Lang } from "@/lib/lang"

/**
 * Question bank for the client onboarding questionnaire, FR + EN.
 *
 * One shared list drives both offers: each question declares which offer(s)
 * include it via `offers`. Audit gets the factual/diagnostic + choice
 * questions only (per its own sales page: "no deep extraction"). Architecture
 * gets everything, including the narrative extraction and its optional
 * "dig deeper" follow-ups.
 *
 * Every piece of copy is a { fr, en } pair, resolved through `localize()`
 * with the language the route already decided — same shape as pick()/useT()
 * elsewhere in the codebase. Structure (ids, types, order) is language-neutral
 * so a submission looks identical whichever locale filled it in.
 *
 * No "use client" here — plain data, safe to import from a server component.
 */

export type OfferKey = "audit" | "architecture"

/**
 * Le terrain sur lequel porte l'Architecture.
 *
 * L'Architecture est le même métier pour les quatre, mais certaines questions ne
 * se posent pas pareil : un restaurant n'a pas de « concurrents avec leur
 * tagline », un artiste n'a pas de « maison ». Une question sans `terrains`
 * vaut pour tous — c'est le cas de la grande majorité, et c'est ce qui rend
 * l'unification vraie plutôt que déclarée.
 */
export type TerrainKey = "marques" | "produits" | "lieux" | "artistes"

export const TERRAIN_KEYS: TerrainKey[] = ["marques", "produits", "lieux", "artistes"]

export function isTerrainKey(value: string | undefined): value is TerrainKey {
  return value !== undefined && (TERRAIN_KEYS as string[]).includes(value)
}

export type QuestionType =
  | "identity"
  | "textarea"
  | "shorttext"
  | "competitors"
  | "links"
  | "choice"
  | "sliders"
  | "wordbank"

/** A string that exists in both languages. */
export type I18nText = { fr: string; en: string }

export interface SliderAxisSource {
  id: string
  l: I18nText
  r: I18nText
}

export interface QuestionSource {
  id: string
  offers: OfferKey[]
  /** Terrains concernés. Absent = tous. */
  terrains?: TerrainKey[]
  type: QuestionType
  label: I18nText
  help?: I18nText
  ph?: I18nText
  tag?: I18nText
  optional?: boolean
  /** Optional follow-up prompt, revealed on demand for textarea questions. */
  deep?: I18nText
  /** Relance affichée quand la réponse reste courte. */
  nudge?: I18nText
  /** Ce que cette réponse alimente dans le document livré. */
  unlock?: I18nText
  options?: I18nText[]
  /** Une phrase par option, dans le même ordre : ce que l'option veut dire. */
  hints?: I18nText[]
  multi?: boolean
  max?: number
  axes?: SliderAxisSource[]
}

/** Resolved shape handed to the UI, once a language is known. */
export interface SliderAxis {
  id: string
  l: string
  r: string
}

export interface Question {
  id: string
  offers: OfferKey[]
  terrains?: TerrainKey[]
  type: QuestionType
  label: string
  help?: string
  ph?: string
  tag?: string
  optional?: boolean
  deep?: string
  /** Relance affichée quand la réponse reste courte : elle demande la
      précision qui manque, au lieu de compter les mots. */
  nudge?: string
  /** Ce que cette réponse alimente dans le document livré. */
  unlock?: string
  options?: string[]
  hints?: string[]
  /** Clé du chapitre (voir CHAPTERS). */
  chapter?: string
  multi?: boolean
  max?: number
  axes?: SliderAxis[]
}

const t = (fr: string, en: string): I18nText => ({ fr, en })

export const ARCHETYPES: I18nText[] = [
  t("Le Créateur", "The Creator"),
  t("Le Rebelle", "The Rebel"),
  t("Le Sage", "The Sage"),
  t("Le Magicien", "The Magician"),
  t("Le Héros", "The Hero"),
  t("L'Amoureux", "The Lover"),
  t("Le Bouffon", "The Jester"),
  t("Le Gars d'à côté", "The Everyman"),
  t("Le Protecteur", "The Caregiver"),
  t("Le Souverain", "The Ruler"),
  t("L'Explorateur", "The Explorer"),
  t("L'Innocent", "The Innocent"),
]

/**
 * Ce que chaque archétype veut dire, en une phrase.
 *
 * Les douze noms seuls ne disent rien à quelqu'un qui n'a pas lu Jung ni
 * Pearson : « Le Gars d'à côté » ou « Le Protecteur » se choisissent au
 * hasard. Chaque nom porte donc ce qu'il promet à un public et une
 * marque qui l'incarne, dans le même ordre que ARCHETYPES.
 */
const ARCHETYPE_HINTS: I18nText[] = [
  t("Construit, invente, laisse une œuvre. Lego, Adobe.", "Builds, invents, leaves a body of work. Lego, Adobe."),
  t("Casse les règles, refuse l'ordre établi. Harley-Davidson, Diesel.", "Breaks the rules, refuses the established order. Harley-Davidson, Diesel."),
  t("Cherche la vérité, explique, éclaire. Google, The Economist.", "Seeks truth, explains, illuminates. Google, The Economist."),
  t("Transforme, fait vivre une expérience hors du commun. Disney.", "Transforms, creates an extraordinary experience. Disney."),
  t("Relève le défi, prouve sa valeur par l'effort. Nike.", "Takes on the challenge, proves worth through effort. Nike."),
  t("Séduit, crée l'intimité et le désir. Chanel, Häagen-Dazs.", "Seduces, creates intimacy and desire. Chanel, Häagen-Dazs."),
  t("Fait rire, dédramatise, refuse de se prendre au sérieux. Old Spice, Ben & Jerry's.", "Makes people laugh, plays it down, refuses to take itself seriously. Old Spice, Ben & Jerry's."),
  t("Simple, proche, sans prétention : « une marque comme moi ». IKEA.", "Simple, close, unpretentious: \"a brand like me\". IKEA."),
  t("Prend soin, protège, rassure. Volvo, Johnson & Johnson.", "Cares, protects, reassures. Volvo, Johnson & Johnson."),
  t("Commande, structure, incarne l'autorité et le prestige. Rolex, Mercedes.", "Commands, structures, embodies authority and prestige. Rolex, Mercedes."),
  t("Part vers l'inconnu, valorise la liberté et la découverte. The North Face, Jeep.", "Heads into the unknown, values freedom and discovery. The North Face, Jeep."),
  t("Optimiste, pur, simple : le bonheur sans complication. Dove, Coca-Cola.", "Optimistic, pure, simple: happiness without complication. Dove, Coca-Cola."),
]

export const WORDS: I18nText[] = [
  t("rare", "rare"),
  t("brut", "raw"),
  t("chirurgical", "surgical"),
  t("chaleureux", "warm"),
  t("feutré", "hushed"),
  t("radical", "radical"),
  t("discret", "understated"),
  t("luxueux", "luxurious"),
  t("accessible", "approachable"),
  t("provocateur", "provocative"),
  t("apaisant", "calming"),
  t("audacieux", "bold"),
  t("minutieux", "meticulous"),
  t("spontané", "spontaneous"),
  t("classique", "classic"),
  t("avant-gardiste", "avant-garde"),
  t("artisanal", "handmade"),
  t("systémique", "systemic"),
  t("intime", "intimate"),
  t("spectaculaire", "spectacular"),
  t("sobre", "restrained"),
  t("généreux", "generous"),
  t("tranchant", "sharp"),
  t("ludique", "playful"),
]

export const QUESTION_SOURCES: QuestionSource[] = [
  {
    id: "identity", offers: ["audit", "architecture"], type: "identity",
    label: t("Votre nom et le nom de la maison.", "Your name and the name of the house."),
    help: t("Tels qu'ils figureront sur votre document.", "As they will appear on your document."),
    tag: t("Identité", "Identity"),
  },
  {
    id: "positioning", offers: ["audit", "architecture"], terrains: ["marques"], type: "textarea",
    label: t("Quelle phrase décrit votre maison aujourd'hui ?", "What sentence describes your house today?"),
    help: t(
      "Celle qui est sur votre accueil ou votre bio LinkedIn. Collez-la telle quelle — y compris la version dont vous n'êtes pas fier.",
      "The one currently on your homepage or LinkedIn bio. Paste it exactly as it is — including the version you are not proud of.",
    ),
    ph: t("Nous aidons les fondateurs à...", "We help founders to..."),
    unlock: t(
      "Ça va directement dans la carte du champ, face aux phrases exactes de vos concurrents.",
      "This goes straight into the map of the field, against your competitors' exact sentences.",
    ),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "positioning_produits", offers: ["audit", "architecture"], terrains: ["produits"], type: "textarea",
    label: t("Quelle phrase décrit votre produit aujourd'hui ?", "What sentence describes your product today?"),
    help: t(
      "Celle qui est sur la page produit ou sur l'emballage. Collez-la telle quelle — y compris si ce n'est qu'une liste de caractéristiques.",
      "The one on the product page or the packaging. Paste it exactly as it is — including if it is just a list of specs.",
    ),
    ph: t("Conçu pour...", "Designed for..."),
    unlock: t(
      "Ça va directement dans la carte du rayon, face aux promesses exactes de vos concurrents.",
      "This goes straight into the map of the shelf, against your competitors' exact promises.",
    ),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "positioning_lieux", offers: ["audit", "architecture"], terrains: ["lieux"], type: "textarea",
    label: t("Quelle phrase décrit votre lieu aujourd'hui ?", "What sentence describes your venue today?"),
    help: t(
      "Celle de votre fiche Google ou de votre bio Instagram. Collez-la telle quelle — c'est celle que lisent ceux qui hésitent à pousser la porte.",
      "The one from your Google listing or Instagram bio. Paste it exactly as it is — it is what people read before deciding to walk in.",
    ),
    ph: t("Cuisine de saison au cœur de...", "Seasonal cooking in the heart of..."),
    unlock: t(
      "Ça va directement dans la carte du quartier, face à ce que revendiquent les adresses voisines.",
      "This goes straight into the map of the district, against what neighbouring venues claim.",
    ),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "positioning_artistes", offers: ["audit", "architecture"], terrains: ["artistes"], type: "textarea",
    label: t("Quelle phrase vous décrit aujourd'hui ?", "What sentence describes you today?"),
    help: t(
      "Votre bio, celle que vous utilisez partout. Collez-la telle quelle — y compris si elle date de trois projets.",
      "Your bio, the one you use everywhere. Paste it exactly as it is — including if it dates back three projects.",
    ),
    ph: t("Artiste et producteur basé à...", "Artist and producer based in..."),
    unlock: t(
      "Ça va directement dans la carte de votre zone, face aux bios des noms qu'on cite à côté du vôtre.",
      "This goes straight into the map of your lane, against the bios of the names quoted alongside yours.",
    ),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "awareness", offers: ["audit", "architecture"], type: "choice",
    label: t("Où en sont la plupart de vos acheteurs quand ils vous trouvent ?", "Where are most of your buyers when they find you?"),
    help: t(
      "Choisissez la situation la plus fréquente, pas la plus flatteuse.",
      "Pick the most common situation, not the most flattering one.",
    ),
    options: [
      t("Inconscient du problème", "Unaware of the problem"),
      t("Conscient du problème, pas des solutions", "Problem-aware, not solution-aware"),
      t("Conscient qu'il existe des solutions, pas de vous", "Solution-aware, but unaware of you"),
      t("Conscient de vous, pas encore convaincu", "Aware of you, not yet convinced"),
      t("Le plus conscient : prêt, cherche juste le bon moment", "Most aware: ready, just waiting for the right moment"),
    ],
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "maturity", offers: ["audit", "architecture"], type: "choice",
    label: t("Comment décririez-vous votre marché aujourd'hui ?", "How would you describe your market today?"),
    options: [
      t("Jeune, flou, tout reste à définir", "Young, undefined, everything still to be shaped"),
      t("Mature et saturé de génériques", "Mature and saturated with generics"),
      t("En train de se re-définir (nouvel usage, nouvelle technologie)", "Being redefined (new use, new technology)"),
      t("Dominé par un ou deux acteurs installés", "Dominated by one or two incumbents"),
    ],
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "competitors", offers: ["audit", "architecture"], terrains: ["marques"], type: "competitors",
    label: t("Nommez 3 à 5 concurrents directs, et leur phrase.", "Name 3 to 5 direct competitors, and their sentence."),
    help: t(
      "Le texte exact — tiré de leur accueil, leur bio LinkedIn ou leur signature email. Copié-collé, sans analyse de votre part.",
      "The exact phrasing — from their homepage, LinkedIn headline or email signature. Just copy and paste. No analysis needed from you.",
    ),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "competitors_lieux", offers: ["audit", "architecture"], terrains: ["lieux"], type: "competitors",
    label: t("Nommez 3 à 5 adresses concurrentes, et ce qu'on en dit.", "Name 3 to 5 competing venues, and what people say about them."),
    help: t(
      "Celles qu'on vous cite, celles où vos clients vont aussi. Reprenez la phrase de leur fiche Google ou de leur bio Instagram, telle quelle.",
      "The ones people mention to you, the ones your customers also go to. Copy the line from their Google listing or Instagram bio, as it stands.",
    ),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "competitors_artistes", offers: ["audit", "architecture"], terrains: ["artistes"], type: "competitors",
    label: t("Nommez 3 à 5 artistes de votre zone, et leur phrase.", "Name 3 to 5 artists in your lane, and their sentence."),
    help: t(
      "Pas vos influences : ceux à qui on vous compare, ou ceux dont vous partagez le public. Reprenez leur bio, telle quelle.",
      "Not your influences: those you get compared to, or whose audience you share. Copy their bio, as it stands.",
    ),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "competitors_produits", offers: ["audit", "architecture"], terrains: ["produits"], type: "competitors",
    label: t("Nommez 3 à 5 produits concurrents, et leur promesse.", "Name 3 to 5 competing products, and their promise."),
    help: t(
      "Ceux avec qui on vous compare en rayon ou sur une page de comparaison. Reprenez l'argument qu'ils mettent en avant, tel quel — pas votre analyse.",
      "The ones you get compared to on a shelf or a comparison page. Copy the argument they lead with, as it stands — not your analysis.",
    ),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "competitor_edge", offers: ["audit", "architecture"], type: "textarea",
    label: t("Qu'est-ce qu'un concurrent fait mieux que vous, honnêtement ?", "What does a competitor genuinely do better than you?"),
    help: t(
      "Sans ça, le contre-positionnement sonne un peu trop confortable.",
      "Without this, the counter-positioning sounds a little too comfortable.",
    ),
    ph: t("Ils sont meilleurs sur...", "They are better at..."),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "conviction", offers: ["audit", "architecture"], type: "textarea",
    label: t(
      "Quelle conviction tenez-vous sur votre secteur que la plupart refuseraient de dire à voix haute ?",
      "What conviction do you hold about your field that most people in it would refuse to say out loud?",
    ),
    help: t(
      "Pas une mission. Pas un slogan. Ce que vous croyez vraiment — sur votre industrie, votre catégorie, la façon dont les choses se font — et qui mettrait un concurrent mal à l'aise si vous le disiez en dîner.",
      "Not a mission. Not a slogan. What you genuinely believe — about your industry, your category, the way things are done — that would make a competitor uncomfortable if you said it at a dinner.",
    ),
    ph: t("La conviction que je tiens...", "The conviction I hold..."),
    deep: t(
      "La version que vous n'avez jamais dite publiquement, celle qui vous ferait le plus de tort si on la lisait de travers.",
      "The version you have never said publicly — the one that would cost you most if it were read the wrong way.",
    ),
    nudge: t(
      "Qu'est-ce qui vous a fait penser ça la première fois ? Un client, une commande refusée, une phrase entendue — racontez le moment plutôt que l'idée.",
      "What made you think that the first time? A client, an order you turned down, something you overheard — tell the moment, not the idea.",
    ),
    unlock: t(
      "C'est de là que sortira votre position — la phrase qu'aucun concurrent ne pourra signer sans mentir.",
      "This is where your position will come from — the sentence no competitor can sign without lying.",
    ),
    tag: t("La vérité", "The truth"),
  },
  {
    id: "tone", offers: ["audit", "architecture"], type: "sliders",
    label: t("Où se situe votre ton, entre ces pôles ?", "Where does your tone sit, between these poles?"),
    help: t("Pas de bonne réponse, juste un instantané honnête.", "No right answer — just an honest snapshot."),
    axes: [
      { id: "a1", l: t("Formelle", "Formal"), r: t("Familière", "Familiar") },
      { id: "a2", l: t("Sérieuse", "Serious"), r: t("Ludique", "Playful") },
      { id: "a3", l: t("Discrète", "Understated"), r: t("Théâtrale", "Theatrical") },
      { id: "a4", l: t("Classique", "Classic"), r: t("Avant-gardiste", "Avant-garde") },
      { id: "a5", l: t("Minimaliste", "Minimal"), r: t("Maximaliste", "Maximal") },
    ],
    tag: t("Langage", "Language"),
  },
  {
    id: "rupture", offers: ["audit", "architecture"], type: "textarea",
    label: t("Racontez le moment de rupture.", "Tell me the rupture moment."),
    help: t(
      "Le jour, la conversation, l'échec ou le refus précis qui a fait exister cette maison. Une date si possible. Pas l'histoire polie que vous racontez aux investisseurs — la vraie.",
      "The specific day, conversation, failure or refusal that made this house exist. A date if possible. Not the polished origin story you tell investors — the one that is actually true.",
    ),
    ph: t("Le jour où...", "The day when..."),
    deep: t(
      "Y a-t-il une rupture plus ancienne, avant celle-là, que vous n'aviez jamais reliée à cette histoire jusqu'ici ?",
      "Is there an older rupture, before that one, that you had never connected to this story until now?",
    ),
    nudge: t(
      "Où étiez-vous, et qu'est-ce que vous avez décidé de ne plus faire à partir de là ?",
      "Where were you, and what did you decide to stop doing from that point on?",
    ),
    unlock: t(
      "Le récit fondateur s'écrira autour de ce moment. C'est la page que vous relirez le plus.",
      "The origin story will be written around this moment. It is the page you will reread most.",
    ),
    tag: t("La vérité", "The truth"),
  },
  {
    id: "archetype", offers: ["audit", "architecture"], type: "choice", multi: true, max: 2,
    label: t("Choisissez un ou deux archétypes qui vous ressemblent.", "Choose one or two archetypes that resemble you."),
    help: t(
      "Le répertoire classique du storytelling de marque. Instinctif, pas de calcul.",
      "The classic repertoire of brand storytelling. Go on instinct, not calculation.",
    ),
    options: ARCHETYPES,
    hints: ARCHETYPE_HINTS,
    tag: t("Identité & langage", "Identity & language"),
  },
  {
    id: "enemy", offers: ["audit", "architecture"], type: "textarea",
    label: t("Qui ou qu'est-ce qui est l'ennemi de cette maison ?", "Who or what is the enemy of this house?"),
    help: t(
      "Pas un concurrent — une façon de penser, une méthode, une habitude que cette maison refuse d'accepter.",
      "Not a competitor — a way of thinking, a method, a habit this house refuses to accept.",
    ),
    ph: t("Ce contre quoi nous nous tenons...", "What we stand against..."),
    nudge: t(
      "Pas un concurrent : une manière de faire que vous refusez. Qu'est-ce qui vous agace quand vous le voyez chez les autres ?",
      "Not a competitor: a way of working you refuse. What annoys you when you see others do it?",
    ),
    unlock: t(
      "Voilà le premier des trois refus qui tiendront votre maison.",
      "There is the first of the three refusals that will hold your house.",
    ),
    tag: t("La vérité", "The truth"),
  },
  {
    id: "decision", offers: ["audit", "architecture"], type: "choice",
    label: t("Qui décide de l'achat, en face de vous ?", "Who decides on the purchase, across from you?"),
    options: [
      t("Moi seul : je décide et je paie", "Me alone: I decide and I pay"),
      t("Un associé ou un conjoint à convaincre", "A partner or spouse to convince"),
      t("Un comité ou une hiérarchie", "A committee or a hierarchy"),
      t("Le grand public : une décision individuelle mais nombreuse", "The general public: an individual decision, made many times over"),
    ],
    tag: t("Audience", "Audience"),
  },
  {
    id: "audience", offers: ["audit", "architecture"], type: "textarea",
    label: t(
      "Décrivez la personne exacte qui devrait vous commander aujourd'hui.",
      "Describe the exact person who should commission you today.",
    ),
    help: t(
      "Pas une catégorie, une personne. Ce qu'elle a déjà essayé avant vous, ce qui l'a déçue, ce qu'elle ne dirait jamais tout haut à un prestataire.",
      "Not a category — a person. What they already tried before you, what disappointed them, what they would never say out loud to a vendor.",
    ),
    ph: t("Elle a déjà essayé...", "They already tried..."),
    tag: t("Audience", "Audience"),
  },
  {
    id: "risk", offers: ["audit", "architecture"], type: "choice",
    label: t(
      "Si un client se trompe en vous choisissant, le risque est surtout...",
      "If a client is wrong to choose you, the risk is mainly...",
    ),
    options: [
      t("Financier : perdre de l'argent", "Financial: losing money"),
      t("Réputationnel : mal paraître", "Reputational: looking bad"),
      t("Temporel : perdre du temps, devoir recommencer", "Time: losing time, having to start over"),
      t("Émotionnel : se sentir jugé ou incompris", "Emotional: feeling judged or misunderstood"),
      t("Faible : l'achat est presque anodin", "Low: the purchase is almost inconsequential"),
    ],
    tag: t("Audience", "Audience"),
  },
  {
    id: "repoussoir", offers: ["audit", "architecture"], type: "textarea",
    label: t(
      "Décrivez un client que vous avez refusé, ou que vous refuseriez.",
      "Describe a client you turned down, or would turn down.",
    ),
    help: t("Pourquoi, précisément ?", "Why, precisely?"),
    ph: t("Le client que je refuserais...", "The client I would refuse..."),
    tag: t("Audience", "Audience"),
  },
  {
    id: "support_scene", offers: ["audit", "architecture"], type: "textarea",
    label: t(
      "Racontez la dernière fois qu'un client a été déçu ou en colère.",
      "Tell me about the last time a client was disappointed or angry.",
    ),
    help: t("Qu'avez-vous répondu ? Le referiez-vous ?", "What did you reply? Would you do it again?"),
    ph: t("La dernière fois...", "The last time..."),
    tag: t("Playbooks", "Playbooks"),
  },
  {
    id: "hr_disqualifier", offers: ["audit", "architecture"], type: "textarea", optional: true,
    label: t(
      "Chez quelqu'un qui travaillerait avec vous (employé, associé, prestataire), quelle qualité est non-négociable, et laquelle disqualifie immédiatement ?",
      "In someone who would work with you (employee, partner, contractor), which quality is non-negotiable, and which disqualifies them immediately?",
    ),
    help: t(
      "Même avec un CV parfait. Si vous travaillez seul·e, répondez pour la première personne que vous accueilleriez.",
      "Even with a perfect CV. If you work alone, answer for the first person you would bring in.",
    ),
    ph: t("Non-négociable : ... Disqualifiant : ...", "Non-negotiable: ... Disqualifying: ..."),
    tag: t("Playbooks", "Playbooks"),
  },
  {
    id: "model", offers: ["audit", "architecture"], type: "choice",
    label: t("Comment vendez-vous aujourd'hui ?", "How do you sell today?"),
    options: [
      t("Paiement unique", "One-off payment"),
      t("Abonnement", "Subscription"),
      t("Sur devis, du sur-mesure", "By quote, bespoke"),
      t("Un mix des deux", "A mix of both"),
    ],
    tag: t("Business", "Business"),
  },
  {
    id: "content_format", offers: ["audit", "architecture"], type: "choice",
    label: t(
      "Quel format pouvez-vous tenir dans la durée, sans vous épuiser ?",
      "Which format can you sustain over time, without burning out?",
    ),
    options: [
      t("Écrit long", "Long-form writing"),
      t("Court et visuel", "Short and visual"),
      t("Vidéo", "Video"),
      t("Audio", "Audio"),
      t("Je ne sais pas encore", "I don't know yet"),
    ],
    tag: t("Playbooks", "Playbooks"),
  },
  {
    id: "traction", offers: ["audit", "architecture"], type: "textarea", optional: true,
    label: t(
      "Quels chiffres ou faits vérifiables prouvent que ça marche déjà ?",
      "Which verifiable numbers or facts prove it already works?",
    ),
    help: t(
      "Clients, ancienneté, résultats mesurés, presse, récompenses, clients connus. Autant qu'il y en a.",
      "Clients, years in business, measured results, press, awards, well-known clients. As many as there are.",
    ),
    ph: t("Ex : 43 clients en 14 mois, 4,9 sur 212 avis, cité par...", "E.g. 43 clients in 14 months, 4.9 across 212 reviews, quoted by..."),
    tag: t("Business", "Business"),
  },
  {
    id: "price", offers: ["audit", "architecture"], type: "textarea",
    label: t(
      "Qu'est-ce qui justifierait de doubler votre prix demain ?",
      "What would justify doubling your price tomorrow?",
    ),
    help: t(
      "Ce qu'il faudrait que vous prouviez, ou que vous soyez, pour que le doubler ne choque personne.",
      "What you would have to prove, or be, for doubling it to shock nobody.",
    ),
    ph: t("Il faudrait que...", "I would have to..."),
    tag: t("Business", "Business"),
  },
  {
    id: "forbidden", offers: ["audit", "architecture"], type: "textarea",
    label: t(
      "Quel sujet, ton ou blague ne franchirez-vous jamais, même si ça faisait vendre ?",
      "Which subject, tone or joke will you never cross, even if it sold?",
    ),
    help: t(
      "La limite qui protège la maison, même quand ce n'est pas vous qui écrivez.",
      "The line that protects the house, even when someone else is doing the writing.",
    ),
    ph: t("Nous ne ferons jamais...", "We will never..."),
    tag: t("Langage", "Language"),
  },
  {
    id: "wordbank", offers: ["audit", "architecture"], type: "wordbank",
    label: t("Vos mots, et ceux qui ne le seront jamais.", "Your words, and the ones that will never be."),
    help: t(
      "Cochez dans chaque colonne. Un mot ne peut pas être dans les deux.",
      "Tick in each column. A word cannot be in both.",
    ),
    tag: t("Langage", "Language"),
  },
  {
    // Plusieurs réponses : de meilleurs mots ne changent presque jamais une
    // seule surface. Forcer un choix unique obligeait le client à trancher
    // arbitrairement, et nous privait de l'information la plus utile pour
    // hiérarchiser les mouvements.
    id: "deploy", offers: ["audit", "architecture"], type: "choice", multi: true,
    label: t(
      "Où de meilleurs mots changeraient immédiatement votre chiffre d'affaires ?",
      "Where would better words immediately change your revenue?",
    ),
    help: t("Plusieurs réponses possibles.", "Select as many as apply."),
    options: [
      t("La page d'accueil", "The homepage"),
      t("Le pitch aux investisseurs ou partenaires", "The pitch to investors or partners"),
      t("La prospection à froid", "Cold outreach"),
      t("Les réseaux sociaux", "Social media"),
      t("Les rendez-vous de vente en direct", "Live sales meetings"),
    ],
    tag: t("Déploiement", "Deployment"),
  },
  {
    id: "portrait_house", offers: ["audit", "architecture"], type: "textarea",
    label: t("Si cette maison était une personne, décrivez-la.", "If this house were a person, describe them."),
    help: t(
      "Sa posture, sa façon de parler, l'endroit où elle se sentirait chez elle. Soyez précis — les réponses vagues produisent des maisons vagues.",
      "Their posture, the way they speak, the kind of place they would feel at home in. Be specific — vague answers produce vague houses.",
    ),
    ph: t("Elle porterait...", "They would wear..."),
    deep: t(
      "Et ce qui la trahirait immédiatement comme n'étant PAS elle : le lieu, le ton, la référence qu'elle refuserait.",
      "And what would immediately betray them as NOT being themselves: the place, the tone, the reference they would refuse.",
    ),
    nudge: t(
      "Comment parle-t-elle ? Qu'est-ce qu'elle ne dirait jamais ? Qu'est-ce qui la ferait quitter une pièce ?",
      "How do they speak? What would they never say? What would make them leave a room?",
    ),
    unlock: t(
      "Le ton de voix se déduira de ce portrait : sept règles avec vos propres exemples.",
      "The tone of voice will be derived from this portrait: seven rules with your own examples.",
    ),
    tag: t("Identité visuelle", "Visual identity"),
  },
  {
    id: "outside_refs", offers: ["audit", "architecture"], type: "textarea", optional: true,
    label: t(
      "Trois références hors de votre secteur qui disent ce que la maison devrait ressentir.",
      "Three references outside your field that say what the house should feel like.",
    ),
    help: t(
      "Un film, un lieu, un objet, une époque : rien qui vienne de votre industrie.",
      "A film, a place, an object, an era: nothing from your own industry.",
    ),
    ph: t("Le film... Le lieu... L'objet...", "The film... The place... The object..."),
    tag: t("Identité visuelle", "Visual identity"),
  },
  {
    id: "proof", offers: ["audit", "architecture"], type: "textarea",
    label: t(
      "Racontez une fois précise où quelqu'un a compris votre maison sans que vous ayez eu à l'expliquer.",
      "Tell me about one specific time someone understood your house without you having to explain it.",
    ),
    help: t("Ce qui s'est passé, ce qui a été dit.", "What happened, what was said."),
    ph: t("C'était le jour où...", "It was the day when..."),
    tag: t("Preuve", "Proof"),
  },
  {
    id: "headline", offers: ["audit", "architecture"], type: "textarea", optional: true,
    label: t(
      "Imaginez un article de presse sur votre maison dans trois ans. Quel est le titre ?",
      "Imagine a press article about your house three years from now. What is the headline?",
    ),
    help: t(
      "Une phrase. Ce que vous espérez qu'on dise de vous, écrit comme si c'était déjà vrai.",
      "One sentence. What you hope will be said of you, written as if it were already true.",
    ),
    ph: t("Le titre serait...", "The headline would be..."),
    tag: t("Ambition", "Ambition"),
  },
  {
    id: "links", offers: ["audit", "architecture"], type: "links",
    label: t("Liens et accès.", "Links and access."),
    help: t(
      "Site actuel, LinkedIn du fondateur, un ou deux contenus déjà publiés.",
      "Current website, founder's LinkedIn, one or two pieces you have already published.",
    ),
    tag: t("Accès", "Access"),
  },
  {
    id: "portrait_founder", offers: ["audit", "architecture"], type: "textarea",
    label: t(
      "Décrivez le fondateur dans un an, une fois ce document appliqué.",
      "Describe the founder one year from now, once this document has been applied.",
    ),
    help: t(
      "Ne listez pas des chiffres. Décrivez une scène — quelque chose qu'il n'aurait pas pu vivre douze mois plus tôt.",
      "Don't list metrics. Describe a scene — something they could not have lived twelve months earlier.",
    ),
    ph: t("Dans un an...", "A year from now..."),
    tag: t("Ambition", "Ambition"),
  },

  // ─── Ajouts : le pratique, que les 28 modules d'écriture doivent connaître ───
  {
    id: "activity", offers: ["audit", "architecture"], type: "textarea",
    label: t(
      "Dites-nous les faits : ce que vous vendez ou faites, pour qui, depuis quand, et où.",
      "Give us the facts: what you sell or do, for whom, since when, and where.",
    ),
    help: t(
      "Sans adjectifs. Deux ou trois phrases, comme à quelqu'un qui n'a jamais entendu parler de vous.",
      "No adjectives. Two or three sentences, as if to someone who has never heard of you.",
    ),
    ph: t("Nous fabriquons... pour... depuis... à...", "We make... for... since... in..."),
    tag: t("Identité", "Identity"),
  },
  {
    id: "category", offers: ["audit", "architecture"], type: "textarea",
    label: t(
      "Dans quelle case vous range-t-on spontanément ? Et dans laquelle voudriez-vous être rangé ?",
      "What box do people put you in spontaneously? And which box would you rather be in?",
    ),
    help: t(
      "Par exemple « agence de communication » plutôt que « studio de narration ». L'écart entre les deux est souvent la vraie position à prendre.",
      "For instance \u201ccommunications agency\u201d rather than \u201cnarrative studio\u201d. The gap between the two is often the real position to take.",
    ),
    ph: t("On me range parmi... Je voudrais qu'on me range parmi...", "People file me under... I would rather be filed under..."),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "past_attempts", offers: ["audit", "architecture"], type: "textarea", optional: true,
    label: t(
      "Qu'avez-vous déjà essayé pour vous démarquer, et pourquoi ça n'a pas pris ?",
      "What have you already tried to stand out, and why didn't it take?",
    ),
    help: t(
      "Une agence, un changement de nom, un ghostwriter, un outil d'IA, une refonte du site. Écrivez « rien » si c'est le cas.",
      "An agency, a rename, a ghostwriter, an AI tool, a site redesign. Write \u201cnothing\u201d if that is the case.",
    ),
    ph: t("J'ai déjà essayé... Ça n'a pas pris parce que...", "I already tried... It didn't take because..."),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "voice_sample", offers: ["audit", "architecture"], type: "textarea", optional: true,
    label: t("Collez un texte qui vous ressemble vraiment.", "Paste a text that truly sounds like you."),
    help: t(
      "Un mail, un post, un message vocal retranscrit, une présentation — écrit par vous, ou par quelqu'un qui vous a parfaitement compris. C'est ce qui nous apprend le plus sur votre voix.",
      "An email, a post, a transcribed voice note, a pitch — written by you, or by someone who understood you perfectly. It teaches us more about your voice than anything else.",
    ),
    ph: t("Collez le texte tel quel...", "Paste the text as it is..."),
    tag: t("Langage", "Language"),
  },
  {
    id: "address_mode", offers: ["audit", "architecture"], type: "choice",
    label: t("Comment la maison s'adresse-t-elle à ses clients ?", "How does the house address its customers?"),
    options: [
      t("Nous, au vouvoiement", "\u201cWe\u201d, formal"),
      t("Je, au vouvoiement", "\u201cI\u201d, formal"),
      t("Nous, au tutoiement", "\u201cWe\u201d, casual"),
      t("Je, au tutoiement", "\u201cI\u201d, casual"),
      t("Ça dépend du support", "It depends on the channel"),
    ],
    tag: t("Langage", "Language"),
  },
  {
    id: "languages", offers: ["audit", "architecture"], type: "choice", multi: true, max: 3,
    label: t("Dans quelle(s) langue(s) la maison s'exprime-t-elle ?", "In which language(s) does the house speak?"),
    help: t("Cochez la langue principale en premier.", "Tick the main language first."),
    options: [
      t("Français", "French"),
      t("Anglais", "English"),
      t("Espagnol", "Spanish"),
      t("Allemand", "German"),
      t("Italien", "Italian"),
      t("Autre", "Other"),
    ],
    tag: t("Langage", "Language"),
  },
  {
    id: "objections", offers: ["audit", "architecture"], type: "textarea",
    label: t(
      "Les trois objections qu'on vous oppose le plus souvent avant d'acheter.",
      "The three objections you hear most often before someone buys.",
    ),
    help: t(
      "Les vraies, pas la version polie. Pour chacune, ce que vous répondez aujourd'hui, même si ce n'est pas convaincant.",
      "The real ones, not the polite version. For each, what you answer today, even if it isn't convincing.",
    ),
    ph: t("1. « C'est trop cher » — je réponds que...", "1. \u201cIt's too expensive\u201d — I answer that..."),
    tag: t("Audience", "Audience"),
  },
  {
    id: "customer_words", offers: ["audit", "architecture"], type: "textarea", optional: true,
    label: t(
      "Collez trois phrases que vos clients ont dites ou écrites sur vous.",
      "Paste three sentences your customers have said or written about you.",
    ),
    help: t(
      "Avis, messages, mails, retours à l'oral retranscrits. Mot pour mot : c'est leur vocabulaire, pas le vôtre, qui rendra le document juste.",
      "Reviews, messages, emails, spoken feedback written down. Word for word: their vocabulary, not yours, will make the document right.",
    ),
    ph: t("« ... »", "\u201c...\u201d"),
    tag: t("Audience", "Audience"),
  },
  {
    id: "acquisition", offers: ["audit", "architecture"], type: "choice", multi: true, max: 3,
    label: t("Comment vos meilleurs clients arrivent-ils jusqu'à vous ?", "How do your best customers find their way to you?"),
    help: t("Jusqu'à trois réponses.", "Up to three answers."),
    options: [
      t("Bouche-à-oreille et recommandation", "Word of mouth and referrals"),
      t("Réseaux sociaux", "Social media"),
      t("Recherche Google ou site", "Google search or website"),
      t("Prospection directe", "Direct outreach"),
      t("Presse, médias, événements", "Press, media, events"),
      t("Partenaires et prescripteurs", "Partners and referrers"),
      t("Passage et emplacement", "Foot traffic and location"),
      t("Publicité payante", "Paid advertising"),
    ],
    tag: t("Audience", "Audience"),
  },
  {
    id: "team", offers: ["audit", "architecture"], type: "choice",
    label: t("Combien de personnes parlent au nom de la maison ?", "How many people speak on behalf of the house?"),
    help: t("Vous compris, associés, équipe, prestataires réguliers.", "Including you, partners, team, regular contractors."),
    options: [
      t("Moi seul·e", "Just me"),
      t("2 à 5 personnes", "2 to 5 people"),
      t("6 à 20 personnes", "6 to 20 people"),
      t("Plus de 20 personnes", "More than 20 people"),
    ],
    tag: t("Playbooks", "Playbooks"),
  },
  {
    id: "who_writes", offers: ["audit", "architecture"], type: "choice", multi: true, max: 3,
    label: t("Qui écrit aujourd'hui au nom de la maison ?", "Who writes on behalf of the house today?"),
    help: t(
      "Les playbooks seront écrits pour ceux-là : ils doivent pouvoir s'en servir tels quels.",
      "The playbooks will be written for them: they must be able to use them as they are.",
    ),
    options: [
      t("Moi", "Me"),
      t("Un membre de l'équipe", "A team member"),
      t("Un freelance ou une agence", "A freelancer or an agency"),
      t("Un outil d'IA", "An AI tool"),
      t("Personne : ça ne se fait pas vraiment", "Nobody: it doesn't really happen"),
    ],
    tag: t("Playbooks", "Playbooks"),
  },
  {
    id: "channels", offers: ["audit", "architecture"], type: "choice", multi: true, max: 9,
    label: t(
      "Sur quels canaux la maison s'exprime-t-elle régulièrement aujourd'hui ?",
      "On which channels does the house speak regularly today?",
    ),
    help: t("Régulièrement : au moins une fois par mois.", "Regularly: at least once a month."),
    options: [
      t("Site web", "Website"),
      t("Instagram", "Instagram"),
      t("LinkedIn", "LinkedIn"),
      t("TikTok", "TikTok"),
      t("YouTube", "YouTube"),
      t("Newsletter", "Newsletter"),
      t("Presse et médias", "Press and media"),
      t("Salons et événements", "Fairs and events"),
      t("Rien de régulier", "Nothing regular"),
    ],
    tag: t("Playbooks", "Playbooks"),
  },
  {
    id: "visual_keep", offers: ["audit", "architecture"], type: "textarea",
    label: t(
      "Dans votre identité visuelle actuelle, qu'est-ce qui doit rester, et qu'est-ce qui doit disparaître ?",
      "In your current visual identity, what must stay, and what must go?",
    ),
    help: t(
      "Logo, couleurs, typographies, photos, packaging, décor. Si vous n'avez encore rien, dites-le.",
      "Logo, colours, typefaces, photos, packaging, decor. If you have nothing yet, say so.",
    ),
    ph: t("À garder : ... À abandonner : ...", "Keep: ... Drop: ..."),
    tag: t("Identité visuelle", "Visual identity"),
  },
  {
    id: "calendar", offers: ["audit", "architecture"], type: "textarea", optional: true,
    label: t("Quelles échéances avez-vous dans les six prochains mois ?", "What deadlines do you have in the next six months?"),
    help: t(
      "Lancement, saison forte, levée de fonds, recrutement, événement, ouverture. Elles décident de l'ordre des décisions.",
      "A launch, a peak season, fundraising, hiring, an event, an opening. They set the order of the decisions.",
    ),
    ph: t("En mars : ... En juin : ...", "In March: ... In June: ..."),
    tag: t("Déploiement", "Deployment"),
  },
  {
    id: "untouchables", offers: ["audit", "architecture"], type: "textarea", optional: true,
    label: t("Qu'est-ce qui est intouchable, sensible ou confidentiel ?", "What is untouchable, sensitive or confidential?"),
    help: t(
      "Un nom, un slogan historique, une contrainte légale ou réglementaire, un partenaire, un épisode du passé à ne pas réveiller, un chiffre à ne jamais citer.",
      "A name, a historic slogan, a legal or regulatory constraint, a partner, a past episode not to be revived, a figure never to be quoted.",
    ),
    ph: t("On ne touche pas à... On ne cite jamais...", "We never touch... We never quote..."),
    tag: t("Déploiement", "Deployment"),
  },
  {
    id: "budget", offers: ["audit", "architecture"], type: "choice", optional: true,
    label: t(
      "Quel budget annuel pouvez-vous consacrer à appliquer ces décisions ?",
      "What annual budget can you put into applying these decisions?",
    ),
    help: t(
      "Hors honoraires pour ce document. Cela nous évite de vous recommander ce que vous ne pourrez pas faire.",
      "Excluding the fee for this document. It keeps us from recommending what you could not do.",
    ),
    options: [
      t("Moins de 5 000 €", "Under €5,000"),
      t("5 000 à 20 000 €", "€5,000 to €20,000"),
      t("20 000 à 100 000 €", "€20,000 to €100,000"),
      t("Plus de 100 000 €", "Over €100,000"),
      t("Je ne sais pas encore", "I don't know yet"),
    ],
    tag: t("Déploiement", "Deployment"),
  },
  {
    id: "success_signal", offers: ["audit", "architecture"], type: "textarea",
    label: t(
      "Dans six mois, quel signe concret vous dirait que ce document a servi ?",
      "In six months, what concrete sign would tell you this document has been worth it?",
    ),
    help: t(
      "Pas un chiffre d'affaires : un signe qu'on peut observer. Un type de client qui écrit, une phrase qu'on vous cite, une proposition que vous avez refusé de faire.",
      "Not a revenue figure: a sign you can observe. A type of customer who writes in, a sentence people quote to you, a proposal you refused to make.",
    ),
    ph: t("Je saurai que ça a servi quand...", "I will know it was worth it when..."),
    tag: t("Ambition", "Ambition"),
  },
  {
    id: "review_logistics", offers: ["audit", "architecture"], type: "textarea", optional: true,
    label: t(
      "Qui doit valider le document avec vous, et quels créneaux vous arrangent pour l'heure de relecture, vers le jour 20 ?",
      "Who must approve the document with you, and which slots suit you for the one-hour review around day 20?",
    ),
    help: t(
      "Associé, conjoint, comité — et deux ou trois créneaux, avec votre fuseau horaire.",
      "Partner, spouse, committee — and two or three slots, with your time zone.",
    ),
    ph: t("Validation : ... Créneaux : ...", "Approval: ... Slots: ..."),
    tag: t("Ambition", "Ambition"),
  },
]

const pickText = (v: I18nText, lang: Lang): string => v[lang] ?? v.fr

/** Resolve one question's copy into the given language. */
export function localizeQuestion(q: QuestionSource, lang: Lang): Question {
  return {
    id: q.id,
    offers: q.offers,
    type: q.type,
    label: pickText(q.label, lang),
    help: q.help ? pickText(q.help, lang) : undefined,
    ph: q.ph ? pickText(q.ph, lang) : undefined,
    tag: q.tag ? pickText(q.tag, lang) : undefined,
    optional: q.optional,
    deep: q.deep ? pickText(q.deep, lang) : undefined,
    nudge: q.nudge ? pickText(q.nudge, lang) : undefined,
    unlock: q.unlock ? pickText(q.unlock, lang) : undefined,
    options: q.options?.map((o) => pickText(o, lang)),
    hints: q.hints?.map((h) => pickText(h, lang)),
    multi: q.multi,
    max: q.max,
    terrains: q.terrains,
    axes: q.axes?.map((ax) => ({ id: ax.id, l: pickText(ax.l, lang), r: pickText(ax.r, lang) })),
  }
}

/**
 * Les étapes d'une offre, résolues dans `lang` et filtrées sur le terrain.
 *
 * Sans terrain, on renvoie tout ce qui n'est pas propre à un terrain : c'est
 * le comportement d'avant, donc les liens existants continuent de marcher.
 */
/**
 * Les sept chapitres du parcours, dans l'ordre où on les traverse.
 *
 * Avant, un chapitre était une suite de questions portant la même
 * étiquette — et les étiquettes alternaient (« La vérité », « Langage »,
 * « La vérité », « Identité & langage », « La vérité »…), ce qui
 * fabriquait une vingtaine d'écrans de chapitre pour trente questions.
 * Les chapitres sont maintenant définis ici, explicitement : chacun
 * regroupe les questions qui nourrissent une même partie du document, et
 * dit pourquoi il est nécessaire.
 *
 * Un identifiant de question sans suffixe de terrain (`positioning`,
 * pas `positioning_lieux`) : les variantes par terrain tombent dans le
 * même chapitre, à la même place.
 */
export const CHAPTERS: { key: string; ids: string[] }[] = [
  { key: "fondations", ids: ["identity", "activity", "conviction", "rupture", "enemy"] },
  { key: "champ", ids: ["positioning", "category", "awareness", "maturity", "competitors", "competitor_edge", "past_attempts"] },
  { key: "voix", ids: ["archetype", "tone", "address_mode", "languages", "forbidden", "wordbank", "voice_sample"] },
  { key: "audience", ids: ["decision", "audience", "customer_words", "objections", "risk", "repoussoir", "acquisition"] },
  { key: "quotidien", ids: ["team", "model", "price", "traction", "who_writes", "channels", "content_format", "support_scene", "hr_disqualifier"] },
  { key: "deploiement", ids: ["deploy", "visual_keep", "portrait_house", "outside_refs", "calendar", "untouchables", "budget"] },
  { key: "preuve", ids: ["proof", "success_signal", "headline", "portrait_founder", "review_logistics", "links"] },
]

const canonicalId = (id: string) => id.replace(/_(produits|lieux|artistes)$/, "")

/** Le chapitre d'une question, par son identifiant canonique. */
export function chapterKeyOf(id: string): string {
  const cid = canonicalId(id)
  return CHAPTERS.find((ch) => ch.ids.includes(cid))?.key ?? "preuve"
}

export function stepsForOffer(offer: OfferKey, lang: Lang, terrain?: TerrainKey): Question[] {
  // Sans terrain, on retombe sur « marques ».
  //
  // C'est un garde-fou, pas un détail : une question déclinée n'existe que
  // pour les terrains qu'elle nomme. Si un lien arrive sans `?terrain=` et
  // qu'on ne choisit rien, le positionnement et les concurrents
  // disparaissent purement et simplement du parcours — un client qui vient
  // de payer recevrait un questionnaire amputé, sans que rien ne le
  // signale. Le repli garantit qu'il y a toujours une version de chaque
  // question.
  const t: TerrainKey = terrain ?? "marques"
  const flat = CHAPTERS.flatMap((ch) => ch.ids)
  const rank = (id: string) => {
    const i = flat.indexOf(canonicalId(id))
    return i === -1 ? flat.length : i
  }
  return QUESTION_SOURCES.filter((q) => {
    if (!q.offers.includes(offer)) return false
    if (!q.terrains) return true
    return q.terrains.includes(t)
  })
    // Tri stable : les questions d'un même rang gardent leur ordre d'écriture.
    .sort((a, b) => rank(a.id) - rank(b.id))
    .map((q) => ({ ...localizeQuestion(q, lang), chapter: chapterKeyOf(q.id) }))
}

/** Word bank chips, resolved. Kept separate: the UI renders them, not a question. */
export function wordsFor(lang: Lang): string[] {
  return WORDS.map((w) => pickText(w, lang))
}

export function isOfferKey(value: string): value is OfferKey {
  return value === "audit" || value === "architecture"
}
