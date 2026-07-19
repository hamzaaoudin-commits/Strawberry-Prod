import type { FaqSet } from "@/components/strawberry/faq-section"

/**
 * One FAQ set per offer. Questions are written for the specific thing the
 * visitor is looking at — a 15€ subscription and a 4,500€ commission raise
 * completely different objections, so they never share a FAQ.
 */

export const FAQ_AUDIT: FaqSet = {
  en: [
    { q: "Is this for me?", a: "If you're a founder, creator, or consultant who can't clearly articulate what makes you different — yes. If you're looking for someone to \"do content\" — no." },
    { q: "Why 4,500€?", a: "It's the price of a few weeks of advertising that vanishes the moment you stop paying. Your narrative belongs to you and works for you indefinitely." },
    { q: "How long does it take?", a: "3 to 4 weeks from onboarding to delivery. The document is ready to use the Monday after it lands." },
    { q: "Why only 4 commissions per quarter?", a: "Not a sales argument — a real constraint. Every house is built from scratch. Beyond four, quality drops. I'd rather decline than deliver ordinary work." },
    { q: "Can't I just do this myself?", a: "You can run the exercises. What you can't do is see your own blind spot — you've been inside your story so long it reads as obvious to you and invisible to everyone else. The value here isn't the method, it's someone outside your head applying it." },
    { q: "How does the process work?", a: "After your commission is confirmed, you receive an onboarding questionnaire. It takes 20 to 30 minutes to complete and contains everything I need to build your narrative architecture from scratch." },
    { q: "What if I'm not satisfied?", a: "If the deliverable doesn't hit the mark, I write a V2. No questions asked." },
    { q: "Do you sign an NDA?", a: "Yes, on request. And by default, your work will never be mentioned, adapted, or reused for another house." },
    { q: "In what language is the document delivered?", a: "In the language you build your brand in — French or English." },
    { q: "What happens after delivery?", a: "One month later we meet for a ninety-minute walkthrough. If you want the studio to keep executing after that, MOMENTUM exists — but it's optional, never bundled." },
  ],
  fr: [
    { q: "Est-ce que c'est pour moi ?", a: "Si vous êtes fondateur, créateur ou consultant et que vous n'arrivez pas à articuler clairement ce qui vous rend différent — oui. Si vous cherchez quelqu'un pour « faire du contenu » — non." },
    { q: "Pourquoi 4 500€ ?", a: "C'est le prix de quelques semaines de publicité qui s'évapore dès que vous arrêtez de payer. Votre récit vous appartient et travaille pour vous indéfiniment." },
    { q: "Combien de temps ça prend ?", a: "3 à 4 semaines de l'onboarding à la livraison. Le document est exploitable dès le lundi qui suit." },
    { q: "Pourquoi seulement 4 commandes par trimestre ?", a: "Pas un argument commercial — une vraie contrainte. Chaque maison est bâtie de zéro. Au-delà de quatre, la qualité chute. Je préfère refuser que livrer du travail ordinaire." },
    { q: "Je ne peux pas le faire moi-même ?", a: "Vous pouvez faire les exercices. Ce que vous ne peux pas faire, c'est voir votre propre angle mort — vous êtes dans votre récit depuis si longtemps qu'il te paraît évident et reste invisible pour tous les autres. La valeur ici n'est pas la méthode, c'est quelqu'un d'extérieur à votre tête qui l'applique." },
    { q: "Comment se déroule le processus ?", a: "Une fois votre commande confirmée, vous recevez un questionnaire d'onboarding. Il prend 20 à 30 minutes et contient tout ce dont j'ai besoin pour bâtir votre architecture narrative de zéro." },
    { q: "Et si je ne suis pas satisfait ?", a: "Si le livrable ne tape pas juste, j'écris une V2. Sans discuter." },
    { q: "Signes-vous un NDA ?", a: "Oui, sur demande. Et par défaut, votre travail ne sera jamais mentionné, adapté ni réutilisé pour une autre maison." },
    { q: "Dans quelle langue le document est-il livré ?", a: "Dans la langue dans laquelle vous construisez votre marque — français ou anglais." },
    { q: "Que se passe-t-il après la livraison ?", a: "Un mois plus tard, on se revoit pour une revue de quatre-vingt-dix minutes. Si vous voulez que le studio continue d'exécuter ensuite, MOMENTUM existe — mais c'est optionnel, jamais inclus d'office." },
  ],
  es: [
    { q: "¿Es para mí?", a: "Si es fundador, creador o consultor y no logra articular con claridad qué le hace diferente — sí. Si busca a alguien para «hacer contenido» — no." },
    { q: "¿Por qué 4.500€?", a: "Es el precio de unas pocas semanas de publicidad que se evapora en cuanto deja de pagar. Su relato le pertenece y trabaja para usted indefinidamente." },
    { q: "¿Cuánto tarda?", a: "De 3 a 4 semanas desde el onboarding hasta la entrega. El documento es utilizable el lunes siguiente." },
    { q: "¿Por qué solo 4 encargos por trimestre?", a: "No es un argumento de venta — es una restricción real. Cada casa se construye desde cero. Más allá de cuatro, la calidad cae. Prefiero rechazar antes que entregar trabajo ordinario." },
    { q: "¿No puedo hacerlo yo mismo?", a: "Puede hacer los ejercicios. Lo que no puede es ver su propio punto ciego — lleva tanto tiempo dentro de su relato que le parece obvio y resulta invisible para los demás. El valor aquí no es el método, es alguien fuera de su cabeza aplicándolo." },
    { q: "¿Cómo funciona el proceso?", a: "Una vez confirmado su encargo, recibe un cuestionario de onboarding. Lleva de 20 a 30 minutos y contiene todo lo que necesito para construir su arquitectura narrativa desde cero." },
    { q: "¿Y si no quedo satisfecho?", a: "Si el entregable no da en el clavo, escribo una V2. Sin preguntas." },
    { q: "¿Firma un NDA?", a: "Sí, a petición. Y por defecto, su trabajo nunca será mencionado, adaptado ni reutilizado para otra casa." },
    { q: "¿En qué idioma se entrega el documento?", a: "En el idioma en el que construye su marca — francés o inglés." },
    { q: "¿Qué pasa tras la entrega?", a: "Un mes después nos vemos para una revisión de noventa minutos. Si quiere que el estudio siga ejecutando después, existe MOMENTUM — pero es opcional, nunca incluido por defecto." },
  ],
}

