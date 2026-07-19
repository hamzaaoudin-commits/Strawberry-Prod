import { NextResponse, type NextRequest } from "next/server"
import { LANGS, DEFAULT_LANG } from "@/lib/lang"

const PUBLIC_FILE = /\.(.*)$/

/**
 * Sends every un-prefixed URL to a language.
 *
 * Preference order: the visitor's Accept-Language header, then French. This is
 * what turns the old flat URLs into locale URLs without losing anyone, and what
 * lets "/" exist at all now that every page lives under /fr, /en or /es.
 */
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  const hasLocale = LANGS.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))
  if (hasLocale) return NextResponse.next()

  const header = request.headers.get("accept-language") ?? ""
  const preferred =
    LANGS.find((l) => header.toLowerCase().startsWith(l)) ??
    LANGS.find((l) => header.toLowerCase().includes(`${l}-`)) ??
    DEFAULT_LANG

  const url = request.nextUrl.clone()
  url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`
  return NextResponse.redirect(url, 308)
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}
