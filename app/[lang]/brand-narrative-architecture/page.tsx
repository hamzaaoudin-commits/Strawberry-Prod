"use client"

import { useEffect, useRef, useState } from "react"
import { LocaleLink as Link } from "@/components/locale-link"
import { track } from "@vercel/analytics"
import { useT, useLang } from "@/lib/i18n"
import { FaqSection } from "@/components/strawberry/faq-section"
import { FAQ_AUDIT } from "@/lib/faqs"
import { BackHomeButton } from "@/components/strawberry/back-home-button"
import { SillageSection } from "@/components/strawberry/sillage-section"
import { FloatingSectionPill } from "@/components/strawberry/floating-section-pill"
import { SectionDivider } from "@/components/strawberry/section-divider"
import { STRIPE_LINKS } from "@/lib/config"


const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

/**
 * Le paiement passe désormais par la page de commande : récapitulatif, suite
 * annoncée sous 24 heures, garantie rappelée, choix une fois ou trois fois.
 * Un lien Stripe nu au moment où la carte sort est l'endroit du parcours où le
 * site se taisait.
 */
/**
 * Le paiement s'ouvre directement au clic, sans page intermédiaire — c'est le
 * choix explicite du studio : pas de récapitulatif entre l'intention d'achat
 * et Stripe.
 */
const ORDER_URL = STRIPE_LINKS.architecture



