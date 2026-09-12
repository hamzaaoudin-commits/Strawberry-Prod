# Strawberry — le rose remplacé par du noir sur rouge

4 fichiers.

## D'où venait le rose

Deux variables de la charte portaient des valeurs franchement roses :
`--coral-soft: #ff6b75` et `--iris-soft: #ff7a7a`. Quand j'ai éclairci le
rouge de marque, elles sont restées — et c'est elles qui coloraient les
phrases d'accroche, pas le dégradé comme je l'avais supposé la première
fois.

Elles reviennent dans la famille du rouge, côté orangé : `#ff6a4a` et
`#ff8352`. Elles servent encore aux traits fins et aux icônes, où elles ne
posent pas de problème.

## Les phrases passent en noir surligné

Comme vous l'avez montré. Sur les pages d'offres :

- **« Tout ça existe déjà chez vous. Il faut juste l'écrire. »**
- Les phrases fortes du constat (`.manifesto .serif`)
- La phrase du bandeau final (`.cta-band .serif`)

Sur la home :

- La même phrase de clôture de la tournée
- **`.ts-out`**, la ligne de bénéfice de chaque scène — « Un lieu qu'on
  reconnaît avant d'en avoir lu le nom », etc. Elle était en dégradé
  découpé, donc rose elle aussi.

## Pourquoi c'est meilleur, au-delà du rose

Une phrase en rouge clair sur fond sombre reste du texte coloré : elle se
distingue à peine du corps autour. Surlignée, elle devient un objet. Sur
ces lignes-là — qui disent toutes ce que le client emporte — c'est
exactement ce qu'il faut.

## La garde tient

Toutes ces règles portent `display: inline` et `box-decoration-break:
clone`, donc aucune ne peut déborder sur la largeur de la ligne ni casser
son fond en passant à la ligne suivante.

## Vérification

Contrôle de types : zéro erreur.
