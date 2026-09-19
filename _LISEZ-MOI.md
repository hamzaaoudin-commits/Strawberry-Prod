# Strawberry — le questionnaire, six corrections

2 fichiers.

## 1. La faute

« Où **en est** la plupart de vos acheteurs » → « Où **en sont** la plupart
de vos acheteurs ». *La plupart* commande le pluriel.

J'ai passé les soixante libellés au crible pour en chercher d'autres —
accords, tournures, ponctuation double sans espace insécable. C'était la
seule.

## 2. Le bouton Continuer

Il était rouge en permanence, y compris avant qu'on ait répondu. On
cliquait dans le vide sans comprendre pourquoi rien ne se passait.

Il ne prend la couleur de marque que lorsque la réponse est valide.
Éteint, il devient une indication : il reste quelque chose à remplir.

## 3. Les quatre terrains illustrés

Quatre lignes de texte se ressemblent et se lisent mal en diagonale.
Chaque option porte maintenant un pictogramme SVG :

- **Une marque** — un bloc plein, l'entreprise comme masse
- **Un produit** — une boîte en perspective, l'objet fabriqué
- **Un lieu** — une porte ouverte
- **Un nom propre** — un trait de signature

Dessinés en SVG et non en emoji : un emoji change de rendu selon le
système et casse la charte. Ils prennent le rouge de marque quand l'option
est sélectionnée.

## 4. L'en-tête permanent

**ONBOARDING · Un lieu** s'affiche en haut de chaque écran, en mono.

Sur trente écrans on oublie ce qu'on remplit — et le terrain choisi au
départ conditionne la moitié des questions. L'afficher en continu évite le
doute au vingtième écran.

## 5. La page langage

Cinq curseurs identiques empilés, tous avec une barre rouge pleine : on ne
voyait pas où l'on avait déplacé quoi, et le rouge donnait l'impression
que tout était déjà répondu.

- **Le pôle vers lequel on penche s'allume**, l'autre s'éteint. On lit sa
  réponse sans regarder la position du curseur.
- **Un repère au centre** marque le point neutre, avec un tiret quand on
  n'a pas bougé — un curseur laissé au milieu se distingue d'un curseur
  posé volontairement.
- **Un filet entre chaque axe**, ce qui casse l'effet de mur.
- Pas de pseudo-précision : le pas passe à 5.

## 6. Le déploiement accepte plusieurs réponses

De meilleurs mots ne changent presque jamais une seule surface. Forcer un
choix unique obligeait le client à trancher arbitrairement, et vous privait
de l'information la plus utile pour hiérarchiser les mouvements.

Le composant gérait déjà le multi-choix — il suffisait de l'activer. La
question est raccourcie et porte la mention « Plusieurs réponses
possibles ».

## Vérification

Contrôle de types : zéro erreur.
