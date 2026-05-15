# STRAWBERRY PRODUCTION — Knowledge Base

> **Projet** : Site Next.js 16 (App Router) pour "Strawberry Production", studio de narrative perception basé à Paris.
> **Stack** : Next.js 16.2.6 · React 19 · TypeScript 5.7 · Tailwind 4 · shadcn/ui (style "new-york").
> **Hébergement** : Vercel (URL prod : `https://v0-strawberryprod.vercel.app`).
> **Repo GitHub** : `hamzaaoudin-commits/Strawberry-Prod` (branche `main`).
> **Fonts** : Playfair Display (serif) + DM Sans (sans), via `next/font/google`.
> **Couleurs signature** : `#e63946` · `#ff1a1a` · `#dc2626` · fonds `#0a0a0a` / `#0d0d0d`.

---

## ⚠️ POINTS CRITIQUES À RETENIR (pièges déjà rencontrés)

1. **Tous les composants de pages doivent commencer par `"use client"`** sur ce projet. Tester un Server Component (avec `export const metadata`) provoque silencieusement un 404. Tous les fichiers `page.tsx` créés doivent suivre le pattern d'`empire-bundle/page.tsx` : `"use client"` en tête, **pas** d'`export const metadata`.

2. **Les noms de dossiers de routes doivent être en kebab-case strict** (`brand-intelligence`, pas `Brand Intelligence`). Next.js fait du 404 si le dossier a un espace ou des majuscules. À vérifier directement sur GitHub.

3. **Le manifesto HTML doit s'appeler exactement `manifesto-reader.html`** dans `/public`. Si c'est un autre nom, la page `/manifesto` renvoie un lien mort.

4. **Brevo bloque les IPs inconnues par défaut**. Désactiver "Blocage des adresses IP non autorisées" pour les clés API sur https://app.brevo.com/security/authorised_ips.

5. **Variables d'environnement Vercel : redéploiement obligatoire**. Toute modification de `BREVO_API_KEY` ou `BREVO_MANIFESTO_LIST` nécessite un redeploy manuel.

6. **Formspree silencieusement cassé si l'email destinataire n'est pas vérifié**. À vérifier pour le form `xnjwroeq`.

7. **⚠️ NEW (15 mai 2026) : Liens Stripe désynchronisés avec les prix affichés.** Suite à la mise à jour de pricing, les 4 liens Stripe actuels pointent toujours vers les anciens prix. **Les pages affichent les nouveaux prix mais le checkout débite l'ancien montant.** Hamza doit recréer les 4 payment links Stripe avec les bons prix et m'envoyer les nouvelles URLs pour mise à jour. Pour Content Domination, c'est en plus un changement de modèle : créer un **Subscription payment link** (récurrent mensuel), pas un one-time.

---

## 1 · PRICING (officiel — 15 mai 2026)

| Offre | Prix | Type | Note |
|---|---|---|---|
| Brand Intelligence System | **5 000 €** | One-time | Anciennement 2 500 € |
| Content Domination System | **7 500 € / mois** | Subscription ⚠️ | Anciennement 5 000 € one-time. **Passage en récurrent** |
| Revenue Architecture System | **6 000 €** | One-time | Anciennement 2 500 € |
| Empire Bundle (flagship) | **18 000 €** | One-time | Anciennement 7 500 € |

### Math du bundle (à retenir)

| Composant | Prix individuel |
|---|---|
| Brand Intelligence | 5 000 € |
| Content Domination × 3 mois inclus | 22 500 € |
| Revenue Architecture | 6 000 € |
| **À la carte total** | **33 500 €** |
| **Bundle price** | **18 000 €** |
| **Savings displayed** | **15 500 €** |

> Le bundle inclut **3 mois de Content** (1 trimestre), pas un abonnement perpétuel. Ce choix est documenté en commentaire dans `app/empire-bundle/page.tsx`. Si tu veux changer pour 6 mois ou plus, recalcule la math et update toutes les pages cohérentes (empire-bundle/page.tsx + offers-section.tsx).

---

## 2 · ARCHITECTURE & ÉTAT ACTUEL

### Arborescence des routes