const T = {
  en: {
    badge: "Brand Narrative Architecture \u00b7 4,500\u20ac",
    h1a: "The brand story that makes you",
    h1b: "impossible to confuse \u2014",
    h1c: "and impossible to generate.",
    heroLead: "The identity, position, and language that make you recognizable at first glance \u2014 and impossible to confuse with your competitors, even when they arm themselves with AI.",
    heroCta: "Place your commission \u2192",
    ctxP1: "AI is saturating your market faster than you see it. Your competitors now produce in one click what took weeks: articles, visuals, pages, campaigns. Content becomes free, infinite, and perfectly interchangeable. In that noise, quality is no longer enough to set you apart \u2014 everyone has become good.",
    ctxP2: "What cannot be generated is an identity. Differentiation is no longer a marketing luxury \u2014 it is your condition for survival.",
    lWhy: "Why now",
    lHuman: "Why a human",
    lBuild: "What we build",
    lHow: "How it happens",
    lReceive: "What you receive",
    lInside: "Inside the architecture",
    lProof: "How we will know it worked",
    lAlso: "What you also receive",
    lInvest: "The investment",
    pactH2: "The AI-proof pact.",
    pactLead: "What makes a house unforgettable is no longer the document. It is who refused to write it like everyone else.",
    pactQuote: "When everyone has access to the same machine, the only edge left is the one a human refuses to share.",
    offerP1: "We build the story that makes your brand recognizable at first glance and impossible to confuse with your competitors \u2014 even when they arm themselves with AI. Not a surface slogan: the identity, position, and language that make people remember you, cite you, and choose you, even when the offer across the table costs less.",
    offerH3: "It begins with an extraction no one can automate.",
    offerP2: "We make you talk, at length, to reach what makes you genuinely singular \u2014 often what you no longer see because you are inside it. This human material, your truth, becomes the foundation. No AI can produce it, because it has not lived you.",
    offerP3a: "From that extraction, the work follows a refined process \u2014 ",
    offerP3b: " \u2014 five stages sharpened commission after commission. Each stage produces the artifacts you receive below.",
    methodCta: "See the method \u2192",
    sampleH2: "Read a complete document before you commission.",
    sampleP: "A complete commission, published in the open \u2014 read exactly how we write, before you commission your own.",
    sampleCta: "Read the SILLAGE document \u2192",
    sampleBadge: "Read before you commission",
    sampleMeta: "Fourteen parts \u00b7 Free \u00b7 No email required",
    delivH2: "Five deliverables. Exploitable Monday.",
    glimpseH2: "A glimpse of the artifact.",
    glimpseLead: "Delivered as a single editorial document, designed to be read like a manifesto and consulted like a constitution. Below, the work itself \u2014 page by page.",
    sommaireH3: "All twenty parts, without exception.",
    sommaireLead: "The previews above show four acts. Here is the full table of contents of the document you receive \u2014 nothing is optional, nothing is billed on top.",
    sommaire: [
      ["Differentiation diagnostic", "The narrative field, dissected."],
      ["Narrative platform", "The constitution of the house."],
      ["Language system", "The vocabulary, yours, the daily tests."],
      ["Deployment kit", "The first ninety days."],
      ["Coherence guide", "Written for the founder, not for the team."],
      ["Pricing narrative", "Price as doctrine."],
      ["Biography system", "Four formats, one single break."],
      ["Competitor autopsy", "One sheet per player in the market."],
      ["The signature piece", "An essay publishable as it stands."],
      ["Origin manifesto", "Two hundred and fifty words exactly."],
      ["Investor and partner translation", "The same story, for whoever is judging a bet."],
      ["Visual identity brief", "Written for a designer who thinks."],
      ["Positioning map", "Two axes that reveal what category axes hide."],
      ["Audience intelligence report", "Four segments, one language per segment."],
      ["Marketing playbook", "Angles to explore, angles to refuse."],
      ["Content playbook", "The voice, turned into rules anyone can follow."],
      ["Social media playbook", "Tone by platform, rhythm, and how to answer comments."],
      ["Sales playbook", "How to present the house and defuse objections."],
      ["Support playbook", "How to stay on-voice in sensitive situations."],
      ["HR & management playbook", "The culture, retranslated to guide decisions."],
    ],
    glimpseNote: "Stylized previews \u00b7 Final document delivered as PDF",
    actLabel: "Act",
    acts: ["The Frame", "The Identity", "The Deployment", "The Signature"],
    measureH2: "Remarkable is measurable.",
    measureLead: "Before we start, we note together how you would describe today what sets you apart \u2014 usually it is vague, and sounds like what the others would say. A few months later, we look at what changed.",
    alsoH2: "Beyond the document.",
    investLead: "The price of a few weeks of advertising that vanishes the moment you stop paying. Your narrative, by contrast, belongs to you and works for you continuously.",
    ctaH2: "Become impossible to confuse.",
    cta: "Place your commission \u2192",
    ctaLimit: "Limited to four commissions per quarter.",
    ctaFoot: "Confidential commission \u00b7 NDA available",
    price: "4,500\u20ac",
    deliverables: [
      { title: "The Differentiation Diagnostic", body: "An analysis of your narrative competitive field: what your 5-6 direct competitors say, the words and promises they all share, and a map of the territories already saturated. You see in black and white why you all sound alike \u2014 and the open ground no one occupies, that you will take." },
      { title: "The Narrative Platform", body: "Your unique position written as one defensible sentence. Your brand story structured \u2014 origin, fight, vision. And your 3-4 message pillars: the ideas you will hammer until people associate them with you instinctively." },
      { title: "The Language System", body: "Your tone of voice described with precision. Your lexicon: the words that belong to you, and the forbidden list \u2014 your competitors' words \u2014 so you never sound like them. With before/after examples drawn from your own communications." },
      { title: "The Deployment Kit", body: "The part you use the Monday after. Ready-to-use copy, not abstract recommendations: a rewrite of your homepage (headline, subhead, key sections); your presentation line in three formats (one line / one paragraph / 30-second pitch); 10 to 15 speaking angles ready to turn into posts, articles or newsletters, each tied to one of your pillars; a reusable bio and company description." },
      { title: "The Coherence Guide", body: "A short document that lets anyone on your team write in your voice without consulting you: rules, examples, do/don't. Your identity holds, even when you are not the one writing." },
    ],
    pact: [
      { title: "Anyone can prompt 45 pages in three minutes.", body: "Most do. The result reads like every other brand document. This is what happens when a human spends weeks listening, refusing, and choosing \u2014 when the goal is not to be produced, but to be unforgettable. The AI can write a brand document. It cannot decide which sentence deserves to be torn out." },
      { title: "Written once. For you only.", body: "Each brand is built from scratch. The narrative we write for your house will never appear \u2014 not adapted, not echoed, not inspired by \u2014 in another commission. AI recycles. We do not." },
      { title: "From Paris. By inheritance.", body: "This studio operates from Paris \u2014 heir to a French school of narrative precision. Barthes. Foucault. Pivot. Beigbeder. A culture where what is not said matters as much as what is. Where a sentence is rewritten until nothing can be removed." },
      { title: "Four commissions per quarter. No more.", body: "Not a sales tactic \u2014 a structural choice. AI scales infinitely. We do not. Four houses per quarter, written by hand. If you commission this work, you receive something built only for you, by someone whose attention is rationed by design." },
    ],
    alsoReceive: [
      { label: "The Object", title: "The artifact, optionally bound.", body: "On request, the work is printed, hand-bound, and signed. A single numbered edition for your house. Delivered to your office or your home. The PDF is for working. The bound edition is for keeping." },
    ],
    successSignals: [
      "You are cited as a reference, not just another option",
      "People come to you, instead of you chasing them",
      "You hold your prices without negotiating them down",
      "People start repeating your own words back to you",
    ],
    mockups: {
      actI: [
        { label: "The Cover", caption: "A numbered edition. Your house, given its name." },
        { label: "The Dedication", caption: "The opening invocation. The reason this document exists." },
        { label: "The Index", caption: "Five deliverables, one signature. The architecture, declared." },
      ],
      actII: [
        { label: "The Differentiation Diagnostic", caption: "The narrative field, with the ground no one occupies located." },
        { label: "The Narrative Platform", caption: "Your position, your story, your pillars \u2014 articulated." },
        { label: "The Origin Story", caption: "The rupture before. The conviction after. Named with precision." },
        { label: "The Manifesto", caption: "A single page. The doctrine, made unforgettable." },
        { label: "The Language System", caption: "Your words. The forbidden ones. Before and after." },
      ],
      actIII: [
        { label: "The Deployment Kit", caption: "Speaking angles by pillar. Ready the Monday after." },
        { label: "The Coherence Guide", caption: "One voice, any hand. Your identity holds without you." },
      ],
      actIV: [
        { label: "The Signature Page", caption: "Numbered. Dated. Signed. A document built to be kept." },
      ],
    },
  },
  fr: {
    badge: "Brand Narrative Architecture \u00b7 4 500\u20ac",
    h1a: "Le r\u00e9cit de marque qui vous rend",
    h1b: "impossible \u00e0 confondre \u2014",
    h1c: "et impossible \u00e0 g\u00e9n\u00e9rer.",
    heroLead: "L'identit\u00e9, la position et le langage qui vous rendent reconnaissable au premier regard \u2014 et impossible \u00e0 confondre avec vos concurrents, m\u00eame arm\u00e9s d'IA.",
    heroCta: "Passer commande \u2192",
    ctxP1: "L'IA sature votre march\u00e9 plus vite que vous ne le voyez. Vos concurrents produisent d\u00e9sormais en un clic ce qui demandait des semaines : articles, visuels, pages, campagnes. Le contenu devient gratuit, infini et parfaitement interchangeable. Dans ce bruit, la qualit\u00e9 ne suffit plus \u00e0 vous distinguer : tout le monde est devenu bon.",
    ctxP2: "Ce qui ne peut pas \u00eatre g\u00e9n\u00e9r\u00e9, c'est une identit\u00e9. La diff\u00e9renciation n'est plus un luxe marketing \u2014 c'est votre condition de survie.",
    lWhy: "Pourquoi maintenant",
    lHuman: "Pourquoi un humain",
    lBuild: "Ce que nous bâtissons",
    lHow: "Comment cela se passe",
    lReceive: "Ce que vous recevez",
    lInside: "Dans l'architecture",
    lProof: "Comment nous saurons que ça a marché",
    lAlso: "Ce que vous recevez aussi",
    lInvest: "L'investissement",
    pactH2: "Le pacte anti-IA.",
    pactLead: "Ce qui rend une maison inoubliable, ce n'est plus le document. C'est celui qui a refus\u00e9 de l'\u00e9crire comme tout le monde.",
    pactQuote: "Quand tout le monde a acc\u00e8s \u00e0 la m\u00eame machine, le seul avantage restant est celui qu'un humain refuse de partager.",
    offerP1: "Nous b\u00e2tissons le r\u00e9cit qui rend votre marque reconnaissable au premier regard et impossible \u00e0 confondre avec vos concurrents \u2014 m\u00eame arm\u00e9s d'IA. Pas un slogan de surface : l'identit\u00e9, la position et le langage qui font qu'on se souvient de vous, qu'on vous cite et qu'on vous choisit, m\u00eame quand l'offre d'en face co\u00fbte moins cher.",
    offerH3: "Tout commence par une extraction que personne ne peut automatiser.",
    offerP2: "Nous vous faisons parler, longuement, jusqu'\u00e0 ce que sorte une phrase que vous n'aviez jamais dite \u00e0 voix haute. C'est presque toujours l\u00e0 que se trouve la singularit\u00e9 : dans ce que vous ne voyez plus, parce que vous \u00eates dedans depuis trop longtemps. Cette mati\u00e8re-l\u00e0 devient la fondation du document, et aucune machine ne peut la fabriquer \u2014 elle ne vous a pas v\u00e9cu.",
    offerP3a: "\u00c0 partir de cette extraction, le travail suit un processus affin\u00e9 \u2014 ",
    offerP3b: " \u2014 cinq \u00e9tapes aiguis\u00e9es commande apr\u00e8s commande. Chaque \u00e9tape produit les artefacts list\u00e9s ci-dessous.",
    methodCta: "Voir la m\u00e9thode \u2192",
    sampleH2: "Lisez un document complet avant de commander.",
    sampleP: "Une commande compl\u00e8te, publi\u00e9e en clair \u2014 lisez exactement comment nous \u00e9crivons, avant de commander la v\u00f4tre.",
    sampleCta: "Lire le document SILLAGE \u2192",
    sampleBadge: "\u00c0 lire avant de commander",
    sampleMeta: "Quatorze pi\u00e8ces \u00b7 Acc\u00e8s libre \u00b7 Sans email",
    delivH2: "Cinq livrables. Exploitables d\u00e8s lundi.",
    glimpseH2: "Un aper\u00e7u de l'artefact.",
    glimpseLead: "Livr\u00e9 comme un document \u00e9ditorial unique, con\u00e7u pour \u00eatre lu comme un manifeste et consult\u00e9 comme une constitution. Ci-dessous, le travail lui-m\u00eame \u2014 page par page.",
    sommaireH3: "Les vingt pi\u00e8ces, sans exception.",
    sommaireLead: "Les aper\u00e7us ci-dessus montrent quatre actes. Voici le sommaire complet du document que vous recevez \u2014 rien n'est optionnel, rien n'est factur\u00e9 en plus.",
    sommaire: [
      ["Diagnostic de diff\u00e9renciation", "Le champ narratif, diss\u00e9qu\u00e9."],
      ["Plateforme narrative", "La constitution de la maison."],
      ["Syst\u00e8me de langage", "Le vocabulaire, le v\u00f4tre, les tests quotidiens."],
      ["Kit de d\u00e9ploiement", "Les quatre-vingt-dix premiers jours."],
      ["Guide de coh\u00e9rence", "\u00c9crit pour le fondateur, pas pour l'\u00e9quipe."],
      ["R\u00e9cit tarifaire", "Le prix comme doctrine."],
      ["Syst\u00e8me biographique", "Quatre formats, une seule rupture."],
      ["Autopsie des concurrents", "Une fiche par acteur du march\u00e9."],
      ["La pi\u00e8ce signature", "Un essai publiable en l'\u00e9tat."],
      ["Manifeste d'origine", "Deux cent cinquante mots exactement."],
      ["Traduction investisseurs et partenaires", "Le m\u00eame r\u00e9cit, pour qui \u00e9value un pari."],
      ["Brief d'identit\u00e9 visuelle", "\u00c9crit pour un designer qui pense."],
      ["Carte de positionnement", "Deux axes qui r\u00e9v\u00e8lent ce que les axes de cat\u00e9gorie masquent."],
      ["Rapport d'intelligence d'audience", "Quatre segments, un langage par segment."],
      ["Playbook marketing", "Les axes \u00e0 explorer, ceux \u00e0 refuser."],
      ["Playbook contenu", "La voix, mise en r\u00e8gles que n'importe qui peut suivre."],
      ["Playbook r\u00e9seaux sociaux", "Le ton par plateforme, le rythme, et comment r\u00e9pondre aux commentaires."],
      ["Playbook vente", "Comment pr\u00e9senter la maison et d\u00e9samorcer les objections."],
      ["Playbook support", "Comment rester dans le ton dans les situations sensibles."],
      ["Playbook RH & management", "La culture, retraduite pour guider les d\u00e9cisions."],
    ],
    glimpseNote: "Aper\u00e7us stylis\u00e9s \u00b7 Document final livr\u00e9 en PDF",
    actLabel: "Acte",
    acts: ["Le Cadre", "L'Identit\u00e9", "Le D\u00e9ploiement", "La Signature"],
    measureH2: "Le remarquable se mesure.",
    measureLead: "Avant de commencer, on note ensemble comment vous d\u00e9crivez aujourd'hui ce qui vous distingue \u2014 en g\u00e9n\u00e9ral c'est vague, et \u00e7a ressemble \u00e0 ce que diraient les autres. Quelques mois plus tard, on regarde ce qui a chang\u00e9.",
    alsoH2: "Au-del\u00e0 du document.",
    investLead: "Le prix de quelques semaines de publicit\u00e9, qui cesse d'exister le jour o\u00f9 vous cessez de payer. Un r\u00e9cit, lui, vous appartient et continue de travailler. Votre r\u00e9cit, lui, vous appartient et travaille pour vous en continu.",
    ctaH2: "Devenez impossible \u00e0 confondre.",
    cta: "Passer commande \u2192",
    ctaLimit: "Limit\u00e9 \u00e0 quatre commandes par trimestre.",
    ctaFoot: "Commande confidentielle \u00b7 NDA disponible",
    price: "4 500\u20ac",
    deliverables: [
      { title: "Le Diagnostic de diff\u00e9renciation", body: "Une analyse de votre champ concurrentiel narratif : ce que disent vos 5-6 concurrents directs, les mots et promesses qu'ils partagent tous, et une carte des territoires d\u00e9j\u00e0 satur\u00e9s. Vous voyez noir sur blanc pourquoi vous sonnez tous pareil \u2014 et le terrain libre que personne n'occupe, celui que vous allez prendre." },
      { title: "La Plateforme narrative", body: "Votre position unique \u00e9crite en une phrase d\u00e9fendable. Votre r\u00e9cit de marque structur\u00e9 \u2014 origine, combat, vision. Et vos 3-4 piliers de message : les id\u00e9es que vous allez marteler jusqu'\u00e0 ce qu'on vous les associe instinctivement." },
      { title: "Le Syst\u00e8me de langage", body: "Votre ton de voix d\u00e9crit avec pr\u00e9cision. Votre lexique : les mots qui vous appartiennent, et la liste interdite \u2014 les mots de vos concurrents \u2014 pour ne jamais sonner comme eux. Avec des exemples avant/apr\u00e8s tir\u00e9s de vos propres communications." },
      { title: "Le Kit de d\u00e9ploiement", body: "La partie que vous utilisez d\u00e8s le lundi. Du copy pr\u00eat \u00e0 l'emploi, pas des recommandations abstraites : une r\u00e9\u00e9criture de votre page d'accueil (titre, sous-titre, sections cl\u00e9s) ; votre phrase de pr\u00e9sentation en trois formats (une ligne / un paragraphe / pitch de 30 secondes) ; 10 \u00e0 15 angles de prise de parole pr\u00eats \u00e0 devenir posts, articles ou newsletters, chacun rattach\u00e9 \u00e0 un de vos piliers ; une bio et une description d'entreprise r\u00e9utilisables." },
      { title: "Le Guide de coh\u00e9rence", body: "Un document court qui permet \u00e0 n'importe qui dans votre \u00e9quipe d'\u00e9crire dans votre voix sans vous consulter : r\u00e8gles, exemples, \u00e0 faire / \u00e0 ne pas faire. Votre identit\u00e9 tient, m\u00eame quand ce n'est pas vous qui \u00e9cris." },
    ],
    pact: [
      { title: "N'importe qui peut prompter 45 pages en trois minutes.", body: "La plupart le font. Le r\u00e9sultat se lit comme tous les autres documents de marque. Voici ce qui arrive quand un humain passe des semaines \u00e0 \u00e9couter, refuser et choisir \u2014 quand l'objectif n'est pas d'\u00eatre produit, mais d'\u00eatre inoubliable. L'IA peut \u00e9crire un document de marque. Elle ne peut pas d\u00e9cider quelle phrase m\u00e9rite d'\u00eatre arrach\u00e9e." },
      { title: "\u00c9crit une fois. Pour vous seul.", body: "Chaque marque est b\u00e2tie de z\u00e9ro. Le r\u00e9cit que nous \u00e9crivons pour votre maison n'appara\u00eetra jamais \u2014 ni adapt\u00e9, ni d\u00e9calqu\u00e9, ni inspir\u00e9 \u2014 dans une autre commande. L'IA recycle. Nous non." },
      { title: "Depuis Paris. Par h\u00e9ritage.", body: "Ce studio op\u00e8re depuis Paris \u2014 h\u00e9ritier d'une \u00e9cole fran\u00e7aise de pr\u00e9cision narrative. Barthes. Foucault. Pivot. Beigbeder. Une culture o\u00f9 ce qui n'est pas dit compte autant que ce qui l'est. O\u00f9 une phrase est r\u00e9\u00e9crite jusqu'\u00e0 ce que rien ne puisse en \u00eatre retir\u00e9." },
      { title: "Quatre commandes par trimestre. Pas plus.", body: "Pas une tactique commerciale \u2014 un choix structurel. L'IA passe \u00e0 l'\u00e9chelle \u00e0 l'infini. Nous non. Quatre maisons par trimestre, \u00e9crites \u00e0 la main. Vous recevez donc un document b\u00e2ti pour vous seul, par une \u00e9quipe dont l'attention est rationn\u00e9e par choix." },
    ],
    alsoReceive: [
      { label: "L'Objet", title: "L'artefact, reli\u00e9 en option.", body: "Sur demande, le travail est imprim\u00e9, reli\u00e9 \u00e0 la main et sign\u00e9. Une \u00e9dition unique num\u00e9rot\u00e9e pour votre maison. Livr\u00e9e \u00e0 votre bureau ou chez vous. Le PDF est fait pour travailler. L'\u00e9dition reli\u00e9e est faite pour \u00eatre gard\u00e9e." },
    ],
    successSignals: [
      "Vous êtes cit\u00e9 comme r\u00e9f\u00e9rence, pas comme une option parmi d'autres",
      "Ce sont eux qui viennent \u00e0 vous",
      "Vous tenez vos prix sans les n\u00e9gocier \u00e0 la baisse",
      "Votre march\u00e9 finit par vous citer avec vos propres mots",
    ],
    mockups: {
      actI: [
        { label: "La Couverture", caption: "Une \u00e9dition num\u00e9rot\u00e9e. Votre maison, nomm\u00e9e." },
        { label: "La D\u00e9dicace", caption: "L'invocation d'ouverture. La raison d'\u00eatre de ce document." },
        { label: "Le Sommaire", caption: "Cinq livrables, une signature. L'architecture, d\u00e9clar\u00e9e." },
      ],
      actII: [
        { label: "Le Diagnostic de diff\u00e9renciation", caption: "Le champ narratif, avec le terrain que personne n'occupe localis\u00e9." },
        { label: "La Plateforme narrative", caption: "Votre position, votre r\u00e9cit, vos piliers \u2014 articul\u00e9s." },
        { label: "Le R\u00e9cit d'origine", caption: "La rupture d'avant. La conviction d'apr\u00e8s. Nomm\u00e9es avec pr\u00e9cision." },
        { label: "Le Manifeste", caption: "Une seule page. La doctrine, rendue inoubliable." },
        { label: "Le Syst\u00e8me de langage", caption: "Vos mots. Les interdits. Avant et apr\u00e8s." },
      ],
      actIII: [
        { label: "Le Kit de d\u00e9ploiement", caption: "Angles de prise de parole par pilier. Pr\u00eats d\u00e8s lundi." },
        { label: "Le Guide de coh\u00e9rence", caption: "Une voix, n'importe quelle main. Votre identit\u00e9 tient sans vous." },
      ],
      actIV: [
        { label: "La Page de signature", caption: "Num\u00e9rot\u00e9e. Dat\u00e9e. Sign\u00e9e. Un document fait pour \u00eatre gard\u00e9." },
      ],
    },
  },
}


