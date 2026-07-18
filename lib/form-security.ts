/**
 * Form hardening utilities.
 *
 * These run client-side, which means they are a *usability and abuse-cost* layer,
 * not a trust boundary — never rely on them alone for anything security-critical.
 * The real enforcement happens at Formspree (server side) and in the CSP.
 *
 * What they buy you:
 *  - Bots that blindly fill every field get caught by the honeypot.
 *  - Instant submissions (faster than a human can type) get rejected.
 *  - Oversized payloads are refused before they leave the browser.
 *  - Header-injection attempts in the email field are stripped.
 */

export const LIMITS = {
  name: 120,
  email: 254, // RFC 5321 maximum
  message: 4000,
  goal: 120,
} as const

/** Minimum time (ms) a real human needs to fill the form. Faster = bot. */
export const MIN_FILL_MS = 2500

/** Reject anything that isn't plausibly an email, without being clever about it. */
const EMAIL_RE = /^[^\s@<>()[\]\\,;:]+@[^\s@<>()[\]\\,;:]+\.[A-Za-z]{2,}$/

export function isValidEmail(value: string): boolean {
  const v = value.trim()
  if (v.length === 0 || v.length > LIMITS.email) return false
  // CR/LF in an email field is the classic email-header-injection vector.
  if (/[\r\n\t]/.test(v)) return false
  return EMAIL_RE.test(v)
}

/**
 * Strip control characters and clamp length.
 * Prevents header injection, null-byte tricks, and payload flooding.
 */
export function sanitize(value: string, maxLength: number): string {
  return value
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/[\r\n]{3,}/g, "\n\n")
    .trim()
    .slice(0, maxLength)
}

/** True when the honeypot field was filled — i.e. the submitter is a bot. */
export function isBot(honeypot: string, startedAt: number): boolean {
  if (honeypot.trim().length > 0) return true
  if (Date.now() - startedAt < MIN_FILL_MS) return true
  return false
}

/**
 * Simple client-side throttle so a single visitor can't hammer the endpoint.
 * Uses sessionStorage, so it is trivially bypassable — its job is to stop
 * accidental double-submits and casual abuse, not a determined attacker.
 */
export function rateLimit(key: string, minIntervalMs = 30_000): { ok: boolean; waitMs: number } {
  try {
    const last = Number(sessionStorage.getItem(`rl:${key}`) ?? 0)
    const elapsed = Date.now() - last
    if (last && elapsed < minIntervalMs) {
      return { ok: false, waitMs: minIntervalMs - elapsed }
    }
    sessionStorage.setItem(`rl:${key}`, String(Date.now()))
    return { ok: true, waitMs: 0 }
  } catch {
    // sessionStorage unavailable (private mode, blocked) — fail open.
    return { ok: true, waitMs: 0 }
  }
}

/** Props for a visually hidden honeypot input. */
export const honeypotProps = {
  type: "text" as const,
  tabIndex: -1,
  autoComplete: "off",
  "aria-hidden": true,
  style: {
    position: "absolute" as const,
    left: "-9999px",
    width: 1,
    height: 1,
    opacity: 0,
    pointerEvents: "none" as const,
  },
}
