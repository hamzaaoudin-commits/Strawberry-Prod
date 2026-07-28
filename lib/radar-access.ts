/**
 * RADAR — accès par code.
 *
 * Un seul code, fixé par vous, communiqué à l'abonné sur son reçu Stripe. Il le
 * saisit une fois, le navigateur garde un cookie signé, et la barrière vérifie
 * la signature à chaque requête.
 *
 * Ce que le navigateur ne peut pas faire : fabriquer ce cookie. Le code n'est
 * jamais comparé côté client et n'apparaît jamais dans le bundle — c'est toute
 * la différence avec un déverrouillage par paramètre d'URL.
 *
 * Faiblesse assumée : un abonné peut transmettre son code. À quinze euros par
 * mois, changer le code suffit à révoquer tout le monde d'un coup. La version
 * vérifiée auprès de Stripe se branchera plus tard sans toucher au reste.
 */

const ENCODER = new TextEncoder()

function b64url(bytes: ArrayBuffer | Uint8Array): string {
  const arr = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes)
  let s = ""
  for (const b of arr) s += String.fromCharCode(b)
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

function fromB64url(s: string): Uint8Array {
  const p = s.replace(/-/g, "+").replace(/_/g, "/")
  const bin = atob(p + "=".repeat((4 - (p.length % 4)) % 4))
  const out = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i)
  return out
}

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey("raw", ENCODER.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, [
    "sign",
    "verify",
  ])
}

/**
 * Comparaison à durée constante.
 * Un `===` sur une chaîne s'arrête au premier caractère différent, ce qui laisse
 * mesurer le temps de réponse pour deviner le code lettre par lettre.
 */
export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return diff === 0
}

/** Normalise la saisie : espaces, casse et tirets ne doivent pas faire échouer. */
export function normalizeCode(input: string): string {
  return input.trim().toUpperCase().replace(/[\s\u2013\u2014_]+/g, "-")
}

type Claims = { exp: number }

/** Émet un accès. Trente jours — la durée d'un abonnement mensuel. */
export async function signAccess(secret: string, days = 30): Promise<string> {
  const claims: Claims = { exp: Math.floor(Date.now() / 1000) + days * 86400 }
  const payload = b64url(ENCODER.encode(JSON.stringify(claims)))
  const sig = await crypto.subtle.sign("HMAC", await hmacKey(secret), ENCODER.encode(payload))
  return `${payload}.${b64url(sig)}`
}

/** Vérifie la signature d'abord, l'expiration ensuite. Jamais l'inverse. */
export async function verifyAccess(token: string | undefined, secret: string): Promise<boolean> {
  if (!token || !secret) return false
  const [payload, sig] = token.split(".")
  if (!payload || !sig) return false

  try {
    const ok = await crypto.subtle.verify("HMAC", await hmacKey(secret), fromB64url(sig), ENCODER.encode(payload))
    if (!ok) return false
    const claims = JSON.parse(new TextDecoder().decode(fromB64url(payload))) as Claims
    return typeof claims?.exp === "number" && claims.exp > Math.floor(Date.now() / 1000)
  } catch {
    return false
  }
}

export const ACCESS_COOKIE = "sp_radar"

/** L'Atlas : même signature, même secret, un cookie distinct. */
export const ATLAS_COOKIE = "sp_atlas"

export const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: true,
  sameSite: "lax" as const,
  path: "/",
  maxAge: 30 * 86400,
}
