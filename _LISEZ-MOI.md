# Strawberry — le questionnaire, repris de fond en comble

4 fichiers. Chaque point de votre message est traité, et le parcours a été
testé de bout en bout (voir plus bas).

## Le défaut derrière plusieurs de vos remarques

Les chapitres étaient découpés d'après l'étiquette de chaque question, et
ces étiquettes alternaient (« La vérité », « Langage », « La vérité »,
« Identité & langage », « La vérité »…) : **une vingtaine d'écrans de
chapitre pour trente questions**. Les textes que j'avais écrits portaient
sur des étiquettes qui n'existent pas (« Fondation », « Concurrence ») ;
partout ailleurs, on retombait sur « quelques questions pour la suite du
document ». Les barres des six pièces cherchaient les mêmes étiquettes
fantômes, et le mode « plein silence » des trois questions fondatrices ne
se déclenchait jamais.

**Le parcours est maintenant en sept chapitres, définis explicitement :**
1. Les fondations — identité, conviction, rupture, ennemi
2. Le champ — positionnement, conscience, maturité, concurrents
3. La voix — archétypes, ton, interdits, mots
4. L'audience — décideur, personne exacte, risque, repoussoir
5. Le quotidien — modèle, prix, traction, contenu, support, recrutement
6. Le déploiement — où servir d'abord, portrait visuel, références
7. La preuve — preuve, ambition, portrait du fondateur, liens

Même découpage sur les quatre terrains. Chaque chapitre dit **pourquoi il
est nécessaire** et **quelle pièce du document il nourrit** (« Nourrit la
pièce 05 — Les playbooks »). La citation du livre reste, plus discrète,
en dessous. Le premier chapitre avait aussi un défaut : il n'apparaissait
jamais — on passait de la couverture directement à la question 1.

Conséquence utile : la conviction, la rupture et l'ennemi sont maintenant
posés *avant* le positionnement, donc le miroir qui rappelle une réponse
précédente fonctionne enfin (il citait avant une réponse pas encore donnée).

## Vos autres remarques

**« Vous venez de décider » en deux pages.** Page 1 : le titre et la
première phrase. Page 2 : la seconde, la durée, le choix du terrain. Les
blocs prénom / maison / bon de commande (morts puisque le lien est le même
pour tous) sont supprimés.

**Les choix en cartes, tout visible.** Plus de piste à faire défiler : une
grille où les douze cartes se voient d'un regard. Le conteneur s'élargit
pour les questions à choix.

**Les archétypes expliqués.** Chaque carte porte une phrase qui dit ce que
l'archétype veut dire, avec une ou deux marques de référence (« Le
Souverain — Commande, structure, incarne l'autorité et le prestige. Rolex,
Mercedes. »). J'ai écarté les exemples qui se discutent.

**Des jauges refaites.** Plus le curseur natif (barre rouge épaisse, gros
rond). Chaque axe est un indicateur à onze barres entre deux pôles : le
centre est le neutre, les barres s'allument en dégradé rouge jusqu'à la
position choisie, le pôle vers lequel on penche passe en grand et en
blanc. Se règle à la souris (clic ou glissement), au doigt, et au clavier
(flèches). La valeur reste un nombre de 0 à 100 pour Make.

**Autant de liens que voulu** dans « Accès » : « + Ajouter un lien »
(dix au plus, chacun retirable). Ils partent vers Make en `link_extra_1`,
`link_extra_2`… et `link_extra_count`, et figurent dans l'e-mail.

**La page de fin.** Elle existait, mais elle était maigre : elle s'arrêtait
sur un lien de téléchargement, ne disait pas ce qui se passe ensuite, et
la date s'affichait en anglais. Elle comporte maintenant :
- la référence du dossier, **celle renvoyée par le serveur** (la même que
  dans Make et dans l'e-mail) ;
- les dates **en français** ;
- **« Ce qui se passe maintenant »** : demain (dépouillement) · jour 15
  (remise du document) · jour 20 (une heure de relecture, deux tours de
  révision) · jour 21 (livraison finale, sinon remboursement), chacune
  avec sa date calculée ;
- le téléchargement de la première page, et un lien « Retour au site ».

## Si la page de fin n'apparaît pas chez vous

Le questionnaire n'y arrive que si l'envoi réussit. **Vérifiez que
`FORMSPREE_ID` ou `MAKE_WEBHOOK_URL` est défini sur Vercel** : si aucun
des deux ne l'est, le serveur répond « non configuré » et le client voit
un message d'erreur à la place de la page de fin. Autre cas : deux envois
à moins de 30 secondes l'un de l'autre déclenchent la limite anti-spam.

## Deux défauts corrigés au passage

- Après l'envoi, le brouillon enregistré n'était pas effacé (la clé de
  suppression oubliait le terrain) : le bandeau « Vous aviez commencé »
  serait réapparu chez un client qui avait fini.
- L'ordre des questions ayant changé, les brouillons enregistrés avant
  pointeraient sur la mauvaise question : la clé de stockage est versionnée.

Les écrans qui dépendaient d'un minuteur JavaScript pour devenir visibles
(cartes des archétypes, questions, page de fin) passent en animations CSS :
si un script tarde, la page reste lisible.

## Comment c'est vérifié

J'ai fait tourner le **vrai composant** dans un navigateur simulé et
parcouru les trente questions jusqu'à la signature : couverture en deux
pages, sept chapitres, jauge au clavier, liens ajoutés, signature, page de
fin, puis la version anglaise. J'ai aussi passé la route serveur au banc
pour lire exactement ce qui part vers Make. Contrôle de types : zéro
erreur, en mode strict.

**Ce que je n'ai pas pu voir : le rendu visuel réel** — le dessin exact
des jauges, la grille des cartes, les animations. Un navigateur simulé
prouve que ça fonctionne, pas que c'est beau. Si un détail ne vous plaît
pas à l'écran, dites-le-moi avec une capture.
