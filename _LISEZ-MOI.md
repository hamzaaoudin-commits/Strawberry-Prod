# Strawberry — tour 22

5 fichiers, un seul glisser-déposer. Build validé.

Glissez les **dossiers** (`app`, `components`), jamais leur contenu.

## Ce qui est nouveau

**La page Le Studio a son propre motif.** Une ligne verticale avec quatre
marques, dont une pleine — un fondateur, quatre commandes par trimestre,
l'idée qui gouverne toute la page. Différent du sceau de l'Architecture et
du champ de points de la home : chaque page majeure a maintenant son propre
geste.

**Le champ de points du hero se forme sous les yeux.** Les lignes de
connexion se dessinent progressivement au chargement (technique
`pathLength`, en cascade sur environ 1,5 seconde) au lieu d'apparaître déjà
tracées. Les points s'allument juste après, comme s'ils se posaient au bout
de chaque ligne qui arrive.

**Deux lettrines** : sur le premier paragraphe de la biographie du fondateur
(page Le Studio) et sur le premier paragraphe de « Pourquoi ce livre
existe » (page du livre). Une classe CSS réutilisable (`.drop-cap`), pure
`::first-letter`, aucun JavaScript.

**La couverture de SILLAGE** passe d'un simple rectangle à bordure blanche
à un traitement complet : dégradé de fond, ombre portée, crochets de coin
assortis au reste du site, et une grille de plan en filigrane — un rappel
discret que le document est une architecture, pas juste du texte dans un
cadre.

## Ce que je n'ai pas encore touché

La couverture de VERSO et celle de l'Atlas restent dans leur état actuel —
j'ai priorisé SILLAGE parce qu'elle apparaît sur la page qui compte le plus
(l'Architecture). Si vous voulez que je fasse le même travail sur les
autres couvertures, dites-le et j'enchaîne.
