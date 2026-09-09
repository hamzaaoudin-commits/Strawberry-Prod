# Strawberry — la page Artistes & Fondateurs

27 fichiers. Contient le portage de MOMENTUM **et** les changements du
tour précédent (le site vend l'audit, le vocabulaire cesse de dire
« brand »), puisque je travaille sur la même base.

## Le portage

MOMENTUM est en Next.js, React et Tailwind — même pile que Strawberry.
J'ai donc **porté les fichiers** au lieu de réécrire : les quinze
composants, les deux fichiers de copie et la page. Copywriting et mise en
page sont identiques à l'original, y compris le diagnostic interactif en
cinq questions, les graphiques de trajectoire, les ratures et le
dépliant.

Nouvelle route : `/artistes`, en français comme en anglais.

## Les couleurs

Comme NOCTA, toute la charte de MOMENTUM est pilotée par des variables
CSS. J'ai ajouté leur équivalent dans `app/globals.css` avec les valeurs
du studio : le cobalt `#2f5bff` devient le rouge de marque `#e63946`, le
fond `#08090b` devient `#0a0a0a`, et la rampe de gris s'aligne. Les noms
d'origine sont conservés (`cobalt`, `craie`, `encre`) parce qu'ils sont
référencés dans les composants portés ; les renommer aurait voulu dire
réécrire ces composants. « cobalt » désigne désormais un rôle, pas une
teinte.

Les couleurs codées en dur dans les composants ont aussi été converties,
y compris les dégradés du graphique d'ascension.

Détail savoureux : le fichier de style de MOMENTUM proposait le rouge
signal comme variante en notant « attention, c'est le territoire de
Strawberry Production ».

## Les constantes portées

`CONTACT`, `CAPACITE`, `PRIX`, `PLACES_OUVERTES` et `OFFRE_PRINCIPALE`
vivaient dans le `config.ts` de MOMENTUM. Ajoutées à celui de Strawberry
pour garder une seule source de vérité. L'e-mail et l'Instagram pointent
sur ceux du studio, plus sur `contact@momentum.studio`.

Le contrôle de types a attrapé ces manques — sans lui, le build aurait
échoué sur cinq imports fantômes.

## À vérifier de votre côté

- **Le prix.** La page affiche l'offre mensuelle de MOMENTUM à 299 €/mois
  (149 et 499 pour les deux autres paliers). C'est le modèle d'origine, pas
  la décision d'unification à 490 € dont on a parlé. Dites-moi si vous
  voulez que je l'aligne.
- **Le formulaire** de candidature poste vers une route `/api/candidature`
  qui n'existe pas côté Strawberry. Il faut soit la créer, soit le
  rebrancher sur le formulaire de contact existant. Dites-moi lequel.

## Vérification

Contrôle de types réel sur les 19 fichiers portés plus les 4 modifiés :
zéro erreur.
