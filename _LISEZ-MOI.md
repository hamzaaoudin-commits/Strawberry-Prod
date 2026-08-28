# Strawberry — patch : les 27 pages passent toutes en français

Un seul fichier, `app/[lang]/brand-narrative-architecture/page.tsx`.

## Ce que j'avais raté

Au tour précédent j'avais traduit les treize pages qui utilisent le
gabarit générique, et laissé les quatorze dessinées à la main en anglais.
D'où le mélange que vous avez vu en feuilletant : une page sur deux en
français, l'autre en anglais.

## Ce qui change

Les quatorze maquettes restantes sont traduites intégralement :
couverture, dédicace, sommaire, plateforme narrative, récit d'origine,
manifeste, diagnostic de différenciation, système de langage, angles de
prise de parole, guide de cohérence, page de signature, home réécrite,
phrase de présentation, carte de positionnement.

121 remplacements au total, en deux passes — la seconde après un contrôle
automatique qui a débusqué 24 fragments anglais que la première avait
manqués (les listes à puces du guide de cohérence, les angles de contenu,
les légendes de la carte de positionnement).

Vérification automatique finale : zéro fragment anglais restant dans les
27 maquettes.

## Ancrage sur SILLAGE

Tant qu'à traduire, les contenus d'exemple ont aussi été ancrés sur la
maison SILLAGE plutôt que de rester génériques — le système de langage
liste maintenant « chantier · trace · réception · refuser » plutôt que
des mots abstraits, la home réécrite oppose « Pilotez vos chantiers en
temps réel » à « Ce qui reste quand le chantier n'existe plus », et les
angles de contenu parlent de reprises contestées. Cohérent avec les
treize pages du tour précédent.

## Vérification

Contrôle de types TypeScript réel : zéro erreur venant de ce fichier. (La
seule erreur signalée dans mon environnement est le `<style jsx>` déjà
présent dans votre dépôt avant mes modifications.)

## Fichiers inclus

- `app/[lang]/brand-narrative-architecture/page.tsx`
