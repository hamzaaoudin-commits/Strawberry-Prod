# Strawberry — tour 23

4 fichiers, un seul glisser-déposer. Build validé.

Glissez le dossier `app` et le dossier `components`, jamais leur contenu.

## Ce qui change

**« Les Maisons » est retirée du site.** `/maisons` redirige maintenant vers
`/brand-narrative-architecture` — un zip ne peut pas supprimer un fichier, la
page reste donc présente mais ne fait plus que rediriger. Le lien a disparu
du pied de page, et la route est sortie du sitemap.

## Ce que j'ai laissé de côté

`lib/config.ts` garde encore l'export `HOUSES` (le registre lui-même) et
`components/strawberry/houses-strip.tsx` (un composant déjà inutilisé
depuis plusieurs tours). Aucun des deux n'est appelé nulle part sur le site
— du code mort sans risque, pas une page active. Dites-moi si vous voulez
que je les retire aussi, ou si vous préférez les garder au cas où l'idée
revienne un jour.
