# Strawberry — restructuration, étape 1 : les suppressions

14 fichiers. C'est la partie 1 du brief (« Supprimer ») plus le nettoyage
des références. Les parties 2, 3 et 4 sont bloquées ou en attente — voir
en bas.

## Un blocage résolu avant tout le reste

Le brief demande de supprimer `lib/radar-access.ts`. Or ce fichier est
importé par `app/api/contact/route.ts` : c'est lui qui signe le cookie
d'accès de **l'Atlas**. Le supprimer tel quel aurait cassé l'Atlas et tout
le point d'entrée du formulaire de contact.

Les fonctions de signature ont donc été extraites dans un fichier neutre,
`lib/access-token.ts`, et la route de contact pointe dessus.
`lib/radar-access.ts` peut maintenant être supprimé sans rien casser.

## Ce qui est fait

- **Routes neutralisées en redirections** : NOVA (`[lang]` + racine),
  MOMENTUM (`[lang]`, `atelier/`, `atelier/[house]/`, racine), NOCTA.
  RADAR l'était déjà.
- **NOCTA : chaîne de redirection cassée réparée.** Elle pointait vers
  `/momentum`, que ce patch retire — la chaîne aboutissait donc à une
  redirection vers une redirection. Elle pointe vers l'accueil, et devra
  pointer vers `/lieux` le jour où cette porte existera.
- **`next.config.mjs` nettoyé** : `momentum` et `radar` retirés de la
  liste des routes migrées, et surtout **quatre redirections pointaient
  encore vers `/fr/radar`** (dont `/manifesto` et toutes les routes
  `/lectures`) — elles menaient à une page supprimée. Redirigées vers
  l'accueil ou vers `/fr/manifesto`.
- **`lib/config.ts`** : lien Stripe `momentum` retiré.
- **`lib/faqs.ts`** : `FAQ_MOMENTUM` retiré.
- **Commentaires** de `lib/routing.ts` et `components/locale-link.tsx`
  mis à jour (ils citaient `/momentum` en exemple).
- Le sitemap ne contenait déjà aucune de ces routes : rien à retirer.

## À supprimer à la main dans le dépôt

Un patch ne peut pas retirer un fichier. Une fois ce patch appliqué, ces
fichiers ne sont plus appelés par rien :

`lib/radar-access.ts`, `lib/radar-library.tsx`, `lib/radar-reads.ts`,
`lib/momentum-clients.ts`, `components/strawberry/radar-lead-capture.tsx`,
`components/strawberry/radar-signout.tsx`,
`components/strawberry/next-read-capture.tsx`,
`app/api/radar/`, `app/api/momentum/`,
et les dossiers de routes `app/[lang]/radar/`, `app/[lang]/nova/`,
`app/[lang]/momentum/`, `app/[lang]/nocta/`, `app/radar/`, `app/nova/`,
`app/momentum/` (ou les laisser : ce sont des redirections inoffensives).

## Ce qui bloque la suite

**Partie 2 — la porte Lieux.** Deux problèmes. D'abord le brief de
transformation annoncé « fourni séparément » n'est pas arrivé. Ensuite, et
c'est plus gênant : `app/[lang]/nocta/page.tsx` n'est **plus** une page de
contenu, c'est déjà une simple redirection vers MOMENTUM. Il n'y a donc
aucun contenu NOCTA à transformer — la page Lieux est à écrire de zéro. Il
me faut le positionnement, le contenu des sections, et ce que couvre
exactement le sprint (le brief donne le prix et la durée, pas la matière).

**Partie 3 — home à deux portes.** Faisable dès que la porte Lieux existe :
envoyer vers une page vide n'aurait pas de sens. La mention « la narration
du dirigeant fait partie de l'offre » sur la page Marques est en revanche
faisable tout de suite — dites-moi si vous voulez que je la formule.

**Partie 4 — page de vente des deux ouvrages.** Faisable tout de suite,
mais il me manque : le lien Stripe du second ouvrage (j'ai celui du
premier), les deux prix, et la façon dont le PDF est remis après paiement
(page de remerciement avec lien ? e-mail ?). `le-livre` existe déjà et
couvre un ouvrage : je l'étendrai plutôt que d'en créer une seconde,
comme le brief le demande.

## Vérification

Contrôle de types réel sur les 14 fichiers : aucune erreur nouvelle. (Une
erreur signalée sur `lib/access-token.ts` existe à l'identique dans
`lib/radar-access.ts` d'origine — vérifié — c'est un artefact de ma
version de TypeScript, pas de la copie ; votre build passe avec ce code
aujourd'hui.)
