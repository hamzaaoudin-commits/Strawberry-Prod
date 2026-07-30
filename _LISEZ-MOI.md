# Correctif — fichiers parasites à la racine

Le code livré était bon : il compile. Ce qui a cassé le build, c'est le dépôt.

Lors du dernier dépôt sur GitHub, onze fichiers sont arrivés **à la racine**
au lieu d'aller dans `components/strawberry/`, `lib/` et `app/`. Les bons
fichiers sont bien à leur place — mais ces copies parasites subsistent, et
TypeScript vérifie TOUS les fichiers du dépôt, même ceux que personne
n'importe. `about-section.tsx` à la racine cherchait `./animated-orb` à côté
de lui, ne le trouvait pas, et le build s'arrêtait là.

Un dossier `mnt/` s'est également créé, avec un arbre dupliqué à l'intérieur.

## Ce que fait ce zip

Il vide ces quatorze fichiers. Ils deviennent des coquilles de quinze lignes
qui n'importent plus rien et ne peuvent plus casser quoi que ce soit.

**Déposez le contenu à la racine du dépôt, comme d'habitude.**

Vérifié : le build passe sur l'état réel de votre dépôt, et la nouvelle page
d'accueil s'affiche correctement.

## Recommandé, mais optionnel

Une fois le build vert, vous pouvez supprimer ces quatorze fichiers depuis
GitHub, ainsi que le dossier `mnt/` en entier. Ils ne servent à rien.

## Pour que ça ne recommence pas

Ce genre d'aplatissement arrive avec le glisser-déposer de GitHub. Dans la
fenêtre d'upload, glissez le **dossier** (`components`, `lib`, `app`) et non
son contenu : c'est le dossier qui porte le chemin.
