# Strawberry — chantier 1 : SILLAGE passe à vingt pièces

Un seul fichier, `lib/sample-sillage.ts`.

## Ce qui manquait

Le document de démonstration annonçait quatorze pièces et en contenait
quatorze — alors que BRAND NARRATIVE ARCHITECTURE en vend vingt. Les six
playbooks (marketing, contenu, réseaux sociaux, vente, support, RH &
management) n'existaient nulle part dans le document. Un prospect qui
lisait SILLAGE en entier voyait donc une commande amputée de six pièces
qu'il paie.

## Ce qui a été ajouté

Six nouvelles parties (n° 15 à 20), en français et en anglais, écrites dans
le même registre que les quatorze existantes : contenu spécifique à
SILLAGE, jamais du remplissage générique. Chacune contient de la matière
réellement opérationnelle, avec la même grammaire de blocs que le reste du
document (listes, tableaux, citations, avant/après).

- **15 — Playbook marketing.** Quatre angles à explorer, quatre à refuser,
  et le test avant publication (« un concurrent pourrait-il publier ceci en
  changeant seulement le logo ? »).
- **16 — Playbook contenu.** Six règles d'écriture, plus un avant/après qui
  montre la réécriture concrète d'une phrase générique.
- **17 — Playbook réseaux sociaux.** Tableau par plateforme (usage,
  cadence), règle des commentaires, et ce qui ne se publie jamais.
- **18 — Playbook vente.** La question d'ouverture, un tableau des quatre
  objections dans l'ordre où elles arrivent — avec ce que chacune cache et
  la réponse — puis la clôture qui invite le non.
- **19 — Playbook support.** Quatre règles, plus le cas le plus grave
  traité en détail (une donnée perdue chez une maison qui vend une trace),
  avec le message type.
- **20 — Playbook RH & management.** La question qui tranche les
  arbitrages, les règles de recrutement, et l'intégration qui commence par
  l'ennemi plutôt que par le produit.

## Ce qui a été mis à jour partout ailleurs

« quatorze pièces » → « vingt pièces », dans l'en-tête, le sommaire, le
bloc d'avertissement sur l'extrait partiel, et le commentaire en tête de
fichier — versions française et anglaise. La liste de ce qui est retiré de
l'édition web mentionne désormais aussi les playbooks en version longue.

## Vérification

Contrôle de types TypeScript réel (`tsc`) sur `sample-sillage.ts` et sur la
page qui le consomme : zéro erreur. Comptage confirmé : 20 parties en
français, 20 en anglais.

## Fichiers inclus

- `lib/sample-sillage.ts`
