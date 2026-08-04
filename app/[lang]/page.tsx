import { NavBar } from "@/components/strawberry/navbar"
import { HeroSection } from "@/components/strawberry/hero-section"
import { ReadMarquee } from "@/components/strawberry/read-marquee"
import { ProblemSection } from "@/components/strawberry/problem-section"
import { DiagnosisSection } from "@/components/strawberry/diagnosis-section"
import { MechanismStrip } from "@/components/strawberry/mechanism-strip"
import { OffersSection } from "@/components/strawberry/offers-section"
import { SillageSection } from "@/components/strawberry/sillage-section"
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
 * problème, diagnostic, mécanisme propriétaire, offre, démonstration, deux
 * dernières preuves (le livre, l'Atlas), les objections, puis le bandeau
 * final juste avant le formulaire — la dernière relance avant qu'on demande
 * d'écrire.
 *
 * La section « Les preuves » et le curseur avant/après sont partis d'ici : le
 * premier n'ajoutait rien après SILLAGE, le second vit désormais dans le
 * document SILLAGE lui-même, avec un vrai extrait du document plutôt qu'une
 * phrase inventée.
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
      <MechanismStrip lang={lang} />
      <OffersSection lang={lang} />
      <SillageSection lang={lang} />
      <BookSection lang={lang} />
      <AtlasSection />
      <FaqSection faqs={FAQ_AUDIT} />
      <CTABanner />
      <ContactSection />
      <Footer />
    </main>
  )
}
