# Strawberry — tour 19

1 fichier. Glissez le dossier `components`, pas son contenu.

## Ce qui change

L'Atlas devient une vraie notification, pas juste une carte plus compacte
posée dans le défilement :

- **Elle reste invisible tant qu'on n'a pas scrollé jusqu'à elle**, puis
  apparaît avec un léger rebond — pas un simple fondu. Une lueur rouge
  s'allume derrière elle au même moment.
- **Le bouton de fermeture (×)** s'ajoute au lien texte « Non merci » —
  deux façons d'ignorer, comme une vraie notification.
- **La fermeture est animée** : la carte se réduit et s'efface avant de
  disparaître, plutôt qu'un arrêt net.
- **Le « 30 » devient un vrai repère visuel**, à côté du texte plutôt que
  noyé dedans.
- Respecte toujours les préférences de mouvement réduit : sans animation
  demandée, la carte s'affiche directement.

Le bouton du hero reste retiré, comme convenu : il double celui déjà présent
en haut de page, inutile de l'avoir deux fois.
