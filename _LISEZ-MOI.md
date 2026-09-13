# Strawberry — les guillemets cassés dans les extraits

3 fichiers.

## Le bug

Votre capture montrait `\u201eSeize semaines...\u201c` affiché tel quel au
milieu du texte.

C'est ma faute, et la cause est précise : j'ai écrit les guillemets sous
forme de séquences d'échappement `\u201e`. Dans un fichier **JavaScript**,
le moteur les convertit au chargement — c'est pour ça que ça marchait
dans `i18n.js`. Mais mon script les a écrites **littéralement** dans les
fichiers TypeScript, où elles ne sont que du texte déjà encodé. Elles
s'affichaient donc telles quelles.

**60 séquences converties** en vrais caractères sur les trois pages.

## Un second défaut trouvé en corrigeant

`\u201e` n'est pas le guillemet français : c'est le **guillemet-virgule
bas allemand**. Mes citations internes étaient donc en `„…“`, une
convention allemande, à l'intérieur de chevrons français.

**8 paires corrigées** en `“…”`, la convention attendue en français à
l'intérieur de « ».

Vérifié après coup : ouvrants et fermants s'équilibrent exactement sur les
trois pages, et plus aucun guillemet bas ne subsiste.

## Ce que j'en retiens

Le contrôle de types ne voit rien ici — une chaîne reste une chaîne, quel
que soit son contenu. Comme pour le bloc de statistiques supprimé par une
expression régulière, c'est une erreur qui ne se voit qu'à la lecture du
rendu. Je relis désormais le texte produit, pas seulement le code.

## Vérification

Contrôle de types : zéro erreur.
