# Strawberry — les deux colonnes du constat s'équilibrent

1 fichier.

## Le défaut

Avec une grille, chaque paragraphe occupait une cellule. Le premier fait
le double du second : la colonne de droite se vidait donc aux trois
quarts, et le bloc se terminait en escalier.

## Le correctif

**Colonnes typographiques** (`columns: 2`) au lieu d'une grille. Le texte
coule d'une colonne à l'autre et **le navigateur équilibre les hauteurs
lui-même** : les deux colonnes se terminent à la même ligne, quelle que
soit la longueur des paragraphes. Ça vaut aussi pour les trois autres
terrains, dont les textes n'ont pas les mêmes longueurs.

## Deux réglages qui vont avec

**Le surtitre passe en `display:block`.** `column-span: all` n'agit que
sur un élément de bloc, et « LE CONSTAT » est un `<span>`. Sans ça, la
propriété aurait été ignorée en silence et le surtitre serait tombé dans
la première colonne.

**`orphans: 2` et `widows: 2`.** Quand le texte se coupe entre deux
colonnes, ces règles interdisent de laisser une ligne seule en bas ou en
haut — c'est ce qui distingue une coupure propre d'une coupure qui se
remarque.

## Vérification

Feuille de style validée.
