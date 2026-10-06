import { STRAW, type StrawLang } from "@/lib/straw-mechanism"

/**
 * S.T.R.A.W. pour les pages de terrain.
 *
 * Ces pages sont du HTML brut, habillé par public/nocta/styles.css et
 * traduit côté navigateur par i18n.js, qui remplace le texte de chaque nœud
 * portant un `data-i18n`. Même source de données que la home
 * (lib/straw-mechanism.ts) : la section est écrite ici en HTML, et ses textes
 * sont fournis sous forme de clés `straw.*` pour les deux langues, à fusionner
 * dans le dictionnaire de la page (voir TerrainPage).
 *
 * Le texte par défaut dans le HTML est le français ; l'anglais arrive par le
 * dictionnaire.
 */

const pad = (n: number) => String(n).padStart(2, "0")
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

function keysFor(lang: StrawLang): Record<string, string> {
  const c = STRAW[lang]
  const d: Record<string, string> = { "straw.eyebrow": c.eyebrow, "straw.title": c.title, "straw.lead": c.lead }
  c.stages.forEach((s, i) => {
    d[`straw.${i}.gloss`] = s.gloss
    d[`straw.${i}.verb`] = s.verb
    s.pieces.forEach((p, j) => {
      d[`straw.${i}.${j}.t`] = `${c.piece} ${pad(p.n)} · ${p.title}`
      d[`straw.${i}.${j}.line`] = p.line
      if (p.note) d[`straw.${i}.${j}.note`] = p.note
      p.items.forEach((it, k) => {
        d[`straw.${i}.${j}.${k}`] = it
      })
    })
  })
  return d
}

export const STRAW_DICT: Record<StrawLang, Record<string, string>> = { fr: keysFor("fr"), en: keysFor("en") }

export function strawHtml(): string {
  const c = STRAW.fr
  const stages = c.stages
    .map((s, i) => {
      const pieces = s.pieces
        .map((p, j) => {
          const items = p.items
            .map(
              (it, k) =>
                `<li><span class="straw-dot" aria-hidden="true"></span><span data-i18n="straw.${i}.${j}.${k}">${esc(it)}</span></li>`,
            )
            .join("")
          return (
            `<div class="straw-piece">` +
            `<div class="straw-pn" data-i18n="straw.${i}.${j}.t">${esc(`${c.piece} ${pad(p.n)} · ${p.title}`)}</div>` +
            `<p class="straw-line" data-i18n="straw.${i}.${j}.line">${esc(p.line)}</p>` +
            (p.note ? `<p class="straw-note" data-i18n="straw.${i}.${j}.note">${esc(p.note)}</p>` : "") +
            `<ul class="straw-list">${items}</ul>` +
            `</div>`
          )
        })
        .join("")
      return (
        `<div class="straw-stage reveal">` +
        `<div class="straw-head"><div class="straw-letter">${s.letter}</div>` +
        `<div class="straw-name">${esc(s.name)}</div>` +
        `<div class="straw-gloss" data-i18n="straw.${i}.gloss">${esc(s.gloss)}</div>` +
        `<div class="straw-verb" data-i18n="straw.${i}.verb">${esc(s.verb)}</div></div>` +
        `<div class="straw-pieces">${pieces}</div>` +
        `</div>`
      )
    })
    .join("")

  const letters = c.stages
    .map((s) => `<div class="straw-cell"><div class="straw-box">${s.letter}</div><div class="straw-cellname">${esc(s.name)}</div></div>`)
    .join("")

  return (
    `<!-- ============ S.T.R.A.W. ============ -->` +
    `<style>
.straw-letters{display:grid;grid-template-columns:repeat(5,1fr);gap:.6rem;max-width:760px;margin:2.6rem auto 3.2rem}
.straw-cell{text-align:center}
.straw-box{border:2px solid var(--coral);background:rgba(255,34,51,.06);padding:1.1rem 0;font-family:var(--display);font-weight:800;font-size:clamp(1.8rem,5vw,3.2rem);line-height:1;color:var(--coral)}
.straw-cellname{margin-top:.8rem;font-family:var(--mono);font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;color:var(--cream)}
.straw-stage{display:grid;grid-template-columns:minmax(150px,230px) 1fr;gap:3rem;padding:3rem 0;border-top:1px solid var(--line-soft)}
.straw-letter{font-family:var(--display);font-weight:800;font-size:clamp(4rem,9vw,6.5rem);line-height:.95;color:var(--coral)}
.straw-name{margin-top:.9rem;font-family:var(--mono);font-size:.7rem;letter-spacing:.28em;text-transform:uppercase;color:var(--coral)}
.straw-gloss{margin-top:.6rem;font-family:var(--display);font-weight:700;font-size:1.3rem;text-transform:uppercase;line-height:1.15;color:var(--cream)}
.straw-verb{margin-top:.5rem;font-size:.9rem;color:var(--smoke)}
.straw-pieces{display:flex;flex-direction:column;gap:2.8rem}
.straw-pn{font-family:var(--mono);font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:var(--coral)}
.straw-line{margin:.8rem 0 0;font-family:var(--display);font-weight:700;font-size:clamp(1.1rem,2.2vw,1.4rem);line-height:1.3;color:var(--cream)}
.straw-note{margin:.8rem 0 0;max-width:60ch;font-size:.92rem;line-height:1.7;color:var(--smoke)}
.straw-list{list-style:none;margin:1.2rem 0 0;padding:0;display:flex;flex-direction:column;gap:.75rem}
.straw-list li{display:flex;align-items:baseline;gap:.9rem;font-size:.95rem;line-height:1.6;color:var(--smoke)}
.straw-dot{flex:none;width:6px;height:6px;border-radius:50%;background:var(--coral);position:relative;top:-.1em}
@media (max-width:760px){.straw-stage{grid-template-columns:1fr;gap:1.4rem;padding:2.2rem 0}.straw-letters{gap:.35rem}}
</style>` +
    `<section class="section"><div class="wrap">` +
    `<div class="section-head reveal">` +
    `<span class="eyebrow" data-i18n="straw.eyebrow">${esc(c.eyebrow)}</span>` +
    `<h2 class="h-sec" data-i18n="straw.title" style="margin-top:1.1rem">${esc(c.title)}</h2>` +
    `<p class="lead" data-i18n="straw.lead" style="margin-top:1.2rem">${esc(c.lead)}</p>` +
    `</div>` +
    `<div class="straw-letters reveal">${letters}</div>` +
    stages +
    `</div></section>`
  )
}
