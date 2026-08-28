# Strawberry — patch : dix changements

Huit fichiers. Glissez-les dans leurs dossiers exacts.

## 1. Le logo de chargement

`loading-intro.tsx` — « Strawberry Prod. » devient « STRAWBERRY PROD. »,
entièrement en rouge (avant : dégradé sur les dix premières lettres, blanc
sur le reste).

## 2. La triade en liste

`problem-section.tsx` — « Rien à quoi appartenir, rien à défendre, rien à
répéter à un ami » sortait en fin de paragraphe, où l'œil la traversait
sans s'arrêter. Devient trois lignes distinctes, chacune précédée du signe
✦ rouge, qui entrent l'une après l'autre au scroll.

## 3. Le schéma sans/avec architecture, animé

`architecture-diagram.tsx` — réécrit. Ce n'est plus deux vignettes figées
côte à côte : c'est un seul schéma où les mêmes cinq points se déplacent
réellement de la dispersion vers la ligne qui monte, la ligne se trace
pendant qu'ils se rangent, et le libellé bascule avec l'état. La boucle
rejoue la transformation en continu, pour que quelqu'un qui arrive en
cours de cycle la voie entière.

Sous mouvement réduit (réglage système), les deux vignettes côte à côte
d'avant restent affichées — la comparaison reste lisible sans animation.

## 4. « Ça a manqué de la bonne cause. » enfle au scroll

`diagnosis-section.tsx` — la phrase grossit brièvement (×1,12) puis reprend
sa taille quand la section entre dans le champ de vision.

## 5. Les quatre fausses causes, révélées en trois temps

`diagnosis-section.tsx` — exactement la séquence demandée, par bloc :
le mot apparaît (« Un logo refait ») → le trait de rature se dessine de
gauche à droite → la raison de l'échec monte (« Nouvelle vitrine, même
confusion... ») → la flèche arrive avec votre solution (« → Chez nous, le
logo vient après la doctrine »). Chaque bloc démarre 420ms après le
précédent, donc le raisonnement se déroule au lieu d'être livré tout fait.

## 6. Le bandeau rouge REFUS, retiré

`app/[lang]/page.tsx` — retiré de la home, import compris.

## 7. Le bandeau rouge ARCHITECTURE, retiré

`brand-narrative-architecture/page.tsx` — « L'ARCHITECTURE / Ce que vous
êtes sur le point de commander », retiré, import compris.

**Note :** `components/strawberry/section-divider.tsx` n'est désormais
appelé nulle part. Vous pouvez le supprimer du dépôt.

## 8. La phrase cassée de la page studio

`about/page.tsx` — c'était un vrai bug, pas une coquille : les
échappements Unicode étaient doublés dans le code (`\\u00e9` au lieu de
`\u00e9`), donc les codes s'affichaient en clair au lieu des accents.
Réécrite avec les vrais caractères accentués. C'était la seule ligne du
fichier touchée.

## 9. Le message du formulaire de contact

`contact-section.tsx` — « Une ligne suffit. » →  « Où en êtes-vous
aujourd'hui, et qu'aimeriez-vous que le marché comprenne de vous ? »
Une question ouverte donne un point de départ à quelqu'un qui ne sait pas
par où commencer, là où « une ligne suffit » ne disait que la longueur
attendue.

## 10. La section « Au-delà du document », retirée

`brand-narrative-architecture/page.tsx` — la section entière sur l'objet
relié (impression, reliure main, édition numérotée) est retirée, avec ses
textes de traduction FR et EN devenus orphelins, puisque vous ne
fournissez plus l'objet.

## Restent à traiter (pas dans ce patch)

- **Les visuels de l'artefact** — j'ai besoin de savoir ce qui cloche
  précisément avant de refaire les 27 maquettes.
- **Le document SILLAGE** — il contient 14 sections, pas 20. Il manque les
  six playbooks (marketing, contenu, réseaux sociaux, vente, support,
  RH & management).

## Fichiers inclus

- `components/strawberry/loading-intro.tsx`
- `components/strawberry/problem-section.tsx`
- `components/strawberry/architecture-diagram.tsx`
- `components/strawberry/diagnosis-section.tsx`
- `app/[lang]/page.tsx`
- `app/[lang]/brand-narrative-architecture/page.tsx`
- `app/[lang]/about/page.tsx`
- `components/strawberry/contact-section.tsx`
