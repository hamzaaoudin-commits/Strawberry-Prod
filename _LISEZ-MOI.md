# Strawberry — patch : dix changements (build corrigé)

Huit fichiers. Remplace le patch précédent, qui cassait le build.

## Le bug du build, et pourquoi il m'a échappé

`problem-section.tsx` ligne 68 : j'avais attaché le `ref` de
`useScrollReveal` à un `<ul>`, alors que ce hook renvoie une référence
typée `HTMLDivElement`. TypeScript refuse — d'où l'échec du build Vercel.

La cause de fond de mon côté : je validais mes fichiers avec esbuild, qui
ne vérifie **que la syntaxe**, jamais les types. Le build Vercel, lui, fait
un vrai contrôle de types. Mes vérifications passaient donc alors que le
build échouait.

Pour ce patch, j'ai installé TypeScript et lancé un vrai `tsc` sur les huit
fichiers : zéro erreur venant de mon code. (Les seules erreurs restantes
dans mon environnement viennent de Next.js et `@vercel/analytics` qui n'y
sont pas installés, et de trois `<style jsx>` déjà présents dans votre
dépôt avant mes modifications — vérifié sur la version en ligne. Ceux-là
compilent sans problème sur Vercel.)

## Le correctif

Le `ref` est maintenant porté par un `<div>` qui enveloppe la liste ; le
`<ul>` et les `<li>` restent en place, donc le balisage sémantique de la
liste est préservé et le rendu est identique à ce qui était prévu.

## Les dix changements (inchangés par rapport au patch précédent)

1. **Logo de chargement** — « STRAWBERRY PROD. », tout en rouge, en majuscules.
2. **La triade** « Rien à quoi appartenir / Rien à défendre / Rien à
   répéter à un ami » — sortie du paragraphe, en trois lignes qui entrent
   l'une après l'autre.
3. **Le schéma sans/avec architecture** — les cinq points se déplacent
   réellement de la dispersion vers la ligne montante, en boucle, avec le
   libellé qui bascule. Les deux vignettes figées restent sous mouvement
   réduit.
4. **« Ça a manqué de la bonne cause. »** — enfle brièvement puis reprend
   sa taille au scroll.
5. **Les quatre fausses causes** — révélation en trois temps : le mot, puis
   la rature qui se dessine et la raison, puis la flèche avec la solution.
6. **Le bandeau rouge REFUS** — retiré de la home.
7. **Le bandeau rouge ARCHITECTURE** — retiré.
   `components/strawberry/section-divider.tsx` n'est plus appelé nulle
   part, vous pouvez le supprimer.
8. **La phrase cassée de la page studio** — échappements Unicode doublés
   (`\\u00e9` au lieu de `\u00e9`), réécrite avec les vrais accents.
9. **Le message du formulaire** — « Où en êtes-vous aujourd'hui, et
   qu'aimeriez-vous que le marché comprenne de vous ? »
10. **La section « Au-delà du document »** — retirée avec ses traductions.

## Fichiers inclus

- `components/strawberry/loading-intro.tsx`
- `components/strawberry/problem-section.tsx`
- `components/strawberry/architecture-diagram.tsx`
- `components/strawberry/diagnosis-section.tsx`
- `app/[lang]/page.tsx`
- `app/[lang]/brand-narrative-architecture/page.tsx`
- `app/[lang]/about/page.tsx`
- `components/strawberry/contact-section.tsx`
