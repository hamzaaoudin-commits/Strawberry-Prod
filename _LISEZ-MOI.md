# Strawberry — patch : retrait complet de l'offre RADAR

Vingt fichiers modifiés. Glissez-les dans leurs dossiers exacts, jamais le
dossier `strawberry-patch` lui-même.

## Ce qui change

**Visible sur le site :**
- Nav (desktop + mobile) et footer : l'entrée RADAR retirée.
- Formulaire de contact : "M'abonner à RADAR" retiré du menu déroulant.
- Home : le compteur "350+ marques lues" retiré de la frise de confiance
  (il ne reste que "4 par trimestre" et "1 fondateur") ; le bandeau
  défilant d'extraits RADAR retiré de la page.
- FAQ : les six questions propres à RADAR retirées.
- CGV : l'offre RADAR retirée de la liste des offres et des deux clauses
  de rétractation qui la concernaient spécifiquement.
- Sitemap : l'entrée `/radar` retirée.

**Les routes `/radar/*` :** transformées en redirections vers la home,
plutôt que supprimées — même logique que la route MOMENTUM héritée
laissée dans le dépôt avant vous : un zip ne sait pas retirer un fichier,
et ça évite qu'un ancien lien ou une page indexée par Google tombe sur une
404. Les trois anciennes redirections qui pointaient vers `/fr/radar`
pointent maintenant vers la home.

**`lib/config.ts` :** le lien Stripe RADAR, l'essai gratuit et le
compteur RADAR retirés de la source unique de vérité du site.

**`proof-section.tsx` :** ce composant n'était déjà appelé nulle part
(vérifié) mais référençait le compteur RADAR supprimé — laissé tel quel,
il aurait cassé la compilation malgré son inutilisation, Next.js
vérifiant les types de tous les fichiers du projet, pas seulement ceux
réellement importés. Vidé en un composant qui ne rend rien.

## Ce qui reste dans le dépôt, à supprimer vous-même

Rien ne les appelle plus, mais je ne peux pas retirer un fichier par ce
mode de livraison — seulement en ajouter ou en écraser :

- `components/strawberry/radar-lead-capture.tsx`
- `components/strawberry/radar-signout.tsx`
- `components/strawberry/read-marquee.tsx`
- `components/strawberry/next-read-capture.tsx`
- `lib/radar-library.tsx`
- `lib/radar-reads.ts`
- `app/api/radar/access/route.ts`
- `app/api/radar/logout/route.ts`

## Ce qui reste volontairement en place

`lib/radar-access.ts` : le nom vient de RADAR, mais c'est l'infrastructure
de signature de cookie partagée dont l'Atlas (le PDF gratuit contre email)
dépend encore. La toucher aurait cassé l'Atlas.

## Fichiers inclus

- `components/strawberry/trust-strip.tsx`
- `lib/config.ts`
- `lib/faqs.ts`
- `components/strawberry/navbar.tsx`
- `components/strawberry/footer.tsx`
- `app/[lang]/page.tsx`
- `components/strawberry/contact-section.tsx`
- `components/strawberry/section-divider.tsx`
- `components/strawberry/success-check.tsx`
- `components/strawberry/proof-section.tsx`
- `app/[lang]/radar/page.tsx`
- `app/[lang]/radar/acces/page.tsx`
- `app/[lang]/radar/lecture/page.tsx`
- `app/[lang]/radar/lecture/[slug]/page.tsx`
- `app/[lang]/radar/lecture/manifeste/[slug]/page.tsx`
- `app/radar/page.tsx`
- `app/manifesto/page.tsx`
- `app/[lang]/manifesto/page.tsx`
- `app/[lang]/cgv/page.tsx`
- `app/sitemap.ts`
