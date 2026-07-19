"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { track } from "@vercel/analytics"
import { useT } from "@/lib/i18n"
import { FORMSPREE_URL } from "@/lib/config"
import { isValidEmail, sanitize, LIMITS, rateLimit } from "@/lib/form-security"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

const STAT_NUMS = [
  { numeric: 47, prefix: "", suffix: "+" },
  { numeric: 8.4, prefix: "\u20ac", suffix: "M" },
  { numeric: 94, prefix: "", suffix: "%" },
  { numeric: 12, prefix: "", suffix: " wks" },
]
const CS_CHART_IDS = ["cs-chart1", "cs-chart2", "cs-chart3"]
const ATLAS_NUMS = ["01", "02", "03", "07", "13", "19"]

const T = {
  en: {
    badge: "Selected Method Cases",
    h1a: "The work,",
    h1b: "received.",
    lead: "How the Strawberry Method translates founder singularity into narrative architecture. Three method cases. Six voices. One discipline.",
    disclaimer: "Composite case studies — built from real commissions, anonymized by design.",
    opH2: "How the method operates.",
    opLead: "Each case below follows the same structure: the narrative problem the founder arrived with, the specific deliverables of the Brand Narrative Architecture applied, and the transformation that followed.",
    lProblem: "The Problem",
    lMethod: "The Method Applied",
    lTransformation: "The Transformation",
    testiKicker: "In their words",
    testiH2: "Six more founders.",
    atlasH2a: "30 Architectures.",
    atlasH2b: "An Atlas.",
    atlasSub: "An Atlas of Narrative Patterns",
    atlasP1: "Thirty composite portraits of the narrative situations founders find themselves in — and the architectural moves that resolved them. Not a portfolio. Not testimonials. A map.",
    atlasP2: "Open, free, readable in your browser. If you recognize yourself in one of them — you have already begun the work.",
    atlasCta: "Read the Atlas \u2192",
    atlasMeta: "128 pages \u00b7 PDF \u00b7 Free \u00b7 One email. No spam.",
    modalFree: "Free Resource",
    modalSub: "128 pages. Free. Enter your email and the Atlas opens immediately.",
    ctaH2a: "One commission per house.",
    ctaH2b: "Four houses per quarter.",
    ctaP: "Each one becomes the next case we won't be allowed to publish.",
    cta: "Commission the Work \u2192",
    stats: ["Houses served", "Client revenue attributed", "Renewal or referral rate", "Average time to ROI"],
    cases: [
      { descriptor: "B2B SaaS · Paris · Post-Series A", founder: "S\u00e9l\u00e9na Voss · Co-fondatrice · Maison Arkane", headline: "From 14k MRR to 58k MRR in 90 days.", problem: "Three years in market, four positioning rewrites, still describing the product the way the engineers did. Sales cycle longer than onboarding. Enterprise tier existed on paper but had never sold. The founder could not finish the sentence \"we are the company that—\" without losing the room.", method: "Differentiation Diagnostic isolated the territorial vacuum: not a collaborative workflow tool but the operating layer for product teams that refuse to drown in tickets. Narrative Platform articulated the conviction in a single defensible sentence. Language System retired the words every competitor was using — \"collaborate\", \"streamline\", \"empower\" — and installed a new lexicon the buyer could not unsee. The enterprise tier received its own narrative architecture, distinct from the core offer.", transformation: "MRR moved from 14k to 58k in the first quarter post-delivery. Two enterprise contracts signed in month two. Average sales cycle cut from 11 weeks to 4. Pipeline doubled the quarter after. The founder reported using the Coherence Guide to brief her first marketing hire — the hire onboarded in three days instead of three weeks.", quote: "We'd been trying to articulate what we do for three years. They got it in three weeks. Our sales cycle is now shorter than our onboarding." },
      { descriptor: "Executive coaching · Independent · Solo founder", founder: "Julien Lerault · Fondateur · Maison Lerault", headline: "2.4M organic views. 1,200 waitlist signups. Zero ad spend.", problem: "Posting consistently for 18 months. Stagnant audience. Followers were peers, not buyers. No recurring idea the audience could attach to. Programs launched to silence. The founder was talented but generic — indistinguishable from twenty other coaches saying the same things in slightly different tones.", method: "Differentiation Diagnostic isolated the single tension only this founder could own: that high-performers are coached by people who have never operated at high performance. Narrative Platform built the conviction system around that fracture. Deployment Kit gave the founder five content territories tied to each pillar, with hook patterns and reframes ready to deploy. The founder stopped guessing what to post — every piece now traced back to a narrative pillar.", transformation: "2.4M organic views across one quarter. 1,200 qualified founders on the waitlist for the next cohort. One short-form essay alone did 870k views and is still pulling leads three months later. The launch sold out without a single ad. The founder now refuses speaking engagements that don't align with one of the five pillars — his calendar reorganized itself around the architecture.", quote: "I stopped guessing what to post. The language system they wrote is the closest thing I've had to a creative co-founder — except it doesn't sleep." },
      { descriptor: "Financial education · Lyon · Bootstrapped", founder: "Camille Th\u00e9a · Fondatrice · Maison Th\u00e9a", headline: "Inbound pipeline 4x. Prospects repeating her own words back.", problem: "Strong product, weak language. The founder knew what her programs delivered but couldn't say it in a way that pre-sold. Leads came in cold and unqualified. Every sales call started from zero — same explanations, same objections, same fatigue. The work was excellent; the framing was costing her the room.", method: "Differentiation Diagnostic surfaced the unclaimed ground: that financial education in France either condescended to beginners or assumed they were already insiders. Narrative Platform named the third position — the rigorous initiation, not the dumbed-down course. Language System gave her the precise lexicon she had been circling for two years: phrases that pre-qualified prospects before they ever booked a call.", transformation: "Inbound pipeline value 4x over the quarter following delivery. Prospects DMing her using the exact phrasing from the Narrative Platform. Cold leads almost disappeared — the people who reached out had already self-qualified through the content. Sales calls became confirmation conversations, not education sessions. The founder reduced her sales call time by 60% while increasing close rate.", quote: "It named the thing I'd been circling for two years. After delivery, prospects started repeating my own words back to me." },
    ],
    testimonials: [
      { quote: "I thought I was buying a brand document. I got a constitution. We now run hiring, partnerships, and product decisions through it.", descriptor: "CEO · Health-tech · Series B" },
      { quote: "The Narrative Platform they wrote is now the founding document of the studio. Every brief starts there. Every hire reads it day one.", descriptor: "Founder · Creative studio · Paris" },
      { quote: "Our Series A deck used three paragraphs lifted directly from the work. The investors said it was the clearest positioning they'd read all year.", descriptor: "Co-founder · Climate tech · Pre-Series A" },
      { quote: "I'd worked with two branding agencies before. This is a different category. They write like screenwriters and think like strategists.", descriptor: "Founder · Atelier · Independent" },
      { quote: "The Language System alone was worth the commission. I read it once and understood why three of my offers had failed.", descriptor: "Independent consultant · 7-figure practice" },
      { quote: "Six months after delivery, I still re-read the Coherence Guide before every launch. Nothing else I've paid for has held up that long.", descriptor: "Founder · DTC brand · Post-seed" },
    ],
    atlasCases: [
      "We had pivoted three times. I no longer knew what to say at dinner.",
      "The narrative that closed Series A could not carry the next eighteen months.",
      "I sold the company. I took two years. I came back. I refuse to be the founder of my last company.",
      "I refuse to hire. I refuse to scale. I cannot keep apologizing for it.",
      "Every brief we receive treats us as an agency. We are not.",
      "We are building something that does not exist. Every prospect tries to put us in a box that already does.",
    ],
  },
  fr: {
    badge: "Cas de m\u00e9thode s\u00e9lectionn\u00e9s",
    h1a: "Le travail,",
    h1b: "re\u00e7u.",
    lead: "Comment la M\u00e9thode Strawberry traduit la singularit\u00e9 d'un fondateur en architecture narrative. Trois cas de m\u00e9thode. Six voix. Une discipline.",
    disclaimer: "\u00c9tudes de cas composites — construites \u00e0 partir de commandes r\u00e9elles, anonymis\u00e9es par choix.",
    opH2: "Comment la m\u00e9thode op\u00e8re.",
    opLead: "Chaque cas ci-dessous suit la m\u00eame structure : le probl\u00e8me narratif avec lequel le fondateur est arriv\u00e9, les livrables pr\u00e9cis de la Brand Narrative Architecture appliqu\u00e9s, et la transformation qui a suivi.",
    lProblem: "Le probl\u00e8me",
    lMethod: "La m\u00e9thode appliqu\u00e9e",
    lTransformation: "La transformation",
    testiKicker: "Dans leurs mots",
    testiH2: "Six autres fondateurs.",
    atlasH2a: "30 Architectures.",
    atlasH2b: "Un Atlas.",
    atlasSub: "Un Atlas des motifs narratifs",
    atlasP1: "Trente portraits composites des situations narratives dans lesquelles se trouvent les fondateurs — et les mouvements d'architecture qui les ont r\u00e9solues. Pas un portfolio. Pas des t\u00e9moignages. Une carte.",
    atlasP2: "Ouvert, gratuit, lisible dans votre navigateur. Si vous vous reconnaissez dans l'un d'eux — vous avez d\u00e9j\u00e0 commenc\u00e9 le travail.",
    atlasCta: "Lire l'Atlas \u2192",
    atlasMeta: "128 pages \u00b7 PDF \u00b7 Gratuit \u00b7 Un email. Pas de spam.",
    modalFree: "Ressource gratuite",
    modalSub: "128 pages. Gratuit. Entre votre email et l'Atlas s'ouvre imm\u00e9diatement.",
    ctaH2a: "Une commande par maison.",
    ctaH2b: "Quatre maisons par trimestre.",
    ctaP: "Chacune devient le prochain cas qu'on n'aura pas le droit de publier.",
    cta: "Commander le travail \u2192",
    stats: ["Maisons accompagn\u00e9es", "Revenus clients attribu\u00e9s", "Reconduction ou recommandation", "D\u00e9lai moyen jusqu'au ROI"],
    cases: [
      { descriptor: "SaaS B2B · Paris · Post-Series A", founder: "S\u00e9l\u00e9na Voss · Co-fondatrice · Maison Arkane", headline: "De 14k \u00e0 58k de MRR en 90 jours.", problem: "Trois ans sur le march\u00e9, quatre r\u00e9\u00e9critures de positionnement, et toujours une description du produit calqu\u00e9e sur celle des ing\u00e9nieurs. Cycle de vente plus long que l'onboarding. Offre enterprise existante sur le papier, jamais vendue. La fondatrice n'arrivait pas \u00e0 finir la phrase \u00ab nous sommes l'entreprise qui\u2026 \u00bb sans perdre la salle.", method: "Le Diagnostic de diff\u00e9renciation a isol\u00e9 le vide territorial : pas un outil de workflow collaboratif, mais la couche op\u00e9rationnelle des \u00e9quipes produit qui refusent de se noyer sous les tickets. La Plateforme narrative a articul\u00e9 la conviction en une seule phrase d\u00e9fendable. Le Syst\u00e8me de langage a retir\u00e9 les mots que tous les concurrents utilisaient — \u00ab collaborer \u00bb, \u00ab fluidifier \u00bb, \u00ab responsabiliser \u00bb — et install\u00e9 un lexique que l'acheteur ne pouvait plus ignorer. L'offre enterprise a re\u00e7u sa propre architecture narrative, distincte de l'offre principale.", transformation: "Le MRR est pass\u00e9 de 14k \u00e0 58k sur le premier trimestre apr\u00e8s livraison. Deux contrats enterprise sign\u00e9s au deuxi\u00e8me mois. Cycle de vente moyen r\u00e9duit de 11 \u00e0 4 semaines. Pipeline doubl\u00e9 le trimestre suivant. La fondatrice a utilis\u00e9 le Guide de coh\u00e9rence pour briefer son premier recrutement marketing — int\u00e9gration en trois jours au lieu de trois semaines.", quote: "On essayait d'articuler ce qu'on fait depuis trois ans. Ils l'ont eu en trois semaines. Notre cycle de vente est d\u00e9sormais plus court que notre onboarding." },
      { descriptor: "Coaching de dirigeants · Ind\u00e9pendant · Fondateur solo", founder: "Julien Lerault · Fondateur · Maison Lerault", headline: "2,4M de vues organiques. 1 200 inscrits en liste d'attente. Z\u00e9ro pub.", problem: "18 mois de publications r\u00e9guli\u00e8res. Audience stagnante. Des abonn\u00e9s pairs, pas acheteurs. Aucune id\u00e9e r\u00e9currente \u00e0 laquelle l'audience pouvait s'attacher. Des programmes lanc\u00e9s dans le silence. Le fondateur \u00e9tait talentueux mais g\u00e9n\u00e9rique — indiff\u00e9renciable de vingt autres coachs disant les m\u00eames choses sur des tons \u00e0 peine diff\u00e9rents.", method: "Le Diagnostic de diff\u00e9renciation a isol\u00e9 la seule tension que ce fondateur pouvait occuper : les hauts performeurs sont coach\u00e9s par des gens qui n'ont jamais op\u00e9r\u00e9 \u00e0 haut niveau. La Plateforme narrative a b\u00e2ti le syst\u00e8me de convictions autour de cette fracture. Le Kit de d\u00e9ploiement lui a donn\u00e9 cinq territoires de contenu li\u00e9s \u00e0 chaque pilier, avec des patterns d'accroche et des recadrages pr\u00eats \u00e0 l'emploi. Le fondateur a cess\u00e9 de deviner quoi poster — chaque pi\u00e8ce remonte d\u00e9sormais \u00e0 un pilier narratif.", transformation: "2,4M de vues organiques sur un trimestre. 1 200 fondateurs qualifi\u00e9s en liste d'attente pour la prochaine cohorte. Un seul essai court a fait 870k vues et g\u00e9n\u00e8re encore des leads trois mois plus tard. Le lancement s'est rempli sans une seule pub. Le fondateur refuse d\u00e9sormais les conf\u00e9rences qui ne s'alignent pas sur l'un des cinq piliers — son agenda s'est r\u00e9organis\u00e9 autour de l'architecture.", quote: "J'ai arr\u00eat\u00e9 de deviner quoi poster. Le syst\u00e8me de langage qu'ils ont \u00e9crit est ce qui se rapproche le plus d'un co-fondateur cr\u00e9atif — sauf qu'il ne dort pas." },
      { descriptor: "\u00c9ducation financi\u00e8re · Lyon · Bootstrapp\u00e9", founder: "Camille Th\u00e9a · Fondatrice · Maison Th\u00e9a", headline: "Pipeline entrant x4. Des prospects qui lui r\u00e9p\u00e8tent ses propres mots.", problem: "Produit solide, langage faible. La fondatrice savait ce que ses programmes d\u00e9livraient mais n'arrivait pas \u00e0 le dire d'une fa\u00e7on qui pr\u00e9-vendait. Les leads arrivaient froids et non qualifi\u00e9s. Chaque appel de vente repartait de z\u00e9ro — m\u00eames explications, m\u00eames objections, m\u00eame fatigue. Le travail \u00e9tait excellent ; le cadrage lui co\u00fbtait la salle.", method: "Le Diagnostic de diff\u00e9renciation a fait remonter le terrain vacant : en France, l'\u00e9ducation financi\u00e8re soit condescend aux d\u00e9butants, soit suppose qu'ils sont d\u00e9j\u00e0 initi\u00e9s. La Plateforme narrative a nomm\u00e9 la troisi\u00e8me position — l'initiation rigoureuse, pas le cours simplifi\u00e9. Le Syst\u00e8me de langage lui a donn\u00e9 le lexique pr\u00e9cis autour duquel elle tournait depuis deux ans : des formulations qui pr\u00e9-qualifiaient les prospects avant m\u00eame la prise de rendez-vous.", transformation: "Valeur du pipeline entrant multipli\u00e9e par 4 sur le trimestre suivant la livraison. Des prospects qui la contactent en reprenant mot pour mot les formulations de la Plateforme narrative. Les leads froids ont quasiment disparu — les gens qui \u00e9crivaient s'\u00e9taient d\u00e9j\u00e0 auto-qualifi\u00e9s via le contenu. Les appels de vente sont devenus des conversations de confirmation, plus des s\u00e9ances p\u00e9dagogiques. Elle a r\u00e9duit son temps d'appel de 60% tout en augmentant son taux de closing.", quote: "\u00c7a a nomm\u00e9 la chose autour de laquelle je tournais depuis deux ans. Apr\u00e8s la livraison, les prospects ont commenc\u00e9 \u00e0 me r\u00e9p\u00e9ter mes propres mots." },
    ],
    testimonials: [
      { quote: "Je pensais acheter un document de marque. J'ai eu une constitution. On fait d\u00e9sormais passer nos recrutements, partenariats et d\u00e9cisions produit par elle.", descriptor: "CEO · Health-tech · Series B" },
      { quote: "La Plateforme narrative qu'ils ont \u00e9crite est aujourd'hui le document fondateur du studio. Chaque brief part de l\u00e0. Chaque recrue la lit d\u00e8s le premier jour.", descriptor: "Fondateur · Studio cr\u00e9atif · Paris" },
      { quote: "Notre deck de Series A reprenait trois paragraphes directement issus du travail. Les investisseurs ont dit que c'\u00e9tait le positionnement le plus clair lu de l'ann\u00e9e.", descriptor: "Co-fondateur · Climate tech · Pre-Series A" },
      { quote: "J'avais travaill\u00e9 avec deux agences de branding avant. C'est une autre cat\u00e9gorie. Ils \u00e9crivent comme des sc\u00e9naristes et pensent comme des strat\u00e8ges.", descriptor: "Fondatrice · Atelier · Ind\u00e9pendante" },
      { quote: "Le Syst\u00e8me de langage \u00e0 lui seul valait la commande. Je l'ai lu une fois et j'ai compris pourquoi trois de mes offres avaient \u00e9chou\u00e9.", descriptor: "Consultant ind\u00e9pendant · Cabinet \u00e0 7 chiffres" },
      { quote: "Six mois apr\u00e8s la livraison, je relis encore le Guide de coh\u00e9rence avant chaque lancement. Rien d'autre de ce que j'ai pay\u00e9 n'a tenu aussi longtemps.", descriptor: "Fondateur · Marque DTC · Post-seed" },
    ],
    atlasCases: [
      "On avait pivot\u00e9 trois fois. Je ne savais plus quoi dire \u00e0 un d\u00eener.",
      "Le r\u00e9cit qui a clos la Series A ne pouvait pas porter les dix-huit mois suivants.",
      "J'ai vendu la bo\u00eete. J'ai pris deux ans. Je suis revenu. Je refuse d'\u00eatre le fondateur de ma derni\u00e8re entreprise.",
      "Je refuse de recruter. Je refuse de scaler. Je ne peux plus continuer \u00e0 m'en excuser.",
      "Chaque brief qu'on re\u00e7oit nous traite comme une agence. On n'en est pas une.",
      "On construit quelque chose qui n'existe pas. Chaque prospect essaie de nous mettre dans une case qui existe d\u00e9j\u00e0.",
    ],
  },
  es: {
    badge: "Casos de m\u00e9todo seleccionados",
    h1a: "El trabajo,",
    h1b: "recibido.",
    lead: "C\u00f3mo el M\u00e9todo Strawberry traduce la singularidad de un fundador en arquitectura narrativa. Tres casos de m\u00e9todo. Seis voces. Una disciplina.",
    disclaimer: "Casos de estudio compuestos — construidos a partir de encargos reales, anonimizados por dise\u00f1o.",
    opH2: "C\u00f3mo opera el m\u00e9todo.",
    opLead: "Cada caso siguiente sigue la misma estructura: el problema narrativo con el que lleg\u00f3 el fundador, los entregables concretos de la Brand Narrative Architecture aplicados, y la transformaci\u00f3n que sigui\u00f3.",
    lProblem: "El problema",
    lMethod: "El m\u00e9todo aplicado",
    lTransformation: "La transformaci\u00f3n",
    testiKicker: "En sus palabras",
    testiH2: "Seis fundadores m\u00e1s.",
    atlasH2a: "30 Arquitecturas.",
    atlasH2b: "Un Atlas.",
    atlasSub: "Un Atlas de patrones narrativos",
    atlasP1: "Treinta retratos compuestos de las situaciones narrativas en las que se encuentran los fundadores — y los movimientos arquitect\u00f3nicos que las resolvieron. No es un portfolio. No son testimonios. Es un mapa.",
    atlasP2: "Abierto, gratuito, legible en su navegador. Si le reconoce en alguno de ellos — ya ha empezado el trabajo.",
    atlasCta: "Leer el Atlas \u2192",
    atlasMeta: "128 p\u00e1ginas \u00b7 PDF \u00b7 Gratis \u00b7 Un email. Sin spam.",
    modalFree: "Recurso gratuito",
    modalSub: "128 p\u00e1ginas. Gratis. Introduzca su email y el Atlas se abre al instante.",
    ctaH2a: "Un encargo por casa.",
    ctaH2b: "Cuatro casas por trimestre.",
    ctaP: "Cada uno se convierte en el pr\u00f3ximo caso que no nos dejar\u00e1n publicar.",
    cta: "Encargar el trabajo \u2192",
    stats: ["Casas atendidas", "Ingresos de clientes atribuidos", "Renovaci\u00f3n o recomendaci\u00f3n", "Tiempo medio hasta el ROI"],
    cases: [
      { descriptor: "SaaS B2B · Par\u00eds · Post-Series A", founder: "S\u00e9l\u00e9na Voss · Co-fondatrice · Maison Arkane", headline: "De 14k a 58k de MRR en 90 d\u00edas.", problem: "Tres a\u00f1os en el mercado, cuatro reescrituras de posicionamiento, y todav\u00eda describiendo el producto como lo hac\u00edan los ingenieros. Ciclo de venta m\u00e1s largo que el onboarding. La oferta enterprise exist\u00eda sobre el papel pero nunca se hab\u00eda vendido. La fundadora no lograba terminar la frase \u00absomos la empresa que\u2026\u00bb sin perder a la sala.", method: "El Diagn\u00f3stico de diferenciaci\u00f3n aisl\u00f3 el vac\u00edo territorial: no una herramienta de workflow colaborativo, sino la capa operativa de los equipos de producto que se niegan a ahogarse en tickets. La Plataforma narrativa articul\u00f3 la convicci\u00f3n en una sola frase defendible. El Sistema de lenguaje retir\u00f3 las palabras que usaba toda la competencia — \u00abcolaborar\u00bb, \u00abagilizar\u00bb, \u00abempoderar\u00bb — e instal\u00f3 un l\u00e9xico que el comprador ya no pod\u00eda ignorar. La oferta enterprise recibi\u00f3 su propia arquitectura narrativa, distinta de la oferta principal.", transformation: "El MRR pas\u00f3 de 14k a 58k en el primer trimestre tras la entrega. Dos contratos enterprise firmados en el segundo mes. Ciclo de venta medio reducido de 11 a 4 semanas. Pipeline duplicado al trimestre siguiente. La fundadora us\u00f3 la Gu\u00eda de coherencia para briefear a su primera contrataci\u00f3n de marketing — se incorpor\u00f3 en tres d\u00edas en lugar de tres semanas.", quote: "Llev\u00e1bamos tres a\u00f1os intentando articular lo que hacemos. Ellos lo lograron en tres semanas. Nuestro ciclo de venta es ahora m\u00e1s corto que nuestro onboarding." },
      { descriptor: "Coaching ejecutivo · Independiente · Fundador solo", founder: "Julien Lerault · Fondateur · Maison Lerault", headline: "2,4M de visualizaciones org\u00e1nicas. 1.200 inscritos en lista de espera. Cero publicidad.", problem: "18 meses publicando con constancia. Audiencia estancada. Seguidores que eran pares, no compradores. Ninguna idea recurrente a la que la audiencia pudiera engancharse. Programas lanzados al silencio. El fundador ten\u00eda talento pero era gen\u00e9rico — indistinguible de otros veinte coaches diciendo lo mismo con tonos apenas distintos.", method: "El Diagn\u00f3stico de diferenciaci\u00f3n aisl\u00f3 la \u00fanica tensi\u00f3n que este fundador pod\u00eda ocupar: a los altos rendidores los entrenan personas que nunca han operado a alto rendimiento. La Plataforma narrativa construy\u00f3 el sistema de convicciones alrededor de esa fractura. El Kit de despliegue le dio cinco territorios de contenido ligados a cada pilar, con patrones de gancho y reencuadres listos para desplegar. El fundador dej\u00f3 de adivinar qu\u00e9 publicar — cada pieza remite ahora a un pilar narrativo.", transformation: "2,4M de visualizaciones org\u00e1nicas en un trimestre. 1.200 fundadores cualificados en lista de espera para la pr\u00f3xima cohorte. Un solo ensayo breve hizo 870k visualizaciones y sigue generando leads tres meses despu\u00e9s. El lanzamiento se agot\u00f3 sin un solo anuncio. El fundador ahora rechaza las charlas que no se alinean con uno de los cinco pilares — su agenda se reorganiz\u00f3 en torno a la arquitectura.", quote: "Dej\u00e9 de adivinar qu\u00e9 publicar. El sistema de lenguaje que escribieron es lo m\u00e1s parecido a un cofundador creativo que he tenido — salvo que no duerme." },
      { descriptor: "Educaci\u00f3n financiera · Lyon · Bootstrapped", founder: "Camille Th\u00e9a · Fondatrice · Maison Th\u00e9a", headline: "Pipeline entrante x4. Prospectos repitiendo sus propias palabras.", problem: "Producto s\u00f3lido, lenguaje d\u00e9bil. La fundadora sab\u00eda lo que entregaban sus programas pero no lograba decirlo de una forma que pre-vendiera. Los leads llegaban fr\u00edos y sin cualificar. Cada llamada de venta empezaba de cero — mismas explicaciones, mismas objeciones, misma fatiga. El trabajo era excelente; el encuadre le costaba la sala.", method: "El Diagn\u00f3stico de diferenciaci\u00f3n sac\u00f3 a la luz el terreno sin reclamar: en Francia, la educaci\u00f3n financiera o bien condesciende con los principiantes o bien asume que ya son iniciados. La Plataforma narrativa nombr\u00f3 la tercera posici\u00f3n — la iniciaci\u00f3n rigurosa, no el curso simplificado. El Sistema de lenguaje le dio el l\u00e9xico preciso alrededor del cual llevaba dos a\u00f1os girando: frases que precualificaban a los prospectos antes incluso de agendar una llamada.", transformation: "Valor del pipeline entrante multiplicado por 4 en el trimestre siguiente a la entrega. Prospectos escribi\u00e9ndole con las formulaciones exactas de la Plataforma narrativa. Los leads fr\u00edos casi desaparecieron — quienes contactaban ya se hab\u00edan autocualificado a trav\u00e9s del contenido. Las llamadas de venta se volvieron conversaciones de confirmaci\u00f3n, no sesiones educativas. Redujo su tiempo de llamada un 60% mientras aumentaba su tasa de cierre.", quote: "Nombr\u00f3 aquello alrededor de lo que llevaba dos a\u00f1os girando. Tras la entrega, los prospectos empezaron a repetirme mis propias palabras." },
    ],
    testimonials: [
      { quote: "Cre\u00eda que compraba un documento de marca. Obtuve una constituci\u00f3n. Ahora pasamos por ella las contrataciones, las alianzas y las decisiones de producto.", descriptor: "CEO · Health-tech · Series B" },
      { quote: "La Plataforma narrativa que escribieron es hoy el documento fundacional del estudio. Cada brief empieza ah\u00ed. Cada incorporaci\u00f3n la lee el primer d\u00eda.", descriptor: "Fundador · Estudio creativo · Par\u00eds" },
      { quote: "Nuestro deck de Series A usaba tres p\u00e1rrafos tomados directamente del trabajo. Los inversores dijeron que era el posicionamiento m\u00e1s claro que hab\u00edan le\u00eddo en todo el a\u00f1o.", descriptor: "Cofundador · Climate tech · Pre-Series A" },
      { quote: "Hab\u00eda trabajado con dos agencias de branding antes. Esto es otra categor\u00eda. Escriben como guionistas y piensan como estrategas.", descriptor: "Fundadora · Atelier · Independiente" },
      { quote: "El Sistema de lenguaje por s\u00ed solo val\u00eda el encargo. Lo le\u00ed una vez y entend\u00ed por qu\u00e9 tres de mis ofertas hab\u00edan fracasado.", descriptor: "Consultor independiente · Pr\u00e1ctica de 7 cifras" },
      { quote: "Seis meses despu\u00e9s de la entrega, sigo releyendo la Gu\u00eda de coherencia antes de cada lanzamiento. Nada m\u00e1s de lo que he pagado ha aguantado tanto.", descriptor: "Fundador · Marca DTC · Post-seed" },
    ],
    atlasCases: [
      "Hab\u00edamos pivotado tres veces. Ya no sab\u00eda qu\u00e9 decir en una cena.",
      "El relato que cerr\u00f3 la Series A no pod\u00eda sostener los siguientes dieciocho meses.",
      "Vend\u00ed la empresa. Me tom\u00e9 dos a\u00f1os. Volv\u00ed. Me niego a ser el fundador de mi \u00faltima empresa.",
      "Me niego a contratar. Me niego a escalar. No puedo seguir disculp\u00e1ndome por ello.",
      "Cada brief que recibimos nos trata como una agencia. No lo somos.",
      "Construimos algo que no existe. Cada prospecto intenta meternos en una caja que ya existe.",
    ],
  },
}


