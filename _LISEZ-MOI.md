# Strawberry — chaque paragraphe reste entier

1 fichier.

## Le défaut

Les colonnes typographiques équilibraient bien les hauteurs, mais au prix
d'une coupure en plein milieu de phrase : « les vôtres » ouvrait la
seconde colonne alors que c'est la fin de la première. Les deux
paragraphes n'en formaient plus qu'un seul, découpé au mauvais endroit.

C'est un mauvais compromis : un bloc parfaitement équilibré mais qu'on ne
peut pas lire.

## Le correctif

Retour à une grille — donc **chaque paragraphe reste entier dans sa
colonne** — mais avec des colonnes **proportionnées au texte** :
`1.5fr / 1fr`.

Le premier paragraphe porte à peu près deux fois plus de texte que le
second. En lui donnant une fois et demie la largeur, il tient sur moins de
lignes, et les deux colonnes se terminent à peu près à la même hauteur.
L'équilibre vient de la mise en page, pas d'un découpage du texte.

`align-items: start` garde les deux colonnes alignées par le haut, sans
étirement.

## Vérification

Feuille de style validée.
