# Strawberry — le titre du sprint sur deux lignes

5 fichiers.

## Pourquoi il y en avait trois

Deux coupures se cumulaient :

**Celle du navigateur.** Le bloc de titre est dans un conteneur flex qui
se rétrécissait à son contenu le plus étroit, au lieu de prendre la
largeur disponible. Le titre se cassait donc après « quatorze », bien
avant d'avoir rempli sa ligne.

**La mienne.** J'avais ajouté un `<br/>` après « jours, » pour forcer une
coupure au bon endroit — sans voir que le navigateur en faisait déjà une
avant. Résultat : trois lignes au lieu de deux.

## Le correctif

**Le conteneur du titre prend la largeur disponible** (`flex: 1 1 auto`,
avec un minimum de 24 caractères). La coupure naturelle tombe maintenant
au bon endroit toute seule.

**La coupure forcée est retirée** des quatre pages et des deux langues.

C'est le bon ordre des choses : régler la largeur d'abord, et ne forcer
une coupure que si elle reste fausse après. J'avais fait l'inverse.

## Vérification

Contrôle de types : zéro erreur. Fichier de traductions validé.
