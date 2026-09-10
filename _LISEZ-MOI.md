# Strawberry — les trois terrains partagent la page THE ROOM

9 fichiers.

## Comment j'ai fait, cette fois

Je n'ai rien réimplémenté. Le HTML de THE ROOM, son CSS
(`public/nocta/styles.css`) et son JavaScript (`public/nocta/app.js`) sont
**partagés tels quels** par les trois pages, via un gabarit unique :
`components/terrain/terrain-page.tsx`.

Canvas bokeh, tournée épinglée, comparateur à glisser, accordéon,
révélations au scroll, bandes cinéma : identiques au caractère près, parce
que c'est littéralement le même code. Il n'y a plus rien à perdre en
route — c'est l'erreur que j'ai commise trois fois en réécrivant à la main.

## Comment le texte change

Le site NOCTA porte déjà tout son texte sur des attributs `data-i18n`, et
`i18n.js` expose son dictionnaire sur `window.NOCTA_I18N.DICT`. Chaque
page de terrain n'a donc qu'à fournir **les clés qu'elle remplace** — le
reste est hérité.

Conséquence utile : les clés non surchargées sont celles qui parlent du
studio, du prix, du délai, de la méthode. Elles sont vraies quel que soit
le terrain, et elles restent donc rigoureusement identiques sur les trois
pages. C'est l'unification garantie par la structure, pas par la
discipline.

Autre conséquence : une correction de mise en page faite une fois corrige
les trois pages.

## Les deux nouvelles pages

**`/marques-entreprises` — BRAND.** « Votre offre tient. Votre récit,
personne ne l'a écrit. » Le constat sur le devis comparatif, les cinq
blocs de l'audit adaptés (le champ concurrentiel, la phrase qui range, ce
que le prix dit avant vous).

**`/the-name` — THE NAME.** « On aime ce que vous faites sans savoir dire
ce que vous êtes. » Le constat sur les sorties qui ne s'additionnent pas,
les blocs adaptés à une pratique (la zone plutôt que le marché, la bio
plutôt que la page d'accueil).

`/artistes` redirige vers `/the-name` : l'ancienne page portait la mise en
page de MOMENTUM, soit une charte de plus à maintenir pour un terrain qui
n'avait aucune raison d'avoir la sienne.

Menu, pied de page, tournée, sitemap et préfixes de langue mis à jour.

## À supprimer

`components/momentum/` et `lib/momentum/` ne servent plus. La palette et
l'échafaudage MOMENTUM dans `globals.css` non plus — je ne les ai pas
retirés pour ne pas risquer de casser autre chose dans le même patch.

## Vérification

Contrôle de types : zéro erreur.
