# Strawberry — /lieux aux couleurs du studio

8 fichiers. Le design, les animations et le copywriting de NOCTA sont
strictement inchangés : seules les couleurs bougent.

## Comment

Toute la charte de cette page est pilotée par les variables CSS du bloc
`:root` de `styles.css`. Il a suffi de remplacer leurs valeurs — aucune
règle de mise en page n'est réécrite.

**Correspondances**

| Rôle | NOCTA | Strawberry |
|---|---|---|
| Fond principal | `#0a0910` | `#0a0a0a` |
| Fond alterné | `#100e1a` | `#0d0d0d` |
| Cartes | `#181425` | `#121212` |
| Filets | `#2a2438` / `#211d2e` | rampe blanche du studio |
| Accent primaire | corail `#ff5d57` | rouge de marque `#e63946` |
| Accent secondaire | iris `#7b6cff` | rouge vif `#ff1a1a` |
| Texte | crème `#f3efe9` | blanc |
| Texte atténué | gris-violet | rampe d'opacité du studio |

Le dégradé garde son angle d'origine (108°) : seules ses deux extrémités
changent, donc tout ce qui s'appuie dessus — wordmark, chiffres, prix,
poignée du comparateur — conserve exactement le même rendu, en rouge.

## Les couleurs cachées, aussi

Au-delà du bloc de variables, 33 couleurs étaient écrites en dur dans la
feuille : lueurs, ombres portées, dégradés radiaux d'ambiance. Toutes
converties. Et surtout, deux valeurs vivaient dans le **JavaScript du
canvas bokeh 3D** — le brouillard de la scène et la palette des
particules. Sans elles, le hero aurait continué d'afficher des particules
corail et indigo sur un site rouge. Converties également. Les chevrons
encodés en URL SVG dans le CSS aussi.

## Preuve que rien d'autre n'a bougé

Comparaison ligne à ligne avec les fichiers d'origine : les seules
différences hors couleurs sont les commentaires que j'ai ajoutés. Côté
JavaScript, 4 lignes modifiées au total — le brouillard et la palette du
bokeh. Aucune règle de mise en page, aucune animation, aucun texte.

## Une note sur les noms de variables

`--coral` et `--iris` gardent leurs noms alors qu'ils ne sont plus
corail ni iris. Les renommer aurait voulu dire modifier les 40 Ko de
règles qui les référencent — exactement ce qu'on évite. Ils désignent
désormais un rôle, pas une teinte : accent primaire et accent secondaire.
C'est indiqué en commentaire dans le fichier.

## Les polices

Inchangées : Bricolage Grotesque, Instrument Serif, Hanken Grotesk, Space
Mono. Vous avez demandé les couleurs, et la typographie relève du design.
Dites-moi si vous voulez aussi passer à Playfair Display et DM Sans.
