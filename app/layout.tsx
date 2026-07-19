/**
 * Neutral root layout.
 *
 * Every page now lives under app/[lang]/, whose layout owns <html> and <body>
 * and sets the language from the URL. This file exists purely so the previous
 * root layout — which hardcoded lang="en" — is overwritten rather than deleted.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
