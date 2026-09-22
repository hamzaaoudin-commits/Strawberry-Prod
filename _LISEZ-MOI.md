# Strawberry — la carte enfin retirée

2 fichiers. Vous aviez raison, et la cause était plus grave que je ne le
pensais.

## Ce qui était resté depuis le tout premier patch

Le composant `QuestionnaireFlow` s'ouvrait sur :

```tsx
<div className="relative border border-hair-strong bg-ink">
  <span className="bracket-tl" aria-hidden="true" />
  <span className="bracket-br" aria-hidden="true" />
```

Une bordure visible et des coins rouges décoratifs — le motif de
« couverture de document » utilisé ailleurs sur le site (le livre, les
fac-similés d'extrait). Il est là depuis la version la plus ancienne de ce
composant, avant même qu'on parle de plein écran.

**Chaque passe suivante a changé ce qu'il y avait dans la carte, sans
jamais remarquer que la carte elle-même contredisait l'idée.** J'ai refait
la typographie, la grille, les quatre actes, dix corrections de design —
et le cadre qui enferme tout ça n'a jamais bougé. C'est pour ça que ça
« a l'air pareil qu'avant » malgré tout le travail : structurellement,
ça l'était.

## Ce que ça disait, et pourquoi c'est faux ici

Un cadre à coins rouges dit « ceci est un objet imprimé, regardez-le de
l'extérieur ». C'est juste sur une couverture de livre. C'est l'inverse de
ce qu'on veut sur le questionnaire : un espace ouvert où l'on écrit, pas
un document qu'on contemple.

## Le second cadre, dans la page

`page.tsx` enveloppait aussi le tout dans `shell-sm` — un conteneur figé à
760 px, hérité des tout premiers patches. Même symptôme : la largeur n'a
jamais été revue quand le design a changé de nature.

Il devient un simple conteneur pleine largeur ; chaque élément garde sa
propre mesure de lecture (`max-w-[17ch]` sur la question, `max-w-[600px]`
sur le champ), donc rien ne s'étire à l'infini sur un grand écran — mais
la page elle-même n'est plus une carte flottante dans le noir.

## Ce qui reste identique

Le grain, la lueur qui avance avec le parcours, la typographie, les
champs à trait — tout ce qu'on a construit ces derniers tours tient. Seul
le contenant disparaît.

## Vérification

Contrôle de types : zéro erreur nouvelle. Les neuf autres usages de
`bracket-tl`/`bracket-br` sur le site (couvertures, extraits) sont
intacts — je n'ai touché qu'à cette occurrence.
