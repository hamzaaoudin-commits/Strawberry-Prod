# Strawberry — patch : correctif du bug qui faisait disparaître les points

Un seul fichier, `components/strawberry/hero-section.tsx`. Remplace la
version du patch précédent.

## Le bug

Le pic du scintillement animait l'attribut `r` (le rayon du cercle) via une
variable CSS sans unité (`r: var(--twinkle-r)`). C'est une valeur invalide
pour la propriété CSS `r` selon la spec — certains navigateurs, face à une
valeur invalide dans une animation, annulent le rayon en continu plutôt que
seulement au repos. Résultat : les points devenaient invisibles en
permanence dès que l'animation démarrait, pas seulement entre deux pics.

## Le correctif

Le grossissement au pic passe par `transform: scale()` plutôt que par
l'attribut `r` — une propriété purement visuelle, sans problème de validité,
bien supportée partout. Le résultat visuel est identique (le point double
de taille au pic, avec la même lueur), mais ne peut plus casser le rendu.

## Une question pour confirmer

Sur votre capture, est-ce que les fines lignes rouges qui convergent vers
un point central étaient aussi invisibles, ou seulement les points ? Les
lignes n'utilisaient pas l'attribut `r` — si elles avaient disparu aussi,
ça voudrait dire qu'autre chose se passe en plus de ce bug (par exemple le
graphique entier masqué sur un écran de moins de 768px de large, comme
évoqué au tour précédent). Si seuls les points manquaient, ce correctif
suffit.

## Fichiers inclus

- `components/strawberry/hero-section.tsx`
