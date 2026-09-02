import { notFound } from "next/navigation"
import { isOfferKey } from "@/lib/questionnaire-data"
import { isLang, DEFAULT_LANG } from "@/lib/lang"
import { QuestionnaireFlow } from "@/components/strawberry/questionnaire/questionnaire-flow"

/**
 * /[lang]/questionnaire/[offer]
 *
 * Replaces the Tally embed. Sent to a client right after purchase, with
 * their name/house/email prefilled in the URL so the interview opens with
 * zero typing on the purely factual part:
 *
 *   /fr/questionnaire/architecture?name=Camille+Auber&house=Maison+LOAM&email=camille@loam.studio
 *   /en/questionnaire/architecture?name=...
 *
 * `offer` selects which question set renders and `lang` selects which copy
 * (see lib/questionnaire-data.ts); anything other than "audit"/"architecture"
 * 404s rather than guessing. An unrecognised lang falls back to FR, matching
 * pick() elsewhere, rather than 404-ing a paying client out of their own
 * onboarding.
 */

interface PageProps {
  params: Promise<{ lang: string; offer: string }>
  searchParams: Promise<{ name?: string; house?: string; email?: string }>
}

export default async function QuestionnairePage({ params, searchParams }: PageProps) {
  const { lang, offer } = await params
  const { name, house, email } = await searchParams

  if (!isOfferKey(offer)) notFound()
  const resolvedLang = isLang(lang) ? lang : DEFAULT_LANG

  return (
    <main className="min-h-screen bg-ink px-gutter py-20">
      <div className="shell-sm">
        <QuestionnaireFlow offer={offer} lang={resolvedLang} prefill={{ name, house, email }} />
      </div>
    </main>
  )
}
