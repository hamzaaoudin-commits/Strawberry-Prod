import type { FaqSet } from "@/components/strawberry/faq-section"

/**
 * One FAQ set per offer. Questions are written for the specific thing the
 * visitor is looking at — a 15€ subscription and a 4,500€ commission raise
 * completely different objections, so they never share a FAQ.
 */

export const FAQ_AUDIT: FaqSet = {
  en: [
    { icon: "person", q: "Is this for me?", a: "This is written for one person: the founder of a house of one to twenty people, three to ten years in, whose work is genuinely better than the market's and who is nevertheless read as interchangeable with it. You are shortlisted next to names that do a rougher version of what you do, for less, and nothing in how you are perceived tells anyone why that comparison is wrong. If instead you are looking for someone to produce content, run your channels, or redo a logo — no." },
    { icon: "price", q: "Why 4,500€?", a: "It's the price of a few weeks of advertising that vanishes the moment you stop paying. Your narrative belongs to you and works for you indefinitely." },
    { icon: "clock", q: "How long does it take?", a: "3 to 4 weeks from onboarding to delivery. The document is ready to use the Monday after it lands." },
    { icon: "calendar", q: "Why only 4 commissions per quarter?", a: "Not a sales argument — a real constraint. Every house is built from scratch. Beyond four, quality drops. We would rather decline than deliver ordinary work." },
    { icon: "eye", q: "Can't I just do this myself?", a: "You can run the exercises. What you can't do is see your own blind spot — you've been inside your story so long it reads as obvious to you and invisible to everyone else. The value here isn't the method, it's someone outside your head applying it." },
    { icon: "steps", q: "How does the process work?", a: "After your commission is confirmed, you receive an onboarding questionnaire. It takes 20 to 30 minutes to complete and contains everything we need to build your narrative architecture from scratch." },
    { icon: "shield", q: "What if I'm not satisfied?", a: "If the deliverable doesn't hit the mark, we write a V2. No questions asked." },
    { icon: "lock", q: "Do you sign an NDA?", a: "Yes, on request. And by default, your work will never be mentioned, adapted, or reused for another house." },
    { icon: "globe", q: "In what language is the document delivered?", a: "In the language you build your brand in — French or English." },
    { icon: "cpu", q: "Do the playbooks work with our internal AI tools?", a: "Yes. Every written piece, including the six department playbooks, is written to be pasted directly into whatever AI tool your teams already use. We don't build or maintain anything on your side — the writing does the work." },
    { icon: "check", q: "What happens after delivery?", a: "One month later we meet for a ninety-minute walkthrough. If anything needs adjusting, we handle it then." },
  ],
  fr: [
    { icon: "person", q: "Est-ce que c'est pour moi ?", a: "Ceci est écrit pour une personne : le fondateur d'une maison de une à vingt personnes, trois à dix ans d'existence, dont le travail est réellement meilleur que celui du marché et qui est pourtant lu comme interchangeable avec lui. On vous met en concurrence avec des noms qui font une version plus grossière de ce que vous faites, pour moins cher, et rien dans la façon dont vous êtes perçu ne dit pourquoi cette comparaison est fausse. Si en revanche vous cherchez quelqu'un pour produire du contenu, tenir vos réseaux ou refaire un logo — non." },
    { icon: "price", q: "Pourquoi 4 500€ ?", a: "C'est le prix de quelques semaines de publicité qui s'évapore dès que vous arrêtez de payer. Votre récit vous appartient et travaille pour vous indéfiniment." },
    { icon: "clock", q: "Combien de temps ça prend ?", a: "3 à 4 semaines de l'onboarding à la livraison. Le document est exploitable dès le lundi qui suit." },
    { icon: "calendar", q: "Pourquoi seulement 4 commandes par trimestre ?", a: "Pas un argument commercial — une vraie contrainte. Chaque maison est bâtie de zéro. Au-delà de quatre, la qualité chute. Nous préférons refuser que livrer du travail ordinaire." },
    { icon: "eye", q: "Je ne peux pas le faire moi-même ?", a: "Vous pouvez faire les exercices. Ce que vous ne pouvez pas faire, c'est voir votre propre angle mort — vous êtes dans votre récit depuis si longtemps qu'il vous paraît évident et reste invisible pour tous les autres. La valeur ici n'est pas la méthode, c'est quelqu'un d'extérieur à votre tête qui l'applique." },
    { icon: "steps", q: "Comment se déroule le processus ?", a: "Une fois la commande confirmée, vous recevez un questionnaire d'onboarding. Il prend 20 à 30 minutes et contient tout ce dont nous avons besoin pour bâtir votre architecture narrative de zéro." },
    { icon: "shield", q: "Et si je ne suis pas satisfait ?", a: "Si le livrable ne tape pas juste, j'écris une V2. Sans discuter." },
    { icon: "lock", q: "Signez-vous un NDA ?", a: "Oui, sur demande. Et par défaut, votre travail ne sera jamais mentionné, adapté ni réutilisé pour une autre maison." },
    { icon: "globe", q: "Dans quelle langue le document est-il livré ?", a: "Dans la langue dans laquelle vous construisez votre marque — français ou anglais." },
    { icon: "cpu", q: "Les playbooks fonctionnent-ils avec nos outils IA internes ?", a: "Oui. Chaque pièce écrite, y compris les six playbooks par département, est rédigée pour être collée directement dans l'outil IA que vos équipes utilisent déjà. Nous ne construisons ni ne maintenons rien de votre côté — l'écriture fait le travail." },
    { icon: "check", q: "Que se passe-t-il après la livraison ?", a: "Un mois plus tard, on se revoit pour une revue de quatre-vingt-dix minutes. S'il y a un ajustement à faire, on le fait à ce moment-là." },
  ],
}

