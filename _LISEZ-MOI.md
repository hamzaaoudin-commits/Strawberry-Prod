# Strawberry — la porte devient THE ROOM

13 fichiers. Le design, les animations et le copywriting sont inchangés :
c'est un renommage de route, plus la recoloration du patch précédent.

## Le nom

`/lieux` devient `/the-room`, une seule route pour les deux langues. Le
brief prévoyait `/lieux` en français et `/venues` en anglais ; un nom
bilingue rend cette dualité inutile et simplifie le référencement — une
seule URL à indexer au lieu de deux qui disent la même chose.

Le wordmark géant du hero affiche THE ROOM. Dans le menu et le pied de
page, l'entrée s'appelle THE ROOM dans les deux langues, avec un
sous-titre qui précise de quoi il s'agit : « Lieux · le sprint d'écriture »
en français, « Venues · the writing sprint » en anglais. Le nom ne se
traduit pas, l'explication si — la même convention que BRAND NARRATIVE
AUDIT, qui reste en anglais sur la version française.

## Les routes

- `app/[lang]/the-room/page.tsx` — la page.
- `app/[lang]/lieux/page.tsx` — redirection conservée vers `/the-room`.
  La route a existé publiquement, autant ne pas casser un lien.
- `next.config.mjs` — `/nocta` et `/lieux` à plat redirigent vers
  `/fr/the-room`, et `the-room` est ajouté à la liste des routes qui
  reçoivent automatiquement le préfixe de langue. Sans cette dernière
  ligne, `/the-room` sans langue aurait donné une 404.
- Sitemap, `locale-link.tsx` et le commentaire de `lib/routing.ts` mis à
  jour.

## Rappel du contenu de ce dossier

`public/nocta/` contient les quatre fichiers de NOCTA portés tels quels,
avec la palette passée aux couleurs du studio (rouge de marque, encre
`#0a0a0a`), y compris les 33 couleurs codées en dur et la palette du
canvas bokeh 3D dans le JavaScript.

## Vérification

Contrôle de types réel : zéro erreur. Plus aucune référence en dur à
`/lieux` dans le code, hors la redirection volontaire.

## À supprimer plus tard

`app/[lang]/lieux/` peut disparaître une fois que plus aucun lien externe
ne pointe dessus. Sans urgence : une redirection ne coûte rien.
