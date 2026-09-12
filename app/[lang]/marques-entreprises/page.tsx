import type { Metadata } from "next"
import { TerrainPage, type TerrainCopy } from "@/components/terrain/terrain-page"

/**
 * BRAND — le terrain marques & entreprises.
 *
 * Même page que THE ROOM, au caractère près : même HTML, même CSS, même
 * JavaScript, donc le canvas bokeh, la tournée épinglée, le comparateur et
 * l'accordéon sont identiques. Seul le texte change, par surcharge du
 * dictionnaire.
 *
 * Les clés non surchargées héritent du texte de THE ROOM : ce sont celles
 * qui parlent du studio, du prix ou de la méthode, et qui sont vraies quel
 * que soit le terrain — c'est exactement ce que l'unification affirme.
 */

export const metadata: Metadata = {
  title: "BRAND — L'audit narratif pour les marques et les entreprises",
  description:
    "On vous compare au prix parce que rien ne dit qui vous êtes. L'audit narratif lit ce que votre marque raconte aujourd'hui et donne les mouvements qui la sortent du rayon.",
}

const COPY: TerrainCopy = {
  slug: "marques-entreprises",
  wordmark: "BRAND",
  fr: {
    "mq.1": "Marques",
    "mq.2": "Entreprises",
    "mq.3": "Studios",
    "mq.4": "Cabinets",
    "mq.5": "Éditeurs",
    "mq.6": "Ateliers",
    "hero.tag": "Votre offre tient. Votre récit, personne ne l'a écrit.",
    "man.eyebrow": "Le constat",
    "man.body": "Votre produit tient. Vos clients reviennent. <b>Et pourtant</b>, on vous demande un devis comparatif avant même de vous avoir écouté — parce que rien, dans ce que vous dites, ne dit ce que vous refusez. Pendant ce temps, un concurrent deux fois moins bon signe des contrats qui auraient dû être les vôtres. Il ne travaille pas mieux. <b>Il se raconte mieux.</b>",
    "man.body2": "Vous n'avez pas un problème de visibilité. Vous avez un problème de position. Une marque est déjà un récit — une origine, un refus, un ennemi, un langage. <b>Le vôtre n'a jamais été écrit.</b>",
    "focus.eyebrow": "La différence",
    "focus.title": "Communiquer, ou tenir une position.",
    "focus.lead": "La même marque, deux réalités. Prenez la poignée et tirez : à gauche on communique sans savoir quoi défendre, à droite la position est écrite et toute l'équipe la tient.",
    "focus.bad.tag": "Une marque qui communique",
    "focus.bad.big": "Chaque prise de parole repart de zéro. Personne ne sait ce qu'on revendique, ni ce qu'on refuse.",
    "focus.good.tag": "Une marque qui tient une position",
    "focus.good.big": "La position est écrite. N'importe qui dans l'équipe sait ce qu'on revendique et ce qu'on refuse. Tout se ressemble, sans se répéter.",
    "faq.title": "Ce que les dirigeants nous demandent.",
    "faq.1.q": "Pourquoi pas une agence au mois ?",
    "faq.1.a": "Parce qu'au bout de deux ans vous aurez payé environ 30 000 € sans rien garder. Ici vous payez 490 € une fois, et le document vous appartient.",
    "faq.2.q": "Qu'est-ce que je peux en faire seul ?",
    "faq.2.a": "Tout. Le document nomme les mouvements dans l'ordre, avec leur coût. Vous pouvez les appliquer sans nous — c'est même le but.",
    "faq.3.q": "Combien de temps ça prend, de mon côté ?",
    "faq.3.a": "Quelques heures en tout. Un questionnaire d'entrée, un échange avec vous, et la remise du document. Le reste du travail se fait sans vous mobiliser.",
    "faq.4.q": "Et si le diagnostic ne m'apprend rien ?",
    "faq.4.a": "C'est prévu. Le document est écrit pour être appliqué par quelqu'un qui n'était pas dans la conversation : ce qu'on revendique, ce qu'on refuse, avec quels mots. Aucune interprétation n'est laissée au lecteur.",
    "faq.5.q": "Qu'est-ce que je garde à la fin ?",
    "faq.5.a": "Le document entier, pour toujours. Votre diagnostic, la carte du champ, les mouvements hiérarchisés et ce qu'il faut cesser de dire.",
    "st.1.t": "Nous lisons ce que le marché lit.",
    "st.1.d": "Votre site, votre discours commercial, vos contenus, vos réseaux — et surtout ce que vos équipes racontent chacune de leur côté. La matière est déjà là ; personne ne l'a mise face à elle-même.",
    "st.1.b1": "Questionnaire d'entrée adapté à votre activité",
    "st.1.b2": "Lecture de tout ce qui vous représente",
    "st.2.t": "Nous cartographions le champ.",
    "st.2.d": "Trois à cinq concurrents directs, leur phrase exacte, et ce que chacun ose dire. C'est là qu'apparaît le terrain que personne n'occupe.",
    "st.2.b1": "Autopsie de la phrase de chaque concurrent",
    "st.2.b2": "Le mot que trois d'entre eux revendiquent",
    "st.2.b3": "Le terrain que personne n'occupe",
    "st.3.t": "Nous nommons ce que vous racontez.",
    "st.3.d": "Pas ce que vous croyez dire : ce que le marché en retient. L'écart explique pourquoi on négocie vos prix.",
    "st.3.b1": "La phrase qui porte, et celle qui vous range",
    "st.3.b2": "Le vocabulaire partagé sans le savoir",
    "st.3.b3": "Ce que votre prix dit avant vous",
    "st.4.t": "Nous donnons les mouvements.",
    "st.4.d": "Trois à cinq mouvements de repositionnement, dans l'ordre de priorité, avec ce que chacun coûte et ce qu'il débloque.",
    "st.4.b1": "Les mouvements à faire, dans l'ordre",
    "st.4.b2": "Ceux à refuser, et pourquoi",
    "st.4.b3": "Ce qu'il faut cesser de dire, et pourquoi",
    "st.5.t": "Nous vous laissons le document.",
    "st.5.d": "Vingt à trente pages, écrites à la main, à relire avec vos équipes autant de fois qu'il le faut.",
    "st.5.b1": "Un document relisable et transmissible",
    "st.5.b2": "Aucun abonnement, aucune dépendance",
    "st.title": "Sept à quatorze jours, cinq blocs.",
    "st.eyebrow": "L'audit",
    "st.hint": "Faites glisser",
    "price.b.d": "On lit votre marque comme le fait votre marché : ce qu'elle raconte aujourd'hui, ce qu'on en retient, et les mouvements qui changent ça. Un document de vingt à trente pages, livré en sept jours. Le même audit que pour un lieu ou un nom propre.",
    "who.title": "Le studio qui écrit votre marque.",
    "f.required": "Champ requis",
    "stat.3.l": "Seul document, pour toute la maison",
    "price.a.d": "Elle exécute à votre place. Elle sait ce que votre marque raconte, vous non. Au bout de deux ans : environ 30 000 € dépensés, et rien qui vous appartienne.",
    "price.after": "Ensuite, si vous voulez qu'on écrive la position complète et qu'on livre les vingt pièces qui permettent à vos équipes de la tenir : l'architecture narrative, 4 500 €.",
    "who.body2": "Pas d'équipe, pas de sous-traitance, pas d'intermédiaire. Ceux qui lisent votre marque sont ceux qui écrivent le document.",
    "cta.title": "Racontez-nous votre marque.",
    "cta.lead": "Vingt minutes suffisent pour savoir si votre marque a de quoi être écrite. Nous prenons peu de maisons à la fois, et nous répondons nous-mêmes.",
    "contact.title": "Votre marque a déjà tout. Écrivons-la.",
    "f.place": "Nom de la maison",
    "f.type": "Type d'activité",
    "f.opt.r": "Marque produit",
    "f.opt.b": "Entreprise de services",
    "f.opt.c": "Studio ou agence",
    "f.opt.cs": "Autre",
    "f.message": "Où en êtes-vous aujourd'hui, et qu'aimeriez-vous que le marché comprenne de vous ?",
    "foot.tagline": "On écrit ce que votre marque raconte, et on vous donne de quoi le tenir.",
    "nav.services": "L'audit",
  },
  en: {
    "mq.1": "Brands",
    "mq.3": "Studios",
    "mq.4": "Practices",
    "man.body": "Your product holds. Your customers come back. <b>And yet</b>, you get asked for a comparative quote before anyone has listened to you — because nothing you say says what you refuse. Meanwhile a competitor half as good signs contracts that should have been yours. They do not work better. <b>They tell it better.</b>",
    "man.body2": "You do not have a visibility problem. You have a position problem. A brand is already a story — an origin, a refusal, an enemy, a language. <b>Yours has never been written.</b>",
    "st.1.d": "Your site, your sales pitch, your content, your social presence — and above all what each of your teams says on its own. The material is already there; nobody has put it face to face with itself.",
    "st.1.b1": "An entry questionnaire matched to your business",
    "st.2.d": "Three to five direct competitors, their exact sentence, and what each one dares to say. That is where the unoccupied ground appears.",
    "st.2.b1": "An autopsy of each competitor's sentence",
    "st.4.d": "Three to five repositioning moves, in priority order, with what each one costs and what it unlocks.",
    "st.4.b3": "What to stop saying, and why",
    "price.b.d": "We read your brand the way your market does: what it says today, what people keep of it, and the moves that change that. A twenty to thirty page document, delivered in seven days. The same audit as for a venue or a name.",
    "who.title": "The studio that writes your brand.",
    "f.required": "Required field",
    "focus.lead": "The same brand, two realities. Take the handle and pull: on the left, communicating without knowing what to defend; on the right, the position is written and the whole team holds it.",
    "focus.bad.tag": "A brand that communicates",
    "focus.good.tag": "A brand that holds a position",
    "focus.good.big": "The position is written. Anyone on the team knows what you claim and what you refuse. Everything belongs together, without repeating itself.",
    "stat.3.l": "Single document, for the whole house",
    "price.a.d": "It executes in your place. It knows what your brand says, you do not. After two years: roughly 30,000 € spent, and nothing that belongs to you.",
    "price.after": "Then, if you want the full position written and the twenty pieces that let your teams hold it: the narrative architecture, 4,500 €.",
    "who.body2": "No team, no subcontracting, no middleman. The people who read your brand are the people who write the document.",
    "faq.3.a": "A few hours in total. An entry questionnaire, a conversation with you, and the delivery. The rest of the work happens without taking your time.",
    "faq.4.a": "That is accounted for. The document is written to be applied by someone who was not in the conversation: what you claim, what you refuse, in which words. Nothing is left to interpretation.",
    "cta.title": "Tell us about your brand.",
    "cta.lead": "Twenty minutes is enough to know whether your brand has something worth writing. We take on few houses at a time, and we answer ourselves.",
    "contact.title": "Your brand already has everything. Let's write it.",
    "f.place": "Name of the house",
    "f.type": "Type of business",
    "f.opt.r": "Product brand",
    "f.opt.b": "Service company",
    "f.opt.c": "Studio or agency",
    "f.opt.cs": "Other",
    "f.message": "Where are you today, and what would you like the market to understand about you?",
    "foot.tagline": "We write what your brand says, and hand you what you need to hold it.",
    "nav.services": "The audit",
    "hero.tag": "Your offer holds. Your story has never been written.",
  },
}

export default function BrandTerrainPage() {
  return <TerrainPage copy={COPY} />
}
