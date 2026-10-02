# Dictionnaire des balises — webhook Make

Chaque envoi arrive en JSON sur le Custom Webhook. **Les 77 balises de `responses` sont toujours présentes**, vides si la question est restée sans réponse : Make les découvre toutes dès le premier test.

## Mettre en place la structure dans Make

1. Dans le module *Custom Webhook*, cliquez *Redetermine data structure* (ou *Add → Determine data structure*).
2. Envoyez-lui `exemple-payload-make.json` (clic droit → copier le contenu, puis `curl -X POST -H "Content-Type: application/json" -d @exemple-payload-make.json <URL du webhook>`) : tout apparaît d'un coup.
3. Ensuite, chaque réponse se lit en `{{1.responses.nom_de_la_balise}}`.

Formats : *texte* = chaîne libre · *liste* = options séparées par ` | ` (`split(1.responses.x; " | ")` pour les isoler) · *nombre* = entier. Une réponse vide est une chaîne vide `""` (filtre : « n'est pas vide »).

## Balises générales

| Chemin | Contenu |
|---|---|
| `event` | toujours `onboarding_completed` |
| `submission_id` | référence du dossier, la même que dans l'e-mail et sur la page de fin |
| `submitted_at` | date ISO de l'envoi |
| `offer` | `architecture` |
| `terrain` / `terrain_label` | `marques`, `produits`, `lieux`, `artistes` / libellé |
| `lang` | `fr` ou `en` |
| `client.name` · `client.house` · `client.email` | identité du client |
| `answers_text` | **tout le questionnaire**, intitulés et réponses, dans l'ordre des chapitres — la variable que lisent les 28 modules d'écriture |

## Balises des réponses (`responses.*`)

Les questions qui existent en variante par terrain (`positioning`, `competitors`) donnent la même balise quel que soit le terrain.

| Balise | Chapitre | Type · format | Question (terrain « marques ») |
|---|---|---|---|
| `activity` | Les fondations | texte long | Dites-nous les faits : ce que vous vendez ou faites, pour qui, depuis quand, et où. |
| `conviction` | Les fondations | texte long | Quelle conviction tenez-vous sur votre secteur que la plupart refuseraient de dire à voix haute ? |
| `rupture` | Les fondations | texte long | Racontez le moment de rupture. |
| `enemy` | Les fondations | texte long | Qui ou qu'est-ce qui est l'ennemi de cette maison ? |
| `positioning` | Le champ | texte long | Quelle phrase décrit votre maison aujourd'hui ? |
| `category` | Le champ | texte long | Dans quelle case vous range-t-on spontanément ? Et dans laquelle voudriez-vous être rangé ? |
| `awareness` | Le champ | texte (une option) | Où en sont la plupart de vos acheteurs quand ils vous trouvent ? |
| `maturity` | Le champ | texte (une option) | Comment décririez-vous votre marché aujourd'hui ? |
| `competitor_1_name` … `competitor_5_name`, `competitor_1_line` … `competitor_5_line` | Le champ | texte × 10 (3 minimum remplis) | Nommez 3 à 5 concurrents directs, et leur phrase. |
| `competitor_edge` | Le champ | texte long | Qu'est-ce qu'un concurrent fait mieux que vous, honnêtement ? |
| `past_attempts` | Le champ | texte long · facultatif | Qu'avez-vous déjà essayé pour vous démarquer, et pourquoi ça n'a pas pris ? |
| `archetype` | La voix | liste (max 2) | Choisissez un ou deux archétypes qui vous ressemblent. |
| `tone_a1`, `tone_a2`, `tone_a3`, `tone_a4`, `tone_a5` | La voix | nombre 0–100 par pas de 5, 50 = neutre (a1 = Formelle (0) ↔ Familière (100) ; a2 = Sérieuse (0) ↔ Ludique (100) ; a3 = Discrète (0) ↔ Théâtrale (100) ; a4 = Classique (0) ↔ Avant-gardiste (100) ; a5 = Minimaliste (0) ↔ Maximaliste (100)) | Où se situe votre ton, entre ces pôles ? |
| `address_mode` | La voix | texte (une option) | Comment la maison s'adresse-t-elle à ses clients ? |
| `languages` | La voix | liste (max 3) | Dans quelle(s) langue(s) la maison s'exprime-t-elle ? |
| `forbidden` | La voix | texte long | Quel sujet, ton ou blague ne franchirez-vous jamais, même si ça faisait vendre ? |
| `words_mine`, `words_never` | La voix | liste (≥ 3 mots au total) | Vos mots, et ceux qui ne le seront jamais. |
| `voice_sample` | La voix | texte long · facultatif | Collez un texte qui vous ressemble vraiment. |
| `decision` | L'audience | texte (une option) | Qui décide de l'achat, en face de vous ? |
| `audience` | L'audience | texte long | Décrivez la personne exacte qui devrait vous commander aujourd'hui. |
| `customer_words` | L'audience | texte long · facultatif | Collez trois phrases que vos clients ont dites ou écrites sur vous. |
| `objections` | L'audience | texte long | Les trois objections qu'on vous oppose le plus souvent avant d'acheter. |
| `risk` | L'audience | texte (une option) | Si un client se trompe en vous choisissant, le risque est surtout... |
| `repoussoir` | L'audience | texte long | Décrivez un client que vous avez refusé, ou que vous refuseriez. |
| `acquisition` | L'audience | liste (max 3) | Comment vos meilleurs clients arrivent-ils jusqu'à vous ? |
| `team` | Le quotidien | texte (une option) | Combien de personnes parlent au nom de la maison ? |
| `model` | Le quotidien | texte (une option) | Comment vendez-vous aujourd'hui ? |
| `price` | Le quotidien | texte long | Qu'est-ce qui justifierait de doubler votre prix demain ? |
| `traction` | Le quotidien | texte long · facultatif | Quels chiffres ou faits vérifiables prouvent que ça marche déjà ? |
| `who_writes` | Le quotidien | liste (max 3) | Qui écrit aujourd'hui au nom de la maison ? |
| `channels` | Le quotidien | liste (max 9) | Sur quels canaux la maison s'exprime-t-elle régulièrement aujourd'hui ? |
| `content_format` | Le quotidien | texte (une option) | Quel format pouvez-vous tenir dans la durée, sans vous épuiser ? |
| `support_scene` | Le quotidien | texte long | Racontez la dernière fois qu'un client a été déçu ou en colère. |
| `hr_disqualifier` | Le quotidien | texte long · facultatif | Chez quelqu'un qui travaillerait avec vous (employé, associé, prestataire), quelle qualité est non-négociable, et laquelle disqualifie immédiatement ? |
| `deploy` | Le déploiement | liste (max 2) | Où de meilleurs mots changeraient immédiatement votre chiffre d'affaires ? |
| `visual_keep` | Le déploiement | texte long | Dans votre identité visuelle actuelle, qu'est-ce qui doit rester, et qu'est-ce qui doit disparaître ? |
| `portrait_house` | Le déploiement | texte long | Si cette maison était une personne, décrivez-la. |
| `outside_refs` | Le déploiement | texte long · facultatif | Trois références hors de votre secteur qui disent ce que la maison devrait ressentir. |
| `calendar` | Le déploiement | texte long · facultatif | Quelles échéances avez-vous dans les six prochains mois ? |
| `untouchables` | Le déploiement | texte long · facultatif | Qu'est-ce qui est intouchable, sensible ou confidentiel ? |
| `budget` | Le déploiement | texte (une option) · facultatif | Quel budget annuel pouvez-vous consacrer à appliquer ces décisions ? |
| `proof` | La preuve | texte long | Racontez une fois précise où quelqu'un a compris votre maison sans que vous ayez eu à l'expliquer. |
| `success_signal` | La preuve | texte long | Dans six mois, quel signe concret vous dirait que ce document a servi ? |
| `headline` | La preuve | texte long · facultatif | Imaginez un article de presse sur votre maison dans trois ans. Quel est le titre ? |
| `portrait_founder` | La preuve | texte long | Décrivez le fondateur dans un an, une fois ce document appliqué. |
| `review_logistics` | La preuve | texte long · facultatif | Qui doit valider le document avec vous, et quels créneaux vous arrangent pour l'heure de relecture, vers le jour 20 ? |
| `link_site`, `link_linkedin`, `link_content`, `link_extra_1` … `link_extra_10`, `link_extra_count` | La preuve | texte × 13 + nombre (le site est obligatoire) | Liens et accès. |

## Options des questions à choix

- `awareness` : Inconscient du problème · Conscient du problème, pas des solutions · Conscient qu'il existe des solutions, pas de vous · Conscient de vous, pas encore convaincu · Le plus conscient : prêt, cherche juste le bon moment
- `maturity` : Jeune, flou, tout reste à définir · Mature et saturé de génériques · En train de se re-définir (nouvel usage, nouvelle technologie) · Dominé par un ou deux acteurs installés
- `archetype` : Le Créateur · Le Rebelle · Le Sage · Le Magicien · Le Héros · L'Amoureux · Le Bouffon · Le Gars d'à côté · Le Protecteur · Le Souverain · L'Explorateur · L'Innocent
- `address_mode` : Nous, au vouvoiement · Je, au vouvoiement · Nous, au tutoiement · Je, au tutoiement · Ça dépend du support
- `languages` : Français · Anglais · Espagnol · Allemand · Italien · Autre
- `decision` : Moi seul : je décide et je paie · Un associé ou un conjoint à convaincre · Un comité ou une hiérarchie · Le grand public : une décision individuelle mais nombreuse
- `risk` : Financier : perdre de l'argent · Réputationnel : mal paraître · Temporel : perdre du temps, devoir recommencer · Émotionnel : se sentir jugé ou incompris · Faible : l'achat est presque anodin
- `acquisition` : Bouche-à-oreille et recommandation · Réseaux sociaux · Recherche Google ou site · Prospection directe · Presse, médias, événements · Partenaires et prescripteurs · Passage et emplacement · Publicité payante
- `team` : Moi seul·e · 2 à 5 personnes · 6 à 20 personnes · Plus de 20 personnes
- `model` : Paiement unique · Abonnement · Sur devis, du sur-mesure · Un mix des deux
- `who_writes` : Moi · Un membre de l'équipe · Un freelance ou une agence · Un outil d'IA · Personne : ça ne se fait pas vraiment
- `channels` : Site web · Instagram · LinkedIn · TikTok · YouTube · Newsletter · Presse et médias · Salons et événements · Rien de régulier
- `content_format` : Écrit long · Court et visuel · Vidéo · Audio · Je ne sais pas encore
- `deploy` : La page d'accueil · Le pitch aux investisseurs ou partenaires · La prospection à froid · Les réseaux sociaux · Les rendez-vous de vente en direct
- `budget` : Moins de 5 000 € · 5 000 à 20 000 € · 20 000 à 100 000 € · Plus de 100 000 € · Je ne sais pas encore
