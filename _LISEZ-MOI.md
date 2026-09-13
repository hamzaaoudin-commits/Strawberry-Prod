# Strawberry — l'affichage sur téléphone

3 fichiers. Trois défauts trouvés, tous invisibles sur ordinateur.

## 1. La tournée coupait son texte — le plus grave

La scène épinglée tient dans **100vh avec `overflow:hidden`**. Sur un
téléphone, une scène contient le surtitre, un titre de 48 pixels, la
projection, l'intitulé et **cinq puces**. Ça dépasse largement la hauteur
d'écran, et tout ce qui dépasse était coupé — sans barre de défilement
pour aller le chercher.

C'est le contenu le plus travaillé de la page, et une partie n'était
simplement pas lisible sur mobile.

**L'épinglage est désactivé sous 900px.** Les scènes s'empilent et se
lisent à la suite, séparées par un filet. L'effet est perdu, mais il
l'était déjà : sur un écran haut et étroit, un fondu entre quatre plans
superposés se remarque à peine, alors qu'une page qui coupe son texte se
voit immédiatement.

## 2. « THE PRODUCT » sortait de l'écran

Le wordmark des pages d'offres était en `clamp(4.5rem, 18vw, 15rem)` —
donc **jamais moins de 72 pixels**. NOCTA tenait en cinq lettres ; THE
PRODUCT en fait onze. Le mot débordait par la droite, et comme 4,5rem
était un plancher, aucune largeur d'écran ne le ramenait.

Plancher abaissé à 2,6rem, et `overflow-wrap: anywhere` en dernier
recours. Sur un iPhone de 375 pixels, le titre passe de 72 à 56 pixels et
tient dans la largeur.

## 3. Les titres de scène débordaient aussi

Même cause, même correctif : `.ts-t` descend à 2rem sous 900px.

## Ce que j'ai vérifié et qui allait déjà

Les colonnes du constat (activées seulement au-delà de 1100px), les liens
croisés en pied de page (grille auto-adaptative), le logo fixe des pages
d'offres, et le bloc CTA de la home.

## Vérification

Contrôle de types : zéro erreur. Feuille de style validée.
