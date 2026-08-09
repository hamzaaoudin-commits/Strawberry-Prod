"use client"

import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { ViewTracker } from "@/components/strawberry/view-tracker"

/**
 * Le plan de la maison.
 *
 * Pas une icône de 46px comme les couvertures d'offre, pas une jauge, pas
 * un pictogramme. Un vrai dessin d'architecte à l'échelle de la section
 * entière : la façade d'une maison, quatre actes en colonnes, vingt-sept
 * fenêtres — une par page du document, page de garde et signature
 * comprises. Le mot "architecture" dans BRAND NARRATIVE ARCHITECTURE cesse
 * d'être une métaphore qu'on lit et devient un dessin qu'on regarde.
 *
 * Toujours dans la grammaire du site (traits rouges fins sur fond quasi
 * noir, aucune photo, aucune couleur hors palette) — mais à une échelle que
 * rien d'autre sur la home n'occupe.
 */

const ACTS = [
  { roman: "I", key: "frame", count: 3 },
  { roman: "II", key: "identity", count: 13 },
  { roman: "III", key: "deployment", count: 10 },
  { roman: "IV", key: "signature", count: 1 },
] as const

const T = {
  en: {
    kicker: "The document, drawn to scale",
    h2a: "Twenty-seven pages.",
    h2b: "One house.",
    lead: "Not a folder of files. A single structure, where every piece holds up the ones around it.",
    labels: { frame: "The Frame", identity: "The Identity", deployment: "The Deployment", signature: "Signature" },
    caption: "27 pages \u2014 front matter and signature included \u2014 built across four acts, not stacked at random.",
    cta: "Flip through the book \u2192",
  },
  fr: {
    kicker: "Le document, dessin\u00e9 \u00e0 l'\u00e9chelle",
    h2a: "Vingt-sept pages.",
    h2b: "Une seule maison.",
    lead: "Pas un dossier de fichiers. Une structure unique, o\u00f9 chaque pi\u00e8ce porte celles qui l'entourent.",
    labels: { frame: "Le Cadre", identity: "L'Identit\u00e9", deployment: "Le D\u00e9ploiement", signature: "Signature" },
    caption: "27 pages \u2014 pages liminaires et signature comprises \u2014 b\u00e2ties en quatre actes, pas empil\u00e9es au hasard.",
    cta: "Feuilleter le livre \u2192",
  },
}

function windowsFor(count: number, seed: number): number[] {
  // Distribue "count" fenêtres sur 1 à 3 étages selon la taille de l'acte —
  // purement visuel, pas une donnée à faire correspondre à autre chose.
  const floors = count <= 1 ? 1 : count <= 5 ? 2 : 3
  const out: number[] = []
  for (let i = 0; i < floors; i++) out.push(Math.ceil((count - out.reduce((a, b) => a + b, 0)) / (floors - i)))
  return out
}

