"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

function useReveal() {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.05 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

const ARTICLES = [
  {
    title: "Objet et champ d'application",
    body: (
      <>
        <p>Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent les relations contractuelles entre :</p>
        <p style={{ marginTop: 12 }}>
          <strong>Hamza El Jaouahiry</strong>, entrepreneur individuel (micro-entreprise), immatriculé sous le SIREN 105 253 314 (SIRET 105 253 314 00014), exerçant sous le nom commercial <strong>Strawberry Production</strong>, dont le siège est situé 8 place Eugène Thomas, 93160 Noisy-le-Grand, France (ci-après « le Prestataire »).
        </p>
        <p style={{ marginTop: 12 }}>Et toute personne physique ou morale procédant à l&apos;achat d&apos;une prestation proposée sur le site v0-strawberryprod.vercel.app (ci-après « le Client »).</p>
        <p style={{ marginTop: 12 }}>Toute commande implique l&apos;acceptation pleine et entière des présentes CGV, qui prévalent sur tout autre document du Client.</p>
      </>
    ),
  },
  {
    title: "Prestation proposée",
    body: (
      <>
        <p>Le Prestataire propose une prestation unique intitulée <strong>« Brand Narrative Architecture »</strong> (ci-après « la Prestation »), comprenant cinq livrables :</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> Le Diagnostic de Différenciation</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> La Plateforme Narrative</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> Le Système de Langage</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> Le Kit de Déploiement</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> Le Guide de Cohérence</li>
        </ul>
        <p>La prestation inclut également un walkthrough de 90 minutes 30 jours après la livraison.</p>
        <p style={{ marginTop: 12 }}>Le Prestataire se réserve le droit de limiter à quatre (4) le nombre de commissions acceptées par trimestre civil, afin de garantir la qualité artisanale de la prestation.</p>
      </>
    ),
  },
  {
    title: "Prix et modalités de paiement",
    body: (
      <>
        <p>Le prix de la Prestation est de <strong>4 500 € TTC</strong> (la TVA n&apos;étant pas applicable au titre de l&apos;article 293 B du Code général des impôts).</p>
        <p style={{ marginTop: 12 }}>Le paiement s&apos;effectue intégralement en ligne via le prestataire de paiement Stripe (Stripe Payments Europe Limited, Dublin, Irlande), au moment de la commande. Aucune commande ne peut être engagée sans règlement préalable.</p>
        <p style={{ marginTop: 12 }}>Une facture acquittée est transmise au Client par voie électronique sous 48 heures suivant le paiement.</p>
        <p style={{ marginTop: 12 }}>Les éventuels frais bancaires de conversion de devises restent à la charge exclusive du Client.</p>
      </>
    ),
  },
  {
    title: "Conclusion du contrat",
    body: (
      <>
        <p>Le contrat est réputé conclu dès la réception du paiement par le Prestataire. Cette réception déclenche :</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> L&apos;envoi sous 24h ouvrées d&apos;un courriel de confirmation au Client</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> La transmission d&apos;un questionnaire d&apos;intake (informations préalables nécessaires à la prestation)</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> La proposition d&apos;un rendez-vous d&apos;extraction (entretien fondateur)</li>
        </ul>
        <p>Le délai de quatre (4) semaines de livraison commence à courir à compter de la date de l&apos;entretien d&apos;extraction.</p>
      </>
    ),
  },
  {
    title: "Délais de livraison",
    body: (
      <>
        <p>La Prestation est livrée dans un délai de <strong>quatre (4) semaines</strong> à compter de l&apos;entretien d&apos;extraction initial, sous réserve de la coopération du Client (réactivité aux demandes d&apos;information, disponibilité pour les entretiens).</p>
        <p style={{ marginTop: 12 }}>Tout retard imputable au Client (absence de réponse aux relances, indisponibilité prolongée, non-fourniture des éléments demandés) suspend le décompte du délai.</p>
        <p style={{ marginTop: 12 }}>En cas de retard imputable au Prestataire, le Client en est informé par écrit avec indication du nouveau délai prévisionnel. Aucune pénalité ne peut être réclamée au titre d&apos;un retard inférieur à deux (2) semaines.</p>
      </>
    ),
  },
  {
    title: "Droit de rétractation et politique de remboursement",
    body: (
      <>
        <p><strong>Important :</strong> Conformément à l&apos;article L.221-28 du Code de la consommation, le Client est informé que la Prestation, hautement personnalisée et conçue sur mesure pour son entreprise, ne peut faire l&apos;objet d&apos;un droit de rétractation classique de 14 jours dès lors que son exécution a commencé avec son accord exprès.</p>
        <p style={{ marginTop: 16 }}>Le Prestataire propose néanmoins une politique de remboursement adaptée, en trois temps :</p>
        <div style={{ marginTop: 16, padding: 20, border: "1px solid rgba(230,57,70,0.2)", background: "rgba(230,57,70,0.04)" }}>
          <p><strong>A. Avant le démarrage de la prestation :</strong></p>
          <p style={{ marginTop: 8 }}>Dans les sept (7) jours suivant le paiement, et tant que l&apos;entretien d&apos;extraction n&apos;a pas eu lieu, le Client peut demander l&apos;annulation de la commande et obtenir un <strong>remboursement intégral (100%)</strong>, sous quinze (15) jours.</p>
        </div>
        <div style={{ marginTop: 12, padding: 20, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
          <p><strong>B. Pendant la prestation :</strong></p>
          <p style={{ marginTop: 8 }}>Une fois l&apos;entretien d&apos;extraction réalisé et le travail de production engagé, aucun remboursement ne peut être obtenu, l&apos;essentiel de la valeur de la prestation reposant sur le temps consacré à la phase d&apos;extraction et d&apos;analyse.</p>
        </div>
        <div style={{ marginTop: 12, padding: 20, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
          <p><strong>C. À la livraison, en cas d&apos;insatisfaction substantielle :</strong></p>
          <p style={{ marginTop: 8 }}>Le Client bénéficie de révisions mineures illimitées et de deux (2) tours de révisions majeures dans les trente (30) jours suivant la livraison.</p>
          <p style={{ marginTop: 8 }}>Si, après ces deux tours, le Client estime que la Prestation ne correspond pas substantiellement à ses attentes raisonnables, il peut solliciter un remboursement partiel, plafonné à <strong>trente pour cent (30%) du montant total, soit 1 350 €</strong>. Cette demande doit être motivée par écrit dans les quarante-cinq (45) jours suivant la livraison.</p>
        </div>
        <p style={{ marginTop: 16 }}>Toute demande de remboursement doit être adressée par email à Strawberryprod.contact@gmail.com, avec mention de la facture concernée.</p>
      </>
    ),
  },
  {
    title: "Obligations du Client",
    body: (
      <>
        <p>Pour permettre la bonne exécution de la Prestation, le Client s&apos;engage à :</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Fournir les informations demandées avec sincérité et exhaustivité</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Se rendre disponible pour les entretiens convenus</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Répondre aux demandes du Prestataire dans un délai raisonnable (sous 5 jours ouvrés)</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Communiquer ses retours de révision dans les délais convenus</li>
        </ul>
        <p>Le Client garantit disposer des droits et autorisations nécessaires sur les informations qu&apos;il transmet (marques, contenus, données concurrentielles, etc.).</p>
      </>
    ),
  },
  {
    title: "Obligations du Prestataire",
    body: (
      <>
        <p>Le Prestataire s&apos;engage à :</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Exécuter la Prestation avec professionnalisme, dans les règles de l&apos;art</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Respecter les délais convenus, sous réserve de la coopération du Client</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Garantir la confidentialité des informations transmises par le Client</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Ne pas réutiliser, en tout ou partie, le contenu narratif spécifique produit pour un Client dans une autre commission</li>
        </ul>
        <p>Le Prestataire est tenu d&apos;une obligation de moyens, et non de résultat. Le succès commercial du Client à l&apos;issue de la prestation dépend de nombreux facteurs extérieurs (mise en œuvre, contexte marché, exécution) qui échappent au contrôle du Prestataire.</p>
      </>
    ),
  },
  {
    title: "Propriété intellectuelle",
    body: (
      <>
        <p>À la livraison et après paiement intégral, le Client dispose d&apos;un droit d&apos;usage commercial illimité et perpétuel sur les livrables de la Prestation, pour les besoins propres de son activité (communication, site web, supports commerciaux, contenus éditoriaux, formations, publications, etc.).</p>
        <p style={{ marginTop: 12 }}>Le Prestataire conserve néanmoins :</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Le droit moral sur l&apos;œuvre, conformément à l&apos;article L.121-1 du Code de la propriété intellectuelle</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Le droit d&apos;utiliser la prestation, sous forme anonymisée si le Client le demande, à des fins de portfolio, étude de cas, ou démonstration commerciale</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> La propriété de la méthodologie sous-jacente (méthode S.T.R.A.W.), des cadres analytiques et des modèles utilisés</li>
        </ul>
        <p>La revente, la sous-licence ou la cession à un tiers des livrables est strictement interdite sans accord écrit préalable du Prestataire.</p>
      </>
    ),
  },
  {
    title: "Confidentialité",
    body: (
      <>
        <p>Chacune des parties s&apos;engage à conserver strictement confidentielles les informations échangées dans le cadre de la Prestation, et notamment :</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Les informations stratégiques, commerciales, financières et opérationnelles du Client</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Les contenus narratifs et méthodologiques produits par le Prestataire</li>
        </ul>
        <p>Cet engagement de confidentialité perdure cinq (5) ans après la fin de la Prestation.</p>
      </>
    ),
  },
  {
    title: "Responsabilité",
    body: (
      <>
        <p>La responsabilité du Prestataire ne saurait être engagée pour les conséquences directes ou indirectes résultant :</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> D&apos;une mauvaise utilisation des livrables par le Client</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> D&apos;informations inexactes ou incomplètes fournies par le Client</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> De facteurs commerciaux ou de marché extérieurs à la prestation</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> D&apos;un cas de force majeure tel que défini à l&apos;article 1218 du Code civil</li>
        </ul>
        <p>En toute hypothèse, la responsabilité du Prestataire est plafonnée au montant total facturé au Client pour la Prestation concernée.</p>
      </>
    ),
  },
  {
    title: "Données personnelles",
    body: <p>Le traitement des données personnelles du Client (identité, email, données de paiement) est régi par notre <Link href="/politique-confidentialite" style={{ color: COLOR }}>Politique de confidentialité</Link>, conforme au Règlement Général sur la Protection des Données (RGPD) et à la loi française Informatique et Libertés.</p>,
  },
  {
    title: "Réclamation et médiation",
    body: (
      <>
        <p>Toute réclamation doit être adressée par email à <strong>Strawberryprod.contact@gmail.com</strong>. Le Prestataire s&apos;engage à y répondre sous quinze (15) jours ouvrés.</p>
        <p style={{ marginTop: 12 }}>Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, le Client peut, en cas de litige non résolu amiablement, recourir gratuitement au service de médiation de la consommation auprès du médiateur compétent.</p>
        <p style={{ marginTop: 12 }}>Le Client peut également utiliser la plateforme européenne de règlement en ligne des litiges (ODR) : <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>ec.europa.eu/consumers/odr</a></p>
      </>
    ),
  },
  {
    title: "Loi applicable et juridiction compétente",
    body: (
      <>
        <p>Les présentes CGV sont régies par le droit français.</p>
        <p style={{ marginTop: 12 }}>En cas de litige, et à défaut d&apos;accord amiable, les <strong>tribunaux français de Paris</strong> seront seuls compétents, nonobstant pluralité de défendeurs ou appel en garantie.</p>
        <p style={{ marginTop: 12 }}>Pour les Clients consommateurs résidant en dehors de la France, les règles de compétence légales applicables s&apos;appliquent conformément au droit de l&apos;Union européenne.</p>
      </>
    ),
  },
  {
    title: "Version officielle et traduction",
    body: <p>La version française des présentes CGV est la seule version juridiquement opposable. Toute traduction en langue étrangère, notamment anglaise, est fournie à titre informatif et de courtoisie uniquement. En cas de divergence d&apos;interprétation entre la version française et toute autre version, la version française prévaut.</p>,
  },
]

export default function CGVPage() {
  const hero = useReveal()
  const content = useReveal()

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>

      <div style={{ position: "fixed", top: 88, right: "clamp(1.5rem,4vw,4rem)", zIndex: 90 }}>
        <Link href="/en/terms" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(10,10,10,0.7)", backdropFilter: "blur(12px)", borderRadius: 100, fontSize: 11, fontFamily: SANS, color: "rgba(255,255,255,0.75)", letterSpacing: "0.15em", textDecoration: "none", textTransform: "uppercase", transition: "all 0.2s" }}>
          <span style={{ color: COLOR }}>FR</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span>EN</span>
        </Link>
      </div>

      <section ref={hero.ref as any} style={{ padding: "180px clamp(1.5rem,4vw,4rem) 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at top, ${GLOW} 0%, transparent 60%)`, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative", opacity: hero.visible ? 1 : 0, transform: hero.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>
            Document contractuel
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.25rem,5vw,3.75rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 24 }}>
            Conditions générales <br /><span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>de vente.</span>
          </h1>
          <p style={{ fontSize: "clamp(0.95rem,1.3vw,1.1rem)", color: "rgba(255,255,255,0.6)", maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
            Conditions applicables à toute prestation commandée auprès de Strawberry Production (Hamza El Jaouahiry, micro-entreprise).
          </p>
        </div>
      </section>

      <section ref={content.ref as any} style={{ padding: "60px clamp(1.5rem,4vw,4rem) 140px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", opacity: content.visible ? 1 : 0, transform: content.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>

          {ARTICLES.map((s, i) => (
            <article key={i} style={{ marginBottom: 56, paddingBottom: 56, borderBottom: i < ARTICLES.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              <div style={{ fontFamily: SERIF, fontSize: "1.3rem", color: COLOR, fontWeight: 700, lineHeight: 1, marginBottom: 12, letterSpacing: "-0.02em" }}>
                Article {String(i + 1).padStart(2, "0")}.
              </div>
              <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.4rem,2.2vw,1.85rem)", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 24, lineHeight: 1.2 }}>
                {s.title}
              </h2>
              <div style={{ fontFamily: SANS, fontSize: "0.98rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.75 }}>
                {s.body}
              </div>
            </article>
          ))}

          <div style={{ marginTop: 80, padding: "32px clamp(1.5rem,3vw,2.5rem)", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", textAlign: "center" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.25em", color: "rgba(255,255,255,0.5)", marginBottom: 12, textTransform: "uppercase" }}>
              Dernière mise à jour
            </div>
            <p style={{ fontFamily: SERIF, fontSize: "1.05rem", color: "rgba(255,255,255,0.85)", fontStyle: "italic", margin: 0 }}>
              30 mai 2026
            </p>
          </div>

          <div style={{ marginTop: 48, display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/mentions-legales" style={{ color: COLOR, fontSize: 13, fontFamily: SANS, letterSpacing: "0.05em", textDecoration: "none", borderBottom: `1px solid ${COLOR}`, paddingBottom: 2 }}>
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" style={{ color: COLOR, fontSize: 13, fontFamily: SANS, letterSpacing: "0.05em", textDecoration: "none", borderBottom: `1px solid ${COLOR}`, paddingBottom: 2 }}>
              Politique de confidentialité
            </Link>
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontFamily: SANS, letterSpacing: "0.05em", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 2 }}>
              Retour à l&apos;accueil
            </Link>
          </div>

        </div>
      </section>

    </main>
  )
}
