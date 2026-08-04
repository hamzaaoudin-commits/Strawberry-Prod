# Strawberry — tour 11

4 fichiers, un seul glisser-déposer. Build validé.

Glissez les **dossiers** (`app`, `components`), jamais leur contenu.

## Ce qui change

**L'argument du narratif qui s'empile** est ajouté au bloc problème, dans
votre voix : « Sans identité qui tient, chaque prise de parole repart de
zéro… le marché rencontre votre marque cent fois sans se souvenir de rien,
parce que rien ne s'empile. »

**Les vingt pièces de l'offre sont regroupées en quatre catégories** avec une
icône chacune — Diagnostic, Identité & langage, Pièces & déploiement, Les six
playbooks — au lieu d'un seul long registre de vingt lignes identiques. La
numérotation reste continue de 01 à 20 à travers les groupes.

**L'animation de logo au chargement**, en essai. Points importants :

- Elle ne retarde rien : la page se charge et devient utilisable normalement
  en dessous, l'animation n'est qu'un calque visuel par-dessus qui s'efface
  en un peu plus d'une seconde.
- Elle ne joue qu'**une fois par onglet** (mémorisé en session) — pas à
  chaque page visitée.
- Un clic, un appui sur une touche, ou le fait d'avoir demandé moins
  d'animations sur l'appareil la fait disparaître immédiatement.
- C'est du CSS pur (transform/opacity), pas de boucle JavaScript.

C'est un essai : si à l'usage ça vous semble de trop, dites-le et je la
retire en un fichier.
