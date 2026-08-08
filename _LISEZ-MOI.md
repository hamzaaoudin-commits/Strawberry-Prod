# Strawberry — patch : vraie animation de page qui tourne

Un seul fichier — il remplace le composant livré précédemment
(`components/strawberry/document-flipbook.tsx`). Rien d'autre à toucher :
`brand-narrative-architecture/page.tsx` n'a pas changé, ce composant
garde exactement la même interface.

## Ce qui ne marchait pas

La version précédente ne faisait pivoter la page que de 14° avec un fondu
d'opacité — un tremblement, pas une page qui tourne. Rien ne simulait
réellement le geste.

## Ce qui change

La page pivote maintenant à 180° sur son bord gauche, comme une vraie
reliure : perspective 3D, disparition nette au passage de la moitié du
mouvement (on est censé voir son dos, donc elle s'efface), et une ombre qui
balaie la page pendant qu'elle tourne pour donner du relief. La page de
destination est déjà là, en dessous, révélée au fur et à mesure. 700ms,
easing progressif — assez lent pour se voir, assez rapide pour ne pas
traîner.

Techniquement : l'animation est déclenchée en deux temps (l'état de départ
est peint sans transition, puis la transition démarre au repaint suivant) —
c'est ce qui manquait pour que la transition CSS s'exécute réellement au
lieu de sauter directement au résultat final. Les boutons et points de
pagination sont désactivés pendant qu'une page tourne, pour ne pas
interrompre le mouvement en cours.

`prefers-reduced-motion` continue d'être respecté : la page change alors
sans rotation.

## Fichiers inclus

- `components/strawberry/document-flipbook.tsx`
