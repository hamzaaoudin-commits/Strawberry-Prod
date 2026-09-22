# Strawberry — le vrai carrousel, enfin

1 fichier. Cette fois c'est le design complet, pas seulement les icônes.

## Ce qui manquait la fois précédente

J'avais les icônes, mais pas les cartes en accordéon qu'on glisse à la
souris, pas les points de navigation qui s'allongent en dégradé, pas les
flèches, pas l'effet de survol sur les cartes. Un habillage, pas le
design.

## Ce qui est repris cette fois, précisément

**Le HTML** — les cinq cartes, recopiées depuis l'historique du dépôt,
avec leurs icônes SVG dessinées à la main.

**Le CSS** — uniquement les règles que ces cartes utilisent : `.story-*`,
`.chapter`, `.ch-list`, les dégradés radiaux propres à chaque carte, le
compteur en dégradé. Posées dans une balise `<style>` scopée sous
`.straw-method`, pas dans un fichier chargé globalement.

Je vous dois une explication sur ce point, parce que c'est la partie qui
a motivé mon hésitation la dernière fois. **Je n'ai toujours pas chargé
`nocta/styles.css` dans son entier**, et je l'ai vérifié une seconde
fois avant d'écrire ce fichier : sur toutes les classes que cette section
utilise réellement, une seule paire (`.reveal`, `.section`) existe aussi
côté site moderne — et les deux y font exactement la même chose des deux
côtés. Ce n'est donc pas un choix de facilité : charger le fichier entier
aurait aussi redéfini `.tour-scene`, `.tour-pin`, `.ts-k` — les classes de
la tournée qui vit juste au-dessus sur cette page — et cassé son style à
elle. Prendre uniquement ce dont cette section a besoin évite ça sans
rien perdre du design.

**Le glissement à la souris** — la fonction qui gère le glisser-déposer,
les points actifs et les flèches, copiée depuis `app.js` : une
soixantaine de lignes, scopées à la classe `.story`. Le reste d'`app.js`
(le canvas de fond animé, l'inclinaison 3D des cartes au survol, les
boutons magnétiques) n'est pas repris : il cible `.card` et `.btn`, des
classes utilisées partout ailleurs sur le site moderne, et l'activer
aurait collé ces effets à tous les boutons et cartes de la home, pas
seulement à cette section.

## Ce qui manque encore, et pourquoi je vous le dis plutôt que de l'ajouter en douce

**Le mode épinglé plein écran** — celui qui transforme le glissement en
défilement vertical capturé sur trois hauteurs d'écran (la classe
`.pin-on`). Sur un gabarit de terrain, cette section était seule sur la
page ; ici, elle vit entre d'autres sections modernes qui ont leur propre
logique de défilement, et l'épingler risquerait d'entrer en conflit avec
elles. Le carrousel — cartes, icônes, glissement, points, flèches — est
identique en tout point à l'original. Seul cet effet d'épinglage reste
dehors. Dites-moi si vous le voulez quand même, une fois que vous aurez vu
le reste tourner.

## Vérification

Contrôle de types : zéro erreur. Les variables de police (`--font-mono`,
`--font-serif`) et la classe utilitaire `.section` confirmées comme
appartenant déjà au système moderne du site.
