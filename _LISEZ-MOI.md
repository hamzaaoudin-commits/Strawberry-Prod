# Strawberry — la section statistiques rétablie

1 fichier. Correctif du patch précédent.

## Ce que j'ai cassé

Pour retirer le paragraphe de clôture, j'ai utilisé une expression
régulière sur le rendu. Elle a emporté **tout le bloc des deux
statistiques**, pas seulement le paragraphe visé. Il ne restait que le
surtitre « POURQUOI ÇA COMPTE » au-dessus d'un vide — exactement votre
capture.

Le contrôle de types n'y voyait rien : supprimer du JSX valide laisse du
JSX valide. C'est le genre d'erreur qu'une expression régulière trop large
produit en silence, et j'aurais dû relire le rendu après coup plutôt que
de me fier au fait que la compilation passait.

## Ce qui est rétabli

Les deux chiffres sont de retour, côte à côte au-delà du mobile, avec pour
chacun dans l'ordre :

- le chiffre en dégradé,
- ce qu'il mesure,
- **pourquoi il compte** — le texte réécrit au patch précédent,
- la source, séparée par un filet.

L'ordre est voulu : on peut s'arrêter après la deuxième ligne et avoir
compris. La source reste accessible pour qui veut vérifier, sans occuper
le premier plan.

Le paragraphe de clôture reste supprimé, comme demandé.

## Vérification

Contrôle de types : zéro erreur. Rendu relu ligne à ligne cette fois.
