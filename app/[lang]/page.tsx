import { NavBar } from "@/components/strawberry/navbar"
import { HeroSection } from "@/components/strawberry/hero-section"
import { ProblemSection } from "@/components/strawberry/problem-section"
import { LadderSection } from "@/components/strawberry/ladder-section"
import { OffersSection } from "@/components/strawberry/offers-section"
import { AboutSection } from "@/components/strawberry/about-section"
import { SillageSection } from "@/components/strawberry/sillage-section"
import { BeforeAfterSection } from "@/components/strawberry/before-after-section"
import { BookSection } from "@/components/strawberry/book-section"
import { AtlasSection } from "@/components/strawberry/atlas-section"
import { CTABanner } from "@/components/strawberry/cta-banner"
import { ContactSection } from "@/components/strawberry/contact-section"
import { Footer } from "@/components/strawberry/footer"
import { isLang, type Lang } from "@/lib/lang"

/**
 * La page d'accueil.
 *
 * Les sections sans interaction (problème, offres, à propos, SILLAGE, livre)
 * reçoivent la langue en propriété et se rendent côté serveur : elles n'entrent
 * plus dans le bundle du navigateur et n'ont rien à hydrater. Seules restent
 * client celles qui répondent à un geste — le hero, le sélecteur de situation,
 * le curseur avant/après, la modale de l'Atlas, le formulaire, la navigation.
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
      <LadderSection />
      <OffersSection lang={lang} />
      <AboutSection lang={lang} />
      <BeforeAfterSection />
      <SillageSection lang={lang} />
      <BookSection lang={lang} />
      <AtlasSection />
      <CTABanner />
      <ContactSection />
      <Footer />
    </main>
  )
}
