/** @type {import('next').NextConfig} */

// Content Security Policy — restricts what the browser is allowed to load/execute.
// Blocks injected scripts, clickjacking, and unauthorised data exfiltration.
const ContentSecurityPolicy = [
  "default-src 'self'",
  // Next.js requires inline/eval for its runtime; styled-jsx + inline styles need 'unsafe-inline'.
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https:",
  // Only our own origin, Formspree (contact form) and Vercel analytics may receive data.
  "connect-src 'self' https://formspree.io https://va.vercel-scripts.com https://vitals.vercel-insights.com",
  "frame-src 'self' https://js.stripe.com https://hooks.stripe.com",
  "form-action 'self' https://formspree.io https://buy.stripe.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
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
  async redirects() {
    return [
      { source: '/nova', destination: '/', permanent: true },
      { source: '/arsenal', destination: '/', permanent: true },
      { source: '/nocta', destination: '/momentum', permanent: true },
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
