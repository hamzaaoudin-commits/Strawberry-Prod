# Strawberry — chantier 2 : les maquettes deviennent des pages imprimées

Un seul fichier, `app/[lang]/brand-narrative-architecture/page.tsx`.

## Le diagnostic

Vos deux remarques disaient la même chose sous deux angles : les pages
avaient l'air vides, et le rendu faisait « schéma » plutôt que « page de
document ». C'est structurel, pas décoratif. Une page de document imprimé
porte trente à quarante lignes de texte ; les maquettes en portaient six à
huit. À ce niveau de densité, l'œil ne lit pas « page », il lit
« diagramme » — et un diagramme ne donne pas envie de payer pour un
document.

## Ce qui change

**Du vrai corps de texte, dense.** Chaque page porte maintenant dix à
douze lignes de prose réelle à 4,6 px, dans une colonne étroite avec
lettrine rouge. Ce n'est pas du faux texte simulé par des barres grises :
c'est de la vraie prose écrite pour chaque pièce (pourquoi le prix se
défend, comment une biographie se décline en quatre formats, ce que le
playbook vente fixe avant de fournir la moindre formulation). À cette
taille elle n'est pas lue — mais elle a la texture et l'irrégularité du
texte réel, ce qu'aucune barre grise ne produit. C'est exactement la
différence entre « on voit une page » et « on voit un placeholder ».

**L'anatomie d'une page reliée.** Ajoutés : en-tête courant (nom du
document à gauche, section à droite, séparé par un filet fin), filet de
marge verticale séparant la colonne de texte de la colonne d'annotation,
note d'auteur dans la marge extérieure avec son trait rouge, et pied de
page avec mention d'édition à gauche et folio à droite. Ce sont les
éléments qu'on ne remarque jamais consciemment sur une page imprimée mais
dont l'absence fait immédiatement « écran ».

**Densité générale resserrée.** Tous les blocs structurés (listes,
tableaux, citations, comparaisons, chiffres, jauges) ont été resserrés :
interlignes réduits, corps de texte diminués, filets affinés de 1 px à
0,7-0,8 px. Ça libère la place pour le corps de texte sans rien retirer,
et les filets fins sont une signature d'impression — le 1 px plein est
une signature d'écran.

Les treize pages qui utilisent ce gabarit sont concernées : les sept
pièces de l'Acte II encore génériques et les six playbooks de l'Acte III.

## Ce qui n'a pas changé

Les quatorze maquettes écrites à la main (couverture, dédicace, sommaire,
carte de perception, colonne vertébrale, récit d'origine, manifeste,
archétype, home réécrite, phrase de présentation, idées de contenu,
distribution, carte de positionnement, signature) gardent leur mise en
page propre. Dites-moi si vous voulez que je leur applique le même
traitement de densité — c'est faisable mais chacune est un dessin séparé,
donc c'est un travail à part.

## Vérification

Contrôle de types TypeScript réel : zéro erreur venant de ce fichier. (La
seule erreur signalée dans mon environnement est le `<style jsx>` déjà
présent dans votre dépôt avant mes modifications — Next.js le gère, mon
environnement local ne l'a pas.)

## Fichiers inclus

- `app/[lang]/brand-narrative-architecture/page.tsx`
