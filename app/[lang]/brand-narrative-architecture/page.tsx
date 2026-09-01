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
import { DocumentFlipbook, type FlipbookPage, type FlipbookAct } from "@/components/strawberry/document-flipbook"
import { Footer } from "@/components/strawberry/footer"
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
    lBuild: "What we build",
    lHow: "How it happens",
    lInside: "Inside the architecture",
    lProof: "How we will know it worked",
    lInvest: "The investment",
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
    flipPrev: "Previous page",
    flipNext: "Next page",
    flipPage: (i: number, n: number) => `Page ${i} / ${n}`,
    acts: ["The Frame", "The Identity", "The Deployment", "The Signature"],
    measureH2: "Remarkable is measurable.",
    measureLead: "Before we start, we note together how you would describe today what sets you apart \u2014 usually it is vague, and sounds like what the others would say. A few months later, we look at what changed.",
    investLead: "The price of a few weeks of advertising that vanishes the moment you stop paying. Your narrative, by contrast, does not wear out: it belongs to you, never goes out of date, and keeps working for you years after it was written.",
    ctaH2: "Become impossible to confuse.",
    cta: "Place your commission \u2192",
    ctaLimit: "Limited to four commissions per quarter.",
    ctaFoot: "Confidential commission \u00b7 NDA available",
    price: "4,500\u20ac",
    successSignals: [
      "You are cited as a reference, not just another option",
      "People come to you, instead of you chasing them",
      "You hold your prices without negotiating them down",
      "People start repeating your own words back to you",
      "A new hire picks up the tone from a single read, without anyone explaining it",
      "People recognise your brand before they've read its name",
    ],
    mockups: {
      actI: [
        { label: "The Cover", caption: "A numbered edition. Your house, given its name." },
        { label: "The Dedication", caption: "The opening invocation. The reason this document exists." },
        { label: "The Index", caption: "Five deliverables, one signature. The architecture, declared." },
      ],
      actII: [
        { label: "The Diagnostic de différenciation", caption: "The narrative field, with the ground no one occupies located." },
        { label: "La plateforme narrative", caption: "Your position, your story, your pillars \u2014 articulated." },
        { label: "The Origin Story", caption: "The rupture before. The conviction after. Named with precision." },
        { label: "The Manifesto", caption: "A single page. The doctrine, made unforgettable." },
        { label: "Le système de langage", caption: "Your words. The forbidden ones. Before and after." },
        { label: "The Pricing Narrative", caption: "The price is a sentence, not a number \u2014 said once, defended always." },
        { label: "The Biography System", caption: "Four formats, one single break, sized for four different rooms." },
        { label: "The Competitor Autopsy", caption: "One sheet per player \u2014 what each one dares to say, and what it hides." },
        { label: "The Signature Piece", caption: "An essay, publishable as it stands \u2014 under your name." },
        { label: "Investor & Partner Translation", caption: "The same story, worded for whoever is judging a bet." },
        { label: "The Visual Identity Brief", caption: "Written for a designer who thinks, not just executes." },
        { label: "The Positioning Map", caption: "Two axes that reveal what the category's usual axes hide." },
        { label: "Audience Intelligence Report", caption: "Four segments, one language each \u2014 the same offer, worded on purpose." },
      ],
      actIII: [
        { label: "The Homepage Rewrite", caption: "Headline, subhead, key sections \u2014 rewritten, ready to paste." },
        { label: "The Presentation Line", caption: "One line, one paragraph, one 30-second pitch. Sized for the moment." },
        { label: "Le kit de déploiement", caption: "Speaking angles by pillar. Ready the Monday after." },
        { label: "Le guide de cohérence", caption: "One voice, any hand. Your identity holds without you." },
        { label: "Marketing Playbook", caption: "Angles to explore, angles to refuse \u2014 decided in advance." },
        { label: "Content Playbook", caption: "The voice, turned into rules anyone on the team can follow." },
        { label: "Social Media Playbook", caption: "Tone by platform, rhythm, and how to answer comments." },
        { label: "Sales Playbook", caption: "How to present the house and defuse objections before they land." },
        { label: "Support Playbook", caption: "How to stay on-voice in sensitive, difficult situations." },
        { label: "HR & Management Playbook", caption: "The culture, retranslated into a rule that guides decisions." },
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
    lBuild: "Ce que nous bâtissons",
    lHow: "Comment cela se passe",
    lInside: "Dans l'architecture",
    lProof: "Comment nous saurons que ça a marché",
    lInvest: "L'investissement",
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
    flipPrev: "Page précédente",
    flipNext: "Page suivante",
    flipPage: (i: number, n: number) => `Page ${i} / ${n}`,
    acts: ["Le Cadre", "L'Identit\u00e9", "Le D\u00e9ploiement", "La Signature"],
    measureH2: "Le remarquable se mesure.",
    measureLead: "Avant de commencer, on note ensemble comment vous d\u00e9crivez aujourd'hui ce qui vous distingue \u2014 en g\u00e9n\u00e9ral c'est vague, et \u00e7a ressemble \u00e0 ce que diraient les autres. Quelques mois plus tard, on regarde ce qui a chang\u00e9.",
    investLead: "Le prix de quelques semaines de publicit\u00e9, qui cesse d'exister le jour o\u00f9 vous cessez de payer. Votre r\u00e9cit, lui, ne s'use pas : il vous appartient, ne date jamais, et continue de travailler pour vous des ann\u00e9es apr\u00e8s avoir \u00e9t\u00e9 \u00e9crit.",
    ctaH2: "Devenez impossible \u00e0 confondre.",
    cta: "Passer commande \u2192",
    ctaLimit: "Limit\u00e9 \u00e0 quatre commandes par trimestre.",
    ctaFoot: "Commande confidentielle \u00b7 NDA disponible",
    price: "4 500\u20ac",
    successSignals: [
      "Vous êtes cit\u00e9 comme r\u00e9f\u00e9rence, pas comme une option parmi d'autres",
      "Ce sont eux qui viennent \u00e0 vous",
      "Vous tenez vos prix sans les n\u00e9gocier \u00e0 la baisse",
      "Votre march\u00e9 finit par vous citer avec vos propres mots",
      "Un nouveau membre de l'équipe adopte le ton dès la première lecture, sans qu'on ait à le lui expliquer",
      "On reconnaît votre marque avant même d'en avoir lu le nom",
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
        { label: "Le R\u00e9cit tarifaire", caption: "Le prix comme une phrase, pas un chiffre \u2014 dite une fois, d\u00e9fendue toujours." },
        { label: "Le Syst\u00e8me de biographies", caption: "Quatre formats, une seule rupture, calibr\u00e9s pour quatre publics." },
        { label: "L'Autopsie concurrentielle", caption: "Une fiche par acteur \u2014 ce que chacun ose dire, et ce qu'il cache." },
        { label: "La Pi\u00e8ce signature", caption: "Un essai, publiable en l'\u00e9tat \u2014 sous votre nom." },
        { label: "Traduction investisseurs & partenaires", caption: "Le m\u00eame r\u00e9cit, formul\u00e9 pour qui juge un pari." },
        { label: "Le Brief d'identit\u00e9 visuelle", caption: "\u00c9crit pour un designer qui r\u00e9fl\u00e9chit, pas qui ex\u00e9cute." },
        { label: "La Carte de positionnement", caption: "Deux axes qui r\u00e9v\u00e8lent ce que les axes habituels de la cat\u00e9gorie cachent." },
        { label: "Le Rapport d'intelligence audience", caption: "Quatre segments, une langue chacun \u2014 la m\u00eame offre, formul\u00e9e \u00e0 dessein." },
      ],
      actIII: [
        { label: "La Home r\u00e9\u00e9crite", caption: "Titre, sous-titre, sections cl\u00e9s \u2014 r\u00e9\u00e9crits, pr\u00eats \u00e0 coller." },
        { label: "La Phrase de pr\u00e9sentation", caption: "Une ligne, un paragraphe, un pitch de 30 secondes. Selon le moment." },
        { label: "Le Kit de d\u00e9ploiement", caption: "Angles de prise de parole par pilier. Pr\u00eats d\u00e8s lundi." },
        { label: "Le Guide de coh\u00e9rence", caption: "Une voix, n'importe quelle main. Votre identit\u00e9 tient sans vous." },
        { label: "Playbook marketing", caption: "Les axes \u00e0 explorer, ceux \u00e0 refuser \u2014 d\u00e9cid\u00e9s \u00e0 l'avance." },
        { label: "Playbook contenu", caption: "La voix, mise en r\u00e8gles que n'importe qui dans l'\u00e9quipe peut suivre." },
        { label: "Playbook r\u00e9seaux sociaux", caption: "Le ton par plateforme, le rythme, et comment r\u00e9pondre aux commentaires." },
        { label: "Playbook vente", caption: "Comment pr\u00e9senter la maison et d\u00e9samorcer les objections avant qu'elles n'arrivent." },
        { label: "Playbook support", caption: "Comment rester dans le ton dans les situations sensibles et difficiles." },
        { label: "Playbook RH & management", caption: "La culture, retraduite en une r\u00e8gle qui guide les d\u00e9cisions." },
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
      <text x="40" y="236" fill="#fff" fontFamily="Playfair Display, serif" fontSize="30" fontWeight="700">La Constitution</text>
      <text x="40" y="272" fill="#fff" fontFamily="Playfair Display, serif" fontSize="30" fontWeight="700">Narrative</text>
      <text x="40" y="308" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="30" fontStyle="italic" fontWeight="400">de la Maison.</text>
      <line x1="40" y1="430" x2="360" y2="430" stroke="#2a2a2a" strokeWidth="1" />
      <text x="40" y="455" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2">COMMANDÉ POUR</text>
      <text x="40" y="472" fill="#fff" fontFamily="Playfair Display, serif" fontSize="14" fontStyle="italic">La Maison</text>
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
      <text x="200" y="200" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" textAnchor="middle">Aux fondateurs</text>
      <text x="200" y="230" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" textAnchor="middle">qui refusent</text>
      <text x="200" y="260" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" textAnchor="middle">de parler comme</text>
      <text x="200" y="290" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" textAnchor="middle">tout le monde.</text>
      <line x1="180" y1="330" x2="220" y2="330" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <text x="200" y="360" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic" textAnchor="middle">Ce document est</text>
      <text x="200" y="378" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic" textAnchor="middle">votre constitution.</text>
      <text x="200" y="396" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic" textAnchor="middle">Traitez-la comme telle.</text>
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
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">SOMMAIRE</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 03</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="100" fill="#fff" fontFamily="Playfair Display, serif" fontSize="22" fontWeight="700">Sommaire.</text>
      <g transform="translate(30, 150)">
        <text x="0" y="0" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">01.</text>
        <text x="34" y="0" fill="#fff" fontFamily="Playfair Display, serif" fontSize="12">Diagnostic de différenciation</text>
        <text x="340" y="0" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">04</text>
        <text x="0" y="36" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">02.</text>
        <text x="34" y="36" fill="#fff" fontFamily="Playfair Display, serif" fontSize="12">La plateforme narrative</text>
        <text x="340" y="36" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">10</text>
        <text x="0" y="72" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">03.</text>
        <text x="34" y="72" fill="#fff" fontFamily="Playfair Display, serif" fontSize="12">Le système de langage</text>
        <text x="340" y="72" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">16</text>
        <text x="0" y="108" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">04.</text>
        <text x="34" y="108" fill="#fff" fontFamily="Playfair Display, serif" fontSize="12">Le kit de déploiement</text>
        <text x="340" y="108" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9" textAnchor="end">22</text>
        <text x="0" y="144" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">05.</text>
        <text x="34" y="144" fill="#fff" fontFamily="Playfair Display, serif" fontSize="12">Le guide de cohérence</text>
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
      <text x="30" y="100" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">LA PLATEFORME NARRATIVE</text>
      <text x="30" y="140" fill="#fff" fontFamily="Playfair Display, serif" fontSize="22" fontWeight="700">Une maison n'est pas</text>
      <text x="30" y="166" fill="#fff" fontFamily="Playfair Display, serif" fontSize="22" fontWeight="700">un positionnement.</text>
      <text x="30" y="192" fill="#fff" fontFamily="Playfair Display, serif" fontSize="22" fontStyle="italic" fontWeight="400">C'est une mythologie.</text>
      <BodyLines
        lines={[
          "SILLAGE ne vend pas un logiciel de suivi de chantier. Elle vend ce qui reste quand le",
          "chantier n'existe plus — la trace opposable de ce qui a été exécuté, constituée au fur et",
          "à mesure, sans que personne ait à remplir quoi que ce soit. La distinction paraît",
          "mince ; elle sépare deux catégories entières, deux niveaux de prix et deux acheteurs.",
          "La mythologie de la maison tient en une phrase que Claire Vasseur répète sans s'en",
          "apercevoir : le travail bien fait devient invisible dès que l'échafaudage tombe.",
        ]}
        x={30}
        y={232}
        seed={2}
      />
      <line x1="30" y1="320" x2="32" y2="380" stroke="#e63946" strokeWidth="2" />
      <text x="48" y="338" fill="rgba(255,255,255,0.85)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">La conviction que la</text>
      <text x="48" y="356" fill="rgba(255,255,255,0.85)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">fondatrice garde quand</text>
      <text x="48" y="374" fill="rgba(255,255,255,0.85)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">personne ne regarde.</text>
      <BodyLines
        lines={[
          "Ce que cette conviction interdit : parler de gain de temps, promettre une meilleure",
          "organisation, se comparer à un outil de pilotage. Ces trois formulations sont vraies et",
          "vendraient mieux à court terme. Elles ramènent SILLAGE dans une catégorie où elle est",
          "la douzième option, et où son prix devient indéfendable.",
        ]}
        x={30}
        y={417}
        seed={5}
      />
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
      <text x="30" y="100" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">LE RÉCIT D'ORIGINE</text>
      <text x="30" y="130" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontWeight="700">Le moment où</text>
      <text x="30" y="154" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" fontWeight="400">tout a basculé.</text>
      <g transform="translate(30, 200)">
        <line x1="0" y1="20" x2="340" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <circle cx="20" cy="20" r="8" fill="#0d0d0d" stroke="#e63946" strokeWidth="1.5" />
        <text x="20" y="50" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="8" textAnchor="middle">AVANT</text>
        <circle cx="130" cy="20" r="8" fill="#0d0d0d" stroke="#e63946" strokeWidth="1.5" />
        <text x="130" y="50" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="8" textAnchor="middle">RUPTURE</text>
        <circle cx="240" cy="20" r="10" fill="#e63946" />
        <text x="240" y="50" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="8" textAnchor="middle" fontWeight="700">THE MOMENT</text>
        <circle cx="330" cy="20" r="8" fill="#0d0d0d" stroke="#e63946" strokeWidth="1.5" />
        <text x="330" y="50" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="8" textAnchor="middle">APRÈS</text>
      </g>
      <line x1="30" y1="290" x2="32" y2="380" stroke="#e63946" strokeWidth="2" />
      <text x="48" y="310" fill="rgba(255,255,255,0.85)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">Il y a toujours une date.</text>
      <text x="48" y="332" fill="rgba(255,255,255,0.85)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">A conversation. A failure.</text>
      <text x="48" y="354" fill="rgba(255,255,255,0.85)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">Un refus. Nous le nommons,</text>
      <text x="48" y="376" fill="rgba(255,255,255,0.85)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">et la maison commence.</text>
      <BodyLines
        lines={[
          "Ce que le récit d'origine ne dit pas : que SILLAGE a été fondée pour révolutionner le",
          "bâtiment. Elle a été fondée parce qu'une femme a payé quatorze mille euros pour un",
          "chantier qu'elle avait bien fait et qu'elle ne pouvait pas prouver. La rupture est petite,",
          "datée, vérifiable — c'est ce qui la rend impossible à recopier par un concurrent.",
        ]}
        x={30}
        y={422}
        seed={3}
      />
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
      <text x="200" y="150" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" textAnchor="middle">Nous ne chuchotons pas.</text>
      <text x="200" y="180" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" textAnchor="middle">Nous ne crions pas.</text>
      <text x="200" y="220" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="20" fontStyle="italic" textAnchor="middle">On nous entend.</text>
      <line x1="160" y1="250" x2="240" y2="250" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <text x="200" y="290" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="13" textAnchor="middle">Nous refusons le consensus.</text>
      <text x="200" y="312" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="13" textAnchor="middle">Nous refusons l'algorithme.</text>
      <text x="200" y="334" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="13" textAnchor="middle">Nous refusons le bruit.</text>
      <line x1="180" y1="360" x2="220" y2="360" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <text x="200" y="395" fill="#fff" fontFamily="Playfair Display, serif" fontSize="14" fontWeight="700" textAnchor="middle">Voici notre maison.</text>
      <text x="200" y="415" fill="#fff" fontFamily="Playfair Display, serif" fontSize="14" fontWeight="700" textAnchor="middle">Bâtie pour qu'on s'en souvienne.</text>
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
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">DIAGNOSTIC DE DIFFÉRENCIATION</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="18" fontWeight="700">Où se tient le champ.</text>
      <text x="30" y="142" fill="rgba(255,255,255,0.55)" fontFamily="Playfair Display, serif" fontSize="13" fontStyle="italic">Et le terrain que personne n'occupe.</text>
      <g transform="translate(60, 180)">
        <line x1="140" y1="0" x2="140" y2="280" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="0" y1="140" x2="280" y2="140" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <rect x="0" y="0" width="280" height="280" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="140" y="-10" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">ÉMOTIONNEL</text>
        <text x="140" y="298" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">RATIONNEL</text>
        <text x="-8" y="143" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="end">DISCRET</text>
        <text x="288" y="143" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2">VISIBLE</text>
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
      <text x="30" y="475" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">Quatre concurrents, un seul quadrant. Vous n'y êtes pas.</text>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">BRAND NARRATIVE ARCHITECTURE</text>
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
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">LE SYSTÈME DE LANGAGE</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="18" fontWeight="700">Les mots qui vous appartiennent.</text>
      <g transform="translate(30, 150)">
        <text x="0" y="0" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">MOTS QUE NOUS UTILISONS</text>
        <text x="0" y="22" fill="rgba(255,255,255,0.8)" fontFamily="Playfair Display, serif" fontSize="12">chantier · trace · réception · refuser</text>
        <text x="0" y="42" fill="rgba(255,255,255,0.8)" fontFamily="Playfair Display, serif" fontSize="12">contestation · preuve</text>
        <text x="0" y="78" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">WORDS WE NEVER USE</text>
        <text x="0" y="100" fill="rgba(255,255,255,0.4)" fontFamily="Playfair Display, serif" fontSize="12" textDecoration="line-through">solutions · synergy · leverage</text>
        <text x="0" y="120" fill="rgba(255,255,255,0.4)" fontFamily="Playfair Display, serif" fontSize="12" textDecoration="line-through">disrupt · game-changer · ROI</text>
      </g>
      <line x1="30" y1="300" x2="370" y2="300" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="326" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">AVANT</text>
      <text x="30" y="346" fill="rgba(255,255,255,0.45)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">Un logiciel complet pour piloter</text>
      <text x="30" y="364" fill="rgba(255,255,255,0.45)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">vos chantiers au quotidien.</text>
      <text x="30" y="396" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">APRÈS</text>
      <text x="30" y="416" fill="#fff" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">Ce qui reste quand le chantier n'existe plus.</text>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">BRAND NARRATIVE ARCHITECTURE</text>
    </svg>
  )
}

function MockupHomepageRewrite() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">04 · DEPLOYMENT</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 20</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">LA HOME RÉÉCRITE</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontWeight="700">Prêt à coller. Pas une suggestion.</text>
      <g transform="translate(30, 155)">
        <rect x="0" y="0" width="340" height="130" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="14" y="24" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">AVANT</text>
        <text x="14" y="56" fill="rgba(255,255,255,0.45)" fontFamily="Playfair Display, serif" fontSize="13" textDecoration="line-through">Pilotez vos chantiers en temps réel</text>
        <text x="14" y="76" fill="rgba(255,255,255,0.45)" fontFamily="Playfair Display, serif" fontSize="13" textDecoration="line-through">avec une solution tout-en-un.</text>
        <text x="14" y="110" fill="rgba(255,255,255,0.28)" fontFamily="Inter, sans-serif" fontSize="9">Onze concurrents pourraient signer</text>
        <text x="14" y="124" fill="rgba(255,255,255,0.28)" fontFamily="Inter, sans-serif" fontSize="9">cette phrase sans mentir.</text>
      </g>
      <g transform="translate(30, 300)">
        <rect x="0" y="0" width="340" height="130" fill="rgba(230,57,70,0.05)" stroke="rgba(230,57,70,0.3)" strokeWidth="1" />
        <text x="14" y="24" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">APRÈS</text>
        <text x="14" y="58" fill="#fff" fontFamily="Playfair Display, serif" fontSize="15" fontStyle="italic">Ce qui vous reste quand</text>
        <text x="14" y="80" fill="#fff" fontFamily="Playfair Display, serif" fontSize="15" fontStyle="italic">le chantier n'existe plus.</text>
        <text x="14" y="112" fill="rgba(255,255,255,0.5)" fontFamily="Inter, sans-serif" fontSize="9">Titre, sous-titre, sections clés — réécrits.</text>
      </g>
      <line x1="30" y1="450" x2="370" y2="450" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="30" y="472" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">Du texte qu'on colle lundi, pas une slide qu'on archive.</text>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">BRAND NARRATIVE ARCHITECTURE</text>
    </svg>
  )
}