function useReveal() {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.05 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

function MockupCover() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <rect x="40" y="60" width="40" height="2" fill="#e63946" />
      <text x="40" y="88" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">N° 001</text>
      <text x="40" y="236" fill="#fff" fontFamily="Playfair Display, serif" fontSize="30" fontWeight="700">The Brand</text>
      <text x="40" y="272" fill="#fff" fontFamily="Playfair Display, serif" fontSize="30" fontWeight="700">Narrative</text>
      <text x="40" y="308" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="30" fontStyle="italic" fontWeight="400">Architecture.</text>
      <line x1="40" y1="430" x2="360" y2="430" stroke="#2a2a2a" strokeWidth="1" />
      <text x="40" y="455" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2">COMMISSIONED FOR</text>
      <text x="40" y="472" fill="#fff" fontFamily="Playfair Display, serif" fontSize="14" fontStyle="italic">The House</text>
      <text x="360" y="472" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" textAnchor="end">STRAWBERRY PROD.</text>
    </svg>
  )
}

function MockupDedication() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="60" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="3" textAnchor="middle">— DEDICATION —</text>
      <line x1="170" y1="80" x2="230" y2="80" stroke="#e63946" strokeWidth="1" />
      <text x="200" y="200" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" textAnchor="middle">To the founders</text>
      <text x="200" y="230" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" textAnchor="middle">who refuse</text>
      <text x="200" y="260" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" textAnchor="middle">to sound like</text>
      <text x="200" y="290" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" textAnchor="middle">everyone else.</text>
      <line x1="180" y1="330" x2="220" y2="330" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <text x="200" y="360" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic" textAnchor="middle">This document is</text>
      <text x="200" y="378" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic" textAnchor="middle">your constitution.</text>
      <text x="200" y="396" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic" textAnchor="middle">Treat it as one.</text>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">P. 02 · BRAND NARRATIVE ARCHITECTURE</text>
    </svg>
  )
}

