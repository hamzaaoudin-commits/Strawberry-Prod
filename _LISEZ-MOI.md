# Strawberry — ce qui se passe après le paiement

4 fichiers, dont **un nouveau** : `components/strawberry/after-section.tsx`.
Il contient aussi `why-section.tsx` avec les imports corrigés, au cas où
vous n'auriez pas appliqué le patch précédent.

## La frise, juste avant le bandeau d'achat

Quatre étapes datées, reliées par une ligne horizontale — une frise, pas
quatre encadrés :

| | | |
|---|---|---|
| **Jour 0** | Vous recevez le questionnaire | Trente questions. Comptez une heure. Vos réponses se sauvegardent : vous pouvez le faire en deux fois. |
| **Jours 1 à 12** | Nous dépouillons | Vos supports et ceux de 3 à 5 concurrents, phrase par phrase. **Nous ne vous sollicitons pas pendant cette période.** |
| **Jour 15** | Le document arrive | Les six pièces en PDF. |
| **Jour 20** | On le relit ensemble | Une heure pour noter ce qui ne tient pas. **Deux révisions incluses.** |

Trois choses y travaillent sans être affirmées : le client sait qu'il sera
tranquille pendant le gros du travail, il sait que les trente questions
arrivent — donc il n'est pas pris en traître après avoir payé — et il voit
que ça ne finit pas sur un envoi de fichier.

## L'engagement, en pied de frise

> **L'ENGAGEMENT**
> Livré le vingt et unième jour au plus tard. Passé ce délai, vous êtes
> remboursé intégralement, et le document vous reste.

Placé **après** les quatre étapes, il se lit comme la conséquence du
calendrier qu'on vient de détailler plutôt que comme une promesse
commerciale isolée. Le fait que le document reste acquis rend
l'engagement coûteux, donc crédible.

Les deux révisions ne sont pas dans cet encadré : elles sont au jour 20,
dans le déroulé. Une garantie qui apparaît dans le cours du travail se lit
comme une pratique ; dans un encart « nos garanties », comme un argument.

## Reprise en FAQ

Une entrée ajoutée — « Et si le document ne me convient pas ? » — qui
reprend les deux révisions et l'engagement de délai. C'est là qu'on va
vérifier une garantie qu'on a lue plus haut.

## Vérification

Contrôle de types lu **sans filtre** cette fois : une seule remontée, sur
`@vercel/analytics`, absent de mon environnement. Les cinq classes
utilisées (`hair-strong`, `brand-hair`, `ink-soft`, `chalk-75`,
`chalk-55`) sont vérifiées présentes dans `globals.css`.
