import type { Metadata } from "next"
import { TerrainPage, type TerrainCopy } from "@/components/terrain/terrain-page"

/**
 * THE NAME — le terrain artistes & fondateurs.
 *
 * Même page que THE ROOM et BRAND : même HTML, même CSS, même JavaScript.
 * Seul le dictionnaire change.
 *
 * Remplace l'ancienne page /artistes, qui portait la mise en page de
 * MOMENTUM — une charte de plus à maintenir, pour un terrain qui n'avait
 * aucune raison d'avoir la sienne.
 */

export const metadata: Metadata = {
  title: "THE NAME — L'audit narratif pour les artistes et les fondateurs",
  description:
    "Vos sorties ne s'additionnent pas. L'audit narratif dit ce que votre nom raconte aujourd'hui et donne les mouvements qui font tenir le fil.",
}

const COPY: TerrainCopy = {
  wordmark: "THE NAME",
  fr: {
    "hero.kicker": "Audit narratif · Artistes & fondateurs",
    "hero.tag": "On aime ce que vous faites sans savoir dire ce que vous êtes.",
    "mq.1": "Musiciens", "mq.2": "Réalisateurs", "mq.3": "Fondateurs",
    "mq.4": "Auteurs", "mq.5": "Photographes", "mq.6": "Créateurs",
    "man.eyebrow": "Le constat",
    "man.body": "Votre travail est bon. Les retours sont bons. <b>Et pourtant</b>, chaque sortie repart de zéro — parce que rien ne relie la précédente à la suivante dans la tête de ceux qui vous suivent. Pendant ce temps, quelqu'un de moins doué construit une audience qui l'attend. Il ne produit pas mieux. <b>Il se raconte mieux.</b>",
    "man.body2": "Vous n'avez pas un problème de production. Vous avez un problème de fil. Un nom porte déjà un récit — une origine, une obsession, un refus, une manière. <b>Le vôtre n'a jamais été écrit.</b>",
    "st.eyebrow": "L'audit",
    "st.title": "Sept jours, cinq blocs.",
    "st.1.t": "On lit tout ce que vous avez sorti.",
    "st.1.d": "Vos projets, vos textes, vos visuels, vos interviews — et ce que la presse retient de vous quand elle vous résume en une phrase. Le fil est déjà là ; personne ne l'a nommé.",
    "st.1.b1": "Questionnaire d'entrée adapté à votre pratique",
    "st.1.b2": "Lecture de vos sorties et de ce qu'on en dit",
    "st.2.t": "On cartographie votre zone.",
    "st.2.d": "Trois à cinq artistes à qui on vous compare, ou dont vous partagez le public. Pas vos influences : ceux qui occupent le terrain que vous visez, et la phrase avec laquelle ils l'occupent.",
    "st.2.b1": "Autopsie de la bio de chacun",
    "st.2.b2": "Ce que vous partagez sans le vouloir",
    "st.2.b3": "La place qui reste, et pourquoi elle est libre",
    "st.3.t": "On dit ce que votre nom raconte.",
    "st.3.d": "Pas ce que vous voulez qu'il raconte : ce que le public en retient. L'écart entre les deux explique en général pourquoi vos sorties ne s'additionnent pas.",
    "st.3.b1": "Le fil réel, sous vos projets",
    "st.3.b2": "Ce qui vous rend confondable",
    "st.3.b3": "Ce que votre bio dit avant vous",
    "st.4.t": "On donne les mouvements.",
    "st.4.d": "Trois à cinq mouvements, dans l'ordre de priorité, avec ce que chacun coûte et ce qu'il débloque. Et ceux à ne pas faire, avec la raison.",
    "st.4.b1": "Les mouvements à faire, hiérarchisés",
    "st.4.b2": "Ceux à refuser, et pourquoi",
    "who.title": "Le studio qui écrit votre nom.",
  },
  en: {
    "hero.kicker": "Narrative audit · Artists & founders",
    "hero.tag": "People like what you do without being able to say what you are.",
    "mq.1": "Musicians", "mq.2": "Directors", "mq.3": "Founders",
    "mq.4": "Writers", "mq.5": "Photographers", "mq.6": "Makers",
    "man.eyebrow": "The finding",
    "man.body": "Your work is good. The feedback is good. <b>And yet</b>, every release starts from zero — because nothing links the last one to the next in the minds of the people who follow you. Meanwhile someone less gifted is building an audience that waits for them. They do not make better work. <b>They tell it better.</b>",
    "man.body2": "You do not have a production problem. You have a thread problem. A name already carries a story — an origin, an obsession, a refusal, a way of doing things. <b>Yours has never been written.</b>",
    "st.eyebrow": "The audit",
    "st.title": "Seven days, five blocks.",
    "st.1.t": "We read everything you have put out.",
    "st.1.d": "Your projects, your writing, your visuals, your interviews — and what the press keeps of you when it sums you up in one line. The thread is already there; nobody has named it.",
    "st.1.b1": "An entry questionnaire matched to your practice",
    "st.1.b2": "A reading of your releases and what is said about them",
    "st.2.t": "We map your lane.",
    "st.2.d": "Three to five artists you get compared to, or whose audience you share. Not your influences: the ones holding the ground you are aiming at, and the sentence they hold it with.",
    "st.2.b1": "An autopsy of each of their bios",
    "st.2.b2": "What you share without meaning to",
    "st.2.b3": "The place left open, and why it is open",
    "st.3.t": "We state what your name says.",
    "st.3.d": "Not what you want it to say: what the audience keeps. The gap between the two usually explains why your releases do not add up.",
    "st.3.b1": "The real thread, under your projects",
    "st.3.b2": "What makes you mistakable for someone else",
    "st.3.b3": "What your bio says before you do",
    "st.4.t": "We hand over the moves.",
    "st.4.d": "Three to five moves, in priority order, with what each one costs and what it unlocks. And the ones not to make, with the reasoning.",
    "st.4.b1": "The moves to make, ranked",
    "st.4.b2": "The ones to refuse, and why",
    "who.title": "The studio that writes your name.",
  },
}

export default function NameTerrainPage() {
  return <TerrainPage copy={COPY} />
}
