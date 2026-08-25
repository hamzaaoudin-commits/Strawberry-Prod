# Strawberry — patch : le scintillement, plus visible

Un seul fichier, `components/strawberry/hero-section.tsx`.

## Ce qui s'est probablement passé

L'animation était déjà dans le code (vérifié sur le dépôt en ligne), mais
deux choses la rendaient difficile à remarquer :

1. **Le graphique entier est masqué sur mobile** (`hidden md:block`) — une
   décision déjà présente avant mes changements, pas quelque chose que
   j'ai touché. Si vous regardiez sur téléphone, vous ne pouviez rien voir
   du tout, ni les lignes, ni les points, ni le scintillement.
2. **Sur desktop, le pic était trop discret** : un simple changement
   d'opacité, sur un graphique déjà à 22% d'opacité globale, se voit à
   peine.

## Ce qui change

Le pic du scintillement anime maintenant aussi la taille du point (deux
fois plus grand au pic) et ajoute une lueur (`drop-shadow`) — l'effet lit
clairement comme "un point qui brille", pas juste une variation
d'opacité qu'on doit fixer pour remarquer. Le rythme est aussi plus
fréquent (entre 2,2 et 4,8 secondes par point selon la position, contre 4
à 9 secondes avant) pour qu'un visiteur qui regarde le hero quelques
secondes en voie au moins un ou deux.

Le masquage sur mobile n'a pas été touché — dites-moi si c'est là que vous
regardiez et si vous voulez que je l'active aussi sur petit écran.

## Fichiers inclus

- `components/strawberry/hero-section.tsx`
