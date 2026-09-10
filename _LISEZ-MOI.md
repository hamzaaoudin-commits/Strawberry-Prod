# Strawberry — la page artistes parle au nom du studio

Deux fichiers : les copies FR et EN de la page `/artistes`.

## Le « je » a disparu

C'était la page la plus personnelle du site : 45 formulations à la
première personne en français, 57 en anglais. « Je m'appelle Hamza »,
« Je n'accompagne que six artistes », « Mon propre travail ».

Tout est passé au « nous », dans les deux langues. Vérifié : **zéro
occurrence restante**.

## Trois pièges que la conversion a créés, et que j'ai corrigés

Une substitution mécanique casse les accords. J'ai relu ce que ma propre
conversion produisait et trouvé :

- **« Nous ne revendique aucun droit »** — le verbe était resté au
  singulier. Cinq cas de ce type au total (« ne sais », « ne saurais »,
  « ne peux »), tous corrigés.
- **« Puis-je arrêter quand nous voulons ? »** — une question de FAQ, donc
  posée *par le client*. Ma conversion l'avait transformée en absurdité.
  Restaurée en « Puis-je arrêter quand je veux ? » : dans une FAQ, le
  « je » du client est correct et doit rester.
- **« Mon propre travail »** → « Notre propre travail », que le premier
  passage avait manqué.

C'est le genre d'erreur qu'un remplacement automatique produit
silencieusement, et qui se lit très mal en ligne.

## La signature

« Je m'appelle Hamza El Jaouahiry » devient **« Strawberry Production est
dirigé par Hamza El Jaouahiry »** (et son équivalent anglais). Le studio
est nommé, le fondateur reste visible — mais c'est le studio qui parle.

## L'état du site

Les trois terrains parlent maintenant d'une seule voix, au nom d'un seul
studio :

- `/marques-entreprises` — écrite au « nous » dès l'origine.
- `/the-room` — convertie au tour précédent.
- `/artistes` — convertie ici.

## Ce qui reste, et que je ne peux pas décider

L'argumentaire amont de `/artistes` (le cycle, la preuve, les objections)
a été écrit pour vendre un abonnement mensuel. La voix est bonne
maintenant, mais certaines sections argumentent encore pour une offre qui
n'existe plus — par exemple les objections sur l'engagement au mois.

Ça demande une réécriture éditoriale, pas une substitution. Dites-moi si
vous voulez que je m'y attaque, et sur quelles sections.

## Vérification

Contrôle de types : zéro erreur.
