# Strawberry — les boutons parlaient anglais, et je sais enfin pourquoi

5 fichiers. Les deux problèmes sont réels, et je les ai trouvés
précisément plutôt que de deviner.

## Pourquoi les boutons étaient en anglais

Ce n'était pas un problème de déploiement. J'ai remonté le mécanisme :
chaque page de terrain a son propre fichier de surcharge
(`marques-entreprises/page.tsx`, etc.), dont le contenu écrase le
dictionnaire partagé au chargement — `Object.assign(DICT.fr, copy.fr)`.

**J'avais inversé le français et l'anglais dans ces trois fichiers**,
exactement la même faute que sur `i18n.js` il y a deux patches — un
script qui suppose l'ordre des blocs `fr:`/`en:` au lieu de le vérifier.
Cette fois la faute était dans les fichiers de page, pas dans le
dictionnaire partagé : c'est pour ça qu'elle est passée inaperçue au
dernier contrôle, qui portait sur le mauvais fichier.

Corrigé ligne par ligne, comme la fois précédente — mais cette fois j'ai
aussi passé les quatre fichiers concernés au peigne fin, en cherchant
automatiquement des marqueurs d'anglais (« the », « was », « what »…)
dans chaque bloc français. Zéro anomalie trouvée, sur les quatre.

## Le résultat qui gâchait tout

Vous aviez raison sur ce point aussi. « L'effet qui dure » restait
affiché en permanence sous les deux boutons — on voyait la conclusion
avant même d'avoir cliqué une fois. Le bouton ne servait plus à rien.

**Il devient un troisième onglet**, au même titre que les deux autres :
« Ce que fait le secteur » · « Ce qu'elle a fait » · « Ce que ça a
donné ». Rien n'est visible avant qu'on choisisse de le regarder, et
rien de plus n'est laissé en évidence par défaut.

## Vérification

Contrôle de types : zéro erreur. Toutes les clés confirmées présentes
dans les quatre dictionnaires. Script de bascule revérifié avec
`node --check`. Balayage automatique des quatre fichiers pour toute
trace d'anglais dans un bloc français : aucune anomalie.
