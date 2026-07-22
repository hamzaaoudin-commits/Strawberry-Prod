import type { Lang } from "@/lib/lang"

/**
 * RADAR — les fiches.
 *
 * Une fiche par entrée. Pour en publier une nouvelle : copier un bloc, changer
 * le nom, la date et les six textes. Rien d'autre à toucher.
 *
 * `date` est une date de parution : une fiche datée dans le futur n'apparaît pas
 * tant que le jour n'est pas venu. C'est ce qui permet de préparer des lots de
 * dix à l'avance et de ne rien avoir à faire les jours sans.
 *
 * Seul le français est requis. Une langue absente retombe sur le français
 * plutôt que d'afficher une page vide.
 */

export type Locale<T> = { fr: T; en?: T; es?: T }

/** Motif de couverture. Chaque signe traduit le type de contradiction relevée. */
export type Motif =
  | "drift"     // deux cercles qui s'écartent — une promesse dépassée
  | "signal"    // une courbe et sa ligne de base — un signal noyé
  | "dissolve"  // une trame qui se disperse — une épure devenue catalogue
  | "nested"    // des cadres emboîtés — une méthode qui enferme
  | "shrink"    // des lignes qui raccourcissent — une promesse qui se rétracte
  | "ceiling"   // un toit — un prix plafonné
  | "refusal"   // une croix — une position bâtie sur un refus
  | "split"     // deux blocs séparés — deux récits qui ne se rejoignent pas
  | "two"       // deux colonnes — deux clients sous une seule marque
  | "word"      // des lignes barrées — un mot qui piège

/** Rangée thématique. Un verdict, jamais un secteur. */
export type Theme = "outgrown" | "price-cap" | "two-clients" | "unwritten" | "word-trap"

export const THEME_LABELS: Record<Theme, Locale<string>> = {
  outgrown: {
    fr: "Promesses dépassées par la croissance",
    en: "Promises outgrown by growth",
    es: "Promesas superadas por el crecimiento",
  },
  "price-cap": {
    fr: "Marques qui plafonnent leur prix",
    en: "Brands capping their own price",
    es: "Marcas que limitan su propio precio",
  },
  "two-clients": {
    fr: "Deux clients sous une seule marque",
    en: "Two customers, one brand",
    es: "Dos clientes, una sola marca",
  },
  unwritten: {
    fr: "Une autorité jamais écrite",
    en: "Authority never written down",
    es: "Una autoridad nunca escrita",
  },
  "word-trap": {
    fr: "Le mot qui piège",
    en: "The word that traps",
    es: "La palabra que atrapa",
  },
}

export type ReadBlock = { key: BlockKey; body: Locale<string> }
export type BlockKey = "context" | "signal" | "noise" | "tension" | "heading" | "verdict"

export type BrandRead = {
  slug: string
  /** Date de parution. Une fiche future reste invisible jusqu'à ce jour. */
  date: string
  brand: string
  sector: Locale<string>
  minutes: number
  motif: Motif
  theme: Theme
  /** Une fiche libre est visible sans abonnement — la vitrine. */
  free?: boolean
  blocks: ReadBlock[]
}

export const SECTION_LABELS: Record<BlockKey, Locale<string>> = {
  context: { fr: "Contexte", en: "Context", es: "Contexto" },
  signal: { fr: "Le signal — ce qui marche", en: "The signal — what works", es: "La señal — lo que funciona" },
  noise: { fr: "Le bruit — ce qui est flou", en: "The noise — what's blurry", es: "El ruido — lo difuso" },
  tension: { fr: "La tension", en: "The tension", es: "La tensión" },
  heading: { fr: "Le cap de repositionnement", en: "The repositioning heading", es: "El rumbo de reposicionamiento" },
  verdict: { fr: "Verdict", en: "Verdict", es: "Veredicto" },
}

export function pickLocale<T>(v: Locale<T>, lang: Lang): T {
  return (v[lang] ?? v.fr) as T
}

