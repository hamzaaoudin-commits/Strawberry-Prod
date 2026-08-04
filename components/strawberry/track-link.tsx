"use client"

import type { ComponentProps } from "react"
import { LocaleLink as Link } from "@/components/locale-link"
import { track } from "@vercel/analytics"

type Props = ComponentProps<typeof Link> & {
  event: string
  data?: Record<string, string | number | boolean>
}

/**
 * Un lien qui mesure son propre clic.
 *
 * La plupart des CTA du site n'émettaient rien : un seul événement
 * (audit_click) existait sur l'ensemble des pages. Ce composant évite de
 * transformer chaque section serveur en composant client rien que pour un
 * onClick — c'est une feuille cliente qu'on peut poser n'importe où.
 */
export function TrackLink({ event, data, onClick, ...rest }: Props) {
  return (
    <Link
      {...rest}
      onClick={(e) => {
        track(event, data)
        onClick?.(e)
      }}
    />
  )
}
