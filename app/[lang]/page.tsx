import { NavBar } from "@/components/strawberry/navbar"
import { HeroSection } from "@/components/strawberry/hero-section"
import { ReadMarquee } from "@/components/strawberry/read-marquee"
import { ProblemSection } from "@/components/strawberry/problem-section"
import { DiagnosisSection } from "@/components/strawberry/diagnosis-section"
import { SectionDivider } from "@/components/strawberry/section-divider"
import { ImpactStats } from "@/components/strawberry/impact-stats"
import { MechanismStrip } from "@/components/strawberry/mechanism-strip"
import { TrustStrip } from "@/components/strawberry/trust-strip"
import { OffersSection } from "@/components/strawberry/offers-section"
import { FaqSection } from "@/components/strawberry/faq-section"
import { FAQ_AUDIT } from "@/lib/faqs"
import { CTABanner } from "@/components/strawberry/cta-banner"
import { BookSection } from "@/components/strawberry/book-section"
import { ContactSection } from "@/components/strawberry/contact-section"
import { Footer } from "@/components/strawberry/footer"
import { isLang, type Lang } from "@/lib/lang"

/**
 * La page d'accueil.
 *
 * Une page, une offre, une action. Le parcours suit la décision d'achat :
 * problème, diagnostic, deux statistiques réelles, mécanisme propriétaire,
 * trois faits de confiance juste avant l'offre, l'offre elle-même, le livre,
 * le bandeau final, puis les objections et le formulaire.
 *
 * L'Atlas n'est plus ici : il vit désormais sur les pages d'offre
 * (Architecture, Audit) plutôt que sur la home — une ressource gratuite
 * juste après avoir présenté ce qu'on vend a plus de sens qu'avant même
 * d'avoir montré l'offre.
 *
 * Le document SILLAGE n'est plus ici non plus : il a déménagé sur la page
 * /brand-narrative-architecture, avec le curseur avant/après qui
 * l'accompagne — un document complet en plus du reste, c'était trop à lire
 * pour quelqu'un qui découvre à peine l'offre sur la home.
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
      <ReadMarquee />
      <ProblemSection lang={lang} />
      <DiagnosisSection lang={lang} />
      <SectionDivider lang={lang} />
      <ImpactStats lang={lang} />
      <MechanismStrip lang={lang} />
      <TrustStrip lang={lang} />
      <OffersSection lang={lang} />
      <BookSection lang={lang} />
      <CTABanner />
      <FaqSection faqs={FAQ_AUDIT} />
      <ContactSection />
      <Footer />
    </main>
  )
}
