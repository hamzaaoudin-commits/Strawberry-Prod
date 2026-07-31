import { NavBar } from "@/components/strawberry/navbar"
import { HeroSection } from "@/components/strawberry/hero-section"
import { ReadMarquee } from "@/components/strawberry/read-marquee"
import { ProblemSection } from "@/components/strawberry/problem-section"
import { DiagnosisSection } from "@/components/strawberry/diagnosis-section"
import { MechanismStrip } from "@/components/strawberry/mechanism-strip"
import { OffersSection } from "@/components/strawberry/offers-section"
import { HousesStrip } from "@/components/strawberry/houses-strip"
import { SillageSection } from "@/components/strawberry/sillage-section"
import { ProofSection } from "@/components/strawberry/proof-section"
import { BeforeAfterSection } from "@/components/strawberry/before-after-section"
import { AboutSection } from "@/components/strawberry/about-section"
import { FaqSection } from "@/components/strawberry/faq-section"
import { FAQ_AUDIT } from "@/lib/faqs"
import { CTABanner } from "@/components/strawberry/cta-banner"
import { ContactSection } from "@/components/strawberry/contact-section"
import { BookSection } from "@/components/strawberry/book-section"
import { AtlasSection } from "@/components/strawberry/atlas-section"
import { Footer } from "@/components/strawberry/footer"
import { isLang, type Lang } from "@/lib/lang"

/**
 * La page d'accueil.
 *
 * Une page, une offre, une action. Le parcours suit la décision d'achat :
 * problème, agitation, diagnostic qui invalide les remèdes déjà essayés,
 * mécanisme, offre, appartenance, preuves, objections, formulaire.
 *
 * Le livre et l'Atlas passent SOUS le formulaire. Ils capturent des emails ;
 * placés au milieu, ils transformaient un acheteur à 4 500€ en abonné à une
 * liste, au moment exact où il fallait un oui.
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
      <ReadMarquee lang={lang} />
      <ProblemSection lang={lang} />
      <DiagnosisSection lang={lang} />
      <MechanismStrip lang={lang} />
      <OffersSection lang={lang} />
      <HousesStrip lang={lang} />
      <SillageSection lang={lang} />
      <ProofSection lang={lang} />
      <BeforeAfterSection />
      <AboutSection lang={lang} />
      <FaqSection faqs={FAQ_AUDIT} />
      <CTABanner />
      <ContactSection />

      {/* Sous la ligne de flottaison de la décision : ce qui capture un email
          plutôt que ce qui déclenche une commande. */}
      <BookSection lang={lang} />
      <AtlasSection />
      <Footer />
    </main>
  )
}
