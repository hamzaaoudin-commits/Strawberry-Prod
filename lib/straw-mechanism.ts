/**
 * S.T.R.A.W. — le mécanisme propriétaire du studio, avec tous les livrables
 * rangés par catégorie.
 *
 * Une seule source pour la home (components/strawberry/straw-mechanism.tsx,
 * en React) et pour les quatre pages de terrain (lib/straw-html.ts, en HTML) :
 * les deux ne peuvent pas diverger.
 *
 * Les cinq catégories sont les cinq étapes de la méthode (voir la page
 * Méthode). Les six pièces de l'offre y sont rangées ainsi :
 *   S  Soul          → 01 La plateforme
 *   T  Territory     → 02 Le diagnostic
 *   R  Reframe       → 03 La carte
 *   A  Architecture  → 04 Les décisions
 *   W  Weaponize     → 05 Les playbooks et 06 Le langage
 * Les livrables sont repris mot pour mot de l'ancienne « tournée » : rien
 * n'est ajouté, rien n'est retiré, sauf les deux arguments de vente de la
 * plateforme, devenus la note de la pièce 01.
 */

export type StrawLang = "fr" | "en"

export type StrawPiece = { n: number; title: string; line: string; note: string; items: string[] }
export type StrawStage = { letter: string; name: string; gloss: string; verb: string; pieces: StrawPiece[] }
export type StrawCopy = { eyebrow: string; title: string; lead: string; piece: string; stages: StrawStage[] }

