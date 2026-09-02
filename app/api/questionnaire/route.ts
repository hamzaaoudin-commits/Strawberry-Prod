import { NextResponse, type NextRequest } from "next/server"
import { LIMITS, isValidEmail, sanitize, isBot } from "@/lib/form-security"
import { stepsForOffer, isOfferKey, type OfferKey, type Question } from "@/lib/questionnaire-data"
import { DEFAULT_LANG, isLang } from "@/lib/lang"

/**
 * Server-side submission endpoint for the onboarding questionnaire.
 * Same shape as /api/contact: the Formspree destination stays server-only,
 * and every field is re-validated here — the client-side checks in
 * questionnaire-flow.tsx are a usability layer, not the trust boundary.
 */

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const FORMSPREE_ID =
  process.env.FORMSPREE_QUESTIONNAIRE_ID ?? process.env.FORMSPREE_ID ?? process.env.NEXT_PUBLIC_FORMSPREE_ID ?? ""

const MAX_PER_WINDOW = 2
const WINDOW_MS = 10 * 60 * 1000
const hits = new Map<string, number[]>()

function tooMany(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > MAX_PER_WINDOW
}

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for")
  return (fwd ? fwd.split(",")[0] : req.headers.get("x-real-ip")) ?? "unknown"
}

const str = (v: unknown) => (typeof v === "string" ? v : "")
const num = (v: unknown) => (typeof v === "number" ? v : 0)

/** Renders one answer for the plain-text email body, in question order. */
function formatAnswer(step: Question, answers: Record<string, unknown>): string {
  const label = step.label

  if (step.type === "identity") {
    const identity = (answers.identity ?? {}) as Record<string, unknown>
    return `${label}\n${sanitize(str(identity.name), LIMITS.name)} — ${sanitize(str(identity.house), LIMITS.name)}`
  }
  if (step.type === "shorttext") {
    return `${label}\n${sanitize(str(answers[step.id]), LIMITS.short)}`
  }
  if (step.type === "textarea") {
    const main = sanitize(str(answers[step.id]), LIMITS.narrative)
    const deep = sanitize(str(answers[`${step.id}_deep`]), LIMITS.narrative)
    return `${label}\n${main || "—"}${deep ? `\n\n(Plus loin) ${deep}` : ""}`
  }
  if (step.type === "competitors") {
    const rows = Array.isArray(answers.competitors) ? (answers.competitors as Record<string, unknown>[]) : []
    const lines = rows
      .map((r) => `${sanitize(str(r.name), LIMITS.short)} : "${sanitize(str(r.line), LIMITS.short)}"`)
      .filter((l) => l.trim() !== ' : ""')
    return `${label}\n${lines.join("\n") || "—"}`
  }
  if (step.type === "links") {
    const l = (answers.links ?? {}) as Record<string, unknown>
    return `${label}\nSite : ${sanitize(str(l.site), LIMITS.short) || "—"}\nLinkedIn : ${sanitize(str(l.linkedin), LIMITS.short) || "—"}\nContenu : ${sanitize(str(l.content), LIMITS.short) || "—"}`
  }
  if (step.type === "choice") {
    const v = answers[step.id]
    const value = step.multi ? (Array.isArray(v) ? v.map((x) => sanitize(str(x), 60)).join(", ") : "") : sanitize(str(v), 120)
    return `${label}\n${value || "—"}`
  }
  if (step.type === "sliders") {
    const tone = (answers.tone ?? {}) as Record<string, unknown>
    const lines = (step.axes ?? []).map((ax) => `${ax.l}/${ax.r} : ${num(tone[ax.id]) || 50}`)
    return `${label}\n${lines.join("\n")}`
  }
  if (step.type === "wordbank") {
    const wb = (answers.wordbank ?? {}) as Record<string, unknown>
    const mine = Array.isArray(wb.mine) ? wb.mine.map((w) => sanitize(str(w), 40)).join(", ") : ""
    const notmine = Array.isArray(wb.notmine) ? wb.notmine.map((w) => sanitize(str(w), 40)).join(", ") : ""
    return `${label}\nMes mots : ${mine || "—"}\nJamais : ${notmine || "—"}`
  }
  return `${label}\n—`
}

export async function POST(req: NextRequest) {
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

  // Honeypot + timing: accept silently so bots learn nothing.
  const startedAt = typeof body.startedAt === "number" ? body.startedAt : 0
  if (isBot(str(body.company_website), startedAt)) {
    return NextResponse.json({ ok: true })
  }

  const langRaw = str(body.lang)
  const lang = isLang(langRaw) ? langRaw : DEFAULT_LANG

  const offerRaw = str(body.offer)
  if (!isOfferKey(offerRaw)) {
    return NextResponse.json({ ok: false, error: "invalid_offer" }, { status: 422 })
  }
  const offer = offerRaw as OfferKey

  const answers = (body.answers ?? {}) as Record<string, unknown>
  const identity = (answers.identity ?? {}) as Record<string, unknown>
  const name = sanitize(str(identity.name), LIMITS.name)
  const house = sanitize(str(identity.house), LIMITS.name)
  const email = sanitize(str(identity.email), LIMITS.email)

  if (!name || !house || !isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 422 })
  }

  if (!FORMSPREE_ID) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 })
  }

  // Labels are always rendered in FR so every submission lands in the studio's
  // inbox in one consistent language; the client's own words stay exactly as
  // they typed them. The locale they used is recorded separately below.
  const steps = stepsForOffer(offer, DEFAULT_LANG)
  const formatted = steps.map((step) => formatAnswer(step, answers)).join("\n\n")

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
        house,
        offer,
        lang,
        answers: formatted,
        _subject: `Questionnaire ${offer === "architecture" ? "Architecture" : "Audit"} — ${house} (${name})`,
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

export async function GET() {
  return NextResponse.json({ ok: false }, { status: 405 })
}
