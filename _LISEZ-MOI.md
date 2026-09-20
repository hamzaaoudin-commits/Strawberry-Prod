# Strawberry — le questionnaire au niveau du site

3 fichiers.

## Le principe

C'est le premier écran après un paiement de 2 900 €. Un fond noir uni avec
des champs empilés fait rupture avec tout ce que le client vient de
parcourir — et il lui reste trente écrans à traverser.

## Le mouvement

**Chaque question entre en fondu montant**, 520 ms. Sans ça, passer d'un
écran à l'autre est un remplacement brutal : le texte change, rien ne
bouge, et trente écrans donnent la sensation d'un tableur.

**La navigation au clavier.** Entrée pour avancer, Cmd+Entrée depuis une
zone de texte. Sur trente écrans, tendre la main vers la souris à chaque
fois est le genre de frottement qui fait abandonner en cours de route.

## La progression

**Trente segments** au lieu d'une barre continue. Une barre qui avance de
trois pour cent ne dit rien ; des segments montrent le chemin parcouru et
surtout **combien il en reste** — la vraie question au quinzième écran.

## La lecture

**Le titre passe à la charte du site** : serif, capitales, crénage
desserré. Il était en `h-card`, une taille de carte, alors que c'est la
seule chose à lire de l'écran.

**Les options portent un repère de sélection** — carré pour le choix
multiple, rond pour le choix unique. La forme dit la règle avant même
qu'on ait lu la consigne. Et elles se soulèvent d'un pixel au survol.

**Les zones de texte affichent un compteur de mots**, rouge tant qu'on est
sous vingt-cinq. Il ne bloque rien : il rend visible qu'on a expédié une
question. Ces réponses nourrissent le document — six mots produisent une
pièce creuse, et mieux vaut le voir pendant qu'on écrit qu'à la livraison.

## Le fond

**Deux halos rouges**, repris du site, fixes et sans animation : on
remplit un document, rien ne doit bouger derrière le texte.

## Vérification

Contrôle de types : zéro erreur. `pct`, devenu inutile avec la progression
segmentée, est retiré partout plutôt que laissé mort.
