import { notFound } from "next/navigation"
import { isOfferKey, isTerrainKey, type TerrainKey } from "@/lib/questionnaire-data"
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
  searchParams: Promise<{ name?: string; house?: string; email?: string; terrain?: string }>
}

export default async function QuestionnairePage({ params, searchParams }: PageProps) {
  const { lang, offer } = await params
  const { name, house, email, terrain } = await searchParams

  if (!isOfferKey(offer)) notFound()
  const resolvedLang = isLang(lang) ? lang : DEFAULT_LANG

  return (
    <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-ink px-gutter py-16 sm:py-20">
      {/* La lueur du site, reprise ici.
          Le questionnaire est le premier écran après un paiement de 2 900 € :
          un fond noir uni fait rupture avec tout ce que le client vient de
          parcourir. Deux halos fixes, sans animation — on remplit un
          document, rien ne doit bouger derrière le texte. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_45%_at_20%_0%,rgba(255,34,51,0.13),transparent_62%),radial-gradient(50%_40%_at_85%_100%,rgba(255,77,46,0.09),transparent_60%)]"
      />
      <div className="relative shell-sm">
        {/* `terrain` choisit les questions propres au terrain (lieux,
            artistes...). Absent, on sert le parcours commun : les liens
            envoyés avant cette évolution continuent donc de fonctionner. */}
        <QuestionnaireFlow
          offer={offer}
          lang={resolvedLang}
          terrain={isTerrainKey(terrain) ? terrain : undefined}
          prefill={{ name, house, email }}
        />
      </div>
    </main>
  )
}
