# Strawberry — le surlignage, corrigé et étendu

9 fichiers. Vos trois reproches étaient justes, voici ce que j'en ai fait.

## 1. Le rouge était trop clair

Une nouvelle variable, `--color-highlight: #a80f1e`, distincte du rouge de
marque.

La raison est structurelle : **un fond doit être plus sombre qu'un trait.**
`#ff2233` est juste en accent — sur un mot, un filet, une icône — mais en
aplat derrière du texte il éblouit et fait bon marché. Le nouveau garde la
même teinte et descend la luminosité, ce qui laisse un texte clair
(`#fff5f2`, un blanc légèrement chaud) parfaitement lisible par-dessus.

J'ai aussi aligné `::selection` dessus : deux rouges différents, l'un posé
dans la page et l'autre au glissement de souris, auraient juré côte à côte.

## 2. Les listes sont surlignées en entier

Vous avez raison et mon raisonnement était faux. Je disais que surligner
une seule ligne créait un contraste ; en réalité, dans une liste, un seul
élément traité différemment se lit comme une **erreur**, pas comme un
parti pris. Les trois lignes de la triade et les quatre fausses causes
sont désormais toutes surlignées.

Sur les fausses causes, le surlignage se cumule avec la rature — c'est
cohérent avec ce que l'effet désigne à cet endroit : la liste de ce qui a
été essayé pour rien.

## 3. Étendu là où ça avait du sens

Au-delà de vos quatre emplacements :

- **La ligne d'ancrage du hero** — « Audit narratif · 490 € · Livré en
  sept jours ». C'est l'information la plus importante de la page, elle
  était en rouge sur noir à 80% d'opacité, donc discrète.
- **Le surtitre de la section offre** sur la home.
- **Le titre du diagnostic** — « Ça a manqué de la bonne cause », en
  dégradé.
- **Tous les surtitres des pages de terrain**, pas seulement « le
  constat » : six occurrences.

## Où je ne l'ai pas mis, et pourquoi

Pas sur les titres principaux — un h1 surligné en entier devient une
bannière et écrase tout le reste. Pas sur les corps de texte, où le fond
haché à chaque ligne devient illisible. Pas dans le pied de page ni la
navigation, où rien ne mérite qu'on s'arrête.

## Vérification

Contrôle de types : zéro erreur.
