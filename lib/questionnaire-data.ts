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
 * Le terrain sur lequel porte l'audit.
 *
 * L'audit est le même métier pour les quatre, mais certaines questions ne
 * se posent pas pareil : un restaurant n'a pas de « concurrents avec leur
 * tagline », un artiste n'a pas de « maison ». Une question sans `terrains`
 * vaut pour tous — c'est le cas de la grande majorité, et c'est ce qui rend
 * l'unification vraie plutôt que déclarée.
 */
export type TerrainKey = "marques" | "entreprises" | "lieux" | "artistes"

export const TERRAIN_KEYS: TerrainKey[] = ["marques", "entreprises", "lieux", "artistes"]

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
  options?: I18nText[]
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
  options?: string[]
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
    help: t("Prérempli quand le lien vient de vous.", "Prefilled when the link came from us."),
    tag: t("Identité", "Identity"),
  },
  {
    id: "positioning", offers: ["audit", "architecture"], type: "textarea",
    label: t("Quelle phrase décrit votre maison aujourd'hui ?", "What sentence describes your house today?"),
    help: t(
      "Celle qui est sur votre accueil ou votre bio LinkedIn. Collez-la telle quelle — y compris la version dont vous n'êtes pas fier.",
      "The one currently on your homepage or LinkedIn bio. Paste it exactly as it is — including the version you are not proud of.",
    ),
    ph: t("Nous aidons les fondateurs à...", "We help founders to..."),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "awareness", offers: ["audit", "architecture"], type: "choice",
    label: t("Où en est la plupart de vos acheteurs quand ils vous trouvent ?", "Where are most of your buyers when they find you?"),
    help: t("Le niveau de conscience du marché, au sens de Schwartz.", "Market awareness, in Schwartz's sense."),
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
    id: "competitors", offers: ["audit", "architecture"], terrains: ["marques", "entreprises"], type: "competitors",
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
    id: "competitor_edge", offers: ["architecture"], type: "textarea",
    label: t("Qu'est-ce qu'un concurrent fait mieux que vous, honnêtement ?", "What does a competitor genuinely do better than you?"),
    help: t(
      "Sans ça, le contre-positionnement sonne un peu trop confortable.",
      "Without this, the counter-positioning sounds a little too comfortable.",
    ),
    ph: t("Ils sont meilleurs sur...", "They are better at..."),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "conviction", offers: ["architecture"], type: "textarea",
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
    id: "rupture", offers: ["architecture"], type: "textarea",
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
    tag: t("Identité & langage", "Identity & language"),
  },
  {
    id: "enemy", offers: ["architecture"], type: "textarea",
    label: t("Qui ou qu'est-ce qui est l'ennemi de cette maison ?", "Who or what is the enemy of this house?"),
    help: t(
      "Pas un concurrent — une façon de penser, une méthode, une habitude que cette maison refuse d'accepter.",
      "Not a competitor — a way of thinking, a method, a habit this house refuses to accept.",
    ),
    ph: t("Ce contre quoi nous nous tenons...", "What we stand against..."),
    tag: t("La vérité", "The truth"),
  },
  {
    id: "decision", offers: ["architecture"], type: "choice",
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
    id: "audience", offers: ["architecture"], type: "textarea",
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
    id: "risk", offers: ["architecture"], type: "choice",
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
    id: "repoussoir", offers: ["architecture"], type: "textarea",
    label: t(
      "Décrivez un client que vous avez refusé, ou que vous refuseriez.",
      "Describe a client you turned down, or would turn down.",
    ),
    help: t("Pourquoi, précisément ?", "Why, precisely?"),
    ph: t("Le client que je refuserais...", "The client I would refuse..."),
    tag: t("Audience", "Audience"),
  },
  {
    id: "support_scene", offers: ["architecture"], type: "textarea",
    label: t(
      "Racontez la dernière fois qu'un client a été déçu ou en colère.",
      "Tell me about the last time a client was disappointed or angry.",
    ),
    help: t("Qu'avez-vous répondu ? Le referiez-vous ?", "What did you reply? Would you do it again?"),
    ph: t("La dernière fois...", "The last time..."),
    tag: t("Playbooks", "Playbooks"),
  },
  {
    id: "hr_disqualifier", offers: ["architecture"], type: "textarea",
    label: t(
      "Chez quelqu'un que vous embaucheriez, quelle qualité est non-négociable, et laquelle disqualifie immédiatement ?",
      "In someone you would hire, which quality is non-negotiable, and which one disqualifies immediately?",
    ),
    help: t("Même avec un CV parfait.", "Even with a perfect CV."),
    ph: t("Non-négociable : ... Disqualifiant : ...", "Non-negotiable: ... Disqualifying: ..."),
    tag: t("Playbooks", "Playbooks"),
  },
  {
    id: "model", offers: ["architecture"], type: "choice",
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
    id: "content_format", offers: ["architecture"], type: "choice",
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
    id: "traction", offers: ["architecture"], type: "shorttext", optional: true,
    label: t("Quel chiffre concret prouve que ça marche déjà ?", "What concrete number proves it already works?"),
    help: t(
      "Clients, mois d'existence, taux de retour, chiffre d'affaires. Un seul suffit.",
      "Clients, months in business, return rate, revenue. One is enough.",
    ),
    ph: t("Ex : 43 clients en 14 mois", "E.g. 43 clients in 14 months"),
    tag: t("Business", "Business"),
  },
  {
    id: "price", offers: ["architecture"], type: "textarea",
    label: t(
      "L'objection qu'on vous oppose le plus souvent avant d'acheter, et ce qui justifierait de doubler votre prix demain.",
      "The objection you hear most often before a purchase, and what would justify doubling your price tomorrow.",
    ),
    help: t(
      "La vraie objection, pas la version qu'on vous fait en étant poli.",
      "The real objection, not the polite version people give you.",
    ),
    ph: t("On me dit souvent que...", "People often tell me that..."),
    tag: t("Business", "Business"),
  },
  {
    id: "forbidden", offers: ["architecture"], type: "textarea",
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
    id: "wordbank", offers: ["architecture"], type: "wordbank",
    label: t("Vos mots, et ceux qui ne le seront jamais.", "Your words, and the ones that will never be."),
    help: t(
      "Cochez dans chaque colonne. Un mot ne peut pas être dans les deux.",
      "Tick in each column. A word cannot be in both.",
    ),
    tag: t("Langage", "Language"),
  },
  {
    id: "deploy", offers: ["architecture"], type: "choice",
    label: t(
      "Aujourd'hui, où de meilleurs mots changeraient immédiatement votre chiffre d'affaires ?",
      "Today, where would better words immediately change your revenue?",
    ),
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
    id: "portrait_house", offers: ["architecture"], type: "textarea",
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
    tag: t("Identité visuelle", "Visual identity"),
  },
  {
    id: "outside_refs", offers: ["architecture"], type: "textarea", optional: true,
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
    id: "proof", offers: ["architecture"], type: "textarea",
    label: t(
      "Racontez une fois précise où quelqu'un a compris votre maison sans que vous ayez eu à l'expliquer.",
      "Tell me about one specific time someone understood your house without you having to explain it.",
    ),
    help: t("Ce qui s'est passé, ce qui a été dit.", "What happened, what was said."),
    ph: t("C'était le jour où...", "It was the day when..."),
    tag: t("Preuve", "Proof"),
  },
  {
    id: "headline", offers: ["architecture"], type: "textarea", optional: true,
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
    id: "portrait_founder", offers: ["architecture"], type: "textarea",
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
    options: q.options?.map((o) => pickText(o, lang)),
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
export function stepsForOffer(offer: OfferKey, lang: Lang, terrain?: TerrainKey): Question[] {
  return QUESTION_SOURCES.filter((q) => {
    if (!q.offers.includes(offer)) return false
    if (!q.terrains) return true
    return terrain ? q.terrains.includes(terrain) : false
  }).map((q) => localizeQuestion(q, lang))
}

/** Word bank chips, resolved. Kept separate: the UI renders them, not a question. */
export function wordsFor(lang: Lang): string[] {
  return WORDS.map((w) => pickText(w, lang))
}

export function isOfferKey(value: string): value is OfferKey {
  return value === "audit" || value === "architecture"
}
