# Strawberry — les trois terrains, entièrement réécrits

4 fichiers.

## Le chevauchement des illustrations

Votre capture montrait le dessin passant sous « Nous posons la ligne et
les mots ». Le SVG est posé en absolu dans le coin de la carte — ça
marchait sur les titres courts de NOCTA, pas sur ceux des terrains, plus
longs.

Corrigé dans le CSS : le dessin est réduit, son opacité baisse, une
gouttière lui est réservée à droite du texte, et le contenu passe
au-dessus en profondeur. Sur mobile la gouttière disparaît et le dessin
s'efface davantage — sinon il ne resterait plus de place pour le texte.

## Le délai dans « le sprint »

« Deux à trois semaines, cinq étapes » → **« Sept à quatorze jours, cinq
blocs »**, sur les trois pages.

## Tout le reste des trois pages est réécrit

54 clés par terrain, en français :

- **Les puces défilantes** — Marques / Entreprises / Studios / Cabinets
  pour BRAND, Objets / Applications / Collections pour THE PRODUCT,
  Musiciens / Réalisateurs / Fondateurs pour THE NAME. Plus de caves ni de
  rooftops.
- **Le constat**, raccourci de moitié : deux phrases au lieu de quatre. Il
  posait le problème, puis le reformulait, puis l'illustrait. Il se lit
  maintenant d'un trait.
- **Les cinq blocs de l'audit** — titres, descriptions et puces, adaptés à
  chaque terrain. Le cinquième bloc dit enfin ce qu'on emporte.
- **La différence** — « Communiquer, ou tenir une position », « Lister, ou
  raconter », « Publier, ou se raconter », avec les deux états du
  comparateur écrits pour chaque cas.
- **La FAQ** — cinq questions propres à chaque public. Un fabricant demande
  si ça marche pour une gamme ; un artiste demande si c'est trop tôt, et
  si ça va formater son travail.

## Un piège évité

Mes surcharges s'inséraient **avant** les anciennes clés. En JavaScript,
la dernière définition l'emporte : les anciens textes auraient donc gagné,
et rien n'aurait changé à l'écran malgré un patch qui a l'air correct. Les
dictionnaires sont dédoublonnés, nouvelle version conservée.

## Ce qui reste

La version **anglaise** de ces 54 clés par terrain, et les pages **Studio**
et **Méthode**. Dites-moi par laquelle je continue.

## Vérification

Contrôle de types : zéro erreur. Fichier de traductions passé au contrôle
syntaxique.