export const STRAW: Record<StrawLang, StrawCopy> = {
  fr: {
    eyebrow: "S.T.R.A.W. · Le mécanisme propriétaire du studio",
    title: "Cinq étapes. Six pièces.",
    lead: "Chaque commande traverse les mêmes cinq étapes, dans l'ordre. Chacune produit ses livrables : voici toutes les pièces, rangées par étape.",
    piece: "Pièce",
    stages: [
      {
        letter: "S", name: "Soul", gloss: "L'âme", verb: "Trouver l'âme.",
        pieces: [
          {
            n: 1, title: "LA PLATEFORME",
            line: "Raison d'être, positionnement, valeurs, personnalité, ton de voix.",
            note: "Exactement ce qu'une agence facture entre 10 000 et 40 000 € — et ce par quoi nous commençons. Écrite à partir de ce que vous publiez déjà, pas d'un atelier où vous parlez pendant trois heures.",
            items: [
              "Trois partis pris écrits en refus — ce que vous refusez, jamais ce que vous prétendez être",
              "La constitution de la maison, par écrit : ce que vous répondez quand on vous demande ce que vous faites",
              "Le récit fondateur, en deux cent cinquante mots — pas un de plus",
            ],
          },
        ],
      },
      {
        letter: "T", name: "Territory", gloss: "Le territoire", verb: "Cartographier le territoire.",
        pieces: [
          {
            n: 2, title: "LE DIAGNOSTIC",
            line: "Vos supports dépouillés un par un, les occurrences comptées, les écarts relevés.",
            note: "",
            items: [
              "Site, plaquette, discours commercial, emballage, fiche Google, avis clients — selon votre terrain",
              "Les contradictions entre deux de vos propres pages, celles que vous ne pouvez pas voir seul",
              "Ce que vous avez dit d'évident dans le questionnaire et qui n'apparaît nulle part dans vos supports",
              "Quatre segments d'audience, un langage pour chacun — sans jamais changer de position",
            ],
          },
        ],
      },
      {
        letter: "R", name: "Reframe", gloss: "Le recadrage", verb: "Recadrer le champ.",
        pieces: [
          {
            n: 3, title: "LA CARTE",
            line: "3 à 5 concurrents, leur phrase exacte citée, et le terrain qu'ils laissent libre.",
            note: "",
            items: [
              "Le mot que trois d'entre eux revendiquent déjà, et que vous devez cesser d'employer",
              "Celui que vous êtes seul à pouvoir tenir, avec la preuve que personne ne l'occupe",
              "Ce qui leur est structurellement indisponible — ce qu'ils ne pourraient pas copier même s'ils le voulaient",
              "Une fiche par concurrent, disséquée une par une",
              "Deux axes qui révèlent ce que les axes de votre catégorie cachent",
            ],
          },
        ],
      },
      {
        letter: "A", name: "Architecture", gloss: "L'architecture", verb: "Bâtir l'architecture.",
        pieces: [
          {
            n: 4, title: "LES DÉCISIONS",
            line: "3 à 5 mouvements ordonnés : la formulation exacte, où la mettre, ce qu'elle coûte.",
            note: "",
            items: [
              "Chacun chiffré : ce qu'il fait gagner, et ce qu'il vous fait perdre — nommé, pas caché",
              "Dans l'ordre, avec ce qu'il faut faire avant toute refonte visuelle",
              "Le premier mouvement — celui qui se fait dès demain et qui rend les suivants possibles",
              "Les quatre-vingt-dix premiers jours de déploiement, dans l'ordre",
              "Le brief remis à votre designer — écrit pour quelqu'un qui réfléchit, pas pour quelqu'un qui devine",
            ],
          },
        ],
      },
      {
        letter: "W", name: "Weaponize", gloss: "L'incarnation", verb: "Incarner l'univers.",
        pieces: [
          {
            n: 5, title: "LES PLAYBOOKS",
            line: "Ce que vos équipes font au quotidien : marketing, contenu, réseaux, vente, support, RH.",
            note: "",
            items: [
              "Marketing — vos équipes arrêtent de deviner ce que la maison refuserait",
              "Contenu — toute personne qui écrit pour vous sonne comme vous",
              "Réseaux — le ton par plateforme, le rythme, comment répondre sans se contredire",
              "Vente — vos commerciaux répondent aux objections avec vos mots, pas les leurs",
              "Support — un client en colère lit la même maison qu'un client satisfait",
              "RH — un nouvel employé comprend qui vous êtes dès sa première semaine",
              "Tarifaire — le prix comme doctrine, pas comme un chiffre, avec une raison à donner quand vous l'augmentez",
              "Cohérence — le guide qui vous permet de trancher seul, sans nous rappeler",
            ],
          },
          {
            n: 6, title: "LE LANGAGE",
            line: "Le lexique et les textes réécrits, prêts à coller.",
            note: "",
            items: [
              "Les mots à employer, ceux à cesser d'employer, et pourquoi — pour toute la maison",
              "Utilisables tels quels par vos équipes comme par votre outil IA : c'est écrit pour ça",
              "Un bloc à coller dans n'importe quel modèle de langage pour qu'il écrive dans votre voix — position, refus, mots interdits",
              "Quatre formats de biographie, une seule ligne de rupture",
              "La pièce signature — un essai publiable en l'état, qui ne ressemble à personne",
            ],
          },
        ],
      },
    ],
  },
  en: {
    eyebrow: "S.T.R.A.W. · The studio's proprietary mechanism",
    title: "Five stages. Six pieces.",
    lead: "Every commission goes through the same five stages, in order. Each one produces its deliverables: here are all the pieces, filed by stage.",
    piece: "Piece",
    stages: [
      {
        letter: "S", name: "Soul", gloss: "The soul", verb: "Find the soul.",
        pieces: [
          {
            n: 1, title: "THE PLATFORM",
            line: "Purpose, positioning, values, personality, tone of voice.",
            note: "Exactly what an agency charges €10,000 to €40,000 for — and where we start. Written from what you already publish, not from a workshop where you talk for three hours.",
            items: [
              "Three convictions written as refusals — what you refuse, never what you claim to be",
              "The house's constitution, in writing: what you answer when someone asks what you do",
              "The origin story, in two hundred and fifty words — not one more",
            ],
          },
        ],
      },
      {
        letter: "T", name: "Territory", gloss: "The territory", verb: "Map the territory.",
        pieces: [
          {
            n: 2, title: "THE DIAGNOSIS",
            line: "Your supports gone through one by one, occurrences counted, gaps recorded.",
            note: "",
            items: [
              "Site, brochure, sales pitch, packaging, Google listing, reviews — depending on your ground",
              "The contradictions between two of your own pages, the ones you cannot see alone",
              "What you called obvious in the questionnaire and that appears nowhere in your own supports",
              "Four audience segments, one language for each — without ever changing position",
            ],
          },
        ],
      },
      {
        letter: "R", name: "Reframe", gloss: "The reframe", verb: "Reframe the field.",
        pieces: [
          {
            n: 3, title: "THE MAP",
            line: "3 to 5 competitors, their exact sentence quoted, and the ground they leave open.",
            note: "",
            items: [
              "The word three of them already claim, and that you must stop using",
              "The one only you can hold, with the proof that nobody occupies it",
              "What is structurally unavailable to them — what they could not copy even if they wanted to",
              "One sheet per competitor, dissected individually",
              "Two axes that reveal what your category's axes hide",
            ],
          },
        ],
      },
      {
        letter: "A", name: "Architecture", gloss: "The architecture", verb: "Build the architecture.",
        pieces: [
          {
            n: 4, title: "THE DECISIONS",
            line: "3 to 5 ordered moves: the exact wording, where to put it, what it costs.",
            note: "",
            items: [
              "Each one measured: what it gains and what it loses you — named, not hidden",
              "In order, with what to do before any visual rebrand",
              "The first move — the one you can make tomorrow, the one that makes the rest possible",
              "The first ninety days of deployment, in order",
              "The brief handed to your designer — written for someone who thinks, not someone who guesses",
            ],
          },
        ],
      },
      {
        letter: "W", name: "Weaponize", gloss: "The embodiment", verb: "Embody the universe.",
        pieces: [
          {
            n: 5, title: "THE PLAYBOOKS",
            line: "What your teams do day to day: marketing, content, social, sales, support, HR.",
            note: "",
            items: [
              "Marketing — your teams stop guessing which ideas the house would refuse",
              "Content — anyone who writes for you sounds like you",
              "Social — tone by platform, posting rhythm, how to answer without contradicting yourself",
              "Sales — your team answers objections with your own words, not theirs",
              "Support — an angry customer reads the same house as a happy one",
              "HR — a new hire understands who you are in their first week",
              "Pricing — price as doctrine, not a number, with a reason to give when you raise it",
              "Coherence — the guide that lets you settle questions alone, without calling us back",
            ],
          },
          {
            n: 6, title: "THE LANGUAGE",
            line: "The lexicon and the rewritten copy, ready to paste.",
            note: "",
            items: [
              "Words to use, words to stop using, and why — for the whole house",
              "Usable as they are by your teams and by your AI tool: that is what they are written for",
              "A block to paste into any language model so it writes in your voice — position, refusals, banned words",
              "Four biography formats, one single break",
              "The signature piece — an essay publishable as it stands, that resembles nobody",
            ],
          },
        ],
      },
    ],
  },
}