function MockupIndex() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">CONTENTS</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 03</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="100" fill="#fff" fontFamily="Playfair Display, serif" fontSize="22" fontWeight="700">Index.</text>
      <g transform="translate(30, 150)">
        <text x="0" y="0" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">01.</text>
        <text x="34" y="0" fill="#fff" fontFamily="Playfair Display, serif" fontSize="12">Differentiation Diagnostic</text>
        <text x="340" y="0" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">04</text>
        <text x="0" y="36" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">02.</text>
        <text x="34" y="36" fill="#fff" fontFamily="Playfair Display, serif" fontSize="12">The Narrative Platform</text>
        <text x="340" y="36" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">10</text>
        <text x="0" y="72" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">03.</text>
        <text x="34" y="72" fill="#fff" fontFamily="Playfair Display, serif" fontSize="12">The Language System</text>
        <text x="340" y="72" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">16</text>
        <text x="0" y="108" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">04.</text>
        <text x="34" y="108" fill="#fff" fontFamily="Playfair Display, serif" fontSize="12">The Deployment Kit</text>
        <text x="340" y="108" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">22</text>
        <text x="0" y="144" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">05.</text>
        <text x="34" y="144" fill="#fff" fontFamily="Playfair Display, serif" fontSize="12">The Coherence Guide</text>
        <text x="340" y="144" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">28</text>
        <line x1="0" y1="180" x2="340" y2="180" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="0" y="210" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2">APPENDIX</text>
        <text x="0" y="236" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="11">Signature</text>
        <text x="340" y="236" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">32</text>
      </g>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">BRAND NARRATIVE ARCHITECTURE</text>
    </svg>
  )
}

function MockupSpine() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">02 · PLATFORM</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 10</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="100" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">THE NARRATIVE PLATFORM</text>
      <text x="30" y="140" fill="#fff" fontFamily="Playfair Display, serif" fontSize="22" fontWeight="700">A house is not</text>
      <text x="30" y="166" fill="#fff" fontFamily="Playfair Display, serif" fontSize="22" fontWeight="700">a positioning.</text>
      <text x="30" y="192" fill="#fff" fontFamily="Playfair Display, serif" fontSize="22" fontStyle="italic" fontWeight="400">It is a mythology.</text>
      <g fill="rgba(255,255,255,0.35)">
        <rect x="30" y="230" width="340" height="3" />
        <rect x="30" y="240" width="320" height="3" />
        <rect x="30" y="250" width="335" height="3" />
        <rect x="30" y="260" width="290" height="3" />
        <rect x="30" y="270" width="310" height="3" />
        <rect x="30" y="280" width="325" height="3" />
      </g>
      <line x1="30" y1="320" x2="32" y2="380" stroke="#e63946" strokeWidth="2" />
      <text x="48" y="338" fill="rgba(255,255,255,0.85)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">The conviction the</text>
      <text x="48" y="356" fill="rgba(255,255,255,0.85)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">founder holds when</text>
      <text x="48" y="374" fill="rgba(255,255,255,0.85)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">no one is watching.</text>
      <g fill="rgba(255,255,255,0.35)">
        <rect x="30" y="415" width="340" height="3" />
        <rect x="30" y="425" width="305" height="3" />
        <rect x="30" y="435" width="320" height="3" />
        <rect x="30" y="445" width="280" height="3" />
      </g>
      <line x1="30" y1="485" x2="370" y2="485" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="500" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">BRAND NARRATIVE ARCHITECTURE</text>
    </svg>
  )
}

