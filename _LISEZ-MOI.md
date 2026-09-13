# Strawberry — le vide venait du hero

1 fichier.

## Ce que j'avais raté

Je cherchais l'espace du mauvais côté de la frontière. J'ai réduit la
marge de la section suivante, alors que **le vide appartenait au hero**.

Il était en `min-h-[82vh]` avec son contenu centré verticalement. Le
contenu ne remplit pas 82 % de l'écran : le reste se répartit donc
au-dessus et en dessous. Tout l'espace sous le bouton était du hero, pas
de la section d'après — d'où le fait que mes deux corrections précédentes
n'y aient presque rien changé.

## Le réglage

- `min-h-[82vh]` → **`min-h-[68vh]`**
- Marges explicites : `pt-28` pour dégager la barre de navigation,
  `pb-8` en bas

Le contenu occupe donc une hauteur proche de la sienne, au lieu de flotter
au milieu d'un bloc trop grand. Le surtitre de la tournée remonte
d'environ 14 % de la hauteur d'écran, soit 130 pixels de plus sur un
portable et 190 sur un grand écran.

Le hero garde sa présence — il occupe encore les deux tiers de l'écran à
l'ouverture, et la mention « défiler » reste sous la ligne de flottaison.

## Vérification

Contrôle de types : zéro erreur.
