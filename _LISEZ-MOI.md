# Strawberry — patch : nav, chiffre RADAR, voix

Six fichiers. Glissez-les dans leurs dossiers exacts (`app/[lang]/...`,
`components/strawberry/...`, `lib/...`), jamais le dossier `strawberry-patch`
lui-même. Chaque fichier écrase son homologue.

## Ce qui change

**1. Le chiffre RADAR est unifié à 350.** `lib/config.ts` est la seule source
— la home, la page RADAR et sa FAQ le lisent tous depuis `LIVE.radar.count`.
Avant : la home affichait 340 pendant que RADAR et sa FAQ affichaient 350 en
dur à six endroits. Maintenant, changer ce chiffre à l'avenir ne se fait
qu'à un seul endroit.

**2. Le nav et le footer n'affichent plus les trois prix côte à côte.** Le
menu « Offres » montrait RADAR à 15€, l'Audit à 490€ et l'Architecture à
4 500€ sur trois lignes, en permanence, sur chaque page — y compris sur la
home qui ne vend que l'Architecture. Il montre maintenant trois noms avec un
sous-titre d'une ligne (« L'archive à consulter », « Le diagnostic », « La
commande signature »), sans prix. Le choix reste visible, la comparaison de
prix qui parasitait la home a disparu.

**3. La voix bascule sur « nous » à trois endroits qui étaient restés en
« je ».** FAQ (« si le livrable ne tape pas juste, nous écrivons une V2 »),
page Méthode et page de remerciement. La bio du fondateur sur `/about` et
les citations du client fictif dans le document SILLAGE n'ont pas été
touchées — la première est une biographie, qui se raconte légitimement en
« je », et la seconde est la voix d'un personnage, pas celle du studio.
Dites-moi si vous voulez que je les bascule aussi.

**4. Une faute au passage** : la page de remerciement disait « vous
n'entendras » (tutoiement) dans une phrase au vouvoiement. Corrigé en
« vous n'entendrez ».

## Fichiers inclus

- `lib/config.ts`
- `lib/faqs.ts`
- `components/strawberry/navbar.tsx`
- `components/strawberry/footer.tsx`
- `app/[lang]/strawberry-method/page.tsx`
- `app/[lang]/thank-you/page.tsx`
