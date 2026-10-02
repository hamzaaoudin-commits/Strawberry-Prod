# Strawberry — l'écran d'accueil de l'onboarding, refait et testé

3 fichiers.

## Ce qui n'allait pas, précisément

**La phrase.** « Êtes-vous prêt à écrire ce que vous refusez ? » n'a rien à
faire sur l'écran d'accueil d'un onboarding : le client vient de payer, on
l'accueille. Remplacée par :

> STRAWBERRY PRODUCTION · ONBOARDING
> **VOTRE ARCHITECTURE NARRATIVE COMMENCE ICI.**
> Les questions qui suivent sont la matière première de votre document :
> plus vos réponses sont précises, plus il sera juste. Prenez le temps
> qu'il faut — tout est enregistré au fil de l'eau.
> [ Commencer → ]

« commence » porte le dégradé rouge. Plus de prénom ni de maison : l'écran
est identique pour tous.

**Le bouton.** C'était mon bouton « à maintenir 1,1 s ». Un clic normal ne
faisait **rien** — c'est ce que vous constatiez. Je l'ai inventé, personne
ne devine qu'il faut tenir. Remplacé par un bouton ordinaire : un clic, et
les bandes noires se referment avant la suite.

**L'écran noir.** Tout l'écran dépendait de minuteurs JavaScript pour
apparaître, et les bandes de cinéma démarraient *fermées* sur 100 % de la
hauteur : si un minuteur tardait, la page restait entièrement noire.
Désormais :
- l'ouverture est en **animations CSS**, dont l'état par défaut est
  « tout visible, bandes ouvertes » — l'animation ne fait que rejouer
  l'arrivée par-dessus ;
- c'est vrai aussi des bandes des écrans de chapitre et de la question qui
  se remplit, qui avaient la même fragilité.

## Une phrase absurde trouvée en testant

La première question affichait « Prérempli quand le lien vient de vous. »
— sans sens pour un client, puisque le lien est le même pour tous. Elle
dit maintenant « Tels qu'ils figureront sur votre document. »

## Comment c'est vérifié, cette fois

Je n'ai pas seulement contrôlé les types : j'ai fait tourner le vrai
composant dans un navigateur simulé et cliqué dedans.
- Le texte de l'accueil est présent **à l'instant zéro**, sans attendre
  aucun minuteur ; aucun prénom ni maison.
- Un clic sur « Commencer » mène à l'écran suivant ; puis choix du terrain ;
  puis la première question — **aucune erreur**.
- Le seul élément masqué est le champ piège anti-robot, voulu.

Ce que je ne peux pas tester d'ici : le rendu visuel réel (les animations,
la lueur). Si l'écran reste noir chez vous, dites-moi quel navigateur et si
la page est servie par la dernière version déployée.