export const FAQ_RADAR: FaqSet = {
  en: [
    { q: "What exactly arrives each day?", a: "One real brand, read through the same grid: what it emits, what jams it, and the single repositioning move I'd give it. Around ten minutes of reading." },
    { q: "Are these brands your clients?", a: "Never. Every read is editorial opinion built from public information only. A client's work is confidential and never appears here." },
    { q: "Can I cancel?", a: "Any time, in one click. No notice period, no call, no retention offer." },
    { q: "Do I get the back catalogue?", a: "Yes. Subscribing opens the full library of past reads, not just the ones published from today." },
    { q: "Isn't 15€ suspiciously cheap for this?", a: "It's a daily habit, not a deliverable. RADAR trains your eye so that when you do commission real work, you can judge it. It's meant to be an easy yes." },
    { q: "Will reading this fix my own positioning?", a: "No — and I'd rather say so. RADAR trains your judgement so you can tell a real position from a slogan. Fixing your own is the commission, because the one brand you structurally can't read is yours." },
  ],
  fr: [
    { q: "Qu'est-ce qui arrive exactement chaque jour ?", a: "Une marque réelle, lue à travers la même grille : ce qu'elle émet, ce qui la parasite, et le seul mouvement de repositionnement que je lui donnerais. Environ dix minutes de lecture." },
    { q: "Ces marques sont-elles vos clients ?", a: "Jamais. Chaque lecture est une opinion éditoriale construite uniquement à partir d'informations publiques. Le travail d'un client est confidentiel et n'apparaît jamais ici." },
    { q: "Puis-je résilier ?", a: "À tout moment, en un clic. Pas de préavis, pas d'appel, pas d'offre de rétention." },
    { q: "Ai-je accès aux fiches passées ?", a: "Oui. L'abonnement ouvre toute la bibliothèque des lectures précédentes, pas seulement celles publiées à partir d'aujourd'hui." },
    { q: "15€, ce n'est pas suspicieusement peu ?", a: "C'est une habitude quotidienne, pas un livrable. RADAR forme votre œil pour que, le jour où vous commandez du vrai travail, vous puisses le juger. C'est fait pour être un oui facile." },
    { q: "Est-ce que lire RADAR va régler mon propre positionnement ?", a: "Non — et je préfère le dire. RADAR forme votre jugement pour que vous distingues une vraie position d'un slogan. Régler le vôtre, c'est la commande : la seule marque que vous ne peux structurellement pas lire, c'est la vôtre." },
  ],
  es: [
    { q: "¿Qué llega exactamente cada día?", a: "Una marca real, leída con la misma grilla: qué emite, qué la interfiere y el único movimiento de reposicionamiento que le daría. Unos diez minutos de lectura." },
    { q: "¿Esas marcas son sus clientes?", a: "Nunca. Cada lectura es una opinión editorial construida solo con información pública. El trabajo de un cliente es confidencial y nunca aparece aquí." },
    { q: "¿Puedo cancelar?", a: "Cuando quiera, en un clic. Sin preaviso, sin llamada, sin oferta de retención." },
    { q: "¿Tengo acceso al archivo?", a: "Sí. Suscribirse abre toda la biblioteca de lecturas anteriores, no solo las publicadas desde hoy." },
    { q: "¿15€ no es sospechosamente poco?", a: "Es un hábito diario, no un entregable. RADAR entrena su ojo para que, cuando encargue trabajo real, sepa juzgarlo. Está pensado para ser un sí fácil." },
    { q: "¿Leer RADAR arreglará mi propio posicionamiento?", a: "No — y prefiero decirlo. RADAR entrena su criterio para distinguir una posición real de un eslogan. Arreglar el suyo es el encargo: la única marca que estructuralmente no puede leer es la suya." },
  ],
}

