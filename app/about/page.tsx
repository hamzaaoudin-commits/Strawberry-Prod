"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { useT } from "@/lib/i18n"
import { AnimatedOrb } from "@/components/strawberry/animated-orb"
import { useScrollReveal } from "@/hooks/use-strawberry"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

const T = {
  en: {
    badge: "The Studio",
    h1a: "A studio of one.",
    h1b: "From Paris. By inheritance.",
    lead: "Strawberry Production is a narrative perception studio operating from Paris. One founder. Four commissions per quarter. A single offer, refined commission after commission. This page is what you should know before you write.",
    whyKicker: "Why this studio exists",
    whyH2: "Every market eventually agrees on how to be talked about.",
    whyP1: "Founders adopt the words of their category because language is contagious. AI accelerates this collapse — generating, infinitely, the same brand documents that already sound alike. In that noise, quality is no longer enough. Everyone has become competent.",
    whyP2: "What cannot be generated is an identity. This studio exists to write the identity AI cannot.",
    refuseKicker: "The Discipline",
    refuseH2: "What this studio refuses.",
    refuseLead: "A studio is defined by what it does not do. The list below is the structural backbone of the practice.",
    refusals: [
      { title: "I refuse to scale.", body: "No team, no associates, no plans for either. Every word delivered to a commission has been written by me. AI scales infinitely. I do not. Four houses per quarter is not a sales tactic — it is the structural limit of one mind paying full attention." },
      { title: "I refuse to work with everyone.", body: "Most inquiries do not become commissions. Some founders are not ready. Some are ready but for a different studio. The work I do depends on selecting houses whose convictions I find worth defending. Politeness is not enough — alignment is." },
      { title: "I refuse the agency model.", body: "No open-ended monthly arrangements, no scope creep, no hourly billing, no account managers. Each engagement is a commission — a defined four-week architecture for a single house, delivered as a single editorial document. The agency economy optimizes for volume. This studio optimizes for what survives a decade." },
      { title: "I refuse the vocabulary of the field.", body: "Solutions, synergy, leverage, disrupt, game-changer, ROI — these are the words by which mediocre studios announce themselves. They appear nowhere in the work this studio produces. The first thing I retire from your brand is the language that makes you sound like the field." },
    ],
    inheritKicker: "By Inheritance",
    inheritH2: "A French school of narrative precision.",
    inheritLead: "This studio operates from Paris because the work belongs to a lineage — a culture where what is not said matters as much as what is, where a sentence is rewritten until nothing can be removed, where the editorial register is a form of authorship rather than a marketing tool.",
    inheritance: [
      { name: "Roland Barthes", note: "On the architecture of myth and the precision of signs." },
      { name: "Michel Foucault", note: "On how discourse shapes what can be said — and what becomes invisible." },
      { name: "Bernard Pivot", note: "On the dignity of reading carefully, and writing only what survives the page." },
      { name: "Fr\u00e9d\u00e9ric Beigbeder", note: "On the editorial voice as a weapon, and refusal as a form of authorship." },
    ],
    inheritFoot: "The studio does not invoke these names for decoration. It inherits a discipline — and applies that discipline to founders whose houses deserve it.",
    bookKicker: "The Book",
    bookTitle: "The Clearest Doctrine",
    bookSub: "Narrative Architecture in the Age of the Machine",
    bookAuthor: "Hamza El Jaouahiry \u00b7 158 pages \u00b7 Strawberry Production, Paris",
    bookEpigraph: "In a market where everyone has access to the same machine, the best product no longer wins. The clearest doctrine does.",
    bookP1: "The doctrine this studio works from is not improvised commission by commission. It is written down, argued at length, and published \u2014 in French and in English.",
    bookP2: "The book sets out why the machine made everyone identical, what the French school of narrative precision inherits, and the five-stage method by which a house is excavated rather than invented. Its final section demonstrates the method on three houses, end to end.",
    bookQuote: "The machine made everyone identical. Start underground.",
    bookNote: "Available in French \u2014 La Doctrine la plus claire \u2014 and in English.",
    founderKicker: "The Founder",
    founderName: "Hamza El Jaouahiry.",
    founderCaption: "The Sorbonne \u00b7 Keynote on brand survival in the age of AI",
    founderP1: "I founded this studio because I could not find the work I wanted to read. The brand documents being produced by every consultancy I respected had collapsed into a shared, unreadable register — competent, polished, indistinguishable, machine-replaceable. The houses I admired most were being described in language that erased them.",
    founderP2: "Strawberry Production is the studio I would have hired. A single founder, working at full attention on four houses per quarter, writing every word by hand, refusing the vocabulary of the field. The work is editorial in shape because it inherits a French school where editorial writing was never separate from intellectual seriousness.",
    founderP3: "When you commission the work, you commission me. There is no team to be passed to, no junior writer to be substituted, no scope to be negotiated downward. The document you receive will have been written entirely by the person whose name appears on the signature page.",
    founderQuote: "\"I do not build brands. I write the constitution by which a house declares what it is, what it refuses, and how it sounds when it speaks.\"",
    founderSig: "Hamza El Jaouahiry \u00b7 Founder",
    practiceKicker: "The Practice",
    practiceH2: "How the work is made.",
    practiceLead: "Four operating principles. They explain why a commission takes four weeks, why no two ever look alike, and why the work survives the month after delivery.",
    discipline: [
      { title: "Extraction before architecture.", body: "Every commission begins with conversation, not strategy. I make founders talk, at length, until something appears that no machine could have written — the conviction beneath the elevator pitch, the refusal beneath the founding story. From that human material, the architecture is built." },
      { title: "Single authorship, no committees.", body: "One person extracts the founder's truth. The same person writes the architecture. The same person delivers it. No handoffs, no telephone games, no smoothing committees. The voice of the document is the voice of one mind that paid attention to one founder for four weeks." },
      { title: "Editorial, not advisory.", body: "I do not produce decks. I produce documents — designed to be read like manifestos and consulted like constitutions. The artifact is built to outlive the engagement. The bound edition, optional, is delivered to be kept on a shelf, not opened on a screen." },
      { title: "The thirty-day walkthrough.", body: "One month after delivery, we meet again. Ninety minutes, on call or in person. The question I ask is what has changed. The document is the artifact. The walkthrough is the moment it becomes operational. AI has no memory of your house. I do." },
    ],
    ctaH2: "Now you know who you would be working with.",
    ctaP: "One commission per house. Four houses per quarter. The next slot opens to the founder whose house deserves it most.",
    cta: "See the Commission \u2192",
    ctaFoot: "Confidential commission \u00b7 NDA available",
  },
  fr: {
    badge: "Le Studio",
    h1a: "Un studio d'un seul.",
    h1b: "Depuis Paris. Par h\u00e9ritage.",
    lead: "Strawberry Production est un studio de perception narrative bas\u00e9 \u00e0 Paris. Un fondateur. Quatre commandes par trimestre. Une seule offre, affin\u00e9e commande apr\u00e8s commande. Cette page, c'est ce qu'il faut savoir avant de m'\u00e9crire.",
    whyKicker: "Pourquoi ce studio existe",
    whyH2: "Chaque march\u00e9 finit par s'accorder sur la fa\u00e7on dont on doit parler de lui.",
    whyP1: "Les fondateurs adoptent les mots de leur cat\u00e9gorie parce que le langage est contagieux. L'IA acc\u00e9l\u00e8re cet effondrement — en g\u00e9n\u00e9rant, \u00e0 l'infini, les m\u00eames documents de marque qui se ressemblent d\u00e9j\u00e0. Dans ce bruit, la qualit\u00e9 ne suffit plus. Tout le monde est devenu comp\u00e9tent.",
    whyP2: "Ce qui ne peut pas \u00eatre g\u00e9n\u00e9r\u00e9, c'est une identit\u00e9. Ce studio existe pour \u00e9crire l'identit\u00e9 que l'IA ne peut pas \u00e9crire.",
    refuseKicker: "La Discipline",
    refuseH2: "Ce que ce studio refuse.",
    refuseLead: "Un studio se d\u00e9finit par ce qu'il ne fait pas. La liste ci-dessous est l'ossature structurelle de la pratique.",
    refusals: [
      { title: "Je refuse de scaler.", body: "Pas d'\u00e9quipe, pas d'associ\u00e9s, aucun projet d'en avoir. Chaque mot livr\u00e9 dans une commande a \u00e9t\u00e9 \u00e9crit par moi. L'IA scale \u00e0 l'infini. Moi non. Quatre maisons par trimestre n'est pas une tactique commerciale — c'est la limite structurelle d'un seul esprit \u00e0 pleine attention." },
      { title: "Je refuse de travailler avec tout le monde.", body: "La plupart des demandes ne deviennent pas des commandes. Certains fondateurs ne sont pas pr\u00eats. D'autres le sont, mais pour un autre studio. Le travail que je fais d\u00e9pend du choix de maisons dont les convictions me semblent dignes d'\u00eatre d\u00e9fendues. La politesse ne suffit pas — l'alignement, si." },
      { title: "Je refuse le mod\u00e8le agence.", body: "Pas de r\u00e9tainers, pas de d\u00e9rive de p\u00e9rim\u00e8tre, pas de facturation horaire, pas de chefs de projet. Chaque engagement est une commande — une architecture d\u00e9finie sur quatre semaines pour une seule maison, livr\u00e9e comme un document \u00e9ditorial unique. L'\u00e9conomie des agences optimise le volume. Ce studio optimise ce qui survit une d\u00e9cennie." },
      { title: "Je refuse le vocabulaire du champ.", body: "Solutions, synergie, levier, disrupter, game-changer, ROI — ce sont les mots par lesquels les studios m\u00e9diocres s'annoncent. Ils n'apparaissent nulle part dans le travail que produit ce studio. La premi\u00e8re chose que je retire de votre marque, c'est le langage qui vous fait sonner comme le champ." },
    ],
    inheritKicker: "Par H\u00e9ritage",
    inheritH2: "Une \u00e9cole fran\u00e7aise de pr\u00e9cision narrative.",
    inheritLead: "Ce studio op\u00e8re depuis Paris parce que le travail appartient \u00e0 une lign\u00e9e — une culture o\u00f9 ce qui n'est pas dit compte autant que ce qui l'est, o\u00f9 une phrase est r\u00e9\u00e9crite jusqu'\u00e0 ce que rien ne puisse en \u00eatre retir\u00e9, o\u00f9 le registre \u00e9ditorial est une forme d'auctorialit\u00e9 plut\u00f4t qu'un outil marketing.",
    inheritance: [
      { name: "Roland Barthes", note: "Sur l'architecture du mythe et la pr\u00e9cision des signes." },
      { name: "Michel Foucault", note: "Sur la fa\u00e7on dont le discours fa\u00e7onne ce qui peut \u00eatre dit — et ce qui devient invisible." },
      { name: "Bernard Pivot", note: "Sur la dignit\u00e9 de lire attentivement, et de n'\u00e9crire que ce qui survit \u00e0 la page." },
      { name: "Fr\u00e9d\u00e9ric Beigbeder", note: "Sur la voix \u00e9ditoriale comme arme, et le refus comme forme d'auctorialit\u00e9." },
    ],
    inheritFoot: "Le studio n'invoque pas ces noms pour d\u00e9corer. Il h\u00e9rite d'une discipline — et applique cette discipline aux fondateurs dont les maisons la m\u00e9ritent.",
    bookKicker: "Le Livre",
    bookTitle: "La Doctrine la plus claire",
    bookSub: "L'architecture narrative \u00e0 l'\u00e2ge de la machine",
    bookAuthor: "Hamza El Jaouahiry \u00b7 158 pages \u00b7 Strawberry Production, Paris",
    bookEpigraph: "Sur un march\u00e9 o\u00f9 tout le monde a acc\u00e8s \u00e0 la m\u00eame machine, le meilleur produit ne gagne plus. C'est la doctrine la plus claire qui gagne.",
    bookP1: "La doctrine dont ce studio travaille n'est pas improvis\u00e9e commande apr\u00e8s commande. Elle est \u00e9crite, argument\u00e9e sur la longueur, et publi\u00e9e \u2014 en fran\u00e7ais et en anglais.",
    bookP2: "Le livre expose pourquoi la machine a rendu tout le monde identique, ce dont h\u00e9rite l'\u00e9cole fran\u00e7aise de pr\u00e9cision narrative, et la m\u00e9thode en cinq \u00e9tapes par laquelle une maison s'excave au lieu de s'inventer. Sa derni\u00e8re partie d\u00e9montre la m\u00e9thode sur trois maisons, de bout en bout.",
    bookQuote: "La machine a rendu tout le monde identique. Commencez sous terre.",
    bookNote: "Disponible en fran\u00e7ais et en anglais \u2014 The Clearest Doctrine.",
    founderKicker: "Le Fondateur",
    founderName: "Hamza El Jaouahiry.",
    founderCaption: "La Sorbonne \u00b7 Keynote sur la survie des marques \u00e0 l'\u00e8re de l'IA",
    founderP1: "J'ai fond\u00e9 ce studio parce que je ne trouvais pas le travail que je voulais lire. Les documents de marque produits par tous les cabinets que je respectais s'\u00e9taient effondr\u00e9s dans un registre commun, illisible — comp\u00e9tent, poli, indiff\u00e9renciable, rempla\u00e7able par une machine. Les maisons que j'admirais le plus \u00e9taient d\u00e9crites dans un langage qui les effa\u00e7ait.",
    founderP2: "Strawberry Production est le studio que j'aurais engag\u00e9. Un seul fondateur, \u00e0 pleine attention sur quatre maisons par trimestre, \u00e9crivant chaque mot \u00e0 la main, refusant le vocabulaire du champ. Le travail est \u00e9ditorial dans sa forme parce qu'il h\u00e9rite d'une \u00e9cole fran\u00e7aise o\u00f9 l'\u00e9criture \u00e9ditoriale n'a jamais \u00e9t\u00e9 s\u00e9par\u00e9e du s\u00e9rieux intellectuel.",
    founderP3: "Quand vous commandez le travail, c'est moi que vous commandez. Pas d'\u00e9quipe \u00e0 qui vous repasser, pas de r\u00e9dacteur junior \u00e0 substituer, pas de p\u00e9rim\u00e8tre \u00e0 n\u00e9gocier \u00e0 la baisse. Le document que vous re\u00e7ois aura \u00e9t\u00e9 enti\u00e8rement \u00e9crit par la personne dont le nom figure sur la page de signature.",
    founderQuote: "\u00ab Je ne construis pas des marques. J'\u00e9cris la constitution par laquelle une maison d\u00e9clare ce qu'elle est, ce qu'elle refuse, et comment elle sonne quand elle parle. \u00bb",
    founderSig: "Hamza El Jaouahiry \u00b7 Fondateur",
    practiceKicker: "La Pratique",
    practiceH2: "Comment le travail se fait.",
    practiceLead: "Quatre principes op\u00e9ratoires. Ils expliquent pourquoi une commande prend quatre semaines, pourquoi deux ne se ressemblent jamais, et pourquoi le travail survit au mois qui suit la livraison.",
    discipline: [
      { title: "L'extraction avant l'architecture.", body: "Chaque commande commencez par une conversation, pas une strat\u00e9gie. Je fais parler les fondateurs, longuement, jusqu'\u00e0 ce qu'appara\u00eesse quelque chose qu'aucune machine n'aurait pu \u00e9crire — la conviction sous le pitch, le refus sous le r\u00e9cit fondateur. De cette mati\u00e8re humaine, l'architecture est b\u00e2tie." },
      { title: "Auctorialit\u00e9 unique, pas de comit\u00e9s.", body: "Une personne extrait la v\u00e9rit\u00e9 du fondateur. La m\u00eame personne \u00e9crit l'architecture. La m\u00eame personne la livre. Pas de passages de relais, pas de t\u00e9l\u00e9phone arabe, pas de comit\u00e9s de lissage. La voix du document est celle d'un seul esprit qui a pr\u00eat\u00e9 attention \u00e0 un seul fondateur pendant quatre semaines." },
      { title: "\u00c9ditorial, pas consultatif.", body: "Je ne produis pas de decks. Je produis des documents — con\u00e7us pour \u00eatre lus comme des manifestes et consult\u00e9s comme des constitutions. L'artefact est fait pour survivre \u00e0 la mission. L'\u00e9dition reli\u00e9e, en option, est livr\u00e9e pour \u00eatre gard\u00e9e sur une \u00e9tag\u00e8re, pas ouverte sur un \u00e9cran." },
      { title: "La revue \u00e0 trente jours.", body: "Un mois apr\u00e8s la livraison, on se revoit. Quatre-vingt-dix minutes, en visio ou en personne. La question que je pose : qu'est-ce qui a chang\u00e9. Le document est l'artefact. La revue est le moment o\u00f9 il devient op\u00e9rationnel. L'IA n'a aucune m\u00e9moire de votre maison. Moi si." },
    ],
    ctaH2: "Maintenant vous savez avec qui vous travailleriez.",
    ctaP: "Une commande par maison. Quatre maisons par trimestre. Le prochain cr\u00e9neau s'ouvre au fondateur dont la maison le m\u00e9rite le plus.",
    cta: "Voir la commande \u2192",
    ctaFoot: "Commande confidentielle \u00b7 NDA disponible",
  },
  es: {
    badge: "El Estudio",
    h1a: "Un estudio de uno solo.",
    h1b: "Desde Par\u00eds. Por herencia.",
    lead: "Strawberry Production es un estudio de percepci\u00f3n narrativa que opera desde Par\u00eds. Un fundador. Cuatro encargos por trimestre. Una sola oferta, afinada encargo tras encargo. Esta p\u00e1gina es lo que deber\u00edas saber antes de escribir.",
    whyKicker: "Por qu\u00e9 existe este estudio",
    whyH2: "Todo mercado acaba poni\u00e9ndose de acuerdo sobre c\u00f3mo hay que hablar de \u00e9l.",
    whyP1: "Los fundadores adoptan las palabras de su categor\u00eda porque el lenguaje es contagioso. La IA acelera este colapso — generando, infinitamente, los mismos documentos de marca que ya suenan igual. En ese ruido, la calidad ya no basta. Todos se han vuelto competentes.",
    whyP2: "Lo que no puede generarse es una identidad. Este estudio existe para escribir la identidad que la IA no puede.",
    refuseKicker: "La Disciplina",
    refuseH2: "Lo que este estudio rechaza.",
    refuseLead: "Un estudio se define por lo que no hace. La lista siguiente es el esqueleto estructural de la pr\u00e1ctica.",
    refusals: [
      { title: "Me niego a escalar.", body: "Sin equipo, sin socios, sin planes de tenerlos. Cada palabra entregada en un encargo la he escrito yo. La IA escala infinitamente. Yo no. Cuatro casas por trimestre no es una t\u00e1ctica de venta — es el l\u00edmite estructural de una sola mente a plena atenci\u00f3n." },
      { title: "Me niego a trabajar con todo el mundo.", body: "La mayor\u00eda de las consultas no se convierten en encargos. Algunos fundadores no est\u00e1n listos. Otros lo est\u00e1n, pero para otro estudio. El trabajo que hago depende de elegir casas cuyas convicciones me parecen dignas de defender. La cortes\u00eda no basta — la alineaci\u00f3n, s\u00ed." },
      { title: "Me niego al modelo de agencia.", body: "Sin acuerdos mensuales indefinidos, sin desv\u00edos de alcance, sin facturaci\u00f3n por horas, sin gestores de cuenta. Cada compromiso es un encargo — una arquitectura definida de cuatro semanas para una sola casa, entregada como un \u00fanico documento editorial. La econom\u00eda de las agencias optimiza el volumen. Este estudio optimiza lo que sobrevive una d\u00e9cada." },
      { title: "Me niego al vocabulario del campo.", body: "Soluciones, sinergia, palanca, disrumpir, game-changer, ROI — son las palabras con las que los estudios mediocres se anuncian. No aparecen en ninguna parte del trabajo que produce este estudio. Lo primero que retiro de su marca es el lenguaje que le hace sonar como el campo." },
    ],
    inheritKicker: "Por Herencia",
    inheritH2: "Una escuela francesa de precisi\u00f3n narrativa.",
    inheritLead: "Este estudio opera desde Par\u00eds porque el trabajo pertenece a un linaje — una cultura donde lo que no se dice importa tanto como lo que s\u00ed, donde una frase se reescribe hasta que nada puede quitarse, donde el registro editorial es una forma de autor\u00eda y no una herramienta de marketing.",
    inheritance: [
      { name: "Roland Barthes", note: "Sobre la arquitectura del mito y la precisi\u00f3n de los signos." },
      { name: "Michel Foucault", note: "Sobre c\u00f3mo el discurso moldea lo que puede decirse — y lo que se vuelve invisible." },
      { name: "Bernard Pivot", note: "Sobre la dignidad de leer con cuidado, y de escribir solo lo que sobrevive a la p\u00e1gina." },
      { name: "Fr\u00e9d\u00e9ric Beigbeder", note: "Sobre la voz editorial como arma, y el rechazo como forma de autor\u00eda." },
    ],
    inheritFoot: "El estudio no invoca estos nombres como decoraci\u00f3n. Hereda una disciplina — y aplica esa disciplina a fundadores cuyas casas la merecen.",
    bookKicker: "El Libro",
    bookTitle: "La Doctrina m\u00e1s clara",
    bookSub: "La arquitectura narrativa en la era de la m\u00e1quina",
    bookAuthor: "Hamza El Jaouahiry \u00b7 158 p\u00e1ginas \u00b7 Strawberry Production, Par\u00eds",
    bookEpigraph: "En un mercado donde todos tienen acceso a la misma m\u00e1quina, el mejor producto ya no gana. Gana la doctrina m\u00e1s clara.",
    bookP1: "La doctrina desde la que trabaja este estudio no se improvisa encargo tras encargo. Est\u00e1 escrita, argumentada con extensi\u00f3n y publicada \u2014 en franc\u00e9s y en ingl\u00e9s.",
    bookP2: "El libro expone por qu\u00e9 la m\u00e1quina volvi\u00f3 id\u00e9nticos a todos, qu\u00e9 hereda la escuela francesa de precisi\u00f3n narrativa, y el m\u00e9todo en cinco etapas por el cual una casa se excava en lugar de inventarse. Su \u00faltima parte demuestra el m\u00e9todo sobre tres casas, de principio a fin.",
    bookQuote: "La m\u00e1quina volvi\u00f3 id\u00e9nticos a todos. Empiece bajo tierra.",
    bookNote: "Disponible en franc\u00e9s \u2014 La Doctrine la plus claire \u2014 y en ingl\u00e9s.",
    founderKicker: "El Fundador",
    founderName: "Hamza El Jaouahiry.",
    founderCaption: "La Sorbona \u00b7 Keynote sobre la supervivencia de las marcas en la era de la IA",
    founderP1: "Fund\u00e9 este estudio porque no encontraba el trabajo que quer\u00eda leer. Los documentos de marca producidos por todas las consultoras que respetaba se hab\u00edan derrumbado en un registro com\u00fan, ilegible — competente, pulido, indistinguible, reemplazable por una m\u00e1quina. Las casas que m\u00e1s admiraba estaban descritas en un lenguaje que las borraba.",
    founderP2: "Strawberry Production es el estudio que yo habr\u00eda contratado. Un solo fundador, a plena atenci\u00f3n sobre cuatro casas por trimestre, escribiendo cada palabra a mano, rechazando el vocabulario del campo. El trabajo es editorial en su forma porque hereda una escuela francesa donde la escritura editorial nunca estuvo separada de la seriedad intelectual.",
    founderP3: "Cuando encarga el trabajo, me encarga a m\u00ed. No hay equipo al que pasarte, ni redactor junior que sustituir, ni alcance que negociar a la baja. El documento que recibe habr\u00e1 sido escrito \u00edntegramente por la persona cuyo nombre aparece en la p\u00e1gina de firma.",
    founderQuote: "\u00abNo construyo marcas. Escribo la constituci\u00f3n por la cual una casa declara lo que es, lo que rechaza y c\u00f3mo suena cuando habla.\u00bb",
    founderSig: "Hamza El Jaouahiry \u00b7 Fundador",
    practiceKicker: "La Pr\u00e1ctica",
    practiceH2: "C\u00f3mo se hace el trabajo.",
    practiceLead: "Cuatro principios operativos. Explican por qu\u00e9 un encargo lleva cuatro semanas, por qu\u00e9 no hay dos iguales, y por qu\u00e9 el trabajo sobrevive al mes siguiente a la entrega.",
    discipline: [
      { title: "Extracci\u00f3n antes que arquitectura.", body: "Cada encargo empieza con una conversaci\u00f3n, no con una estrategia. Hago hablar a los fundadores, largo rato, hasta que aparece algo que ninguna m\u00e1quina podr\u00eda haber escrito — la convicci\u00f3n bajo el pitch, el rechazo bajo el relato fundacional. Con ese material humano se construye la arquitectura." },
      { title: "Autor\u00eda \u00fanica, sin comit\u00e9s.", body: "Una persona extrae la verdad del fundador. La misma persona escribe la arquitectura. La misma persona la entrega. Sin relevos, sin tel\u00e9fono roto, sin comit\u00e9s que suavizan. La voz del documento es la de una sola mente que prest\u00f3 atenci\u00f3n a un solo fundador durante cuatro semanas." },
      { title: "Editorial, no consultivo.", body: "No produzco decks. Produzco documentos — dise\u00f1ados para leerse como manifiestos y consultarse como constituciones. El artefacto est\u00e1 hecho para sobrevivir al encargo. La edici\u00f3n encuadernada, opcional, se entrega para guardarse en una estanter\u00eda, no para abrirse en una pantalla." },
      { title: "La revisi\u00f3n a los treinta d\u00edas.", body: "Un mes despu\u00e9s de la entrega, nos volvemos a ver. Noventa minutos, por videollamada o en persona. La pregunta que hago es qu\u00e9 ha cambiado. El documento es el artefacto. La revisi\u00f3n es el momento en que se vuelve operativo. La IA no tiene memoria de su casa. Yo s\u00ed." },
    ],
    ctaH2: "Ahora sabe con qui\u00e9n trabajar\u00edas.",
    ctaP: "Un encargo por casa. Cuatro casas por trimestre. La pr\u00f3xima plaza se abre al fundador cuya casa m\u00e1s lo merece.",
    cta: "Ver el encargo \u2192",
    ctaFoot: "Encargo confidencial \u00b7 NDA disponible",
  },
}

