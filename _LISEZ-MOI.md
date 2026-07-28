# Strawberry Production — vague 2

117 fichiers, répartis en **deux dossiers uniquement pour rester sous la limite
de 100 fichiers par glisser-déposer de GitHub**.

## Comment déposer

Sur GitHub : `Add file` → `Upload files`. Glissez le **contenu** de `partie-1`,
puis, sans quitter la page, le **contenu** de `partie-2`. Les deux s'accumulent
dans le même commit — validez une seule fois. Ne commitez pas entre les deux :
un dépôt à moitié migré ne compile pas.

Les chemins sont préservés, chaque fichier écrase son homologue. Aucune
suppression n'est nécessaire, ni avant ni après.

## Ce que ce dépôt contient de nouveau

- `app/[lang]/le-livre/` — la page dédiée au livre.
- `public/atlas/` et `public/founder.jpg` recompressé (575 Ko → 221 Ko).

## Un point à trancher de votre côté

Dans `app/[lang]/le-livre/page.tsx`, la constante `BUY_URL` en haut du fichier
pointe vers le formulaire de contact. Dès que le lien d'achat ou de
téléchargement du livre existe, c'est la seule ligne à changer.

## Vérifications après déploiement

- `/es` et `/es/radar` doivent renvoyer vers `/fr` et `/fr/radar`.
- `/fr/le-livre` doit s'afficher, et « En savoir plus sur le livre » sur la home
  doit y mener.
- Sur la section avant/après, la poignée doit se tirer au doigt sur téléphone.
- Le mot « Architectures » sur la couverture de l'Atlas ne doit plus déborder,
  même en réduisant la fenêtre au maximum.
