# Strawberry — les pages d'accueil du questionnaire, refaites et regardées

4 fichiers de code (cumulatifs avec sp142) + 9 captures dans `captures/`.

## Ce qui change vraiment cette fois : je regarde ce que je produis

Jusqu'ici je vérifiais que le code fonctionne, jamais à quoi il ressemble.
J'ai installé un vrai navigateur dans mon environnement : j'ai maintenant
fait des captures de chaque écran, à la largeur exacte de votre fenêtre
(920 px), sur téléphone et sur grand écran. Ma capture de votre page
« Vous avez commandé… » était quasi identique à la vôtre — et ce que j'y ai
vu, c'était une page plate : un paragraphe gris, des boîtes à peine
visibles, un bouton éteint.

## Vos trois demandes

**1 · La page que vous avez envoyée, et sa jumelle.** Les deux pages de la
couverture ont maintenant le niveau du seuil :
- *Page 1* — « VOUS VENEZ DE DÉCIDER **QUELQUE CHOSE.** » en grand, qui se
  remplit mot à mot, lueur rouge derrière, centrée à l'écran (elle était
  collée en haut avec 60 % de vide dessous).
- *Page 2* — « VOUS AVEZ COMMANDÉ **L'ARCHITECTURE** POUR… » ; quatre grandes
  cartes avec icône, dégradé propre et coche (la carte choisie s'illumine) ;
  trois chiffres (45–70 minutes · 30 questions · enregistré en continu) à la
  place d'une phrase ; la promesse (« pas de mauvaises réponses… ») en
  citation ; un bouton plein, avec la consigne « Choisissez d'abord ce que
  vous vendez » tant qu'on n'a pas choisi. Tout tient dans la hauteur de
  votre fenêtre.

**2 · Les cartes de choix : grandes, sur une seule ligne, sans défilement.**
4 ou 5 options : une seule rangée qui occupe toute la largeur. Les 12
archétypes : 4 par ligne sur 3 lignes, chacun avec sa description. Sur
téléphone, une colonne, et la hauteur des cartes s'adapte (210 px de vide
par carte, c'était un écran et demi pour cinq choix).

**3 · Toutes les questions en majuscules.**

## Défauts que seule une vraie capture m'a montrés

- **La lueur rouge du seuil était en haut à gauche**, pas derrière le titre :
  mon animation ajoutait un décalage à celui de Tailwind (corrigé — et cela
  datait de sp140).
- **Les jauges étaient de larges pilules plates** avec un gros rond au
  centre, pas les fines barres que j'avais décrites : refaites en 21
  graduations fines comme une règle, le rouge s'allume du centre à la
  position choisie, la graduation active se dresse avec sa lueur.
- **« Inconscien / t du problème »** : un mot coupé en deux dans les cartes à
  cinq colonnes. La police s'adapte désormais au nombre de colonnes.
- **Le grand numéro de chapitre fantôme** passait en travers du texte ;
  il reste derrière le titre.
- **Le texte d'accueil anglais** était une ancienne version en un seul
  paragraphe : aligné sur le français.
- Titres de cartes désalignés selon la longueur de leur description :
  alignés en haut.

## Ce que je n'ai PAS pu vérifier

Mes captures viennent de Chrome ; **vous utilisez Safari**. Les polices sont
les bonnes (Bricolage Grotesque, Hanken Grotesk, Space Mono), mais de petites
différences de rendu sont possibles — notamment l'équilibrage automatique
des titres (`text-wrap: balance`, Safari 17.5 minimum). Si un détail diffère
chez vous, envoyez-moi une capture : je peux maintenant la comparer à la
mienne.

## Et si la page de fin n'apparaît pas

Elle apparaît (voir `6-page-de-fin.png`, atteinte en parcourant les 30
questions dans un vrai navigateur). Si ce n'est pas le cas chez vous,
vérifiez que `FORMSPREE_ID` ou `MAKE_WEBHOOK_URL` est défini sur Vercel.
