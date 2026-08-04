# Strawberry — tour 7

55 fichiers, un seul glisser-déposer. Build validé sur une copie fraîche de
votre dépôt réel.

## Important : ce zip est plus large que d'habitude, et voici pourquoi

En comparant votre dépôt GitHub actuel au travail des tours précédents, j'ai
constaté que plusieurs pages n'avaient jamais atterri chez vous : `/lectures`,
`/maisons`, `/commander`, `/documents` sont absentes de votre dépôt, alors que
je vous les avais livrées il y a deux tours. La home actuelle sur GitHub ne
les référence donc pas non plus.

Je ne sais pas si ce zip-là n'a jamais été déposé, ou si le dépôt a été
partiellement écrasé depuis. Dans le doute, ce tour-ci contient l'ensemble —
ces pages plus tous les changements que vous venez de demander — pour que
vous n'ayez qu'un seul dépôt à faire et que rien ne manque derrière.

Glissez les **dossiers** (`app`, `components`, `lib`, `public`), jamais leur
contenu.

## Après ce dépôt, vérifiez ces quatre pages existent bien

- `/fr/lectures` — l'index des dissections publiques
- `/fr/maisons` — le registre des Maisons
- `/fr/commander` — la page de commande avec récapitulatif
- `/fr/documents` — l'index SILLAGE / VERSO

Si l'une des quatre donne un 404, dites-le-moi : ça voudra dire que le dépôt
a un souci différent de ce que je pense.

## Ce qui a changé cette fois (en plus du re-sync)

- Hero : phrase d'ouverture retirée, H1 recentré sur l'identité de marque et
  l'appartenance plutôt que sur « une position »
- Bandeau des marques : juste le défilement, sans libellé ni lien
- Section problème raccourcie, recentrée sur l'identité (le prix est une
  conséquence, pas le sujet)
- Section diagnostic réécrite en prose continue, sans étiquettes de cours
  marketing ; le paragraphe sur la saturation par l'IA est monté depuis la
  page architecture
- Mécanisme S.T.R.A.W. : reprend les grandes lettres gravées de la page
  méthode, explicitement présenté comme méthode propriétaire du studio
- Objet relié entièrement retiré (offre, page de commande, config)
- Couverture SILLAGE : juste la couverture, sans l'effet de pile
- Curseur avant/après : va maintenant jusqu'au bout (0 à 100 %), contenu
  réécrit autour de l'appartenance à un camp
- Section « Le Studio » retirée de la home, déplacée en clôture de la page
  /about qui porte maintenant ce nom partout (navbar, pied de page, titre)
- Registre des Maisons retiré de la home (sa phrase ne portait pas)
- Nouveau : pont email entre les lectures RADAR et l'abonnement, sur
  `/lectures` et sur chaque fiche
- Nouveau : mesure d'usage — vue de chaque section et clic de chaque bouton
  important, via `@vercel/analytics`

## Ce qui reste en attente depuis les tours précédents

- `LIVE.radar.count` (340) et `HOUSES.nextNumber` (12) dans `lib/config.ts` :
  affichés publiquement comme vérifiables, à corriger.
- `NEXT_PUBLIC_BOOK_URL` : le livre reste inachetable tant qu'il n'est pas
  posé en variable d'environnement Vercel.
- `public/sitemap.xml` toujours à supprimer manuellement depuis GitHub, pour
  que `app/sitemap.ts` reprenne la main.
