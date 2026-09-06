# Strawberry — étape 1 + la porte Lieux

16 fichiers. Contient les suppressions (partie 1 du brief) et la page
Lieux, reprise de l'ancien site NOCTA.

## La porte Lieux — `app/[lang]/lieux/page.tsx` (nouveau)

Reprise de A à Z du contenu de `hamzaaoudin-commits/Nocta`, marque NOCTA
retirée. Toutes les sections de l'ancienne home sont là : le hero, les
typologies de lieux en chips, le constat, le sprint en cinq étapes avec
ses livrables détaillés, le comparateur publier/raconter, les trois
chiffres, la comparaison agence-au-mois contre sprint facturé une fois, la
section « qui écrit », la FAQ et le CTA. FR et EN.

**Le comparateur à glisser est reproduit fonctionnellement**, pas
simplement illustré : une zone, deux réalités superposées, une poignée qui
découpe l'une dans l'autre. Souris, doigt et clavier. L'input range est
conservé mais masqué visuellement, pour que la valeur soit annoncée aux
lecteurs d'écran.

**Un choix que je signale** : NOCTA avait sa propre palette (fond violacé
`#0a0910`) et ses propres polices (Bricolage Grotesque, Instrument Serif).
J'ai repris la **structure** de ses visuels mais avec les jetons de style
de Strawberry — rouge de marque, Playfair, DM Sans. Transposer la palette
NOCTA telle quelle aurait donné une page qui n'appartient visuellement pas
au site sur lequel elle vit. Dites-moi si vous vouliez l'inverse.

`FAQ_LIEUX` ajoutée dans `lib/faqs.ts` (les cinq questions de NOCTA).
Route ajoutée au sitemap. `/nocta` redirige vers `/lieux`, en route
`[lang]` comme dans `next.config.mjs`.

## Les suppressions

- **Routes neutralisées** : NOVA, MOMENTUM (avec `atelier/` et
  `atelier/[house]/`), aux deux niveaux. RADAR l'était déjà.
- **`lib/radar-access.ts` ne pouvait pas être supprimé tel quel** : il
  signe le cookie d'accès de l'Atlas via `app/api/contact/route.ts`. Les
  fonctions sont extraites dans `lib/access-token.ts` ; le fichier
  d'origine est maintenant supprimable sans rien casser.
- **`next.config.mjs`** : quatre redirections pointaient encore vers
  `/fr/radar` — page supprimée — dont `/manifesto` et toutes les routes
  `/lectures`. Réparées.
- `lib/config.ts` : lien Stripe `momentum` retiré. `lib/faqs.ts` :
  `FAQ_MOMENTUM` retiré. Commentaires de `lib/routing.ts` et
  `components/locale-link.tsx` mis à jour.

## À supprimer à la main

Plus appelés par rien : `lib/radar-access.ts`, `lib/radar-library.tsx`,
`lib/radar-reads.ts`, `lib/momentum-clients.ts`,
`components/strawberry/radar-lead-capture.tsx`,
`components/strawberry/radar-signout.tsx`,
`components/strawberry/next-read-capture.tsx`, `app/api/radar/`,
`app/api/momentum/`, et les dossiers de routes redirigées.

## Reste à faire

- **Home à deux portes** — faisable maintenant que `/lieux` existe.
- **Page Marques** : mentionner la narration du dirigeant en toutes lettres.
- **Page de vente des deux ouvrages** — il me manque le lien Stripe du
  second, les deux prix, et le mode de remise du PDF après paiement.
- **Navigation** : `/lieux` n'est pas encore dans le menu, en attendant
  la home à deux portes.

## Vérification

Contrôle de types réel : zéro erreur. Il a d'ailleurs attrapé une vraie
faute de ma part — `useLang()` renvoie un objet et non une chaîne ;
corrigé en passant par `useT`, le hook prévu pour ça.
