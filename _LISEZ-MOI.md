# Strawberry — le constat occupe la page

2 fichiers, donc les quatre pages d'offres.

## Le choix

Entre vos deux options — recentrer en paragraphes plus horizontaux, ou
ajouter du visuel à côté — j'ai pris la première.

La seconde aurait demandé de dessiner une illustration par terrain, donc
quatre visuels à produire et à maintenir. Et sur cette section
précisément, une image se serait mise en concurrence avec le texte alors
que c'est lui l'argument.

## Ce qui change

**Les deux paragraphes passent côte à côte** dès 1100px de large. Le
surtitre « LE CONSTAT » reste seul au-dessus, sur toute la largeur.

Le bloc occupe donc la page au lieu de couler en colonne, et le constat
tient en deux fois moins de hauteur — c'est aussi moins fatigant à lire
qu'une phrase de dix lignes empilées.

**La mesure passe de 26 à 30 caractères**, et la taille de police monte
moins vite (`2.6vw` au lieu de `3.4vw`). Sur les écrans étroits, où les
colonnes restent superposées, le texte s'étale au lieu de s'allonger.

## Un piège technique

Le second paragraphe portait sa marge haute dans un attribut `style`. Un
style en ligne l'emporte sur toute règle de feuille : la grille aurait
donc laissé un décalage de 1,6 rem entre les deux colonnes, sans qu'on
comprenne pourquoi. La marge est déplacée dans la feuille, où la mise en
page peut la neutraliser.

## Vérification

Contrôle de types : zéro erreur.
