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
    { q: "Est-ce que c'est pour moi ?", a: "Si tu es fondateur, créateur ou consultant et que tu n'arrives pas à articuler clairement ce qui te rend différent — oui. Si tu cherches quelqu'un pour « faire du contenu » — non." },
    { q: "Pourquoi 4 500€ ?", a: "C'est le prix de quelques semaines de publicité qui s'évapore dès que tu arrêtes de payer. Ton récit t'appartient et travaille pour toi indéfiniment." },
    { q: "Combien de temps ça prend ?", a: "3 à 4 semaines de l'onboarding à la livraison. Le document est exploitable dès le lundi qui suit." },
    { q: "Pourquoi seulement 4 commandes par trimestre ?", a: "Pas un argument commercial — une vraie contrainte. Chaque maison est bâtie de zéro. Au-delà de quatre, la qualité chute. Je préfère refuser que livrer du travail ordinaire." },
    { q: "Je ne peux pas le faire moi-même ?", a: "Tu peux faire les exercices. Ce que tu ne peux pas faire, c'est voir ton propre angle mort — tu es dans ton récit depuis si longtemps qu'il te paraît évident et reste invisible pour tous les autres. La valeur ici n'est pas la méthode, c'est quelqu'un d'extérieur à ta tête qui l'applique." },
    { q: "Comment se déroule le processus ?", a: "Une fois ta commande confirmée, tu reçois un questionnaire d'onboarding. Il prend 20 à 30 minutes et contient tout ce dont j'ai besoin pour bâtir ton architecture narrative de zéro." },
    { q: "Et si je ne suis pas satisfait ?", a: "Si le livrable ne tape pas juste, j'écris une V2. Sans discuter." },
    { q: "Signes-tu un NDA ?", a: "Oui, sur demande. Et par défaut, ton travail ne sera jamais mentionné, adapté ni réutilisé pour une autre maison." },
    { q: "Dans quelle langue le document est-il livré ?", a: "Dans la langue dans laquelle tu construis ta marque — français ou anglais." },
    { q: "Que se passe-t-il après la livraison ?", a: "Un mois plus tard, on se revoit pour une revue de quatre-vingt-dix minutes. Si tu veux que le studio continue d'exécuter ensuite, MOMENTUM existe — mais c'est optionnel, jamais inclus d'office." },
  ],
  es: [
    { q: "¿Es para mí?", a: "Si eres fundador, creador o consultor y no logras articular con claridad qué te hace diferente — sí. Si buscas a alguien para «hacer contenido» — no." },
    { q: "¿Por qué 4.500€?", a: "Es el precio de unas pocas semanas de publicidad que se evapora en cuanto dejas de pagar. Tu relato te pertenece y trabaja para ti indefinidamente." },
    { q: "¿Cuánto tarda?", a: "De 3 a 4 semanas desde el onboarding hasta la entrega. El documento es utilizable el lunes siguiente." },
    { q: "¿Por qué solo 4 encargos por trimestre?", a: "No es un argumento de venta — es una restricción real. Cada casa se construye desde cero. Más allá de cuatro, la calidad cae. Prefiero rechazar antes que entregar trabajo ordinario." },
    { q: "¿No puedo hacerlo yo mismo?", a: "Puedes hacer los ejercicios. Lo que no puedes es ver tu propio punto ciego — llevas tanto tiempo dentro de tu relato que te parece obvio y resulta invisible para los demás. El valor aquí no es el método, es alguien fuera de tu cabeza aplicándolo." },
    { q: "¿Cómo funciona el proceso?", a: "Una vez confirmado tu encargo, recibes un cuestionario de onboarding. Lleva de 20 a 30 minutos y contiene todo lo que necesito para construir tu arquitectura narrativa desde cero." },
    { q: "¿Y si no quedo satisfecho?", a: "Si el entregable no da en el clavo, escribo una V2. Sin preguntas." },
    { q: "¿Firmas un NDA?", a: "Sí, a petición. Y por defecto, tu trabajo nunca será mencionado, adaptado ni reutilizado para otra casa." },
    { q: "¿En qué idioma se entrega el documento?", a: "En el idioma en el que construyes tu marca — francés o inglés." },
    { q: "¿Qué pasa tras la entrega?", a: "Un mes después nos vemos para una revisión de noventa minutos. Si quieres que el estudio siga ejecutando después, existe MOMENTUM — pero es opcional, nunca incluido por defecto." },
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
    { q: "Ces marques sont-elles tes clients ?", a: "Jamais. Chaque lecture est une opinion éditoriale construite uniquement à partir d'informations publiques. Le travail d'un client est confidentiel et n'apparaît jamais ici." },
    { q: "Puis-je résilier ?", a: "À tout moment, en un clic. Pas de préavis, pas d'appel, pas d'offre de rétention." },
    { q: "Ai-je accès aux fiches passées ?", a: "Oui. L'abonnement ouvre toute la bibliothèque des lectures précédentes, pas seulement celles publiées à partir d'aujourd'hui." },
    { q: "15€, ce n'est pas suspicieusement peu ?", a: "C'est une habitude quotidienne, pas un livrable. RADAR forme ton œil pour que, le jour où tu commandes du vrai travail, tu puisses le juger. C'est fait pour être un oui facile." },
    { q: "Est-ce que lire RADAR va régler mon propre positionnement ?", a: "Non — et je préfère le dire. RADAR forme ton jugement pour que tu distingues une vraie position d'un slogan. Régler le tien, c'est la commande : la seule marque que tu ne peux structurellement pas lire, c'est la tienne." },
  ],
  es: [
    { q: "¿Qué llega exactamente cada día?", a: "Una marca real, leída con la misma grilla: qué emite, qué la interfiere y el único movimiento de reposicionamiento que le daría. Unos diez minutos de lectura." },
    { q: "¿Esas marcas son tus clientes?", a: "Nunca. Cada lectura es una opinión editorial construida solo con información pública. El trabajo de un cliente es confidencial y nunca aparece aquí." },
    { q: "¿Puedo cancelar?", a: "Cuando quieras, en un clic. Sin preaviso, sin llamada, sin oferta de retención." },
    { q: "¿Tengo acceso al archivo?", a: "Sí. Suscribirse abre toda la biblioteca de lecturas anteriores, no solo las publicadas desde hoy." },
    { q: "¿15€ no es sospechosamente poco?", a: "Es un hábito diario, no un entregable. RADAR entrena tu ojo para que, cuando encargues trabajo real, sepas juzgarlo. Está pensado para ser un sí fácil." },
    { q: "¿Leer RADAR arreglará mi propio posicionamiento?", a: "No — y prefiero decirlo. RADAR entrena tu criterio para distinguir una posición real de un eslogan. Arreglar el tuyo es el encargo: la única marca que estructuralmente no puedes leer es la tuya." },
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
    { q: "Faut-il l'audit d'abord ?", a: "Oui. MOMENTUM exécute une architecture — sans elle, il n'y a rien à garder cohérent. Si tu n'as pas commandé l'audit, commence par là." },
    { q: "L'audit est à 4 500€ et ton palier haut aussi. Je paie deux fois ?", a: "Non. L'audit est one-shot : tu paies une fois et l'architecture est à toi pour toujours. MOMENTUM est mensuel et entièrement optionnel — c'est l'équipe qui continue de construire, pas une deuxième copie du plan." },
    { q: "Quel est l'engagement ?", a: "Au mois après une première période de trois mois. Trois mois, c'est la fenêtre minimale honnête pour juger si le travail produit un effet cumulé." },
    { q: "Qui fait le travail concrètement ?", a: "Le studio, sous une direction créative unique. L'exécution de contenu est produite en interne, au même standard que l'architecture." },
    { q: "Quelle différence entre les trois paliers ?", a: "Le volume et la priorité, pas la qualité. Établi, c'est la direction plus une cadence régulière ; Maison ajoute les campagnes multicanal complètes ; Souverain ajoute la direction prioritaire et un partenaire dans la pièce à chaque grand mouvement." },
    { q: "Puis-je mettre en pause ?", a: "Oui, une fois tous les douze mois. Le momentum est tout l'enjeu, mais la vie arrive." },
  ],
  es: [
    { q: "¿Necesito la auditoría primero?", a: "Sí. MOMENTUM ejecuta una arquitectura — sin ella no hay nada que mantener coherente. Si no has encargado la auditoría, empieza por ahí." },
    { q: "La auditoría cuesta 4.500€ y tu nivel más alto también. ¿Pago dos veces?", a: "No. La auditoría es de pago único: pagas una vez y la arquitectura es tuya para siempre. MOMENTUM es mensual y totalmente opcional — es el equipo que sigue construyendo, no una segunda copia del plano." },
    { q: "¿Cuál es el compromiso?", a: "Mes a mes tras un periodo inicial de tres meses. Tres meses es la ventana mínima honesta para juzgar si el trabajo se acumula." },
    { q: "¿Quién hace el trabajo realmente?", a: "El estudio, bajo una única dirección creativa. La ejecución de contenido se produce en casa, con el mismo estándar que la arquitectura." },
    { q: "¿Qué diferencia hay entre los tres niveles?", a: "Volumen y prioridad, no calidad. Établi es dirección más una cadencia constante; Maison añade campañas multicanal completas; Souverain añade dirección prioritaria y un socio en la sala en cada gran movimiento." },
    { q: "¿Puedo pausar?", a: "Sí, una vez cada doce meses. El momentum es el objetivo, pero la vida pasa." },
  ],
}
