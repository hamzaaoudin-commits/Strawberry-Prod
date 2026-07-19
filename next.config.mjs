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
    const moved = [
      'about','audit','brand-narrative-audit','manifesto','momentum','radar',
      'sample-audit','strawberry-method','thank-you','cgv','mentions-legales',
      'politique-confidentialite',
    ]
    return [
      { source: '/nova', destination: '/fr', permanent: true },
      { source: '/arsenal', destination: '/fr', permanent: true },
      { source: '/nocta', destination: '/fr/momentum', permanent: true },
      { source: '/case-studies', destination: '/fr/sample-audit', permanent: true },
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
