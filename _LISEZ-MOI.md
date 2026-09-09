# Strawberry — la page audit sert les quatre terrains

Deux fichiers.

## 1. La page audit (`brand-narrative-audit`)

Elle était écrite pour des marques : « Ce que votre marque raconte
vraiment », un questionnaire qui parlait de site et de réseaux, une
section « pour qui » qui ne mentionnait que des marques. Un restaurateur
ou un artiste envoyé là depuis la home tombait sur une page qui parlait à
quelqu'un d'autre.

**Le badge** devient « L'AUDIT NARRATIF · 490€ » — plus « BRAND
NARRATIVE ».

**Le titre** devient « Ce que vous racontez, et ce que le marché en
entend. » Il vaut pour une marque comme pour un nom d'artiste.

**Une bande des quatre terrains** est ajoutée sous le hero, avant « ce
que vous recevez » : chacun se reconnaît en une ligne, et la note qui
suit dit l'essentiel — « Même méthode, même prix, même délai. Seul le
questionnaire s'adapte à ce que vous êtes. » C'est le lien manquant
entre la promesse de la home et la page qui vend.

**Le paragraphe du questionnaire** ne parle plus de « site, réseaux,
contenus » mais de « site, réseaux, carte, contenus récents, presse » —
la carte pour un lieu, la presse pour un artiste.

## 2. La page artistes vend l'audit

Toute la section offre — abonnement à 299 €/mois, trois paliers, garantie
et tableau comparatif dépliable — est remplacée par l'audit à 490 €, dans
la charte de la page.

Nouveau titre de section : « Un audit. Un prix. Sept jours. », avec la
phrase qui règle la question du terrain : « Le même audit que pour une
marque, une entreprise ou un lieu. Seul le questionnaire change, parce
que votre terrain n'est pas le leur. »

Le bouton mène à `/brand-narrative-audit`, comme partout ailleurs.

Les composants `OffreUnique`, `GrilleOffres`, `Comparatif` et `Garantie`
ne sont plus appelés : ils supposaient un modèle par paliers qui n'existe
plus. Leurs imports ont été retirés, ainsi que celui de `Depliant`,
devenu inutilisé. Les fichiers eux-mêmes restent dans le dépôt et peuvent
être supprimés.

## Ce qui reste incohérent

**THE ROOM** vend toujours un sprint à 2 500–3 500 €. C'est légitime si
vous le tenez pour un high ticket comme l'Architecture — mais la home le
présente aujourd'hui comme un terrain d'audit à 490 €, donc le visiteur
qui clique voit autre chose. Il faudrait soit y ajouter l'audit comme
porte d'entrée, soit le sortir de la grille des quatre terrains.

## Vérification

Contrôle de types : zéro erreur venant de ce code.
