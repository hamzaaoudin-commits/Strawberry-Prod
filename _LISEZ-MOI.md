# Strawberry — le logo à la bonne taille

1 fichier.

## Le réglage

J'avais mis `clamp(15px, 2vw, 19px)` — donc entre 15 et 19px selon la
largeur d'écran, là où le logo de la barre du site fait **22px** fixes.

Il est maintenant sur les valeurs exactes de la barre :

- `font-size: 22px`
- `letter-spacing: -0.02em`
- `top: 25px`, ce qui le centre à la même hauteur que dans la barre de
  72px de haut du reste du site

Un même nom affiché à deux tailles selon la page se remarque
immédiatement — c'est le genre d'écart qui fait amateur sans qu'on sache
dire pourquoi.

## Vérification

Contrôle de types : zéro erreur.
