/**
 * Layout hérité de l'ancienne URL /[langue]/audit.
 *
 * L'audit à 490€ vit désormais sous /[langue]/brand-narrative-audit, et la page
 * voisine ne fait plus que rediriger. Ce layout est neutralisé pour qu'aucune
 * métadonnée ne soit encore produite pour une URL qui n'est plus canonique.
 * Le dossier peut être supprimé sans risque.
 */
export default function LegacyAuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
