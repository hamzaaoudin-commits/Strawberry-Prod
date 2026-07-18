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
    { q: "Can't I just do this myself?", a: "You could — that's what ARSENAL is for. But you've been inside your own story for so long you can no longer see what makes it singular. That's exactly what this work extracts." },
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
    { q: "Je ne peux pas le faire moi-même ?", a: "Tu pourrais — c'est à ça que sert ARSENAL. Mais tu es dans ton propre récit depuis si longtemps que tu ne vois plus ce qui le rend singulier. C'est exactement ce que ce travail extrait." },
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
    { q: "¿No puedo hacerlo yo mismo?", a: "Podrías — para eso está ARSENAL. Pero llevas tanto tiempo dentro de tu propio relato que ya no ves qué lo hace singular. Eso es exactamente lo que este trabajo extrae." },
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
    { q: "What if I'd rather apply the grid myself?", a: "That's ARSENAL — the same method packaged as instruments you run on your own brand." },
  ],
  fr: [
    { q: "Qu'est-ce qui arrive exactement chaque jour ?", a: "Une marque réelle, lue à travers la même grille : ce qu'elle émet, ce qui la parasite, et le seul mouvement de repositionnement que je lui donnerais. Environ dix minutes de lecture." },
    { q: "Ces marques sont-elles tes clients ?", a: "Jamais. Chaque lecture est une opinion éditoriale construite uniquement à partir d'informations publiques. Le travail d'un client est confidentiel et n'apparaît jamais ici." },
    { q: "Puis-je résilier ?", a: "À tout moment, en un clic. Pas de préavis, pas d'appel, pas d'offre de rétention." },
    { q: "Ai-je accès aux fiches passées ?", a: "Oui. L'abonnement ouvre toute la bibliothèque des lectures précédentes, pas seulement celles publiées à partir d'aujourd'hui." },
    { q: "15€, ce n'est pas suspicieusement peu ?", a: "C'est une habitude quotidienne, pas un livrable. RADAR forme ton œil pour que, le jour où tu commandes du vrai travail, tu puisses le juger. C'est fait pour être un oui facile." },
    { q: "Et si je préfère appliquer la grille moi-même ?", a: "C'est ARSENAL — la même méthode, packagée en instruments que tu fais tourner sur ta propre marque." },
  ],
  es: [
    { q: "¿Qué llega exactamente cada día?", a: "Una marca real, leída con la misma grilla: qué emite, qué la interfiere y el único movimiento de reposicionamiento que le daría. Unos diez minutos de lectura." },
    { q: "¿Esas marcas son tus clientes?", a: "Nunca. Cada lectura es una opinión editorial construida solo con información pública. El trabajo de un cliente es confidencial y nunca aparece aquí." },
    { q: "¿Puedo cancelar?", a: "Cuando quieras, en un clic. Sin preaviso, sin llamada, sin oferta de retención." },
    { q: "¿Tengo acceso al archivo?", a: "Sí. Suscribirse abre toda la biblioteca de lecturas anteriores, no solo las publicadas desde hoy." },
    { q: "¿15€ no es sospechosamente poco?", a: "Es un hábito diario, no un entregable. RADAR entrena tu ojo para que, cuando encargues trabajo real, sepas juzgarlo. Está pensado para ser un sí fácil." },
    { q: "¿Y si prefiero aplicar la grilla yo mismo?", a: "Eso es ARSENAL — el mismo método empaquetado como instrumentos que aplicas a tu propia marca." },
  ],
}

