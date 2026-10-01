import { NextResponse, type NextRequest } from "next/server"
import { LIMITS, isValidEmail, sanitize, isBot } from "@/lib/form-security"
import { stepsForOffer, isOfferKey, isTerrainKey, type OfferKey, type Question } from "@/lib/questionnaire-data"
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

/**
 * Le webhook Make (module « Custom Webhook »). Variable serveur uniquement :
 * l'URL n'apparaît jamais dans le navigateur, donc personne ne peut la
 * récupérer pour envoyer de fausses commandes dans votre scénario.
 */
const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL ?? ""

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

/**
 * Les balises envoyées à Make — l'équivalent des field_id de Tally.
 *
 * Une clé stable et lisible par question, toujours une chaîne de
 * caractères (ou un nombre pour les curseurs), à plat : Make les mappe
 * directement en `responses.conviction`, `responses.competitor_1_line`…
 * sans avoir à parcourir des tableaux imbriqués.
 *
 * Les questions qui existent en variante par terrain (`positioning_lieux`,
 * `competitors_produits`…) sont ramenées à une seule clé (`positioning`,
 * `competitor_N_*`) : le scénario Make n'a qu'un seul chemin à gérer, quel
 * que soit ce que le client vend.
 */
function buildResponses(steps: Question[], answers: Record<string, unknown>): Record<string, string | number> {
  const out: Record<string, string | number> = {}
  const canonical = (id: string) => id.replace(/_(produits|lieux|artistes)$/, "")

  for (const step of steps) {
    const key = canonical(step.id)
    if (step.type === "identity") continue // déjà dans `client`
    if (step.type === "textarea") {
      const main = sanitize(str(answers[step.id]), LIMITS.narrative)
      if (main) out[key] = main
      const deep = sanitize(str(answers[`${step.id}_deep`]), LIMITS.narrative)
      if (deep) out[`${key}_deep`] = deep
      continue
    }
    if (step.type === "shorttext") {
      const v = sanitize(str(answers[step.id]), LIMITS.short)
      if (v) out[key] = v
      continue
    }
    if (step.type === "choice") {
      const v = answers[step.id]
      const value = step.multi
        ? Array.isArray(v) ? v.map((x) => sanitize(str(x), 60)).join(" | ") : ""
        : sanitize(str(v), 120)
      if (value) out[key] = value
      continue
    }
    if (step.type === "competitors") {
      const rows = Array.isArray(answers.competitors) ? (answers.competitors as Record<string, unknown>[]) : []
      rows.forEach((r, i) => {
        const name = sanitize(str(r.name), LIMITS.short)
        const line = sanitize(str(r.line), LIMITS.short)
        if (name || line) {
          out[`competitor_${i + 1}_name`] = name
          out[`competitor_${i + 1}_line`] = line
        }
      })
      continue
    }
    if (step.type === "links") {
      const l = (answers.links ?? {}) as Record<string, unknown>
      const site = sanitize(str(l.site), LIMITS.short)
      const linkedin = sanitize(str(l.linkedin), LIMITS.short)
      const content = sanitize(str(l.content), LIMITS.short)
      if (site) out.link_site = site
      if (linkedin) out.link_linkedin = linkedin
      if (content) out.link_content = content
      continue
    }
    if (step.type === "sliders") {
      const tone = (answers.tone ?? {}) as Record<string, unknown>
      for (const ax of step.axes ?? []) out[`tone_${ax.id}`] = num(tone[ax.id]) || 50
      continue
    }
    if (step.type === "wordbank") {
      const wb = (answers.wordbank ?? {}) as Record<string, unknown>
      const mine = Array.isArray(wb.mine) ? wb.mine.map((w) => sanitize(str(w), 40)).join(" | ") : ""
      const notmine = Array.isArray(wb.notmine) ? wb.notmine.map((w) => sanitize(str(w), 40)).join(" | ") : ""
      if (mine) out.words_mine = mine
      if (notmine) out.words_never = notmine
    }
  }
  return out
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

  // Le terrain choisi par le client sur l'écran d'accueil. Il part dans
  // l'objet du message : c'est la première chose à savoir en ouvrant une
  // réponse, avant même de lire les réponses.
  const terrainRaw = str(body.terrain)
  const TERRAIN_LABEL: Record<string, string> = {
    marques: "Marques",
    produits: "Produits",
    lieux: "Lieux",
    artistes: "Noms propres",
  }
  const terrainLabel = TERRAIN_LABEL[terrainRaw] ?? "Terrain non précisé"

  const answers = (body.answers ?? {}) as Record<string, unknown>
  const identity = (answers.identity ?? {}) as Record<string, unknown>
  const name = sanitize(str(identity.name), LIMITS.name)
  const house = sanitize(str(identity.house), LIMITS.name)
  const email = sanitize(str(identity.email), LIMITS.email)

  if (!name || !house || !isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 422 })
  }

  if (!FORMSPREE_ID && !MAKE_WEBHOOK_URL) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 })
  }

  // Labels are always rendered in FR so every submission lands in the studio's
  // inbox in one consistent language; the client's own words stay exactly as
  // they typed them. The locale they used is recorded separately below.
  // Le terrain filtre les questions déclinées : sans lui, l'e-mail listait
  // les quatre variantes du positionnement et des concurrents, dont trois
  // toujours vides.
  const steps = stepsForOffer(offer, DEFAULT_LANG, isTerrainKey(terrainRaw) ? terrainRaw : undefined)
  const formatted = steps.map((step) => formatAnswer(step, answers)).join("\n\n")

  // L'identifiant du dossier : les trois premières lettres de la maison,
  // puis un horodatage court. Il sert de clé commune entre Make, l'e-mail
  // et vos échanges avec le client.
  const prefix = house.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 3).padEnd(3, "X")
  const submissionId = `${prefix}-${Date.now().toString(36).toUpperCase()}`

  const send = async (url: string, payload: unknown) => {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15_000)
    try {
      const r = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: controller.signal,
        body: JSON.stringify(payload),
      })
      return r.ok
    } catch {
      return false
    } finally {
      clearTimeout(timeout)
    }
  }

  // Make lance la production ; Formspree vous garde une copie lisible par
  // e-mail. Les deux partent en même temps : si l'un tombe, l'autre suffit
  // pour que rien ne soit perdu.
  const [makeOk, mailOk] = await Promise.all([
    MAKE_WEBHOOK_URL
      ? send(MAKE_WEBHOOK_URL, {
          event: "onboarding_completed",
          submission_id: submissionId,
          submitted_at: new Date().toISOString(),
          offer,
          terrain: terrainRaw || "non_precise",
          terrain_label: terrainLabel,
          lang,
          client: { name, house, email },
          responses: buildResponses(steps, answers),
          // Tout le questionnaire en un seul bloc lisible, avec les
          // intitulés des questions : c'est la variable à injecter telle
          // quelle dans les prompts du scénario (l'ancien Context_Global).
          answers_text: formatted,
        })
      : Promise.resolve(false),
    FORMSPREE_ID
      ? send(`https://formspree.io/f/${FORMSPREE_ID}`, {
          name,
          email,
          house,
          offer,
          lang,
          submission_id: submissionId,
          answers: formatted,
          _subject: `${terrainLabel} · L'Architecture Narrative — ${house} (${name}) · ${submissionId}`,
        })
      : Promise.resolve(false),
  ])

  if (!makeOk && !mailOk) {
    return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 })
  }
  return NextResponse.json({ ok: true, submission_id: submissionId })
}

export async function GET() {
  return NextResponse.json({ ok: false }, { status: 405 })
}
