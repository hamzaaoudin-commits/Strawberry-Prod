# Strawberry — patch : source récente + prix annoncé plus tôt

Deux fichiers : `components/strawberry/impact-stats.tsx` et
`components/strawberry/hero-section.tsx`.

## 1. La statistique de 2015 est remplacée

**Avant :** 85% des consommateurs incapables de citer une histoire de marque
mémorable — Headstream, Brand Storytelling Report, **2015**. Vraie, mais
elle datait de onze ans et contredisait l'argument temporel du site : si le
problème existait déjà en 2015, la machine n'a rien déclenché.

**Après :** 74% des nouvelles pages web contiennent désormais du texte
généré par une machine.

- **Source :** Ahrefs, analyse de 900 000 pages, avril 2025.
- **Lien :** https://ahrefs.com/blog/what-percentage-of-new-content-is-ai-generated
- **Méthode :** leur détecteur maison (bot_or_not) a analysé 900 000 pages
  anglophones nouvellement créées, une seule par domaine — donc 900 000
  domaines différents. Résultat : 74,2% contenaient de l'IA (2,5%
  entièrement générées, 71,7% en mélange humain-IA), 25,8% étaient
  purement humaines.

C'est une source primaire — l'étude publiée par Ahrefs eux-mêmes, pas un
agrégateur de statistiques. Elle prouve la saturation elle-même plutôt que
d'en décrire une conséquence, et elle date de la bonne période.

Le 38% de Kantar reste inchangé : il tient tout seul et sert directement
l'argument central (cesser d'être comparé au prix).

## 2. Le prix apparaît dès le hero

La ligne factuelle sous le titre devient : « Vingt pièces écrites à la main.
Quatre maisons par trimestre. À partir de 4 500 €. »

Le prix n'apparaissait nulle part avant la section offre, très bas dans la
page. Sur une commande à 4 500 €, l'annoncer tôt qualifie l'audience au lieu
de laisser quelqu'un lire tout l'argumentaire pour découvrir le prix trop
tard. « À partir de » plutôt que le montant sec, puisque l'audit à 490 €
existe aussi.

## Fichiers inclus

- `components/strawberry/impact-stats.tsx`
- `components/strawberry/hero-section.tsx`