function useCountUp(target: number, duration = 2200, decimals = 0) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); obs.disconnect() }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = progress < 0.7
        ? (progress / 0.7) * 0.85
        : 0.85 + ((progress - 0.7) / 0.3) * 0.15
      setCount(parseFloat((eased * target).toFixed(decimals)))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration, decimals])

  return { ref, count }
}

function AnimatedStat({ stat }: { stat: { numeric: number; prefix: string; suffix: string; label: string } }) {
  const decimals = stat.numeric % 1 !== 0 ? 1 : 0
  const { ref, count } = useCountUp(stat.numeric, 2200, decimals)
  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{ fontFamily: SERIF, fontSize: "clamp(2.25rem,4vw,3rem)", fontWeight: 700, color: COLOR, lineHeight: 1, marginBottom: 12, letterSpacing: "-0.03em" }}>
        {stat.prefix}{decimals === 1 ? count.toFixed(1) : count}{stat.suffix}
      </div>
      <div style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        {stat.label}
      </div>
    </div>
  )
}

function AtlasModal({ onClose }: { onClose: () => void }) {
  const t = useT(T)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Validate and clamp before anything leaves the browser.
    const clean = sanitize(email, LIMITS.email)
    if (!isValidEmail(clean)) {
      setStatus("error")
      return
    }
    const limit = rateLimit("atlas")
    if (!limit.ok) {
      setStatus("error")
      return
    }

    setStatus("loading")
    try {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 15_000)
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        credentials: "omit",
        referrerPolicy: "strict-origin-when-cross-origin",
        signal: controller.signal,
        body: JSON.stringify({ email: clean, source: "atlas_download" }),
      })
      clearTimeout(timeout)
      if (res.ok) {
        setStatus("done")
        track("atlas_email_captured")
        setTimeout(() => {
          window.location.href = "/30-architectures-atlas.pdf"
          onClose()
        }, 1200)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#0d0d0d", border: `1px solid ${COLOR}44`, borderRadius: 12, padding: "clamp(2rem,4vw,3rem)", maxWidth: 480, width: "100%", position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 20, background: "none", border: "none", color: "rgba(255,255,255,0.4)", fontSize: 22, cursor: "pointer", lineHeight: 1 }}>×</button>
        <div style={{ fontSize: 10, letterSpacing: "0.25em", color: COLOR, marginBottom: 16, fontFamily: SANS, textTransform: "uppercase" }}>Free Resource</div>
        <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 12, color: "#fff" }}>
          {t.atlasH2a}<br />{t.atlasH2b}
        </h2>
        <p style={{ fontFamily: SANS, fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, marginBottom: 28 }}>
          {t.modalSub}
        </p>
        {status === "done" ? (
          <p style={{ fontFamily: SERIF, fontSize: 16, fontStyle: "italic", color: COLOR, textAlign: "center", padding: "1rem 0" }}>Opening the Atlas…</p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <input
              type="email"
              maxLength={LIMITS.email}
              autoComplete="email" required placeholder="Your email" value={email}
              onChange={(e) => setEmail(e.target.value.slice(0, LIMITS.email))}
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, padding: "14px 16px", color: "#fff", fontSize: 15, fontFamily: SANS, outline: "none", width: "100%" }}
            />
            <button
              type="submit" disabled={status === "loading"}
              style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", border: "none", borderRadius: 100, padding: "14px 28px", fontSize: 14, fontFamily: SANS, fontWeight: 700, letterSpacing: "0.06em", cursor: "pointer", boxShadow: `0 8px 30px ${GLOW}` }}
            >
              {status === "loading" ? "Opening…" : "Read the Atlas →"}
            </button>
            {status === "error" && <p style={{ fontSize: 13, color: COLOR, textAlign: "center", margin: 0 }}>Something went wrong. Try again.</p>}
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", textAlign: "center", margin: 0, fontFamily: SANS }}>No spam. One email to receive the Atlas.</p>
          </form>
        )}
      </div>
    </div>
  )
}