export const READS: BrandRead[] = [
  {
    slug: "sezane",
    date: "2026-07-20",
    brand: "Sézane",
    sector: { fr: "Mode / DNVB" },
    minutes: 11,
    motif: "drift",
    theme: "outgrown", free: true,
    blocks: [
      { key: "context", body: { fr: "Sézane est la DNVB française qui a fait du premium accessible made-in-France une catégorie à part entière — vendue en direct, sans wholesale, portée par une communauté et des boutiques qui tiennent de l'appartement plus que du magasin. Le récit est réellement fort. La question : la cadence actuelle le protège-t-elle ou l'érode-t-elle ?" } },
      { key: "signal", body: { fr: "Une promesse tenue sans dévier : qualité, savoir-faire, ton chaleureux et personnel, relation directe à son public. Là où la plupart empruntent les codes du luxe ou ceux de la promo, Sézane occupe une troisième position — intime, juste, atteignable — sans jamais glisser vers l'un des deux extrêmes. Cette constance est la douve." } },
      { key: "noise", body: { fr: "Rareté et cadence se tirent dessus. La charge émotionnelle repose sur la rareté — le drop épuisé, la liste d'attente, l'objet qu'on a failli manquer. Mais le rythme de sorties s'est accéléré au point que la rareté commence à se lire comme du marketing plus que comme une vérité. Quand « édition limitée » revient chaque semaine, le mot perd son poids." } },
      { key: "tension", body: { fr: "La vérité fondatrice — rare, pensé, fait pour durer — frotte avec la réalité opérationnelle d'une machine à drops haute fréquence. Non tranchée, la maison tient deux promesses qui s'annulent lentement : achetez maintenant, ça ne reviendra pas — et rassurez-vous, il y en aura d'autres jeudi." } },
      { key: "heading", body: { fr: "Trancher, à voix haute, quelle promesse porte la structure. Honorer la rareté en ralentissant la cadence et en refaisant de chaque sortie un événement. Ou assumer le rythme, abandonner tout le langage de rareté et se repositionner sur le vestiaire vivant : non plus « rare », mais « toujours juste, toujours nouveau ». Les deux sont forts. Le seul coup perdant, c'est de garder les deux." } },
      { key: "verdict", body: { fr: "Sézane n'a pas un problème de positionnement — elle a une promesse qu'elle a dépassée sans la renommer. Ce n'est pas un ajustement de message, c'est une décision d'architecture. Et c'est exactement le genre de décision qu'un fondateur est trop proche pour prendre seul." } },
    ],
  },
  {
    slug: "qonto",
    date: "2026-07-19",
    brand: "Qonto",
    sector: { fr: "Fintech B2B" },
    minutes: 9,
    motif: "signal",
    theme: "two-clients",
    blocks: [
      { key: "context", body: { fr: "Qonto s'adresse aux entrepreneurs et aux petites structures avec un compte professionnel et les outils financiers qui l'entourent. La maison est devenue une référence de la fintech européenne et communique avec une clarté rare dans un secteur qui adore le jargon." } },
      { key: "signal", body: { fr: "L'exécution comme argument. Qonto ne raconte pas une révolution : elle montre une interface qui marche, une ouverture de compte rapide, un service qui répond. Dans un secteur où l'ancien monde est lent et le nouveau monde est bavard, être précis et disponible est une position en soi. Le ton est adulte, jamais gadget." } },
      { key: "noise", body: { fr: "Le vocabulaire s'est élargi plus vite que la perception. La maison parle de gestion financière, de pilotage, d'outils métier — mais la porte d'entrée reste, dans la tête de l'acheteur, « le compte pro en ligne ». Quand le discours monte vers la plateforme et que l'acquisition reste sur le compte, la promesse haute ne rencontre jamais son acheteur." } },
      { key: "tension", body: { fr: "Deux publics coexistent sous une seule phrase. L'indépendant qui veut ouvrir un compte en dix minutes, et la PME de quarante personnes qui veut piloter ses dépenses. Le premier achète de la simplicité, le second de la profondeur. Une phrase qui promet les deux ne convainc pleinement ni l'un ni l'autre." } },
      { key: "heading", body: { fr: "Segmenter le récit, pas seulement l'offre. Deux entrées explicites, deux vocabulaires, deux promesses — l'ouverture immédiate d'un côté, le contrôle financier de l'autre — plutôt qu'une phrase moyenne qui tente de couvrir les deux. Ou assumer une seule cible et accepter de perdre l'autre. La première route est plus rentable, la seconde plus tranchante." } },
      { key: "verdict", body: { fr: "Qonto exécute mieux qu'elle ne se raconte. Sa position réelle — l'outil financier qui ne fait jamais perdre de temps — est plus forte que sa position affichée, qui s'élargit à mesure que le catalogue grandit. Le risque n'est pas la concurrence, c'est la dilution : à force de couvrir tout le spectre de la gestion, la maison finit par se faire comparer à des logiciels de comptabilité au lieu d'être comparée à une banque." } },
    ],
  },
  {
    slug: "typology",
    date: "2026-07-18",
    brand: "Typology",
    sector: { fr: "Beauté / DNVB" },
    minutes: 12,
    motif: "dissolve",
    theme: "outgrown",
    blocks: [
      { key: "context", body: { fr: "Typology est née sur une idée simple et forte : des formules courtes, des ingrédients nommés, des prix lisibles, vendus en direct. Le geste fondateur est un refus — refus de l'opacité qui règne dans la cosmétique." } },
      { key: "signal", body: { fr: "La transparence comme architecture, pas comme argument. Le pourcentage d'actif est affiché, la liste est courte, le nom du produit décrit ce qu'il fait. Cette clarté ne se limite pas à la communication : elle structure le produit lui-même. C'est ce qui rend la position difficile à copier — un concurrent devrait reformuler, pas seulement réécrire." } },
      { key: "noise", body: { fr: "La sobriété affichée et l'étendue du catalogue commencent à se contredire. Une maison qui a construit son autorité sur « moins d'ingrédients, moins de promesses » propose désormais une gamme large. Le client fondateur, venu pour l'épure, doit maintenant choisir — et choisir est exactement ce dont l'épure devait le dispenser." } },
      { key: "tension", body: { fr: "La transparence est une promesse de simplification. La croissance d'un catalogue est une promesse de couverture. Les deux tirent en sens inverse : plus la maison couvre de besoins, moins elle simplifie la décision. La contradiction n'est pas dans les formules, elle est dans le nombre." } },
      { key: "heading", body: { fr: "Déplacer la promesse de la formule vers le protocole. Non plus « des formules courtes » mais « la routine minimale qui vous suffit » — ce qui transforme un catalogue large en outil de réduction plutôt qu'en source de choix. Ou tenir l'épure au sens strict et brider volontairement la gamme, ce qui coûte du chiffre et rend la position inattaquable." } },
      { key: "verdict", body: { fr: "Typology a inventé sa catégorie sur un refus, et grandit désormais par accumulation. Ce n'est pas incohérent en soi, mais le récit n'a pas suivi : la maison continue de parler comme si elle proposait peu, alors qu'elle propose beaucoup. Tant que la promesse dit « moins » et que l'expérience dit « choisissez », la clarté fondatrice s'érode d'un produit par mois." } },
    ],
  },
  {
    slug: "diptyque",
    date: "2026-07-17",
    brand: "Diptyque",
    sector: { fr: "Parfum / Luxe" },
    minutes: 10,
    motif: "nested",
    theme: "outgrown",
    blocks: [
      { key: "context", body: { fr: "Maison parisienne née d'un magasin de curiosités, Diptyque a construit une identité littéraire et graphique immédiatement reconnaissable : les ovales, les typographies denses, les noms de compositions qui évoquent des lieux et des souvenirs." } },
      { key: "signal", body: { fr: "L'écriture. Diptyque est l'une des rares maisons de parfum dont le langage précède le produit — on retient un nom, une étiquette, une phrase avant de retenir une odeur. Cette primauté du texte sur l'olfactif est une anomalie du secteur, et c'est précisément ce qui rend la maison inimitable : on peut copier un flacon, pas une bibliothèque." } },
      { key: "noise", body: { fr: "La bougie a pris le pouvoir sur la perception. Pour une large part du public, Diptyque n'est pas une maison de parfum qui fait aussi des bougies : c'est une marque de bougies qui fait aussi du parfum. Le produit d'accès a redéfini la maison de l'extérieur, sans qu'elle ait choisi ce déplacement." } },
      { key: "tension", body: { fr: "Une maison de création olfactive perçue comme un objet de décoration. La bougie apporte le volume, l'accessibilité et le cadeau — et elle plafonne l'autorité. On ne compare pas un créateur de parfums à un fabricant de bougies, mais le public, lui, le fait déjà." } },
      { key: "heading", body: { fr: "Reprendre la main sur le classement. Soit réaffirmer l'écriture olfactive comme cœur, en donnant aux parfums une visibilité et un récit que la bougie n'a pas, et en traitant la bougie comme une porte et non comme un rayon. Soit assumer l'objet et se repositionner explicitement sur l'atmosphère domestique — territoire immense, mais qui ferme la porte du parfum de niche." } },
      { key: "verdict", body: { fr: "Diptyque possède un actif que presque personne n'a dans son secteur — une langue — et laisse un produit d'accès décider de sa catégorie. Le danger n'est pas commercial à court terme, il est classificatoire : le jour où la maison veut monter en gamme sur le parfum, elle devra remonter contre une perception qu'elle a laissée s'installer." } },
    ],
  },
  {
    slug: "alan",
    date: "2026-07-16",
    brand: "Alan",
    sector: { fr: "Assurance santé" },
    minutes: 9,
    motif: "shrink",
    theme: "two-clients",
    blocks: [
      { key: "context", body: { fr: "Alan a construit son entrée sur un constat juste : l'assurance santé est un produit que personne ne comprend, vendu par des acteurs que personne n'aime. La maison a répondu par la clarté, une interface tenue et un ton direct." } },
      { key: "signal", body: { fr: "Dire les choses. Le langage d'Alan est le contraire du langage de l'assurance : phrases courtes, absence de conditionnel, refus du jargon de garantie. Dans un secteur où l'opacité est un modèle économique, parler simplement est une position — et elle est défendable longtemps parce que les concurrents historiques ne peuvent pas s'y convertir sans se renier." } },
      { key: "noise", body: { fr: "L'élargissement vers la santé au sens large trouble la lecture. Prévention, accompagnement, bien-être : la maison parle de plus en plus d'un territoire médical, alors que l'acte d'achat reste un contrat d'assurance signé par un dirigeant pour ses salariés. L'acheteur et le bénéficiaire ne sont pas la même personne, et le récit s'adresse de plus en plus au second." } },
      { key: "tension", body: { fr: "Deux promesses adressées à deux publics qui ne se croisent pas. Le dirigeant achète de la sérénité administrative et un budget maîtrisé ; le salarié consomme un service de santé. Une maison qui parle surtout au bénéficiaire finit par vendre à celui qui ne signe pas." } },
      { key: "heading", body: { fr: "Assumer la double adresse au lieu de la fondre. Un récit pour celui qui signe — le contrat que l'on comprend, le budget que l'on tient, l'administratif qui disparaît — et un récit pour celui qui utilise, sans confondre les deux dans la même phrase. Ou choisir de devenir un acteur de santé, ce qui suppose de vendre autre chose qu'un contrat." } },
      { key: "verdict", body: { fr: "Alan a gagné sa place avec une qualité rare — la clarté — et dépense aujourd'hui son capital de clarté à couvrir un territoire plus large. La position d'origine était nette et défendable : l'assurance santé qu'on comprend. Chaque pas vers « la santé » rend cette phrase plus floue, et la clarté est précisément ce que la maison ne peut pas se permettre de perdre." } },
    ],
  },
  {
    slug: "le-slip-francais",
    date: "2026-07-15",
    brand: "Le Slip Français",
    sector: { fr: "Textile" },
    minutes: 8,
    motif: "ceiling",
    theme: "price-cap",
    blocks: [
      { key: "context", body: { fr: "Une marque née d'une blague tenue avec sérieux : produire en France, le dire fort, et faire du patriotisme industriel un objet de fierté joyeuse plutôt qu'un discours grave." } },
      { key: "signal", body: { fr: "Le ton. Le Slip Français a inventé une façon de parler du made in France qui n'existait pas — légère, autodérisoire, jamais moralisatrice. C'est une position réelle, difficile à occuper, et qui a rendu un sujet austère désirable pour une génération qui s'en désintéressait." } },
      { key: "noise", body: { fr: "L'humour qui a ouvert la porte tient maintenant le plafond. Un vocabulaire construit sur le clin d'œil rend difficile la montée en gamme : on ne paie pas cher un produit dont la marque se moque d'elle-même. À mesure que la maison élargit son vestiaire vers des pièces plus chères, le ton fondateur travaille contre le prix." } },
      { key: "tension", body: { fr: "La drôlerie était une stratégie d'accessibilité. La qualité française est une promesse de valeur. Les deux ne cohabitent qu'un temps : arrivé à un certain niveau de prix, l'acheteur cherche du sérieux, et le rire devient un signal de moindre engagement." } },
      { key: "heading", body: { fr: "Séparer les registres plutôt que de les mélanger. Garder l'humour comme voix de la marque et adopter un registre sobre sur les pièces hautes — la même maison, deux hauteurs de voix. Ou faire évoluer le ton globalement vers une fierté sans blague, ce qui coûte une part de la personnalité fondatrice mais débloque le prix." } },
      { key: "verdict", body: { fr: "Le Slip Français a réussi le plus dur : rendre désirable un sujet qui ne l'était pas. Le problème est celui de toutes les marques bâties sur un ton — le ton devient une promesse implicite de prix. Tant que la maison rira d'elle-même sur toute sa gamme, elle restera un achat plaisir, jamais un achat de valeur." } },
    ],
  },
  {
    slug: "veja",
    date: "2026-07-14",
    brand: "Veja",
    sector: { fr: "Chaussure / Mode responsable" },
    minutes: 10,
    motif: "refusal",
    theme: "unwritten",
    blocks: [
      { key: "context", body: { fr: "Veja a construit une position rare : ne pas faire de publicité, et réinvestir ce budget dans la matière et les filières. Le refus est ici structurel, pas décoratif — il détermine le prix de revient et l'organisation." } },
      { key: "signal", body: { fr: "Le refus comme architecture. Peu de maisons peuvent nommer précisément ce qu'elles ne font pas et le prouver par leurs comptes. « Nous ne payons pas de publicité » est une phrase qu'aucun concurrent ne peut reprendre sans mentir. C'est un positionnement au sens strict : une position que les autres ne peuvent pas occuper." } },
      { key: "noise", body: { fr: "La notoriété est arrivée par des canaux que le récit ne raconte pas — le bouche-à-oreille, les revendeurs, la visibilité portée par des figures publiques. La maison dit ne pas faire de publicité, et son image circule pourtant massivement. Ce n'est pas une contradiction morale, c'est un angle mort narratif : le récit explique ce qui est refusé, jamais ce qui a fonctionné à la place." } },
      { key: "tension", body: { fr: "Une maison qui se définit par un refus doit expliquer ce qui remplace la chose refusée. Sans ce second temps, le refus finit par sembler une posture — et le jour où la croissance impose un compromis, il n'y a pas de récit de rechange." } },
      { key: "heading", body: { fr: "Écrire le versant positif du refus. Non plus seulement « nous ne faisons pas de publicité », mais « voici ce que nous finançons à la place, et voici ce que cela change dans la chaussure que vous portez ». Le refus devient alors démontrable dans le produit, et non plus seulement déclaré dans la communication." } },
      { key: "verdict", body: { fr: "Veja possède l'un des rares positionnements réellement inoccupables de son secteur, et le raconte à moitié. Un refus sans contrepartie visible reste une posture ; un refus dont on voit le produit devient une preuve. La maison a construit la moitié difficile de son récit et laissé de côté la moitié facile." } },
    ],
  },
  {
    slug: "respire",
    date: "2026-07-13",
    brand: "Respire",
    sector: { fr: "Cosmétique / DNVB" },
    minutes: 8,
    motif: "split",
    theme: "outgrown",
    blocks: [
      { key: "context", body: { fr: "Respire est née d'un besoin personnel raconté publiquement, et a grandi avec sa fondatrice comme visage. La maison a rendu accessible une catégorie — l'hygiène naturelle — jusque-là confinée aux circuits spécialisés." } },
      { key: "signal", body: { fr: "L'origine incarnée. Le récit fondateur est clair, daté, vérifiable, et il explique l'existence du produit. Dans un secteur saturé de promesses interchangeables, une raison d'exister racontée par une personne réelle est un différenciateur puissant — et c'est ce qui a permis à la maison d'entrer en grande distribution sans perdre sa légitimité." } },
      { key: "noise", body: { fr: "La distribution large et le récit intime ne parlent pas de la même chose. En linéaire, la maison est jugée sur le prix, le format et l'emplacement ; dans son récit, elle est jugée sur une histoire. Un acheteur qui découvre la marque en rayon n'a accès qu'à la moitié de la position — et cette moitié ressemble à celle de tout le monde." } },
      { key: "tension", body: { fr: "La marque incarnée par sa fondatrice vend désormais dans un canal où personne ne lit d'histoire. Plus la distribution grandit, plus la part des acheteurs qui n'ont jamais rencontré le récit augmente — et pour ceux-là, la maison n'est qu'un produit naturel parmi d'autres." } },
      { key: "heading", body: { fr: "Transférer la position de la personne vers le produit. Ce que la fondatrice garantit doit devenir visible sur l'emballage, en trois mots, sans avoir besoin du récit — une exigence de formulation, un refus nommé, un standard chiffré. Ou tenir le canal direct comme lieu principal et traiter la distribution comme un revenu, pas comme une position." } },
      { key: "verdict", body: { fr: "Respire a été portée par une histoire vraie, et se vend de plus en plus là où les histoires ne se racontent pas. La position n'a pas été perdue, elle a été laissée en amont de la distribution. Tant que la raison d'exister n'est pas inscrite dans le produit lui-même, chaque point de vente supplémentaire dilue un peu ce que la fondatrice avait construit." } },
    ],
  },
  {
    slug: "doctolib",
    date: "2026-07-12",
    brand: "Doctolib",
    sector: { fr: "Santé numérique" },
    minutes: 9,
    motif: "two",
    theme: "two-clients",
    blocks: [
      { key: "context", body: { fr: "Doctolib occupe une position d'infrastructure : le service est devenu, pour une large part du public, la façon par défaut de prendre un rendez-vous médical. Peu de maisons atteignent ce statut de verbe." } },
      { key: "signal", body: { fr: "L'évidence. Doctolib n'a jamais eu besoin d'expliquer ce qu'elle fait ; l'usage précède le discours. Cette clarté d'usage est un actif rare — la maison est comprise en trois mots, ce que presque aucun acteur de la santé numérique ne réussit." } },
      { key: "noise", body: { fr: "Deux clients opposés partagent une seule marque. Le patient veut un rendez-vous vite et gratuitement ; le praticien achète un logiciel de gestion de cabinet. Le premier voit un service public de fait, le second une dépense professionnelle. Une maison perçue comme un service public par ses utilisateurs et facturée comme un logiciel par ses clients porte une contradiction permanente." } },
      { key: "tension", body: { fr: "L'infrastructure crée l'attente de gratuité et de neutralité. Le modèle repose sur un abonnement professionnel. Chaque évolution qui sert le praticien peut être lue par le patient comme une trahison, et inversement — non parce que la maison se comporte mal, mais parce que la même marque porte deux contrats implicites incompatibles." } },
      { key: "heading", body: { fr: "Nommer explicitement les deux relations plutôt que de les laisser se confondre. Un récit clair sur ce que le service doit au patient et un autre sur ce qu'il vend au praticien, avec des surfaces distinctes. Ou assumer la position d'infrastructure jusqu'au bout, ce qui suppose de rendre publics les engagements qu'une infrastructure doit à ses usagers." } },
      { key: "verdict", body: { fr: "Doctolib a atteint le statut que toute maison recherche — devenir le geste par défaut — et hérite du problème qui va avec : une infrastructure est jugée sur ses devoirs, pas sur ses fonctionnalités. La marque continue de parler comme un produit alors qu'elle est perçue comme une institution. C'est l'écart le plus coûteux qu'une maison puisse laisser s'installer, parce qu'il ne se voit qu'au moment de la crise." } },
    ],
  },
  {
    slug: "back-market",
    date: "2026-07-11",
    brand: "Back Market",
    sector: { fr: "Reconditionné / Marketplace" },
    minutes: 9,
    motif: "word",
    theme: "word-trap",
    blocks: [
      { key: "context", body: { fr: "Back Market a fait du produit reconditionné un achat désirable plutôt qu'un achat contraint. Le geste fondateur est un déplacement de perception : passer de l'occasion subie au choix assumé." } },
      { key: "signal", body: { fr: "L'humour et la fierté. Le ton refuse le registre sacrificiel de l'écologie et le registre honteux de la seconde main. Acheter reconditionné n'y est ni un renoncement ni une bonne action, c'est une décision intelligente. Cette troisième voie est la position, et elle est solide." } },
      { key: "noise", body: { fr: "Le mot « reconditionné » reste au centre du récit alors qu'il porte tout le doute. Il dit que quelqu'un a réparé quelque chose qui était cassé. Chaque emploi rappelle l'objection principale — l'état réel du produit — au lieu de la dissoudre. La maison a créé une catégorie et l'a nommée avec le mot de l'ancienne." } },
      { key: "tension", body: { fr: "La promesse est celle d'un achat neuf en qualité perçue, et le vocabulaire est celui d'un achat de récupération. Tant que le mot central appartient au monde d'avant, la garantie doit compenser en permanence ce que le vocabulaire concède." } },
      { key: "heading", body: { fr: "Déplacer le mot. Faire porter le récit par la garantie, la vérification et l'état constaté plutôt que par le processus de reconditionnement — l'acheteur ne veut pas savoir ce qui a été fait à l'appareil, il veut savoir ce qu'il recevra. Ou tenir le mot et le transformer en label exigeant, ce qui suppose de rendre les critères aussi visibles qu'une note." } },
      { key: "verdict", body: { fr: "Back Market a réussi le plus difficile — rendre un achat désirable — et se bat encore contre un mot qu'elle a choisi elle-même. Le doute sur l'état du produit n'est pas alimenté par les concurrents, il est réactivé à chaque page par le vocabulaire de la maison. Changer de mot ne coûte rien en logistique et vaut plus que dix campagnes de réassurance." } },
    ],
  },
  {
    slug: "payfit",
    date: "2026-07-10",
    brand: "Payfit",
    sector: { fr: "Logiciel de paie" },
    minutes: 9,
    motif: "shrink",
    theme: "word-trap",
    blocks: [
      { key: "context", body: { fr: "Payfit s'adresse aux dirigeants de petites et moyennes structures avec une promesse d'automatisation de la paie et de la gestion des salariés, dans un domaine réputé pour sa complexité réglementaire." } },
      { key: "signal", body: { fr: "La délivrance. La maison ne vend pas un logiciel, elle vend la disparition d'une corvée que le dirigeant subit chaque mois. Ce cadrage — la fin d'une obligation plutôt que l'arrivée d'un outil — est plus fort que celui de la plupart des acteurs du secteur, qui vendent des fonctionnalités." } },
      { key: "noise", body: { fr: "La promesse de simplicité entre en friction avec la nature du sujet. La paie est complexe par construction : conventions collectives, cas particuliers, changements réglementaires. Une maison qui promet la simplicité doit absorber cette complexité sans jamais la montrer — et le moindre cas non couvert est vécu comme une rupture de contrat, pas comme une limite normale." } },
      { key: "tension", body: { fr: "Simplifier et couvrir sont deux promesses opposées. Plus la maison couvre de cas particuliers, plus l'interface se charge ; plus elle simplifie, plus elle laisse de cas dehors. Le récit promet les deux, l'expérience doit choisir." } },
      { key: "heading", body: { fr: "Déplacer la promesse de la simplicité vers la sécurité. Non plus « la paie devient simple » mais « la paie devient juste, et vous n'avez plus à vérifier » — ce qui autorise la complexité invisible et transforme chaque mise à jour réglementaire en preuve plutôt qu'en dette. Ou tenir la simplicité et assumer publiquement un périmètre restreint, ce qui ferme des segments mais rend la promesse tenable." } },
      { key: "verdict", body: { fr: "Payfit a choisi le mot le plus vendeur et le plus dangereux de son secteur. La simplicité est une promesse que la réglementation contredit en permanence, et chaque exception devient une preuve à charge. La position réelle de la maison n'est pas la facilité, c'est la tranquillité — et ce mot-là, aucune convention collective ne peut le démentir." } },
    ],
  },
  {
    slug: "swile",
    date: "2026-07-09",
    brand: "Swile",
    sector: { fr: "Avantages salariés" },
    minutes: 8,
    motif: "two",
    theme: "two-clients",
    blocks: [
      { key: "context", body: { fr: "Swile est entrée par la carte de titres-restaurant, un produit ancien et peu aimé, et a construit autour une identité vive dans un secteur administratif." } },
      { key: "signal", body: { fr: "L'esthétique du quotidien. La maison a traité un objet utilitaire comme un objet désirable, et a fait du moment du déjeuner un territoire de marque. C'est un déplacement réel : personne n'avait considéré le titre-restaurant comme un support d'expérience." } },
      { key: "noise", body: { fr: "Le glissement vers l'engagement des salariés brouille l'achat. Le dirigeant achète un avantage salarié parce qu'il est obligatoire ou attendu ; le récit lui parle de culture d'entreprise et de lien collectif. Le premier est une contrainte à régler, le second un projet à porter. On ne vend pas les deux avec la même phrase." } },
      { key: "tension", body: { fr: "La carte est un produit de commodité — comparé sur les frais, la couverture, l'acceptation. La plateforme d'engagement est un produit de conviction — comparé sur la vision. Une maison qui monte vers la conviction en restant achetée pour la commodité finance un discours qui ne sert pas sa vente." } },
      { key: "heading", body: { fr: "Choisir l'étage. Soit la commodité assumée et excellente — la carte qu'on n'a plus jamais à gérer — et laisser l'engagement aux autres. Soit l'engagement, ce qui suppose de faire du reste un détail et d'accepter un cycle de vente plus long avec un décideur plus haut." } },
      { key: "verdict", body: { fr: "Swile a rendu désirable un objet qui ne l'était pas, ce qui est un exploit rare. Mais la maison parle aujourd'hui à la direction des ressources humaines pendant que sa vente se joue sur des critères d'achat administratif. Tant que le récit et la décision ne se rencontrent pas au même étage, l'un des deux est financé pour rien." } },
    ],
  },
  {
    slug: "ankorstore",
    date: "2026-07-08",
    brand: "Ankorstore",
    sector: { fr: "Marketplace B2B" },
    minutes: 9,
    motif: "two",
    theme: "two-clients",
    blocks: [
      { key: "context", body: { fr: "Ankorstore met en relation des marques indépendantes et des commerces de détail, avec des conditions pensées pour réduire le risque du détaillant." } },
      { key: "signal", body: { fr: "Le camp choisi. La maison ne se présente pas comme neutre : elle dit servir le commerce indépendant contre la standardisation. Ce parti pris est une position au sens strict — il exclut, il oriente le produit, et il rend le récit difficile à copier pour un acteur qui veut plaire à tout le monde." } },
      { key: "noise", body: { fr: "Une place de marché a structurellement deux clients, et le récit n'en défend qu'un. Les marques qui vendent y sont autant clientes que les boutiques qui achètent, mais elles apparaissent surtout comme de l'offre. Une moitié du marché finance un récit écrit pour l'autre moitié." } },
      { key: "tension", body: { fr: "Défendre le commerce indépendant est une promesse de camp. Faire fonctionner une place de marché est une promesse d'équilibre. Le jour où les intérêts des deux côtés divergent — sur les conditions, les délais, les frais — la maison doit trancher contre l'un des deux, et son récit l'a déjà engagée." } },
      { key: "heading", body: { fr: "Écrire la promesse faite aux marques avec la même netteté que celle faite aux détaillants. Non pas un discours d'équilibre — personne n'y croit — mais une raison explicite pour laquelle une marque a intérêt à ce que le détaillant soit protégé. Le camp reste choisi, mais il devient intelligible des deux côtés." } },
      { key: "verdict", body: { fr: "Ankorstore a fait ce que peu de places de marché osent : prendre parti. C'est ce qui lui donne une voix. Le prix de ce choix est qu'une moitié de son marché n'apparaît jamais dans son récit, et une catégorie de partenaires qu'on ne nomme pas finit par se comporter comme un fournisseur — c'est-à-dire par négocier." } },
    ],
  },
  {
    slug: "withings",
    date: "2026-07-07",
    brand: "Withings",
    sector: { fr: "Objets de santé connectés" },
    minutes: 9,
    motif: "split",
    theme: "word-trap",
    blocks: [
      { key: "context", body: { fr: "Withings fabrique des objets de mesure domestique — balances, tensiomètres, montres — avec une exigence de design inhabituelle dans le matériel médical grand public." } },
      { key: "signal", body: { fr: "L'objet qui ne ressemble pas à un appareil médical. La maison a compris avant les autres qu'un instrument de santé qui reste dans une salle de bain doit être beau pour être utilisé. Le design n'est pas une couche, c'est la condition de l'observance." } },
      { key: "noise", body: { fr: "Deux vocabulaires cohabitent sans hiérarchie : celui de la santé, sérieux et clinique, et celui de l'électronique grand public, orienté fonctionnalités. Selon la page, la maison ressemble à un dispositif médical ou à un objet connecté. Ces deux catégories n'ont ni le même acheteur, ni le même niveau de confiance exigé, ni le même prix acceptable." } },
      { key: "tension", body: { fr: "Un objet de santé tire sa valeur du sérieux. Un objet connecté tire sa valeur de la nouveauté. Le premier se garde dix ans, le second se remplace tous les deux ans. La maison fabrique des objets durables et communique parfois comme un fabricant d'électronique." } },
      { key: "heading", body: { fr: "Trancher pour la santé et traiter le design comme une preuve de sérieux plutôt que comme un argument d'attrait — un instrument que l'on garde parce qu'il est juste et qu'on n'a pas honte de le laisser visible. Ou assumer l'électronique domestique et abandonner la prétention clinique, ce qui simplifie le récit mais plafonne la confiance." } },
      { key: "verdict", body: { fr: "Withings possède un actif que les acteurs médicaux n'ont pas — des objets que l'on accepte chez soi — et le raconte tantôt comme un gadget, tantôt comme un dispositif. La conséquence est un prix toujours discuté : un objet connecté paraît cher, un instrument de santé paraît raisonnable. Le même produit, deux catégories, deux verdicts de portefeuille." } },
    ],
  },
  {
    slug: "nature-decouvertes",
    date: "2026-07-06",
    brand: "Nature & Découvertes",
    sector: { fr: "Distribution spécialisée" },
    minutes: 8,
    motif: "drift",
    theme: "outgrown",
    blocks: [
      { key: "context", body: { fr: "Enseigne construite sur une promesse d'éveil à la nature et à la curiosité, avec une expérience en magasin volontairement sensorielle et une part des bénéfices reversée à une fondation." } },
      { key: "signal", body: { fr: "L'intention. Peu d'enseignes de distribution s'appuient sur une raison d'être aussi ancienne et aussi tenue. Le magasin lui-même en est la démonstration — l'odeur, le son, la lumière font partie du récit. C'est une position sensorielle avant d'être un discours." } },
      { key: "noise", body: { fr: "Le catalogue et l'intention se sont éloignés. Une enseigne qui parle de nature vend en pratique une large part d'objets de cadeau, de bien-être et de loisir. Le client entre pour une raison — trouver un cadeau — et le récit lui parle d'une autre — sa relation au vivant. L'écart n'est pas mensonger, il est illisible." } },
      { key: "tension", body: { fr: "L'enseigne est perçue comme un lieu de cadeaux et se raconte comme une mission. Le premier positionnement est commercialement efficace et sans profondeur ; le second est profond et ne dit pas quoi acheter. Aucun des deux ne peut être abandonné sans coût, et les tenir ensemble affaiblit les deux." } },
      { key: "heading", body: { fr: "Faire du cadeau le véhicule explicite de la mission plutôt que sa contradiction — non plus « la nature et la découverte » d'un côté et un rayon cadeaux de l'autre, mais l'objet que l'on offre pour transmettre une attention au vivant. La mission devient alors la raison d'acheter ce cadeau-là plutôt qu'un autre." } },
      { key: "verdict", body: { fr: "Nature & Découvertes a l'un des récits les plus anciens et les plus sincères de la distribution française, et un catalogue qui ne le raconte plus. Le problème n'est pas la mission, ni les produits : c'est qu'aucune phrase ne relie les deux au moment où le client tient l'objet. Une intention qui ne se lit pas dans le rayon devient un supplément d'âme, et un supplément d'âme ne fait jamais monter un panier." } },
    ],
  },
  {
    slug: "maison-standards",
    date: "2026-07-05",
    brand: "Maison Standards",
    sector: { fr: "Mode / prix transparent" },
    minutes: 8,
    motif: "ceiling",
    theme: "price-cap",
    blocks: [
      { key: "context", body: { fr: "Maison Standards a construit son entrée sur la transparence tarifaire : afficher le coût de fabrication à côté du prix de vente, et laisser le client juger de la marge." } },
      { key: "signal", body: { fr: "Un geste vérifiable. Afficher son coût de revient est un acte que peu de maisons peuvent copier — non parce que c'est technique, mais parce que c'est inconfortable. Cette gêne est exactement ce qui fait la valeur du positionnement : il est protégé par le refus des autres de s'y risquer." } },
      { key: "noise", body: { fr: "La transparence explique le prix mais ne fait pas désirer le vêtement. Une maison qui construit son récit sur la justification du prix installe le prix au centre de la relation — et un client entré par le prix repart par le prix dès qu'un autre justifie mieux ou vend moins cher." } },
      { key: "tension", body: { fr: "La transparence est un argument de rationalité. Le vêtement est un achat d'identité. Plus le récit rationalise, moins il fait envie ; plus il fait envie, moins la transparence sert. La maison a choisi un argument qui gagne la discussion et perd le désir." } },
      { key: "heading", body: { fr: "Faire de la transparence une preuve d'exigence plutôt qu'une justification de prix. Non plus « voici pourquoi ce n'est pas cher », mais « voici ce que nous refusons de faire, et vous pouvez le vérifier ligne par ligne ». La transparence devient alors un signe de caractère, et le prix cesse d'être le sujet." } },
      { key: "verdict", body: { fr: "Maison Standards a trouvé un geste que ses concurrents ne peuvent pas reprendre et l'a mis au service de la mauvaise conversation. Un chiffre de coût de revient répond à une objection ; il ne crée pas de préférence. Tant que la transparence servira à défendre le prix plutôt qu'à démontrer une exigence, elle attirera des acheteurs comparateurs plutôt que des clients fidèles." } },
    ],
  },
  {
    slug: "asphalte",
    date: "2026-07-04",
    brand: "Asphalte",
    sector: { fr: "Mode / précommande" },
    minutes: 9,
    motif: "nested",
    theme: "word-trap",
    blocks: [
      { key: "context", body: { fr: "Asphalte conçoit ses vêtements à partir de questionnaires adressés à sa communauté et les produit en précommande, en série limitée par la demande réelle." } },
      { key: "signal", body: { fr: "La méthode est le produit. La maison ne vend pas seulement des vêtements, elle vend une façon de les faire : on demande, on produit ce qui est demandé, on ne stocke pas. Ce processus visible est plus distinctif que n'importe quelle coupe, et il justifie à la fois l'attente et le prix." } },
      { key: "noise", body: { fr: "L'attente est vécue comme un défaut par ceux qui découvrent la maison, et comme une vertu par ceux qui la connaissent. Le récit s'adresse aux seconds. Un nouveau visiteur voit d'abord une contrainte — payer maintenant, recevoir plus tard — sans avoir la clé qui la transforme en avantage." } },
      { key: "tension", body: { fr: "La précommande est un modèle industriel devenu argument de marque. Il fonctionne tant qu'il est compris ; il repousse dès qu'il ne l'est pas. Chaque nouveau client arrive par la contrainte et doit être converti à la méthode avant d'acheter — ce qui rend l'acquisition structurellement plus lente." } },
      { key: "heading", body: { fr: "Faire porter l'entrée par le résultat plutôt que par le procédé. Ce que la méthode produit — une pièce conçue avec ceux qui la porteront, sans invendu et sans compromis de série — avant d'expliquer comment elle est produite. La méthode reste, mais elle devient la preuve et non le seuil." } },
      { key: "verdict", body: { fr: "Asphalte a fait de sa contrainte industrielle une position, ce qui est le mouvement le plus intelligent que puisse faire une petite maison. Le prix de cette réussite est que sa porte d'entrée demande un effort de compréhension. Une position qu'il faut expliquer avant d'être désirée limite mécaniquement le nombre de gens qui la franchissent." } },
    ],
  },
  {
    slug: "cabaia",
    date: "2026-07-03",
    brand: "Cabaïa",
    sector: { fr: "Accessoires" },
    minutes: 7,
    motif: "nested",
    theme: "price-cap",
    blocks: [
      { key: "context", body: { fr: "Cabaïa s'est fait connaître avec des accessoires modulables — bonnets à pompons interchangeables, sacs à façades amovibles — et un ton résolument coloré." } },
      { key: "signal", body: { fr: "La modularité comme geste. L'objet qui se transforme donne une raison de revenir qui n'est ni le prix ni la nouveauté de saison : on rachète un élément, pas un produit entier. C'est un mécanisme de fidélité inscrit dans le produit lui-même." } },
      { key: "noise", body: { fr: "La modularité est présentée comme un amusement plutôt que comme une valeur. Le vocabulaire — coloré, ludique, joyeux — range la maison au rayon des cadeaux sympathiques, alors que le principe sous-jacent est sérieux : un objet qu'on ne remplace pas entièrement dure plus longtemps." } },
      { key: "tension", body: { fr: "Le mécanisme produit de la durabilité, et le ton produit de l'impulsion. Une maison dont le principe est de faire durer et dont le langage invite à collectionner tient deux récits qui se contredisent au moment de l'achat." } },
      { key: "heading", body: { fr: "Nommer la modularité pour ce qu'elle est : un refus du remplacement complet. Le ton peut rester joyeux, mais la raison doit devenir explicite — on change une façade parce qu'on ne veut pas jeter un sac. La maison passe alors du gadget à la position, sans changer un seul produit." } },
      { key: "verdict", body: { fr: "Cabaïa a inventé un mécanisme dont la valeur dépasse largement l'usage qu'elle en fait dans son récit. Présenté comme un jeu, il plafonne le prix et attire un achat impulsif ; présenté comme un refus du jetable, il ouvre un territoire que ses concurrents ne peuvent pas occuper sans revoir leur fabrication. Le produit est déjà au bon endroit, le vocabulaire non." } },
    ],
  },
  {
    slug: "jimmy-fairly",
    date: "2026-07-02",
    brand: "Jimmy Fairly",
    sector: { fr: "Optique" },
    minutes: 8,
    motif: "signal",
    theme: "word-trap",
    blocks: [
      { key: "context", body: { fr: "Jimmy Fairly a bousculé l'optique française avec un prix unique lisible, un design assumé et un engagement de don pour chaque paire vendue." } },
      { key: "signal", body: { fr: "La lisibilité. Dans un secteur où le prix final dépend de tant de variables que le client renonce à comprendre, annoncer un prix clair est une position — et elle est défendable, car les acteurs historiques ne peuvent pas s'y aligner sans démonter leur modèle." } },
      { key: "noise", body: { fr: "Trois arguments se disputent la première place : le prix, le style, le don. Chacun est valable, mais leur coexistence brouille la raison principale d'entrer. Un acheteur qui vient pour le style ne comprend pas pourquoi on lui parle de don ; un acheteur qui vient pour le prix se demande ce que le style lui coûte." } },
      { key: "tension", body: { fr: "Le prix clair attire un acheteur rationnel. Le style attire un acheteur d'apparence. Le don attire un acheteur de valeurs. Les trois existent, mais une phrase d'accueil ne peut en porter qu'un — les deux autres deviennent des preuves de soutien, pas des arguments d'entrée." } },
      { key: "heading", body: { fr: "Hiérarchiser explicitement. Le style comme porte, le prix comme soulagement, le don comme confirmation — ou toute autre hiérarchie assumée, à condition qu'elle soit tenue partout, en magasin comme en ligne. Le contenu ne change pas ; l'ordre décide de la perception." } },
      { key: "verdict", body: { fr: "Jimmy Fairly a trois bons arguments et pas de premier. C'est une situation confortable commercialement et fragile stratégiquement : trois raisons d'entrer signifient qu'aucune n'appartient à la maison. Le jour où un concurrent occupe l'une des trois avec netteté, la maison découvrira qu'elle en partageait déjà les trois." } },
    ],
  },
  {
    slug: "horace",
    date: "2026-07-01",
    brand: "Horace",
    sector: { fr: "Soin masculin" },
    minutes: 8,
    motif: "word",
    theme: "word-trap",
    blocks: [
      { key: "context", body: { fr: "Horace s'adresse aux hommes avec une gamme de soins et une esthétique sobre, à distance du registre viril traditionnel de la catégorie." } },
      { key: "signal", body: { fr: "Le refus du cliché. La maison a compris que le vocabulaire masculin du soin — performance, énergie, combat — n'était plus crédible, et a choisi la simplicité et le calme. Ce refus l'a rendue reconnaissable dans un rayon où tout se ressemble." } },
      { key: "noise", body: { fr: "La cible est définie par le genre, la promesse par la simplicité. Or la simplicité n'a pas de genre — et à mesure que le soin masculin se banalise, être « pour les hommes » cesse d'être une position pour redevenir un rayon. La maison risque de se retrouver définie par un segment démographique plutôt que par une conviction." } },
      { key: "tension", body: { fr: "Se définir par sa cible est efficace au lancement et fragile à long terme : le jour où toute la catégorie s'adresse aux hommes, il ne reste rien de propre. Se définir par une conviction — la routine minimale, le refus de la promesse spectaculaire — survit à la banalisation du segment." } },
      { key: "heading", body: { fr: "Déplacer la définition de la cible vers la doctrine. Non plus « le soin pour les hommes », mais une position sur la juste quantité de soin, qui reste vraie même quand tout le monde s'adresse au même public. Le masculin devient alors un point de départ, pas la définition." } },
      { key: "verdict", body: { fr: "Horace a gagné son entrée grâce à un refus juste et se définit encore par un segment que le marché entier occupe désormais. Une marque qui se décrit par la démographie de ses clients emprunte sa position au marché ; le jour où le marché change, elle n'a rien à elle. La conviction est déjà là, dans les produits — elle n'est pas encore dans la phrase." } },
    ],
  },
  {
    slug: "yuka",
    date: "2026-06-30",
    brand: "Yuka",
    sector: { fr: "Application / nutrition" },
    minutes: 9,
    motif: "refusal",
    theme: "unwritten",
    blocks: [
      { key: "context", body: { fr: "Yuka scanne les produits alimentaires et cosmétiques et rend un score immédiat. L'application est devenue, pour beaucoup, un geste réflexe en rayon." } },
      { key: "signal", body: { fr: "Le verdict. Là où toute l'information nutritionnelle existait déjà mais restait illisible, Yuka a livré une couleur et un chiffre. Trancher est la position : la maison ne présente pas des données, elle décide à la place de l'utilisateur. C'est ce qui explique l'adoption, et c'est ce que personne n'ose imiter avec la même netteté." } },
      { key: "noise", body: { fr: "L'autorité et le modèle économique ne se rencontrent jamais dans le récit. Une application qui note des produits doit expliquer d'où vient sa légitimité et comment elle vit — sans quoi la question sera posée par d'autres, dans un moment choisi par eux. Le silence sur ce point n'est pas neutre : il laisse le terrain libre à la contestation." } },
      { key: "tension", body: { fr: "Rendre un verdict crée une autorité. Une autorité est jugée sur sa méthode et son indépendance, pas sur son utilité. Plus l'usage grandit, plus la maison est traitée comme un régulateur de fait — et un régulateur qui n'a pas publié sa doctrine devient une cible." } },
      { key: "heading", body: { fr: "Publier la doctrine avant d'y être contraint. Non pas une page d'explication technique, mais un texte de position : ce que la maison considère comme un bon produit, pourquoi, et ce qu'elle refuse de faire entrer dans son calcul. Le score devient alors l'application d'une conviction assumée, et non un chiffre tombé du ciel." } },
      { key: "verdict", body: { fr: "Yuka a conquis le geste et laissé sa légitimité implicite. C'est l'exposition la plus dangereuse qu'une maison d'autorité puisse porter : tant que la méthode n'est pas un texte défendable, chaque contestation d'un industriel est un procès où la défense s'improvise. L'application est solide ; c'est la doctrine qui n'est pas écrite." } },
    ],
  },
  {
    slug: "nickel",
    date: "2026-06-29",
    brand: "Nickel",
    sector: { fr: "Compte bancaire / distribution buraliste" },
    minutes: 8,
    motif: "split",
    theme: "word-trap",
    blocks: [
      { key: "context", body: { fr: "Nickel propose un compte accessible sans condition de revenu ni découvert, ouvert chez les buralistes. Le geste fondateur est un déplacement de canal autant que d'offre." } },
      { key: "signal", body: { fr: "Le lieu. Ouvrir un compte chez le buraliste est une idée qui contient toute la position : la banque va là où les gens sont, pas là où la banque est. C'est un positionnement inscrit dans la géographie, donc difficile à copier — un concurrent devrait bâtir le même réseau physique." } },
      { key: "noise", body: { fr: "Le récit hésite entre l'inclusion et la modernité. L'inclusion parle à ceux que le système bancaire écarte ; la modernité parle à ceux qui trouvent leur banque lente. Ce ne sont pas les mêmes personnes, et le second discours dévalorise implicitement le premier public." } },
      { key: "tension", body: { fr: "Être le compte de ceux qu'on refuse ailleurs est une position forte et stigmatisante. Être le compte simple et rapide est une position confortable et disputée. La maison ne peut pas gagner la seconde sans effacer la première, qui est pourtant celle qui l'a rendue nécessaire." } },
      { key: "heading", body: { fr: "Assumer l'inclusion en la retournant en fierté plutôt qu'en compensation. Non pas « le compte pour ceux qui n'y ont pas droit », mais « le compte sans conditions » — la même réalité, formulée comme un principe et non comme un rattrapage. La modernité redevient alors une conséquence, pas un argument concurrent." } },
      { key: "verdict", body: { fr: "Nickel a l'un des positionnements les plus concrets du secteur bancaire — un lieu — et le raconte de moins en moins. À mesure que le discours se rapproche de celui des banques en ligne, l'avantage géographique devient un détail logistique au lieu d'être la position. Ce que la maison a de plus difficile à copier est ce qu'elle met le moins en avant." } },
    ],
  },
  {
    slug: "blissim",
    date: "2026-06-28",
    brand: "Blissim",
    sector: { fr: "Beauté / abonnement" },
    minutes: 8,
    motif: "two",
    theme: "two-clients",
    blocks: [
      { key: "context", body: { fr: "Née comme box de découverte beauté, la maison a évolué vers une offre plus large mêlant abonnement et vente en ligne." } },
      { key: "signal", body: { fr: "La découverte organisée. Recevoir une sélection que l'on n'a pas choisie est une proposition claire : déléguer le choix dans une catégorie où l'abondance paralyse. C'est un service, pas un catalogue, et c'est ce qui a fait la différence." } },
      { key: "noise", body: { fr: "L'ajout d'une boutique en ligne à côté de l'abonnement affaiblit le principe même de l'abonnement. Si l'on peut acheter ce que l'on veut quand on le veut, la box cesse d'être une manière de découvrir pour devenir un échantillonnage. La maison propose simultanément de déléguer le choix et de le reprendre." } },
      { key: "tension", body: { fr: "L'abonnement vend le renoncement au choix ; la boutique vend le choix. Les deux ne se contredisent pas commercialement — mais narrativement, la seconde retire à la première sa raison d'être. Le client qui découvre la boutique n'a plus besoin d'un guide." } },
      { key: "heading", body: { fr: "Faire de la boutique la suite de la box plutôt que son alternative — on n'y achète que ce que l'on a découvert, en taille réelle, avec l'historique de ses essais. La délégation du choix reste le cœur, et la boutique devient la preuve que la découverte a fonctionné." } },
      { key: "verdict", body: { fr: "Blissim a construit une position sur le renoncement au choix et vend désormais aussi le choix. Chacune des deux offres est légitime ; ensemble, elles racontent deux relations différentes au même client. Une maison qui propose à la fois de choisir pour vous et de vous laisser choisir n'est plus un guide, elle est un magasin de plus." } },
    ],
  },
  {
    slug: "la-fourche",
    date: "2026-06-27",
    brand: "La Fourche",
    sector: { fr: "Alimentation bio en ligne" },
    minutes: 8,
    motif: "ceiling",
    theme: "price-cap",
    blocks: [
      { key: "context", body: { fr: "La Fourche vend des produits biologiques en ligne sur un modèle d'adhésion annuelle, avec des prix réduits en contrepartie." } },
      { key: "signal", body: { fr: "L'adhésion. Payer pour avoir le droit d'acheter moins cher est un engagement mutuel : le client s'engage sur la durée, la maison s'engage sur le prix. Ce contrat est plus fort qu'une promotion — il crée une relation, pas une transaction, et il filtre naturellement la clientèle." } },
      { key: "noise", body: { fr: "Deux raisons d'acheter se disputent la première place : le prix et la conviction écologique. Le prix attire un acheteur qui compare ; la conviction attire un acheteur qui adhère. Une maison qui met le prix en avant chez un public de conviction se rend vulnérable au premier concurrent moins cher." } },
      { key: "tension", body: { fr: "Le bio est un achat de valeurs, l'adhésion est un calcul économique. Les tenir ensemble fonctionne tant que le calcul est favorable ; il suffit que l'écart de prix se resserre pour que l'argument principal disparaisse et que la conviction, restée au second plan, ne suffise pas à retenir." } },
      { key: "heading", body: { fr: "Faire de l'adhésion un engagement de filière plutôt qu'une remise. Ce que la cotisation finance — les producteurs, les volumes garantis, l'absence d'intermédiaire — plutôt que ce qu'elle fait économiser. Le prix bas devient alors la conséquence visible d'un choix de modèle, et non l'argument qui l'expose." } },
      { key: "verdict", body: { fr: "La Fourche a inventé un contrat plus intéressant que son argumentaire. L'adhésion pourrait porter une position rare — un club qui finance une filière — et sert aujourd'hui surtout à justifier un prix. Une maison de conviction qui se bat sur le prix accepte un terrain où elle finira par perdre contre plus gros qu'elle." } },
    ],
  },
  {
    slug: "bergamotte",
    date: "2026-06-26",
    brand: "Bergamotte",
    sector: { fr: "Fleurs / livraison" },
    minutes: 7,
    motif: "word",
    theme: "word-trap",
    blocks: [
      { key: "context", body: { fr: "Bergamotte vend et livre des fleurs et des plantes, avec une esthétique soignée et une promesse de fraîcheur liée à un circuit court." } },
      { key: "signal", body: { fr: "Le geste offert. La maison a compris que l'achat de fleurs est presque toujours un cadeau, et a construit toute l'expérience autour de l'émotion du destinataire plutôt que du confort de l'acheteur. C'est un déplacement juste : le produit n'est pas la fleur, c'est le moment." } },
      { key: "noise", body: { fr: "La logistique occupe une place démesurée dans le discours. Livraison, délais, fraîcheur, créneaux : ce vocabulaire rassure mais range la maison au rayon des services de livraison, où la comparaison se fait sur la vitesse et le prix. Un fleuriste ne se compare pas sur le délai." } },
      { key: "tension", body: { fr: "L'émotion est le produit, la logistique est la preuve. Quand la preuve prend le dessus, la maison se retrouve jugée sur des critères où un pure player logistique sera toujours meilleur. Le récit émotionnel attire, le récit logistique déclasse." } },
      { key: "heading", body: { fr: "Ramener la logistique au rang de garantie discrète et laisser l'émotion tenir la première page — ce qui arrive quand la personne ouvre la boîte, pas ce qui se passe pendant le transport. La fraîcheur devient une promesse de beauté à l'arrivée plutôt qu'une performance de chaîne du froid." } },
      { key: "verdict", body: { fr: "Bergamotte vend un moment et communique une chaîne logistique. Les deux sont vrais, mais l'ordre choisi décide de la catégorie : un service de livraison se négocie, un faiseur de moments ne se négocie pas. La maison a la matière du second et le vocabulaire du premier." } },
    ],
  },
  {
    slug: "michel-et-augustin",
    date: "2026-06-25",
    brand: "Michel et Augustin",
    sector: { fr: "Agroalimentaire" },
    minutes: 8,
    motif: "dissolve",
    theme: "price-cap",
    blocks: [
      { key: "context", body: { fr: "Marque construite sur un ton irrévérencieux, un storytelling de fondateurs et une présence en grande distribution obtenue par des coups d'éclat plutôt que par des budgets média." } },
      { key: "signal", body: { fr: "La preuve par le culot. Traverser l'Atlantique pour convaincre un acheteur, transformer chaque emballage en conversation : la maison a démontré qu'une petite structure pouvait exister en linéaire par l'audace narrative. Ce récit fondateur reste l'un des mieux racontés de l'agroalimentaire français." } },
      { key: "noise", body: { fr: "Le ton fondateur appartient à un moment. L'irrévérence était neuve quand tout le secteur était solennel ; elle est devenue une convention du rayon, reprise par des dizaines de marques. Ce qui distinguait signale désormais l'appartenance à une génération de marques, pas à une maison." } },
      { key: "tension", body: { fr: "Une identité bâtie sur un ton doit renouveler le ton ou changer de fondement. Continuer le même registre après que le marché l'a absorbé revient à devenir la version historique d'un style que d'autres pratiquent avec plus de fraîcheur." } },
      { key: "heading", body: { fr: "Faire porter la position par ce que la maison fabrique plutôt que par la façon dont elle en parle — la recette, l'exigence, un refus précis — et laisser le ton devenir une manière, non une raison. Ou renouveler radicalement le registre, ce qui est plus risqué mais rend la maison de nouveau imprévisible." } },
      { key: "verdict", body: { fr: "Michel et Augustin a été copiée par son propre succès. Le ton qui était une position est devenu un genre, et une maison qui occupe un genre est comparable à toutes celles qui l'occupent aussi. La sortie n'est pas de parler plus fort, elle est de faire reposer la différence sur autre chose que la voix." } },
    ],
  },
  {
    slug: "merci-handy",
    date: "2026-06-24",
    brand: "Merci Handy",
    sector: { fr: "Cosmétique / accessoire" },
    minutes: 7,
    motif: "ceiling",
    theme: "price-cap",
    blocks: [
      { key: "context", body: { fr: "Merci Handy s'est imposée avec des produits d'hygiène colorés, parfumés et bon marché, dans un univers graphique très reconnaissable." } },
      { key: "signal", body: { fr: "La joie comme territoire. La maison a transformé un produit fonctionnel en objet de plaisir immédiat, avec une cohérence visuelle totale. Cette identité est instantanément identifiable, ce qui est rare pour un produit de cette taille et de ce prix." } },
      { key: "noise", body: { fr: "L'univers enfantin et l'ambition cosmétique se contredisent. Un vocabulaire de bonbons et d'arc-en-ciel rend impossible toute montée en gamme : le même code qui fait le succès en petit format interdit d'exister au-delà d'un certain prix." } },
      { key: "tension", body: { fr: "La maison a construit une position parfaite pour son produit d'entrée et une prison pour tout le reste. Chaque extension vers un soin plus sérieux se heurte à une identité qui promet l'amusement, pas l'efficacité." } },
      { key: "heading", body: { fr: "Accepter la position et l'exploiter à fond — devenir la référence absolue du plaisir d'hygiène quotidien, sans tenter la montée en gamme — ou créer une seconde identité pour ce qui doit être pris au sérieux. Les deux sont viables ; ce qui ne l'est pas, c'est demander au même univers de porter les deux niveaux." } },
      { key: "verdict", body: { fr: "Merci Handy a réussi une identité si forte qu'elle est devenue une limite. Ce n'est pas un défaut, c'est le prix des positions très marquées : elles gagnent vite et enferment durablement. La question n'est pas de corriger l'identité, elle est de décider si la maison veut grandir en profondeur ou en largeur — car elle ne pourra pas faire les deux sous ce nom." } },
    ],
  },
  {
    slug: "aigle",
    date: "2026-06-23",
    brand: "Aigle",
    sector: { fr: "Vêtement / héritage" },
    minutes: 9,
    motif: "drift",
    theme: "outgrown",
    blocks: [
      { key: "context", body: { fr: "Maison ancienne, née de la botte en caoutchouc, devenue au fil du temps une marque de vêtement d'extérieur avec une part croissante de mode urbaine." } },
      { key: "signal", body: { fr: "L'objet d'origine. La botte est un actif de mémoire que peu de maisons possèdent : un produit unique, ancien, immédiatement associé au nom. C'est un point d'ancrage que ni le temps ni la concurrence n'effacent." } },
      { key: "noise", body: { fr: "Le vestiaire s'est élargi plus vite que le récit. Une maison identifiée à un objet fonctionnel vend désormais des pièces de mode qui n'ont pas de lien évident avec cet objet. L'acheteur urbain ne sait pas pourquoi il achèterait un manteau chez un fabricant de bottes, et l'acheteur d'origine ne se reconnaît plus dans le rayon." } },
      { key: "tension", body: { fr: "L'héritage donne la légitimité et fixe la catégorie. S'en éloigner ouvre le marché et dissout la raison d'y croire. Une maison patrimoniale qui devient généraliste échange une position rare contre une place disputée." } },
      { key: "heading", body: { fr: "Faire de l'héritage une exigence plutôt qu'un souvenir — définir ce qu'être né de la botte impose à un manteau, à une veste, à une chaussure, en termes de tenue, d'étanchéité, de durée. L'élargissement devient alors la démonstration d'un standard, et non l'abandon d'un métier." } },
      { key: "verdict", body: { fr: "Aigle possède ce que l'on ne peut pas fabriquer — une origine — et l'utilise comme décor plutôt que comme contrainte. Un héritage qui ne discipline pas les produits d'aujourd'hui n'est qu'une date sur une étiquette. Tant que la botte reste un souvenir et non une exigence, chaque nouvelle pièce éloigne un peu plus la maison de la seule chose que personne ne peut lui prendre." } },
    ],
  },
  {
    slug: "bonnegueule",
    date: "2026-06-22",
    brand: "BonneGueule",
    sector: { fr: "Média / marque de mode" },
    minutes: 9,
    motif: "refusal",
    theme: "unwritten",
    blocks: [
      { key: "context", body: { fr: "Né comme média de conseil vestimentaire masculin, BonneGueule a développé sa propre marque de vêtements tout en continuant à publier des contenus éditoriaux sur le secteur." } },
      { key: "signal", body: { fr: "La pédagogie. La maison a construit son autorité en expliquant — matières, coupes, fabrication — à un public qui n'avait pas de repères. Ce capital de confiance est considérable et rarement égalé : les lecteurs sont venus apprendre avant d'acheter." } },
      { key: "noise", body: { fr: "Le média qui conseille et la marque qui vend cohabitent sous un même nom. Chaque recommandation devient discutable, chaque comparatif suspect, non parce que la maison serait malhonnête, mais parce que la structure elle-même crée le doute. L'autorité éditoriale et l'intérêt commercial ne peuvent pas partager une signature sans coût." } },
      { key: "tension", body: { fr: "Un média tire sa valeur de son indépendance ; une marque tire la sienne de sa préférence. Le même nom ne peut pas promettre les deux. Plus la marque grandit, plus le média devient une vitrine, et plus l'autorité qui a permis la marque s'affaiblit." } },
      { key: "heading", body: { fr: "Séparer clairement les signatures — un nom pour le conseil, un autre pour le vêtement, avec un lien assumé mais des voix distinctes. Ou renoncer explicitement à la posture de conseil neutre et assumer un média de maison, ce qui est honnête et réduit la portée." } },
      { key: "verdict", body: { fr: "BonneGueule a fait la démonstration qu'un média pouvait devenir une marque, et hérite du conflit que cela crée. Le problème n'est pas éthique, il est structurel : l'autorité éditoriale est un capital qui se dépense chaque fois qu'elle sert une vente. Sans séparation lisible, la maison finance sa marque avec la confiance qu'elle a mis dix ans à construire." } },
    ],
  },
  {
    slug: "feed",
    date: "2026-06-21",
    brand: "Feed",
    sector: { fr: "Nutrition" },
    minutes: 8,
    motif: "word",
    theme: "word-trap",
    blocks: [
      { key: "context", body: { fr: "Feed propose des repas complets sous forme de boissons, barres et plats prêts, avec une promesse de repas rapide et équilibré." } },
      { key: "signal", body: { fr: "La franchise fonctionnelle. La maison n'a pas prétendu remplacer le plaisir de manger : elle a nommé un moment précis — le repas qu'on n'a pas le temps de faire — et proposé une réponse assumée. Nommer un moment plutôt qu'un besoin général est une bonne décision de position." } },
      { key: "noise", body: { fr: "Le vocabulaire nutritionnel et le vocabulaire alimentaire se disputent le récit. Parler de nutriments, de complétude et d'apports place la maison dans une catégorie technique où l'appétit disparaît ; parler de repas et de goût la ramène dans un marché alimentaire où elle est jugée sur le plaisir, terrain où elle ne peut pas gagner." } },
      { key: "tension", body: { fr: "Un substitut de repas est acheté pour éviter un problème, pas pour vivre une expérience. Le récit qui insiste sur la qualité gustative demande d'être comparé à de la nourriture ; le récit qui insiste sur la nutrition demande d'être comparé à un complément. Les deux comparaisons sont défavorables." } },
      { key: "heading", body: { fr: "Assumer entièrement le terrain du temps plutôt que celui du goût ou de la nutrition — non pas « un repas complet », mais « le repas que vous n'auriez pas pris ». La comparaison devient alors avec l'absence de repas, et non avec un déjeuner. C'est le seul terrain où la maison gagne à tous les coups." } },
      { key: "verdict", body: { fr: "Feed s'est donné deux adversaires impossibles : la cuisine et les compléments. Sa position réelle n'est ni l'un ni l'autre — elle est ce qui remplace le fait de sauter un repas. Tant que le récit cherchera à convaincre qu'il s'agit d'un bon repas, il invitera une comparaison perdue d'avance, alors que la seule qui compte est déjà gagnée." } },
    ],
  },
]

/** Aujourd'hui, en date locale, pour comparer aux dates de parution. */
function today(): string {
  return new Date().toISOString().slice(0, 10)
}

/** Les fiches déjà parues, de la plus récente à la plus ancienne. */
export function publishedReads(): BrandRead[] {
  const now = today()
  return READS.filter((r) => r.date <= now).sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getRead(slug: string): BrandRead | undefined {
  const r = READS.find((x) => x.slug === slug)
  return r && r.date <= today() ? r : undefined
}

export function readsByTheme(theme: Theme): BrandRead[] {
  return publishedReads().filter((r) => r.theme === theme)
}