export const FAQ_MOMENTUM: FaqSet = {
  en: [
    { q: "Do I need the audit first?", a: "Yes. MOMENTUM executes an architecture — without one, there's nothing to keep coherent. If you haven't commissioned the audit, start there." },
    { q: "The audit is 4,500€ and so is your top tier. Am I paying twice?", a: "No. The audit is one-shot: you pay once and own the architecture forever. MOMENTUM is monthly and entirely optional — it's the crew that keeps building, not a second copy of the blueprint." },
    { q: "What's the commitment?", a: "Month to month after an initial three-month run. Three months is the minimum honest window to judge whether the work is compounding." },
    { q: "Who actually does the work?", a: "The studio, under single creative direction. Content execution is produced in-house to the same standard as the architecture." },
    { q: "What's the difference between the three tiers?", a: "Volume and priority, not quality. Établi is direction plus a steady cadence; Maison adds full multi-channel campaigns; Souverain adds priority direction and a partner in the room for every major move." },
    { q: "Can I pause?", a: "Yes, once per twelve months. Momentum is the point, but life happens." },
  ],
  fr: [
    { q: "Faut-il l'audit d'abord ?", a: "Oui. MOMENTUM exécute une architecture — sans elle, il n'y a rien à garder cohérent. Si vous n'avez pas commandé l'audit, commencez par là." },
    { q: "L'audit est à 4 500€ et votre palier haut aussi. Je paie deux fois ?", a: "Non. L'audit est one-shot : vous payez une fois et l'architecture est à vous pour toujours. MOMENTUM est mensuel et entièrement optionnel — c'est l'équipe qui continue de construire, pas une deuxième copie du plan." },
    { q: "Quel est l'engagement ?", a: "Au mois après une première période de trois mois. Trois mois, c'est la fenêtre minimale honnête pour juger si le travail produit un effet cumulé." },
    { q: "Qui fait le travail concrètement ?", a: "Le studio, sous une direction créative unique. L'exécution de contenu est produite en interne, au même standard que l'architecture." },
    { q: "Quelle différence entre les trois paliers ?", a: "Le volume et la priorité, pas la qualité. Établi, c'est la direction plus une cadence régulière ; Maison ajoute les campagnes multicanal complètes ; Souverain ajoute la direction prioritaire et un partenaire dans la pièce à chaque grand mouvement." },
    { q: "Puis-je mettre en pause ?", a: "Oui, une fois tous les douze mois. Le momentum est tout l'enjeu, mais la vie arrive." },
  ],
  es: [
    { q: "¿Necesito la auditoría primero?", a: "Sí. MOMENTUM ejecuta una arquitectura — sin ella no hay nada que mantener coherente. Si no ha encargado la auditoría, empiece por ahí." },
    { q: "La auditoría cuesta 4.500€ y su nivel más alto también. ¿Pago dos veces?", a: "No. La auditoría es de pago único: paga una vez y la arquitectura es suya para siempre. MOMENTUM es mensual y totalmente opcional — es el equipo que sigue construyendo, no una segunda copia del plano." },
    { q: "¿Cuál es el compromiso?", a: "Mes a mes tras un periodo inicial de tres meses. Tres meses es la ventana mínima honesta para juzgar si el trabajo se acumula." },
    { q: "¿Quién hace el trabajo realmente?", a: "El estudio, bajo una única dirección creativa. La ejecución de contenido se produce en casa, con el mismo estándar que la arquitectura." },
    { q: "¿Qué diferencia hay entre los tres niveles?", a: "Volumen y prioridad, no calidad. Établi es dirección más una cadencia constante; Maison añade campañas multicanal completas; Souverain añade dirección prioritaria y un socio en la sala en cada gran movimiento." },
    { q: "¿Puedo pausar?", a: "Sí, una vez cada doce meses. El momentum es el objetivo, pero la vida pasa." },
  ],
}

