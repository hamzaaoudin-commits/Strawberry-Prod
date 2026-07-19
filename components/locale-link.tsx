"use client"

import NextLink from "next/link"
import type { ComponentProps } from "react"
import { useLang } from "@/lib/i18n"
import { localePath } from "@/lib/routing"

type Props = Omit<ComponentProps<typeof NextLink>, "href"> & { href?: string }

/**
 * Drop-in replacement for next/link that prefixes app-relative paths with the
 * active locale. External links, mail/tel and pure anchors pass through untouched.
 *
 * Using this instead of rewriting every href means adding a language never
 * requires touching a single page again.
 */
export function LocaleLink({ href = "/", ...rest }: Props) {
  const { lang } = useLang()

  const isExternal =
    /^https?:\/\//i.test(href) || href.startsWith("mailto:") || href.startsWith("tel:")
  const isBareAnchor = href.startsWith("#")

  let finalHref = href
  if (!isExternal && !isBareAnchor) {
    // "/#contact" and "/audit" both need the locale segment.
    const [path, hash] = href.split("#")
    finalHref = localePath(path || "/", lang) + (hash ? `#${hash}` : "")
  }

  return <NextLink href={finalHref} {...rest} />
}
