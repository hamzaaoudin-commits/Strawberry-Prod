# Strawberry — patch : des tuiles visuelles sur les quatre onglets

Deux fichiers : `components/strawberry/deliverables-tabs.tsx` et
`components/strawberry/offers-section.tsx`.

## Ce que vos captures Brevo montraient

Des tuiles à icône par fonctionnalité (Email, SMS, WhatsApp...), pas de
liste de texte brute. En vérifiant votre propre site, un seul des quatre
onglets de la section offre (« Les six playbooks ») avait déjà exactement
ce traitement — icône, nom, et le bénéfice qui apparaît au survol. Les
trois autres (Diagnostic, Identité, Pièces & déploiement) n'étaient qu'une
liste de texte numérotée, sans aucune tuile. C'est le vrai trou visuel de
cette section — pas un manque de captures d'écran de produit, qui ne
collerait pas à votre identité visuelle (aucune photo, aucune interface
littérale ailleurs sur le site), mais un manque de la grille d'icônes que
vous aviez déjà et n'utilisiez qu'à un seul endroit.

## Ce qui change

La grille de tuiles (icône + nom au repos, bénéfice au survol) s'applique
maintenant aux quatre onglets, pas un seul. Chaque tuile réutilise le même
langage graphique déjà en place — traits rouges fins, fond dégradé sombre,
aucune photo, aucune icône générique de banque d'images. Rien de nouveau
visuellement, juste étendu là où il manquait.

## Fichiers inclus

- `components/strawberry/deliverables-tabs.tsx`
- `components/strawberry/offers-section.tsx`
