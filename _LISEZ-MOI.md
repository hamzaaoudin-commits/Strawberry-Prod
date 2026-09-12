# Strawberry — le surlignage qui débordait

3 fichiers.

## La cause

Sur les pages d'offres, `.eyebrow` est un élément de **bloc**. En posant
le surlignage sur cet élément, le fond prenait toute la largeur
disponible au lieu du seul texte — d'où la barre rouge qui traverse la
page derrière « QUESTIONS FRÉQUENTES ».

Sur la home, les surlignages sont posés sur des `<span>`, qui sont
inline : ils épousent le texte. C'est pourquoi le défaut n'apparaissait
que d'un côté.

## Ce qui est fait

**Les six surtitres des pages d'offres ne sont plus surlignés.** Ils
redeviennent des surtitres rouges classiques.

**Une garde est posée dans les deux feuilles de style** : les classes
`surligne` et `surligne-grad` forcent désormais `display: inline`. Même
appliquées par erreur à un élément de bloc, elles ne pourront plus
s'étendre au-delà du texte. Le cas ne peut plus se reproduire, y compris
sur des éléments que je n'ai pas encore touchés.

## Ce qui reste surligné

Uniquement sur la home, et uniquement sur des `<span>` :

- Le titre de la tournée, en dégradé
- La ligne d'ancrage du hero — « Audit narratif · 490 € »
- Le surtitre « LE PROBLÈME »
- Les trois lignes de la triade
- Les quatre fausses causes
- Le titre du diagnostic, en dégradé

Les pages d'offres n'en ont plus du tout. Si vous en voulez malgré tout —
sur un mot dans une phrase, plutôt que sur un surtitre — dites-moi
lequel : avec la garde en place, ce sera propre.

## Vérification

Contrôle de types : zéro erreur.
