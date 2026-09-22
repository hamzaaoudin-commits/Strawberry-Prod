# Strawberry — d'abord un incident, puis onze changements

**Le conteneur de travail s'est réinitialisé en plein milieu de cette
tâche.** Tout le dépôt cloné a disparu, ainsi que la totalité du dossier
persistant des patches passés (revenu à sp99, un état antérieur à la
fusion de l'offre). Ce n'est pas une décision de ma part — j'ai vérifié
que GitHub, lui, reflétait bien votre dernier patch appliqué (sp120), je
m'y suis re-ancré, et j'ai reconstruit tout ce qui manquait pour cette
conversation. Rien n'a donc été perdu côté site : seulement mon
brouillon de travail, reconstruit à l'identique.

16 fichiers.

## Les textes

**Le paragraphe de clôture de « pourquoi ce studio existe »** devient une
déclinaison en quatre lignes courtes après la phrase choc, plutôt qu'une
seule phrase de conclusion.

**Le titre de la tournée** passe sur deux lignes : « Une plateforme de
marque ne décide rien. / Une identité, si. » Le chapô qui suit distingue
maintenant clairement ce qu'une agence fait (s'arrêter à la plateforme) de
ce que fait le studio (la transformer en décisions, langage, principes).

**La phrase de clôture de la tournée** — « Tout ça existe déjà chez vous »
— devient « Vous avez déjà tout ce qu'il faut. Ce qui manque, c'est une
identité pour le rendre visible. », répercutée dans les quatre terrains et
le dictionnaire partagé.

**Le paragraphe de l'offre** énumère maintenant les six pièces avec ce
qu'elles vous demandent d'abandonner, et se termine sur « Pas un état des
lieux. Pas un document à ranger dans un dossier. Une direction à suivre. »

## Le chantier structurel

**Trois sections retirées des quatre pages de terrain**, où elles se
répétaient à l'identique ou presque :

- La méthode S.T.R.A.W. (id `prestations`) — migrée sur la home en une
  version unique, en langage neutre. C'était nécessaire : seule THE ROOM
  avait une version réellement écrite, les trois autres terrains
  héritaient de son texte par défaut ("votre lieu", "le barman") sans
  jamais l'avoir adapté.
- « La différence » (le curseur de comparaison « publier »/« se
  raconter ») — son mécanisme de glissement anime maintenant le
  Hier/Aujourd'hui de la home.
- « Ce que ça coûte » (la comparaison agence-au-mois / payé une fois) —
  retirée des pages produits comme demandé.

**Le Hier/Aujourd'hui est devenu un curseur de comparaison interactif** :
on glisse pour révéler « Aujourd'hui » par-dessus « Hier », plutôt que de
lire deux panneaux figés côte à côte. La scène s'anime seule jusqu'à 50 %
à l'ouverture, pour montrer que c'est un curseur avant qu'on ait pensé à
le toucher.

**La méthode a sa propre section sur la home**, en grille de cinq cartes
plutôt qu'en carrousel à glisser — le carrousel demandait une mécanique JS
que je n'ai pas voulu réimplémenter à la main un quatrième temps, pour ne
pas répéter une erreur déjà faite trois fois dans ce projet.

## Les quatre terrains, enfin spécifiques

Chaque page de terrain reçoit une nouvelle section, « Trois [maisons /
noms / produits / lieux] qui ont tranché », avec trois exemples réels :

- **Marques** — Nike, Coca-Cola, Picard
- **Noms propres** — Travis Scott, Beyoncé, BTS
- **Produits** — Patagonia, Aesop, Liquid Death
- **Lieux** — In-N-Out, Soho House, Nobu

Chaque commentaire reste factuel et de notoriété publique — pas de
citation inventée, pas de chiffre fabriqué — et suit le même principe que
le reste du site : ce que la maison a refusé, et ce que ça lui a donné.

## Une correction trouvée en chemin

Une occurrence d'« audit » subsistait en dur dans le gabarit — hors du
mécanisme `data-i18n`, donc invisible à tous mes précédents balayages :
« Le même audit, sur un autre terrain » sous les liens croisés entre
terrains. Corrigée en « La même Architecture ».

## Ce qui n'est pas fait

**L'enrichissement de la tournée** pour qu'elle se suffise à elle-même —
vous l'aviez demandé en fin de message. Je ne l'ai pas fait cette fois :
après la réinitialisation du conteneur, j'ai priorisé la reconstruction de
ce qui était déjà en cours plutôt que d'ouvrir un nouveau chantier. Dites-
moi si je l'attaque maintenant.

**Le libellé du bouton du hero** reste en attente depuis le tour
précédent — votre message s'était coupé après « mais « ».

## Vérification

Contrôle de types sur l'ensemble du lot : zéro erreur (au-delà des modules
absents de mon environnement). `i18n.js` validé comme JavaScript exécutable.
Les quatre jeux de cas vérifiés distincts par terrain.