function MockupTagline() {
  const rows: [string, string, number][] = [
    ["ONE LINE", "The identity people join, not just buy.", 60],
    ["ONE PARAGRAPH", "Three sentences that hold the position, the fight, and the proof — in the order a stranger needs them.", 100],
    ["30-SECOND PITCH", "The version you say out loud, at a dinner, to someone who has never heard of you — and remembers it after.", 130],
  ]
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">04 · DEPLOYMENT</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 21</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">LA PHRASE DE PRÉSENTATION · TROIS FORMATS</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontWeight="700">Dites-le court. Dites-le long. Dites-le une fois.</text>
      <g transform="translate(30, 155)">
        {(() => {
          let y = 0
          return rows.map(([tag, line, h], i) => {
            const g = (
              <g key={i} transform={`translate(0, ${y})`}>
                <rect x="0" y="0" width="340" height={h} fill={i === 0 ? "rgba(230,57,70,0.05)" : "rgba(255,255,255,0.02)"} stroke={i === 0 ? "rgba(230,57,70,0.3)" : "rgba(255,255,255,0.1)"} strokeWidth="1" />
                <text x="14" y="22" fill={i === 0 ? "#e63946" : "rgba(255,255,255,0.5)"} fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">{tag}</text>
                <text x="14" y="46" fill="#fff" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">
                  <tspan x="14" dy="0">{line.length > 42 ? line.slice(0, 42) : line}</tspan>
                  {line.length > 42 && <tspan x="14" dy="18">{line.slice(42)}</tspan>}
                </text>
              </g>
            )
            y += h + 14
            return g
          })
        })()}
      </g>
      <line x1="30" y1="450" x2="370" y2="450" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="30" y="472" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">Une idée, calibrée pour une bio, un pitch ou une scène.</text>
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
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">ANGLES DE PRISE DE PAROLE · PAR PILIER</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontWeight="700">Prêts dès lundi.</text>
      <g transform="translate(30, 160)">
        <rect x="0" y="0" width="340" height="58" fill="rgba(230,57,70,0.04)" stroke="rgba(230,57,70,0.2)" strokeWidth="1" />
        <text x="12" y="22" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">PILIER I · AUTORITÉ</text>
        <text x="12" y="40" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">Ce que coûte vraiment une reprise contestée.</text>
        <text x="12" y="54" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">Pourquoi le classeur de chantier meurt en trois semaines.</text>
        <rect x="0" y="68" width="340" height="58" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="12" y="90" fill="#fff" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">PILLAR II · CONTRARIAN</text>
        <text x="12" y="108" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">Le coût réel d'une reprise contestée.</text>
        <text x="12" y="122" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">Pourquoi le classeur meurt en trois semaines.</text>
        <rect x="0" y="136" width="340" height="58" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x="12" y="158" fill="#fff" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">PILLAR III · TRANSFORMATION</text>
        <text x="12" y="176" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">De l'outil de suivi à la preuve opposable.</text>
        <text x="12" y="190" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">L'échéance que personne ne prépare.</text>
        <rect x="0" y="204" width="340" height="58" fill="rgba(230,57,70,0.04)" stroke="rgba(230,57,70,0.2)" strokeWidth="1" />
        <text x="12" y="226" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">PILLAR IV · PROOF</text>
        <text x="12" y="244" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">L'avant et l'après d'un chantier réel.</text>
        <text x="12" y="258" fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">Ce qui change quand les mots changent.</text>
      </g>
      <line x1="30" y1="440" x2="370" y2="440" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="30" y="466" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">10 à 15 angles, chacun rattaché à un pilier. Posts, articles, newsletters.</text>
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
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">LE GUIDE DE COHÉRENCE</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="20" fontWeight="700">Une voix. N'importe quelle main.</text>
      <g transform="translate(30, 160)">
        <rect x="0" y="0" width="162" height="120" fill="rgba(230,57,70,0.04)" stroke="rgba(230,57,70,0.25)" strokeWidth="1" />
        <text x="14" y="26" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">DO</text>
        <text x="14" y="50" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="11">✦ Ouvrir sur le refus</text>
        <text x="14" y="72" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="11">✦ Nommer le moment</text>
        <text x="14" y="94" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="11">✦ Short. Declarative.</text>
        <text x="14" y="112" fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="11">✦ Couper le qualificatif</text>
        <rect x="178" y="0" width="162" height="120" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <text x="192" y="26" fill="rgba(255,255,255,0.6)" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2" fontWeight="700">À NE PAS FAIRE</text>
        <text x="192" y="50" fill="rgba(255,255,255,0.45)" fontFamily="Playfair Display, serif" fontSize="11">— Alarmer plutôt que constater</text>
        <text x="192" y="72" fill="rgba(255,255,255,0.45)" fontFamily="Playfair Display, serif" fontSize="11">— Use corporate jargon</text>
        <text x="192" y="94" fill="rgba(255,255,255,0.45)" fontFamily="Playfair Display, serif" fontSize="11">— Chase every trend</text>
        <text x="192" y="112" fill="rgba(255,255,255,0.45)" fontFamily="Playfair Display, serif" fontSize="11">— Parler comme la catégorie</text>
      </g>
      <BodyLines
        lines={[
          "Le guide n'est pas un document de marque destiné à être admiré : il est écrit pour être",
          "consulté un mardi à dix-huit heures par quelqu'un qui doit répondre à un client mécontent",
          "et qui n'a pas le temps de demander. Chaque règle est formulée comme une opération",
          "vérifiable, jamais comme une intention. Un adjectif ne se contrôle pas ; une règle si.",
          "Le signal de réussite est simple : deux semaines après son arrivée, un nouvel arrivant",
          "écrit un message client que personne n'a besoin de corriger.",
        ]}
        x={30}
        y={322}
        seed={7}
      />
      <line x1="30" y1="410" x2="370" y2="410" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="30" y="436" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">Votre identité tient, même quand ce n'est pas vous qui écrivez.</text>
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
      <text x="200" y="170" fill="#fff" fontFamily="Playfair Display, serif" fontSize="22" fontStyle="italic" textAnchor="middle" fontWeight="400">C'était votre maison.</text>
      <text x="200" y="200" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="22" fontStyle="italic" textAnchor="middle" fontWeight="400">Construisez-la.</text>
      <line x1="100" y1="260" x2="300" y2="260" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <text x="200" y="290" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="3" textAnchor="middle">COMMANDE</text>
      <text x="200" y="312" fill="#fff" fontFamily="Playfair Display, serif" fontSize="14" fontStyle="italic" textAnchor="middle">N° 001</text>
      <text x="200" y="350" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="3" textAnchor="middle">LIVRÉE</text>
      <text x="200" y="372" fill="#fff" fontFamily="Playfair Display, serif" fontSize="14" fontStyle="italic" textAnchor="middle">Date de livraison</text>
      <text x="200" y="410" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="3" textAnchor="middle">SIGNED</text>
      <text x="200" y="438" fill="#e63946" fontFamily="Playfair Display, serif" fontSize="18" fontStyle="italic" textAnchor="middle">Strawberry Production</text>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">P. 32 · BRAND NARRATIVE ARCHITECTURE</text>
    </svg>
  )
}

