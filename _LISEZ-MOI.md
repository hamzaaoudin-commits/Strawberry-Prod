# Strawberry — correctif du build cassé

1 fichier. **Remplace celui du patch précédent.**

## L'erreur

```
./components/strawberry/why-section.tsx:5:1
Export pick doesn't exist in target module
Did you mean to import isLang?
```

J'ai importé `pick` et `Lang` depuis `@/lib/i18n`. Or :

- **`pick`** vit dans `@/lib/t`
- **`Lang`** vit dans `@/lib/lang`

`@/lib/i18n` réexporte bien `Lang`, mais pas `pick` — il expose `useT` et
`useLang`, qui sont les équivalents pour les composants qui n'ont pas la
langue en propriété.

J'ai écrit l'import de mémoire, en recopiant un motif que j'avais vu
ailleurs, sans vérifier ce que le module exporte réellement. Les autres
composants du site utilisent `import { pick } from "@/lib/t"` — il aurait
suffi d'en ouvrir un.

## Le correctif

```ts
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
```

## Pourquoi mon contrôle ne l'a pas vu

Mon contrôle de types tourne avec des déclarations de substitution pour
les modules absents de mon environnement. `@/lib/i18n` étant un fichier
réel du projet, il aurait dû être résolu — mais l'erreur était noyée dans
la liste des modules manquants (`next/link`, `next/image`,
`@vercel/analytics`) que je filtre à l'affichage.

Je filtrais donc précisément la ligne qui comptait. Pour les prochains
composants, je vérifierai les exports du module avant d'écrire l'import,
et je lirai la sortie non filtrée.

## Vérification

`pick` confirmé dans `lib/t.ts` ligne 9, `ViewTracker` dans
`view-tracker.tsx` ligne 17, classes `kicker` et `h-section` présentes
dans `globals.css`. Contrôle de types : aucune erreur sur ce fichier.
