# Strawberry — une vraie signature de mouvement, pas le fondu générique

1 fichier.

## Ce que je reprends

Vous aviez raison : le fondu `.reveal` que je réutilisais est celui de
*toute* la page — chapitres, cartes, stats, tout. Rien ne distinguait
cette section, censée convaincre par l'exemple, du reste du défilement.

## Trois mouvements propres à cette section, séquencés

Les trois se déclenchent sur le même bascule que le fondu générique
(`.shown`, posé par le script déjà en place) — rien de nouveau à câbler,
seulement des règles plus riches accrochées au même signal.

**Un chiffre fantôme géant** — 01, 02, 03 — en contour seul, presque
invisible, derrière le nom de chaque maison. Il grossit et s'éclaircit
légèrement en entrant, un mouvement propre à lui, plus lent que le reste.

**Un trait qui se trace** sous le nom de la maison, de zéro à sa largeur
finale — pas une apparition, un geste.

**Le refus se dévoile plutôt qu'il n'apparaît.** La phrase en gras est
masquée par une languette qui se retire de gauche à droite sur un peu
plus d'une seconde — l'effet d'un rideau qu'on ouvre, pas d'un fondu.

**Le paragraphe arrive après**, avec son propre délai, une fois que le
refus a fini de se révéler — pour qu'on lise dans l'ordre voulu plutôt
que tout en même temps.

## Le mobile, vérifié avant livraison

Ces lignes utilisent des styles en ligne pour leur grille, qui priment
sur une règle de classe ordinaire — j'ai donc dû forcer la bascule en une
colonne sous 640px avec `!important`, sans quoi la colonne de 170 à
240 px se serait retrouvée écrasée à côté du texte sur un téléphone. Le
chiffre fantôme est retiré à cette largeur plutôt que redimensionné : il
ne ferait que passer sur le texte.

Et pour qui préfère moins d'animation : tout s'affiche directement, sans
transition, si le système le demande.

## Vérification

Contrôle de types : zéro erreur. Toutes les clés du gabarit confirmées
présentes dans le dictionnaire.
