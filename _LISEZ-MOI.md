# Strawberry — le lien à 2 900 € et le dernier délai

16 fichiers.

## Le nouveau lien Stripe

`https://buy.stripe.com/eVq7sEb2AfDe8Am2Raf7i0g` remplace l'ancien dans
les **8 fichiers** qui le portaient en dur.

## Trois entrées Stripe devenues une

`lib/config.ts` contenait encore :

- `architecture` → l'ancienne offre à 4 500 €
- `audit490` → qui pointait déjà sur le nouveau lien, mais sous un nom qui
  ne veut plus rien dire

Il ne reste que **`architecture`**, avec la nouvelle variable
d'environnement `NEXT_PUBLIC_STRIPE_ARCHITECTURE_URL`. Quatre pages qui
utilisaient `STRIPE_LINKS.audit490` sont recâblées — dont
`/documents/verso`, qui vendait donc l'ancienne offre.

**À faire de votre côté :** si vous aviez défini
`NEXT_PUBLIC_STRIPE_AUDIT_URL` ou `NEXT_PUBLIC_STRIPE_AUDIT490_URL` sur
Vercel, elles ne sont plus lues. Définissez
`NEXT_PUBLIC_STRIPE_ARCHITECTURE_URL`, ou laissez la valeur par défaut qui
est déjà la bonne.

## Le « sous 7 jours » que vous voyiez

Ce n'était pas le bandeau final mais la ligne **sous le bouton d'achat** :
« Remboursable sous 7 jours ». Elle datait d'un produit à 490 € qu'on
pouvait rendre sans conséquence.

Elle porte maintenant la garantie qu'on a définie : **« Deux révisions
incluses · Livré le 21e jour au plus tard, ou remboursé »**.

## Trois autres délais périmés

- La FAQ « Combien de temps ça prend ? » répondait **sept jours**. Elle
  détaille maintenant le calendrier : trois semaines, document au jour 15,
  relecture au jour 20.
- L'exemplaire VERSO annonçait sept jours, et proposait de **déduire les
  2 900 € d'une architecture complète** qui n'existe plus.
- Un bouton « Commander l'audit » subsistait dans le HTML du gabarit des
  pages d'offres, échappé au renommage.

## Les CGV recalculées

L'article de remboursement partiel plafonnait à **30 %, soit 1 350 €** —
30 % de 4 500 €. À 2 900 €, c'est **870 €**. Corrigé dans les deux
langues.

C'est le genre d'erreur qui vous coûte cher exactement le jour où elle
sert.

## Vérification

Plus aucune occurrence de « sept jours », « 7 jours » ni de l'ancien lien.
Contrôle de types lu sans filtre : uniquement des modules absents de mon
environnement.
