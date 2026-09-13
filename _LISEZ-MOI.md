# Strawberry — le fondu de la tournée, réglé

1 fichier.

## Les deux erreurs successives

**Première version** — l'opacité décroissait linéairement sur toute la
distance. À mi-chemin, les deux scènes étaient à 32 % : deux textes
superposés et illisibles.

**Deuxième version** — j'ai resserré, mais la scène sortante atteignait
zéro **avant** que l'entrante ne commence à monter. Résultat : un écran
presque noir sur une partie du défilement, ce que montrait votre capture.

Les deux fois, j'ai réglé une extrémité sans vérifier l'autre.

## Ce qui manquait

La règle à tenir est simple et je ne l'avais pas posée : **la somme des
opacités doit valoir 1 à tout instant.** En dessous, l'écran s'assombrit ;
au-dessus, les textes se superposent.

## Le réglage

Une fenêtre de fondu centrée sur le point de croisement et débordant de
part et d'autre :

| Position | Scène A | Scène B | Somme |
|---|---|---|---|
| Sur A | 1 | 0 | **1** |
| À 42 % | 1 | 0 | **1** |
| À mi-chemin | 0,5 | 0,5 | **1** |
| À 58 % | 0 | 1 | **1** |

Vérifié par le calcul sur toute la course : la somme vaut 1 partout.

Concrètement, une unité de distance vaut environ 150vh de défilement. Le
maintien à pleine opacité couvre donc plus de 120vh, et le croisement une
vingtaine — assez bref pour qu'on ne lise jamais deux textes, assez long
pour qu'on ne voie aucune coupure.

## Vérification

Contrôle de types : zéro erreur.
