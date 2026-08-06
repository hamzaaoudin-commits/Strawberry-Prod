# Strawberry — tour 27

4 fichiers, un seul glisser-déposer. Build validé.

Glissez les dossiers `app` et `components`, jamais leur contenu.

## Ce qui est nouveau

**Un curseur personnalisé** — un point qui suit la souris exactement, et un
anneau qui suit avec un léger retard, qui grossit et se colore plus fort au
survol de tout ce qui est cliquable. Seulement sur souris/trackpad
(`pointer: fine`) : sur mobile et tablette, rien ne change, le curseur
système reste celui de toujours. Respecte aussi la préférence de mouvement
réduit.

**La section problème respire de manière asymétrique.** Elle occupait un
container centré de largeur fixe, comme toutes les autres sections du site.
Elle occupe maintenant environ sept douzièmes de la largeur à gauche, avec
du vide assumé à droite — sur grand écran seulement (`lg:` et plus) ; en
dessous, elle repasse en pleine largeur comme avant, pour ne rien risquer
sur mobile ou tablette.

La photo du fondateur reste inchangée, en noir et blanc, comme demandé.
