# Strawberry — le texte invisible, expliqué et corrigé

1 fichier. Vous aviez raison, c'était illisible.

## Ce qui s'est passé

J'ai écrit `color:var(--muted)` pour le texte des cartes et de la nouvelle
liste des six pièces — en supposant que cette variable existait dans la
feuille de style du gabarit (`nocta/styles.css`). Elle n'y existe pas.

**Elle existe ailleurs.** `app/globals.css`, la feuille de style du site
moderne, définit bien `--muted` — mais comme la teinte de fond d'un
duo de jetons (`--muted` / `--muted-foreground`), à 5 % de blanc. C'est
la moitié qu'on n'est pas censé lire : quasi transparente sur un fond
sombre. Les deux feuilles de style cohabitent sur la même page, donc
cette valeur s'est appliquée par héritage — d'où le texte presque
invisible sur vos captures.

## La correction

`var(--smoke)` — la vraie variable de texte adouci du gabarit de
terrain, définie dans son propre fichier à 55 % de blanc, et déjà
utilisée partout ailleurs dans cette page pour exactement ce rôle. Neuf
occurrences corrigées : les trois cartes de cas réels, et les six lignes
de la liste des pièces.

## Vérification

Aucune occurrence de `--muted` ne subsiste dans ce fichier. Balises
comptées équilibrées.
