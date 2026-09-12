# Strawberry — juste le logo, cliquable

1 fichier. Remplace le patch précédent.

## Ce que j'ai retiré

La barre de navigation, le pied de page et le bouton « ← Accueil » que
j'avais ajoutés. C'était cassé et je n'aurais pas dû livrer sans le voir :
la barre débordait sur la droite en poussant « Commander l'audit » hors
de l'écran, et le bouton Accueil se superposait au hero.

La cause : ces pages ont leur propre grille, héritée du site NOCTA. La
barre du site suppose la mise en page de Strawberry — largeurs, marges,
points de rupture. Poser l'une sur l'autre ne pouvait pas tenir.

## Ce qu'il y a à la place

**STRAWBERRY PROD.**, seul, en haut à gauche, cliquable, qui ramène à
l'accueil dans la bonne langue.

Écrit dans la charte de la page — police Bricolage, rouge de marque — et
non avec les classes du site, pour la même raison que ci-dessus. Position
fixe au-dessus de tout le reste, y compris des bandes cinéma de la tournée.

## Ce que ça laisse

Ces pages n'ont toujours pas de menu. C'est acceptable : ce sont des pages
d'atterrissage, elles mènent vers l'audit par leurs deux boutons de hero
et par la carte de prix. Le logo suffit à revenir en arrière.

Si vous voulez un menu dessus, il faudra le dessiner dans la charte de ces
pages plutôt que d'y importer celui du site — c'est l'erreur que je viens
de faire.

## Vérification

Contrôle de types : zéro erreur.
