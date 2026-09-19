# Strawberry — « pourquoi ce studio existe » arrive sur la home

3 fichiers, dont **un nouveau** : `components/strawberry/why-section.tsx`.

## La section remonte sur la home

Vous avez raison : ce texte porte tout l'intérêt de l'offre, et il était
sur la page Studio — où presque personne ne va.

Il est placé **après le diagnostic et avant la tournée**. L'ordre fait
l'argument : on pose le problème du lecteur, on lui montre ce qu'il a déjà
essayé en vain, puis on élargit à la cause commune — et seulement ensuite
on présente ce qu'on livre.

**Une phrase est détachée du reste**, en grand :

> **CE QUI NE PEUT PAS ÊTRE GÉNÉRÉ, C'EST UNE IDENTITÉ.**

C'est la bascule de tout l'argument : ce qui précède décrit un
effondrement, celle-ci dit ce qui y résiste. Elle était noyée en fin de
paragraphe. Un filet rouge la sépare de la conclusion.

## Le paragraphe d'ouverture du Studio

**Avant** : « Strawberry Production est un studio d'architecture narrative
basé à Paris. Un fondateur. Une seule offre : l'audit narratif, 999 €, sur
quatre terrains. » — une fiche d'identité administrative.

**Après :**
> Tout le monde est devenu compétent. Dans un marché où la qualité ne
> distingue plus personne, ce qui reste, c'est ce que vous êtes seul à
> pouvoir dire. Nous l'écrivons — à la main, un fondateur, une seule
> offre, quatre terrains.

Les mêmes faits y sont, mais **après** l'enjeu et comme sa conséquence :
un seul fondateur cesse d'être une information pour devenir une garantie
qu'aucune agence ne peut donner.

## La page Studio ne se répète pas

Le même texte à deux endroits du site se remarque. Sur la page Studio, il
raconte maintenant **comment ce constat a fondé le studio** plutôt que
d'exposer le constat une seconde fois :

> En regardant les documents de marque passer, un même défaut revenait :
> ils étaient corrects, et interchangeables. […] L'IA n'a pas créé ce
> problème — elle l'a rendu industriel.

Même idée, autre angle : la home argumente, le Studio raconte.

## Vérification

Contrôle de types : aucune erreur sur le nouveau composant. Les remontées
sur `about` sont préexistantes (`style jsx`).