```
app/
├── page.tsx                       # Home
├── layout.tsx                     # Layout racine
├── globals.css                    # Variables CSS + keyframes
├── about/page.tsx                 # Page About
├── manifesto/page.tsx             # Dual CTA avec modale Brevo
├── case-studies/page.tsx          # ✅ NEW (15 mai 2026) — page dédiée social proof
├── brand-intelligence/page.tsx    # Prix 5 000 €
├── content-domination/page.tsx    # Prix 7 500 €/mois
├── revenue-architecture/page.tsx  # Prix 6 000 €
├── empire-bundle/page.tsx         # Flagship 18 000 €
└── api/
    └── manifesto-subscribe/
        └── route.ts               # Endpoint serveur Brevo

components/strawberry/
├── navbar.tsx                     # ✅ Ajout lien "Case Studies"
├── hero-section.tsx
├── problem-section.tsx
├── services-section.tsx
├── offers-section.tsx             # ✅ Mis à jour avec nouveaux prix
├── about-section.tsx
├── cases-section.tsx              # ✅ Refait à fond — metrics + 3 quotes + CTA vers /case-studies
├── cta-banner.tsx
├── contact-section.tsx
├── footer.tsx
├── animated-orb.tsx
└── glass-card.tsx

public/
└── manifesto-reader.html
```

### URLs de production

| Page | URL |
|---|---|
| Home | https://v0-strawberryprod.vercel.app/ |
| Case Studies (nouveau) | https://v0-strawberryprod.vercel.app/case-studies |
| Manifesto | https://v0-strawberryprod.vercel.app/manifesto |
| Manifesto reader | https://v0-strawberryprod.vercel.app/manifesto-reader.html |
| Brand Intelligence | https://v0-strawberryprod.vercel.app/brand-intelligence |
| Content Domination | https://v0-strawberryprod.vercel.app/content-domination |
| Revenue Architecture | https://v0-strawberryprod.vercel.app/revenue-architecture |
| Empire Bundle | https://v0-strawberryprod.vercel.app/empire-bundle |

### Liens Stripe (⚠️ à recréer — prix obsolètes)

| Offre | Prix affiché | URL Stripe actuelle | À refaire ? |
|---|---|---|---|
| Brand Intelligence | 5 000 € | `aFadR2b2AfDeeYK1N6f7i02` | ⚠️ Oui (encore à 2 500 €) |
| Content Domination | 7 500 €/mois | `00wcMY4EcfDe3g28buf7i03` | ⚠️ Oui (one-time 5 000 €) — **doit devenir Subscription** |
| Revenue Architecture | 6 000 € | `bJe8wIeeMfDe8Am4Zif7i04` | ⚠️ Oui (encore à 2 500 €) |
| Empire Bundle | 18 000 € | `7sYfZaeeMbmYbMy77qf7i05` | ⚠️ Oui (encore à 7 500 €) |

> **Action requise côté Hamza** : créer 4 nouveaux payment links sur Stripe avec les bons prix, dont 1 en mode Subscription pour Content. Me les envoyer pour update du code.

### Endpoint Formspree (formulaire de contact home)

- **ID** : `xnjwroeq`
- **URL complète** : `https://formspree.io/f/xnjwroeq`
- **Email destinataire** : `Strawberryprod.contact@gmail.com`

### Système Brevo (lead magnet manifesto)

- **Compte** : `Strawberryprod.contact@gmail.com`
- **Liste** : "Manifesto Subscribers"
- **Variables d'environnement Vercel** : `BREVO_API_KEY` + `BREVO_MANIFESTO_LIST`
- **Workflow d'automation** : déclencheur "Contact added to list Manifesto Subscribers" → envoi email premium "You just chose to take your brand seriously."
- **IPs autorisées Brevo** : ⚠️ désactivées pour API

---

## 3 · SOCIAL PROOF / CASE STUDIES (15 mai 2026)

### Composant home : `components/strawberry/cases-section.tsx`

Affiche sur la home :
- 3 metrics-cards (+312% revenue, 2.4M views, 47% conversion) avec contexte client + détail
- 3 quotes courtes avec nom + rôle + tag du système utilisé
- CTA vers `/case-studies`

### Page dédiée : `app/case-studies/page.tsx`

Structure :
1. **Hero** "The receipts. Numbers, named."
2. **Bande de stats globales** (42+ founders, 8.4M€ revenue attributed, 94% renewal, 16 wks ROI)
3. **3 case studies longues** au format Before / After / How / Quote (Brand Intelligence + Revenue, Content Domination seul, Revenue Architecture seul)
4. **6 témoignages courts** supplémentaires
5. **Final CTA** vers `/#offers` et `/empire-bundle`

