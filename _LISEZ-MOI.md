# Strawberry — L'Architecture Narrative, 2 900 €, trois semaines

21 fichiers.

## À faire à la main

**Supprimez ces trois fichiers**, un zip ne peut pas retirer un fichier :

- `app/[lang]/brand-narrative-architecture/layout.tsx`
- `components/strawberry/doors-section.tsx`
- `components/strawberry/terrains-section.tsx`

Les deux derniers étaient du code mort — plus rien ne les appelait, et ils
pointaient encore vers l'ancienne offre.

**Et créez le lien Stripe à 2 900 €**, puis remplacez l'URL dans
`lib/config.ts`. Tous les boutons y mènent déjà.

## Le renommage

**L'audit narratif** devient **L'Architecture Narrative**, partout, dans
les deux langues. Y compris les boutons : « Commander l'audit » →
« Commander l'architecture ».

C'était nécessaire, pas cosmétique : un audit constate. Vous livrez une
plateforme de marque, cinq playbooks et des textes réécrits — le mot
« audit » aurait plafonné le prix quoi qu'on écrive autour.

## Prix et délai

- **999 € → 2 900 €**, partout, CGV comprises
- **7-14 jours → trois semaines**, partout : hero, chiffres, FAQ, cas LOAM,
  questionnaire, méthode

## La page Architecture disparaît

Elle devient une redirection vers l'accueil — l'adresse est indexée.

Retirée aussi du menu (avec son séparateur rouge), du pied de page et du
sitemap. Les boutons du livre et de la page Studio mènent désormais au
paiement. `/maisons`, qui redirigeait vers elle, pointe maintenant
directement sur l'accueil.

## Le questionnaire fusionne

**22 questions étaient réservées à l'Architecture.** Elles servaient à
produire les playbooks et la plateforme — précisément ce que vous livrez
maintenant. Sans elles, vous écririez ces pièces sans la matière.

Le parcours passe donc de 14 à **30 écrans** pour un terrain donné.

C'est long, et c'est le point que je vous signale : à 2 900 € c'est
défendable, mais ça mérite peut-être une coupure en deux séances, ou un
regroupement de plusieurs champs par écran. Dites-moi si vous voulez que
je m'en occupe.

## Un chiffre corrigé en conséquence

Le premier chiffre clé annonçait « **1 h** de votre temps, questionnaire
compris ». Avec 30 écrans, ce n'était plus vrai — et à 2 900 €, promettre
que le client ne fera presque rien dévalue le travail.

Il annonce désormais « **40+** supports dépouillés, de votre site à vos
avis clients » : ce que vous faites, pas ce qu'il évite de faire.

## Vérification

Contrôle de types : aucune erreur nouvelle. Traductions validées. Aucune
trace de 999 €, de « 7 à 14 jours » ni d'« audit narratif ».
