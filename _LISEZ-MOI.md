# Strawberry — /lieux dans la navigation

Deux fichiers : `navbar.tsx` et `footer.tsx`.

## Pourquoi vous ne la voyiez pas

La page était bien en ligne — vérifié : `app/[lang]/lieux/page.tsx` et
`FAQ_LIEUX` sont dans le dépôt. Mais **aucun lien ne menait vers elle**.
Elle n'était accessible qu'en tapant l'URL à la main. C'est le point que
j'avais laissé en suspens dans le patch précédent, en attendant la home à
deux portes.

Vous pouvez le vérifier tout de suite : `/fr/lieux` doit s'afficher.

## Ce qui change

**Menu « Offres »** : une troisième entrée, LIEUX (VENUES en anglais),
avec son sous-titre. Les deux entrées existantes reçoivent au passage un
préfixe « Marques · », pour que les deux portes se distinguent dans le
menu — c'est la lecture minimale du site à deux portes, en attendant la
refonte de la home.

**Footer** : LIEUX / VENUES ajouté sous « Le Travail ».

## Reste à faire

La home à deux portes (une promesse unique en haut, puis Marques et
Lieux), la mention de la narration du dirigeant sur la page Marques, et
la page de vente des deux ouvrages — pour laquelle il me manque toujours
le lien Stripe du second livre, les deux prix, et le mode de remise du
PDF après paiement.
