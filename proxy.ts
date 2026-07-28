import { NextResponse, type NextRequest } from "next/server"
import { LANGS, DEFAULT_LANG } from "@/lib/lang"
import { verifyAccess, ACCESS_COOKIE, ATLAS_COOKIE } from "@/lib/radar-access"

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

  /**
   * L'Atlas. Le PDF vivait à la racine de /public : le formulaire email était
   * décoratif, puisqu'il suffisait de connaître l'URL. Il est maintenant dans
   * /atlas, hors de la sortie anticipée sur les fichiers, et remis seulement à
   * une requête portant le cookie signé posé par /api/contact.
   *
   * Mode dégradé : sans RADAR_ACCESS_SECRET, aucun cookie n'est signable — on
   * laisse alors passer, pour qu'une variable oubliée casse la barrière plutôt
   * que l'aimant à emails.
   */
  if (pathname.startsWith("/atlas/")) {
    const secret = process.env.RADAR_ACCESS_SECRET ?? ""
    if (!secret) return NextResponse.next()
    const granted = await verifyAccess(request.cookies.get(ATLAS_COOKIE)?.value, secret)
    if (!granted) {
      const url = request.nextUrl.clone()
      url.pathname = "/fr"
      url.hash = "atlas"
      return NextResponse.redirect(url)
    }
    return NextResponse.next()
  }

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
    // Espace client MOMENTUM : /[langue]/momentum/atelier/<maison>
    if (segments[1] === "momentum" && segments[2] === "atelier" && segments[3]) {
      const slug = segments[3]
      const granted = await verifyAccess(
        request.cookies.get(`sp_momentum_${slug}`)?.value,
        process.env.RADAR_ACCESS_SECRET ?? ""
      )
      if (!granted) {
        const url = request.nextUrl.clone()
        url.pathname = `/${lang}/momentum/atelier`
        url.searchParams.set("m", slug)
        return NextResponse.redirect(url)
      }
      return NextResponse.next()
    }

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
  // Deuxième entrée : /atlas porte une extension de fichier, que le premier
  // motif exclut volontairement. Sans elle, le PDF ne passerait jamais ici.
  matcher: ["/((?!_next|api|.*\\..*).*)", "/atlas/:path*"],
}
