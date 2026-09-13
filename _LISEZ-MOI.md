# Strawberry — le défilement de la tournée

1 fichier.

## Pourquoi c'était illisible

Ma formule d'opacité était `1 - distance × 1.35`. À mi-chemin entre deux
scènes, chacune est à une demi-distance, donc chacune se retrouvait à
**32 % d'opacité en même temps** : deux textes superposés, et ça sur la
moitié du parcours. C'est exactement ce que montre votre capture — BRAND
et THE PRODUCT l'un dans l'autre.

## Le nouveau fondu

**Un plateau, puis une chute rapide.** La scène reste pleinement visible
tant qu'elle est proche, s'efface sur les derniers 52 % de distance, et
atteint zéro avant que la suivante ne devienne lisible. Il n'y a plus de
moment où deux textes se disputent l'écran.

**Une courbe en S** (`t²(3−2t)`) plutôt qu'une droite. Une chute linéaire
laisse deux cassures perceptibles — au départ et à l'arrivée du fondu.
La courbe les supprime : c'est ce qui fait la différence entre un
changement qu'on subit et un qu'on ne remarque pas.

## Deux réglages de mouvement

**Le déplacement passe de 7vh à 3,5vh.** À 7, le texte glissait encore
sous les yeux pendant qu'on le lisait.

**Le zoom passe de 5,5 % à 3 %**, et la dérive du fond de 5 % à 3 %. Le
relief reste, l'agitation part.

## Un détail

Une scène effacée gardait ses liens cliquables, superposés à la scène
visible. `pointer-events` est désormais coupé sous 5 % d'opacité.

## Vérification

Contrôle de types : zéro erreur.
