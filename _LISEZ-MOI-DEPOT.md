# Strawberry Production — refonte de la home

Quatorze fichiers, dont trois nouveaux. **Les chemins comptent** : les composants
s'importent entre eux en relatif, donc un fichier posé ailleurs qu'à son
emplacement casse le build (c'est ce qui a produit
`Cannot find module './animated-orb'`).

## Comment déposer

1. Dézippez l'archive. Vous obtenez un dossier `Strawberry-Prod/` contenant
   `app/`, `components/` et `lib/`.
2. Sur GitHub : `Add file` → `Upload files`.
3. Glissez le **contenu** du dossier (les trois dossiers `app`, `components`,
   `lib`), pas le dossier lui-même.
4. GitHub conserve les chemins et chaque fichier écrase son homologue.
   Validez en un seul commit.

Aucune suppression n'est nécessaire, ni avant ni après.

## Ce que contient le dépôt

Nouveaux :
- `components/strawberry/mechanism-section.tsx`
- `app/[lang]/offres/page.tsx`
- `app/[lang]/offres/layout.tsx`

Modifiés :
- `app/[lang]/page.tsx`
- `app/[lang]/le-livre/page.tsx`
- `app/sitemap.ts`
- `lib/config.ts`
- `components/strawberry/` : hero-section, problem-section, offers-section,
  about-section, navbar, footer, cta-banner

## À renseigner avant de mettre en ligne

Tout est regroupé en bas de `lib/config.ts` :

- `SCARCITY` — trimestre, places restantes, prochaine ouverture. Actuellement
  T3 2026 / 2 places / 1er octobre. Une rareté fausse se retourne contre celui
  qui la publie.
- `RADAR_COUNT` — nombre de marques lues. Actuellement 340.
- `BOOK_URL` — lien d'achat du livre. Tant qu'il pointe sur `/#contact`, la
  meilleure preuve d'autorité du site est un cul-de-sac.
- `BOUND_EDITION.price` — prix de l'édition reliée. 500 € est un placeholder.

Et dans `components/strawberry/about-section.tsx`, la constante `ORIGIN` : trois
emplacements marqués « À ÉCRIRE » (avant / la rupture / depuis). C'est la seule
partie du site que personne ne peut rédiger à votre place.

## Vérifications après déploiement

- `/fr/offres` s'affiche avec l'échelle des quatre offres.
- La home ne mentionne plus RADAR ni l'audit à 490 € : uniquement
  BRAND NARRATIVE ARCHITECTURE.
- Tous les boutons principaux disent « Commander le travail ».
- Le bloc d'investissement affiche prix, garantie V2, rareté datée et édition
  reliée.
- `founder.jpg` s'affiche dans la section studio.
