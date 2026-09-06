# Strawberry — les portes visibles quoi qu'il arrive

Un fichier : `components/strawberry/doors-section.tsx`.

## Ce que j'ai vérifié

Le dépôt en ligne contient bien tout : `doors-section.tsx` existe,
`DoorsSection` est importé et rendu dans `app/[lang]/page.tsx` ligne 58,
et `app/[lang]/the-room/` est là. J'ai aussi passé tout le dépôt au
contrôle de types : aucune erreur venant de mon code, et le gros littéral
HTML de la page THE ROOM est intact (aucun caractère non échappé qui
casserait la compilation).

Autrement dit : le code est là et il est valide.

## Le seul risque venant de moi, supprimé

Les deux panneaux démarraient à `opacity: 0` et ne devenaient visibles que
lorsque l'observateur de scroll se déclenchait. Si cet observateur ne
part pas — script bloqué, section déjà dépassée au moment de
l'hydratation, navigateur récalcitrant — on obtenait deux panneaux
invisibles et un trou dans la page, exactement le symptôme décrit.

Corrigé : les panneaux sont visibles par défaut, et l'animation d'entrée
n'est plus qu'un enrichissement quand elle peut jouer. Elle ne conditionne
plus l'affichage.

## Si ça ne suffit pas

Alors le problème n'est pas dans le code mais dans le déploiement, et il
n'y a qu'un endroit où le voir : **le journal de build sur Vercel**.
Quand le build échoue, Vercel continue de servir la dernière version qui
compilait — donc aucune de vos modifications récentes n'apparaît, ni les
portes, ni THE ROOM, et le site a l'air figé. C'est exactement ce qui
s'était passé la dernière fois, et le journal donnait le fichier et la
ligne en cause.

Deux vérifications rapides de votre côté :

1. Sur Vercel, le dernier déploiement est-il en vert, ou en rouge avec
   « Failed to type check » ?
2. Ouvrez `/fr/the-room` directement. Si cette page s'affiche, le
   déploiement est bien passé et le souci est ailleurs. Si elle renvoie une
   404, le build n'est pas passé.

Si c'est rouge, envoyez-moi le journal comme la dernière fois et je corrige.
