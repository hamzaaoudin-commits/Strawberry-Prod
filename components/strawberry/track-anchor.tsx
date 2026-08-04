"use client"

import type { ComponentProps } from "react"
import { track } from "@vercel/analytics"

type Props = ComponentProps<"a"> & {
  event: string
  data?: Record<string, string | number | boolean>
}

/** Same idea as TrackLink, for plain <a> tags (external URLs, Stripe links, mailto). */
export function TrackAnchor({ event, data, onClick, ...rest }: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        track(event, data)
        onClick?.(e)
      }}
    />
  )
}
