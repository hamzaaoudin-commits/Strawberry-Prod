# Strawberry — questionnaire fini, terrains reliés

8 fichiers. Deux des trois chantiers demandés ; le troisième est expliqué
plus bas.

## 1. Le questionnaire connaît les quatre terrains

**Les terrains sont alignés sur le site** : `entreprises` disparaît,
`produits` arrive. Le questionnaire et les pages parlent enfin des mêmes
quatre choses.

**Deux questions sont déclinées** au lieu d'une :

- *Les concurrents* — version produits ajoutée (« l'argument qu'ils
  mettent en avant en rayon, tel quel »).
- *La phrase qui vous décrit* — quatre versions. « Votre maison » pour les
  marques, « votre produit » et son emballage, « votre lieu » et sa fiche
  Google, et pour un artiste « votre bio, y compris si elle date de trois
  projets ».

**Un bug que je venais d'introduire, corrigé.** Une question déclinée
n'existe que pour les terrains qu'elle nomme. Sans `?terrain=` dans
l'URL, le positionnement **et** les concurrents disparaissaient du
parcours : un client qui vient de payer aurait reçu un questionnaire
amputé, sans que rien ne le signale. Le filtre retombe désormais sur
« marques » par défaut.

Vérifié : les quatre parcours comptent exactement le même nombre de
questions.

## 2. Les pages de terrain se répondent

Un bloc en pied de page propose les trois autres terrains, avec leur nom
et leur libellé. Volontairement discret : il sert celui qui hésite entre
une marque et un produit — le cas le plus courant — sans détourner celui
qui est déjà au bon endroit. La page courante est exclue automatiquement.

Le style vit dans `public/nocta/styles.css`, pas dans les globals :
il n'existe que sur ces pages.

## 3. Une duplication supprimée au passage

`the-room` avait sa **propre copie du HTML**, indépendante du gabarit. Les
deux devaient être modifiés en parallèle à chaque changement — c'est
pourquoi le retrait de la tournée a dû être fait deux fois. Elle passe
désormais par le gabarit, sans surcharge de texte : le dictionnaire
d'origine parle déjà des lieux. 300 lignes dupliquées en moins, et plus
aucun risque de divergence.

## Ce que je n'ai pas fait : un exemple par terrain

C'est un travail de **rédaction**, pas de code : il faut écrire trois
audits fictifs complets, comme VERSO l'est pour les marques — une maison
inventée, ses concurrents, son diagnostic, ses mouvements. VERSO fait
plusieurs milliers de mots.

Je peux les écrire, mais un par tour, et il me faut votre accord sur le
type de maison à inventer pour chacun : un restaurant ? un objet
manufacturé ? un musicien ? Dites-moi lequel vous voulez en premier.

## Vérification

Contrôle de types : zéro erreur.
