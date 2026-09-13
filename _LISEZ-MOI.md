# Strawberry — le dernier vide entre le hero et la tournée

2 fichiers.

## Ce qui restait

Deux marges se cumulaient de part et d'autre de la frontière, et comme
elles vivent dans deux composants différents, on ne les voyait jamais
ensemble :

- le bas du hero : 8 unités, soit 32 pixels
- le haut de la tournée : 10 unités, soit 40 pixels

Plus l'espace que le hero laissait encore sous son contenu, à 68vh.

## Le réglage

| | Avant | Après |
|---|---|---|
| Hauteur du hero | `68vh` | **`62vh`** |
| Marge basse du hero | `pb-8` | **`pb-0`** |
| Marge haute de la tournée | `pt-10` | **`pt-2`** |

Le surtitre remonte d'environ 140 pixels de plus, après les 660 du patch
précédent.

## Pourquoi ça a pris trois passes

J'ai corrigé une marge à la fois sans regarder les autres. Le vide était
la somme de quatre valeurs réparties dans trois fichiers — le dégradé en
pourcentage, la marge de la tournée, la hauteur du hero, sa marge basse —
et chaque correction isolée n'en retirait qu'un quart. Il fallait les
additionner d'abord.

## Vérification

Contrôle de types : zéro erreur.
