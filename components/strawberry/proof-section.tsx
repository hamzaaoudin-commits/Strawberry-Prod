/**
 * La preuve d'œil — retirée.
 *
 * Ce composant n'est appelé nulle part dans le site (vérifié) : il ne
 * s'affichait déjà plus avant ce patch. Il reposait entièrement sur le
 * compteur RADAR, retiré de config.ts avec le reste de l'offre — laisser le
 * fichier tel quel aurait cassé la compilation malgré son inutilisation,
 * Next.js validant les types de tous les fichiers du projet, pas seulement
 * ceux réellement importés.
 *
 * Vidé plutôt que corrigé en profondeur : rien n'en dépend, autant supprimer
 * ce fichier du dépôt plutôt que de conserver une preuve qui ne prouve plus
 * rien.
 */
export function ProofSection() {
  return null
}
