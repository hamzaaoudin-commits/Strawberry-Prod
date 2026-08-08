# Strawberry — patch : les vrais noms d'offres, en majuscules

Deux fichiers : `components/strawberry/navbar.tsx` et
`components/strawberry/footer.tsx`.

## Ce qui change

Quand j'avais retiré les prix du menu "Offres", j'avais aussi raccourci
"BRAND NARRATIVE AUDIT" et "BRAND NARRATIVE ARCHITECTURE" en "L'audit" et
"L'architecture" — une simplification que vous n'aviez pas demandée.
Rétabli : les trois noms réels, en majuscules, au même traitement que
RADAR — dans le menu du nav (desktop et mobile) et dans le footer. Les
sous-titres d'une ligne ("Le diagnostic", "La commande signature")
restent inchangés, ce n'était pas le nom de l'offre.

## Fichiers inclus

- `components/strawberry/navbar.tsx`
- `components/strawberry/footer.tsx`
