# Strawberry — les portes deviennent la page d'entrée

8 fichiers.

## Ce que j'avais mal compris

J'avais mis les deux portes **dans** la page d'accueil, sous le hero. Vous
les vouliez **avant** : on entre sur le site, on voit Strawberry
Production, on choisit sa porte, et seulement ensuite on arrive dans un
argumentaire. C'est fait.

## La nouvelle structure

- **`/`** — la page d'entrée. Elle ne vend rien : le nom du studio, la
  promesse en une phrase, et les deux portes. Elle tient dans un écran, pas
  de défilement. **Pas de barre de navigation** : une page qui n'existe
  que pour trancher entre deux directions ne doit pas offrir dix autres
  liens. Le menu complet réapparaît dès qu'une porte est franchie.
- **`/marques`** — l'ancienne page d'accueil, intégralement, moins le
  sélecteur de portes qui n'a plus lieu d'être une fois le choix fait.
- **`/the-room`** — inchangée.

## Les liens que ça déplaçait

Deux pièges que le renommage aurait laissés cassés :

1. **Le formulaire de contact** vivait sur l'ancienne page d'accueil.
   Toutes les ancres `/#contact` pointaient donc vers une page qui ne le
   contient plus. Redirigées vers `/marques#contact`.
2. **Les deux CTA de THE ROOM** pointaient vers `#contact` en ancre
   relative, alors que le formulaire a été retiré de cette page lors du
   portage. Ils envoyaient dans le vide. Redirigés eux aussi.

Le logo de la barre de navigation continue de mener à `/`, c'est-à-dire à
l'entrée — le comportement attendu d'un logo.

## Le reste

`/marques` ajouté au sitemap et à la liste des routes qui reçoivent le
préfixe de langue dans `next.config.mjs` — sans cette dernière ligne,
`/marques` sans langue aurait renvoyé une 404. Entrées MARQUES / BRANDS
ajoutées au menu et au pied de page, à côté de THE ROOM.

## Vérification

Contrôle de types réel : zéro erreur.

## À supprimer

`components/strawberry/doors-section.tsx` ne sert plus à rien : son
contenu vit désormais directement dans la page d'entrée. Supprimable.
