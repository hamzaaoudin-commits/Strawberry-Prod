# Strawberry — les pages d'offres en plein écran

1 fichier : `public/nocta/styles.css`, donc les quatre pages d'un coup.

## Le diagnostic

Vous avez raison sur la cause, et je n'aurais pas dû m'en contenter : le
site NOCTA a été dessiné en regardant une fenêtre à moitié ouverte. Trois
valeurs figées le trahissent en plein écran.

**`--maxw: 1180px`.** Sur un écran de 1920, la page laissait plus de
700 pixels de vide de chaque côté du contenu.
→ Devient `clamp(1180px, 82vw, 1560px)` : le plancher conserve la mise en
page d'origine sur les écrans courants, le plafond empêche les lignes de
devenir trop longues au-delà.

**`.manifesto p { max-width: 20ch }`.** Vingt caractères de large — d'où
la bande verticale étroite de votre seconde capture, où le constat tombe
sur dix lignes au milieu du vide.
→ 26ch, avec une taille de police qui monte moins vite (`3.4vw` au lieu de
`4.2vw`), pour que le texte s'étale au lieu de s'allonger.

**`.hero-tag { max-width: 18ch }`.** La phrase sous le wordmark se
brisait en quatre lignes maigres.
→ 24ch : deux ou trois lignes pleines.

## Un palier pour les grands écrans

Au-delà de 1600px, j'augmente la respiration verticale et la taille des
corps de texte plutôt que d'élargir encore les lignes — passé une
certaine longueur, une ligne devient pénible à suivre et l'œil perd le
début de la suivante. La page occupe donc l'écran en hauteur et en
présence, pas en largeur de ligne.

## Vérification

Feuille de style validée. Les quatre pages de terrain partagent ce
fichier, donc elles sont toutes corrigées.
