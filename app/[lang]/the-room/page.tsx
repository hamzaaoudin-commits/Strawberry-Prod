import type { Metadata } from "next"
import { TerrainPage, type TerrainCopy } from "@/components/terrain/terrain-page"

/**
 * THE ROOM — le terrain lieux.
 *
 * Cette page passe désormais par le même gabarit que les trois autres,
 * alors qu'elle avait jusqu'ici sa propre copie du HTML. Les deux fichiers
 * devaient être modifiés en parallèle à chaque changement, et l'un des deux
 * finissait toujours par être oublié — le retrait de la tournée a dû être
 * fait deux fois pour cette raison.
 *
 * Aucune surcharge de texte : le dictionnaire d'origine parle déjà des
 * lieux, puisque c'est le site dont tout vient. Les trois autres terrains
 * sont ceux qui surchargent.
 */

export const metadata: Metadata = {
  title: "THE ROOM — L'architecture narrative pour les lieux",
  description:
    "La salle est pleine et pourtant chaque publication repart de zéro. L'architecture narrative dit ce que votre lieu raconte aujourd'hui et donne les mouvements qui changent ça.",
}

const COPY: TerrainCopy = {
  slug: "the-room",
  wordmark: "THE ROOM",
  fr: {
    "for.yes.1": "Vous tenez un lieu ouvert : restaurant, bar, club, café, cave ou rooftop.",
    "for.no.1": "Vous cherchez quelqu'un qui publie à votre place.",
    "for.yes.2": "La salle est pleine, vos habitués reviennent, mais chaque publication repart de zéro.",
    "for.no.2": "Votre lieu n'existe pas encore : il n'y a rien à lire.",
    "for.yes.3": "Vous voulez un document que votre équipe applique, même quand elle change.",
    "for.no.3": "Vous voulez refaire le décor ou la carte avant de savoir ce que le lieu raconte.",
    "faq.1.q": "Pourquoi ne pas simplement prendre une agence au mois ?",
    "faq.1.a": "Parce qu'au bout de deux ans vous aurez payé environ 30 000 € et vous n'aurez rien gardé. Ici vous payez une fois, et vous repartez avec le système. Si nous nous quittons demain, il continue de fonctionner sans nous.",
    "faq.2.q": "Mon équipe tourne beaucoup, ça sert à quoi ?",
    "faq.2.a": "C'est justement pour ça. Les playbooks sont écrits pour être appliqués par quelqu'un arrivé la semaine dernière : quoi filmer et à quelle heure, quoi répondre à un avis, le trait disqualifiant en essai. Le document ne dépend pas de qui est en salle ce soir.",
    "faq.3.q": "J'ai plusieurs adresses, ou un lieu et une marque ?",
    "faq.3.a": "C'est fréquent. La méthode, le prix et le délai ne changent pas : l'Architecture porte sur l'univers que vos adresses partagent, et le diagnostic se concentre sur celle qui porte le plus de chiffre. Dites-nous dans le questionnaire ce que vous avez. Si vos adresses n'ont rien en commun, écrivez-nous avant de commander.",
    "faq.7.q": "Et si le diagnostic ne m'apprend rien ?",
    "faq.7.a": "Alors nous vous le disons, et c'est une réponse en soi : votre récit tient, ne le touchez pas. Ça arrive rarement : en général, ce que le fondateur croit évident n'apparaît nulle part dans ce qu'il publie, et c'est précisément l'écart que le document mesure. Mais si le diagnostic conclut « ne changez rien », vous aurez économisé la refonte que vous envisagiez, ce qui coûte bien plus que 2 900 €.",
    "faq.8.q": "Qu'est-ce que je garde à la fin ?",
    "faq.8.a": "Tout, sans abonnement. Le document est à vous, avec un droit d'usage commercial illimité et perpétuel : le monde de votre lieu écrit, les playbooks que votre équipe applique, les réponses aux avis, et le bloc à coller dans votre outil IA. Votre équipe l'applique sans nous.",
    "cta.lead": "2 900 €, livré en trois semaines, ou remboursé. Un document écrit pour votre lieu, à vous pour toujours.",
  },
  en: {
    "for.yes.1": "You run an open venue: restaurant, bar, club, café, wine shop or rooftop.",
    "for.no.1": "You are looking for someone to post on your behalf.",
    "for.yes.2": "The room is full and your regulars come back, but every post starts from zero.",
    "for.no.2": "Your venue does not exist yet: there is nothing to read.",
    "for.yes.3": "You want a document your team applies, even as the team changes.",
    "for.no.3": "You want to redo the decor or the menu before knowing what the venue says.",
    "faq.1.q": "Why not just hire a monthly agency?",
    "faq.1.a": "Because after two years you will have paid around €30,000 and kept nothing. Here you pay once, and you walk away with the system. If we part ways tomorrow, it keeps working without us.",
    "faq.2.q": "My team turns over a lot. What good is this?",
    "faq.2.a": "That is exactly why. The playbooks are written to be applied by someone who started last week: what to film and at what hour, what to reply to a review, the disqualifying trait during a trial shift. The document does not depend on who is on the floor tonight.",
    "faq.3.q": "I have several venues, or a venue and a brand.",
    "faq.3.a": "That is common. The method, the price and the deadline do not change: the Architecture covers the universe your venues share, and the diagnosis concentrates on the one that carries the most revenue. Tell us in the questionnaire what you have. If your venues have nothing in common, write to us before ordering.",
    "faq.7.q": "What if the diagnosis teaches me nothing?",
    "faq.7.a": "Then we tell you so, and that is an answer in itself: your story holds, leave it alone. It happens rarely: usually what a founder finds obvious appears nowhere in what they publish, and that gap is exactly what the document measures. But if the diagnosis concludes « change nothing », you will have saved the rebuild you were considering, which costs far more than €2,900.",
    "faq.8.q": "What do I keep at the end?",
    "faq.8.a": "Everything, with no subscription. The document is yours, with unlimited and perpetual commercial use: the world of your venue written, the playbooks your team applies, the replies to reviews, and the block to paste into your AI tool. Your team applies it without us.",
    "cta.lead": "€2,900, delivered in three weeks, or refunded. A document written for your venue, yours for good.",
  },
}

export default function RoomTerrainPage() {
  return <TerrainPage copy={COPY} />
}
