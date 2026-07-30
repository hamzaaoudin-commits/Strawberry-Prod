/** Layout hérité, neutralisé : la page ne fait plus que rediriger. */
export default function LegacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
