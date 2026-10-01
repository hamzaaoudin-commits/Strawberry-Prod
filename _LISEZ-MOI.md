# Strawberry — le questionnaire à la hauteur du site, et branché sur Make

3 fichiers de code + le blueprint Make mis à jour.

## Les quatre idées de design

**1 · La question qui se remplit.** Elle apparaît en gris très pâle et
se colore mot à mot, le dernier mot en dégradé rouge — le même geste que
le texte du diagnostic sur la home. Toujours sous une seconde, même pour
une question longue.

**2 · Les chapitres comme des scènes de film.** Les deux bandes noires de
cinéma (le letterbox des pages de terrain) arrivent fermées sur l'écran
et s'ouvrent comme un plan qui commence, avec un grand numéro de scène en
contour derrière le titre.

**4 · Les choix en cartes S.T.R.A.W.** Les options deviennent de grandes
cartes à coins arrondis, chacune avec son numéro et son dégradé repris
des cinq chapitres de la méthode, sur une piste qu'on fait glisser à la
souris (ou au doigt sur mobile). Un glissement n'active jamais une carte
par erreur.

**9 · Le document qui s'assemble.** Au sceau, les six pièces arrivent
une à une et s'empilent en éventail ; le titre « le dossier est ouvert »
ne tombe qu'une fois le document formé.

## Le branchement Make

### Côté site — déjà fait dans ce patch

Le questionnaire envoie maintenant ses réponses **depuis le serveur**
vers un webhook Make, en plus de l'e-mail Formspree. L'URL du webhook
n'est jamais visible dans le navigateur : personne ne peut la récupérer
pour injecter de fausses commandes dans votre scénario.

Les deux envois partent en même temps : si l'un échoue, l'autre suffit,
rien n'est perdu.

### La structure envoyée à Make

```json
{
  "event": "onboarding_completed",
  "submission_id": "LOA-M1K2X9",
  "submitted_at": "2026-09-24T10:12:00.000Z",
  "offer": "architecture",
  "terrain": "marques",
  "terrain_label": "Marques",
  "lang": "fr",
  "client": { "name": "Marc", "house": "LOAM", "email": "marc@loam.fr" },
  "responses": {
    "positioning": "…",
    "conviction": "…",
    "rupture": "…",
    "enemy": "…",
    "competitor_1_name": "…",
    "competitor_1_line": "…",
    "tone_formal": 40,
    "deploy": "Site | Vente",
    "words_mine": "… | …",
    "words_never": "… | …",
    "link_site": "…"
  },
  "answers_text": "Tout le questionnaire, intitulés + réponses, en un bloc"
}
```

**Les balises** sont les identifiants des questions — `conviction`,
`rupture`, `enemy`, `portrait_house`, `price`, `forbidden`, etc. Les
questions qui existent en variante par terrain (`positioning_lieux`,
`competitors_produits`…) sont ramenées à une seule balise (`positioning`,
`competitor_N_*`) : votre scénario n'a qu'un chemin à gérer, quel que soit
ce que le client vend.

`answers_text` contient tout le questionnaire mis en forme : c'est la
variable à injecter telle quelle dans les prompts.

### Une correction trouvée en le faisant

L'e-mail Formspree listait jusqu'ici **les quatre variantes** du
positionnement et des concurrents, dont trois toujours vides — la route
ne filtrait pas par terrain. Corrigé avec la logique de filtrage déjà
présente dans `questionnaire-data.ts`.

### Côté Make — à faire par vous, dans cet ordre

1. **Importez `architecture-narrative-blueprint.json`.** Le déclencheur
   Tally est remplacé par un **Custom Webhook** ; la variable
   `Context_Global` lit désormais `{{1.answers_text}}` — l'IA reçoit les
   trente réponses, contre neuf avec Tally.
2. **Ouvrez le module 1 → « Add » → créez le webhook**, puis copiez l'URL
   qu'il affiche. (Un webhook ne peut pas être créé depuis un fichier
   importé, c'est la seule étape manuelle.)
3. **Sur Vercel**, ajoutez la variable d'environnement
   `MAKE_WEBHOOK_URL` avec cette URL, puis redéployez.
4. **Dans Make, cliquez « Redetermine data structure »** sur le module 1,
   puis remplissez une fois le questionnaire sur le site. Make capture les
   balises automatiquement.
5. Lancez le scénario.

La connexion Gmail et les vingt-huit modules d'écriture sont intacts —
vérifié : aucune référence orpheline, aucune trace de Tally restante.

## Vérification

Contrôle de types : zéro erreur sur le questionnaire, et zéro en mode
strict sur la route serveur.
