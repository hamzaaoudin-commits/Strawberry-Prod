# Strawberry — THE ROOM vend l'audit à 490 €

Deux fichiers.

## Ce qui change

La section prix comparait « l'agence au mois » et « le sprint à
2 500–3 500 € ». La seconde carte devient **l'audit narratif à 490 €** :

> **L'audit narratif** — 490 €, une fois
> On lit votre lieu comme le fait votre quartier : ce qu'il raconte
> aujourd'hui, ce que les gens en retiennent, et les mouvements qui
> changent ça. Un document de vingt à trente pages, livré en sept jours.
> **Le même audit que pour une marque, une entreprise ou une personne.**

Avec un bouton qui mène à `/brand-narrative-audit`, comme partout
ailleurs.

**Le sprint n'est pas supprimé, il devient la suite.** Une ligne sous les
deux cartes : « Ensuite, si vous voulez qu'on écrive le monde du lieu et
qu'on livre le système qui permet à votre équipe de le tenir seule : le
sprint, 2 500 à 3 500 €, deux à trois semaines. » Même logique que
l'Architecture après l'audit sur le volet marques.

**Le titre de section** disait « Une fois, pas tous les mois » — un
argument construit contre l'abonnement d'agence, qui portait sur le
sprint. Il devient « Le même prix que pour tout le monde », qui sert
l'unification. La carte agence reste : le contraste avec l'abonnement
mensuel garde toute sa valeur.

## Le site est cohérent

Les quatre terrains mènent maintenant au même audit à 490 €, sur la home
comme sur chaque page d'atterrissage. Les deux high tickets —
l'Architecture et le sprint THE ROOM — apparaissent partout comme des
suites après l'audit, jamais comme des offres concurrentes.

## Détail technique

Le lien du bouton utilise le jeton `__LANG__`, déjà en place sur cette
page : le HTML est injecté brut, donc les liens doivent porter la langue
eux-mêmes. Un visiteur anglophone reste en anglais.

## Vérification

Contrôle de types : zéro erreur. Le fichier de traductions a aussi été
passé au contrôle syntaxique — c'est du JavaScript brut servi tel quel,
donc une virgule oubliée aurait cassé la page sans que TypeScript le voie.