function useCharts() {
  const initialized = useRef(false)
  useEffect(() => {
    if (initialized.current) return
    const script = document.createElement("script")
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"
    script.onload = () => {
      initialized.current = true
      const Chart = (window as any).Chart
      const gridColor = "rgba(255,255,255,0.08)"
      const tickColor = "rgba(255,255,255,0.4)"

      new Chart(document.getElementById("cs-chart1"), {
        type: "bar",
        data: { labels: ["Before", "After"], datasets: [{ data: [14, 58], backgroundColor: ["rgba(255,255,255,0.15)", "#e63946"], borderRadius: 4, barThickness: 48 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx: any) => ctx.parsed.y + "k MRR" } } }, scales: { x: { grid: { display: false }, ticks: { color: tickColor, font: { size: 12 } }, border: { display: false } }, y: { grid: { color: gridColor }, border: { display: false }, ticks: { color: tickColor, font: { size: 11 }, callback: (v: any) => v + "k" }, min: 0, max: 70 } } },
      })

      new Chart(document.getElementById("cs-chart2"), {
        type: "line",
        data: { labels: ["Month 1", "Month 2", "Month 3"], datasets: [{ data: [120, 980, 2400], borderColor: "#e63946", backgroundColor: "rgba(230,57,70,0.1)", fill: true, tension: 0.4, pointBackgroundColor: "#e63946", pointRadius: 5 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx: any) => ctx.parsed.y + "k views" } } }, scales: { x: { grid: { display: false }, ticks: { color: tickColor, font: { size: 12 } }, border: { display: false } }, y: { grid: { color: gridColor }, border: { display: false }, ticks: { color: tickColor, font: { size: 11 }, callback: (v: any) => v + "k" }, min: 0 } } },
      })

      new Chart(document.getElementById("cs-chart3"), {
        type: "bar",
        data: { labels: ["Before", "After"], datasets: [{ data: [1, 4], backgroundColor: ["rgba(255,255,255,0.15)", "#e63946"], borderRadius: 4, barThickness: 48 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx: any) => ctx.parsed.y + "x pipeline" } } }, scales: { x: { grid: { display: false }, ticks: { color: tickColor, font: { size: 12 } }, border: { display: false } }, y: { grid: { color: gridColor }, border: { display: false }, ticks: { color: tickColor, font: { size: 11 }, callback: (v: any) => v + "x" }, min: 0, max: 5 } } },
      })
    }
    document.head.appendChild(script)
  }, [])
}

