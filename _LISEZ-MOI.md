# Strawberry — le plein écran, en production

2 fichiers. C'est la version retenue parmi les quatre pistes, portée du
mockup vers le vrai code du questionnaire.

## Ce qui disparaît

**La grille asymétrique et le folio en marge** — remplacés par un écran
centré : plus de colonne de marge, plus de grand chiffre.

**Deux props mortes**, trouvées en réécrivant : `pieces` et
`previousEcho`/`terrainLabel`/`deferredCount` étaient encore transmis à
`StepScreen` sans y être jamais lus — restes d'une passe précédente. Et
**le miroir** (`mirror`) était accepté mais plus jamais rendu depuis un
nettoyage antérieur qui l'avait emporté par erreur : il est réintégré ici.

## Ce que ça devient

**Le repère de section** est un point rouge qui respire, comme sur le
reste du site, avec le nom de la section et le compteur en petit —
remplace la barre et le folio. Sur une question fondatrice, il cède la
place à une seule ligne : « Prenez le temps. Personne ne vous regarde. »

**La question et l'aide sont centrées**, en contraste net : 300 de
graisse en grand pour la question, 500 en petit pour l'aide.

**Le grand geste est réservé à la réponse principale.** Le trait sous le
champ s'allonge et rougit au focus (`:focus-within`, sans état React
requis), et un curseur clignote avant même le clic, tant que le champ est
vide. Les champs secondaires — nom, maison, email, lignes de concurrents —
gardent un trait simple qui rougit au focus, sans le grand geste : le
répéter sur trois champs d'un même écran aurait été trop.

**Le bouton reste un mot souligné**, plus de bouton plein : le silence de
l'écran n'est pas cassé par un aplat rouge.

**Le pied perd son fond opaque** sur mobile : juste le bouton et le flou,
sans bande sombre qui romprait le noir.

## Vérification

Contrôle de types : zéro erreur.