export const FAQ_RADAR: FaqSet = {
  en: [
    { icon: "box", q: "What am I actually getting?", a: "Access to a growing archive of over 350 real brands, each read through the same grid: what it emits, what jams it, and the single repositioning move we would give it. Searchable by sector and theme. Around ten minutes per read." },
    { icon: "users", q: "Are these brands your clients?", a: "Never. Every read is editorial opinion built from public information only. A client's work is confidential and never appears here." },
    { icon: "xcircle", q: "Can I cancel?", a: "Any time, in one click. No notice period, no call, no retention offer." },
    { icon: "key", q: "Do I get the full archive?", a: "Yes. Subscribing opens the entire library from day one, not a slice of it." },
    { icon: "price", q: "Isn't 15€ suspiciously cheap for this?", a: "It's a habit, not a deliverable. RADAR trains your eye so that when you do commission real work, you can judge it. It's meant to be an easy yes." },
    { icon: "eye", q: "Will reading this fix my own positioning?", a: "No — and we would rather say so. RADAR trains your judgement so you can tell a real position from a slogan. Fixing your own is BRAND NARRATIVE ARCHITECTURE, because the one brand you structurally can't read is yours." },
  ],
  fr: [
    { icon: "box", q: "Qu'est-ce que je reçois exactement ?", a: "L'accès à une base de plus de 350 marques réelles, chacune lue à travers la même grille : ce qu'elle émet, ce qui la parasite, et le seul mouvement de repositionnement que nous lui donnerions. Cherchable par secteur et par thème. Environ dix minutes de lecture par fiche." },
    { icon: "users", q: "Ces marques sont-elles vos clients ?", a: "Jamais. Chaque lecture est une opinion éditoriale construite uniquement à partir d'informations publiques. Le travail d'un client est confidentiel et n'apparaît jamais ici." },
    { icon: "xcircle", q: "Puis-je résilier ?", a: "À tout moment, en un clic. Pas de préavis, pas d'appel, pas d'offre de rétention." },
    { icon: "key", q: "Ai-je accès à toute la base ?", a: "Oui. L'abonnement ouvre l'intégralité de la bibliothèque dès le premier jour, pas une tranche." },
    { icon: "price", q: "15€, ce n'est pas suspicieusement peu ?", a: "C'est une habitude, pas un livrable. RADAR forme votre œil pour que, le jour où vous commandez du vrai travail, vous puissiez le juger. C'est fait pour être un oui facile." },
    { icon: "eye", q: "Est-ce que lire RADAR va régler mon propre positionnement ?", a: "Non — et nous préférons le dire. RADAR forme votre jugement pour que vous distinguiez une vraie position d'un slogan. Régler le vôtre, c'est BRAND NARRATIVE ARCHITECTURE : la seule marque que vous ne pouvez structurellement pas lire, c'est la vôtre." },
  ],
}

