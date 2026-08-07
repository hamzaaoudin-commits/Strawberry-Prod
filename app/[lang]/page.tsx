import { NavBar } from "@/components/strawberry/navbar"
import { HeroSection } from "@/components/strawberry/hero-section"
import { TrustStrip } from "@/components/strawberry/trust-strip"
import { ReadMarquee } from "@/components/strawberry/read-marquee"
import { ProblemSection } from "@/components/strawberry/problem-section"
import { DiagnosisSection } from "@/components/strawberry/diagnosis-section"
import { SectionDivider } from "@/components/strawberry/section-divider"
import { ImpactStats } from "@/components/strawberry/impact-stats"
import { MechanismStrip } from "@/components/strawberry/mechanism-strip"
import { OffersSection } from "@/components/strawberry/offers-section"
import { FaqSection } from "@/components/strawberry/faq-section"
import { FAQ_AUDIT } from "@/lib/faqs"
import { CTABanner } from "@/components/strawberry/cta-banner"
import { BookSection } from "@/components/strawberry/book-section"
import { AtlasSection } from "@/components/strawberry/atlas-section"
import { ContactSection } from "@/components/strawberry/contact-section"
import { Footer } from "@/components/strawberry/footer"
import { isLang, type Lang } from "@/lib/lang"

/**
 * La page d'accueil.
 *
 * Une page, une offre, une action. Le parcours suit la décision d'achat :
 * problème, diagnostic, deux statistiques réelles, mécanisme propriétaire,
 * offre, le livre, l'Atlas (en notification, pas en section), le bandeau
 * final, puis les objections et le formulaire.
 *
 * Le document SILLAGE n'est plus ici : il a déménagé sur la page
 * /brand-narrative-architecture, avec le curseur avant/après qui l'accompagne
 * — un document complet en plus du reste, c'était trop à lire pour quelqu'un
 * qui découvre à peine l'offre sur la home. La section « Les preuves » est
 * partie aussi, elle n'ajoutait rien après SILLAGE.
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
      <TrustStrip lang={lang} />
      <ReadMarquee />
      <ProblemSection lang={lang} />
      <DiagnosisSection lang={lang} />
      <SectionDivider lang={lang} />
      <ImpactStats lang={lang} />
      <MechanismStrip lang={lang} />
      <OffersSection lang={lang} />
      <BookSection lang={lang} />
      <AtlasSection />
      <CTABanner />
      <FaqSection faqs={FAQ_AUDIT} />
      <ContactSection />
      <Footer />
    </main>
  )
}
