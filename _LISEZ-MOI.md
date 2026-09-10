# Strawberry — refonte complète à la charte THE ROOM

Trois fichiers, et pourtant tout le site change : la charte est pilotée
par deux variables de police et un dégradé, donc les remplacer suffit.
Aucune mise en page n'est réécrite.

## Les polices

Playfair Display et DM Sans laissent la place aux quatre familles de
THE ROOM :

- **Bricolage Grotesque** pour les titres (remplace Playfair)
- **Hanken Grotesk** pour le texte (remplace DM Sans)
- **Instrument Serif** en italique, pour les accroches
- **Space Mono** pour les surtitres et les libellés

Les variables gardent leurs noms — `--font-playfair`, `--font-dm-sans`.
Elles sont référencées par les jetons de `globals.css` et par une
centaine de classes dans les composants ; les renommer aurait voulu dire
tout réécrire pour un gain nul. Elles désignent désormais un rôle, serif
de titre et sans de texte, pas une fonte précise.

## Les marqueurs de la charte

**Le dégradé** passe de 135° à **108°**, l'angle de THE ROOM. Tout ce qui
s'appuie dessus — titres en dégradé, boutons pleins — bascule d'un coup.

**Les surtitres et pastilles passent en mono.** C'est le marqueur le plus
reconnaissable de cette charte après le dégradé ; en sans, ils étaient
neutres.

**Une classe `accroche`** est ajoutée : l'italique Instrument Serif de
THE ROOM, disponible partout, à poser là où une phrase doit sonner plutôt
qu'informer.

Les boutons étaient déjà en pilule avec le bon dégradé : rien à changer.

## La page artistes rentre dans le rang

Elle gardait la typographie de MOMENTUM (Archivo, JetBrains Mono) via une
redéfinition locale. Dans une refonte complète, cette exception n'a plus
lieu d'être : la redéfinition et le chargement des deux polices sont
retirés, et ses utilitaires portés héritent simplement des valeurs du
site. Sa mise en page, elle, est intacte.

## À vérifier après déploiement

**Bricolage Grotesque est une police à taille optique.** Elle est plus
large et plus dense que Playfair : les titres longs peuvent se comporter
autrement, notamment sur mobile. C'est le point à regarder en premier.

`/the-room` charge encore ses polices par un lien Google Fonts, devenu
redondant puisqu'elles sont maintenant chargées globalement. Sans
conséquence visuelle, mais deux requêtes évitables — je peux le retirer
si vous voulez.

## Vérification

Contrôle de types : zéro erreur venant de ce code.
