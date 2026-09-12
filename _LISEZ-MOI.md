# Strawberry — un rouge plus vif

Les fichiers les plus visibles sont joints, mais **le remplacement a touché
51 fichiers** : voir la liste de commandes en bas pour l'appliquer d'un
coup sur le dépôt entier.

## Le changement

| | Avant | Après |
|---|---|---|
| Rouge de marque | `#e63946` | **`#ff2233`** |
| Extrémité claire | `#ff1a1a` | **`#ff4d2e`** |
| Variante sombre | `#dc2626` | **`#e0102a`** |

L'ancien `#e63946` avait un canal bleu à 70 sur 255 : c'est ce qui le
tirait vers le brique et lui donnait cet air poussiéreux. Le nouveau monte
le rouge au maximum et écrase le bleu à 51.

Pour l'extrémité claire du dégradé, je suis parti vers l'**orangé** plutôt
que de rester sur un rouge pur. C'est ce qui produit l'effet éclairant —
un dégradé rouge → rouge reste plat, un dégradé rouge → orange semble
émettre de la lumière. Et ça évite le rose, qui est le risque quand on
éclaircit un rouge en restant dans le même ton.

## Ce qui est couvert

Le remplacement a suivi la couleur partout où elle était écrite en dur,
pas seulement dans les variables :

- les jetons de `globals.css` et la palette de `nocta/styles.css` ;
- les dégradés inline des composants (bouton de la navbar, liserés,
  `ts-out`) ;
- les valeurs `rgba()` des lueurs, ombres et fonds radiaux ;
- les couleurs encodées en URL dans les SVG (`%23e63946`) ;
- **la palette du canvas bokeh 3D** dans `app.js`, en hexadécimal
  JavaScript — sans ça les particules du hero seraient restées à
  l'ancienne teinte sur un site entier au nouveau rouge ;
- les documents statiques du dossier `public/`.

## Pour l'appliquer partout

Le zip ne contient que les fichiers principaux. Pour couvrir les 51, à la
racine du dépôt :

```
grep -rl -e e63946 -e ff1a1a -e dc2626 -e "230,57,70" -e "255,26,26" \
  --include=*.tsx --include=*.ts --include=*.css --include=*.js \
  --include=*.html . | xargs sed -i '' \
  -e 's/e63946/ff2233/g' -e 's/E63946/ff2233/g' \
  -e 's/ff1a1a/ff4d2e/g' -e 's/FF1A1A/ff4d2e/g' \
  -e 's/dc2626/e0102a/g' \
  -e 's/230,57,70/255,34,51/g' -e 's/230, 57, 70/255, 34, 51/g' \
  -e 's/255,26,26/255,77,46/g' -e 's/255, 26, 26/255, 77, 46/g'
```

(`sed -i ''` est la forme macOS ; sous Linux, `sed -i` sans les quotes.)

## Vérification

Contrôle de types : zéro erreur. `app.js` passé au contrôle syntaxique.
Plus aucune occurrence de l'ancien rouge dans le dépôt.
