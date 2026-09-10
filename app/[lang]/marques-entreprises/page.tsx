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
  wordmark: "BRAND",
  fr: {
    "hero.kicker": "Audit narratif · Marques & entreprises",
    "hero.tag": "Votre offre tient. Votre récit, personne ne l'a écrit.",
    "mq.1": "Marques", "mq.2": "Entreprises", "mq.3": "Studios",
    "mq.4": "Cabinets", "mq.5": "Éditeurs", "mq.6": "Ateliers",
    "man.eyebrow": "Le constat",
    "man.body": "Votre produit tient. Vos clients reviennent. <b>Et pourtant</b>, on vous demande un devis comparatif avant même de vous avoir écouté — parce que rien, dans ce que vous dites, ne dit ce que vous refusez. Pendant ce temps, un concurrent deux fois moins bon signe des contrats qui auraient dû être les vôtres. Il ne travaille pas mieux. <b>Il se raconte mieux.</b>",
    "man.body2": "Vous n'avez pas un problème de visibilité. Vous avez un problème de position. Une marque est déjà un récit — une origine, un refus, un ennemi, un langage. <b>Le vôtre n'a jamais été écrit.</b>",
    "st.eyebrow": "L'audit",
    "st.title": "Sept jours, cinq blocs.",
    "st.1.t": "On lit ce que le marché lit.",
    "st.1.d": "Votre site, votre discours commercial, vos contenus, vos réseaux — et surtout ce que vos équipes racontent chacune de leur côté. La matière est déjà là ; personne ne l'a mise face à elle-même.",
    "st.1.b1": "Questionnaire d'entrée adapté à votre terrain",
    "st.1.b2": "Lecture de tout ce qui vous représente aujourd'hui",
    "st.2.t": "On cartographie le champ.",
    "st.2.d": "Trois à cinq concurrents directs, leur phrase exacte, et ce que chacun ose dire. C'est là qu'apparaît le terrain que personne n'occupe — et c'est presque toujours celui que vous teniez déjà sans le nommer.",
    "st.2.b1": "Autopsie de la phrase de chaque concurrent",
    "st.2.b2": "Le mot que trois d'entre eux revendiquent déjà",
    "st.2.b3": "Le quadrant vide, et pourquoi il est vide",
    "st.3.t": "On dit ce que vous racontez vraiment.",
    "st.3.d": "Pas ce que vous croyez dire : ce que le marché en entend. L'écart entre les deux est en général la raison exacte pour laquelle on négocie vos prix.",
    "st.3.b1": "La phrase qui porte, et celle qui vous range",
    "st.3.b2": "Le vocabulaire que vous partagez sans le savoir",
    "st.3.b3": "Ce que votre prix dit avant vous",
    "st.4.t": "On donne les mouvements.",
    "st.4.d": "Trois à cinq mouvements de repositionnement, dans l'ordre de priorité, avec ce que chacun coûte et ce qu'il débloque. Et ceux à ne pas faire, avec la raison.",
    "st.4.b1": "Les mouvements à faire, hiérarchisés",
    "st.4.b2": "Ceux à refuser, et pourquoi",
    "who.title": "Le studio qui écrit votre marque.",
  },
  en: {
    "hero.kicker": "Narrative audit · Brands & companies",
    "hero.tag": "Your offer holds. Your story has never been written.",
    "mq.1": "Brands", "mq.2": "Companies", "mq.3": "Studios",
    "mq.4": "Practices", "mq.5": "Publishers", "mq.6": "Workshops",
    "man.eyebrow": "The finding",
    "man.body": "Your product holds. Your customers come back. <b>And yet</b>, you get asked for a comparative quote before anyone has listened to you — because nothing you say says what you refuse. Meanwhile a competitor half as good signs contracts that should have been yours. They do not work better. <b>They tell it better.</b>",
    "man.body2": "You do not have a visibility problem. You have a position problem. A brand is already a story — an origin, a refusal, an enemy, a language. <b>Yours has never been written.</b>",
    "st.eyebrow": "The audit",
    "st.title": "Seven days, five blocks.",
    "st.1.t": "We read what the market reads.",
    "st.1.d": "Your site, your sales pitch, your content, your social presence — and above all what each of your teams says on its own. The material is already there; nobody has put it face to face with itself.",
    "st.1.b1": "An entry questionnaire matched to your ground",
    "st.1.b2": "A reading of everything that represents you today",
    "st.2.t": "We map the field.",
    "st.2.d": "Three to five direct competitors, their exact sentence, and what each one dares to say. That is where the unoccupied ground appears — and it is almost always the one you already held without naming it.",
    "st.2.b1": "An autopsy of each competitor's sentence",
    "st.2.b2": "The word three of them already claim",
    "st.2.b3": "The empty quadrant, and why it is empty",
    "st.3.t": "We state what you actually say.",
    "st.3.d": "Not what you think you say: what the market hears. The gap between the two is usually the exact reason your prices get negotiated.",
    "st.3.b1": "The sentence that carries, and the one that files you",
    "st.3.b2": "The vocabulary you share without knowing it",
    "st.3.b3": "What your price says before you do",
    "st.4.t": "We hand over the moves.",
    "st.4.d": "Three to five repositioning moves, in priority order, with what each one costs and what it unlocks. And the ones not to make, with the reasoning.",
    "st.4.b1": "The moves to make, ranked",
    "st.4.b2": "The ones to refuse, and why",
    "who.title": "The studio that writes your brand.",
  },
}

export default function BrandTerrainPage() {
  return <TerrainPage copy={COPY} />
}
