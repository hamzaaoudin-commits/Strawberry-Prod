# Strawberry — la marge du titre passe en dessous

1 fichier.

## Ce que j'ai mal fait

J'ai réduit la marge **haute** du titre pour le rapprocher du hero, jusqu'à
2 unités. Mais le titre n'avait aucune marge **basse** : la section
épinglée démarre immédiatement après lui, donc la première scène —
« MARQUES & ENTREPRISES / BRAND » — lui rentrait dedans.

Je réglais le mauvais côté.

## Le réglage

- Marge haute : `pt-2` → **`pt-6`**, assez pour respirer sans rouvrir le
  vide d'avant
- Marge basse : aucune → **`pb-20`**, qui sépare le titre de la première
  scène

Le titre reste près du hero, et il ne touche plus ce qui le suit.

## Vérification

Contrôle de types : zéro erreur.