type Block =
  | { t: "lines"; items: string[] }
  | { t: "quote"; text: string[] }
  | { t: "split"; leftTitle: string; leftItems: string[]; rightTitle: string; rightItems: string[] }
  | { t: "table"; rows: [string, string][] }
  | { t: "stat"; value: string; label: string; note: string }
  | { t: "meter"; rows: [string, number, string][] }

/**
 * Le gabarit générique.
 *
 * Vingt pièces, chacune sa page — mais pas chacune sa fonction SVG de
 * zéro : au-delà des pages qui méritaient une illustration sur mesure
 * (la carte de positionnement, les avant/après), la plupart des pièces
 * restantes se disent très bien avec la même grammaire visuelle que le
 * reste du document (bandeau, titre, bloc de contenu, note de bas de
 * page) et un contenu qui change. Un gabarit paramétré évite quatorze
 * fonctions quasi identiques à maintenir, sans que la page ait l'air
 * moins soignée — le cadre est déjà celui de tout le document.
 */
/**
 * Une ligne de corps de texte : un vrai fragment de phrase, rendu petit.
 *
 * Ce que ces maquettes rataient : une page de document imprimé porte trente
 * à quarante lignes de texte, pas six puces et une note. À six éléments,
 * l'oeil lit « schéma », pas « page ». Le corps de texte ci-dessous est de
 * la vraie prose, pas des barres grises simulant du texte — à 4,6px elle
 * n'est pas lue, mais elle a la texture et l'irrégularité du texte réel,
 * ce qu'aucune barre grise ne produit.
 */
