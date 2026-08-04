# Strawberry — tour 16

2 fichiers. Glissez les dossiers `app` et `components`, pas leur contenu.

## Ce qui change

**Le flash de la home avant l'intro est corrigé.** L'animation était pilotée
par React et n'apparaissait qu'après l'hydratation de la page — assez tard
pour qu'on voie la home un instant avant qu'elle démarre. Le calque est
maintenant présent directement dans le HTML envoyé par le serveur, visible
dès la toute première image affichée par le navigateur, avant même que la
page ne devienne interactive. Vérifié : il est désormais le tout premier
élément du `<body>`, avant le contenu de la home.

**Durée réduite d'une seconde de plus.** L'écran reste dégagé environ 2,5
secondes maintenant (au lieu de 3,5).

Le reste ne change pas : une seule fois par onglet, un clic ou une touche la
passe immédiatement, les lettres apparaissent en cascade, et rien ne retarde
le chargement réel de la page en dessous.