export const FAQ_ARSENAL: FaqSet = {
  en: [
    { q: "What do I actually receive?", a: "Five instruments — the signal map, the noise filter, the reference-class test, the heading move and the coherence check — as templates with worked examples. Yours to keep." },
    { q: "How is this different from RADAR?", a: "RADAR is me reading someone else's brand, daily. ARSENAL is you running the same grid on your own brand, once, at your pace." },
    { q: "Why the 147–197€ range?", a: "The price depends on the tier you pick — the base kit, or the kit plus the extended worked examples. Both are one-time." },
    { q: "Will this replace the commission?", a: "No, and I won't pretend otherwise. ARSENAL gives you the method. The commission gives you someone outside your own head applying it — which is the part you structurally can't do alone." },
    { q: "Do I need design or copywriting skills?", a: "No. The instruments are diagnostic, not creative. If you can answer honest questions about your own business, you can run them." },
    { q: "Is there support included?", a: "No. ARSENAL is deliberately self-serve — that's why it costs what it costs. If you want the work done with you, that's the commission." },
  ],
  fr: [
    { q: "Qu'est-ce que je reçois concrètement ?", a: "Cinq instruments — la carte du signal, le filtre à bruit, le test de classe de référence, le mouvement de cap et le contrôle de cohérence — en templates avec des exemples travaillés. À toi pour de bon." },
    { q: "Quelle différence avec RADAR ?", a: "RADAR, c'est moi qui lis la marque de quelqu'un d'autre, chaque jour. ARSENAL, c'est toi qui fais tourner la même grille sur ta propre marque, une fois, à ton rythme." },
    { q: "Pourquoi la fourchette 147–197€ ?", a: "Le prix dépend du palier choisi — la boîte de base, ou la boîte avec les exemples travaillés étendus. Les deux sont en paiement unique." },
    { q: "Est-ce que ça remplace la commande ?", a: "Non, et je ne vais pas prétendre le contraire. ARSENAL te donne la méthode. La commande te donne quelqu'un d'extérieur à ta propre tête pour l'appliquer — la partie que tu ne peux structurellement pas faire seul." },
    { q: "Faut-il des compétences en design ou en copywriting ?", a: "Non. Les instruments sont diagnostiques, pas créatifs. Si tu sais répondre honnêtement à des questions sur ton entreprise, tu peux les faire tourner." },
    { q: "Y a-t-il un accompagnement inclus ?", a: "Non. ARSENAL est volontairement en autonomie — c'est pour ça que le prix est celui-là. Si tu veux que le travail soit fait avec toi, c'est la commande." },
  ],
  es: [
    { q: "¿Qué recibo concretamente?", a: "Cinco instrumentos — el mapa de señal, el filtro de ruido, el test de clase de referencia, el movimiento de rumbo y el control de coherencia — en plantillas con ejemplos trabajados. Tuyos para siempre." },
    { q: "¿En qué se diferencia de RADAR?", a: "RADAR soy yo leyendo la marca de otro, cada día. ARSENAL eres tú aplicando la misma grilla a tu propia marca, una vez, a tu ritmo." },
    { q: "¿Por qué el rango 147–197€?", a: "El precio depende del nivel que elijas — el kit base, o el kit con los ejemplos trabajados ampliados. Ambos son de pago único." },
    { q: "¿Sustituye al encargo?", a: "No, y no voy a fingir lo contrario. ARSENAL te da el método. El encargo te da a alguien fuera de tu propia cabeza aplicándolo — la parte que estructuralmente no puedes hacer solo." },
    { q: "¿Necesito saber diseño o copywriting?", a: "No. Los instrumentos son diagnósticos, no creativos. Si sabes responder con honestidad a preguntas sobre tu negocio, puedes aplicarlos." },
    { q: "¿Incluye acompañamiento?", a: "No. ARSENAL es deliberadamente autoservicio — por eso cuesta lo que cuesta. Si quieres que el trabajo se haga contigo, eso es el encargo." },
  ],
}

export const FAQ_NOVA: FaqSet = {
  en: [
    { q: "Who is NOVA for?", a: "Founders with an idea and nothing built yet. If you already sell something, NOVA is the wrong rung — you want the commission." },
    { q: "Does the app decide for me?", a: "No. Every step ends on a decision only you can make. It structures the work and refuses to let you skip the hard questions. You stay the founder." },
    { q: "How long does it take?", a: "There's no deadline. One payment, unlimited access, progress saved as you go. Most founders move through the five steps over a few weeks." },
    { q: "What do I have at the end?", a: "A clarified idea, a validated position, a name and identity, the site, and a 90-day launch plan. A business ready to launch, not a folder of theory." },
    { q: "Why 999€ and not a subscription?", a: "Because launching is a finite job. A subscription would only reward me for slowing you down." },
    { q: "What if I get stuck mid-way?", a: "Your progress is saved and you can come back whenever. Nothing expires." },
  ],
  fr: [
    { q: "NOVA, c'est pour qui ?", a: "Les fondateurs avec une idée et rien de construit. Si tu vends déjà quelque chose, NOVA n'est pas le bon barreau — c'est la commande qu'il te faut." },
    { q: "Est-ce que l'app décide à ma place ?", a: "Non. Chaque étape se termine sur une décision que toi seul peux prendre. Elle structure le travail et refuse de te laisser sauter les questions difficiles. Tu restes le fondateur." },
    { q: "Combien de temps ça prend ?", a: "Il n'y a pas de deadline. Un paiement, accès illimité, progression sauvegardée au fil de l'eau. La plupart des fondateurs traversent les cinq étapes en quelques semaines." },
    { q: "Qu'est-ce que j'ai à la fin ?", a: "Une idée clarifiée, un positionnement validé, un nom et une identité, le site, et un plan de lancement à 90 jours. Une entreprise prête à lancer, pas un dossier de théorie." },
    { q: "Pourquoi 999€ et pas un abonnement ?", a: "Parce que lancer est un travail fini. Un abonnement ne ferait que me récompenser de te ralentir." },
    { q: "Et si je bloque en cours de route ?", a: "Ta progression est sauvegardée et tu peux revenir quand tu veux. Rien n'expire." },
  ],
  es: [
    { q: "¿Para quién es NOVA?", a: "Fundadores con una idea y nada construido todavía. Si ya vendes algo, NOVA es el peldaño equivocado — lo que quieres es el encargo." },
    { q: "¿La app decide por mí?", a: "No. Cada paso termina en una decisión que solo tú puedes tomar. Estructura el trabajo y se niega a dejarte saltar las preguntas difíciles. Tú sigues siendo el fundador." },
    { q: "¿Cuánto tarda?", a: "No hay plazo. Un pago, acceso ilimitado, progreso guardado sobre la marcha. La mayoría recorre los cinco pasos en unas semanas." },
    { q: "¿Qué tengo al final?", a: "Una idea clarificada, un posicionamiento validado, un nombre y una identidad, el sitio, y un plan de lanzamiento a 90 días. Un negocio listo para lanzar, no una carpeta de teoría." },
    { q: "¿Por qué 999€ y no una suscripción?", a: "Porque lanzar es un trabajo finito. Una suscripción solo me premiaría por ralentizarte." },
    { q: "¿Y si me atasco a mitad?", a: "Tu progreso queda guardado y puedes volver cuando quieras. Nada caduca." },
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
