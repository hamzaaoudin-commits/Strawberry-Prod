# Strawberry — les dix corrections de design

3 fichiers.

## 1 · Le contraste typographique

La question descend à **300 de graisse** en `clamp(2.1rem, 5.2vw, 3.6rem)`,
l'aide reste à **500** en 13,5 px. C'est l'écart entre les deux qui fait
l'élégance, pas la taille absolue — une page où tout est en gras n'a
aucune hiérarchie.

Crénage à -0.028em et `text-wrap: balance` sur la question : les lignes se
répartissent au lieu de laisser un mot seul en bas.

## 2 · La grille asymétrique

Fini la colonne centrée. Une grille `5.5rem / 1fr` : le folio vit dans la
marge gauche, le contenu occupe les colonnes utiles. Sur mobile, la marge
disparaît.

## 3 · Les champs cessent d'être des champs

Plus de bordure, plus de fond, plus de coins. **Un trait fin sous le
texte**, qui rougit et s'épaissit à la saisie. Le texte saisi est en serif
300 à 1,5 rem.

On écrit sur une ligne, on ne remplit pas une case.

## 4 · Le rouge une fois par écran

Il était sur le bouton, les filets, le point de sauvegarde, le tiret de
relance, la puce de déblocage et la barre de progression. **Deux
occurrences** au lieu de six : le trait du bouton, et le champ actif.

Le reste passe en blanc à 15–30 %.

## 5 · Le rythme des marges

Les mêmes écarts partout ne créent aucune hiérarchie. Maintenant :
**12 unités** après la question, **16** avant le pied, **16** après la
mention des questions fondatrices. Beaucoup d'air là où il faut respirer,
peu là où les éléments se répondent.

## 6 · Le mouvement au survol

Les options **glissent de 3 px vers la droite**, sur 260 ms. Court et
discret — le mouvement est ce qui donne la sensation de qualité.

## 7 · Le fond avance avec le parcours

La lueur passe **du bleu froid au rouge de marque** à mesure qu'on
approche de la fin, pilotée par une variable CSS que le composant met à
jour. Transition de 1,4 s : on ne la voit pas changer, on la sent.

## 8 · La progression devient un folio

Plus de barre, plus de segments. **Un grand chiffre en marge** — 07 — avec
le total en dessous en mono, à la manière d'un bas de page imprimée.

Sur une question fondatrice, la marge reste vide : on ne compte pas les
pages de quelqu'un à qui on demande ce qu'il refuse.

## 9 · Le bouton devient un mot souligné

Plus de bouton rouge arrondi. **Le mot en mono, souligné d'un trait qui se
tend au survol** (scaleX 1 → 1,12 sur 420 ms). Désactivé, le trait ne fait
que 28 % de la largeur : l'état se lit sans couleur.

## 10 · La finition

Ce qui est invisible une par une et décisif ensemble :

- **Ligatures et alternatives contextuelles** activées
- **Césure automatique** avec un minimum de 7 caractères, 4 avant, 3 après
- **Veuves et orphelines** interdites sur tous les paragraphes
- **Chiffres elzéviriens** sur le folio et les compteurs — les chiffres
  alignés ne servent que dans les tableaux
- Lissage et `optimizeLegibility`

## Vérification

Contrôle de types : zéro erreur. Feuille de style validée.
