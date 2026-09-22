# Strawberry — un cas à la fois, développé pour de vrai

5 fichiers. Cette fois j'ai traité la vraie demande, pas un symptôme de
surface.

## Ce que j'avais mal compris

Vous ne parliez pas du style de la carte — vous parliez de la structure.
Trois exemples côte à côte, même bien dessinés, forcent à choisir où
regarder en premier et ne laissent la place que pour une phrase par
idée. Personne ne comprend un mécanisme en une phrase.

## Ce qui change

**Plus de colonnes côte à côte.** Chaque cas occupe maintenant toute la
largeur, l'un après l'autre, séparé par un simple filet horizontal — le
nom de la maison à gauche, tout le développement à droite.

**Un vrai paragraphe, pas trois fragments.** Nike sur la page marques,
par exemple, passe de trois bouts de phrase à quatre-vingt-dix mots qui
expliquent le mécanisme dans l'ordre : ce que tout le monde faisait à
l'époque, ce que Nike a fait à la place, pourquoi c'était risqué, et
pourquoi ça continue de payer quarante ans plus tard :

> Dans les années 1980, l'argument publicitaire du sport était
> technique — amorti, respirabilité, poids de la semelle. « Just Do It »
> ne décrit aucune caractéristique produit : c'est une conviction sur ce
> que ça fait de dépasser sa propre limite, adressée à quiconque bouge,
> pas seulement aux athlètes. Le pari était risqué — abandonner
> l'argument rationnel que la concurrence maîtrisait, pour un territoire
> qu'aucune fiche technique ne peut prouver. Près de quarante ans plus
> tard, la marque n'a jamais eu besoin de changer ce message pour rester
> pertinente, parce qu'il ne parlait jamais du produit lui-même.

Les douze cas suivent ce même travail : nommer la norme du secteur, dire
ce qui a été refusé, nommer le risque réel pris, puis montrer l'effet
qui dure encore aujourd'hui. C'est ce dernier point qui manquait le
plus : sans lui, un refus reste une anecdote ; avec lui, c'est une
démonstration.

## Une erreur de syntaxe trouvée au contrôle

La version anglaise du cas Nike citait *"Just Do It"* avec des guillemets
droits non échappés à l'intérieur d'une chaîne elle-même entre
guillemets — une faute de syntaxe qui aurait empêché la page de
compiler. Le contrôle de types l'a signalée avant l'empaquetage plutôt
qu'après ; corrigée par échappement, et vérifiée sur l'occurrence
équivalente chez Nobu qui utilisait le même motif.

## Vérification

Contrôle de types : zéro erreur, après correction. Toutes les clés du
gabarit confirmées présentes dans le dictionnaire. Aucun résidu de
l'ancienne structure en trois fragments (`refuse`/`risk`/`win`).
