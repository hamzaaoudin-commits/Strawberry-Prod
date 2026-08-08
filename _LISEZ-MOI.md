# Strawberry — patch : le livrable en livre feuilletable

Deux fichiers, dont un nouveau. Glissez-les dans leurs dossiers exacts
(`components/strawberry/` et `app/[lang]/brand-narrative-architecture/`),
jamais le dossier `strawberry-patch` lui-même.

## Ce qui change

**Les onze aperçus de pages ne sont plus en grille.** Avant : quatre blocs
empilés (« Acte I », « Acte II »...), chacun affichant ses pages côte à côte
sur toute la largeur du conteneur — plusieurs écrans de hauteur à faire
défiler avant d'arriver au sommaire complet.

Maintenant : un seul cadre de 420px de large, une page à la fois. On clique
sur les flèches ou on swipe au doigt sur mobile pour tourner la page ; les
flèches gauche/droite du clavier fonctionnent aussi. Le repère d'acte
(« Acte II — L'identité ») reste affiché au-dessus du livre en permanence, et
des points groupés par acte en dessous montrent où on se trouve dans les
onze pages sans avoir à les compter. Deux fines tranches de page dessinées
derrière la page visible font lire un livre plutôt qu'une image isolée.

**Nouveau fichier : `components/strawberry/document-flipbook.tsx`.** Le
composant est générique — il prend n'importe quelle liste de pages groupées
par actes, donc réutilisable ailleurs sur le site si vous voulez le même
traitement pour un autre document (le livre, l'audit).

**Nettoyage :** `MockupGrid` et `ActTitle`, qui ne servaient qu'à l'ancien
affichage en grille, ont été retirés de `page.tsx` — ils ne sont plus
appelés nulle part.

## Vérification après déploiement

- `/fr/brand-narrative-architecture` et `/en/brand-narrative-architecture` :
  le livre s'affiche, les flèches et les points tournent bien les pages.
- Respecte la réduction de mouvement (réglage système) : la page suivante
  apparaît par un fondu simple, sans rotation.
- Les onze pages et leurs légendes sont identiques à avant — seul
  l'affichage change, aucun texte n'a été retouché.

## Fichiers inclus

- `components/strawberry/document-flipbook.tsx` (nouveau)
- `app/[lang]/brand-narrative-architecture/page.tsx`
