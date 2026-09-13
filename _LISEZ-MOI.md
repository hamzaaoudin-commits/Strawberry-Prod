# Strawberry — le client choisit son terrain

2 fichiers.

## Ce que ça règle

Le questionnaire savait s'adapter au terrain, mais rien ne le lui disait :
il retombait donc sur « marques » par défaut, et un restaurateur se
voyait demander la tagline exacte de ses concurrents.

Et depuis que les quatre pages mènent au même lien de paiement, vous ne
saviez pas non plus ce qui avait été acheté — il aurait fallu écrire au
client pour le lui demander avant de pouvoir lui envoyer son
questionnaire.

**Les deux problèmes n'en font qu'un, et il se règle au même endroit :**
la personne qui a payé sait ce qu'elle a acheté. Autant le lui demander.

## Le choix, sur l'écran d'accueil

Avant la première question :

> **VOUS AVEZ COMMANDÉ L'AUDIT POUR**
> Le questionnaire s'adapte : certaines questions ne se posent pas de la
> même façon selon ce que vous vendez.
>
> — Une marque ou une entreprise · *Vous vendez un produit ou un service*
> — Un produit · *Un objet, une application, une gamme*
> — Un lieu · *Restaurant, bar, club, coffee shop*
> — Un nom propre · *Artiste, auteur, fondateur*

Chaque option porte une ligne d'explication : « un produit » seul prête à
confusion pour quelqu'un qui vend des produits sous une marque.

**Le choix est bloquant** — le bouton reste inactif tant qu'on n'a pas
répondu. Un mauvais parcours ne se rattrape pas en cours de route, autant
l'empêcher que le corriger.

## Deux détails qui comptent

**L'URL garde la priorité.** Si le lien envoyé porte déjà `?terrain=`, le
choix est pré-rempli — vous pouvez donc continuer à envoyer des liens
préparés sans que le client ait à répondre.

**Le terrain part avec la réponse**, et remonte dans l'objet du message :

> `Lieux · Questionnaire Audit — La Table du Passe (Marc D.)`

C'est la première chose à savoir en ouvrant une réponse, avant même de
lire les réponses.

**La sauvegarde locale suit le terrain choisi**, donc quelqu'un qui
changerait d'avis ne récupère pas les réponses de l'autre parcours.

## Vérification

Contrôle de types : zéro erreur.
