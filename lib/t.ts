import { DEFAULT_LANG, type Lang } from "@/lib/lang"

/**
 * Server-side counterpart to useT().
 *
 * Lets a page read its language from the route params and pick its copy without
 * becoming a client component — which keeps the copy itself out of the JS bundle.
 */
export function pick<T extends Partial<Record<Lang, unknown>>>(dict: T, lang: Lang): NonNullable<T["fr"]> {
  return (dict[lang] ?? dict[DEFAULT_LANG] ?? dict.en) as NonNullable<T["fr"]>
}
