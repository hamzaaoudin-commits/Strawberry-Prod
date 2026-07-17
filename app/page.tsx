import { NavBar } from "@/components/strawberry/navbar"
import { HeroSection } from "@/components/strawberry/hero-section"
import { ProblemSection } from "@/components/strawberry/problem-section"
import { LadderSection } from "@/components/strawberry/ladder-section"
import { OffersSection } from "@/components/strawberry/offers-section"
import { AboutSection } from "@/components/strawberry/about-section"
import { CasesSection } from "@/components/strawberry/cases-section"
import { AtlasSection } from "@/components/strawberry/atlas-section"
import { CTABanner } from "@/components/strawberry/cta-banner"
import { FaqSection } from "@/components/strawberry/faq-section"
import { ContactSection } from "@/components/strawberry/contact-section"
import { Footer } from "@/components/strawberry/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <ProblemSection />
      <LadderSection />
      <OffersSection />
      <AboutSection />
      <CasesSection />
      <AtlasSection />
      <CTABanner />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
