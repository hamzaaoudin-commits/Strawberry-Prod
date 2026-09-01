# Strawberry — patch : allègement et animations

Neuf fichiers.

## Home

- **Le prix retiré du hero.** La ligne d'ancrage redevient « Vingt pièces
  écrites à la main. Quatre maisons par trimestre. »
- **Les points du schéma clignotent** à chaque bascule d'état, l'un après
  l'autre (150 ms d'écart), aussi bien à l'état dispersé qu'à l'état
  structuré. La clé React inclut l'état, sans quoi l'animation ne se
  serait jouée qu'au tout premier rendu.
- **Les fausses causes ralenties** : 1 100 ms entre chaque bloc au lieu de
  420 ms. Elles apparaissent vraiment une par une maintenant.
- **La section IA retirée de la home** (« L'IA sature votre marché… », la
  citation, le bouton déplier et le paragraphe sur la valeur qui a changé
  de camp). Elle reste sur la page Architecture, où elle est visible
  immédiatement.
- **Hier / Aujourd'hui animé** : le panneau gauche glisse depuis la
  gauche, le trait rouge se déploie du centre, le panneau droit arrive
  depuis la droite avec 620 ms de décalage.
- **L'offre remonte dans la page** : elle passe avant les statistiques et
  le mécanisme, qui la retardaient sans être nécessaires pour la
  comprendre. Ils la suivent maintenant comme justification.
- **Les deux garanties retirées** (garantie V2 et fenêtre avant
  production), déjà couvertes par les CGV.

## Page Audit

- « inventée pour l'exercice, afin qu'aucun client n'ait à servir de
  vitrine » retiré (FR et EN).
- L'Atlas retiré de cette page.

## Page Architecture

- **Toute la section « pourquoi un humain » retirée**, avec ses quatre
  cartes, sa citation et son entrée de navigation.
- **La section « ce que vous recevez » retirée** : redondante avec « les
  vingt pièces, sans exception » qui suit.
- L'Atlas retiré de cette page.

## Page Méthode

- **L'Atlas déplacé ici**, juste avant le CTA final.

## Page Studio

- **Toute la section « La discipline » retirée**, avec ses données et son
  hook d'animation.

## Ce qui n'est pas fait

**Les images.** Je n'ai pas d'outil de génération d'images dans cet
environnement, et le site n'utilise aujourd'hui aucune photographie —
uniquement du SVG dessiné. Ajouter de vraies images demande soit des
fichiers de votre côté (photos de vous, de documents, de chantiers), soit
une décision de direction artistique qu'il vaut mieux prendre avant de
coder quoi que ce soit. Dites-moi lesquelles vous avez et où vous les
voulez.

## Vérification

Contrôle de types TypeScript réel sur les neuf fichiers : zéro erreur.
(Les seules erreurs signalées dans mon environnement sont les `<style
jsx>` déjà présents dans votre dépôt avant mes modifications.)
