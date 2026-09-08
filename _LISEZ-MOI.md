# Strawberry — retour à la home Marques, THE ROOM dans le hero

8 fichiers.

## Ce qu'on annule, et pourquoi

La page d'entrée à deux portes coûtait deux choses que je n'avais pas
signalées avant de la construire :

1. **Le référencement de la racine.** `/` portait le hero, le diagnostic,
   l'offre, les statistiques, le livre, la FAQ — tout le texte sur lequel
   Google vous indexe. Un écran de choix de quelques lignes l'avait
   remplacé.
2. **Un clic imposé avant toute proposition de valeur.** Vous m'aviez dit
   peu avant « on met trop de temps avant de présenter l'offre » ; j'avais
   fait l'exact inverse.

## La structure rétablie

- **`/`** — la page d'accueil telle qu'elle était : hero, diagnostic,
  offre, tout. Elle redevient la porte Marques et récupère son
  référencement.
- **`/marques`** — redirection vers `/`. La route a existé publiquement le
  temps de l'essai, autant ne casser aucun lien.
- **`/the-room`** — inchangée.

## La seconde porte, sur une ligne

Dans le hero, juste sous le paragraphe d'accroche : « Vous tenez un lieu ?
**THE ROOM →** ». Visible dès la première seconde, sans rien retarder pour
les autres.

Une ligne plutôt qu'un second bouton : deux boutons de même poids dans un
hero divisent l'attention et affaiblissent l'action principale, qui reste
la commande.

## Trois nettoyages qui allaient avec

- `/marques` retiré du sitemap — ce n'est plus une page.
- Les ancres `/marques#contact` remises sur `/#contact` : le formulaire est
  revenu sur la racine.
- Entrées MARQUES / BRANDS retirées du menu et du pied de page — la racine
  est la porte Marques, une entrée de menu vers elle ferait doublon avec le
  logo.

## Un défaut que j'ai corrigé au passage

Les deux CTA de THE ROOM vivent dans du HTML injecté brut, où
`LocaleLink` ne s'applique pas : ils pointaient vers `/#contact` sans
préfixe de langue, donc un visiteur anglophone atterrissait sur la version
française du formulaire. La langue est maintenant injectée dans ces liens
au rendu.

## Vérification

Contrôle de types réel : zéro erreur.

## À supprimer

`components/strawberry/doors-section.tsx` — plus appelé nulle part.