export function ArchitectureBlueprint({ lang }: { lang: Lang }) {
  const t = pick(T, lang)
  let pieceN = 0

  return (
    <section className="section relative overflow-hidden bg-ink-soft text-white">
      <ViewTracker name="blueprint" />

      <div className="shell relative">
        <div className="mx-auto mb-14 max-w-[720px] text-center">
          <div className="kicker mb-6">{t.kicker}</div>
          <h2 className="h-section mb-6">
            {t.h2a} <span className="text-gradient">{t.h2b}</span>
          </h2>
          <p className="lede">{t.lead}</p>
        </div>

        {/* Le plan. Un viewBox large, pensé pour occuper la section — pas
            une vignette qu'on aurait pu réduire à une icône. */}
        <div className="relative mx-auto max-w-[980px]">
          <svg viewBox="0 0 1000 560" className="h-auto w-full" role="img" aria-label={t.h2a + " " + t.h2b}>
            <defs>
              <pattern id="bp-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M20 0H0V20" fill="none" stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="1000" height="560" fill="url(#bp-grid)" />

            {/* Cotes d'architecte, en haut. */}
            <g stroke="rgba(255,255,255,0.25)" strokeWidth="1">
              <line x1="60" y1="40" x2="940" y2="40" />
              <line x1="60" y1="34" x2="60" y2="46" />
              <line x1="940" y1="34" x2="940" y2="46" />
            </g>
            <text x="500" y="28" textAnchor="middle" fontFamily="var(--font-dm-sans), sans-serif" fontSize="10" letterSpacing="3" fill="rgba(255,255,255,0.35)">
              BRAND NARRATIVE ARCHITECTURE \u2014 27 PP.
            </text>

            {/* Le fronton. */}
            <polygon points="480,60 520,60 560,110 440,110" fill="none" stroke="#e63946" strokeWidth="1.4" opacity="0.75" />
            <rect x="494" y="70" width="12" height="12" fill="#e63946" />

            {/* Les quatre actes, en colonnes de façade. */}
            {(() => {
              const colXs = [90, 300, 590, 860]
              const colWidths = [170, 250, 230, 90]
              return ACTS.map((act, ai) => {
                const x = colXs[ai]
                const w = colWidths[ai]
                const floors = windowsFor(act.count, ai)
                const floorH = 300 / floors.length
                return (
                  <g key={act.key}>
                    {/* Colonne / façade. */}
                    <rect x={x} y="120" width={w} height="300" fill="rgba(255,255,255,0.015)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />

                    {/* Chapiteau de colonne, écho du motif de couverture. */}
                    <line x1={x} y1="120" x2={x + w} y2="120" stroke="#e63946" strokeWidth={ai === 1 ? 2.2 : 1} opacity={ai === 1 ? 0.9 : 0.4} />

                    {/* Les fenêtres : une par pièce, réparties par étage. */}
                    {floors.map((countOnFloor, fi) => {
                      const fy = 120 + fi * floorH
                      const gap = w / (countOnFloor + 1)
                      return Array.from({ length: countOnFloor }).map((_, wi) => {
                        pieceN += 1
                        const wx = x + gap * (wi + 1)
                        return (
                          <g key={wi}>
                            <rect
                              x={wx - 9}
                              y={fy + floorH / 2 - 13}
                              width="18"
                              height="26"
                              fill="rgba(230,57,70,0.08)"
                              stroke="#e63946"
                              strokeWidth="0.8"
                              opacity="0.85"
                            />
                            <line x1={wx} y1={fy + floorH / 2 - 13} x2={wx} y2={fy + floorH / 2 + 13} stroke="#e63946" strokeWidth="0.6" opacity="0.5" />
                            <text
                              x={wx}
                              y={fy + floorH / 2 + 34}
                              textAnchor="middle"
                              fontFamily="var(--font-dm-sans), sans-serif"
                              fontSize="7"
                              fill="rgba(255,255,255,0.3)"
                            >
                              {String(pieceN).padStart(2, "0")}
                            </text>
                          </g>
                        )
                      })
                    })}

                    {/* Socle + numéro d'acte + libellé. */}
                    <line x1={x - 4} y1="420" x2={x + w + 4} y2="420" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <text x={x + w / 2} y="444" textAnchor="middle" fontFamily="var(--font-playfair), serif" fontStyle="italic" fontSize="15" fill="#e63946">
                      {act.roman}
                    </text>
                    <text
                      x={x + w / 2}
                      y="462"
                      textAnchor="middle"
                      fontFamily="var(--font-dm-sans), sans-serif"
                      fontSize="9"
                      letterSpacing="1.5"
                      fill="rgba(255,255,255,0.5)"
                    >
                      {t.labels[act.key].toUpperCase()}
                    </text>
                    <text
                      x={x + w / 2}
                      y="478"
                      textAnchor="middle"
                      fontFamily="var(--font-dm-sans), sans-serif"
                      fontSize="8"
                      fill="rgba(255,255,255,0.3)"
                    >
                      {act.count} {act.count > 1 ? "pp." : "p."}
                    </text>
                  </g>
                )
              })
            })()}

            {/* Ligne de sol + cote générale, en bas. */}
            <line x1="60" y1="510" x2="940" y2="510" stroke="rgba(255,255,255,0.25)" strokeWidth="1.4" />
            <g stroke="rgba(255,255,255,0.2)" strokeWidth="1">
              <line x1="60" y1="522" x2="940" y2="522" />
              <line x1="60" y1="516" x2="60" y2="528" />
              <line x1="940" y1="516" x2="940" y2="528" />
            </g>
            <text x="500" y="546" textAnchor="middle" fontFamily="var(--font-dm-sans), sans-serif" fontSize="9" letterSpacing="2" fill="rgba(255,255,255,0.3)">
              27 PAGES \u2014 4 ACTES \u2014 1 SEULE STRUCTURE
            </text>
          </svg>
        </div>

        <p className="mx-auto mt-8 max-w-[560px] text-center font-sans text-[13.5px] leading-relaxed text-chalk-40">
          {t.caption}
        </p>
      </div>
    </section>
  )
}