function MockupOrigin() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">02 · PLATFORM</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 12</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="100" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">THE ORIGIN STORY</text>
      <text x="30" y="130" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontWeight="700">The moment</text>
      <text x="30" y="154" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" fontWeight="400">everything changed.</text>
      <g transform="translate(30, 200)">
        <line x1="0" y1="20" x2="340" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <circle cx="20" cy="20" r="8" fill="#0d0d0d" stroke="#e63946" strokeWidth="1.5" />
        <text x="20" y="50" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="8" textAnchor="middle">BEFORE</text>
        <circle cx="130" cy="20" r="8" fill="#0d0d0d" stroke="#e63946" strokeWidth="1.5" />
        <text x="130" y="50" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="8" textAnchor="middle">RUPTURE</text>
        <circle cx="240" cy="20" r="10" fill="#e63946" />
        <text x="240" y="50" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="8" textAnchor="middle" fontWeight="700">THE MOMENT</text>
        <circle cx="330" cy="20" r="8" fill="#0d0d0d" stroke="#e63946" strokeWidth="1.5" />
        <text x="330" y="50" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="8" textAnchor="middle">AFTER</text>
      </g>
      <line x1="30" y1="290" x2="32" y2="380" stroke="#e63946" strokeWidth="2" />
      <text x="48" y="310" fill="rgba(255,255,255,0.85)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">There is always a date.</text>
      <text x="48" y="332" fill="rgba(255,255,255,0.85)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">A conversation. A failure.</text>
      <text x="48" y="354" fill="rgba(255,255,255,0.85)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">A refusal. We name it,</text>
      <text x="48" y="376" fill="rgba(255,255,255,0.85)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">and the house begins.</text>
      <g fill="rgba(255,255,255,0.35)">
        <rect x="30" y="420" width="340" height="3" />
        <rect x="30" y="430" width="310" height="3" />
        <rect x="30" y="440" width="335" height="3" />
        <rect x="30" y="450" width="290" height="3" />
      </g>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">BRAND NARRATIVE ARCHITECTURE</text>
    </svg>
  )
}

function MockupManifesto() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="60" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="3" textAnchor="middle">— MANIFESTO —</text>
      <line x1="170" y1="80" x2="230" y2="80" stroke="#e63946" strokeWidth="1" />
      <text x="200" y="150" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" textAnchor="middle">We do not whisper.</text>
      <text x="200" y="180" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" textAnchor="middle">We do not shout.</text>
      <text x="200" y="220" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" textAnchor="middle">We are heard.</text>
      <line x1="160" y1="250" x2="240" y2="250" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <text x="200" y="290" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="13" textAnchor="middle">We refuse the consensus.</text>
      <text x="200" y="312" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="13" textAnchor="middle">We refuse the algorithm.</text>
      <text x="200" y="334" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="13" textAnchor="middle">We refuse the noise.</text>
      <line x1="180" y1="360" x2="220" y2="360" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <text x="200" y="395" fill="#fff" fontFamily="Playfair Display, serif" fontSize="14" fontWeight="700" textAnchor="middle">This is our house.</text>
      <text x="200" y="415" fill="#fff" fontFamily="Playfair Display, serif" fontSize="14" fontWeight="700" textAnchor="middle">Built to be remembered.</text>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">P. 14 · BRAND NARRATIVE ARCHITECTURE</text>
    </svg>
  )
}

function MockupPerceptionMap() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">01 · DIAGNOSTIC</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 06</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">DIFFERENTIATION DIAGNOSTIC</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="18" fontWeight="700">Where the field stands.</text>
      <text x="30" y="142" fill="rgba(255,255,255,0.55)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">And the ground no one occupies.</text>
      <g transform="translate(60, 180)">
        <line x1="140" y1="0" x2="140" y2="280" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="0" y1="140" x2="280" y2="140" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <rect x="0" y="0" width="280" height="280" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="140" y="-10" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">EMOTIONAL</text>
        <text x="140" y="298" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">RATIONAL</text>
        <text x="-8" y="143" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="end">QUIET</text>
        <text x="288" y="143" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2">LOUD</text>
        <circle cx="200" cy="90" r="4" fill="rgba(255,255,255,0.3)" />
        <text x="208" y="93" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="8">Comp. A</text>
        <circle cx="220" cy="170" r="4" fill="rgba(255,255,255,0.3)" />
        <text x="228" y="173" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="8">Comp. B</text>
        <circle cx="180" cy="220" r="4" fill="rgba(255,255,255,0.3)" />
        <text x="188" y="223" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="8">Comp. C</text>
        <circle cx="100" cy="180" r="4" fill="rgba(255,255,255,0.3)" />
        <text x="108" y="183" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="8">Comp. D</text>
        <circle cx="70" cy="70" r="14" fill="#e63946" opacity="0.2" />
        <circle cx="70" cy="70" r="7" fill="#e63946" />
        <text x="70" y="55" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="1" textAnchor="middle" fontWeight="700">THE HOUSE</text>
      </g>
    </svg>
  )
}

function MockupArchetype() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">03 · LANGUAGE</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 16</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">THE LANGUAGE SYSTEM</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="18" fontWeight="700">Words that belong to you.</text>
      <g transform="translate(30, 150)">
        <text x="0" y="0" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">WORDS WE USE</text>
        <text x="0" y="22" fill="rgba(255,255,255,0.8)" fontFamily="Playfair Display, serif" fontSize="12">house · doctrine · craft · refuse</text>
        <text x="0" y="42" fill="rgba(255,255,255,0.8)" fontFamily="Playfair Display, serif" fontSize="12">unforgettable · constitution</text>
        <text x="0" y="78" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">WORDS WE NEVER USE</text>
        <text x="0" y="100" fill="rgba(255,255,255,0.4)" fontFamily="Playfair Display, serif" fontSize="12" textDecoration="line-through">solutions · synergy · leverage</text>
        <text x="0" y="120" fill="rgba(255,255,255,0.4)" fontFamily="Playfair Display, serif" fontSize="12" textDecoration="line-through">disrupt · game-changer · ROI</text>
      </g>
      <line x1="30" y1="300" x2="370" y2="300" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="326" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">BEFORE</text>
      <text x="30" y="346" fill="rgba(255,255,255,0.45)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">We provide innovative branding solutions</text>
      <text x="30" y="364" fill="rgba(255,255,255,0.45)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">to help businesses grow.</text>
      <text x="30" y="396" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">AFTER</text>
      <text x="30" y="416" fill="#fff" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">We build the universe your brand lives in.</text>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">BRAND NARRATIVE ARCHITECTURE</text>
    </svg>
  )
}

