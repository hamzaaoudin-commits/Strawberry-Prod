# Strawberry — les pages d'offres retrouvent leur navigation

1 fichier : le gabarit partagé, donc les quatre pages d'un coup.

## Le bouton demandé

**« ← Accueil »** est ajouté, le même composant que sur la page audit et
la page de remerciement. Il vit hors du HTML injecté : celui-ci vient de
NOCTA et n'a pas de page mère. Posé dans le composant React, il passe par
`LocaleLink` et garde donc la langue — un lien écrit dans le HTML brut ne
le ferait pas.

## Ce que j'ai trouvé en cherchant

Les pages d'offres n'avaient **aucune navigation du tout**. Pas de logo,
pas de menu, pas de bouton « Commander l'audit ».

La cause est mécanique : le HTML vient du site NOCTA, qui était autonome.
Son en-tête et son pied de page ont été retirés au moment du portage — et
rien ne les a remplacés, parce que le gabarit se contentait d'injecter le
`<main>`. On entrait donc sur ces pages sans pouvoir en sortir autrement
qu'avec le bouton du navigateur.

**La barre de navigation et le pied de page du site sont ajoutés.** Les
quatre pages de terrain sont maintenant des pages du site, pas des
impasses.

## Un effet secondaire utile

Le bouton « Commander l'audit » de la barre est présent sur ces pages.
C'était le seul endroit du site où l'action principale n'était pas
accessible en permanence.

## Vérification

Contrôle de types : zéro erreur.
