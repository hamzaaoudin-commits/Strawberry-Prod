import { NextResponse, type NextRequest } from "next/server"
import { signAccess, safeEqual, normalizeCode, COOKIE_OPTIONS } from "@/lib/radar-access"
import { getClientSpace, codeEnvName } from "@/lib/momentum-clients"

/**
 * Vérifie le code d'une cliente MOMENTUM et délivre son cookie.
 *
 * Même mécanique que RADAR — un code, une comparaison serveur à durée
 * constante, un cookie signé — mais un cookie par maison : le code de l'une
 * n'ouvre pas l'espace de l'autre.
 */

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const SECRET = process.env.RADAR_ACCESS_SECRET ?? ""

const MAX_TRIES = 8
const WINDOW_MS = 15 * 60 * 1000
const tries = new Map<string, number[]>()

function tooMany(ip: string): boolean {
  const now = Date.now()
  const recent = (tries.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  tries.set(ip, recent)
  if (tries.size > 5000) tries.clear()
  return recent.length > MAX_TRIES
}

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for")
  return (fwd ? fwd.split(",")[0] : req.headers.get("x-real-ip")) ?? "unknown"
}

export function momentumCookie(slug: string): string {
  return `sp_momentum_${slug}`
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin")
  const host = req.headers.get("host")
  if (origin && host && !origin.endsWith(host)) {
    return NextResponse.json({ ok: false }, { status: 403 })
  }
  if (!SECRET) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 })
  }
  if (tooMany(clientIp(req))) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 })
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 })
  }

  const slug = typeof body.slug === "string" ? body.slug.slice(0, 64) : ""
  const given = normalizeCode(typeof body.code === "string" ? body.code.slice(0, 64) : "")

  const space = getClientSpace(slug)
  const expected = process.env[codeEnvName(slug)] ?? ""

  // Réponse identique que la maison soit inconnue, sans code défini, ou le code faux.
  if (!space || !expected || !given || !safeEqual(given, normalizeCode(expected))) {
    return NextResponse.json({ ok: false, error: "invalid_code" }, { status: 403 })
  }

  const res = NextResponse.json({ ok: true })
  res.cookies.set(momentumCookie(slug), await signAccess(SECRET), COOKIE_OPTIONS)
  return res
}

export async function GET() {
  return NextResponse.json({ ok: false }, { status: 405 })
}
