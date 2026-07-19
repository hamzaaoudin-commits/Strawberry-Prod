import { NextResponse, type NextRequest } from "next/server"
import { LIMITS, isValidEmail, sanitize } from "@/lib/form-security"

/**
 * Server-side submission endpoint.
 *
 * Why this exists: the Formspree form ID used to be inlined into the client
 * bundle, where anyone could read it and post to it directly — bypassing every
 * check and flooding the studio's inbox. Routing submissions through the server
 * keeps the destination secret and lets us validate and throttle before
 * anything leaves the origin.
 *
 * The browser now only ever talks to /api/contact on our own domain.
 */

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

/** Server-only. Never prefixed NEXT_PUBLIC_, so it is not shipped to the browser. */
const FORMSPREE_ID = process.env.FORMSPREE_ID ?? process.env.NEXT_PUBLIC_FORMSPREE_ID ?? ""

/** Requests allowed per IP per window. */
const MAX_PER_WINDOW = 3
const WINDOW_MS = 10 * 60 * 1000

/**
 * In-memory throttle. On serverless this is per-instance, so it is a speed bump
 * rather than a guarantee — it stops casual flooding and accidental double
 * submits. Durable protection belongs in Formspree's own abuse settings.
 */
const hits = new Map<string, number[]>()

function tooMany(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear() // crude bound; this map must never grow unbounded
  return recent.length > MAX_PER_WINDOW
}

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for")
  return (fwd ? fwd.split(",")[0] : req.headers.get("x-real-ip")) ?? "unknown"
}

export async function POST(req: NextRequest) {
  // Only accept submissions that originated from our own pages.
  const origin = req.headers.get("origin")
  const host = req.headers.get("host")
  if (origin && host && !origin.endsWith(host)) {
    return NextResponse.json({ ok: false }, { status: 403 })
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

  const str = (v: unknown) => (typeof v === "string" ? v : "")

  // Honeypot: a field no human ever sees. Accept silently so bots learn nothing.
  if (str(body.company_website).trim().length > 0) {
    return NextResponse.json({ ok: true })
  }

  const name = sanitize(str(body.name), LIMITS.name)
  const email = sanitize(str(body.email), LIMITS.email)
  const goal = sanitize(str(body.goal), LIMITS.goal)
  const message = sanitize(str(body.message), LIMITS.message)
  const source = sanitize(str(body.source), 60)

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 })
  }
  // The atlas capture sends an email only; the contact form sends name + message.
  const isCapture = source.length > 0 && !name && !message
  if (!isCapture && (!name || !message)) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 422 })
  }

  if (!FORMSPREE_ID) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 })
  }

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15_000)

    const upstream = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        name,
        email,
        goal,
        message,
        source,
        _subject: isCapture
          ? `Atlas capture — ${source}`
          : `New contact from ${name} — ${goal || "no goal selected"}`,
      }),
    })
    clearTimeout(timeout)

    if (!upstream.ok) {
      return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: "network" }, { status: 502 })
  }
}

/** Anything other than POST is not a mistake worth explaining. */
export async function GET() {
  return NextResponse.json({ ok: false }, { status: 405 })
}
