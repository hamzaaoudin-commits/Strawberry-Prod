# Strawberry — tour 33

14 fichiers, un seul glisser-déposer. Build validé.

Glissez les dossiers `app` et `components`, jamais leur contenu.

## Ce qui est nouveau — les 5 maquettes validées

**#37 — Les chiffres comptent jusqu'à leur valeur.** 38%, 85%, et les trois
chiffres de la frise de confiance montent depuis zéro quand ils entrent dans
l'écran, une seule fois. Un composant réutilisable (`CountUp`) qui reconnaît
n'importe quel préfixe numérique — fonctionne pour « 38% » comme « 340+ ».

**#39 — Une pastille flottante indique la section en cours.** Sur la page
Architecture (cinq sections) et la page Le Studio (trois sections), une
petite pastille en bas d'écran montre où on se trouve, sans être un sommaire
complet — elle n'apparaît qu'après le premier écran et disparaît en scrollant
vers le haut.

**#40 — Une vraie coche de confirmation.** Le cercle se trace, puis la coche
suit, sur la modale Atlas et le formulaire newsletter RADAR — au lieu d'un
simple texte de confirmation.

**#41 — La FAQ se déplie en douceur.** Le panneau de réponse s'ouvre en
hauteur (une technique CSS pure, pas de JavaScript pour l'animation), avec un
filet rouge qui accompagne le texte plutôt qu'un dépliage brut.

**#42 — Les trois pages légales anglaises ont leur en-tête.** Terms, Legal
Notice et Privacy Policy reçoivent le même bandeau que leurs équivalents
français, déposé au tour précédent — ce chantier est maintenant complet des
deux côtés.

## Une erreur trouvée et corrigée avant l'envoi

En construisant, j'ai oublié d'importer le composant de coche dans le
formulaire newsletter RADAR — le build a échoué, je l'ai corrigé
immédiatement et revalidé avant de packager. Rien de cassé n'est parti dans
ce zip.
