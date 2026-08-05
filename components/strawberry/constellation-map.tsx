/**
 * La constellation des vingt pièces.
 *
 * L'offre était présentée comme quatre boîtes empilées avec des puces
 * numérotées — un cinquième système de liste sur un site qui parle déjà le
 * langage du plan ailleurs (le champ de points du hero, les cercles du
 * sceau). Ceci reprend ce vocabulaire : vingt nœuds groupés en quatre amas,
 * chacun relié à un centre qui représente l'architecture elle-même.
 *
 * Purement décoratif et complémentaire — le détail lisible (bénéfice et
 * caractéristique de chaque pièce) reste dans le registre en dessous, pour
 * que rien ne dépende de survoler un point sur un schéma pour être compris.
 */

type Cluster = {
  title: string
  count: number
  anchor: { x: number; y: number }
}

const CORE = { x: 450, y: 250 }

const CLUSTERS: Cluster[] = [
  { title: "diagnostic", count: 4, anchor: { x: 210, y: 105 } },
  { title: "identity", count: 4, anchor: { x: 690, y: 105 } },
  { title: "assets", count: 6, anchor: { x: 190, y: 400 } },
  { title: "playbooks", count: 6, anchor: { x: 710, y: 400 } },
]

function clusterNodes(cluster: Cluster) {
  const radius = 62
  return Array.from({ length: cluster.count }).map((_, i) => {
    const angle = (i / cluster.count) * Math.PI * 2 - Math.PI / 2
    return {
      x: cluster.anchor.x + Math.cos(angle) * radius,
      y: cluster.anchor.y + Math.sin(angle) * radius,
    }
  })
}

export function ConstellationMap({ labels }: { labels: [string, string, string, string] }) {
  return (
    <div className="relative mb-10 hidden md:block">
      <svg viewBox="0 0 900 500" className="h-auto w-full" aria-hidden>
        {/* Amas → centre : quatre longues lignes, l'architecture comme point
            de convergence de tout ce que contient la commande. */}
        {CLUSTERS.map((c) => (
          <line
            key={`core-${c.title}`}
            x1={CORE.x}
            y1={CORE.y}
            x2={c.anchor.x}
            y2={c.anchor.y}
            stroke="#e63946"
            strokeWidth="0.8"
            opacity="0.28"
          />
        ))}

        {/* Nœud → amas, puis les nœuds eux-mêmes. */}
        {CLUSTERS.map((c) =>
          clusterNodes(c).map((n, i) => (
            <line
              key={`${c.title}-line-${i}`}
              x1={c.anchor.x}
              y1={c.anchor.y}
              x2={n.x}
              y2={n.y}
              stroke="#e63946"
              strokeWidth="0.6"
              opacity="0.4"
            />
          ))
        )}
        {CLUSTERS.map((c) =>
          clusterNodes(c).map((n, i) => (
            <circle key={`${c.title}-node-${i}`} cx={n.x} cy={n.y} r="4" fill="#e63946" opacity="0.85" />
          ))
        )}

        {/* Les quatre amas, en cercle un peu plus marqué que leurs nœuds. */}
        {CLUSTERS.map((c) => (
          <circle key={`anchor-${c.title}`} cx={c.anchor.x} cy={c.anchor.y} r="6" fill="none" stroke="#e63946" strokeWidth="1.2" />
        ))}

        {/* Le centre : l'architecture, un seul point que tout rejoint. */}
        <circle cx={CORE.x} cy={CORE.y} r="20" fill="none" stroke="#e63946" strokeWidth="1" opacity="0.5" />
        <circle cx={CORE.x} cy={CORE.y} r="7" fill="#e63946" />
      </svg>

      {/* Les quatre étiquettes, positionnées au-dessus de chaque amas plutôt
          que dans le schéma — le SVG reste un dessin, le texte reste du
          texte HTML normal, lisible et sélectionnable. */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-2 grid-rows-2 font-sans text-[11px] uppercase tracking-[0.14em] text-chalk-55">
        <div className="flex items-start justify-start pl-[16%] pt-[10%]">{labels[0]}</div>
        <div className="flex items-start justify-end pr-[14%] pt-[10%]">{labels[1]}</div>
        <div className="flex items-end justify-start pb-[8%] pl-[14%]">{labels[2]}</div>
        <div className="flex items-end justify-end pb-[8%] pr-[15%]">{labels[3]}</div>
      </div>
    </div>
  )
}
