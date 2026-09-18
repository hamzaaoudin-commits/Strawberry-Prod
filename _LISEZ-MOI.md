# Strawberry — refonte de la home, prix à 999 €

Le zip contient les fichiers principaux. **41 remplacements de prix** sur
15 fichiers : pensez à récupérer aussi les pages terrain, méthode, CGV et
documents depuis le dépôt si vous appliquez fichier par fichier.

## Le prix

490 € → **999 €** partout, dans les deux langues, y compris les mentions
légales et l'écriture anglaise « €490 ».

## L'ordre de la home

La tournée — qui présente ce qu'on livre — arrivait **avant** le problème.
On proposait un remède à quelqu'un qui n'avait pas encore lu son
diagnostic.

Nouvel ordre : hero → **le problème** → **ce qui a déjà été essayé en
vain** → ce qu'on livre → l'offre → les chiffres.

## L'accroche

> **Vous êtes meilleur que vos concurrents. Votre marché ne le voit pas.**

Elle porte enfin l'enjeu — sortir de la masse — au lieu d'annoncer un
délai. Et elle flatte avant d'accuser, ce qui fait lire la seconde phrase.

Le paragraphe dit maintenant la chaîne complète : ce qu'on dépouille, ce
qu'on compare, et les quatre livrables — plateforme, décisions, playbooks,
textes prêts à coller.

## La tournée présente les livrables

C'est le changement principal. Les six scènes épinglées ne montrent plus
les quatre terrains mais **les six pièces du document** : LA PLATEFORME,
LE DIAGNOSTIC, LA CARTE, LES DÉCISIONS, LES PLAYBOOKS, LE LANGAGE.

La première scène règle la question de la comparaison :
> « Exactement ce qu'une agence facture entre 10 000 et 40 000 € — et ce
> par quoi nous commençons. »

**Les quatre terrains passent en bandeau juste au-dessus** : quatre cases
cliquables sous « Le même audit, quel que soit ce que vous vendez ». Ils
disent « c'est pour vous », les scènes disent « voici ce que vous
recevez ».

J'ai supprimé le sommaire en trois colonnes qui listait ces mêmes six
pièces : il aurait fait doublon à quinze centimètres d'écart.

## Le chargement sur mobile

Deux causes, toutes deux corrigées :

**L'écran d'accueil imposait 2 100 ms d'attente**, quelle que soit la
vitesse réelle. La page était prête bien avant. Descendu à 900 ms, et
sauté entièrement sur petit écran et lors des visites suivantes — une
intro sert à poser une marque, pas à être revue à chaque page.

**Three.js pesait 600 Ko** pour le canvas décoratif des pages d'offres, et
faisait tourner une scène 3D en continu. Désactivé sous 900 px : le
dégradé de repli rend déjà l'ambiance sans rien télécharger.

## Suppressions

- Les **quatre commandes par trimestre** : plus aucune occurrence, y
  compris dans l'exemplaire SILLAGE et la page Studio.
- **Deux questions de FAQ** : « Pourquoi 4 500 € ? » et « Pourquoi
  seulement 4 commandes par trimestre ? », dans les deux langues.
- Le délai de la FAQ passe de 3-4 semaines à **7 à 14 jours** — il datait
  de l'ancienne offre.

## Vérification

Contrôle de types : aucune erreur nouvelle. `app.js` validé.
