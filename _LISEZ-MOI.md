# Strawberry — le surlignage devient un élément de design

6 fichiers.

## L'effet

Deux classes, `surligne` (rouge plein) et `surligne-grad` (le dégradé),
qui reprennent exactement ce que fait `::selection` : fond rouge, texte en
encre. Définies dans `globals.css` **et** dans `nocta/styles.css`, parce
que les pages de terrain portent l'une et pas l'autre.

## Trois détails qui font la différence

**Le texte passe en encre, pas en blanc.** Sur ce rouge saturé, du blanc
tombe sous le seuil de lisibilité alors que le noir le dépasse largement.
C'est d'ailleurs ce que fait votre `::selection` — je n'ai fait que le
reprendre.

**`box-decoration-break: clone`.** Sans lui, un surlignage qui passe à la
ligne perd sa marge interne sur le second fragment : le fond se colle au
texte et l'effet se casse au milieu d'une phrase.

**Une marge négative compense la marge interne**, pour que le mot surligné
reste aligné avec le texte autour au lieu de décaler la ligne.

## Où je l'ai posé

- **Le titre de la tournée** — « Ce qu'on trouve quand un récit est
  écrit », en dégradé, comme sur votre capture.
- **Le surtitre « LE PROBLÈME »** sur la home, et **« LE CONSTAT »** sur
  les pages de terrain.
- **La première ligne de la triade** (« Rien à quoi appartenir »).
- **La première fausse cause** (« Un logo refait »), qui cumule le
  surlignage et la rature.

## Un choix que j'ai fait

Dans les deux listes, **seule la première ligne est surlignée**. Les trois
surlignées donneraient un bloc rouge, et l'effet disparaîtrait — c'est le
contraste avec les lignes suivantes qui le fait exister. La première donne
le ton, les autres n'ont plus besoin de l'appui.

Même logique pour le reste du site : l'effet tient parce qu'il est rare.
Si vous voulez l'étendre, dites-moi où précisément plutôt que de
généraliser.

## Vérification

Contrôle de types : zéro erreur.
