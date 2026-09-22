# Strawberry — le défilement à la molette, section capturée

1 fichier.

## Ce que vous vouliez

Que la molette de la souris fasse avancer le carrousel horizontalement,
et que la page ne passe pas à la section suivante tant qu'on n'a pas fini
de le traverser.

## Ce que j'ai fait

Plutôt que de porter le JavaScript d'origine pour ce mode précis, j'ai
repris **le moteur que la tournée utilise déjà juste au-dessus, sur cette
même page** : un conteneur surdimensionné (300vh) dont l'intérieur reste
collé à l'écran pendant qu'on le traverse, avec la position dans ce
défilement qui pilote une translation. La tournée l'utilise pour un
fondu entre scènes ; ici, la même technique pilote une translation
horizontale de la piste de cartes.

C'est délibéré : réutiliser un mécanisme déjà en place et déjà correct
sur cette page évite que les deux systèmes d'épinglage se marchent
dessus, et garantit la même fluidité (on ne lit que la position de
défilement à chaque image, on n'écrit qu'un `transform` — aucun recalcul
de mise en page pendant qu'on scrolle).

## Ce qui change concrètement

- **Sur ordinateur, molette ou trackpad** : la page se bloque en entrant
  dans la section, la molette fait glisser les cartes de gauche à droite,
  et la page ne reprend son défilement normal qu'une fois la cinquième
  carte atteinte.
- **Le glisser à la souris et les flèches disparaissent** en mode
  épinglé — ils n'ont plus de raison d'être, la molette fait tout.
- **Sur mobile et tablette (moins de 900px)**, l'épinglage se désactive :
  la molette n'existe pas au doigt, et un conteneur bloqué sur 300vh sur
  un petit écran serait pénible à traverser. Le glissement au doigt et le
  défilement tactile natif reprennent, exactement comme avant.
- **Si votre navigateur préfère les animations réduites**, l'épinglage
  se désactive aussi — même règle que la tournée.

## Vérification

Contrôle de types : zéro erreur. La structure de conteneurs
(`story-pin` → `story-sticky` → `wrap story`) suit exactement celle de
l'original, seule la classe pilotant la translation change de nom pour
rester isolée sous `.straw-method`.