function BodyLines({
  lines,
  x,
  y,
  lineHeight = 8.2,
  seed = 0,
}: {
  lines: string[]
  x: number
  y: number
  lineHeight?: number
  /** Décale les micro-irrégularités d'une page à l'autre. */
  seed?: number
}) {
  return (
    <>
      {lines.map((l, i) => {
        // Aucune justification forcée : la version précédente étirait chaque
        // ligne à la même largeur exacte, ce qui produisait un bloc aux deux
        // bords parfaitement droits — la signature la plus reconnaissable
        // d'une page fabriquée par une machine. Une composition réelle a un
        // bord droit irrégulier.
        //
        // S'y ajoutent deux irrégularités minuscules, déterministes (jamais
        // Math.random, qui casserait l'hydratation) : l'interlignage respire
        // de quelques centièmes et l'opacité varie très légèrement d'une
        // ligne à l'autre, comme une encre qui ne dépose pas identiquement
        // partout. Invisible consciemment, mais c'est ce qui distingue une
        // page composée d'une grille remplie.
        const drift = Math.sin((i + 1) * 3.7 + seed * 1.9)
        return (
          <text
            key={i}
            x={x + drift * 0.35}
            y={y + i * lineHeight + drift * 0.22}
            fill={`rgba(255,255,255,${(0.4 + drift * 0.035).toFixed(3)})`}
            fontFamily="Georgia, serif"
            fontSize="4.6"
          >
            {l}
          </text>
        )
      })}
    </>
  )
}


