import { notFound } from "next/navigation"
import { isOfferKey } from "@/lib/questionnaire-data"
import { QuestionnaireFlow } from "@/components/strawberry/questionnaire/questionnaire-flow"

/**
 * /[lang]/questionnaire/[offer]
 *
 * Replaces the Tally embed. Sent to a client right after purchase, with
 * their name/house/email prefilled in the URL so the interview opens with
 * zero typing on the purely factual part:
 *
 *   /fr/questionnaire/architecture?name=Camille+Auber&house=Maison+LOAM&email=camille@loam.studio
 *
 * `offer` selects which question set renders (see lib/questionnaire-data.ts);
 * anything other than "audit" or "architecture" 404s rather than guessing.
 */

interface PageProps {
  params: Promise<{ lang: string; offer: string }>
  searchParams: Promise<{ name?: string; house?: string; email?: string }>
}

export default async function QuestionnairePage({ params, searchParams }: PageProps) {
  const { offer } = await params
  const { name, house, email } = await searchParams

  if (!isOfferKey(offer)) notFound()

  return (
    <main className="min-h-screen bg-ink px-gutter py-20">
      <div className="shell-sm">
        <QuestionnaireFlow offer={offer} prefill={{ name, house, email }} />
      </div>
    </main>
  )
}
