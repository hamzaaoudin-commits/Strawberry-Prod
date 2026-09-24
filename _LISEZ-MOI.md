# Strawberry — cinq corrections, dont une bien plus profonde qu'il n'y paraissait

4 fichiers.

## Le paragraphe du hero, retiré

« Nous analysons votre marque, votre marché et les récits de vos
concurrents… » disparaît. Le paragraphe qui reste va directement de
« nous construisons l'architecture narrative qui vous rend
identifiable » à « en trois semaines, vous savez quoi raconter » — plus
court, et l'offre qui suit plus bas explique déjà le détail.

## Le curseur Hier/Aujourd'hui, plus au milieu

Il démarrait à 6 %, puis s'animait tout seul jusqu'à 50 % — ce qui
coupait les deux phrases en même temps, aucune ne se lisant en entier.
Il reste maintenant entièrement sur « Hier » au repos (96 %) : la phrase
se lit en entier, et c'est le geste de glisser qui révèle
« Aujourd'hui ».

## Le sous-titre de « pourquoi ce studio existe », détaché

« Et pourtant, si peu de marques sont reconnaissables » collait au titre
au-dessus, séparé seulement par un retour à la ligne, à la même taille —
les deux se lisaient comme une seule phrase coupée en deux. Il descend
maintenant dans son propre paragraphe, plus petit, avec un vrai espace
au-dessus : la conséquence du titre, pas sa répétition.

## Le passage « chaque jour, des milliers de marques publient… », animé

Les deux phrases et les cinq lignes de la déclinaison des « mêmes »
arrivent maintenant l'une après l'autre, avec un délai croissant, plutôt
que d'un bloc avec le reste de la section. La répétition que ces lignes
décrivent se sent maintenant dans le rythme où elles arrivent.

## Le vrai bug des onglets, et pourquoi il ne touchait pas que trois pages

Vous aviez raison que ça ne marchait pas — mais pas seulement sur les
pages autres que marques. **Ça ne marchait sur aucune des quatre.**

Le mécanisme reposait sur un `<script>` posé à l'intérieur du bloc HTML
injecté via `dangerouslySetInnerHTML`. C'est un comportement du
navigateur, pas un bug de mon code à corriger au cas par cas : **un
script inséré de cette façon ne s'exécute jamais, sur aucun navigateur,
quel que soit son contenu.** J'ai dû me tromper en pensant l'avoir vu
fonctionner sur la page marques — ou vous avez cliqué sur l'onglet déjà
actif par défaut, qui n'a évidemment rien changé.

**La reconstruction est entièrement en CSS**, sans une seule ligne de
JavaScript : trois cases à cocher radio masquées par ligne, et des
règles `:checked` qui montrent le bon panneau et surlignent le bon
bouton. Ce mécanisme ne peut pas subir le même problème : il n'y a rien
à exécuter, donc rien qui puisse ne pas s'exécuter. Il fonctionne
maintenant identiquement sur les quatre pages, puisque les quatre
partagent ce même gabarit.

## Vérification

Contrôle de types : zéro erreur. Toutes les clés `data-i18n` confirmées
présentes dans le dictionnaire. Confirmé par lecture directe qu'aucune
vraie balise `<script>` ne subsiste dans la section reconstruite — la
seule occurrence trouvée était le mot cité dans mon propre commentaire
explicatif.
