# Strawberry — le questionnaire s'adapte au terrain

Trois fichiers.

## Le problème

Le questionnaire ne connaissait que deux parcours : `audit` et
`architecture`. Ses questions supposent toutes une marque — « le nom de
votre maison », « vos concurrents directs et leur tagline ». Depuis que
l'audit vaut aussi pour un lieu et pour un artiste, ces formulations
tombent à côté : un restaurateur n'a pas de tagline concurrente à copier,
un artiste n'a pas de maison.

## Ce qui est ajouté

**Une dimension terrain**, à côté de l'offre. Une question peut désormais
déclarer les terrains qui la concernent ; **sans mention, elle vaut pour
tous** — et c'est le cas de la grande majorité. C'est ce qui rend
l'unification vraie plutôt que déclarée : le parcours reste le même à
90 %, seules quelques questions se déclinent.

**Trois versions de la question « concurrents » :**
- marques et entreprises — la version d'origine, inchangée ;
- lieux — « Nommez 3 à 5 adresses concurrentes... Reprenez la phrase de
  leur fiche Google ou de leur bio Instagram » ;
- artistes — « Nommez 3 à 5 artistes de votre zone... Pas vos influences :
  ceux à qui on vous compare. »

**L'URL porte le terrain :**
`/fr/questionnaire/audit?terrain=lieux&name=...&email=...`

Sans paramètre, c'est le parcours commun qui s'affiche : **tous les liens
déjà envoyés à des clients continuent de fonctionner à l'identique.**

**La clé de sauvegarde locale inclut le terrain**, sinon deux parcours
différents se seraient écrasés l'un l'autre dans le navigateur.

## Ce qui reste à faire

Je n'ai décliné que la question des concurrents — la plus manifestement
inadaptée. D'autres méritent le même traitement une fois que vous aurez
tranché leur formulation :

- « le nom de votre maison » → le nom du lieu, le nom d'artiste ;
- « votre client refusé » → la table qu'on refuse, la date qu'on refuse ;
- « votre modèle de vente » → sans objet pour un lieu.

Dites-moi lesquelles vous voulez décliner et dans quels termes : la
mécanique est en place, il ne reste plus qu'à écrire.

## Vérification

Contrôle de types : zéro erreur venant de ce code. (La seule erreur
signalée porte sur `next/server`, absent de mon environnement.)
