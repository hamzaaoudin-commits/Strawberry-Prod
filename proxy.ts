import { NextResponse, type NextRequest } from "next/server"
import { LANGS, DEFAULT_LANG } from "@/lib/lang"
import { verifyAccess, ACCESS_COOKIE } from "@/lib/radar-access"

const PUBLIC_FILE = /\.(.*)$/

/**
 * Sends every un-prefixed URL to a language.
 *
 * Preference order: the visitor's Accept-Language header, then French. This is
 * what turns the old flat URLs into locale URLs without losing anyone, and what
 * lets "/" exist at all now that every page lives under /fr, /en or /es.
 */
export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  const hasLocale = LANGS.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))

  if (hasLocale) {
    // RADAR library gate. Checked here, before any page renders, so a protected
    // read never reaches the network without a valid signature.
    const segments = pathname.split("/").filter(Boolean)
    const lang = segments[0]
    if (segments[1] === "radar" && segments[2] === "lecture") {
      const granted = await verifyAccess(
        request.cookies.get(ACCESS_COOKIE)?.value,
        process.env.RADAR_ACCESS_SECRET ?? ""
      )
      if (!granted) {
        const url = request.nextUrl.clone()
        url.pathname = `/${lang}/radar/acces`
        url.searchParams.set("from", pathname)
        return NextResponse.redirect(url)
      }
    }
    return NextResponse.next()
  }

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
