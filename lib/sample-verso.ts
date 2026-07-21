import type { Lang } from "@/lib/lang"

/**
 * Demonstration document for the BRAND NARRATIVE AUDIT (490€).
 *
 * Deliberately a different house from SILLAGE, and deliberately shorter: the
 * audit is a diagnosis, not an architecture, and the sample has to make that
 * boundary obvious at a glance rather than in a disclaimer. Five blocks, the
 * exact five the offer promises.
 *
 * VERSO is invented. So are its competitors.
 */

export type AuditBlock =
  | { kind: "p"; text: string }
  | { kind: "quote"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "table"; head: string[]; rows: string[][] }
  | { kind: "pair"; beforeLabel: string; afterLabel: string; before: string; after: string }

export type AuditPart = { n: string; title: string; blocks: AuditBlock[] }

export type AuditDoc = {
  eyebrow: string
  title: string
  house: string
  edition: string
  disclaimer: string
  dossierTitle: string
  dossierRows: [string, string][]
  parts: AuditPart[]
  scopeTitle: string
  scopeBody: string
  scopeNot: string[]
  ctaTitle: string
  ctaBody: string
  ctaPrimary: string
  ctaSecondary: string
}

export const AUDIT_DOC: Record<Lang, AuditDoc> = {
  fr: {
    eyebrow: "Un exemple de ce que vous recevrez",
    title: "BRAND NARRATIVE AUDIT",
    house: "VERSO",
    edition: "Audit n° 000 — cinq blocs",
    disclaimer:
      "Exemple publié à titre d'illustration. VERSO et les maisons citées ne correspondent à aucune entreprise existante.",
    dossierTitle: "Le dossier",
    dossierRows: [
      ["La maison", "VERSO — Bordeaux, six ans. Reliure et édition d'art à façon."],
      ["Ce qu'elle vend", "Des tirages reliés à la main pour galeries, musées et collectionneurs."],
      ["L'état", "410 k€ de chiffre annuel. Neuf personnes. Carnet plein à trois mois."],
      ["Le motif de l'audit", "« On refuse du travail et on n'arrive pourtant pas à augmenter nos prix. »"],
      ["Sa phrase actuelle", "« L'artisanat de la reliure, au service de vos projets. »"],
    ],
    parts: [
      {
        n: "01",
        title: "La lecture du champ",
        blocks: [
          { kind: "p", text: "Quatre concurrents directs analysés sur leur posture, pas sur leur catalogue." },
          {
            kind: "table",
            head: ["Maison", "Sa phrase", "Ce qu'elle occupe vraiment"],
            rows: [
              ["ATELIER MARQUE", "« Façonneur d'ouvrages d'exception »", "Le luxe déclaratif. Épuise son crédit à s'auto-décerner l'exception."],
              ["LES PRESSES DU SUD", "« Votre partenaire impression et façonnage »", "Le prestataire fiable. Se place volontairement en exécutant."],
              ["MAISON LIVRE", "« La reliure d'art depuis 1897 »", "L'ancienneté. Position solide mais fermée : personne ne peut la disputer, elle ne peut rien conquérir."],
              ["FOLIO STUDIO", "« Objets imprimés, pensés autrement »", "La créativité vague. Ne dit rien de vérifiable."],
              ["VERSO", "« L'artisanat de la reliure, au service de vos projets »", "— indéterminé —"],
            ],
          },
          {
            kind: "p",
            text: "Trois des quatre parlent depuis l'atelier : ce qu'ils savent faire, depuis quand, avec quel soin. Aucun ne parle depuis l'objet fini ni depuis celui qui le gardera. Le terrain vacant est là — non pas comment c'est fabriqué, mais ce que cela devient une fois entre les mains de quelqu'un.",
          },
          {
            kind: "quote",
            text: "Le champ entier vend un savoir-faire. Personne ne vend ce que le savoir-faire produit : un objet qui survivra à celui qui l'a commandé.",
          },
        ],
      },
      {
        n: "02",
        title: "L'autopsie de votre phrase",
        blocks: [
          { kind: "quote", text: "« L'artisanat de la reliure, au service de vos projets. »" },
          {
            kind: "list",
            items: [
              "« L'artisanat de la reliure » — le nom du métier, pas de la maison. Vos quatre concurrents peuvent l'écrire sans mentir. Une phrase de position doit être indisponible aux autres.",
              "« au service de » — vous vous placez en exécutant. C'est exactement la position des Presses du Sud, et c'est celle qui plafonne un prix : un prestataire se négocie, un auteur non.",
              "« vos projets » — mot creux qui recouvre aussi bien un catalogue d'exposition qu'une plaquette d'entreprise. Il empêche l'acheteur haut de gamme de se reconnaître.",
            ],
          },
          {
            kind: "p",
            text: "Rien dans cette phrase ne nomme la durée, qui est pourtant votre seule vraie promesse. Vous reliez des objets destinés à traverser des générations, et vous le dites avec le vocabulaire d'un sous-traitant.",
          },
          {
            kind: "p",
            text: "La conséquence est arithmétique : un acheteur qui vous range parmi les façonniers vous compare à un devis d'impression. Un acheteur qui vous range parmi les maisons qui produisent des objets de conservation vous compare à un encadrement muséal. Ce n'est pas le même ordre de grandeur, et vous choisissez le premier dans votre propre phrase.",
          },
        ],
      },
      {
        n: "03",
        title: "Les mots à retirer",
        blocks: [
          {
            kind: "table",
            head: ["À retirer", "Pourquoi"],
            rows: [
              ["artisanat, artisanal", "Employé par trois concurrents sur quatre. Vous rend interchangeable."],
              ["au service de", "Vous place en exécutant. C'est la formulation qui plafonne le prix."],
              ["sur mesure", "Attendu, donc invisible. Personne ne vend du prêt-à-porter dans ce métier."],
              ["projets", "Recouvre tout, donc ne qualifie personne."],
              ["exception, exceptionnel", "Appartient à Atelier Marque, et une maison ne se décerne pas l'exception."],
              ["passion", "Signale l'amateur plutôt que le professionnel dans un devis à cinq chiffres."],
            ],
          },
          {
            kind: "p",
            text: "Et les mots qui peuvent devenir les vôtres, parce qu'aucun concurrent ne les occupe : conservation, reliure de conservation, siècle, transmission, pièce unique numérotée, dépôt, restaurable, fonds.",
          },
          {
            kind: "pair",
            beforeLabel: "Avant",
            afterLabel: "Après",
            before: "« L'artisanat de la reliure, au service de vos projets. »",
            after: "« Nous relions les ouvrages destinés à durer plus longtemps que ceux qui les commandent. »",
          },
        ],
      },
      {
        n: "04",
        title: "Le cap",
        blocks: [
          {
            kind: "p",
            text: "Quatre mouvements, par ordre de priorité, avec leur coût et ce qu'ils débloquent.",
          },
          {
            kind: "list",
            items: [
              "1 — Quitter le vocabulaire du façonnage. Retirer « artisanat » et « au service de » de la page d'accueil, des devis et de la signature de courriel. Coût : une demi-journée. Débloque : la sortie de la comparaison avec un devis d'impression.",
              "2 — Adopter la conservation comme territoire. Faire de la durée le sujet de chaque prise de parole, y compris commerciale. Coût : une réécriture complète du site. Débloque : la comparaison avec l'encadrement muséal, soit un plafond trois à cinq fois supérieur.",
              "3 — Numéroter et documenter chaque pièce. Un certificat, un numéro, une fiche de conservation remise avec l'ouvrage. Coût : un protocole interne et une impression. Débloque : la preuve matérielle de la promesse de durée — c'est ce qui rend le prix défendable en face.",
              "4 — Refuser publiquement une catégorie de travaux. Nommer ce que la maison ne relie pas. Coût : du chiffre à court terme. Débloque : la position, qui n'existe pas sans refus.",
            ],
          },
          {
            kind: "quote",
            text: "Le mouvement 3 est celui qui paie le plus vite. Une promesse de durée sans document est une affirmation ; avec un certificat de conservation, elle devient une caractéristique du produit.",
          },
        ],
      },
      {
        n: "05",
        title: "Le verdict",
        blocks: [
          {
            kind: "p",
            text: "VERSO n'a pas un problème de notoriété ni de qualité — le carnet plein à trois mois le prouve. La maison a un problème de catégorie assignée : elle décrit un savoir-faire là où elle produit un objet de conservation, et se fait donc comparer à des façonniers alors que sa promesse réelle relève du patrimoine. Le plafond tarifaire n'est pas imposé par le marché, il est inscrit dans la phrase d'accueil. Tant que « au service de vos projets » y figurera, chaque devis sera lu comme une prestation d'exécution — et une prestation d'exécution se négocie toujours à la baisse.",
          },
        ],
      },
    ],
    scopeTitle: "Ce que cet audit ne contient pas",
    scopeBody:
      "Un diagnostic n'est pas une architecture. Ce document dit où la maison se tient et vers où aller. Il ne fait pas le chemin.",
    scopeNot: [
      "Pas de plateforme narrative : ni récit fondateur, ni piliers de message, ni archétype",
      "Pas de système de langage complet : le lexique est esquissé, pas construit",
      "Pas de copy prêt à l'emploi : aucune page réécrite, aucun angle de contenu, aucun plan de lancement",
      "Pas d'extraction en profondeur : le document est produit à partir de ce que vous envoyez",
      "Pas d'allers-retours ni de revue à trente jours",
    ],
    ctaTitle: "Voilà ce que vous recevez pour 490€.",
    ctaBody:
      "Sept jours après votre questionnaire, un document de cette forme sur votre propre maison. Si vous commandez ensuite l'architecture complète, les 490€ en sont déduits.",
    ctaPrimary: "Commander l'audit — 490€",
    ctaSecondary: "Voir l'architecture complète →",
  },

  en: {
    eyebrow: "An example of what you receive",
    title: "BRAND NARRATIVE AUDIT",
    house: "VERSO",
    edition: "Audit n° 000 — five blocks",
    disclaimer:
      "Published as an illustration. VERSO and the houses named here correspond to no existing company.",
    dossierTitle: "The dossier",
    dossierRows: [
      ["The house", "VERSO — Bordeaux, six years old. Bespoke art binding and editions."],
      ["What it sells", "Hand-bound editions for galleries, museums and collectors."],
      ["The state", "€410k annual revenue. Nine people. Booked three months ahead."],
      ["Why the audit", "\u201cWe turn work away and still can't raise our prices.\u201d"],
      ["Current sentence", "\u201cThe craft of binding, at the service of your projects.\u201d"],
    ],
    parts: [
      {
        n: "01",
        title: "The field, read",
        blocks: [
          { kind: "p", text: "Four direct competitors, read on their stance rather than their catalogue." },
          {
            kind: "table",
            head: ["House", "Their sentence", "What it actually occupies"],
            rows: [
              ["ATELIER MARQUE", "\u201cMaker of exceptional volumes\u201d", "Declared luxury. Spends its credit awarding itself the exception."],
              ["LES PRESSES DU SUD", "\u201cYour printing and finishing partner\u201d", "The reliable supplier. Places itself as executor by choice."],
              ["MAISON LIVRE", "\u201cArt binding since 1897\u201d", "Age. Solid but closed: nobody can contest it, it can conquer nothing."],
              ["FOLIO STUDIO", "\u201cPrinted objects, thought differently\u201d", "Vague creativity. Says nothing verifiable."],
              ["VERSO", "\u201cThe craft of binding, at the service of your projects\u201d", "— undetermined —"],
            ],
          },
          {
            kind: "p",
            text: "Three of the four speak from the workshop: what they can do, since when, with what care. None speaks from the finished object, or from whoever will keep it. The open ground is exactly there — not how it is made, but what it becomes once it is in someone's hands.",
          },
          {
            kind: "quote",
            text: "The entire field sells craft. Nobody sells what the craft produces: an object that will outlive the person who commissioned it.",
          },
        ],
      },
      {
        n: "02",
        title: "Your sentence, autopsied",
        blocks: [
          { kind: "quote", text: "\u201cThe craft of binding, at the service of your projects.\u201d" },
          {
            kind: "list",
            items: [
              "\u201cThe craft of binding\u201d — the name of the trade, not of the house. All four competitors could write it without lying. A positioning sentence must be unavailable to the others.",
              "\u201cat the service of\u201d — you place yourself as executor. That is precisely Les Presses du Sud's position, and it is the phrase that caps a price: a supplier is negotiated, an author is not.",
              "\u201cyour projects\u201d — a hollow word covering an exhibition catalogue and a corporate brochure alike. It stops the high-end buyer recognising themselves.",
            ],
          },
          {
            kind: "p",
            text: "Nothing in the sentence names duration, which is your only real promise. You bind objects meant to cross generations, and you say so in a subcontractor's vocabulary.",
          },
          {
            kind: "p",
            text: "The consequence is arithmetic: a buyer who files you among finishers compares you to a printing quote. A buyer who files you among houses producing conservation objects compares you to museum framing. Those are different orders of magnitude, and you choose the first one in your own sentence.",
          },
        ],
      },
      {
        n: "03",
        title: "The words to retire",
        blocks: [
          {
            kind: "table",
            head: ["Retire", "Why"],
            rows: [
              ["craft, artisanal", "Used by three competitors of four. Makes you interchangeable."],
              ["at the service of", "Places you as executor. This is the phrasing that caps the price."],
              ["bespoke", "Expected, therefore invisible. Nobody sells off-the-shelf in this trade."],
              ["projects", "Covers everything, so qualifies nobody."],
              ["exceptional", "Belongs to Atelier Marque, and a house does not award itself the exception."],
              ["passion", "Signals amateur rather than professional on a five-figure quote."],
            ],
          },
          {
            kind: "p",
            text: "And the words that can become yours, because no competitor occupies them: conservation, conservation binding, century, transmission, numbered unique piece, deposit, restorable, holdings.",
          },
          {
            kind: "pair",
            beforeLabel: "Before",
            afterLabel: "After",
            before: "\u201cThe craft of binding, at the service of your projects.\u201d",
            after: "\u201cWe bind the volumes meant to last longer than the people who commission them.\u201d",
          },
        ],
      },
      {
        n: "04",
        title: "The heading",
        blocks: [
          { kind: "p", text: "Four moves, in priority order, with their cost and what each unlocks." },
          {
            kind: "list",
            items: [
              "1 — Leave the vocabulary of finishing. Strip \u201ccraft\u201d and \u201cat the service of\u201d from the homepage, the quotes and the email signature. Cost: half a day. Unlocks: exit from comparison with a printing quote.",
              "2 — Adopt conservation as territory. Make duration the subject of every statement, commercial ones included. Cost: a full rewrite of the site. Unlocks: comparison with museum framing — a ceiling three to five times higher.",
              "3 — Number and document every piece. A certificate, a number, a conservation record handed over with the volume. Cost: an internal protocol and some printing. Unlocks: material proof of the duration promise — which is what makes the price defensible in the room.",
              "4 — Publicly refuse a category of work. Name what the house does not bind. Cost: revenue in the short term. Unlocks: the position, which does not exist without a refusal.",
            ],
          },
          {
            kind: "quote",
            text: "Move 3 pays fastest. A promise of duration without a document is an assertion; with a conservation certificate it becomes a property of the product.",
          },
        ],
      },
      {
        n: "05",
        title: "The verdict",
        blocks: [
          {
            kind: "p",
            text: "VERSO has neither a recognition problem nor a quality problem — being booked three months out proves it. The house has an assigned-category problem: it describes a craft where it produces a conservation object, and is therefore compared to finishers when its real promise belongs to heritage. The price ceiling is not imposed by the market, it is written into the opening sentence. As long as \u201cat the service of your projects\u201d stands there, every quote reads as execution work — and execution work is always negotiated down.",
          },
        ],
      },
    ],
    scopeTitle: "What this audit does not contain",
    scopeBody:
      "A diagnosis is not an architecture. This document says where the house stands and where to go. It does not walk the road.",
    scopeNot: [
      "No narrative platform: no origin story, no message pillars, no archetype",
      "No complete language system: the lexicon is sketched, not built",
      "No ready-to-use copy: no rewritten page, no content angle, no launch plan",
      "No deep extraction: the document is produced from what you send",
      "No revisions and no thirty-day walkthrough",
    ],
    ctaTitle: "This is what 490€ buys.",
    ctaBody:
      "Seven days after your questionnaire, a document of this shape about your own house. If you then commission the full architecture, the 490€ is deducted.",
    ctaPrimary: "Commission the audit — 490€",
    ctaSecondary: "See the full architecture →",
  },

  es: {
    eyebrow: "Un ejemplo de lo que recibirá",
    title: "BRAND NARRATIVE AUDIT",
    house: "VERSO",
    edition: "Auditoría n° 000 — cinco bloques",
    disclaimer:
      "Publicado a título ilustrativo. VERSO y las casas citadas no corresponden a ninguna empresa existente.",
    dossierTitle: "El expediente",
    dossierRows: [
      ["La casa", "VERSO — Burdeos, seis años. Encuadernación y ediciones de arte a medida."],
      ["Qué vende", "Tiradas encuadernadas a mano para galerías, museos y coleccionistas."],
      ["El estado", "410 k€ de facturación anual. Nueve personas. Agenda llena a tres meses."],
      ["Motivo de la auditoría", "«Rechazamos trabajo y aun así no logramos subir los precios.»"],
      ["Su frase actual", "«La artesanía de la encuadernación, al servicio de sus proyectos.»"],
    ],
    parts: [
      {
        n: "01",
        title: "La lectura del campo",
        blocks: [
          { kind: "p", text: "Cuatro competidores directos, leídos por su postura y no por su catálogo." },
          {
            kind: "table",
            head: ["Casa", "Su frase", "Lo que ocupa en realidad"],
            rows: [
              ["ATELIER MARQUE", "«Artífice de obras excepcionales»", "El lujo declarado. Agota su crédito autoconcediéndose la excepción."],
              ["LES PRESSES DU SUD", "«Su socio de impresión y acabado»", "El proveedor fiable. Se coloca como ejecutor por decisión propia."],
              ["MAISON LIVRE", "«Encuadernación de arte desde 1897»", "La antigüedad. Posición sólida pero cerrada: nadie puede disputarla, ella no puede conquistar nada."],
              ["FOLIO STUDIO", "«Objetos impresos, pensados de otro modo»", "Creatividad vaga. No dice nada verificable."],
              ["VERSO", "«La artesanía de la encuadernación, al servicio de sus proyectos»", "— indeterminado —"],
            ],
          },
          {
            kind: "p",
            text: "Tres de los cuatro hablan desde el taller: lo que saben hacer, desde cuándo, con cuánto cuidado. Ninguno habla desde el objeto terminado ni desde quien lo conservará. El terreno libre está justo ahí — no cómo se fabrica, sino en qué se convierte una vez en manos de alguien.",
          },
          {
            kind: "quote",
            text: "Todo el campo vende un saber hacer. Nadie vende lo que ese saber produce: un objeto que sobrevivirá a quien lo encargó.",
          },
        ],
      },
      {
        n: "02",
        title: "La autopsia de su frase",
        blocks: [
          { kind: "quote", text: "«La artesanía de la encuadernación, al servicio de sus proyectos.»" },
          {
            kind: "list",
            items: [
              "«La artesanía de la encuadernación» — el nombre del oficio, no de la casa. Sus cuatro competidores pueden escribirlo sin mentir. Una frase de posición debe estar indisponible para los demás.",
              "«al servicio de» — se coloca como ejecutor. Es exactamente la posición de Les Presses du Sud, y es la fórmula que pone techo a un precio: a un proveedor se le negocia, a un autor no.",
              "«sus proyectos» — palabra hueca que cubre por igual un catálogo de exposición y un folleto corporativo. Impide que el comprador de gama alta se reconozca.",
            ],
          },
          {
            kind: "p",
            text: "Nada en esa frase nombra la duración, que es sin embargo su única promesa real. Encuaderna objetos destinados a atravesar generaciones, y lo dice con el vocabulario de un subcontratista.",
          },
          {
            kind: "p",
            text: "La consecuencia es aritmética: un comprador que le archiva entre los acabadores le compara con un presupuesto de imprenta. Un comprador que le archiva entre las casas que producen objetos de conservación le compara con un enmarcado museístico. No es el mismo orden de magnitud, y usted elige el primero en su propia frase.",
          },
        ],
      },
      {
        n: "03",
        title: "Las palabras a retirar",
        blocks: [
          {
            kind: "table",
            head: ["Retirar", "Por qué"],
            rows: [
              ["artesanía, artesanal", "Usada por tres de cuatro competidores. Le vuelve intercambiable."],
              ["al servicio de", "Le coloca como ejecutor. Es la formulación que pone techo al precio."],
              ["a medida", "Esperado, luego invisible. Nadie vende prêt-à-porter en este oficio."],
              ["proyectos", "Lo cubre todo, así que no cualifica a nadie."],
              ["excepcional", "Pertenece a Atelier Marque, y una casa no se concede la excepción."],
              ["pasión", "Señala al aficionado más que al profesional en un presupuesto de cinco cifras."],
            ],
          },
          {
            kind: "p",
            text: "Y las palabras que pueden volverse suyas, porque ningún competidor las ocupa: conservación, encuadernación de conservación, siglo, transmisión, pieza única numerada, depósito, restaurable, fondos.",
          },
          {
            kind: "pair",
            beforeLabel: "Antes",
            afterLabel: "Después",
            before: "«La artesanía de la encuadernación, al servicio de sus proyectos.»",
            after: "«Encuadernamos las obras destinadas a durar más que quienes las encargan.»",
          },
        ],
      },
      {
        n: "04",
        title: "El rumbo",
        blocks: [
          { kind: "p", text: "Cuatro movimientos, por orden de prioridad, con su coste y lo que desbloquean." },
          {
            kind: "list",
            items: [
              "1 — Abandonar el vocabulario del acabado. Retirar «artesanía» y «al servicio de» de la página de inicio, los presupuestos y la firma de correo. Coste: media jornada. Desbloquea: salir de la comparación con un presupuesto de imprenta.",
              "2 — Adoptar la conservación como territorio. Hacer de la duración el tema de cada intervención, también la comercial. Coste: una reescritura completa del sitio. Desbloquea: la comparación con el enmarcado museístico — un techo de tres a cinco veces superior.",
              "3 — Numerar y documentar cada pieza. Un certificado, un número, una ficha de conservación entregada con la obra. Coste: un protocolo interno y una impresión. Desbloquea: la prueba material de la promesa de duración — que es lo que hace defendible el precio en la sala.",
              "4 — Rechazar públicamente una categoría de trabajos. Nombrar lo que la casa no encuaderna. Coste: facturación a corto plazo. Desbloquea: la posición, que no existe sin un rechazo.",
            ],
          },
          {
            kind: "quote",
            text: "El movimiento 3 es el que paga más rápido. Una promesa de duración sin documento es una afirmación; con un certificado de conservación se vuelve una propiedad del producto.",
          },
        ],
      },
      {
        n: "05",
        title: "El veredicto",
        blocks: [
          {
            kind: "p",
            text: "VERSO no tiene un problema de notoriedad ni de calidad — la agenda llena a tres meses lo demuestra. La casa tiene un problema de categoría asignada: describe un saber hacer allí donde produce un objeto de conservación, y por eso se le compara con acabadores cuando su promesa real pertenece al patrimonio. El techo tarifario no lo impone el mercado, está escrito en la frase de apertura. Mientras «al servicio de sus proyectos» siga ahí, cada presupuesto se leerá como un trabajo de ejecución — y un trabajo de ejecución siempre se negocia a la baja.",
          },
        ],
      },
    ],
    scopeTitle: "Lo que esta auditoría no contiene",
    scopeBody:
      "Un diagnóstico no es una arquitectura. Este documento dice dónde está la casa y hacia dónde ir. No recorre el camino.",
    scopeNot: [
      "Sin plataforma narrativa: ni relato de origen, ni pilares de mensaje, ni arquetipo",
      "Sin sistema de lenguaje completo: el léxico está esbozado, no construido",
      "Sin copy listo para usar: ninguna página reescrita, ningún ángulo de contenido, ningún plan de lanzamiento",
      "Sin extracción en profundidad: el documento se produce a partir de lo que usted envía",
      "Sin idas y venidas ni revisión a los treinta días",
    ],
    ctaTitle: "Esto es lo que compra por 490€.",
    ctaBody:
      "Siete días después de su cuestionario, un documento de esta forma sobre su propia casa. Si después encarga la arquitectura completa, los 490€ se descuentan.",
    ctaPrimary: "Encargar la auditoría — 490€",
    ctaSecondary: "Ver la arquitectura completa →",
  },
}