function MockupContentIdeas() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">04 · DEPLOYMENT</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 24</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">SPEAKING ANGLES · BY PILLAR</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontWeight="700">Ready by Monday.</text>
      <g transform="translate(30, 160)">
        <rect x="0" y="0" width="340" height="58" fill="rgba(230,57,70,0.04)" stroke="rgba(230,57,70,0.2)" strokeWidth="1" />
        <text x="12" y="22" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">PILLAR I · AUTHORITY</text>
        <text x="12" y="40" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">Why we refuse the playbook everyone follows.</text>
        <text x="12" y="54" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">The thing nobody says about scaling.</text>
        <rect x="0" y="68" width="340" height="58" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="12" y="90" fill="#fff" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">PILLAR II · CONTRARIAN</text>
        <text x="12" y="108" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">The myth of growth hacks.</text>
        <text x="12" y="122" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">Why your funnel quietly died.</text>
        <rect x="0" y="136" width="340" height="58" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="12" y="158" fill="#fff" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">PILLAR III · TRANSFORMATION</text>
        <text x="12" y="176" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">From service provider to category leader.</text>
        <text x="12" y="190" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">The identity shift nobody prepared you for.</text>
        <rect x="0" y="204" width="340" height="58" fill="rgba(230,57,70,0.04)" stroke="rgba(230,57,70,0.2)" strokeWidth="1" />
        <text x="12" y="226" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">PILLAR IV · PROOF</text>
        <text x="12" y="244" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">The before and after of a real house.</text>
        <text x="12" y="258" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">What changed when the words changed.</text>
      </g>
      <line x1="30" y1="440" x2="370" y2="440" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="30" y="466" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">10-15 angles, each tied to a pillar. Posts, articles, newsletters.</text>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">BRAND NARRATIVE ARCHITECTURE</text>
    </svg>
  )
}

function MockupDistribution() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">05 · COHERENCE</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 28</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">THE COHERENCE GUIDE</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontWeight="700">One voice. Any hand.</text>
      <g transform="translate(30, 160)">
        <rect x="0" y="0" width="162" height="120" fill="rgba(230,57,70,0.04)" stroke="rgba(230,57,70,0.25)" strokeWidth="1" />
        <text x="14" y="26" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">DO</text>
        <text x="14" y="50" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="11">✦ Lead with conviction</text>
        <text x="14" y="72" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="11">✦ Name the enemy</text>
        <text x="14" y="94" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="11">✦ Short. Declarative.</text>
        <text x="14" y="112" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="11">✦ Cut the qualifier</text>
        <rect x="178" y="0" width="162" height="120" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <text x="192" y="26" fill="rgba(255,255,255,0.6)" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">DO NOT</text>
        <text x="192" y="50" fill="rgba(255,255,255,0.45)" fontFamily="Playfair Display, serif" fontSize="11">— Hedge with maybe</text>
        <text x="192" y="72" fill="rgba(255,255,255,0.45)" fontFamily="Playfair Display, serif" fontSize="11">— Use corporate jargon</text>
        <text x="192" y="94" fill="rgba(255,255,255,0.45)" fontFamily="Playfair Display, serif" fontSize="11">— Chase every trend</text>
        <text x="192" y="112" fill="rgba(255,255,255,0.45)" fontFamily="Playfair Display, serif" fontSize="11">— Sound like the field</text>
      </g>
      <g transform="translate(30, 320)" fill="rgba(255,255,255,0.35)">
        <rect x="0" y="0" width="340" height="3" />
        <rect x="0" y="12" width="310" height="3" />
        <rect x="0" y="24" width="330" height="3" />
        <rect x="0" y="36" width="285" height="3" />
        <rect x="0" y="48" width="320" height="3" />
      </g>
      <line x1="30" y1="410" x2="370" y2="410" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="30" y="436" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">Your identity holds, even when you are not the one writing.</text>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">BRAND NARRATIVE ARCHITECTURE</text>
    </svg>
  )
}

function MockupSignature() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="60" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="3" textAnchor="middle">— THE END —</text>
      <line x1="170" y1="80" x2="230" y2="80" stroke="#e63946" strokeWidth="1" />
      <text x="200" y="170" fill="#fff" fontFamily="Playfair Display, serif" fontSize="22" fontStyle="italic" textAnchor="middle" fontWeight="400">This was your house.</text>
      <text x="200" y="200" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="22" fontStyle="italic" textAnchor="middle" fontWeight="400">Now build it.</text>
      <line x1="100" y1="260" x2="300" y2="260" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <text x="200" y="290" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="3" textAnchor="middle">COMMISSION</text>
      <text x="200" y="312" fill="#fff" fontFamily="Playfair Display, serif" fontSize="14" fontStyle="italic" textAnchor="middle">N° 001</text>
      <text x="200" y="350" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="3" textAnchor="middle">DELIVERED</text>
      <text x="200" y="372" fill="#fff" fontFamily="Playfair Display, serif" fontSize="14" fontStyle="italic" textAnchor="middle">Date of delivery</text>
      <text x="200" y="410" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="3" textAnchor="middle">SIGNED</text>
      <text x="200" y="438" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="18" fontStyle="italic" textAnchor="middle">Strawberry Production</text>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">P. 32 · BRAND NARRATIVE ARCHITECTURE</text>
    </svg>
  )
}

const ACT_I_C = [<MockupCover key="c" />, <MockupDedication key="d" />, <MockupIndex key="i" />]
const ACT_II_C = [<MockupPerceptionMap key="pm" />, <MockupSpine key="sp" />, <MockupOrigin key="or" />, <MockupManifesto key="mf" />, <MockupArchetype key="ar" />]
const ACT_III_C = [<MockupContentIdeas key="ci" />, <MockupDistribution key="di" />]
const ACT_IV_C = [<MockupSignature key="sg" />]

type MockItem = { component: React.ReactNode; label: string; caption: string }

