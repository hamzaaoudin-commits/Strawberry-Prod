# Strawberry — le renommage, fait correctement cette fois

20 fichiers.

## Ce que ma passe précédente avait raté

Je cherchais des chaînes exactes — « audit narratif », « L'audit ». Tout ce
qui était **coupé, abrégé ou encodé** est passé au travers.

La couverture de votre capture en est l'exemple parfait :

```jsx
L&apos;Audit
<br />
narratif
```

Le titre est coupé par un `<br/>` et l'apostrophe est une entité HTML.
Aucune recherche sur « L'audit narratif » ne pouvait le trouver. J'aurais
dû chercher le mot seul dès le départ.

## Ce qui est corrigé maintenant

J'ai recensé **toute occurrence du mot** avant de toucher quoi que ce soit,
en protégeant les identifiants techniques (`AUDIT490`, `FAQ_AUDIT`, la
route `/questionnaire/audit`, la clé `"audit"`).

- La couverture du document : **L'Architecture narrative**
- « Le même audit que pour un lieu » → « La même Architecture que… », sur
  les trois pages de terrain
- « L'audit · la méthode S.T.R.A.W. », `nav.services`, les réponses de FAQ
- Les métadonnées et titres de pages `/documents`
- La page Studio : « Chaque audit est lu, cartographié et écrit à la
  main », « quand vous commandez un audit »
- Le bandeau des terrains : « Une Architecture, quatre terrains »
- Le questionnaire : « Vous avez commandé l'Architecture pour »
- Deux noms de fonction internes (`AuditSamplePage`)

## Le délai, enfin partout

**« Livré en sept jours »** figurait encore sur la couverture, dans les
trois `price.b.d`, et dans la ligne d'ancrage du hero anglais —
« Delivered in seven days » — que ma recherche française ne voyait pas.

Et **« Trois semaines, et vous saurez quoi changer »** dans le bandeau
final, qui affichait encore « Sept jours ».

## Deux valeurs périmées trouvées au passage

**« 4 commandes par trimestre »** subsistait dans la carte de prix des
pages d'offres. Remplacée par **« Deux révisions incluses »** — la case
existait, autant qu'elle porte la garantie.

**Le questionnaire annonçait « 20 à 25 minutes »** alors qu'il compte 30
écrans depuis la fusion. Passé à **50 à 60 minutes**, ce qui correspond à
ce que la frise annonce déjà sur la home.

## Vérification

Recensement final : plus aucune occurrence du mot dans le texte visible,
ni « sept jours », ni « commandes par trimestre ». Contrôle de types lu
sans filtre : uniquement des modules absents de mon environnement.
