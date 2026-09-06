# Strawberry — /lieux : NOCTA porté, plus réécrit

8 fichiers, dont les 4 assets de NOCTA copiés sans modification.

## J'ai changé de méthode, parce que la mienne était mauvaise

Depuis trois tours je **réimplémentais** le design de NOCTA à la main, et
j'en perdais un morceau à chaque fois : sections oubliées, animations
approximées, textes reformulés. Vous aviez raison de vous agacer.

Cette version ne réécrit rien. Elle **porte** le site :

- `public/nocta/styles.css` — les 40 Ko de CSS d'origine, à l'octet près.
- `public/nocta/app.js` — les 24 Ko de JavaScript d'origine : le canvas
  bokeh animé du hero, le révélateur mot à mot du manifeste, les compteurs
  de chiffres, le parcours épinglé qui défile, le comparateur, l'accordéon
  de la FAQ, les révélations au scroll.
- `public/nocta/i18n.js` et `config.js` — la bascule FR/EN d'origine.
- Le HTML de la home injecté tel quel, avec ses vraies classes.

Ce sont donc exactement les animations et le design du site, y compris
celles que je n'aurais jamais réimplémentées à l'identique — le bokeh en
canvas et le parcours épinglé en particulier.

## Les deux seules modifications au HTML

Le wordmark « NOCTA » devient « LIEUX ». Le formulaire de contact est
retiré : la page renvoie vers celui du studio.

## Cloisonnement

Le CSS de NOCTA redéfinit `body` et `html`. Il est chargé **uniquement sur
cette route**, jamais globalement, pour ne pas déteindre sur le reste du
site. Idem pour ses quatre polices.

## Vérification

Contrôle de types réel : zéro erreur. Présence vérifiée dans le HTML
injecté : canvas bokeh, marquee, manifeste, parcours épinglé, comparateur,
les 5 entrées de FAQ, l'indice de défilement.

## À vérifier de votre côté après déploiement

Les fichiers de `public/nocta/` doivent être servis tels quels par Vercel
(c'est le comportement par défaut pour `public/`). Si une animation ne
démarre pas, ouvrez la console : ce sera un 404 sur un de ces quatre
fichiers, pas un problème de code.
