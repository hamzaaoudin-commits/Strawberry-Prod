# Strawberry — /lieux : tout NOCTA, cette fois

Quatre fichiers.

## Comment je m'y suis pris cette fois

J'ai arrêté de reconstruire de mémoire. J'ai listé toutes les clés de
contenu du site NOCTA (`data-i18n` dans `index.html`, textes dans
`assets/i18n.js`) et comparé avec ce que j'avais livré. Quatre sections
entières manquaient.

## Ce qui manquait, et qui est là maintenant

**Le bandeau défilant.** J'avais mis les typologies de lieux en chips
figées dans le hero. Sur NOCTA c'est un bandeau qui défile en boucle,
en Bricolage semi-gras, avec pause au survol. Rétabli, et les chips
retirées puisqu'il les remplace.

**« La tournée ».** La plus grosse omission — une section entière, avec
quatre lieux types (restaurant à 19h30, cocktail bar à 23h50, club à
2h10, coffee shop à 8h05), chacun avec sa phrase d'ambiance en Instrument
Serif italique et ses quatre entrées : l'heure, la lumière, le casting,
les rituels. C'est la section qui prouve l'argument du site — le monde est
déjà là, il n'a simplement jamais été écrit. Elle se referme sur « Tout ça
existe déjà chez vous. Il faut juste l'écrire. »

**Les textes exacts.** Le constat, la différence, le comparateur : tous
repris mot pour mot depuis `i18n.js`, FR et EN, au lieu de mes
reformulations.

**La FAQ**, du patch précédent : les cinq questions de NOCTA dans leur
formulation d'origine, sous « Ce que les gérants me demandent », avec
l'accordéon à « + » corail qui pivote en croix.

## La charte

Fond `#0a0910`, dégradé corail → iris à 108°, les quatre polices d'origine
chargées par la page, wordmark géant avec lueur et scintillement, pastille
qui pulse, bokeh du hero et son voile, cartes 18px, boutons pilule,
surtitres en Space Mono.

## Vérification

Contrôle de types réel : zéro erreur. Chaque section vérifiée comme
effectivement rendue dans le composant, pas seulement définie.

## Ce qui reste hors périmètre de cette page

Le formulaire de contact de NOCTA (la page renvoie vers celui de
Strawberry) et les pages secondaires du site (prestations, réalisations,
formules) — le brief parlait d'une porte Lieux, pas d'un site complet.
Dites-moi si vous voulez que je reprenne aussi ces pages.
