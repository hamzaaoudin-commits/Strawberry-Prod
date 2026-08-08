# Strawberry — tour 36

10 fichiers, un seul glisser-déposer. Build validé.

Glissez les dossiers `app` et `components`, jamais leur contenu.

## Ce qui change

**1. Le bug d'animation du hero est corrigé.** La cause : un minuteur au
montage qui ne se redéclenchait pas de façon fiable quand Next.js restaure
la page depuis son cache de navigation plutôt que de la remonter
entièrement — l'animation ne jouait qu'au rafraîchissement complet.
Remplacé par un déclencheur basé sur la visibilité réelle (les lignes se
dessinent chaque fois que le hero redevient visible, peu importe comment on
y arrive).

**2. Le panneau de confiance (340+, 4, 1 studio) déménage.** Retiré de juste
après le hero, il apparaît maintenant juste avant l'offre, en réassurance
avant le prix.

**3. Le défilement des marques se rapproche du hero.** La hauteur minimale
du hero passe de 100vh à 82vh — moins de vide entre le texte et la ligne de
marques qui défile.

**4. Le schéma « sans/avec architecture » est animé.** Les points et la
ligne se dessinent au défilement, comme le reste du site — il restait le
seul élément statique.

**6. L'alignement des statistiques d'impact est corrigé.** Chiffre, titre,
corps et source s'alignent maintenant sur la même ligne des deux côtés,
même si un texte est plus long que l'autre — une vraie grille remplace deux
colonnes indépendantes.

**7. Les lettres S.T.R.A.W. de la home arrivent en cascade.** Même
traitement que sur la page méthode, plutôt qu'un bloc figé.

**8. La phrase sur l'« attention pleine » est retirée** de la section
offre. « Quatre commandes par trimestre. » reste seul.

**9. L'Atlas quitte la home**, et vit maintenant sur les deux pages
d'offre — Architecture et Audit — juste après leur FAQ respective.

## Un vrai bug trouvé au passage, pas demandé mais corrigé

En travaillant sur la page Architecture, j'ai remarqué qu'elle **n'avait
aucun pied de page** — ni liens légaux, ni navigation secondaire, rien.
C'est corrigé : le pied de page standard y est maintenant présent.

## Le seul point resté en attente

**Le panneau rouge et son titre** — votre message pouvait vouloir dire deux
choses différentes à cet endroit, et l'une casserait le sens du schéma
sans/avec architecture. Je n'ai rien touché plutôt que de deviner. Dites-moi
ce que vous vouliez exactement et je le fais dans le prochain tour.
