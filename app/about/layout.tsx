/**
 * Layout hérité, neutralisé. La page correspondante ne fait plus que rediriger,
 * donc plus aucune métadonnée n'a besoin d'être produite ici.
 */
export default function LegacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
