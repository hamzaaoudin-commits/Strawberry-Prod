# Strawberry — les frontières entre sections se fondent

2 fichiers.

## Pourquoi ça piquait

Les sections alternent deux fonds très proches — `#0a0a0a` et `#0d0d0d` —
séparés par un filet blanc. À trois pour cent d'écart, l'œil ne voit pas
deux teintes : **il voit une ligne**. Et comme la page en enchaîne cinq ou
six, on a l'impression de traverser plusieurs maquettes collées bout à
bout, exactement ce que vous décrivez.

## Trois correctifs

**Les sections à fond alterné dégradent leurs bords.** Chaque section
`bg-ink-soft` fond ses 14 premiers et derniers pour cent vers la couleur
de sa voisine. La transition se fait sur une centaine de pixels au lieu
d'un seul, et la frontière disparaît — sans qu'aucune section ne perde son
fond. Une seule règle, donc toutes les sections du site sont traitées.

**Les filets s'estompent sur les côtés.** Là où un trait reste utile, il
part de transparent, tient sur la moitié centrale, et repart à
transparent. Il suggère la séparation au lieu de la trancher d'un bord à
l'autre de l'écran.

**Le bas du hero se fond.** C'était la frontière la plus visible : la
lueur rouge s'arrêtait net à la dernière ligne du hero. Un voile la
dissout sur 160 pixels.

## Ce que ça ne change pas

Les fonds restent différents, donc le rythme des sections est préservé —
on sent toujours qu'on change de section, mais en descendant une pente au
lieu de franchir une marche.

## Vérification

Contrôle de types : zéro erreur.
