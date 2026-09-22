# Strawberry — le chiffre flottant, retiré

1 fichier. Vous aviez raison, c'était cassé.

## Ce qui s'est passé

Le grand chiffre fantôme était positionné au centre vertical de toute la
ligne. Sur une ligne haute — à cause du long paragraphe à droite — ça le
plaçait dans un vide, à distance du nom qu'il était censé accompagner.
Exactement ce que montrait votre capture : un « 01 » esseulé, flottant
dans du noir.

## Ce qui le remplace

**Le numéro rejoint le nom, sur la même ligne** — « 01 » puis « NIKE »,
côte à côte, en tête de section. Il ne peut plus se détacher de rien
puisqu'il fait partie du même repère.

**Une lettrine ouvre le paragraphe** — la première lettre en grand,
posée en retrait, comme dans une page imprimée. C'est un procédé
éditorial ancien et fiable plutôt qu'une astuce de position qui casse dès
que le texte change de longueur.

**Le refus continue de se dévoiler** par un rideau qui se retire, et le
trait sous le nom continue de se tracer — ces deux mouvements-là
n'étaient pas en cause, ils restent.

## Une seconde chose corrigée en le faisant

En reconstruisant le paragraphe, j'ai trouvé le même défaut que la fois
où le texte était devenu illisible : `class="body-sm"` n'existe pas non
plus dans la feuille de style de ce gabarit, seulement dans celle du
site moderne. Cette fois le résultat n'était pas cassé — les deux
feuilles définissent des polices proches — mais c'était la même
dépendance fragile, invisible jusqu'au jour où elle ne le serait plus.
Remplacé par les propres jetons du gabarit, en style direct.

## Vérification

Contrôle de types : zéro erreur. Toutes les clés du gabarit confirmées
présentes. Plus aucune trace de `body-sm` dans cette section précise —
les six occurrences restantes ailleurs dans le fichier sont
préexistantes et sans rapport.
