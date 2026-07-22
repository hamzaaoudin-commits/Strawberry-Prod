/**
 * MOMENTUM — les espaces clients.
 *
 * Un objet par maison accompagnée. Chaque cliente a son code d'accès, sa
 * doctrine et ses livraisons mensuelles.
 *
 * Les livrables pointent vers un document ou un dossier partagé : rien n'est
 * hébergé ici. C'est ce qui rend l'espace tenable sans stockage ni
 * administration — vous déposez où vous travaillez déjà et vous collez le lien.
 *
 * Le code de chaque cliente vit dans une variable d'environnement, jamais dans
 * ce fichier : il ne doit pas se retrouver dans le dépôt.
 */

export type Status = "todo" | "delivered" | "wip"

export type Deliverable = {
  title: string
  /** Type de pièce et pilier auquel elle répond — ce qui la relie à la doctrine. */
  meta: string
  status: Status
  /** Lien vers le document. Absent tant que la pièce n'est pas livrée. */
  href?: string
}

export type MonthDelivery = {
  /** Format AAAA-MM. Sert au tri et à l'onglet. */
  key: string
  label: string
  items: Deliverable[]
}

export type ClientSpace = {
  /** Segment d'URL, et nom de la variable d'environnement du code : MOMENTUM_CODE_<SLUG>. */
  slug: string
  house: string
  tier: string
  /** Rang du mois en cours et durée de l'engagement — montre l'accumulation. */
  monthIndex: number
  monthTotal: number
  doctrine: {
    deliveredOn: string
    position: string
    pillars: string[]
    forbidden: string[]
    /** Lien vers l'architecture complète livrée à la maison. */
    href?: string
  }
  months: MonthDelivery[]
}

/**
 * Exemple de structure, à remplacer par vos maisons réelles.
 * Tant qu'aucun code n'est défini en variable d'environnement, l'espace reste
 * inaccessible — une entrée ici ne suffit pas à ouvrir une porte.
 */
export const CLIENT_SPACES: ClientSpace[] = [
  {
    slug: "sillage",
    house: "SILLAGE",
    tier: "Palier Maison",
    monthIndex: 4,
    monthTotal: 12,
    doctrine: {
      deliveredOn: "2026-03-12",
      position: "Nous constituons la preuve de ce qui a été fait sur un chantier, jour après jour.",
      pillars: [
        "I · La mémoire est un rapport de force",
        "II · Le travail bien fait ne se défend pas seul",
        "III · La preuve se constitue sans y penser",
        "IV · L'asymétrie du chantier",
      ],
      forbidden: ["simple", "visuel", "gain de temps", "plateforme", "digitaliser", "zéro litige", "nouvelle génération"],
      href: "/sample-audit",
    },
    months: [
      {
        key: "2026-07",
        label: "Juillet 2026",
        items: [
          { title: "Essai — « Le classeur de chantier meurt toujours »", meta: "Article long · Pilier III", status: "todo", href: "#" },
          { title: "Série de quatre posts — La mémoire", meta: "Réseau · Pilier I", status: "delivered", href: "#" },
          { title: "Refonte de la page d'accueil — V2", meta: "Copy · Recadrage 1", status: "delivered", href: "#" },
          { title: "Script vidéo — Le coût d'une reprise", meta: "Vidéo · Pilier II", status: "wip" },
        ],
      },
      {
        key: "2026-06",
        label: "Juin 2026",
        items: [
          { title: "Essai — « Ce que regarde l'expert d'assurance »", meta: "Article long · Pilier I", status: "delivered", href: "#" },
          { title: "Série de trois posts — L'asymétrie", meta: "Réseau · Pilier IV", status: "delivered", href: "#" },
          { title: "Séquence de reprise à froid", meta: "Email · Recadrage 5", status: "delivered", href: "#" },
        ],
      },
    ],
  },
]

export function getClientSpace(slug: string): ClientSpace | undefined {
  return CLIENT_SPACES.find((c) => c.slug === slug)
}

/**
 * Nom de la variable d'environnement portant le code d'une cliente.
 * Exemple : MOMENTUM_CODE_SILLAGE
 */
export function codeEnvName(slug: string): string {
  return `MOMENTUM_CODE_${slug.toUpperCase().replace(/[^A-Z0-9]/g, "_")}`
}
