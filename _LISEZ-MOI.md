# Strawberry — le CTA final reprend du poids

1 fichier.

## J'avais trop coupé

En retirant le dégradé, l'ombre et la moitié des marges, j'en ai fait un
encadré quelconque. C'est le dernier moment de la page : il doit peser.

## Ce qui lui donne du poids maintenant

**La lueur passe derrière le bloc**, sur la section elle-même, au lieu
d'être dans l'encadré. C'est le vrai changement. Dans l'encadré, elle
éclairait un fond déjà rouge et le rendait laiteux ; posée dessous, elle
fait **monter le bloc de l'obscurité** — il gagne en présence sans qu'on
ajoute de couleur au premier plan.

**Le fond de section passe de `ink-soft` à `ink`**, plus sombre, pour que
le bloc s'en détache au lieu de s'y fondre.

**Un filet rouge de 3px en haut du bloc**, dans le dégradé de marque. Il
signale l'entrée dans le dernier moment de la page sans mettre du rouge
dans le titre — qui redeviendrait alors concurrent du bouton.

**Le titre remonte** à `clamp(2.1rem, 5vw, 3.6rem)`, presque sa taille
d'origine, mais **en blanc**. Les marges reviennent à 20 unités, et
l'ombre portée est rétablie en plus serrée et plus dense
(`0 0 90px -20px` au lieu de `0 0 120px`) : elle cerne le bloc au lieu de
diffuser autour.

**Le bouton est agrandi** — 12 unités de marge horizontale, 20 verticales,
16px de texte.

## Le principe que j'applique

Le bloc est imposant par sa **masse et sa lumière**, pas par sa couleur.
Le seul élément rouge plein reste le bouton, donc l'œil sait où cliquer
même en voyant grand.

## Vérification

Contrôle de types : zéro erreur.
