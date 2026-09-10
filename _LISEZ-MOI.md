# Strawberry — la tournée redevient fluide

1 fichier.

## Pourquoi c'était saccadé

J'avais réimplémenté la logique de défilement au lieu de reprendre celle
de `app.js`. La différence tient en une ligne :

**Ce que je faisais** : appeler `getBoundingClientRect()` à chaque image.
Cette fonction force le navigateur à **recalculer la mise en page de la
page entière** avant de répondre. Soixante fois par seconde, en plein
défilement, avec une section de 460vh — d'où les à-coups.

**Ce que fait `app.js`** : mesurer **une seule fois**, au chargement et au
redimensionnement, puis ne lire que `window.scrollY` — une valeur déjà
connue, qui ne coûte rien. La boucle n'écrit ensuite que des `transform`
et des `opacity`, deux propriétés que le navigateur applique sans
recalculer la page.

C'est exactement la technique de leur `updateGeo()` / `run()`, et c'est ce
qui sépare une animation fluide d'une animation qui accroche.

## Deux corrections en plus

**`will-change` posé avant la première image.** Sans ça, le tout premier
défilement paie la promotion des scènes en couche graphique et saccade
une fois, au pire moment — juste quand on découvre la section.

**Remesure quand les polices sont chargées.** Elles arrivent après le
premier rendu et changent la hauteur des titres géants, donc la hauteur
de la section. Sans remesure, le calcul de progression était faussé dès
le départ.

## Vérification

Contrôle de types : zéro erreur. Plus aucune lecture de mise en page dans
la boucle de défilement — vérifié, le seul appel restant est dans la
fonction de mesure.