### ⚠️ TOUS LES CHIFFRES ET NOMS SONT DES PLACEHOLDERS

Les case studies et témoignages dans `cases-section.tsx` et `case-studies/page.tsx` sont des **placeholders réalistes** à remplacer par les vrais clients de Strawberry quand il y en aura. Garder la structure (Before / After / How / Quote) et les longueurs de texte, juste remplacer le contenu.

Tags système utilisés dans les badges quotes :
- `Brand Intelligence`
- `Content Domination`
- `Revenue Architecture`
- `Empire Bundle`

---

## 4 · TODO / AMÉLIORATIONS POSSIBLES

### Urgent

- **Liens Stripe à recréer** (4 liens — voir tableau plus haut)
- **Content Domination en mode Subscription** sur Stripe (pas one-time)
- **Remplacer les case studies placeholder par les vrais clients** quand disponibles

### À surveiller

- Délivrabilité email Brevo (envoi via Gmail → moyen, configurer SPF/DKIM sur domaine pro à terme)
- Formspree : confirmer email destinataire vérifié
- Cache navigateur : tester en navigation privée après chaque deploy

### Améliorations non bloquantes

- PDF du manifesto en pièce jointe email
- Séquence de nurturing Brevo (J+2, J+5, J+10)
- Tracking conversion (Vercel Analytics events ou PostHog par page)
- SEO : pas de sitemap.xml ni robots.txt
- Mobile UX du manifesto-reader.html

### Choix produit validés en prod

- Devise : **€ partout**
- Boutons OffersSection home : 2 par carte (Get Started Stripe + Learn More page détail)
- Lead magnet manifesto : lecture libre ET email capture
- Liens Stripe : `target="_blank"`
- **Aucune mention de "book a call" / "strategy call" nulle part**
- Case Studies : structure Before / After / How (chiffré, pas vibey)

---

## 5 · HISTORIQUE DES BUGS RÉSOLUS

| Bug | Cause racine | Solution |
|---|---|---|
| 404 sur pages d'offres | Dossiers en `Brand Intelligence` (espace + majuscules) | Renommés en kebab-case |
| "Book a strategic call" sur Empire Bundle | Ancienne version du fichier | Réécrit avec 2 CTA (Stripe + Compare) |
| Manifesto inaccessible | Fichier nommé `neuro_cinema_manifesto_reader_v2.html` | Renommé en `manifesto-reader.html` |
| Page /manifesto sans bouton lecture | Ancienne version | Remplacée par dual CTA + modale |
| Brevo "unrecognised IP" | Sécurité IP authorization activée | Désactivée pour API |

---

## 6 · HISTORIQUE DES CHANGEMENTS

### 15 mai 2026

- **Pricing mis à jour** sur les 4 pages d'offres + offers-section.tsx home :
  - Brand Intelligence 2 500 € → **5 000 €**
  - Content Domination 5 000 € one-time → **7 500 €/mois** récurrent
  - Revenue Architecture 2 500 € → **6 000 €**
  - Empire Bundle 7 500 € → **18 000 €** (économie affichée 15 500 €)
- **Empire Bundle** : math recalculée (33 500 € à la carte, dont 22 500 € = 3 mois de Content inclus)
- **`components/strawberry/cases-section.tsx`** refait à fond : metrics-cards + quotes + CTA vers /case-studies
- **Nouvelle page `/case-studies`** : 3 case studies longues + 6 témoignages + stats globales
- **Navbar** : ajout du lien "Case Studies" entre "Offers" et "Manifesto"
- ⚠️ **Liens Stripe non mis à jour** — Hamza doit les recréer et m'envoyer les nouvelles URLs

### 14 mai 2026

- Création des 4 pages d'offres (brand-intelligence, content-domination, revenue-architecture, empire-bundle)
- Refonte page /manifesto avec dual CTA + intégration Brevo
- Création route API `/api/manifesto-subscribe`
- Configuration workflow Brevo email premium

---

> **Pour reprendre une conversation future** : la prod est stable côté code et UX. Le seul truc à régler avant de pousser le pricing public, c'est les 4 liens Stripe (voir tableau §2). Tout le reste est cohérent.
