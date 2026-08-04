# Strawberry — tour 10

24 fichiers, un seul glisser-déposer. Build validé.

Glissez les **dossiers** (`app`, `components`, `lib`), jamais leur contenu.

## Ce qui change

**Hero.** Phrase sur les « trois semaines » retirée. Nouveau sous-titre :
« Ce que vous vendez ne change pas. Ce que le marché en perçoit, si… ». Les
trois lignes « Ce que vous y gagnez » sont supprimées — mal placées, pas
convaincantes.

**Tous les CTA** « Commander le travail » deviennent « Passer commande »,
partout sur le site.

**Diagnostic.** Plus aucun sous-titre de type diapositive interne (« Pourquoi
c'est urgent maintenant », etc.) — le texte s'enchaîne comme une explication
qu'on donnerait à voix haute. « C'est ce que nous vendons » devient « c'est
ce que nous proposons ». La phrase creuse sur le « principe IA » est
supprimée.

**STRAW sur la home** reprend exactement la version encadrée en rouge de la
page méthode — les grandes lettres dans un cadre avec lueur — au lieu du
texte simple qu'il y avait avant.

**L'offre.** Titre corrigé : « Votre marché arrête de vous comparer. Il
commence à vous comprendre. » La phrase sur les 60 jours est maintenant en
français correct.

**SILLAGE.** Le document se lit maintenant page par page — sommaire
dépliable, navigation précédent/suivant — plutôt qu'en un seul long
défilement. Le curseur avant/après, retiré de la home, vit maintenant dans
SILLAGE, avec un vrai extrait du document (la partie « Faux / Juste ») au
lieu d'une phrase inventée sans rapport.

**Home.** La section « Les preuves » est retirée. Le livre et la ressource
gratuite (Atlas) passent maintenant avant le formulaire de contact, pas
après.

**MOMENTUM est retiré des surfaces marketing** : navbar, pied de page, menu
déroulant du formulaire de contact, page de commande, page Le Studio,
sitemap, FAQ. `/momentum` redirige maintenant vers
`/brand-narrative-architecture`. Je n'ai pas touché à `/momentum/atelier` :
c'est l'espace privé de livraison des maisons déjà accompagnées, pas une
page marketing — le retirer couperait l'accès de clients actifs. Si vous
voulez fermer complètement cet espace, dites-le-moi séparément.

**FAQ.** « Signes-vous un NDA ? » corrigé en « Signez-vous un NDA ? ».

## Vérifications après dépôt

- La home ne doit plus mentionner MOMENTUM nulle part.
- `/documents/sillage` doit s'ouvrir sur un lecteur page par page, avec un
  bouton « Suivant » en bas.
- `/momentum` doit rediriger vers `/brand-narrative-architecture`, pas
  afficher un 404.
