# Strawberry — tour 5

44 fichiers, un seul glisser-déposer. Déposez le contenu à la racine du dépôt.

Rappel important : dans la fenêtre d'upload GitHub, glissez les **dossiers**
(`app`, `components`, `lib`, `public`), jamais leur contenu. C'est ce qui avait
éparpillé onze fichiers à la racine la dernière fois.

## Une suppression manuelle, cette fois nécessaire

**Supprimez `public/sitemap.xml` depuis GitHub.** Tant qu'il existe, il masque
`app/sitemap.ts` et les lectures publiées chaque jour n'entrent pas toutes
seules dans le sitemap. Le fichier est à jour en attendant, mais il ne se
mettra pas à jour tout seul.

## Quatre valeurs à renseigner

Dans `lib/config.ts` ou en variables d'environnement Vercel :

- `NEXT_PUBLIC_STRIPE_ARCH_3X_URL` — le lien de paiement en trois fois. Tant
  qu'il est vide, la page de commande propose d'en parler par email plutôt que
  d'annoncer un fractionnement qui n'existe pas.
- `NEXT_PUBLIC_RADAR_TRIAL_DAYS` — mettre `7` UNIQUEMENT après avoir activé la
  période d'essai côté Stripe. Sinon le site promet un essai qui n'arrive pas.
- `NEXT_PUBLIC_BOOK_URL` et `NEXT_PUBLIC_STRIPE_BOUND_OBJECT_URL` — toujours
  en attente depuis le tour précédent.
- `HOUSES.nextNumber` est à 12 et `LIVE.radar.count` à 340 : ce sont des
  valeurs affichées publiquement comme vérifiables. Corrigez-les.

## Le registre des Maisons

`HOUSES.register` dans `lib/config.ts` ne contient que SILLAGE et VERSO,
déclarées maisons de démonstration. Ajoutez vos vraies maisons uniquement avec
leur accord écrit — la page le dit explicitement aux visiteurs.
