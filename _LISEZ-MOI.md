# Strawberry — patch : les vingt pièces, sans exception

Un seul fichier, `app/[lang]/brand-narrative-architecture/page.tsx`. Le
composant `document-flipbook.tsx` livré précédemment n'a pas besoin d'être
retouché.

## Ce qui manquait vraiment

Le sommaire de la page en dit vingt : « Les vingt pièces, sans exception. »
Je n'en avais mis en scène qu'une poignée — cinq environ, celles qui
correspondaient au résumé marketing en cinq lignes, pas à la vraie table des
matières. Douze pièces n'avaient aucune page, dont les six playbooks
entiers (marketing, contenu, réseaux sociaux, vente, support, RH). Vous
aviez raison de le relever deux fois.

## Ce qui change

Le livre passe de 13 à 27 pages, réparties sur les mêmes quatre actes :

- **Acte I — Le Cadre** : inchangé (couverture, dédicace, sommaire).
- **Acte II — L'Identité** : 13 pages. Les cinq déjà là, plus le récit
  tarifaire, le système de biographies, l'autopsie concurrentielle, la
  pièce signature, la traduction investisseurs, le brief d'identité
  visuelle, la carte de positionnement (une vraie carte à deux axes, pas
  un texte), et le rapport d'intelligence audience.
- **Acte III — Le Déploiement** : 10 pages. Les quatre déjà là, plus les
  six playbooks — chacun avec son propre contenu, pas un texte générique
  recopié six fois.
- **Acte IV — La Signature** : inchangé.

Techniquement : plutôt que d'écrire quatorze fonctions SVG quasi
identiques, j'ai construit un gabarit générique (`MockupGeneric`) qui prend
un titre et des blocs de contenu (liste, citation, comparaison, tableau) et
rend la même grammaire visuelle que le reste du document. Une maquette sur
mesure reste écrite à la main pour la carte de positionnement, qui a besoin
d'un vrai visuel. Le contenu des nouvelles pages reste en anglais, comme
toutes les maquettes existantes — ce sont des aperçus stylisés du gabarit,
pas la traduction du vrai livrable.

## Fichiers inclus

- `app/[lang]/brand-narrative-architecture/page.tsx`
