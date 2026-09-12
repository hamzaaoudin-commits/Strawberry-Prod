# Strawberry — le surlignage revient au noir sur rouge

2 fichiers. Corrige uniquement la couleur du texte et du fond.

## Ce que j'avais mal fait

Vous disiez que le rouge était trop clair. J'ai assombri le fond **et**
passé le texte en blanc, alors que vous ne demandiez que la première
chose. Or le noir sur rouge, c'est exactement ce que vous trouviez beau
dans l'effet de sélection — c'est ce qu'il fallait garder.

## Le réglage

Le texte revient en **encre**, comme au départ. Le fond passe à
**`#d4121f`** — entre les deux valeurs précédentes.

Il ne pouvait pas descendre plus bas : `#a80f1e` était assez sombre pour
que du noir par-dessus devienne illisible, ce qui est précisément pourquoi
j'avais basculé en blanc au lieu de remettre en cause le fond. `#d4121f`
est le point où le rouge cesse d'éblouir en aplat tout en gardant du noir
lisible.

Le dégradé suit la même logique : `#d4121f` → `#ff2233`, texte en encre.

`::selection` reste aligné dessus, pour que l'effet posé dans la page et
celui du glissement de souris soient identiques.

## Vérification

Contrôle de types : zéro erreur. Plus aucune trace de texte clair sur le
surlignage, dans les deux feuilles de style.