export const FAQ_AUDIT490: FaqSet = {
  fr: [
    { q: "Quelle est la différence exacte avec la commande à 4 500€ ?", a: "L'audit à 490€ diagnostique : il vous dit où vous vous tiens, ce qui vous confond avec les autres et vers où aller. La commande à 4 500€ construit : elle écrit votre plateforme narrative, vos piliers, votre système de langage et le copy prêt à déployer. L'un est une lecture, l'autre est une architecture." },
    { q: "Est-ce que je peux commander l'architecture après ?", a: "Oui, et les 490€ sont déduits si vous le faites dans les 60 jours. L'audit sert de premier tour de repérage — rien n'est perdu." },
    { q: "Combien de temps ça prend ?", a: "Sept jours à compter de la réception de votre questionnaire. Pas de rendez-vous, pas d'allers-retours." },
    { q: "Vous avez besoin de quoi de ma part ?", a: "Un questionnaire de vingt minutes, les liens vers votre site et vos réseaux, et les noms de trois à cinq concurrents directs. Rien d'autre." },
    { q: "Est-ce qu'il y a un appel ?", a: "Non. C'est un document, pas une prestation de conseil. Si vous voulez qu'on travaille ensemble en profondeur, c'est la commande complète." },
    { q: "Et si le diagnostic me dit que tout va bien ?", a: "Ça n'arrive pas, et ce n'est pas de l'arrogance : aucune marque n'occupe une position parfaitement propre. Mais si l'audit conclut que votre positionnement tient et que le problème est ailleurs — dans votre offre, votre prix, votre distribution — je vous le dirai, et je te dirai de ne pas commander la suite." },
    { q: "Puis-je le faire faire pour une marque que je conseille ?", a: "Oui. Beaucoup d'audits sont commandés par des consultants ou des directeurs marketing pour objectiver une discussion interne." },
    { q: "Est-ce remboursable ?", a: "Le document est produit sur mesure, il n'est donc pas remboursable une fois livré. Avant production, tant que le travail n'a pas commencé, le remboursement est intégral." },
  ],
  en: [
    { q: "What exactly separates this from the 4,500€ commission?", a: "The 490€ audit diagnoses: it tells you where you stand, what makes you indistinguishable, and where to go. The 4,500€ commission builds: it writes your narrative platform, your pillars, your language system and the deployable copy. One is a read, the other is an architecture." },
    { q: "Can I commission the architecture afterwards?", a: "Yes, and the 490€ is deducted if you do so within 60 days. The audit works as a first pass — nothing is wasted." },
    { q: "How long does it take?", a: "Seven days from receipt of your questionnaire. No meetings, no back and forth." },
    { q: "What do you need from me?", a: "A twenty-minute questionnaire, links to your site and channels, and the names of three to five direct competitors. Nothing else." },
    { q: "Is there a call?", a: "No. This is a document, not a consulting engagement. If you want deep work together, that is the full commission." },
    { q: "What if the diagnosis says everything is fine?", a: "It won't, and that isn't arrogance: no brand occupies a perfectly clean position. But if the audit concludes your positioning holds and the problem sits elsewhere — in your offer, your price, your distribution — I will say so, and I will tell you not to commission the next step." },
    { q: "Can I order one for a brand I advise?", a: "Yes. Many audits are commissioned by consultants or marketing directors to ground an internal debate in something external." },
    { q: "Is it refundable?", a: "The document is produced to order, so it is not refundable once delivered. Before production begins, a full refund is available." },
  ],
  es: [
    { q: "¿Cuál es la diferencia exacta con el encargo de 4.500€?", a: "La auditoría de 490€ diagnostica: le dice dónde está, qué le confunde con los demás y hacia dónde ir. El encargo de 4.500€ construye: escribe su plataforma narrativa, sus pilares, su sistema de lenguaje y el copy listo para desplegar. Uno es una lectura, el otro una arquitectura." },
    { q: "¿Puedo encargar la arquitectura después?", a: "Sí, y los 490€ se descuentan si lo hace en un plazo de 60 días. La auditoría funciona como un primer reconocimiento — nada se pierde." },
    { q: "¿Cuánto tarda?", a: "Siete días desde la recepción de su cuestionario. Sin reuniones, sin idas y venidas." },
    { q: "¿Qué necesita de mi parte?", a: "Un cuestionario de veinte minutos, los enlaces a su sitio y sus redes, y los nombres de tres a cinco competidores directos. Nada más." },
    { q: "¿Hay alguna llamada?", a: "No. Es un documento, no una consultoría. Si quiere que trabajemos juntos en profundidad, ese es el encargo completo." },
    { q: "¿Y si el diagnóstico dice que todo está bien?", a: "No ocurrirá, y no es arrogancia: ninguna marca ocupa una posición perfectamente limpia. Pero si la auditoría concluye que su posicionamiento se sostiene y que el problema está en otra parte — en su oferta, su precio, su distribución — se lo diré, y le diré que no encargue el siguiente paso." },
    { q: "¿Puedo pedirla para una marca que asesoro?", a: "Sí. Muchas auditorías las encargan consultores o directores de marketing para objetivar una discusión interna." },
    { q: "¿Es reembolsable?", a: "El documento se produce a medida, por lo que no es reembolsable una vez entregado. Antes de iniciar la producción, el reembolso es íntegro." },
  ],
}