function MockupGrid({ items }: { items: MockItem[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28 }}>
      {items.map((m, i) => (
        <figure key={i} style={{ margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
            {m.component}
          </div>
          <figcaption>
            <div style={{ fontSize: 10, letterSpacing: "0.25em", color: COLOR, marginBottom: 6, textTransform: "uppercase", fontFamily: SANS }}>
              {m.label}
            </div>
            <p style={{ fontFamily: SERIF, fontSize: "0.95rem", fontStyle: "italic", color: "rgba(255,255,255,0.7)", lineHeight: 1.55, margin: 0 }}>
              {m.caption}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

function ActTitle({ roman, title }: { roman: string; title: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48, marginTop: 24 }}>
      <div style={{ fontFamily: SERIF, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: COLOR, fontStyle: "italic", marginBottom: 8, letterSpacing: "-0.01em" }}>
        {roman}
      </div>
      <div style={{ width: 40, height: 1, background: COLOR, margin: "0 auto 16px" }} />
      <div style={{ fontFamily: SANS, fontSize: 11, color: "rgba(255,255,255,0.55)", letterSpacing: "0.3em", textTransform: "uppercase" }}>
        {title}
      </div>
    </div>
  )
}

export default function BrandNarrativeArchitecturePage() {
  const t = useT(T)
  const { lang } = useLang()
  const DELIVERABLES = t.deliverables.map((d, i) => ({ ...d, n: `0${i + 1}` }))
  const HUMAN_PACT = t.pact
  const ALSO_RECEIVE = t.alsoReceive
  const SUCCESS_SIGNALS = t.successSignals
  const ACT_I = t.mockups.actI.map((m, i) => ({ ...m, component: ACT_I_C[i] }))
  const ACT_II = t.mockups.actII.map((m, i) => ({ ...m, component: ACT_II_C[i] }))
  const ACT_III = t.mockups.actIII.map((m, i) => ({ ...m, component: ACT_III_C[i] }))
  const ACT_IV = t.mockups.actIV.map((m, i) => ({ ...m, component: ACT_IV_C[i] }))
  const hero = useReveal()
  const why = useReveal()
  const human = useReveal()
  const build = useReveal()
  const extraction = useReveal()
  const method = useReveal()
  const deliver = useReveal()
  const inside = useReveal()
  const success = useReveal()
  const also = useReveal()
  const invest = useReveal()
  const cta = useReveal()

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>
      <BackHomeButton />

      <section ref={hero.ref as any} style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px clamp(1.5rem,4vw,4rem) 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center," + GLOW + " 0%,transparent 60%)", opacity: 0.4, pointerEvents: "none" }} />

        {/* Le sceau. Le seul moment du site qui ne réutilise ni carte ni
            bordure ni motif numéroté — un dessin fait pour cette page, qui
            porte l'idée d'une constitution qu'on scelle plutôt qu'un simple
            document qu'on remet. Assez grand pour être un vrai geste, assez
            discret pour ne jamais concurrencer le texte. */}
        <svg
          viewBox="0 0 800 800"
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "min(900px, 130vw)",
            height: "min(900px, 130vw)",
            transform: "translate(-50%, -50%)",
            opacity: 0.16,
            pointerEvents: "none",
          }}
        >
          <circle cx="400" cy="400" r="360" fill="none" stroke={COLOR} strokeWidth="1" />
          <circle cx="400" cy="400" r="300" fill="none" stroke={COLOR} strokeWidth="1" opacity="0.6" />
          <circle cx="400" cy="400" r="120" fill="none" stroke={COLOR} strokeWidth="1.4" />
          {Array.from({ length: 48 }).map((_, i) => {
            const angle = (i / 48) * Math.PI * 2
            const inner = 330
            const outer = i % 4 === 0 ? 358 : 344
            return (
              <line
                key={i}
                x1={400 + Math.cos(angle) * inner}
                y1={400 + Math.sin(angle) * inner}
                x2={400 + Math.cos(angle) * outer}
                y2={400 + Math.sin(angle) * outer}
                stroke={COLOR}
                strokeWidth="1"
              />
            )
          })}
          <rect x="382" y="382" width="36" height="36" fill={COLOR} transform="rotate(45 400 400)" />
        </svg>

        <div style={{ maxWidth: 1100, width: "100%", textAlign: "center", position: "relative", opacity: hero.visible ? 1 : 0, transform: hero.visible ? "translateY(0)" : "translateY(30px)", transition: "all 1s ease" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: "1px solid " + COLOR, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 40, textTransform: "uppercase" }}>
            {t.badge}
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.25rem,6vw,4.75rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: 32 }}>
            {t.h1a}<br />
            <span style={{ background: "linear-gradient(135deg," + COLOR + ",#ff1a1a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{t.h1b}<br />{t.h1c}</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.25rem)", color: "rgba(255,255,255,0.7)", maxWidth: 720, margin: "0 auto 56px", lineHeight: 1.6 }}>
            {t.heroLead}
          </p>
          <Link
            href={ORDER_URL}
            target="_blank"
            onClick={() => track("commission_click", { from: "commission_hero" })}
            style={{ display: "inline-block", background: "linear-gradient(135deg," + COLOR + ",#ff1a1a)", color: "#fff", padding: "18px 44px", borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em", boxShadow: "0 20px 60px " + GLOW }}
          >
            {t.heroCta}
          </Link>
        </div>
      </section>

      <section id="sec-why" ref={why.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", opacity: why.visible ? 1 : 0, transform: why.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>{t.lWhy}</div>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.5rem,3vw,2.25rem)", fontWeight: 400, lineHeight: 1.4, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.92)" }}>
            {t.ctxP1}
          </p>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.25rem,2vw,1.5rem)", fontWeight: 400, lineHeight: 1.5, color: COLOR, marginTop: 32, fontStyle: "italic" }}>
            {t.ctxP2}
          </p>
        </div>
      </section>

      <section id="sec-human" ref={human.ref as any} style={{ padding: "140px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", background: "#0d0d0d", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center," + GLOW + " 0%,transparent 65%)", opacity: 0.18, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", opacity: human.visible ? 1 : 0, transform: human.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 88 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>{t.lHuman}</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4.5vw,3.25rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 28, lineHeight: 1.1 }}>
              {t.pactH2}
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "clamp(0.98rem,1.4vw,1.15rem)", color: "rgba(255,255,255,0.6)", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
              {t.pactLead}
            </p>
          </div>
          <div className="pact-grid" style={{ display: "grid", gap: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)" }}>
            {HUMAN_PACT.map((p, i) => (
              <div key={i} style={{ background: "#0a0a0a", padding: "44px clamp(1.5rem,3vw,2.5rem)", display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ fontFamily: SERIF, fontSize: "1.6rem", color: COLOR, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em" }}>0{i + 1}.</div>
                <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.2rem,1.8vw,1.5rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.25, color: "#fff", margin: 0 }}>{p.title}</h3>
                <p style={{ fontFamily: SANS, fontSize: "0.96rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.7, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
          <style jsx>{`
            .pact-grid { grid-template-columns: repeat(1, 1fr); }
            @media (min-width: 720px) { .pact-grid { grid-template-columns: repeat(2, 1fr); } }
          `}</style>
          <div style={{ marginTop: 64, textAlign: "center" }}>
            <p style={{ fontFamily: SERIF, fontSize: "clamp(1.1rem,1.6vw,1.4rem)", fontStyle: "italic", color: COLOR, letterSpacing: "-0.01em", lineHeight: 1.5, maxWidth: 700, margin: "0 auto" }}>
              {t.pactQuote}
            </p>
          </div>
        </div>
      </section>

      <section id="sec-build" ref={build.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", opacity: build.visible ? 1 : 0, transform: build.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>{t.lBuild}</div>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.4rem,2.6vw,2rem)", fontWeight: 400, lineHeight: 1.45, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.9)" }}>
            {t.offerP1}
          </p>
        </div>
      </section>

      <section ref={extraction.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", opacity: extraction.visible ? 1 : 0, transform: extraction.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>{t.lHow}</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.75rem,3.5vw,2.5rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 32, lineHeight: 1.2 }}>
            {t.offerH3}
          </h2>
          <p style={{ fontFamily: SANS, fontSize: "clamp(1rem,1.4vw,1.15rem)", color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
            {t.offerP2}
          </p>
        </div>
      </section>

      <section ref={method.ref as any} style={{ padding: "60px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center", opacity: method.visible ? 1 : 0, transform: method.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ fontSize: 10, letterSpacing: "0.3em", color: COLOR, marginBottom: 16, textTransform: "uppercase", fontFamily: SANS }}>The Method</div>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.05rem,1.6vw,1.35rem)", fontStyle: "italic", color: "rgba(255,255,255,0.8)", lineHeight: 1.55, letterSpacing: "-0.01em", maxWidth: 700, margin: "0 auto 24px" }}>
            {t.offerP3a}<span style={{ color: "#fff", fontWeight: 600, fontStyle: "normal" }}>S.T.R.A.W.</span>{t.offerP3b}
          </p>
          <Link
            href="/strawberry-method"
            onClick={() => track("method_click", { from: "commission_page" })}
            style={{ display: "inline-block", color: COLOR, fontFamily: SANS, fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", padding: "10px 24px", border: "1px solid " + COLOR, borderRadius: 100 }}
          >
            {t.methodCta}
          </Link>
        </div>
      </section>


      <section id="sec-deliver" ref={deliver.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", opacity: deliver.visible ? 1 : 0, transform: deliver.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>{t.lReceive}</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              {t.delivH2}
            </h2>
          </div>
          <div style={{ display: "grid", gap: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)" }}>
            {DELIVERABLES.map((d) => (
              <div key={d.n} style={{ background: "#0a0a0a", padding: "48px clamp(1.5rem,3vw,3rem)", display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(1.5rem,4vw,4rem)", alignItems: "start" }}>
                <div style={{ fontFamily: SERIF, fontSize: "clamp(1.75rem,3vw,2.5rem)", color: COLOR, fontWeight: 700, lineHeight: 1, minWidth: 70 }}>{d.n}</div>
                <div>
                  <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.25rem,2vw,1.75rem)", fontWeight: 600, marginBottom: 16, letterSpacing: "-0.02em" }}>{d.title}</h3>
                  <p style={{ fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={inside.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem) 140px", borderTop: "1px solid rgba(255,255,255,0.07)", background: "#0d0d0d", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center top," + GLOW + " 0%,transparent 60%)", opacity: 0.2, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", opacity: inside.visible ? 1 : 0, transform: inside.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>{t.lInside}</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24, lineHeight: 1.15 }}>
              {t.glimpseH2}
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "clamp(0.95rem,1.3vw,1.1rem)", color: "rgba(255,255,255,0.6)", maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
              {t.glimpseLead}
            </p>
          </div>
          <ActTitle roman={`${t.actLabel} I`} title={t.acts[0]} />
          <MockupGrid items={ACT_I} />
          <div style={{ height: 100 }} />
          <ActTitle roman={`${t.actLabel} II`} title={t.acts[1]} />
          <MockupGrid items={ACT_II} />
          <div style={{ height: 100 }} />
          <ActTitle roman={`${t.actLabel} III`} title={t.acts[2]} />
          <MockupGrid items={ACT_III} />
          <div style={{ height: 100 }} />
          <ActTitle roman={`${t.actLabel} IV`} title={t.acts[3]} />
          <MockupGrid items={ACT_IV} />
          {/* Le sommaire complet. Les quatre actes ne montraient qu'un
              échantillon de pages : un prospect qui engage 4 500€ doit voir
              l'intégralité de ce qu'il reçoit, pas un aperçu. */}
          <div className="mt-24">
            <h3 className="mb-4 text-center font-serif text-[clamp(1.4rem,2.6vw,2rem)] font-bold tracking-[-0.02em]">
              {t.sommaireH3}
            </h3>
            <p className="mx-auto mb-10 max-w-[620px] text-center font-sans text-[15px] leading-relaxed text-chalk-55">
              {t.sommaireLead}
            </p>

            <ol className="mx-auto grid max-w-[900px] list-none gap-px border border-white/[0.09] bg-white/[0.09] p-0 sm:grid-cols-2">
              {t.sommaire.map(([title, sub], i) => (
                <li key={title} className="bg-ink px-5 py-4">
                  <div className="mb-1 flex items-baseline gap-3">
                    <span className="font-serif text-[13px] text-brand">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-sans text-[14.5px] text-white">{title}</span>
                  </div>
                  <div className="pl-[30px] font-sans text-[12.5px] leading-snug text-chalk-40">{sub}</div>
                </li>
              ))}
            </ol>
          </div>

          <div style={{ marginTop: 100, textAlign: "center" }}>
            <p style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {t.glimpseNote}
            </p>
          </div>
        </div>
      </section>

      {/* SILLAGE — la démonstration complète, déplacée ici depuis la home.
          Sur la home, un document entier en plus du reste faisait trop lire
          à quelqu'un qui découvre à peine l'offre. Ici, le lecteur est déjà
          en train d'évaluer la commande : voir le document complet est
          exactement ce qu'il cherche à ce stade. */}
      <SillageSection lang={lang} />

      <section ref={success.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", opacity: success.visible ? 1 : 0, transform: success.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>{t.lProof}</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              {t.measureH2}
            </h2>
          </div>
          <p style={{ fontFamily: SANS, fontSize: "1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
            {t.measureLead}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {SUCCESS_SIGNALS.map((s, i) => (
              <div key={i} style={{ padding: "28px 28px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ color: COLOR, fontSize: 18, lineHeight: 1.4 }}>✦</span>
                <p style={{ fontFamily: SERIF, fontSize: "1.05rem", fontStyle: "italic", color: "rgba(255,255,255,0.85)", lineHeight: 1.5, margin: 0 }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={also.ref as any} style={{ padding: "140px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", background: "#0d0d0d", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center," + GLOW + " 0%,transparent 65%)", opacity: 0.15, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", opacity: also.visible ? 1 : 0, transform: also.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>{t.lAlso}</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              {t.alsoH2}
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 28 }}>
            {ALSO_RECEIVE.map((r, i) => (
              <div key={i} style={{ padding: "44px clamp(1.5rem,3vw,2.5rem)", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ fontSize: 10, letterSpacing: "0.3em", color: COLOR, textTransform: "uppercase", fontFamily: SANS }}>{r.label}</div>
                <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.3rem,2vw,1.6rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.25, color: "#fff", margin: 0 }}>{r.title}</h3>
                <p style={{ fontFamily: SANS, fontSize: "0.96rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.7, margin: 0 }}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider lang={lang} word={lang === "fr" ? "ARCHITECTURE." : "ARCHITECTURE."} caption={lang === "fr" ? "Ce que vous êtes sur le point de commander" : "What you are about to commission"} />

      <section id="sec-invest" ref={invest.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", opacity: invest.visible ? 1 : 0, transform: invest.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 40, textTransform: "uppercase" }}>{t.lInvest}</div>
          <div style={{ fontFamily: SERIF, fontSize: "clamp(4rem,8vw,6rem)", fontWeight: 700, lineHeight: 1, marginBottom: 16, letterSpacing: "-0.04em" }}>
            <span style={{ background: "linear-gradient(135deg," + COLOR + ",#ff1a1a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{t.price}</span>
          </div>
          <div style={{ fontSize: 13, letterSpacing: "0.2em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: 48 }}>A complete repositioning &middot; Delivered and exploitable</div>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.1rem,1.6vw,1.35rem)", fontStyle: "italic", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, maxWidth: 640, margin: "0 auto" }}>
            {t.investLead}
          </p>
        </div>
      </section>

      <section ref={cta.ref as any} style={{ padding: "140px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center," + GLOW + " 0%,transparent 60%)", opacity: 0.5, pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", opacity: cta.visible ? 1 : 0, transform: cta.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 40 }}>
            {t.ctaH2}
          </h2>
          <Link
            href={ORDER_URL}
            target="_blank"
            onClick={() => track("commission_click", { from: "commission_final_cta" })}
            style={{ display: "inline-block", background: "linear-gradient(135deg," + COLOR + ",#ff1a1a)", color: "#fff", padding: "20px 52px", borderRadius: 100, fontSize: 16, fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em", boxShadow: "0 20px 60px " + GLOW }}
          >
            {t.cta}
          </Link>
          <div style={{ marginTop: 24, fontSize: 13, color: "rgba(255,255,255,0.45)", letterSpacing: "0.05em" }}>
            {t.ctaLimit}
          </div>
          <div style={{ marginTop: 12, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)", maxWidth: 320, margin: "12px auto 0" }}>
            <p style={{ fontFamily: SANS, fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.18em", textTransform: "uppercase", margin: 0 }}>
              {t.ctaFoot}
            </p>
          </div>
        </div>
      </section>

      <FaqSection faqs={FAQ_AUDIT} />

      <FloatingSectionPill
        sections={[
          { id: "sec-why", label: t.lWhy },
          { id: "sec-human", label: t.lHuman },
          { id: "sec-build", label: t.lBuild },
          { id: "sec-deliver", label: t.lReceive },
          { id: "sec-invest", label: t.lInvest },
        ]}
      />

    </main>
  )
}
