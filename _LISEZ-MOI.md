# Strawberry — tour 24

6 fichiers, un seul glisser-déposer. Build validé.

Glissez les **dossiers** (`app`, `components`), jamais leur contenu.

## Ce qui est nouveau

**SILLAGE et VERSO ont chacun leur couverture**, sur la page `/documents`
qui ne montrait jusqu'ici que du texte. SILLAGE reprend la grille de plan
déjà utilisée ailleurs sur le site ; VERSO a son propre motif — des tranches
verticales de largeur inégale, comme des dos de livres reliés à la main.
La modale de l'Atlas reçoit aussi une petite couverture (le « 30 » dans son
propre cadre) au lieu d'être un simple formulaire sans image, et ses coins
arrondis sont corrigés pour rejoindre le style à crochets du reste du site.

**Les cartes de contenu réagissent maintenant à la souris** : les groupes de
l'offre, les cartes de documents et les statistiques d'impact éclaircissent
légèrement leur bordure ou leur fond au survol. La FAQ va plus loin — la
question passe en rouge et le « + » grossit légèrement avant même le clic,
pour signaler l'interactivité.

**Les lettres S.T.R.A.W. arrivent une par une** sur la page Méthode, au lieu
de apparaître toutes en même temps. Chaque lettre a son propre délai
(90ms d'écart), avec un léger effet d'échelle en plus du fondu.

## Une chose que je n'ai pas faite, volontairement

La version de STRAW affichée sur la home (`mechanism-strip.tsx`) n'a pas
reçu le même effet en cascade — c'est un composant serveur sans état de
défilement, et lui ajouter ce comportement demande de le convertir en
composant client avec son propre détecteur de scroll. Vous ne l'aviez pas
demandé, donc je ne l'ai pas fait de moi-même. Dites-le si vous voulez que
je l'ajoute aussi, pour que les deux versions soient parfaitement
cohérentes.
