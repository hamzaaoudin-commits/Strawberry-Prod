import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { LadderSection } from "@/components/strawberry/ladder-section"
import { ContactSection } from "@/components/strawberry/contact-section"

/**
 * La page des offres.
 *
 * L'échelle vivait sur la page d'accueil, où elle mettait RADAR à 15€ et la
 * commande à 4 500€ sur le même plan visuel : le visiteur arbitrait entre
 * quatre barreaux au lieu de comprendre un seul travail. Elle vit désormais
 * ici, pour ceux qui viennent précisément comparer.
 */
export default function OffresPage() {
  return (
    <main className="min-h-screen bg-ink">
      <NavBar />
      <div className="pt-24" />
      <LadderSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
