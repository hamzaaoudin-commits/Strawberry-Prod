# Strawberry — l'ambiance THE ROOM sur tout le site

Trois fichiers. Ce patch vient après celui des polices, qui était
insuffisant.

## Ce que j'avais raté

J'ai changé les polices et l'angle du dégradé, et j'ai appelé ça une
refonte. Ce n'en était pas une. Ce qui fait THE ROOM, ce ne sont pas ses
polices — ce sont ses **calques et ses animations**, et rien de tout ça
n'existait ailleurs sur le site.

## Ce qui est porté maintenant

**La lueur haute et le champ de couleur.** Deux dégradés radiaux fixes en
fond de page — rouge en haut, plus profond en bas à droite. C'est ce qui
donne sa profondeur au noir de THE ROOM, là où le fond de Strawberry
était un aplat.

**Le grain.** 3,5% d'opacité, invisible consciemment, mais c'est lui qui
empêche les grandes surfaces sombres de paraître plates. C'est un des
deux ou trois détails qui séparent un fond travaillé d'un fond noir.

**Les cartes** (`carte-room`) : coins à 18px, filet fin, et le halo rouge
qui monte au survol depuis le haut de la carte.

**Le champ d'ambiance** (`ambiance`) : la nappe de couleur à poser sur une
section qui doit respirer.

**Les révélations au scroll** — le CSS *et* le mécanisme. Une classe
`.reveal` seule ne fait rien : il faut l'observateur qui pose `.shown`.
C'est ce que fait `app.js` sur THE ROOM ; le composant
`RevealOnScroll` en est l'équivalent, monté une fois dans le layout, avec
les mêmes réglages (seuil 14%, marge basse 8%) et les trois décalages
`d1`/`d2`/`d3`.

La sélection de texte passe aussi au rouge de marque.

## Le canvas bokeh : volontairement pas porté

Il tourne en boucle sur une scène 3D. Le faire tourner sur chaque page du
site coûterait de la batterie sur mobile pour un effet qui n'est vraiment
lisible que sur un fond très sombre et peu chargé. Il reste sur
`/the-room`. Dites-moi si vous le voulez partout malgré ce coût.

## Comment vous en servir

Les calques de fond et la sélection s'appliquent **automatiquement**.
Les trois autres sont des classes à poser : `carte-room` sur une carte,
`ambiance` sur un fond de section, `reveal` (avec `d1`/`d2`/`d3`) sur ce
qui doit entrer au scroll.

Dites-moi sur quelles sections vous voulez que je les applique — je ne
l'ai pas fait d'office pour ne pas modifier vingt composants d'un coup
sans que vous ayez vu le rendu.

## Vérification

Contrôle de types : zéro erreur venant de ce code.
