"use client"

import { useState } from "react"

/**
 * Les vingt pièces, en onglets plutôt qu'en quatre blocs empilés.
 *
 * L'ancienne version montrait les quatre groupes l'un sous l'autre — pour
 * lire les playbooks, il fallait avoir déjà défilé au-delà du diagnostic, de
 * l'identité et des pièces & déploiement. Un seul groupe à la fois, choisi
 * au clic, raccourcit la page et rend le choix explicite.
 */

type Group = {
  icon: string
  title: string
  items: string[][]
  covers?: readonly string[]
  playbooksNote?: string
}

export function DeliverablesTabs({ groups }: { groups: Group[] }) {
  const [active, setActive] = useState(0)
  const group = groups[active]
  const isPlaybooks = group.icon === "playbooks"

  let n = 0
  for (let i = 0; i < active; i++) n += groups[i].items.length

  return (
    <div>
      {/* Les onglets. */}
      <div className="mb-6 flex flex-wrap gap-2 border-b border-hair">
        {groups.map((g, i) => (
          <button
            key={g.title}
            type="button"
            onClick={() => setActive(i)}
            className={`flex items-center gap-2.5 border-none bg-transparent px-1 pb-3.5 pt-1 font-sans text-[13px] transition-colors duration-300 ${
              i === active ? "border-b-2 border-brand text-brand" : "border-b-2 border-transparent text-chalk-40 hover:text-white"
            }`}
            style={{ marginBottom: "-1px" }}
          >
            <GroupIcon kind={g.icon} />
            {g.title}
          </button>
        ))}
      </div>

      {/* Le groupe actif. */}
      <div>
        {isPlaybooks && group.covers && (
          <div className="mb-6 grid grid-cols-3 gap-2.5 sm:grid-cols-6">
            {group.covers.map((label, i) => (
              <div
                key={label}
                className="group/cover relative aspect-[3/4] overflow-hidden border border-brand/25"
              >
                {/* Face avant : icône + nom du département. */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[linear-gradient(160deg,rgba(230,57,70,0.08)_0%,rgba(10,10,10,0.4)_100%)] px-2 text-center transition-opacity duration-300 group-hover/cover:opacity-0">
                  <PlaybookIcon index={i} />
                  <span className="font-sans text-[10px] font-semibold uppercase leading-tight tracking-[0.06em] text-white">
                    {label}
                  </span>
                </div>

                {/* Au survol : le bénéfice de ce playbook précis, plutôt que
                    d'obliger à descendre le lire dans la liste plus bas. */}
                <div className="absolute inset-0 flex items-center justify-center bg-brand p-2 text-center opacity-0 transition-opacity duration-300 group-hover/cover:opacity-100">
                  <span className="font-sans text-[9.5px] font-semibold leading-tight text-ink">
                    {group.items[i]?.[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        <ol className="list-none border-t border-hair p-0">
          {group.items.map(([benefit, feature], i) => (
            <li key={benefit} className="flex items-baseline gap-4 border-b border-white/[0.06] py-4 last:border-b-0">
              <span className="font-serif text-[13px] text-brand">{String(n + i + 1).padStart(2, "0")}</span>
              <div>
                <p className="m-0 font-sans text-[15px] font-semibold leading-snug text-white">{benefit}</p>
                <p className="m-0 mt-1 font-sans text-[13px] leading-snug text-chalk-40">{feature}</p>
              </div>
            </li>
          ))}
        </ol>

        {isPlaybooks && group.playbooksNote && (
          <p className="m-0 mt-5 border-t border-hair pt-5 font-sans text-[13px] italic leading-relaxed text-chalk-55">
            {group.playbooksNote}
          </p>
        )}
      </div>
    </div>
  )
}

function GroupIcon({ kind }: { kind: string }) {
  const props = { viewBox: "0 0 24 24", width: 16, height: 16, "aria-hidden": true as const }
  const stroke = { stroke: "currentColor", strokeWidth: 1.4, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const }

  switch (kind) {
    case "diagnostic":
      return (
        <svg {...props}>
          <circle cx="10.5" cy="10.5" r="6.5" {...stroke} />
          <line x1="19" y1="19" x2="15.2" y2="15.2" {...stroke} />
        </svg>
      )
    case "identity":
      return (
        <svg {...props}>
          <path d="M5 7h14" {...stroke} />
          <path d="M5 12h9" {...stroke} />
          <path d="M5 17h6" {...stroke} />
        </svg>
      )
    case "assets":
      return (
        <svg {...props}>
          <rect x="5" y="4" width="14" height="16" rx="0.5" {...stroke} />
          <line x1="8" y1="9" x2="16" y2="9" {...stroke} opacity="0.6" />
          <line x1="8" y1="13" x2="16" y2="13" {...stroke} opacity="0.6" />
          <line x1="8" y1="17" x2="12.5" y2="17" {...stroke} opacity="0.6" />
        </svg>
      )
    default: // playbooks
      return (
        <svg {...props}>
          <path d="M4 5.5c2-1 4.5-1 6.5 0v13c-2-1-4.5-1-6.5 0z" {...stroke} />
          <path d="M20 5.5c-2-1-4.5-1-6.5 0v13c2-1 4.5-1 6.5 0z" {...stroke} />
        </svg>
      )
  }
}

function PlaybookIcon({ index }: { index: number }) {
  const props = { viewBox: "0 0 24 24", width: 20, height: 20, "aria-hidden": true as const }
  const stroke = { stroke: "currentColor", strokeWidth: 1.4, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const }
  const color = "#e63946"

  switch (index) {
    case 0:
      return (
        <svg {...props}>
          <path d="M4 10v4h3l6 4V6l-6 4z" {...stroke} stroke={color} />
          <path d="M17 9.5c1 .8 1 4.2 0 5" {...stroke} stroke={color} />
        </svg>
      )
    case 1:
      return (
        <svg {...props}>
          <path d="M19 5c-7 0-13 5-13 13 8 0 13-6 13-13z" {...stroke} stroke={color} />
          <path d="M6 18l4-4" {...stroke} stroke={color} />
        </svg>
      )
    case 2:
      return (
        <svg {...props}>
          <path d="M4 6h16v10H9l-4 3v-3H4z" {...stroke} stroke={color} />
        </svg>
      )
    case 3:
      return (
        <svg {...props}>
          <path d="M3 13l4-4 4 2 4-4 6 5" {...stroke} stroke={color} />
          <path d="M14 16l3 3 4-4" {...stroke} stroke={color} />
        </svg>
      )
    case 4:
      return (
        <svg {...props}>
          <path d="M5 13v-1a7 7 0 0 1 14 0v1" {...stroke} stroke={color} />
          <rect x="3.5" y="13" width="3.5" height="5" rx="1" {...stroke} stroke={color} />
          <rect x="17" y="13" width="3.5" height="5" rx="1" {...stroke} stroke={color} />
        </svg>
      )
    default:
      return (
        <svg {...props}>
          <circle cx="9" cy="8" r="2.4" {...stroke} stroke={color} />
          <path d="M4 19c0-3 2.2-5 5-5s5 2 5 5" {...stroke} stroke={color} />
          <circle cx="17" cy="9" r="2" {...stroke} stroke={color} opacity="0.6" />
          <path d="M15 19c.2-2.2 1.6-3.8 3.5-4.2" {...stroke} stroke={color} opacity="0.6" />
        </svg>
      )
  }
}
