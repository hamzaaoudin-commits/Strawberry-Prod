# Strawberry — l'onboarding, sept corrections d'usage

2 fichiers.

## 1. La sortie et la reprise

C'était le point qui faisait perdre des questionnaires entiers.

Les réponses étaient déjà restaurées au retour — **mais en silence**. On
revenait sur l'écran d'accueil sans savoir que son travail existait
encore, donc on recommençait ou on partait.

Un bandeau s'affiche maintenant :

> **VOUS AVIEZ COMMENCÉ**
> Vos réponses sont là, vous étiez à la question 18 sur 30. **[Reprendre]**

Il n'apparaît qu'à partir de la troisième question : reprendre à la
deuxième n'a aucun intérêt.

Et sous chaque écran, en petit : « Vous pouvez fermer cet onglet : tout
est gardé sur cet appareil, vous reprendrez où vous en êtes. » Une heure
de travail sans savoir si on peut partir, c'est ce qui fait remplir
n'importe quoi pour en finir.

## 2. Le temps restant, glissant

L'estimation était donnée une fois au départ. Elle est maintenant
recalculée à chaque écran — deux minutes par question rédigée, trente
secondes sinon — et affichée sous le compteur : **≈ 22 min restantes**.

C'est la seule information qui décide de continuer ou de s'arrêter.

## 3. L'échappatoire honorable

**« J'y reviens »** apparaît à côté de Continuer tant que la question n'a
pas de réponse valide. La question est mise de côté et **reproposée à la
fin**, une fois que le reste a réchauffé.

Sans ça, une question comme « la conviction que votre milieu refuserait de
dire » se solde par six mots tapés pour avancer — et la pièce qui en
dépend sera creuse.

Le report est sauvegardé avec les réponses : il survit à une fermeture
d'onglet.

## 4. Le mobile

Le bouton **colle au bas de l'écran** sur mobile, au-dessus de la zone
système (`env(safe-area-inset-bottom)`), avec un fond opaque et un flou.

Sur un téléphone, le clavier mange la moitié de la hauteur : on tapait sa
réponse sans voir comment avancer. C'est là qu'un dirigeant remplira ça,
dans le train.

## 5. Les réponses vides, signalées au récapitulatif

Une ligne vide ne se repère pas dans une liste de trente. Elle affiche
désormais **« Sans réponse — y répondre maintenant »**, en rouge et
cliquable.

Le vrai risque à ce stade n'est pas la faute de frappe : c'est la question
passée sans s'en rendre compte.

## 6 et 7. Ce que je n'ai pas fait, et pourquoi

**La variation de densité** — grouper deux ou trois questions courtes sur
un même écran — demande de revoir la validation et la navigation question
par question. C'est un chantier à part, et le faire à moitié casserait le
report et la reprise qu'on vient de poser.

**La preuve de progression** — montrer la position qui se dessine — suppose
de faire tourner un modèle pendant le questionnaire. Techniquement faisable,
mais ça change la nature du produit : dites-moi si vous le voulez.

## Vérification

Contrôle de types : zéro erreur.