export const FAQ_MOMENTUM: FaqSet = {
  en: [
    { icon: "steps", q: "Do I need the architecture first?", a: "Yes. MOMENTUM executes an architecture — without one, there's nothing to keep coherent. If you haven't commissioned BRAND NARRATIVE ARCHITECTURE, start there." },
    { icon: "price", q: "The architecture is 4,500€ and MOMENTUM is 2,500€ a month. Am I paying twice?", a: "No. BRAND NARRATIVE ARCHITECTURE is written once and owned forever: it decides. MOMENTUM applies — it turns that position into new written material every month and keeps the website aligned with it. If you never want another page written, you never need MOMENTUM." },
    { icon: "calendar", q: "What's the commitment?", a: "Month to month after an initial three-month run. Three months is the minimum honest window to judge whether the work is compounding." },
    { icon: "xcircle", q: "Do you produce photo, video or social content?", a: "No. MOMENTUM covers written work and the website only: scripts, narratives, pages, and writing and publishing calendars. Production and publishing stay with you or your own team." },
    { icon: "layers", q: "Is there a cheaper tier?", a: "No. One rate, 2,500€ a month, same scope for everyone. Tiers exist to let a studio quote what a client can pay rather than what the work costs — we'd rather have one honest price." },
    { icon: "server", q: "Who hosts the website?", a: "We do, at no separate cost, for as long as MOMENTUM runs. We also keep editing it — a new offer, a raised price, a repositioned page — week by week or month by month, so the site never lags behind what you actually sell." },
  ],
  fr: [
    { icon: "steps", q: "Faut-il l'architecture d'abord ?", a: "Oui. MOMENTUM exécute une architecture — sans elle, il n'y a rien à garder cohérent. Si vous n'avez pas commandé BRAND NARRATIVE ARCHITECTURE, commencez par là." },
    { icon: "price", q: "L'architecture est à 4 500€ et MOMENTUM à 2 500€ par mois. Je paie deux fois ?", a: "Non. BRAND NARRATIVE ARCHITECTURE s'écrit une fois et vous appartient pour toujours : elle tranche. MOMENTUM applique — elle transforme cette position en écrits nouveaux chaque mois et maintient le site aligné dessus. Si vous ne voulez plus jamais faire écrire une page, MOMENTUM ne vous sert à rien." },
    { icon: "calendar", q: "Quel est l'engagement ?", a: "Au mois après une première période de trois mois. Trois mois, c'est la fenêtre minimale honnête pour juger si le travail produit un effet cumulé." },
    { icon: "xcircle", q: "Produisez-vous de la photo, de la vidéo ou du contenu social ?", a: "Non. MOMENTUM couvre l'écrit et le site web uniquement : scripts, récits, pages, et plannings d'écriture et de diffusion. La production et la publication restent chez vous ou chez votre équipe." },
    { icon: "layers", q: "Existe-t-il un palier moins cher ?", a: "Non. Un seul tarif, 2 500€ par mois, le même périmètre pour tout le monde. Les paliers servent à facturer ce qu'un client peut payer plutôt que ce que le travail coûte — nous préférons un seul prix honnête." },
    { icon: "server", q: "Qui héberge le site web ?", a: "Nous, sans coût séparé, tant que MOMENTUM tourne. Nous continuons aussi de l'écrire — une offre nouvelle, un prix relevé, une page repositionnée — semaine après semaine ou mois après mois, pour que le site ne traîne jamais derrière ce que vous vendez." },
  ],
}

