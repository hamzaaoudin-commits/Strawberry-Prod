# Strawberry — la phrase descend, le bloc ne grandit pas

1 fichier. Remplace le patch précédent.

## Ce que j'avais mal fait

Vous demandiez de descendre la phrase. J'ai ajouté de la marge en haut,
ce qui la descend mais **allonge la section** d'autant — donc plus de
défilement pour arriver au bouton, et un vide en plus dans la page.

## Le réglage

L'espace est redistribué à hauteur constante. Le bloc faisait 24 unités
de marge, toutes en bas ; il en fait toujours 24, mais **14 au-dessus de
la phrase et 10 en dessous**.

La phrase descend donc dans la hauteur déjà occupée. La page ne s'allonge
pas d'un pixel.

## Vérification

Contrôle de types : zéro erreur.
