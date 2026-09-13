# Strawberry — tous les titres en capitales

Le zip contient les fichiers modifiés. **18 fichiers touchés au total.**

## Cette fois, c'est toute la charte

Quand vous me l'aviez demandé la première fois, je ne l'avais appliqué
qu'au bandeau final — et vous m'aviez dit, à juste titre, que ça dénotait.
C'était vrai : un seul titre en capitales au milieu de titres en casse
normale, c'est celui-là qui devient l'exception.

Le changement est donc posé **au niveau des règles partagées** :

- `h-section` dans `globals.css` — la classe qu'utilisent la plupart des
  sections du site
- `h1, h2, h3` dans `nocta/styles.css` — les quatre pages de terrain

Plus les titres écrits en dur dans 18 composants, qui n'utilisaient pas
ces classes et seraient restés en casse normale.

## Trois réglages qui accompagnent la casse

Passer en capitales sans toucher au reste donne toujours un résultat sale.
Trois valeurs bougent :

**Le crénage passe de -0.02em à -0.005em.** La valeur serrée avait été
pensée pour le bas-de-casse, où les lettres se rapprochent naturellement ;
en capitales, elle les colle.

**L'interlignage se resserre** — de 1.12 à 1.06. Sans jambages
descendants, les lignes peuvent se rapprocher sans se toucher, et le bloc
gagne en densité.

**La taille baisse d'environ 10 %.** À casse égale, des capitales occupent
nettement plus de largeur : sans ça, plusieurs titres passaient sur une
ligne de plus.

## Une exception, assumée

Le wordmark des pages de terrain — BRAND, THE ROOM — garde son crénage à
-0.04em. À cette taille, les capitales supportent un serrage bien plus
fort sans se toucher, et c'est précisément ce qui fait sa densité.

## Vérification

Contrôle de types : aucune erreur nouvelle. Les seules remontées sont
préexistantes et propres à mon environnement.
