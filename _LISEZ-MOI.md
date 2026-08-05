# Strawberry — tour 21

3 fichiers, un seul glisser-déposer. Build validé.

Glissez les **dossiers** (`app`, `components`), jamais leur contenu.

## Ce qui est nouveau

**Le hero de la home a un vrai motif, pas des blobs génériques.** Les formes
qui se déformaient sans fin (un cliché de landing page très reconnaissable)
sont remplacées par un champ de points dispersés qui convergent vers un seul
point, à droite du texte — ça dit littéralement ce que fait le studio :
des fragments épars qui se rassemblent en une seule architecture. Masqué sur
mobile et sous mouvement réduit, comme l'élément qu'il remplace.

**Le registre des Maisons est passé de lignes de tableau à des plaques.**
Chaque maison a maintenant sa propre carte — numéro en tête, nom en grand,
secteur en dessous, disposées en grille plutôt qu'empilées en liste. Une
cohorte fermée mérite mieux qu'une ligne parmi d'autres.

**Tous les boutons du site ont un vrai geste au survol.** Avant : un simple
fondu à 92% d'opacité. Maintenant : le bouton se soulève légèrement et une
lueur rouge s'intensifie derrière lui, avec la même signature de mouvement
que le reste du site. Ce changement touche un seul fichier
(`app/globals.css`) mais s'applique à chaque bouton primaire et secondaire,
partout — home, offre, commande, tous les CTA.

Nettoyage au passage : les anciennes animations de blobs (`morphFloatA`,
`morphFloatB`) sont retirées du CSS puisqu'elles ne servent plus à rien.
