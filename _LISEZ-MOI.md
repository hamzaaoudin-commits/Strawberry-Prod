# Strawberry — un vrai mécanisme, pas une nouvelle retouche

5 fichiers. Vous aviez raison de le dire crûment : je traitais ça comme
un problème de typographie depuis le début, alors que la home a marché
parce que j'ai pensé en mécanismes — glisser, épingler, dévoiler en
séquence.

## Ce qui change vraiment cette fois

**Un bouton par cas, deux états.** « Ce que fait le secteur » et « Ce
qu'elle a fait », avec un fondu enchaîné entre les deux quand on clique —
la même logique de mise en contraste que le curseur Hier/Aujourd'hui de
la home, en clic plutôt qu'en glissement, pour rester fiable sur toutes
les tailles d'écran.

**L'effet qui dure reste toujours visible en dessous**, quel que soit
l'état affiché — c'est la ligne qu'on doit retenir en quittant la
section, donc elle ne se cache jamais derrière un clic.

Concrètement, pour Nike :
- **Ce que fait le secteur** (état par défaut) : « Dans les années 1980,
  l'argument publicitaire du sport était technique — amorti,
  respirabilité, poids de la semelle. »
- **Ce qu'elle a fait** (au clic) : « « Just Do It » ne décrit aucune
  caractéristique produit : c'est une conviction sur ce que ça fait de
  dépasser sa propre limite… »
- **Toujours visible** : « Près de quarante ans plus tard, la marque n'a
  jamais eu besoin de changer ce message pour rester pertinente. »

## Deux erreurs trouvées et corrigées avant de vous l'envoyer

**Un espace réservé oublié.** Le bouton disait littéralement
« Ce que {"{"}\$HOUSE{"}"} a fait » — un repère de rédaction jamais
remplacé. Corrigé en un libellé générique, puisque le nom de la maison
est déjà visible juste au-dessus.

**L'inversion de langue, une troisième fois.** En ajoutant les deux
libellés partagés à `i18n.js`, j'ai reproduit exactement l'erreur des
deux derniers patchs — un script de remplacement qui suppose l'ordre des
blocs au lieu de le vérifier. Cette fois je l'ai corrigé ligne par ligne,
en repérant explicitement où commence chaque bloc avant d'écrire quoi que
ce soit, et j'ai vérifié après coup que les dix-sept clés `case.*` du
bloc français sont bien toutes en français, une par une.

## Vérification

Contrôle de types : zéro erreur. Toutes les clés du gabarit confirmées
présentes dans les quatre dictionnaires. Le script de bascule extrait et
vérifié séparément avec `node --check` — sa syntaxe est valide, ce que le
contrôle de types ne peut pas voir puisqu'il ne le lit que comme une
chaîne de caractères.
