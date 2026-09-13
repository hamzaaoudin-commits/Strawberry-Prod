# Strawberry — le vide avant « Un audit, quatre terrains »

2 fichiers.

## Deux causes, dont une que je venais de créer

**Mon dégradé était en pourcentage.** `14%` sur une section courte fait
60 pixels ; sur la tournée, qui mesure 460vh, ça fait **près de 700
pixels**. Le haut de la section était donc un long dégradé vide, qu'on lit
comme un espace mort avant le titre.

Corrigé : le fondu est en **pixels fixes (120px)**. Même douceur partout,
quelle que soit la hauteur de la section — et c'est valable pour toutes
les sections du site, dont certaines sont bien plus hautes que d'autres.

**La marge haute était de 24 unités**, soit 96 pixels, qui s'ajoutaient à
l'espace que le hero laisse déjà sous son bouton — le hero fait 82vh avec
son contenu centré, donc il y a naturellement du vide en dessous. Passée à
10 unités.

## Ce que ça donne

Le surtitre remonte d'environ 660 pixels au total. Le fondu entre les deux
sections reste, mais il redevient une transition au lieu d'être une zone.

## Vérification

Contrôle de types : zéro erreur.