function MockupGeneric({
  section,
  page,
  kicker,
  title,
  blocks,
  footnote,
  piece,
  body,
  marginNote,
  folio,
}: {
  section: string
  page: string
  kicker: string
  title: string[]
  blocks: Block[]
  footnote: string
  /** Numéro de la pièce dans les vingt — affiché en filigrane. */
  piece: string
  /** Le corps de texte de la page : de la vraie prose, dense. */
  body: string[]
  /** La note portée dans la marge extérieure, comme une annotation d'auteur. */
  marginNote?: string
  /** Le folio en pied de page, à côté du nom du document. */
  folio?: string
}) {
  let y = 0
  // Le numéro de la pièce sert de graine : chaque page garde toujours les
  // mêmes irrégularités, mais aucune ne les partage avec sa voisine.
  const seed = parseInt(piece, 10) || 0
  const hasDropCap = seed % 3 === 0
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />

      {/* Le numéro de pièce en filigrane, une page sur deux seulement, et
          jamais tout à fait à la même place. Répété à l'identique sur les
          treize pages, il devenait un motif de gabarit plutôt qu'un
          détail d'édition. */}
      {seed % 2 === 0 && (
        <text
          x={392 - (seed % 3) * 6}
          y={330 + (seed % 5) * 8}
          fill="rgba(255,255,255,0.03)"
          fontFamily="Playfair Display, serif"
          fontSize="220"
          fontWeight="700"
          textAnchor="end"
        >
          {piece}
        </text>
      )}

      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />

      {/* En-tête courant : le nom du document à gauche, la section à droite —
          comme sur toute page intérieure d'un ouvrage relié. */}
      <text x="30" y="30" fill="rgba(255,255,255,0.22)" fontFamily="Inter, sans-serif" fontSize="5.5" letterSpacing="1.6">BRAND NARRATIVE ARCHITECTURE</text>
      <text x="370" y="30" fill="rgba(255,255,255,0.22)" fontFamily="Inter, sans-serif" fontSize="5.5" letterSpacing="1.6" textAnchor="end">{section}</text>
      <line x1="30" y1="36" x2="370" y2="36" stroke="rgba(255,255,255,0.07)" strokeWidth="0.6" />

      <text x="30" y="58" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">{page}</text>
      <text x="30" y="82" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">{kicker}</text>
      {title.map((line, i) => (
        <text key={i} x="30" y={110 + i * 24} fill="#fff" fontFamily="Playfair Display, serif" fontSize="19" fontWeight="700">
          {line}
        </text>
      ))}

      {/* Le filet de marge : sépare la colonne de texte de la colonne
          d'annotation, comme dans un livre à marges larges. */}
      <line x1="278" y1={110 + title.length * 24 + 6} x2="278" y2="440" stroke="rgba(255,255,255,0.07)" strokeWidth="0.6" />

      {/* Le corps de texte. La lettrine n'apparaît que sur une page sur
          trois : la mettre partout donnait treize pages bâties sur le même
          gabarit au pixel près, ce qui se lit comme une grille remplie par
          une machine plutôt que comme un document composé page par page.
          Un ouvrage réel ouvre un chapitre par une lettrine, pas chacune
          de ses pages intérieures. */}
      {hasDropCap ? (
        <>
          <text x="30" y={110 + title.length * 24 + 30} fill="#e63946" fontFamily="Playfair Display, serif" fontSize="26" fontWeight="700">
            {body[0]?.charAt(0) ?? ""}
          </text>
          <BodyLines
            lines={[(body[0] ?? "").slice(1), ...body.slice(1)]}
            x={44}
            y={110 + title.length * 24 + 18}
            seed={seed}
          />
        </>
      ) : (
        <BodyLines lines={body} x={30} y={110 + title.length * 24 + 18} seed={seed} />
      )}

      {/* La note de marge : présente sur deux pages sur trois, et jamais à la
          même hauteur — une annotation d'auteur se pose en face du passage
          qu'elle commente, pas à un taquet fixe répété page après page. */}
      {marginNote && seed % 3 !== 1 && (
        <>
          <line x1="288" y1={110 + title.length * 24 + 14 + (seed % 4) * 9} x2="288" y2={110 + title.length * 24 + 40 + (seed % 4) * 9} stroke="#e63946" strokeWidth="1" />
          <text x="294" y={110 + title.length * 24 + 20 + (seed % 4) * 9} fill="rgba(255,255,255,0.34)" fontFamily="Georgia, serif" fontSize="5" fontStyle="italic">
            {marginNote.split("|").map((l, i) => (
              <tspan key={i} x="294" dy={i === 0 ? 0 : 7}>
                {l}
              </tspan>
            ))}
          </text>
        </>
      )}

      {/* Les blocs structurés, sous le corps de texte. */}
      <g transform={`translate(30, ${110 + title.length * 24 + 18 + Math.max(body.length * 8.2, 60) + 22})`}>
        {blocks.map((b, bi) => {
          if (b.t === "lines") {
            const h = b.items.length * 21 + 10
            const g = (
              <g key={bi} transform={`translate(0, ${y})`}>
                {b.items.map((line, i) => (
                  <g key={i} transform={`translate(0, ${i * 21})`}>
                    <circle cx="3" cy="-3" r="1.6" fill="#e63946" />
                    <text x="14" y="0" fill="rgba(255,255,255,0.72)" fontFamily="Playfair Display, serif" fontSize="10" fontStyle="italic">
                      {line}
                    </text>
                  </g>
                ))}
              </g>
            )
            y += h
            return g
          }
          if (b.t === "quote") {
            const h = b.text.length * 21 + 24
            const g = (
              <g key={bi} transform={`translate(0, ${y})`}>
                <line x1="0" y1="-9" x2="0" y2={b.text.length * 21 - 8} stroke="#e63946" strokeWidth="1.6" />
                {b.text.map((line, i) => (
                  <text key={i} x="14" y={i * 21} fill="#fff" fontFamily="Playfair Display, serif" fontSize="11.5" fontStyle="italic">
                    {line}
                  </text>
                ))}
              </g>
            )
            y += h
            return g
          }
          if (b.t === "split") {
            const rowsN = Math.max(b.leftItems.length, b.rightItems.length)
            const h = 26 + rowsN * 17
            const g = (
              <g key={bi} transform={`translate(0, ${y})`}>
                <rect x="0" y="0" width="162" height={h} fill="rgba(230,57,70,0.04)" stroke="rgba(230,57,70,0.25)" strokeWidth="0.8" />
                <text x="12" y="18" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1.4" fontWeight="700">{b.leftTitle}</text>
                {b.leftItems.map((line, i) => (
                  <text key={i} x="12" y={36 + i * 17} fill="rgba(255,255,255,0.7)" fontFamily="Playfair Display, serif" fontSize="9">{line}</text>
                ))}
                <rect x="178" y="0" width="162" height={h} fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
                <text x="190" y="18" fill="rgba(255,255,255,0.55)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1.4" fontWeight="700">{b.rightTitle}</text>
                {b.rightItems.map((line, i) => (
                  <text key={i} x="190" y={36 + i * 17} fill="rgba(255,255,255,0.6)" fontFamily="Playfair Display, serif" fontSize="9">{line}</text>
                ))}
              </g>
            )
            y += h + 14
            return g
          }
          if (b.t === "stat") {
            const h = 104
            const g = (
              <g key={bi} transform={`translate(0, ${y})`}>
                <line x1="0" y1="0" x2="0" y2="78" stroke="#e63946" strokeWidth="1.6" />
                <text x="14" y="48" fill="#fff" fontFamily="Playfair Display, serif" fontSize="34" fontWeight="700">{b.value}</text>
                <text x="14" y="66" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1.8">{b.label}</text>
                <text x="14" y="88" fill="rgba(255,255,255,0.55)" fontFamily="Playfair Display, serif" fontSize="9.5" fontStyle="italic">{b.note}</text>
              </g>
            )
            y += h
            return g
          }
          if (b.t === "meter") {
            const rowH = 38
            const h = b.rows.length * rowH
            const g = (
              <g key={bi} transform={`translate(0, ${y})`}>
                {b.rows.map(([label, pct, note], i) => (
                  <g key={i} transform={`translate(0, ${i * rowH})`}>
                    <text x="0" y="0" fill="rgba(255,255,255,0.7)" fontFamily="Inter, sans-serif" fontSize="7.5" letterSpacing="0.8" fontWeight="700">{label}</text>
                    <rect x="0" y="6" width="340" height="3" fill="rgba(255,255,255,0.1)" />
                    <rect x="0" y="6" width={Math.max(5, (pct / 100) * 340)} height="3" fill="#e63946" />
                    <text x="0" y="25" fill="rgba(255,255,255,0.45)" fontFamily="Playfair Display, serif" fontSize="9" fontStyle="italic">{note}</text>
                  </g>
                ))}
              </g>
            )
            y += h
            return g
          }
          // table
          const h = b.rows.length * 24 + 4
          const g = (
            <g key={bi} transform={`translate(0, ${y})`}>
              {b.rows.map((row, i) => (
                <g key={i} transform={`translate(0, ${i * 24})`}>
                  <line x1="0" y1="14" x2="340" y2="14" stroke="rgba(255,255,255,0.08)" strokeWidth="0.7" />
                  <text x="0" y="8" fill="rgba(255,255,255,0.45)" fontFamily="Inter, sans-serif" fontSize="7.5" letterSpacing="0.8">{row[0]}</text>
                  <text x="340" y="8" fill="#fff" fontFamily="Playfair Display, serif" fontSize="9.5" fontStyle="italic" textAnchor="end">{row[1]}</text>
                </g>
              ))}
            </g>
          )
          y += h
          return g
        })}
      </g>

      {/* Pied de page : la note en italique, puis le folio et le nom court
          du document, séparés par un filet — l'anatomie d'une page reliée. */}
      <line x1="30" y1="452" x2="370" y2="452" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7" />
      <text x="30" y="470" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="9.5" fontStyle="italic">{footnote}</text>
      <line x1="30" y1="492" x2="370" y2="492" stroke="#1a1a1a" strokeWidth="0.7" />
      <text x="30" y="504" fill="rgba(255,255,255,0.25)" fontFamily="Inter, sans-serif" fontSize="5.5" letterSpacing="1.4">SILLAGE · ÉDITION N° 000</text>
      <text x="370" y="504" fill="rgba(255,255,255,0.35)" fontFamily="Georgia, serif" fontSize="7" textAnchor="end">{folio ?? piece}</text>
    </svg>
  )
}


function MockupPositioningMap() {
  return (
    <svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect width="400" height="520" fill="#0d0d0d" />
      <rect x="1" y="1" width="398" height="518" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2">02 · IDENTITY</text>
      <text x="370" y="40" fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" textAnchor="end">P. 15</text>
      <line x1="30" y1="52" x2="370" y2="52" stroke="#1a1a1a" strokeWidth="1" />
      <text x="30" y="90" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3">CARTE DE POSITIONNEMENT</text>
      <text x="30" y="120" fill="#fff" fontFamily="Playfair Display, serif" fontSize="19" fontWeight="700">Deux axes que la catégorie masque.</text>
      <g transform="translate(60, 160)">
        <line x1="0" y1="130" x2="280" y2="130" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
        <line x1="140" y1="0" x2="140" y2="260" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
        <text x="0" y="145" fill="rgba(255,255,255,0.35)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1">GÉNÉRIQUE</text>
        <text x="280" y="145" fill="rgba(255,255,255,0.35)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1" textAnchor="end">NOMMÉ</text>
        <text x="140" y="-6" fill="rgba(255,255,255,0.35)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1" textAnchor="middle">VISIBLE</text>
        <text x="140" y="272" fill="rgba(255,255,255,0.35)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1" textAnchor="middle">DISCRET</text>
        <circle cx="80" cy="60" r="5" fill="rgba(255,255,255,0.3)" />
        <circle cx="60" cy="90" r="5" fill="rgba(255,255,255,0.3)" />
        <circle cx="100" cy="40" r="5" fill="rgba(255,255,255,0.3)" />
        <circle cx="70" cy="70" r="5" fill="rgba(255,255,255,0.3)" />
        <circle cx="220" cy="200" r="9" fill="#e63946" />
        <text x="220" y="222" fill="#e63946" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" textAnchor="middle">VOTRE MAISON</text>
      </g>
      <line x1="30" y1="450" x2="370" y2="450" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="30" y="472" fill="rgba(255,255,255,0.5)" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic">Le quadrant vide n'est pas un hasard. C'est le plan.</text>
      <line x1="30" y1="490" x2="370" y2="490" stroke="#1a1a1a" strokeWidth="1" />
      <text x="200" y="505" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">BRAND NARRATIVE ARCHITECTURE</text>
    </svg>
  )
}

