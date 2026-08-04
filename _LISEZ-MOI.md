# Strawberry — tour 8

15 fichiers, un seul glisser-déposer. Build validé.

Glissez les **dossiers** (`app`, `components`, `lib`), jamais leur contenu.

## Ce qui change

- `/lectures` retirée : plus de démonstration publique des fiches RADAR. Les
  trois fichiers de cette route redirigent maintenant vers `/radar`.
- `/offres` retirée : la page comparant les quatre offres redirige vers
  `/brand-narrative-architecture`. Chaque offre garde sa propre page,
  accessible depuis le pied de page.
- RADAR : toute la copie qui annonçait « chaque jour » est réécrite autour
  d'une base de plus de 350 marques déjà disséquées, cherchable — cohérent
  avec le fait que vous n'aurez plus à publier au quotidien.
- La newsletter RADAR (une lecture gratuite par semaine) apparaît directement
  sur `/radar`, sous la carte d'abonnement — c'est désormais la seule porte
  gratuite.
- Les cinq applications RADAR sont reconstruites en registre éditorial, avec
  une icône propre à chacune, au lieu de cinq rectangles identiques.
- Le titre « Six blocs. Elle ne change jamais. » devient « La même grille, à
  chaque fois — pour que vous appreniez à la lire. »
- Pied de page : « Accès abonné RADAR », « Les documents publiés », « Toutes
  les offres » et « Les lectures » sont retirés.
- `/strawberry-method` : l'acronyme éclairé (les grandes lettres gravées)
  passe en tout premier, avant la section « Pourquoi une méthode ».

## Vérifications après dépôt

- `/fr/lectures` et `/fr/offres` doivent rediriger, pas afficher de 404.
- `/fr/radar` : la section applications doit montrer cinq lignes avec une
  icône chacune, pas trois colonnes de rectangles.
- `/fr/strawberry-method` : les grandes lettres S.T.R.A.W. doivent apparaître
  juste après le hero, avant tout le reste.
