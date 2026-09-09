# Strawberry — correctif du build : /artistes

5 fichiers. Ce patch corrige uniquement l'erreur de build ; il vient
par-dessus le patch précédent, qu'il ne remplace pas.

## L'erreur

```
Attempted to call isLang() from the server but isLang is on the client.
Export encountered an error on /[lang]/artistes/page
```

La page `/artistes` est un composant **serveur**, et elle importait
`isLang` depuis `@/lib/i18n` — un module qui porte `"use client"`. Le
prérendu échouait donc sur cette page et faisait tomber tout le build.

C'est une différence entre les deux dépôts : chez MOMENTUM, `isLang`
vivait dans un module neutre. Chez Strawberry, elle vit dans
`lib/lang.ts`, dont l'en-tête dit d'ailleurs explicitement qu'il est
« deliberately kept out of any "use client" module » — exactement pour ce
cas. Mon portage n'avait pas ajusté l'import.

## Le correctif

`app/[lang]/artistes/page.tsx` importe désormais `isLang` et `Lang`
depuis `@/lib/lang`.

J'ai aussi aligné quatre composants portés (`diagnostic`, `footer`,
`offres`, `nav`) sur `@/lib/lang`. Leurs imports étaient des imports de
**type**, donc effacés à la compilation et sans risque réel — mais autant
ne laisser aucune ambiguïté entre modules client et serveur dans du code
qui vient d'ailleurs.

Vérifié au passage : aucun autre composant porté n'utilise de hook React
sans porter `"use client"`.

## Pourquoi mon contrôle ne l'avait pas vu

`tsc` vérifie les types, pas la frontière client/serveur de Next.js —
c'est une règle du framework, pas du langage. Seul un vrai `next build`
l'attrape, et je ne peux pas l'exécuter ici (les dépendances du projet ne
s'installent pas dans mon environnement, à cause d'un conflit de version
sur postcss présent dans le dépôt).

## Vérification

Contrôle de types : zéro erreur. Plus aucune référence à `@/lib/i18n`
dans les fichiers portés.