// Les huit pièces restantes de "L'Identité" et les six playbooks de "Le
// Déploiement" — un objet de contenu par page, passé au gabarit générique.
// Chaque page varie volontairement sa composition de blocs (liste, citation,
// comparaison, chiffre, jauge) : feuilleter six playbooks qui se ressemblent
// tous coûte plus cher en crédibilité que de leur donner chacun une forme.
// Le contenu reste en anglais, comme le reste des maquettes : ce sont des
// aperçus stylisés, pas la traduction du vrai livrable.
// Les huit pièces restantes de "L'Identité" et les six playbooks de "Le
// Déploiement".
//
// Écrites sur SILLAGE — la maison fictive du document de démonstration —
// et non en méta-description de ce que chaque pièce contient. Une page qui
// explique ce qu'est un récit tarifaire pourrait appartenir à n'importe
// quelle marque, donc elle se lit comme un gabarit quoi qu'on fasse de sa
// mise en page. Une page qui parle de Claire Vasseur, de Lyon et d'une
// contestation à quatorze mille euros se lit comme une vraie page d'un vrai
// document. C'est le même écart qu'entre un modèle et une commande.
//
// En français : le reste du site l'est, et un fondateur français qui
// feuillette l'aperçu de ce qu'il va recevoir ne devrait pas lire un
// document anglais.
const PRICING = (
  <MockupGeneric
    key="pricing" piece="06"
    body={["Le prix de SILLAGE n'a jamais été discuté avec un client sans que la conversation ne", "bascule aussitôt sur le suivi de chantier — c'est-à-dire sur une catégorie où l'abonnement", "à 89 € par mois se compare à des outils vendus 19 €. La comparaison est perdue d'avance,", "et elle est perdue avant le premier argument.", "Le récit tarifaire déplace le point de comparaison. Ce n'est pas un logiciel de suivi à", "89 € par mois, c'est une trace opposable à 1 068 € par an, face à un coût moyen de", "contestation perdue de quatorze mille euros. Le chiffre ne change pas ; ce à quoi on le", "compare, si.", "Les trois formulations ci-dessous ont été testées en rendez-vous. La troisième est celle", "qui met fin à la négociation sans jamais défendre le montant."]}
    marginNote={"Ne jamais défendre|le prix. Changer|ce à quoi on le|compare."}
    section="02 · IDENTITÉ" page="P. 16" kicker="RÉCIT TARIFAIRE"
    title={["Le prix est une phrase,", "pas un chiffre."]}
    blocks={[
      { t: "stat", value: "1 068 €", label: "PAR AN, PAS 89 € PAR MOIS", note: "Face à quatorze mille euros de contestation perdue. C'est le seul rapport qui compte." },
      { t: "quote", text: ["« Ce n'est pas un outil de chantier.", "C'est ce qui vous reste quand", "le chantier n'existe plus. »"] },
    ]}
    footnote="Le prix cesse d'être discuté quand il cesse d'être comparé au bon objet."
  />
)
const BIOGRAPHY = (
  <MockupGeneric
    key="biography" piece="07"
    body={["Claire Vasseur est présentée quatre fois par semaine et jamais de la même manière : un", "champ de 160 caractères sur LinkedIn, une introduction lue à voix haute par un", "organisateur de salon qui ne l'a jamais rencontrée, une ligne reprise par la presse", "professionnelle sans qu'on lui demande son avis, et un récit long sur la page à propos.", "L'erreur habituelle consiste à écrire la version longue et à la couper trois fois. Chaque", "format a un métier différent : la courte doit survivre au survol, l'orale doit survivre à un", "inconnu qui la lit mal, celle de presse doit survivre à une coupe en deux, la longue doit", "survivre à une lecture lente par quelqu'un qui décide s'il vous fait confiance.", "Les quatre partent de la même rupture — dix ans de maîtrise d'œuvre, puis quatorze", "mille euros payés pour un chantier bien fait qu'elle ne pouvait pas prouver."]}
    marginNote={"Une rupture,|quatre longueurs.|Jamais un texte|coupé trois fois."}
    section="02 · IDENTITÉ" page="P. 17" kicker="SYSTÈME DE BIOGRAPHIES"
    title={["Quatre formats,", "une seule rupture."]}
    blocks={[{ t: "lines", items: ["160 caractères — la ligne qui arrête le survol.", "Introduction orale — lue par quelqu'un d'autre.", "Ligne de presse — citable telle quelle.", "Récit long — l'arc entier, de la rupture à aujourd'hui."] }]}
    footnote="La même personne, calibrée pour quatre salles différentes."
  />
)
const AUTOPSY = (
  <MockupGeneric
    key="autopsy" piece="08"
    body={["Une analyse concurrentielle qui liste des fonctionnalités est un document d'achat, pas", "un document de positionnement. Ce qui compte n'est pas ce que chaque acteur", "construit, c'est ce qu'il ose dire, et ce que le dire lui coûte.", "BATIFLOW dit « pilotez vos chantiers en temps réel » — une phrase que ses onze", "concurrents pourraient signer sans mentir. C'est une description de catégorie portant un", "logo, pas une position. Personne ne l'a choisie ; elle s'est imposée parce qu'elle ne", "coûte rien à personne.", "Le score ci-contre ne juge pas la qualité : une entreprise bien tenue y obtient une note", "basse simplement en disant, avec compétence, ce que tout le monde dit. La fiche la plus", "utile est toujours celle de l'acteur que la fondatrice cite en dernier et d'une voix plate."]}
    marginNote={"Noter ce qu'ils|osent dire, pas ce|qu'ils construisent."}
    section="02 · IDENTITÉ" page="P. 18" kicker="AUTOPSIE CONCURRENTIELLE"
    title={["Une fiche, un score,", "par acteur."]}
    blocks={[{ t: "meter", rows: [
      ["BATIFLOW", 62, "Mêmes mots, revendication plus prudente."],
      ["CHANTIER+", 45, "Le plus visible, le moins engagé."],
      ["ARDOISE", 30, "Le moins cher, et ça s'entend."],
      ["KAPTÉO", 71, "Celui qu'elle cite en dernier."],
    ] }]}
    footnote="Pas un SWOT. Un score de distinction sur ce que chacun ose affirmer."
  />
)
const SIGNATURE_PIECE = (
  <MockupGeneric
    key="signature-piece" piece="09"
    body={["Toute catégorie possède un texte fondateur, que quelqu'un ait eu l'intention de l'écrire", "ou non. C'est la pièce qui énonce le refus assez clairement pour que les autres soient", "obligés d'y répondre, et à partir de là, la conversation se tient sur ses termes.", "Le secteur du bâtiment n'a pas encore le sien sur la question de la trace. Les articles", "existants parlent d'outils, de digitalisation, de gain de temps. Aucun ne dit la chose que", "tout le monde sait : à la seconde où l'échafaudage est démonté, le travail exécuté", "devient invisible, et sa réalité ne dépend plus que de ce que chacun se rappelle.", "L'essai fait deux mille mots, il est signé par Claire Vasseur et non par SILLAGE, et il est", "livré publiable en l'état. Aucune relecture n'est prévue, aucune n'est nécessaire."]}
    marginNote={"Le texte auquel|les autres devront|répondre. Signé|d'un nom, pas|d'un logo."}
    section="02 · IDENTITÉ" page="P. 19" kicker="LA PIÈCE SIGNATURE"
    title={["Un essai,", "publiable en l'état."]}
    blocks={[{ t: "quote", text: ["« Quand l'échafaudage tombe,", "le travail bien fait devient invisible.", "Il ne reste que ce qu'on a enregistré. »"] }]}
    footnote="Format long, sous son nom — pas un article commandé à une agence."
  />
)
const INVESTOR = (
  <MockupGeneric
    key="investor" piece="11"
    body={["La même conviction doit atteindre deux publics qui la jugent selon des critères", "opposés. Une entreprise générale demande ce que ça change pour elle lundi matin. Un", "fonds demande ce qui s'accumule sur cinq ans.", "Racontez à un investisseur l'histoire du chantier et il entend une jolie petite affaire ;", "racontez à une entreprise générale l'histoire de la part de marché et elle entend une", "société qui parle d'elle-même.", "Ce ne sont pas deux positionnements, c'est une position avec deux preuves. Côté client,", "la preuve est la reconnaissance : le moment où il cesse de comparer SILLAGE à un outil", "de suivi. Côté investisseur, la preuve est le pouvoir de fixation du prix et le coût de la", "sortie pour une entreprise qui a déjà trois ans d'historique enregistré."]}
    marginNote={"Une position, deux|preuves. La preuve|change, jamais la|revendication."}
    section="02 · IDENTITÉ" page="P. 20" kicker="TRADUCTION INVESTISSEURS & PARTENAIRES"
    title={["Le même récit,", "pour qui évalue un pari."]}
    blocks={[{ t: "split", leftTitle: "À UNE ENTREPRISE", leftItems: ["« Vous ne paierez plus", "pour ce que vous avez", "bien fait. »"], rightTitle: "À UN INVESTISSEUR", rightItems: ["« Trois ans d'archive", "rendent le départ", "structurellement coûteux. »"] }]}
    footnote="Conviction identique. Chaque public a besoin d'une preuve différente."
  />
)
const VISUAL_BRIEF = (
  <MockupGeneric
    key="visual-brief" piece="12"
    body={["Un designer à qui l'on remet un moodboard exécute un goût. Un designer à qui l'on", "remet un brief argumenté discute — et c'est dans la discussion que l'identité se décide", "réellement. Ce brief est écrit pour qu'on puisse lui répondre qu'il a tort.", "Il ne prescrit aucune police. Il dit ce que la typographie doit faire : SILLAGE s'adresse à", "des gens qui portent des chaussures de sécurité et lisent sur un téléphone sale, au", "bord d'un chantier, entre deux appels. Toute élégance qui suppose un écran propre et", "une lumière stable est une élégance qui échoue.", "La dernière section liste ce qu'il faut refuser : les exécutions techniquement", "irréprochables et stratégiquement fatales — le bleu logiciel, la photo de casque", "souriant, l'illustration isométrique. Nommées, pour être reconnues."]}
    marginNote={"Écrit pour être|discuté, pas|exécuté. Des|raisons, pas des|références."}
    section="02 · IDENTITÉ" page="P. 21" kicker="BRIEF D'IDENTITÉ VISUELLE"
    title={["Écrit pour un designer", "qui réfléchit."]}
    blocks={[{ t: "lines", items: ["La sensation avant la palette.", "Une logique typographique, pas une liste de polices.", "La couleur comme argument, pas comme décoration.", "Ce qu'il faut refuser — le bleu logiciel, le casque souriant."] }]}
    footnote="Un brief qu'un designer peut contredire, pas seulement appliquer."
  />
)
const AUDIENCE = (
  <MockupGeneric
    key="audience" piece="14"
    body={["Quatre segments achètent la même chose pour quatre raisons incompatibles, et un", "message unique écrit pour tous n'en atteint aucun. Ce qui les sépare n'est pas la taille", "ni le métier : c'est le déclencheur, l'événement précis qui fait passer de « je supporte »", "à « je cherche », et la résistance qui suit immédiatement.", "Pour l'entreprise générale, le déclencheur n'est pas la recherche d'un outil, c'est la", "réception d'un courrier — et la recherche démarre trois à six semaines après le", "règlement, jamais pendant, parce que pendant, le dirigeant limite les dégâts.", "Les mots employés en privé comptent plus que ceux employés en public, et l'écart entre", "les deux est l'endroit exact où meurt la plupart du marketing. Un segment figure ici avec", "la recommandation de cesser de l'adresser : c'est une décision, pas un oubli."]}
    marginNote={"Le déclencheur est|un événement,|jamais un profil."}
    section="02 · IDENTITÉ" page="P. 22" kicker="RAPPORT D'INTELLIGENCE AUDIENCE"
    title={["Quatre segments,", "une langue chacun."]}
    blocks={[{ t: "table", rows: [["L'ENTREPRISE GÉNÉRALE", "Un courrier reçu, pas un besoin d'outil."], ["LE MAÎTRE D'ŒUVRE", "Confirmer, ne pas convaincre."], ["L'ARCHITECTE", "Segment servi, plus adressé."], ["LE SOUS-TRAITANT", "Récompenser la mémoire."]] }]}
    footnote="La même offre, formulée quatre fois différemment. À dessein."
  />
)
function playbook(key: string, piece: string, page: string, kicker: string, title: string[], blocks: Block[], footnote: string, body: string[], marginNote: string) {
  return (
    <MockupGeneric key={key} piece={piece} section="03 · DÉPLOIEMENT" page={page} kicker={kicker} title={title} blocks={blocks} footnote={footnote} body={body} marginNote={marginNote} />
  )
}
const PB_MARKETING = playbook("pb-marketing", "15", "P. 26", "PLAYBOOK MARKETING", ["Les angles à explorer,", "ceux à refuser."], [
  { t: "lines", items: ["Explorer : le coût chiffré d'une contestation, ligne par ligne.", "Explorer : pourquoi le classeur de chantier meurt en trois semaines.", "Refuser : toute comparaison frontale avec BATIFLOW.", "Refuser : le vocabulaire de la transformation digitale."] },
], "Ce que l'équipe a le droit d'essayer — et ce qu'elle n'a pas le droit d'essayer.", ["Ce playbook existe pour qu'une décision d'angle se prenne en trente secondes, sans", "réunion et sans arbitrage de Claire. Il ne dit pas quoi produire ; il dit ce qui a le droit", "d'exister sous le nom SILLAGE.", "Les angles à explorer sont donnés avec la raison qui les fait fonctionner, parce qu'un", "angle recopié sans sa raison se dégrade en trois itérations. Les angles à refuser sont", "donnés avec ce qu'ils coûtent, parce qu'une équipe qui ignore le coût finira par essayer", "l'angle interdit le trimestre où les chiffres seront mauvais.", "Le test en bas de page élimine environ la moitié de ce qu'une équipe marketing produit", "spontanément. C'est son objet, pas son effet secondaire."], "Trente secondes.|Sans réunion.|Sans arbitrage.")
const PB_CONTENT = playbook("pb-content", "16", "P. 27", "PLAYBOOK CONTENU", ["La voix,", "transformée en règles."], [
  { t: "lines", items: ["Un fait avant une opinion. Toujours.", "Constater, jamais alarmer.", "Le vocabulaire du chantier, pas celui du logiciel.", "Disculper l'acheteur, systématiquement."] },
], "N'importe qui peut la suivre. Personne n'a besoin de demander d'abord.", ["La voix d'une maison est en général portée par une seule personne et transmise par", "osmose, ce qui veut dire qu'elle se dégrade dès que cette personne cesse de relire", "chaque ligne. L'écrire en règles est ce qui permet à quelqu'un qui n'a jamais rencontré", "Claire d'écrire juste dès sa première semaine.", "Les règles sont formulées comme des opérations, pas comme des adjectifs. Pas « soyez", "authentiques », qui ne se vérifie pas, mais « si la première phrase ne contient ni chiffre,", "ni date, ni scène, réécrivez-la », qui se vérifie. Six règles, chacune avec un avant-après", "montrant la même phrase qui échoue puis qui passe.", "Une règle prime sur les autres et c'est indiqué : quand deux règles se contredisent,", "celle-là gagne, et le conflit n'a pas besoin de remonter."], "Des règles qu'on|peut vérifier. Pas|des adjectifs.")
const PB_SOCIAL = playbook("pb-social", "17", "P. 28", "PLAYBOOK RÉSEAUX SOCIAUX", ["Le ton par plateforme,", "le rythme, les réponses."], [
  { t: "split", leftTitle: "LINKEDIN", leftItems: ["L'argument développé,", "condensé en un post."], rightTitle: "YOUTUBE", rightItems: ["La démonstration filmée", "sur chantier réel."] },
  { t: "lines", items: ["Répondre une fois, précisément, et s'arrêter.", "Jamais : l'appât à engagement déguisé en opinion."] },
], "La doctrine, adaptée par plateforme — jamais diluée.", ["Trois plateformes, trois métiers distincts, une seule doctrine. Le mode d'échec n'est pas", "de publier trop peu, c'est de publier la même chose partout — ce qui se lit comme une", "absence, pas comme une présence.", "Chaque plateforme reçoit un métier défini, une cadence tenable sans héroïsme, et une", "liste de formats structurellement faux pour elle. La règle des commentaires est écrite,", "parce que c'est là qu'une voix soigneusement tenue casse d'habitude : le deuxième", "aller-retour d'une discussion ne sert personne d'autre que les deux qui l'écrivent.", "La dernière section liste ce qui ne se publie jamais : les posts qui performent et ne", "construisent rien. Ils sont nommés, sinon une équipe sous pression les redécouvre", "chaque trimestre."], "La forme change.|La position, jamais.")
const PB_SALES = playbook("pb-sales", "18", "P. 29", "PLAYBOOK VENTE", ["Désamorcer une objection", "avant qu'elle n'arrive."], [
  { t: "quote", text: ["« Votre dernière contestation,", "elle remonte à quand ? »"] },
  { t: "lines", items: ["Ouvrir sur le refus, jamais sur l'offre.", "« On a déjà un groupe photos » → combien de temps pour retrouver mars dernier ?", "Clore en invitant le non, pas en poursuivant le oui."] },
], "Une objection cesse d'en être une quand elle est nommée en premier.", ["L'ordre compte plus que les arguments. Une bonne réponse donnée au mauvais moment", "crée l'objection qu'elle devait fermer, et c'est pourquoi ce playbook fixe la séquence", "avant de fournir la moindre formulation.", "La question d'ouverture est écrite mot pour mot, parce que la première question décide", "de la catégorie dans laquelle la conversation se tient — et dans la mauvaise catégorie,", "SILLAGE est une option parmi douze, quelle que soit la qualité du reste de l'entretien.", "Quatre objections sont cartographiées dans l'ordre où elles arrivent réellement, chacune", "avec ce qu'elle dissimule. L'objection de prix est presque toujours une objection de", "catégorie ; l'objection de redondance est presque toujours une objection d'identité.", "Répondre à la version de surface, c'est perdre l'affaire poliment."], "Répondre à|l'objection cachée,|jamais à celle qui|est formulée.")
const PB_SUPPORT = playbook("pb-support", "19", "P. 30", "PLAYBOOK SUPPORT", ["Tenir la voix quand", "la nouvelle est mauvaise."], [
  { t: "lines", items: ["S'excuser en une phrase. Puis réparer.", "Ne jamais se retrancher derrière la procédure.", "Annoncer la mauvaise nouvelle en premier, jamais enterrée.", "Ne jamais promettre une date pour calmer sur le moment."] },
], "L'identité qui survit au contact d'une réclamation.", ["Une identité qui ne survit pas à la première mauvaise semaine n'est pas une identité,", "c'est une campagne. Ce playbook couvre les moments que personne ne répète : le client", "est en colère, l'outil a échoué, la nouvelle est mauvaise et ne peut pas être adoucie.", "Quatre règles, chacune écrite contre un échec précis. S'excuser en une phrase, parce", "qu'une excuse longue déplace l'attention vers celui qui s'excuse. Ne jamais se retrancher", "derrière la procédure, parce que la procédure est ce qu'une entreprise invoque quand", "elle ne veut pas donner de raison.", "Le cas grave — une donnée perdue chez une maison qui vend une trace — est documenté", "à part, avec le message exact à envoyer. Il est écrit à l'avance précisément parce qu'il", "servira un jour où personne n'aura le sang-froid de bien l'écrire."], "Écrit à l'avance,|pour un jour où|personne ne saura|bien écrire.")
const PB_HR = playbook("pb-hr", "20", "P. 31", "PLAYBOOK RH & MANAGEMENT", ["La culture, retraduite", "en règle de décision."], [
  { t: "stat", value: "1", label: "QUESTION QUI TRANCHE", note: "« Est-ce que cette décision nous ressemble ? » Pas l'ancienneté. Pas le consensus." },
  { t: "lines", items: ["Recruter sur le refus, pas sur le parcours.", "L'intégration enseigne l'ennemi avant le produit."] },
], "La culture comme règle de décision, pas comme affiche dans un couloir.", ["Une doctrine qui ne guide aucune décision interne devient une affiche dans un couloir", "en moins d'un an. Ce playbook la rend opérante aux trois endroits où la culture se décide", "réellement : qui est recruté, ce qu'il apprend en premier, et comment les arbitrages se", "tranchent.", "On recrute sur le refus plutôt que sur le parcours. La question d'entretien est écrite, avec", "ce que signifie une réponse vide et pourquoi elle élimine. L'intégration commence par", "l'ennemi, pas par le produit — un nouvel arrivant qui a compris le moment de la", "contestation trouve seul les bons mots, celui qui a d'abord appris les fonctionnalités", "passe six mois à parler comme un éditeur de logiciel.", "Les arbitrages se tranchent par une question, posée à voix haute, y compris quand la", "réponse coûte de l'argent."], "Une question|tranche. Pas|l'ancienneté. Pas|le consensus.")
const ACT_I_C = [<MockupCover key="c" />, <MockupDedication key="d" />, <MockupIndex key="i" />]
const ACT_II_C = [
  <MockupPerceptionMap key="pm" />,
  <MockupSpine key="sp" />,
  <MockupOrigin key="or" />,
  <MockupManifesto key="mf" />,
  <MockupArchetype key="ar" />,
  PRICING,
  BIOGRAPHY,
  AUTOPSY,
  SIGNATURE_PIECE,
  INVESTOR,
  VISUAL_BRIEF,
  <MockupPositioningMap key="pos" />,
  AUDIENCE,
]
const ACT_III_C = [
  <MockupHomepageRewrite key="hr" />,
  <MockupTagline key="tl" />,
  <MockupContentIdeas key="ci" />,
  <MockupDistribution key="di" />,
  PB_MARKETING,
  PB_CONTENT,
  PB_SOCIAL,
  PB_SALES,
  PB_SUPPORT,
  PB_HR,
]
const ACT_IV_C = [<MockupSignature key="sg" />]

