# Strawberry — /lieux : la FAQ de NOCTA, et sa charte

Quatre fichiers.

## La FAQ

Vous avez raison : elle était dans le dépôt NOCTA, je ne suis pas allé la
chercher et j'en ai réécrit une. Les cinq questions sont maintenant celles
du site, dans leur formulation exacte, sous leur titre d'origine — « Ce
que les gérants me demandent. »

L'accordéon reprend le comportement de NOCTA : cartes arrondies 14px,
question en Bricolage semi-gras, « + » corail qui pivote en croix à
l'ouverture, filet qui s'éclaircit sur l'entrée ouverte, et réponse
dépliée par transition de `grid-template-rows` — la seule façon d'animer
une hauteur automatique en CSS pur. La première entrée est ouverte au
chargement.

`FAQ_LIEUX`, la FAQ que j'avais inventée, est retirée de `lib/faqs.ts`.

## La charte NOCTA (rappel du patch précédent, inclus ici)

Fond `#0a0910`, dégradé corail → iris à 108°, les quatre polices d'origine
chargées par la page (Bricolage Grotesque, Instrument Serif, Hanken
Grotesk, Space Mono), wordmark géant avec lueur et scintillement, pastille
qui pulse, bokeh du hero et son voile, cartes 18px, boutons pilule.

La page ne charge ni la barre de navigation ni le pied de page de
Strawberry : ils auraient réintroduit la charte du studio autour d'une
page qui n'est pas dans cette charte.

## La navigation

LIEUX dans le menu « Offres » et au pied de page (VENUES en anglais) —
c'est ce qui manquait pour que la page soit atteignable.

## Vérification

Contrôle de types réel : zéro erreur.

## Reste à faire

Home à deux portes, mention de la narration du dirigeant sur la page
Marques, page de vente des deux ouvrages (il me manque le lien Stripe du
second, les deux prix, et le mode de remise du PDF).