export const FAQ_AUDIT490: FaqSet = {
  fr: [
    { icon: "compare", q: "Quelle est la différence exacte avec BRAND NARRATIVE ARCHITECTURE ?", a: "L'audit à 490€ diagnostique : il vous dit où vous vous tenez, ce qui vous confond avec les autres et vers où aller. BRAND NARRATIVE ARCHITECTURE construit : elle écrit votre plateforme narrative, vos piliers, votre système de langage et le copy prêt à déployer. L'un est une lecture, l'autre est une architecture." },
    { icon: "arrowup", q: "Est-ce que je peux commander l'architecture après ?", a: "Oui, et les 490€ sont déduits si vous le faites dans les 60 jours. L'audit sert de premier tour de repérage — rien n'est perdu." },
    { icon: "clock", q: "Combien de temps ça prend ?", a: "Sept jours à compter de la réception de votre questionnaire. Pas de rendez-vous, pas d'allers-retours." },
    { icon: "list", q: "Vous avez besoin de quoi de ma part ?", a: "Un questionnaire de vingt minutes, les liens vers votre site et vos réseaux, et les noms de trois à cinq concurrents directs. Rien d'autre." },
    { icon: "phoneoff", q: "Est-ce qu'il y a un appel ?", a: "Non. C'est un document, pas une prestation de conseil. Si vous voulez qu'on travaille ensemble en profondeur, c'est BRAND NARRATIVE ARCHITECTURE." },
    { icon: "shield", q: "Et si le diagnostic me dit que tout va bien ?", a: "Ça n'arrive pas, et ce n'est pas de l'arrogance : aucune marque n'occupe une position parfaitement propre. Mais si l'audit conclut que votre positionnement tient et que le problème est ailleurs — dans votre offre, votre prix, votre distribution — nous vous le dirons, et nous vous dirons de ne pas commander la suite." },
    { icon: "users", q: "Puis-je le faire faire pour une marque que je conseille ?", a: "Oui. Beaucoup d'audits sont commandés par des consultants ou des directeurs marketing pour objectiver une discussion interne." },
    { icon: "wallet", q: "Est-ce remboursable ?", a: "Le document est produit sur mesure, il n'est donc pas remboursable une fois livré. Avant production, tant que le travail n'a pas commencé, le remboursement est intégral." },
  ],
  en: [
    { icon: "compare", q: "What exactly separates this from BRAND NARRATIVE ARCHITECTURE?", a: "The 490€ audit diagnoses: it tells you where you stand, what makes you indistinguishable, and where to go. BRAND NARRATIVE ARCHITECTURE builds: it writes your narrative platform, your pillars, your language system and the deployable copy. One is a read, the other is an architecture." },
    { icon: "arrowup", q: "Can I commission the architecture afterwards?", a: "Yes, and the 490€ is deducted if you do so within 60 days. The audit works as a first pass — nothing is wasted." },
    { icon: "clock", q: "How long does it take?", a: "Seven days from receipt of your questionnaire. No meetings, no back and forth." },
    { icon: "list", q: "What do you need from me?", a: "A twenty-minute questionnaire, links to your site and channels, and the names of three to five direct competitors. Nothing else." },
    { icon: "phoneoff", q: "Is there a call?", a: "No. This is a document, not a consulting engagement. If you want deep work together, that is the full commission." },
    { icon: "shield", q: "What if the diagnosis says everything is fine?", a: "It won't, and that isn't arrogance: no brand occupies a perfectly clean position. But if the audit concludes your positioning holds and the problem sits elsewhere — in your offer, your price, your distribution — we will say so, and we will tell you not to commission the next step." },
    { icon: "users", q: "Can I order one for a brand I advise?", a: "Yes. Many audits are commissioned by consultants or marketing directors to ground an internal debate in something external." },
    { icon: "wallet", q: "Is it refundable?", a: "The document is produced to order, so it is not refundable once delivered. Before production begins, a full refund is available." },
  ],
}