export default function BrandNarrativeArchitecturePage() {
  const t = useT(T)
  const { lang } = useLang()
  const SUCCESS_SIGNALS = t.successSignals
  const ACT_I = t.mockups.actI.map((m, i) => ({ ...m, component: ACT_I_C[i] }))
  const ACT_II = t.mockups.actII.map((m, i) => ({ ...m, component: ACT_II_C[i] }))
  const ACT_III = t.mockups.actIII.map((m, i) => ({ ...m, component: ACT_III_C[i] }))
  const ACT_IV = t.mockups.actIV.map((m, i) => ({ ...m, component: ACT_IV_C[i] }))

  // Le livre feuilletable : les quatre actes mis bout à bout en une seule
  // séquence de onze pages, chacune gardant la mémoire de son acte d'origine
  // pour le repère affiché au-dessus du livre et le regroupement des points.
  const FLIPBOOK_PAGES: FlipbookPage[] = [
    ...ACT_I.map((m) => ({ ...m, actIndex: 0 })),
    ...ACT_II.map((m) => ({ ...m, actIndex: 1 })),
    ...ACT_III.map((m) => ({ ...m, actIndex: 2 })),
    ...ACT_IV.map((m) => ({ ...m, actIndex: 3 })),
  ]
  const FLIPBOOK_ACTS: FlipbookAct[] = t.acts.map((title, i) => ({
    roman: `${t.actLabel} ${["I", "II", "III", "IV"][i]}`,
    title,
  }))
  const hero = useReveal()
  const why = useReveal()
  const build = useReveal()
  const extraction = useReveal()
  const method = useReveal()
  const inside = useReveal()
  const success = useReveal()
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
          <DocumentFlipbook
            pages={FLIPBOOK_PAGES}
            acts={FLIPBOOK_ACTS}
            prevLabel={t.flipPrev}
            nextLabel={t.flipNext}
            pageLabel={t.flipPage}
          />
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

      <section id="sec-invest" ref={invest.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", opacity: invest.visible ? 1 : 0, transform: invest.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 40, textTransform: "uppercase" }}>{t.lInvest}</div>
          <div style={{ fontFamily: SERIF, fontSize: "clamp(4rem,8vw,6rem)", fontWeight: 700, lineHeight: 1, marginBottom: 16, letterSpacing: "-0.04em" }}>
            <span style={{ background: "linear-gradient(135deg," + COLOR + ",#ff1a1a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{t.price}</span>
          </div>
          <div style={{ fontSize: 13, letterSpacing: "0.2em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: 48 }}>{lang === "fr" ? "Un repositionnement complet · Livré et exploitable" : "A complete repositioning · Delivered and exploitable"}</div>
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
          { id: "sec-build", label: t.lBuild },
          { id: "sec-invest", label: t.lInvest },
        ]}
      />

      <Footer />

    </main>
  )
}
