import { NavBar } from "@/components/strawberry/navbar"
import { HeroSection } from "@/components/strawberry/hero-section"
import { ProblemSection } from "@/components/strawberry/problem-section"
import { DiagnosisSection } from "@/components/strawberry/diagnosis-section"
import { OffersSection } from "@/components/strawberry/offers-section"
import { SillageSection } from "@/components/strawberry/sillage-section"
import { BookSection } from "@/components/strawberry/book-section"
import { ProofSection } from "@/components/strawberry/proof-section"
import { AboutSection } from "@/components/strawberry/about-section"
import { BeforeAfterSection } from "@/components/strawberry/before-after-section"
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
 * quatre offres est partie sur /offres, où elle ne met plus RADAR à 15€ sur le
 * même plan visuel que la commande à 4 500€.
 *
 * L'ordre suit la décision d'achat plutôt que le catalogue : le problème, le
 * diagnostic qui montre pourquoi les remèdes habituels aggravent, l'offre,
 * puis les preuves — dans l'ordre de leur force. SILLAGE arrive juste après
 * l'offre parce que c'est la plus grosse : un document complet, publié, que
 * n'importe qui peut lire avant de payer.
 *
 * Les sections sans interaction se rendent côté serveur et n'entrent pas dans
 * le bundle du navigateur.
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
      <DiagnosisSection lang={lang} />
      <OffersSection lang={lang} />
      <SillageSection lang={lang} />
      <BookSection lang={lang} />
      <ProofSection lang={lang} />
      <BeforeAfterSection />
      <AboutSection lang={lang} />
      <AtlasSection />
      <FaqSection faqs={FAQ_AUDIT} />
      <CTABanner />
      <ContactSection />
      <Footer />
    </main>
  )
}
