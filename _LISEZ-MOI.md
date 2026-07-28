# Strawberry Production — corrections

75 fichiers. Aucun n'est à supprimer avant, aucun après.
Déposez le contenu de ce dossier à la racine du dépôt via l'interface GitHub :
tous les chemins sont préservés, chaque fichier écrase son homologue.

## Avant de déployer

1. **Vérifiez `RADAR_ACCESS_SECRET` dans Vercel.** Elle protège déjà RADAR ;
   elle protège désormais aussi l'Atlas. Sans elle, l'Atlas reste accessible
   (dégradation volontaire : une variable oubliée ne doit pas casser la capture
   d'emails, seulement la barrière).

2. **Mettez à jour vos séquences Instantly.** Tout lien pointant vers
   `/brand-narrative-audit` mène maintenant à l'audit à 490€. La commande à
   4 500€ est sur `/fr/brand-narrative-architecture`.

## Après déploiement — trois vérifications de 30 secondes

- `/Vol_VI_The_Aesthetic_Constitution.html` doit renvoyer vers `/fr/radar`.
- `/30-architectures-atlas.pdf` doit renvoyer vers la home, et
  `/atlas/30-architectures-atlas.pdf` vers la home tant que vous n'avez pas
  laissé votre email.
- Le footer français : les sept liens du bloc « Le Travail » doivent mener
  chacun à sa propre page.

## Optionnel — trois suppressions qui allègent le dépôt

Rien ne les impose : tous ces fichiers sont désormais vides ou de simples
redirections, et le site fonctionne tel quel. Mais si vous voulez le dépôt
propre, ces trois dossiers peuvent partir depuis l'interface GitHub :

- `app/en/` — `app/[lang]/` sert les mêmes URL.
- `public/sitemap.xml` — `app/sitemap.ts` reprend la main et se met à jour seul.
- Les dossiers racine `manifesto/`, `revenue-architecture/`, et les fichiers
  `page.tsx`, `contact-section.tsx`, `cleanup.sh` à la racine.
