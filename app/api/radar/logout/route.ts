import { NextResponse } from "next/server"
import { ACCESS_COOKIE } from "@/lib/radar-access"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

/** Efface l'accès sur cet appareil. */
export async function POST() {
  const res = NextResponse.json({ ok: true })
  res.cookies.set(ACCESS_COOKIE, "", { httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: 0 })
  return res
}
