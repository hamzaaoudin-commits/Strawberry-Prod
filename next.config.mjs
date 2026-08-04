/** @type {import('next').NextConfig} */

// Content Security Policy — restricts what the browser is allowed to load/execute.
// Blocks injected scripts, clickjacking, and unauthorised data exfiltration.
const ContentSecurityPolicy = [
  "default-src 'self'",

  // 'unsafe-eval' has been removed: it was only ever needed by the dev server,
  // and leaving it in production lets any injected string become executable code.
  // cdnjs was dropped with the Chart.js case-study graphs — no external script
  // host remains except Vercel's own analytics.
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",

  // Inline styles are still required by the remaining style={{…}} blocks.
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",

  // Narrowed from "https:" — an open image host is a classic exfiltration
  // channel, since a beacon URL can carry stolen data in its query string.
  "img-src 'self' data: blob:",

  // The browser may now only send data to our own origin. Form submissions go
  // through /api/contact, so no third-party endpoint is reachable from the page.
  "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",

  "frame-src 'self' https://js.stripe.com https://hooks.stripe.com",
  "form-action 'self' https://buy.stripe.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: ContentSecurityPolicy },
  // Force HTTPS for 2 years, including subdomains.
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  // Stop MIME-type sniffing (prevents a .txt upload being executed as JS).
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Legacy clickjacking protection for old browsers (frame-ancestors covers modern ones).
  { key: 'X-Frame-Options', value: 'DENY' },
  // Don't leak full URLs (which can contain tokens) to third-party sites.
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Deny access to sensitive device APIs we never use.
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(self "https://buy.stripe.com"), interest-cohort=()' },
  // Isolate the origin against cross-origin side-channel attacks.
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  // Gives the origin its own agent cluster, limiting cross-origin memory sharing.
  { key: 'Origin-Agent-Cluster', value: '?1' },
  // Legacy auditors still look for this; harmless on modern browsers.
  { key: 'X-XSS-Protection', value: '0' },
  { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
]

const nextConfig = {
  reactStrictMode: true,

  // Never ship a build that doesn't type-check — a silent type error in production
  // is how data-shape bugs and injection holes reach real users.
  typescript: {
    ignoreBuildErrors: false,
  },

  // Image optimisation re-enabled, serving modern formats.
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // No remote patterns declared: only local /public images can be optimised,
    // which prevents the optimiser being abused as an open image proxy.
    remotePatterns: [],
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
  },

  // Hide the framework version from response headers.
  poweredByHeader: false,

  compress: true,

  /**
   * Permanent redirects for retired offers. These take effect once the
   * corresponding app/<slug>/page.tsx stubs are deleted, so old links, bookmarks
   * and indexed URLs keep resolving instead of 404-ing.
   */
  /**
   * Old flat URLs now live under a language segment. These 308s preserve every
   * indexed link and bookmark; the proxy handles anything not listed here.
   */
  async redirects() {
    // Anciennes URL plates : tout ce qui vivait à la racine vit désormais sous
    // une langue. 308 pour ne perdre aucun lien indexé ni aucun signet.
    const moved = [
      'about','brand-narrative-audit','brand-narrative-architecture','momentum','radar',
      'strawberry-method','thank-you','cgv','mentions-legales',
      'politique-confidentialite',
    ]

    /**
     * Les manifestes ne sont plus des fichiers libres.
     *
     * Ces copies statiques vivaient dans /public : servies par le CDN, elles ne
     * passaient jamais par le proxy et donnaient la doctrine complète sans
     * abonnement. Les fichiers sont vidés ET redirigés — une redirection est
     * évaluée avant le système de fichiers, donc elle gagne dans tous les cas.
     */
    const manifestoFiles = [
      'manifesto-reader.html','manifesto-box-set.html','manifesto-vol-2.html','manifesto-vol-3.html',
      'Vol_IV_The_Founder_Codex.html','Vol_V_The_Refusal_Manifesto.html',
      'Vol_VI_The_Aesthetic_Constitution.html','Vol_VII_The_Rarity_Engine.html',
      'Vol_VIII_The_Patience_Doctrine.html','Vol_IX_The_Devotion_Codex.html',
    ]

    return [
      // Offres retirées.
      { source: '/nova', destination: '/fr', permanent: true },
      { source: '/arsenal', destination: '/fr', permanent: true },
      { source: '/nocta', destination: '/fr/momentum', permanent: true },
      { source: '/case-studies', destination: '/fr/documents', permanent: true },
      { source: '/manifesto', destination: '/fr/radar', permanent: true },

      // L'audit à 490€ porte maintenant son nom dans l'URL.
      { source: '/audit', destination: '/fr/brand-narrative-audit', permanent: true },
      { source: '/:lang(fr|en|es)/audit', destination: '/:lang/brand-narrative-audit', permanent: true },

      // Cinq URL disaient presque la même chose. Les deux documents publiés
      // vivent maintenant sous /documents, et /audit sous son vrai nom.
      { source: '/sample-audit', destination: '/fr/documents/sillage', permanent: true },
      { source: '/exemple-audit', destination: '/fr/documents/verso', permanent: true },
      { source: '/:lang(fr|en)/sample-audit', destination: '/:lang/documents/sillage', permanent: true },
      { source: '/:lang(fr|en)/exemple-audit', destination: '/:lang/documents/verso', permanent: true },

      // Les lectures gratuites et la page d'échelle sont retirées.
      { source: '/lectures', destination: '/fr/radar', permanent: true },
      { source: '/lectures/:path*', destination: '/fr/radar', permanent: true },
      { source: '/:lang(fr|en)/lectures/:path*', destination: '/:lang/radar', permanent: true },
      { source: '/offres', destination: '/fr/brand-narrative-architecture', permanent: true },
      { source: '/:lang(fr|en)/offres', destination: '/:lang/brand-narrative-architecture', permanent: true },

      // L'espagnol a été retiré du site. Les URL déjà indexées basculent en
      // français plutôt que de disparaître en 404.
      { source: '/es', destination: '/fr', permanent: true },
      { source: '/es/:path*', destination: '/fr/:path*', permanent: true },

      // L'Atlas n'est plus servi depuis la racine de /public.
      { source: '/30-architectures-atlas.pdf', destination: '/fr#atlas', permanent: false },

      ...manifestoFiles.map((f) => ({
        source: `/${f}`,
        destination: '/fr/radar',
        permanent: true,
      })),

      ...moved.map((slug) => ({
        source: `/${slug}`,
        destination: `/fr/${slug}`,
        permanent: true,
      })),
    ]
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
