# Strawberry — tour 34

6 fichiers, un seul glisser-déposer. Build validé.

Glissez les dossiers `app` et `components`, jamais leur contenu.

## Ce qui est nouveau — les 3 maquettes validées

**#46 — Le lecteur SILLAGE et VERSO tournent vraiment la page.** Au clic sur
« Suivant » ou « Précédent » (ou depuis le sommaire), la partie courante
pivote sur son axe et disparaît, puis la suivante pivote et apparaît dans
l'axe opposé — un vrai geste de page qu'on tourne, pas un remplacement de
contenu instantané. Désactivé sous préférence de mouvement réduit : le
contenu change alors directement, sans pivot.

**#49 — Le bandeau plein rouge devient un dispositif reconnaissable.** REFUS
reste sur la home, après le diagnostic. ARCHITECTURE apparaît maintenant sur
la page Architecture, juste avant le prix. MÉMOIRE apparaît sur RADAR, juste
avant l'abonnement. Le composant (`SectionDivider`) a été généralisé pour
accepter n'importe quel mot plutôt que d'être figé sur REFUS.

**#50 — Le titre du diagnostic s'épaissit au défilement.** « Rien de tout ça
n'a manqué de bonne volonté » — chaque mot part fin et pâle, et devient gras
et blanc en traversant le centre de l'écran. La deuxième phrase (« Ça a
manqué de la bonne cause. ») garde son traitement en dégradé existant,
inchangé. Effet réservé à ce seul titre — l'appliquer partout aurait coûté
cher en performance pour un effet qui perd son sens à force d'être répété.