export default function AboutPage() {
  const t = useT(T)
  const REFUSALS = t.refusals.map((r, i) => ({ ...r, n: `0${i + 1}` }))
  const INHERITANCE = t.inheritance
  const DISCIPLINE = t.discipline.map((d, i) => ({ ...d, n: `0${i + 1}` }))
  const hero = useScrollReveal()
  const why = useScrollReveal()
  const refuse = useScrollReveal()
  const inheritance = useScrollReveal()
  const founder = useScrollReveal()
  const discipline = useScrollReveal()
  const cta = useScrollReveal()

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>
      <NavBar />

      {/* HERO */}
      <section
        ref={hero[0] as any}
        style={{
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          padding: "140px clamp(1.5rem,4vw,4rem) 80px",
          position: "relative",
          opacity: hero[1] ? 1 : 0,
          transform: hero[1] ? "translateY(0)" : "translateY(30px)",
          transition: "all 1s ease",
        }}
      >
        <AnimatedOrb color="radial-gradient(circle,#e63946,transparent)" size={600} x="-5%" y="20%" opacity={0.15} />
        <AnimatedOrb color="radial-gradient(circle,#ff1a1a,transparent)" size={400} x="70%" y="60%" opacity={0.08} />

        <div style={{ maxWidth: 1100, width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(230,57,70,0.12)",
              border: "1px solid rgba(230,57,70,0.35)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 40,
            }}
          >
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: COLOR, boxShadow: "0 0 8px " + COLOR }} />
            <span style={{ color: COLOR, fontSize: 11, letterSpacing: "0.2em", fontWeight: 600, textTransform: "uppercase" }}>
              {t.badge}
            </span>
          </div>

          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.5rem,6vw,5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 40,
              maxWidth: 900,
            }}
          >
            {t.h1a}<br />
            <span style={{ background: "linear-gradient(135deg," + COLOR + ",#ff1a1a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {t.h1b}
            </span>
          </h1>

          <p
            style={{
              fontFamily: SANS,
              fontSize: "clamp(1.05rem,1.5vw,1.3rem)",
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.7,
              maxWidth: 720,
              marginBottom: 0,
            }}
          >
            {t.lead}
          </p>
        </div>
      </section>

      {/* WHY THIS STUDIO EXISTS */}
      <section
        ref={why[0] as any}
        style={{
          padding: "120px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          opacity: why[1] ? 1 : 0,
          transform: why[1] ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>
            {t.whyKicker}
          </div>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(1.75rem,3.5vw,2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 40,
              lineHeight: 1.2,
            }}
          >
            {t.whyH2}
          </h2>
          <p
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(1.15rem,1.8vw,1.4rem)",
              fontWeight: 400,
              lineHeight: 1.6,
              letterSpacing: "-0.01em",
              color: "rgba(255,255,255,0.85)",
              marginBottom: 28,
            }}
          >
            {t.whyP1}
          </p>
          <p
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(1.15rem,1.8vw,1.4rem)",
              fontWeight: 400,
              lineHeight: 1.6,
              letterSpacing: "-0.01em",
              color: COLOR,
              fontStyle: "italic",
              marginTop: 32,
            }}
          >
            {t.whyP2}
          </p>
        </div>
      </section>

      {/* WHAT I REFUSE */}
      <section
        ref={refuse[0] as any}
        style={{
          padding: "140px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          background: "#0d0d0d",
          position: "relative",
          opacity: refuse[1] ? 1 : 0,
          transform: refuse[1] ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center," + GLOW + " 0%,transparent 65%)",
            opacity: 0.15,
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>
              {t.refuseKicker}
            </div>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(2rem,4.5vw,3.25rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: 24,
                lineHeight: 1.1,
              }}
            >
              {t.refuseH2}
            </h2>
            <p
              style={{
                fontFamily: SANS,
                fontSize: "clamp(0.98rem,1.4vw,1.15rem)",
                color: "rgba(255,255,255,0.6)",
                maxWidth: 640,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              {t.refuseLead}
            </p>
          </div>

          <div
            className="refuse-grid"
            style={{ display: "grid", gap: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {REFUSALS.map((r) => (
              <div
                key={r.n}
                style={{
                  background: "#0a0a0a",
                  padding: "44px clamp(1.5rem,3vw,2.5rem)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                <div style={{ fontFamily: SERIF, fontSize: "1.6rem", color: COLOR, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em" }}>
                  {r.n}.
                </div>
                <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.25rem,1.8vw,1.55rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.25, color: "#fff", margin: 0 }}>
                  {r.title}
                </h3>
                <p style={{ fontFamily: SANS, fontSize: "0.96rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.7, margin: 0 }}>
                  {r.body}
                </p>
              </div>
            ))}
          </div>

          <style jsx>{`
            .refuse-grid { grid-template-columns: repeat(1, 1fr); }
            @media (min-width: 720px) { .refuse-grid { grid-template-columns: repeat(2, 1fr); } }
          `}</style>
        </div>
      </section>

      {/* WHAT I INHERIT */}
      <section
        ref={inheritance[0] as any}
        style={{
          padding: "120px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          opacity: inheritance[1] ? 1 : 0,
          transform: inheritance[1] ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>
              {t.inheritKicker}
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 28, lineHeight: 1.15 }}>
              {t.inheritH2}
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "clamp(1rem,1.4vw,1.15rem)", color: "rgba(255,255,255,0.7)", maxWidth: 680, margin: "0 auto", lineHeight: 1.7 }}>
              {t.inheritLead}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {INHERITANCE.map((p, i) => (
              <div key={i} style={{ padding: "32px 24px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", textAlign: "center" }}>
                <div style={{ fontFamily: SERIF, fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: 14, letterSpacing: "-0.01em" }}>
                  {p.name}
                </div>
                <div style={{ width: 24, height: 1, background: COLOR, margin: "0 auto 14px" }} />
                <p style={{ fontFamily: SERIF, fontSize: "0.92rem", fontStyle: "italic", color: "rgba(255,255,255,0.65)", lineHeight: 1.55, margin: 0 }}>
                  {p.note}
                </p>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.1rem,1.6vw,1.35rem)", fontStyle: "italic", color: "rgba(255,255,255,0.75)", textAlign: "center", maxWidth: 720, margin: "60px auto 0", lineHeight: 1.6, letterSpacing: "-0.01em" }}>
            {t.inheritFoot}
          </p>
        </div>
      </section>

      {/* THE FOUNDER */}
      {/* THE BOOK — the doctrine, written down and published. */}
      <section className="section">
        <div className="shell-lg">
          <div className="mb-12 text-center">
            <div className="kicker">{t.bookKicker}</div>
          </div>

          <div className="grid items-start gap-10 md:gap-14 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
            {/* Cover */}
            <div className="relative mx-auto w-full max-w-[340px]">
              <div className="relative flex aspect-[2/3] flex-col justify-between border border-hair-strong bg-[linear-gradient(160deg,#101010_0%,#0a0a0a_60%)] px-8 py-10 shadow-[0_40px_90px_rgba(0,0,0,0.6)]">
                <span className="bracket-tl" aria-hidden />
                <span className="bracket-br" aria-hidden />

                <div className="text-center font-sans text-[9px] uppercase tracking-[0.3em] text-chalk-40">
                  Strawberry Production · Paris
                </div>

                <div className="text-center">
                  <div className="mb-5 text-brand" aria-hidden>❖</div>
                  <h3 className="mb-4 font-serif text-[clamp(1.5rem,3vw,2rem)] font-bold uppercase leading-[1.1] tracking-[0.02em]">
                    {t.bookTitle}
                  </h3>
                  <p className="m-0 font-serif text-[13px] italic leading-snug text-chalk-55">{t.bookSub}</p>
                </div>

                <div className="text-center font-sans text-[9px] uppercase tracking-[0.25em] text-chalk-55">
                  Hamza El Jaouahiry
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <blockquote className="mb-8 border-l-2 border-brand py-1 pl-6">
                <p className="m-0 font-serif text-[clamp(1.05rem,1.8vw,1.3rem)] italic leading-snug text-chalk-90">
                  {t.bookEpigraph}
                </p>
              </blockquote>

              <p className="mb-5 font-sans text-[16px] leading-[1.8] text-chalk-65">{t.bookP1}</p>
              <p className="mb-8 font-sans text-[16px] leading-[1.8] text-chalk-65">{t.bookP2}</p>

              <p className="mb-6 font-serif text-[1.05rem] italic text-chalk-75">{t.bookQuote}</p>

              <div className="border-t border-white/10 pt-6">
                <div className="mb-1.5 font-sans text-[13px] text-chalk-75">{t.bookAuthor}</div>
                <div className="font-sans text-[13px] text-chalk-40">{t.bookNote}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={founder[0] as any}
        style={{
          padding: "120px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          background: "#0d0d0d",
          opacity: founder[1] ? 1 : 0,
          transform: founder[1] ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>
              {t.founderKicker}
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16, lineHeight: 1.15 }}>
              {t.founderName}
            </h2>
            <div style={{ width: 32, height: 1, background: COLOR, margin: "0 auto 0" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,6vw,6rem)", alignItems: "start" }} className="founder-grid">
            <div>
              <div style={{ position: "relative" }}>
                <img
                  src="/founder.jpg"
                  alt="Hamza El Jaouahiry — Strawberry Production"
                  style={{
                    width: "100%",
                    aspectRatio: "3/4",
                    objectFit: "cover",
                    objectPosition: "center 85%",
                    filter: "grayscale(100%) contrast(1.05)",
                    display: "block",
                  }}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", background: "linear-gradient(to top,#0d0d0d,transparent)" }} />
              </div>
              <p style={{ fontFamily: SANS, fontSize: 11, color: COLOR, letterSpacing: "0.08em", lineHeight: 1.6, marginTop: 16, marginBottom: 0, textTransform: "uppercase" }}>
               {t.founderCaption}
              </p>
            </div>

            <div style={{ paddingTop: "clamp(1rem,3vw,2rem)" }}>
              <div style={{ fontFamily: SERIF, fontSize: "clamp(1.05rem,1.4vw,1.2rem)", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, letterSpacing: "-0.005em" }}>
                <p style={{ marginBottom: 24 }}>
                  {t.founderP1}
                </p>
                <p style={{ marginBottom: 24 }}>
                  {t.founderP2}
                </p>
                <p style={{ marginBottom: 0 }}>
                  {t.founderP3}
                </p>
              </div>

              <div style={{ marginTop: 48, padding: "32px clamp(1.5rem,3vw,2.5rem)", border: "1px solid rgba(230,57,70,0.25)", background: "rgba(230,57,70,0.04)" }}>
                <div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(1.05rem,1.5vw,1.25rem)", color: "#fff", lineHeight: 1.55, letterSpacing: "-0.01em" }}>
                  {t.founderQuote}
                </div>
                <div style={{ marginTop: 20, fontSize: 10, letterSpacing: "0.3em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", fontFamily: SANS }}>
                  {t.founderSig}
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .founder-grid { grid-template-columns: 1fr 1fr; }
          @media (max-width: 768px) { .founder-grid { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* HOW I WORK */}
      <section
        ref={discipline[0] as any}
        style={{
          padding: "120px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          opacity: discipline[1] ? 1 : 0,
          transform: discipline[1] ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>
              {t.practiceKicker}
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24, lineHeight: 1.15 }}>
              {t.practiceH2}
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "clamp(0.98rem,1.4vw,1.15rem)", color: "rgba(255,255,255,0.6)", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
              {t.practiceLead}
            </p>
          </div>

          <div style={{ display: "grid", gap: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)" }}>
            {DISCIPLINE.map((d) => (
              <div key={d.n} style={{ background: "#0a0a0a", padding: "44px clamp(1.5rem,3vw,3rem)", display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(1.5rem,4vw,3.5rem)", alignItems: "start" }}>
                <div style={{ fontFamily: SERIF, fontSize: "clamp(1.5rem,2.5vw,2rem)", color: COLOR, fontWeight: 700, lineHeight: 1, minWidth: 60 }}>
                  {d.n}
                </div>
                <div>
                  <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.2rem,1.8vw,1.55rem)", fontWeight: 600, marginBottom: 14, letterSpacing: "-0.02em", color: "#fff" }}>
                    {d.title}
                  </h3>
                  <p style={{ fontFamily: SANS, fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.72)", lineHeight: 1.75, margin: 0 }}>
                    {d.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        ref={cta[0] as any}
        style={{
          padding: "140px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          position: "relative",
          opacity: cta[1] ? 1 : 0,
          transform: cta[1] ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center," + GLOW + " 0%,transparent 60%)", opacity: 0.5, pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 32 }}>
            {t.ctaH2}
          </h2>
          <p style={{ fontFamily: SANS, fontSize: "clamp(1rem,1.4vw,1.15rem)", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: 620, margin: "0 auto 48px" }}>
            {t.ctaP}
          </p>
          <Link
            href="/brand-narrative-audit"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg," + COLOR + ",#ff1a1a)",
              color: "#fff", padding: "20px 52px", borderRadius: 100,
              fontSize: 16, fontWeight: 600, textDecoration: "none",
              letterSpacing: "0.04em", fontFamily: SANS,
              boxShadow: "0 20px 60px " + GLOW,
            }}
          >
            {t.cta}
          </Link>
          <div style={{ marginTop: 24, fontSize: 13, color: "rgba(255,255,255,0.45)", letterSpacing: "0.05em", fontFamily: SANS }}>
            {t.ctaFoot}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