export default function CaseStudiesPage() {
  const t = useT(T)
  const GLOBAL_STATS = STAT_NUMS.map((n, i) => ({ ...n, label: t.stats[i] }))
  const METHOD_CASES = t.cases.map((c, i) => ({ ...c, chartId: CS_CHART_IDS[i] }))
  const TESTIMONIALS = t.testimonials
  const ATLAS_CASES = t.atlasCases.map((title, i) => ({ n: ATLAS_NUMS[i], title }))
  useCharts()
  const [showModal, setShowModal] = useState(false)

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>

      {showModal && <AtlasModal onClose={() => setShowModal(false)} />}

      <section style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "140px clamp(1.5rem,4vw,4rem) 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.35, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1000, width: "100%", textAlign: "center", position: "relative" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 40, textTransform: "uppercase" }}>
            {t.badge}
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem,7vw,5rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 32 }}>
            {t.h1a}<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{t.h1b}</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.2rem)", color: "rgba(255,255,255,0.7)", maxWidth: 720, margin: "0 auto", lineHeight: 1.6 }}>
            {t.lead}
          </p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", maxWidth: 600, margin: "32px auto 0", lineHeight: 1.6, fontStyle: "italic", fontFamily: SERIF }}>
            {t.disclaimer}
          </p>
        </div>
      </section>

      <section style={{ padding: "80px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32 }}>
          {GLOBAL_STATS.map((s, i) => <AnimatedStat key={i} stat={s} />)}
        </div>
      </section>

      <section style={{ padding: "120px clamp(1.5rem,4vw,4rem)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>Three Method Cases</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>{t.opH2}</h2>
            <p style={{ fontFamily: SANS, fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.6)", maxWidth: 640, margin: "32px auto 0", lineHeight: 1.7 }}>
              {t.opLead}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
            {METHOD_CASES.map((c, i) => (
              <article key={i} style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "clamp(2rem,4vw,3.5rem)", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12, marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: "0.25em", color: "rgba(255,255,255,0.5)", marginBottom: 8, textTransform: "uppercase" }}>Case N° {String(i + 1).padStart(2, "0")}</div>
                    <div style={{ fontFamily: SERIF, fontSize: "clamp(1.3rem,2vw,1.65rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{c.descriptor}</div>
                  </div>
                  <div style={{ fontFamily: SANS, fontSize: 12, color: COLOR, letterSpacing: "0.02em" }}>{c.founder}</div>
                </div>
                <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.4rem,2.4vw,2rem)", fontWeight: 600, lineHeight: 1.25, letterSpacing: "-0.02em", marginBottom: 40, color: "#fff" }}>{c.headline}</h3>
                <div style={{ marginBottom: 32 }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.25em", color: "rgba(255,255,255,0.5)", marginBottom: 14, textTransform: "uppercase" }}>{t.lProblem}</div>
                  <p style={{ fontFamily: SERIF, fontSize: "clamp(1rem,1.3vw,1.1rem)", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontStyle: "italic" }}>{c.problem}</p>
                </div>
                <div style={{ marginBottom: 32, borderLeft: `2px solid ${COLOR}`, background: "rgba(230,57,70,0.03)", padding: "24px 28px" }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.25em", color: COLOR, marginBottom: 14, textTransform: "uppercase" }}>{t.lMethod}</div>
                  <p style={{ fontFamily: SANS, fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>{c.method}</p>
                </div>
                <div style={{ marginBottom: 40 }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.25em", color: "rgba(255,255,255,0.5)", marginBottom: 14, textTransform: "uppercase" }}>{t.lTransformation}</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>
                    <p style={{ fontFamily: SANS, fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: 0 }}>{c.transformation}</p>
                    <div style={{ position: "relative", height: 200 }}>
                      <canvas id={c.chartId} role="img" aria-label={c.headline} />
                    </div>
                  </div>
                </div>
                <blockquote style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28, fontFamily: SERIF, fontSize: "clamp(1.05rem,1.5vw,1.25rem)", fontStyle: "italic", color: "rgba(255,255,255,0.9)", lineHeight: 1.55, margin: 0 }}>
                  &ldquo;{c.quote}&rdquo;
                  <footer style={{ marginTop: 16, fontFamily: SANS, fontSize: 12, fontStyle: "normal", color: "rgba(255,255,255,0.5)", letterSpacing: "0.02em" }}>
                    &mdash; {c.founder}
                  </footer>
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>{t.testiKicker}</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>{t.testiH2}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ padding: "32px 28px", borderLeft: `2px solid ${COLOR}`, background: "rgba(255,255,255,0.02)" }}>
                <p style={{ fontFamily: SERIF, fontSize: "1.02rem", fontStyle: "italic", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, marginBottom: 24 }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ fontFamily: SANS, fontSize: 12, color: COLOR, letterSpacing: "0.04em" }}>{t.descriptor}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 800, background: `radial-gradient(circle, ${COLOR}, transparent 70%)`, opacity: 0.06, filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start", marginBottom: 80 }} className="atlas-grid">
            <div>
              <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>Free Resource</div>
              <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 24 }}>
                {t.atlasH2a}<br />
                <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{t.atlasH2b}</span>
              </h2>
              <p style={{ fontFamily: SANS, fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 32 }}>
                {t.atlasP1}
              </p>
              <p style={{ fontFamily: SERIF, fontSize: "1rem", fontStyle: "italic", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: 40 }}>
                {t.atlasP2}
              </p>
              <button
                onClick={() => { track("atlas_click"); setShowModal(true) }}
                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "16px 36px", borderRadius: 100, fontSize: 14, fontFamily: SANS, fontWeight: 700, letterSpacing: "0.06em", boxShadow: `0 12px 40px ${GLOW}`, border: "none", cursor: "pointer" }}
              >
                {t.atlasCta}
              </button>
              <div style={{ marginTop: 14, fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: SANS, letterSpacing: "0.04em" }}>
                {t.atlasMeta}
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ background: "linear-gradient(160deg, #1a0a0a, #0a0a0a)", border: `1px solid ${COLOR}33`, borderRadius: 12, padding: "48px 40px", boxShadow: `0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px ${COLOR}22` }}>
                <div style={{ fontSize: 9, letterSpacing: "0.25em", color: COLOR, marginBottom: 24, fontFamily: SANS }}>STRAWBERRY PRODUCTION</div>
                <div style={{ width: 32, height: 1, background: `${COLOR}66`, marginBottom: 28 }} />
                <div style={{ fontFamily: SERIF, fontSize: 11, color: "rgba(255,255,255,0.4)", fontStyle: "italic", marginBottom: 12 }}>N&deg; 001</div>
                <div style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 700, color: "#fff", lineHeight: 0.95, marginBottom: 8 }}>30</div>
                <div style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 700, color: "#fff", lineHeight: 1, marginBottom: 20 }}>Architectures</div>
                <div style={{ width: 24, height: 1, background: `${COLOR}66`, marginBottom: 16 }} />
                <div style={{ fontFamily: SERIF, fontSize: 13, fontStyle: "italic", color: COLOR, marginBottom: 40 }}>{t.atlasSub}</div>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
                  <div style={{ width: 36, height: 36, border: `1px solid ${COLOR}55`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: COLOR, fontSize: 16 }}>&#10022;</span>
                  </div>
                </div>
                <div style={{ fontFamily: SERIF, fontSize: 11, fontStyle: "italic", color: "rgba(255,255,255,0.4)", textAlign: "center" }}>Strawberry Production</div>
                <div style={{ fontSize: 9, letterSpacing: "0.2em", color: "rgba(255,255,255,0.25)", textAlign: "center", marginTop: 4, fontFamily: SANS }}>PARIS</div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 56 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: "rgba(255,255,255,0.4)", marginBottom: 32, textTransform: "uppercase", fontFamily: SANS }}>A sample of what&apos;s inside</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
              {ATLAS_CASES.map((c) => (
                <div key={c.n} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ fontFamily: SERIF, fontSize: 18, fontStyle: "italic", color: COLOR, fontWeight: 700, lineHeight: 1, flexShrink: 0, minWidth: 28 }}>{c.n}.</div>
                  <div style={{ fontFamily: SERIF, fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.5, fontStyle: "italic" }}>{c.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "140px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.5, pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 24 }}>
            {t.ctaH2a}<br />{t.ctaH2b}
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: 48, maxWidth: 600, margin: "0 auto 48px" }}>
            {t.ctaP}
          </p>
          <Link
            href="/brand-narrative-audit"
            onClick={() => track("commission_click", { from: "case_studies_final_cta" })}
            style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "20px 52px", borderRadius: 100, fontSize: 16, fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em", fontFamily: SANS, boxShadow: `0 20px 60px ${GLOW}` }}
          >
            {t.cta}
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .atlas-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </main>
  )
}
