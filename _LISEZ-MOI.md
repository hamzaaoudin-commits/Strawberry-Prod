# Strawberry — les trois maisons, redessinées

5 fichiers.

## Ce qui rendait ça plat

Un paragraphe uniforme, même graisse du début à la fin, aucune ligne qui
accroche l'œil. Le refus, le coût et le résultat se noyaient dans le même
bloc de texte gris.

## La nouvelle structure, en trois temps visuels

**Le nom de la maison** en petit, espacé, discret — un repère, pas un
titre.

**Le refus**, seul, en gros caractères, en blanc plein — c'est la phrase
qu'on doit pouvoir lire en diagonale et retenir. Une bordure rouge sur le
côté gauche de la carte le signale avant même qu'on ait commencé à lire.

**Puis, séparés par un filet, deux lignes étiquetées :**

> LE RISQUE
> Parler de sport plutôt que de produit, quand chaque concurrent vantait
> l'amorti ou la respirabilité.
>
> CE QUE ÇA A DONNÉ
> On reconnaît une publicité Nike avant même d'avoir vu le logo.

La seconde ligne est en blanc plein et son étiquette en teinte corail —
c'est elle qui doit rester en mémoire en quittant la carte.

## Une erreur trouvée et corrigée avant livraison

En construisant le contenu de THE ROOM (la porte « lieux », qui vit dans
le dictionnaire partagé `i18n.js`), j'ai supposé que son bloc anglais
précédait le bloc français — comme c'est le cas dans les fichiers propres
à chaque terrain. **C'est l'inverse dans ce fichier précis** : le
commentaire en tête du fichier le dit clairement, « le français est écrit
en dur, l'anglais est injecté au clic » — et le français vient bien en
premier. Ça a inversé les trois cas et les deux étiquettes, résultat
vérifiable : la ligne `case.riskLabel` disait "The risk" à l'intérieur du
bloc français.

Repéré en relisant le fichier généré plutôt qu'en le supposant correct,
corrigé en traitant chaque bloc par sa position réelle plutôt que par une
hypothèse. Les trois pages de terrain à fichier dédié n'avaient pas ce
problème — leur ordre était bien fr puis en, vérifié une par une.

## Vérification

Contrôle de types : zéro erreur. Toutes les clés `data-i18n` du gabarit
confirmées présentes dans le dictionnaire. Aucune trace de l'ancien champ
`case.N.body`, remplacé proprement par les trois nouveaux champs partout.
