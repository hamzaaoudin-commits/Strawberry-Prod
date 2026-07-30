import { NavBar } from "@/components/strawberry/navbar"
import { HeroSection } from "@/components/strawberry/hero-section"
import { ProblemSection } from "@/components/strawberry/problem-section"
import { MechanismSection } from "@/components/strawberry/mechanism-section"
import { OffersSection } from "@/components/strawberry/offers-section"
import { SillageSection } from "@/components/strawberry/sillage-section"
import { BeforeAfterSection } from "@/components/strawberry/before-after-section"
import { AboutSection } from "@/components/strawberry/about-section"
import { BookSection } from "@/components/strawberry/book-section"
import { AtlasSection } from "@/components/strawberry/atlas-section"
import { FaqSection } from "@/components/strawberry/faq-section"
import { FAQ_AUDIT } from "@/lib/faqs"
import { CTABanner } from "@/components/strawberry/cta-banner"
import { ContactSection } from "@/components/strawberry/contact-section"
import { Footer } from "@/components/strawberry/footer"
import { isLang, type Lang } from "@/lib/lang"

/**
 * La page d'accueil.
 *
 * Elle ne vend plus qu'une chose : BRAND NARRATIVE ARCHITECTURE. L'échelle des
 * quatre offres a quitté la home pour /offres — poser 15€ à côté de 4 500€
 * obligeait le lecteur à arbitrer entre des objets sans rapport, et écrasait la
 * valeur perçue de la commande par ancrage sur le petit nombre.
 *
 * L'ordre des sections suit une démonstration, pas un catalogue :
 *
 *   hero        — la promesse, et un seul geste.
 *   problème    — ce qu'il vit, et ce que ça lui coûte par an.
 *   mécanisme   — pourquoi ce qu'il a déjà payé a aggravé les choses.
 *   offre       — la commande, son prix, sa garantie, sa rareté.
 *   SILLAGE     — la preuve, immédiatement après l'offre : une commande
 *                 complète publiée en entier, lisible avant d'acheter.
 *   avant/après — le déplacement, en une phrase.
 *   studio      — le fondateur, son visage, son récit d'origine.
 *   livre       — l'autorité.
 *   Atlas       — la ressource gratuite.
 *   FAQ         — les objections désamorcées avant qu'elles soient posées.
 *   CTA         — le même geste, une dernière fois.
 *
 * Les sections sans interaction se rendent côté serveur : elles n'entrent pas
 * dans le bundle du navigateur et n'ont rien à hydrater.
 */
export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "fr"

  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <ProblemSection lang={lang} />
      <MechanismSection lang={lang} />
      <OffersSection lang={lang} />
      <SillageSection lang={lang} />
      <BeforeAfterSection />
      <AboutSection lang={lang} />
      <BookSection lang={lang} />
      <AtlasSection />
      <FaqSection faqs={FAQ_AUDIT} />
      <CTABanner />
      <ContactSection />
      <Footer />
    </main>
  )
}
