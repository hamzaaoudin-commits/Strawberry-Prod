# Strawberry — patch : casser la régularité machine

Un seul fichier, `app/[lang]/brand-narrative-architecture/page.tsx`.
Remplace la version du patch précédent.

## Pourquoi ça faisait « IA »

Ce n'était pas une question de goût, il y avait une cause technique
précise. Dans le patch précédent, je forçais chaque ligne de corps de
texte à faire exactement la même largeur (`textLength` avec
`lengthAdjust`), ce qui produisait un bloc de texte aux deux bords
parfaitement droits, sur toutes les lignes, sur les treize pages. Aucune
composition humaine ne fait ça — c'est la signature la plus reconnaissable
d'une page fabriquée par une machine.

Deuxième cause : les treize pages avaient exactement la même anatomie au
pixel près. Même lettrine, même note de marge à la même hauteur, même
filigrane à la même place. Feuilleter treize pages identiquement
structurées lit « gabarit rempli », pas « document composé ».

## Ce qui change

**La justification forcée est supprimée.** Le bord droit du bloc de texte
est maintenant irrégulier, comme dans n'importe quel ouvrage réel.

**Des micro-irrégularités déterministes.** Chaque ligne dérive de quelques
dixièmes de pixel horizontalement et verticalement, et son opacité varie
très légèrement — comme une encre qui ne dépose pas identiquement partout.
C'est calculé à partir du numéro de la pièce, jamais aléatoire (un
`Math.random` casserait l'hydratation React), donc chaque page garde
toujours les mêmes irrégularités sans jamais les partager avec sa voisine.

**La lettrine n'apparaît plus que sur une page sur trois.** Un ouvrage
réel ouvre un chapitre par une lettrine, pas chacune de ses pages
intérieures.

**La note de marge apparaît sur deux pages sur trois**, et jamais à la
même hauteur : une annotation d'auteur se pose en face du passage qu'elle
commente, pas à un taquet fixe répété page après page.

**Le filigrane géant n'apparaît plus qu'une page sur deux**, et jamais
tout à fait à la même place.

Résultat : les treize pages partagent une grammaire commune sans être
treize exemplaires du même moule.

## Vérification

Contrôle de types TypeScript réel : zéro erreur venant de ce fichier. (La
seule erreur signalée dans mon environnement est le `<style jsx>` déjà
présent dans votre dépôt avant mes modifications.)

## Fichiers inclus

- `app/[lang]/brand-narrative-architecture/page.tsx`
