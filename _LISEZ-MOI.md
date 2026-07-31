# Strawberry — tour 6

10 fichiers. À déposer PAR-DESSUS le tour 5, pas à la place : ce zip ne contient
que les différences.

Glissez les **dossiers** (`app`, `components`, `lib`), jamais leur contenu.

## Rappel du tour 5, toujours en attente

- Supprimer `public/sitemap.xml` depuis GitHub.
- `LIVE.radar.count` (340) et `HOUSES.nextNumber` (12) sont affichés
  publiquement comme vérifiables. Corrigez-les.
- `NEXT_PUBLIC_BOOK_URL` : le livre reste inachetable tant qu'il n'est pas posé.

## Nouveau dans lib/config.ts

`LIVE.scarcity.closesOn` est vide. Si vous ouvrez réellement quatre créneaux par
trimestre, la date de clôture des candidatures est une vraie échéance : mettez-la
et elle s'affiche à côté du prix. Laissée vide, rien ne s'affiche — une échéance
inventée est ce qu'un fondateur repère en premier.

## Le bandeau des marques

Il défile de nouveau, mais sur les marques réellement disséquées dans RADAR,
avec le libellé qui le dit et un lien vers /lectures. Il se remplit tout seul :
chaque fiche publiée dans `lib/radar-reads.ts` y entre le jour de sa parution.
