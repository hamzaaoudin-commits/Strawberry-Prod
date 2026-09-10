# Strawberry — « La tournée » épinglée, la vraie

3 fichiers. Remplace `terrains-section.tsx`, que vous pouvez supprimer.

## Ce que j'avais raté

J'ai livré trois cartes empilées en disant que je reprenais « La
tournée ». Ce n'en était pas. La vraie section de THE ROOM est
**épinglée** : elle mesure 460vh de haut, son contenu reste collé à
l'écran sur 100vh, et les scènes se relaient en fondu-zoom pendant que
vous défilez. Une jauge verticale à droite suit la progression.

C'est ce mécanisme qui fait tout l'effet. Des cartes empilées, c'est lire
trois blocs ; l'épinglage, c'est traverser trois scènes.

## Ce qui est porté

**Le CSS d'origine**, repris tel quel depuis `public/nocta/styles.css` :
`.tour-pin`, `.tour-sticky`, `.tour-scene`, les fonds radiaux par scène
(`.ts-1` à `.ts-4`), les titres géants en dégradé (`.ts-t`, jusqu'à
7,5rem), la liste en mono, la jauge.

**Le mécanisme de défilement**, repris de `app.js` : on calcule une
position continue entre 0 et n-1, chaque scène reçoit une opacité qui
décroît avec sa distance à cette position, plus un déplacement vertical
et un zoom. D'où le fondu croisé au lieu d'une bascule sèche.

**Le fond qui dérive à contre-sens** de sa scène (`.ts-bg`). C'est le
détail qu'on ne remarque jamais et dont l'absence rend l'effet plat.

## Les trois scènes

Marques & entreprises → **Le rayon**. Lieux → **La salle**. Artistes &
fondateurs → **Le nom**. Chacune avec sa phrase d'ambiance en italique et
ses quatre entrées : le symptôme, la racine, ce qu'on lit, ce qui change.
Le numéro en bas de scène est cliquable et mène à la page du terrain.

Fermée par « Tout ça existe déjà chez vous. Il faut juste l'écrire. »

## Le repli

Sous `prefers-reduced-motion`, la classe `tour-on` n'est pas posée :
les scènes s'empilent normalement et restent toutes lisibles. Rien ne
disparaît pour qui a demandé moins de mouvement.

## Vérification

Contrôle de types : zéro erreur.
