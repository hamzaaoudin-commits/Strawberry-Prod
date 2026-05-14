import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(req: Request) {
  let body: { email?: string; firstName?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const email = (body.email || "").trim().toLowerCase()
  const firstName = (body.firstName || "").trim()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email." }, { status: 400 })
  }

  const apiKey = process.env.BREVO_API_KEY
  const listIdRaw = process.env.BREVO_MANIFESTO_LIST

  if (!apiKey || !listIdRaw) {
    console.error("[manifesto-subscribe] Missing env vars")
    return NextResponse.json({ error: "Service temporarily unavailable." }, { status: 500 })
  }

  const listId = Number(listIdRaw)
  if (!Number.isFinite(listId) || listId <= 0) {
    return NextResponse.json({ error: "Configuration error." }, { status: 500 })
  }

  try {
    const brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
        attributes: firstName ? { FIRSTNAME: firstName } : undefined,
      }),
    })

    if (brevoRes.ok || brevoRes.status === 204) {
      return NextResponse.json({ success: true })
    }

    let brevoMessage = "Subscription failed."
    try {
      const data = await brevoRes.json()
      if (typeof data?.message === "string") brevoMessage = data.message
    } catch {}

    if (brevoRes.status === 400 && /duplicate/i.test(brevoMessage)) {
      return NextResponse.json({ success: true, alreadySubscribed: true })
    }

    console.error("[manifesto-subscribe] Brevo error:", brevoRes.status, brevoMessage)
    return NextResponse.json({ error: brevoMessage }, { status: 502 })
  } catch (err) {
    console.error("[manifesto-subscribe] Network error:", err)
    return NextResponse.json({ error: "Could not reach service." }, { status: 502 })
  }
}
