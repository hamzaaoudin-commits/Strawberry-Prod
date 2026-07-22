import { NextResponse, type NextRequest } from "next/server"
import { signAccess, safeEqual, normalizeCode, ACCESS_COOKIE, COOKIE_OPTIONS } from "@/lib/radar-access"

/**
 * Vérifie le code d'accès et délivre le cookie.
 *
 * Le code vit dans une variable d'environnement serveur : il n'est jamais
 * envoyé au navigateur, jamais présent dans le bundle. La comparaison se fait
 * ici, à durée constante.
 */

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const CODE = process.env.RADAR_ACCESS_CODE ?? ""
const SECRET = process.env.RADAR_ACCESS_SECRET ?? ""

/** Limite les essais : deviner un code doit être lent et sans intérêt. */
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

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin")
  const host = req.headers.get("host")
  if (origin && host && !origin.endsWith(host)) {
    return NextResponse.json({ ok: false }, { status: 403 })
  }

  if (!CODE || !SECRET) {
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

  const given = normalizeCode(typeof body.code === "string" ? body.code.slice(0, 64) : "")
  if (!given || !safeEqual(given, normalizeCode(CODE))) {
    return NextResponse.json({ ok: false, error: "invalid_code" }, { status: 403 })
  }

  const res = NextResponse.json({ ok: true })
  res.cookies.set(ACCESS_COOKIE, await signAccess(SECRET), COOKIE_OPTIONS)
  return res
}

export async function GET() {
  return NextResponse.json({ ok: false }, { status: 405 })
}
