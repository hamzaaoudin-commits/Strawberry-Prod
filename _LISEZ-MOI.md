# Strawberry — patch : les quatorze changements

Dix fichiers modifiés. Glissez-les dans leurs dossiers exacts.

## 1. Hero — scintillement aléatoire

`hero-section.tsx`. Les points du champ d'extraction restaient figés une
fois apparus. Ils s'illuminent maintenant brièvement, un par un, à un
rythme propre à chaque point (calculé à partir de sa position — pas
`Math.random()`, qui aurait provoqué un avertissement d'hydratation React
en donnant des valeurs différentes au serveur et au client). Jamais deux
points synchronisés.

## 2 & 3. Hero — texte

« Elle n'est pas générée. Elle est extraite de ce que vous êtes déjà. »
retiré. Le paragraphe suivant reformulé en phrases complètes : « Votre
produit ne change pas. Ce qui change, c'est la façon dont on le perçoit :
au point de revenir, de vous défendre auprès d'un ami, de parler de vous
sans qu'on le lui demande. C'est ça, l'écart entre un client et quelqu'un
de fidèle. »

## 4. Le bandeau de marques est de retour

`app/[lang]/page.tsx`. `ReadMarquee` n'avait jamais été supprimé du dépôt,
seulement retiré de la home par erreur pendant le retrait de RADAR. Remis
juste après le hero.

## 5. Le diagnostic — liste animée

`diagnosis-section.tsx`. Les quatre fausses causes (logo refait, agence,
poster plus, IA) ne sont plus des mots dans une phrase : chacune a son
propre bloc avec l'impact négatif et le contraste « chez nous », qui entre
en scène au scroll, une pièce à la fois (même principe que le hero, appliqué
au texte).

## 6. La statistique 74% — reliée au 38%

`impact-stats.tsx`. Une phrase de clôture sous les deux chiffres explique
l'impact du 74% (se fondre dans le bruit) et ce que représente le 38%
(être l'exception qu'on remarque et qu'on paie plus cher) — sans elle, les
deux chiffres restaient côte à côte sans se répondre.

## 7. La barre rouge de progression retirée

`app/[lang]/layout.tsx`. `ScrollProgress` s'affichait sur tout le site, pas
seulement les pages longues pour lesquelles elle avait été pensée. Retirée
du layout global.

## 8. L'animation S.T.R.A.W. ralentie

`letters-reveal.tsx`. 100ms de décalage entre lettres et 550ms de
transition passent à 220ms et 700ms — la dernière lettre arrive maintenant
vers 1,6s au lieu d'environ 1s.

## 9. La frise "4 par trimestre / 1 studio" retirée de la home

`app/[lang]/page.tsx`. `TrustStrip` n'est plus importé ni rendu.

## 10. "Trois semaines. Une maison à la fois." retiré

`offers-section.tsx`, dans l'intro de l'offre.

## 11. La liste redondante sous les tuiles, retirée

`deliverables-tabs.tsx`. La liste numérotée (bénéfice + description) qui
vivait sous la grille de tuiles répétait exactement ce que chaque tuile dit
déjà au survol. Tout vit dans la tuile maintenant.

## 12. Le prix 4 500 € est animé

`count-up.tsx` + `offers-section.tsx`. Le composant `CountUp` (déjà utilisé
pour les 38%/74%) ne géraient que des nombres simples ("38%") — pas les
séparateurs de milliers ("4 500€"). Étendu pour les gérer : le séparateur
détecté dans la valeur d'origine est réutilisé pendant le compte, pour que
les valeurs intermédiaires restent groupées pareil (ex. "1 200" et pas
"1200" à mi-course).

## 13. Le compte à rebours honnête — pas un chiffre randomisé

`lib/config.ts` + `offers-section.tsx`. **Important : je n'ai pas fait
varier le nombre de places restantes au hasard.** Le fichier `config.ts`
porte son propre commentaire à ce sujet, écrit avant cette conversation :
*« Aucune n'est calculée : une rareté ou un compteur inventés par le code
seraient de la preuve fabriquée. »* Faire varier ce chiffre sans lien avec
de vraies réservations serait exactement ça — une fausse urgence, sur un
site dont l'argument de vente central est l'honnêteté vérifiable. Un
fondateur qui commande à ce niveau repère une jauge qui bouge toute seule.

À la place : un compte à rebours réel en jours avant la prochaine ouverture
(1er octobre), affiché sous la jauge. Il change chaque jour parce que
c'est un vrai calcul de date, pas une simulation — rien d'inventé, mais
l'effet « ça vit » que vous cherchiez. Le nombre de places lui-même reste
tenu à la main, comme avant.

Si ce que vous vouliez vraiment, c'est que le nombre de places ait l'air
plus vivant, la vraie solution reste la même que celle du reste du site :
le mettre à jour à chaque commande. C'est plus de travail que randomiser,
mais c'est la seule version qui ne coûte pas la crédibilité du site.

## 14. Le lien Stripe du livre

`lib/config.ts`. `BOOK_URL` pointait vers `/#contact` par défaut — la
meilleure preuve d'autorité du studio menait à un formulaire de contact
générique. Remplacé par le lien Stripe fourni. La page `/le-livre` et le
bloc livre de la home en héritent automatiquement, ils utilisaient déjà
cette constante.

## Fichiers inclus

- `components/strawberry/hero-section.tsx`
- `app/[lang]/page.tsx`
- `components/strawberry/diagnosis-section.tsx`
- `components/strawberry/impact-stats.tsx`
- `app/[lang]/layout.tsx`
- `components/strawberry/letters-reveal.tsx`
- `components/strawberry/offers-section.tsx`
- `components/strawberry/deliverables-tabs.tsx`
- `components/strawberry/count-up.tsx`
- `lib/config.ts`
