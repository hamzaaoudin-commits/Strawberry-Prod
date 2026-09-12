# Strawberry — la tournée sort des pages de terrain

5 fichiers.

## Ce qui change

La section « La tournée » — son intro et le bloc épinglé de 460vh — est
retirée des **quatre** pages de terrain. Elle ne vit plus que sur la home.

Vous aviez raison sur le fond : c'est le dispositif le plus
reconnaissable du site. Le voir deux fois en deux clics, avec la même
mécanique de défilement épinglé, le transformait en tic de mise en page
plutôt qu'en moment fort. Un effet de ce calibre ne supporte pas la
répétition.

Le retrait est fait en un seul endroit pour THE ROOM et dans le gabarit
partagé pour les trois autres — donc les quatre pages sont traitées, sans
risque d'en oublier une.

## Nettoyage qui allait avec

Les 38 clés de texte par page qui alimentaient la tournée (`tour.*`,
`work.*`) ne servaient plus à rien : plus aucun nœud ne les porte. Elles
sont retirées des trois pages qui les surchargeaient — 114 lignes de code
mort en moins, et surtout plus de piège pour le futur : personne n'ira
modifier un texte qui ne s'affiche nulle part.

## Ce que gardent les pages de terrain

Le canvas bokeh, le manifeste, les cinq blocs de l'audit, le comparateur
à glisser, les chiffres, le prix, la FAQ, le CTA. Elles restent denses ;
elles ne redisent simplement plus ce que la home vient de montrer.

## Vérification

Contrôle de types : zéro erreur. Vérifié qu'aucune trace de `tour-pin` ou
`tour-scene` ne subsiste dans les pages de terrain.
