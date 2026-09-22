# Strawberry — trois vraies fautes, corrigées

3 fichiers. Vous aviez raison sur les trois points.

## 1. Le sens du curseur était inversé

Le calcul du `clip-path` révélait « Aujourd'hui » sur la partie gauche du
curseur, et laissait « Hier » visible à droite — l'inverse du sens de
lecture. J'ai interverti les deux couches (celle du dessous, toujours
pleine largeur, et celle du dessus, découpée) sans toucher à la formule de
découpe elle-même. Hier est maintenant à gauche, Aujourd'hui à droite,
comme il se doit.

## 2. Le design de la méthode n'était pas repris

J'avais remplacé les cinq icônes dessinées à la main — un tracé SVG par
lettre, S/T/R/A/W — par une simple lettre en gros caractères. Une
facilité, et vous aviez raison de vous en agacer.

**Je suis allé chercher les tracés originaux** dans l'historique du dépôt
et je les ai recopiés tels quels dans la nouvelle section.

**Ce que je n'ai délibérément pas fait :** charger la feuille de style
d'origine (`nocta/styles.css`) pour récupérer le reste de la mise en
page. Je l'ai vérifié avant d'agir : dix-huit classes sont communes entre
cette feuille et celle du site moderne, dont `.tour-scene`, `.tour-pin` et
`.ts-k` — exactement les classes de la tournée qui vit juste au-dessus
sur cette même page. La charger aurait cassé la tournée pour récupérer la
méthode. J'ai donc repris les icônes, la seule chose vraiment
distinctive, dans le système actuel du site plutôt que d'importer un
fichier qui aurait tout cassé ailleurs.

## 3. La tournée n'avait pas tout repris de votre capture

Votre capture montrait six départements — Marketing, Contenu, Réseaux,
Vente, Support, RH. La pièce 05 de la tournée en citait cinq, sous des
noms légèrement différents (vente, contenu, réseaux, support,
recrutement). Corrigé pour citer les six mêmes noms que ce qui est
actuellement affiché sur le site.

**Un point que je dois vous signaler**, plutôt que de trancher seul en
silence : ce chiffre de six vient de la partie « groupes de livrables »
de l'offre, que je vous ai signalée hier comme obsolète — construite pour
l'ancienne offre à quatorze pièces et plus. Le workflow Make réellement
utilisé aujourd'hui ne produit que trois documents de playbooks (vente et
prix, présence, recrutement et tenue), pas six. J'ai aligné la tournée sur
ce qui est visible aujourd'hui sur le site plutôt que d'inventer un
quatrième chiffre — mais les trois se contredisent, et un seul devrait
survivre. Dites-moi lequel.

## Vérification

Contrôle de types : zéro erreur.
