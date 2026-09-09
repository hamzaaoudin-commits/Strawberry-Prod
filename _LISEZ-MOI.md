# Strawberry — le design de /artistes réparé

Deux fichiers : `app/globals.css` et `app/[lang]/artistes/page.tsx`.

## Ce que j'avais raté

Au portage, je n'ai repris que **les variables de couleur** de MOMENTUM.
Or son design repose aussi sur une trentaine de **classes utilitaires** —
`bloc`, `cadre`, `titre-1`, `titre-2`, `carte`, `bouton`, `etiquette`,
`prix`, `silence`, `chapo`… — que les quinze composants portés utilisent
dans chaque balise.

Sans elles, chaque `className` de la page pointait vers du vide. D'où
exactement ce que vous décrivez : pas de fond, pas de rythme vertical,
pas de découpage. Les composants étaient là, leur mise en page ne
l'était pas.

## Ce qui est corrigé

**L'échafaudage est porté** (10 Ko de règles), avec les couleurs
converties aux jetons du studio comme le reste.

**La page a enfin un conteneur.** Elle rendait un fragment nu (`<>`),
donc elle n'avait aucun élément sur lequel poser un fond. Elle est
maintenant enveloppée dans `.page-artistes`, qui porte le fond et la
couleur de texte.

**Les deux polices de MOMENTUM sont chargées** — Archivo et JetBrains
Mono — dans la page, pas dans le layout : elles ne concernent qu'elle.
Et surtout, `--font-sans` et `--font-mono` sont **redéfinies dans le
périmètre de `.page-artistes`**. C'était le piège : les utilitaires
portés appellent ces variables, qui valent Playfair et DM Sans partout
ailleurs sur le site. Sans cette redéfinition, la page se serait affichée
dans la typographie du studio sur une mise en page qui n'a pas été
dessinée pour elle.

## Cloisonnement

Le `body` de MOMENTUM (fond, police, débordement) n'est **pas** porté :
il s'appliquerait à tout le site. Tout passe par `.page-artistes`, qui ne
concerne que cette page. Le reste du site est inchangé.

## Vérification

Contrôle de types : zéro erreur.

Si quelque chose cloche encore visuellement, dites-moi quelle section :
il restera probablement une classe ou deux définies ailleurs que dans le
bloc que j'ai porté.
