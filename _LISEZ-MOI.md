# Strawberry — tour 17

11 fichiers, un seul glisser-déposer. Build validé.

Glissez les **dossiers** (`app`, `components`), jamais leur contenu.

Deux ou trois fichiers de ce zip reprennent des correctifs déjà envoyés dans
des tours précédents (l'intro de chargement, la page méthode) — mon suivi
interne a montré une incertitude sur s'ils avaient bien été déposés. Aucun
risque à les redéposer : le contenu est identique à ce qu'il devrait déjà
être, ça ne fait qu'écraser un fichier par lui-même dans le pire des cas.

## Ce qui est nouveau

**Deux statistiques réelles, avec de vraies sources**, sur la home entre le
diagnostic et le mécanisme :

- **38%** — ce que paient en plus les acheteurs qui perçoivent une marque
  comme réellement différente, contre 11% en moyenne. Source : Kantar,
  analyse BrandZ.
- **85%** — la part des consommateurs incapables de citer une seule histoire
  de marque qui leur a marqué l'esprit, sur 2 000 adultes interrogés.
  Source : Headstream, Brand Storytelling Report, 2015 (la date est affichée
  sur le site — l'étude a dix ans, ce n'est pas caché).

Aucun chiffre inventé : les deux sources sont citées, avec leur date.

**Deux schémas ajoutés :**

- Dans le bloc problème : « sans architecture » (des points dispersés) contre
  « avec architecture » (une ligne qui monte), à côté du texte sur le
  narratif qui s'empile.
- Dans le diagnostic : « hier » contre « aujourd'hui », deux barres qui
  montrent le renversement entre la fabrication et la stratégie.

**`/commander` est maintenant une redirection directe vers Stripe**, comme le
reste du site. Elle ne menait plus nulle part depuis deux tours ; elle
redirige maintenant plutôt que de rester une impasse.

## Ce que je n'ai pas touché

La FAQ est déjà en accordéon (questions repliées, réponse au clic) — c'est
déjà le bon traitement contre le mur de texte, pas besoin d'y ajouter des
icônes. Le bloc « ce qu'est / n'est pas ce studio » a déjà des cartes
numérotées et colorées ; je l'ai laissé tel quel plutôt que d'en rajouter.
