# Strawberry — la home allégée, la méthode corrigée

4 fichiers.

## Le défilement démarrait trop tôt

La translation horizontale commençait dès la première image du
défilement, avant qu'on ait eu le temps de lire le titre qui venait
d'apparaître. **Les douze premiers pourcents du défilement ne font
maintenant plus rien** — une zone de lecture avant que les cartes ne
commencent à bouger. La translation elle-même se joue sur les 83 %
suivants.

## L'affirmation fausse, corrigée

La première étape disait « Nous venons chez vous » — une visite sur
place qui n'a jamais existé dans le vrai processus. Elle devient :

> **Vous répondez, nous dépouillons.**
> Vous remplissez un questionnaire d'onboarding complet. Nous le croisons
> avec l'analyse de tous vos supports — avis clients, réseaux sociaux,
> site web — pour commencer le travail.

Vérifié : cette phrase n'existait nulle part ailleurs sur une page
réellement affichée. Elle subsiste dans un jeu de clés `st.*` de
`i18n.js` qui n'est plus rendu depuis le retrait de la méthode des pages
de terrain — signalé comme dette de nettoyage, pas touché aujourd'hui.

## La tournée, vérifiée avant de retirer l'offre

Recompté avant toute suppression : les six pièces, les vingt éléments
issus des quatre onglets de l'offre — playbooks nommés un par un, le
récit fondateur, les deux axes de positionnement, les quatre segments
d'audience, la pièce signature — tous confirmés présents.

## Trois sections retirées de la home

**L'offre.** Une fois la tournée complète, elle ne faisait plus que
répéter en plus court ce qui venait d'être dit en détail juste au-dessus.

**Après le paiement.** Retirée avec l'offre.

**Le livre.** Retiré de la home pour la raison que vous avez donnée :
trop de boutons d'achat qui se suivent finissent par se neutraliser les
uns les autres. Il reste visible à deux endroits :
- **La page Studio**, à la suite du bloc « ce qu'est ce studio »
- **La page Méthode**, à la suite de l'Atlas — l'un et l'autre déjà
  déplacés là pour la même raison lors d'un patch précédent

## Vérification

Contrôle de types : zéro erreur nouvelle. Deux erreurs préexistantes sur
`<style jsx>` dans la page Studio, propres à mon environnement de
contrôle allégé (le typage `styled-jsx` n'y est pas installé) — sans
rapport avec ce patch.
