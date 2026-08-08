# Strawberry — patch : le diagnostic replié par défaut

Un seul fichier — `components/strawberry/diagnosis-section.tsx`.

## Ce qui change

Le texte n'est pas coupé, il est replié. Restent toujours visibles : l'accroche,
le titre, le premier paragraphe (le vrai diagnostic — logo refait, agence,
plus de posts, IA), la citation forte (« La différenciation n'est plus un
luxe marketing... »), le schéma avant/après, et la ligne de contre-positionnement
à la fin.

Repliés par défaut, derrière un bouton « + Pourquoi c'est urgent
maintenant » : les deux paragraphes qui développent l'angle IA (saturation
du marché, déplacement de la valeur de la fabrication vers la stratégie).
Rien n'est perdu — quiconque veut l'argument complet clique une fois et le
lit. Personne n'est obligé de le lire pour arriver à l'offre.

Sur les ~254 mots de la section, environ 90 sont désormais optionnels — la
première lecture, non dépliée, tombe autour de 165 mots.

## Suggestion

Si ça fonctionne bien ici, le même traitement s'applique facilement à
`problem-section.tsx` (163 mots, moins dense, probablement pas nécessaire)
et à d'autres sections denses de la page Architecture. Dites-moi si vous
voulez que j'étende le principe ailleurs.

## Fichiers inclus

- `components/strawberry/diagnosis-section.tsx`
