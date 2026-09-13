# Strawberry — plus aucune italique sur le site

Le zip contient tous les fichiers modifiés.

## Ce que j'avais mal compris

Quand vous m'avez dit ne pas aimer mon usage de l'italique, j'ai retiré
**uniquement les endroits que j'avais introduits**, et je vous ai même
écrit que je laissais « les italiques d'origine de la charte ». C'était
la mauvaise lecture : vous parliez de l'italique sur le site, pas de mes
ajouts.

D'où « Votre offre tient. Votre récit, personne ne l'a écrit. » resté en
italique — c'est `.hero-tag`, une règle de NOCTA que j'avais délibérément
épargnée.

## Ce qui est fait

**109 occurrences retirées**, dans toute la base : les classes `italic`
des composants React, les attributs `fontStyle` des SVG, et les trois
règles CSS de la charte NOCTA.

Les trois règles de charte passent sur la police de titre en demi-gras
plutôt que d'être simplement redressées :

- `.hero-tag` — la phrase sous le wordmark
- `.serif` — la classe d'accroche générique
- `.manifesto em` — les mots en emphase du constat, qui passent aussi du
  rouge clair au rouge de marque

C'est le **poids** qui porte l'emphase maintenant, pas l'inclinaison.

## Vérification

Contrôle de types : aucune erreur nouvelle. Les seules remontées sont
préexistantes et propres à mon environnement (`style jsx`, modules non
installés).

Zéro occurrence d'`italic` restante dans les composants et les feuilles de
style.
