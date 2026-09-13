# Strawberry — les titres qui avaient échappé aux capitales

16 fichiers.

## Pourquoi « La Méthode Strawberry » était resté en casse normale

Mon script du tour précédent ne lisait que les titres portant un
`className` avec `font-serif`. Or une partie du site écrit ses titres
autrement :

- **En style inline** — `<h1 style={{ fontFamily: SERIF, ... }}>`. C'est
  le cas de la page Méthode, de l'Architecture, de l'ensemble des pages
  légales et de la page Studio. **35 titres** dans 10 fichiers.
- **Dans des sous-dossiers** que mon motif de recherche ne couvrait pas :
  `documents/sillage`, `not-found`. **7 titres** de plus.

Quarante-deux titres restaient donc en casse normale à côté de titres en
capitales — l'incohérence exacte que vous m'aviez reprochée la première
fois, simplement déplacée d'un endroit à un autre.

## Ce qui est fait

Tous portent maintenant les capitales, et leur crénage se desserre de
-0.02 / -0.03 / -0.04em à -0.005em, comme pour les autres.

## Le contrôle qui manquait

J'ai vérifié après coup les deux formes d'écriture sur l'ensemble du
dépôt :

- titres en `className` avec `font-serif` sans `uppercase` : **0**
- titres en `style` inline sans `textTransform` : **0**

C'est ce contrôle qui aurait dû tourner avant la livraison précédente.

## Vérification

Contrôle de types : aucune erreur nouvelle. Les seules remontées sont
préexistantes et propres à mon environnement.
