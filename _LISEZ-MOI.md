# Strawberry — onboarding : 48 questions, balises Make, animations de chapitre

4 fichiers de code · 4 fichiers Make · 6 captures.

## À faire de votre côté, dans cet ordre

1. Appliquer les fichiers de code (cumulatifs avec sp143).
2. **Make** : importer `make/architecture-narrative-blueprint.json` (déclencheur = Custom Webhook,
   28 modules d'écriture mis à jour), créer le webhook, coller son URL dans `MAKE_WEBHOOK_URL` sur Vercel.
3. Envoyer `make/exemple-payload-make.json` au webhook (voir `make/balises-make.md`) : les 77 balises
   apparaissent d'un coup dans la liste de mappage.
4. Relire `make/audit-des-questions.md` et me dire quelles questions retirer.

## Ce qui change

**Page 2 de la couverture** : le bandeau de chiffres et la citation sont retirés.

**Balises Make.** Chaque question de chacun des 4 terrains a été passée par la vraie route serveur :
toutes produisent leur balise (aucune orpheline, toutes en snake_case). Correction faite au passage :
une question laissée vide n'envoyait pas sa balise, donc Make ne la proposait jamais au mappage.
Les **77 balises sont désormais toujours présentes**, vides si besoin, identiques sur les 4 terrains.

**48 questions** (30 → 48), voir `make/audit-des-questions.md` :
- 27 conservées, 3 reformulées (`price` contenait deux questions en une ; `traction` ne demandait qu'un
  chiffre ; `hr_disqualifier` supposait que le client embauche), 18 nouvelles dont 7 facultatives.
- Les 18 comblent ce que les 28 modules d'écriture ignoraient : langue, tutoiement/vouvoiement, équipe,
  canaux actifs, objections, intouchables, échéances, budget, texte du client écrit de sa main,
  phrases de ses vrais clients, signe de réussite, logistique de la relecture.
- Durée estimée : environ 65-70 minutes, contre 45.

**Blueprint.** Un bloc « INTAKE CONSTRAINTS » dans les 28 modules d'écriture : respect de la langue
cochée, du mode d'adresse, des éléments intouchables, du budget et des échéances, de la taille de
l'équipe (pas de playbook RH pour un solo), des tentatives passées, et calibrage de la voix sur le
texte du client. La règle « français sauf si le client écrit en anglais » est remplacée par « la
première langue cochée ». Intégrité vérifiée : 33 modules, aucune référence orpheline.

**Animations de chapitre.** Une animation propre à chacun des 7 chapitres (colonnes qui montent,
radar, onde sonore, cible, semaine qui tourne, chemin balisé, sceau) ; le titre et le texte se
remplissent mot à mot ; les pièces nourries s'allument ; durée du chapitre affichée ; les bandes
se referment au clic. Tout est en CSS : lisible même si le script tarde.
- Défaut trouvé par capture : mon premier dessin traversait le titre et le paragraphe. Il a maintenant
  sa place, au-dessus du titre.
- Défaut trouvé par capture : sur téléphone, « Partie 4 sur 7 » passait sous la bande du haut.
- La citation du livre n'apparaît que sur les écrans de 900 px de haut ou plus.

## Vérifié, et ce qui ne l'est pas

Parcours complet des 48 questions dans Chrome, jusqu'à la page de fin, sans erreur, à 920 px, sur
téléphone (390 px) et sur grand écran (1440 px). Types en mode strict : zéro erreur.

**Non vérifié** : Safari (vos captures viennent de Safari, les miennes de Chrome) ; le parcours
anglais en entier (les 48 questions sont traduites, le début est vérifié) ; l'exécution réelle du
scénario Make avec les nouveaux prompts — je n'ai pas accès à votre compte, c'est le premier test à faire.
