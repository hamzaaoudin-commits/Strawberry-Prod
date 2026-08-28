# Strawberry — patch : les maquettes ancrées sur SILLAGE

Un seul fichier, `app/[lang]/brand-narrative-architecture/page.tsx`.

## 1. Les pages parlent enfin d'une vraie maison

C'était le plafond réel. Le corps de texte que j'avais écrit décrivait *ce
que fait* un récit tarifaire, *comment* se décline une biographie — de la
méta-description. Un lecteur y voit un modèle de page, quelle que soit la
qualité de la mise en page, parce que ce texte pourrait appartenir à
n'importe qui.

Les treize pages sont réécrites sur SILLAGE, la maison fictive du document
de démonstration déjà présent sur le site : Claire Vasseur, Lyon, les
quatorze mille euros payés pour un chantier bien fait qu'elle ne pouvait
pas prouver, l'abonnement à 89 € comparé au mauvais objet, BATIFLOW et sa
phrase que onze concurrents pourraient signer. Le livre feuilletable et le
document SILLAGE se répondent maintenant au lieu de coexister.

## 2. Tout est passé en français

Un fondateur français qui feuilletait l'aperçu de ce qu'il allait recevoir
lisait un document anglais, sur un site parfaitement bilingue partout
ailleurs. Corps de texte, notes de marge, titres, listes, tableaux,
citations, en-têtes de section (« 02 · IDENTITÉ », « 03 · DÉPLOIEMENT ») :
tout est en français.

## 3. Les fausses lignes de texte ont disparu

Trois maquettes dessinées à la main (la colonne vertébrale, le récit
d'origine, le guide de cohérence) simulaient encore leur corps de texte
avec des **barres grises** — dix-neuf au total dans le fichier. C'est
exactement l'artefact « placeholder » que j'avais éliminé sur les treize
autres pages, resté en place ici. Remplacées par de la vraie prose SILLAGE,
avec les mêmes micro-irrégularités que le reste. Il n'en reste zéro dans le
fichier.

## Ce que je n'ai volontairement pas densifié

La couverture, la dédicace et la page de signature restent dépouillées.
Dans un livre imprimé, ces trois pages **sont** vides — les remplir ferait
moins vrai, pas plus. C'est la seule raison pour laquelle elles portent
peu de texte, et c'est intentionnel.

## Vérification

Contrôle de types TypeScript réel : zéro erreur venant de ce fichier. (La
seule erreur signalée dans mon environnement est le `<style jsx>` déjà
présent dans votre dépôt avant mes modifications — Next.js le gère.)

## Fichiers inclus

- `app/[lang]/brand-narrative-architecture/page.tsx`
