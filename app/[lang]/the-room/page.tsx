import type { Metadata } from "next"
import { TerrainPage, type TerrainCopy } from "@/components/terrain/terrain-page"

/**
 * THE ROOM — le terrain lieux.
 *
 * Cette page passe désormais par le même gabarit que les trois autres,
 * alors qu'elle avait jusqu'ici sa propre copie du HTML. Les deux fichiers
 * devaient être modifiés en parallèle à chaque changement, et l'un des deux
 * finissait toujours par être oublié — le retrait de la tournée a dû être
 * fait deux fois pour cette raison.
 *
 * Aucune surcharge de texte : le dictionnaire d'origine parle déjà des
 * lieux, puisque c'est le site dont tout vient. Les trois autres terrains
 * sont ceux qui surchargent.
 */

export const metadata: Metadata = {
  title: "THE ROOM — L'audit narratif pour les lieux",
  description:
    "La salle est pleine et pourtant chaque publication repart de zéro. L'audit narratif dit ce que votre lieu raconte aujourd'hui et donne les mouvements qui changent ça.",
}

const COPY: TerrainCopy = {
  slug: "the-room",
  wordmark: "THE ROOM",
  fr: {},
  en: {},
}

export default function RoomTerrainPage() {
  return <TerrainPage copy={COPY} />
}
