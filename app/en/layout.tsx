import { LanguageProvider } from "@/lib/i18n"

/**
 * Les trois pages légales anglaises vivaient ici avant le routage par langue.
 *
 * Un segment statique (`en`) l'emporte toujours sur un segment dynamique
 * (`[lang]`) : tant que app/en/ existe, il masque app/[lang]/ pour l'anglais, et
 * ces pages servaient donc une version figée, sans provider de langue.
 *
 * Les fichiers ne pouvant pas être supprimés par un zip, ils réexportent
 * désormais l'implémentation partagée, et ce layout leur rend le contexte de
 * langue. Supprimer le dossier app/en/ est sans risque : app/[lang]/ prend le
 * relais immédiatement, avec les mêmes URL.
 */
export default function EnLegacyLayout({ children }: { children: React.ReactNode }) {
  return <LanguageProvider lang="en">{children}</LanguageProvider>
}
