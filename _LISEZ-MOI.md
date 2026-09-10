# Strawberry — correctif : la tournée s'affichait cassée

2 fichiers.

## La cause, et elle est entièrement de moi

J'ai porté le CSS de « La tournée » depuis `public/nocta/styles.css` sans
vérifier ce qu'il appelait. Ce bloc référence **neuf variables propres à
NOCTA** — `--grad`, `--display`, `--serif`, `--body`, `--mono`,
`--coral`, `--iris-soft`, `--cream`, `--line-soft` — qui n'existent pas
dans les globals du studio.

Résultat, exactement ce que montre votre capture : les titres perdaient
leur dégradé, les polices retombaient en valeur par défaut, et la mise en
page s'effondrait.

Ces variables vivent dans `nocta/styles.css`, qui n'est chargé que sur
`/the-room`. Le bloc marchait là-bas et nulle part ailleurs — je ne l'ai
pas vérifié avant de livrer.

## Le correctif

**Les neuf variables sont définies dans le périmètre de `.tour-pin`**,
traduites en jetons du studio : le dégradé à 108°, les polices de la
charte, le rouge de marque. Elles ne sortent pas de la section.

**Le débordement à gauche**, second bug visible sur la capture : chez
NOCTA, `.wrap` porte `width:100%` **et** une marge interne. La classe
`.shell` du studio n'a pas de marge interne — le texte se collait donc
aux bords et débordait. `.ts-inner` porte maintenant les deux.

## Ce que j'aurais dû faire

Vérifier les dépendances d'un bloc CSS avant de le déplacer d'un fichier
à un autre. C'est la même erreur que pour l'échafaudage de MOMENTUM : je
déplace du style sans déplacer ce dont il dépend. Je liste désormais les
`var(--…)` d'un bloc avant de le porter — c'est fait pour celui-ci, et
plus aucune variable n'y est orpheline.

## Vérification

Contrôle de types : zéro erreur. Toutes les variables appelées par le
bloc porté sont désormais définies.
