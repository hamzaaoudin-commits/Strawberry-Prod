# Strawberry — tour 20

11 fichiers, un seul glisser-déposer. Build validé.

Glissez les **dossiers** (`app`, `components`), jamais leur contenu.

Comme au tour précédent, quelques fichiers ici reprennent du contenu déjà
correct de tours antérieurs (mon suivi interne des livraisons a un angle
mort connu sur ce point). Aucun risque à les redéposer.

## Ce qui est nouveau

**Un grain de fond, partout sur le site.** Le noir plat manquait de matière.
C'est un bruit SVG en CSS pur — aucune image, aucun poids réseau — posé en
calque très discret (3,5% d'opacité) sur tout le site.

**Une seule signature de mouvement.** Plusieurs courbes d'animation légèrement
différentes coexistaient selon la session où chaque composant avait été
codé. Il n'y en a plus qu'une : un léger rebond en fin de course
(`cubic-bezier(.22,.68,0,1.2)`, 900ms), appliqué à toute apparition
déclenchée au scroll — le formulaire de contact et la carte Atlas
l'utilisent maintenant aussi.

**Un vrai moment visuel sur mesure**, sur la page qui compte le plus : le
hero de la page Architecture a maintenant un sceau dessiné en SVG derrière
le texte — cercles concentriques, marques radiales, un losange central.
C'est la seule chose du site qui ne réutilise ni carte ni bordure ni motif
numéroté : un dessin fait pour cette page, qui porte l'idée d'une
constitution qu'on scelle plutôt qu'un document qu'on remet.

**Un vrai écart de rythme vertical corrigé.** Une section utilisait 7rem de
marge verticale (112px) là où tout le reste du site utilise 5rem (80px). Je
l'ai ramenée à l'échelle commune.

## Ce que je n'ai pas touché, et pourquoi

Le motif numéroté (01, 02, 03…) reste sur les listes de vingt éléments — le
retirer là nuirait à la lisibilité plus qu'il n'aiderait. Les playbooks ont
déjà leur propre traitement en couvertures depuis le tour précédent, c'est
la variation qui avait du sens à cet endroit précis.
