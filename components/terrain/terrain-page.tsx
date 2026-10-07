"use client"

import { useEffect, useState } from "react"
import { useLang } from "@/lib/i18n"

/**
 * Le gabarit de page de terrain — la page THE ROOM, réutilisée telle quelle.
 *
 * Les trois terrains partagent exactement le même HTML, le même CSS
 * (`public/nocta/styles.css`) et le même JavaScript (`public/nocta/app.js`) :
 * canvas bokeh, tournée épinglée, comparateur à glisser, accordéon,
 * révélations au scroll. Rien n'est réimplémenté, donc rien ne peut être
 * perdu en route — c'est l'erreur que j'ai faite trois fois en réécrivant
 * à la main.
 *
 * Seul le texte change, et il change par le mécanisme prévu par le site
 * lui-même : chaque nœud porte un `data-i18n`, et `i18n.js` expose son
 * dictionnaire sur `window.NOCTA_I18N.DICT`. Une page de terrain n'a donc
 * qu'à fournir les clés qu'elle veut remplacer — le reste est hérité.
 *
 * C'est aussi ce qui garantit que les trois pages ne divergeront pas : une
 * correction de mise en page faite ici les corrige toutes.
 */

const TERRAIN_HTML = `<canvas class="bokeh-fixed" id="bokeh"></canvas><div aria-hidden="true" class="ambient"></div><div aria-hidden="true" class="letterbox lb-top"></div><div aria-hidden="true" class="letterbox lb-bot"></div>
<!-- ============ HERO ============ -->
<section class="hero">
<div class="hero-fallback"></div>
<div class="hero-scrim"></div>
<div class="wrap">
<span class="hero-kicker eyebrow"><span class="dot"></span><span data-i18n="hero.kicker">Architecture narrative · Lieux</span></span>
<h1 class="wordmark flicker">THE ROOM</h1>
<p class="hero-tag" data-i18n="hero.tag">Votre lieu est déjà une histoire.<br/><b>Personne ne l'a écrite.</b></p>
<div class="hero-cta">
<a class="btn btn-primary" href="__LANG__/#contact"><span data-i18n="hero.cta1">Prendre contact</span><span class="arr">→</span></a>
<a class="btn btn-ghost" data-i18n="hero.cta2" href="https://buy.stripe.com/eVq7sEb2AfDe8Am2Raf7i0g" target="_blank" rel="noopener">Commander l\'architecture</a>
</div>
<p class="hero-assure" data-i18n="hero.assure">2 900 € · trois semaines · jour 21 ou remboursé</p>
</div>
<span class="scroll-hint" data-i18n="hero.scroll">Défiler</span>
</section>
<!-- ============ MARQUEE ============ -->
<div aria-hidden="true" class="marquee">
<div class="marquee-track">
<span class="marquee-item" data-i18n="mq.1">Restaurants</span>
<span class="marquee-item" data-i18n="mq.2">Bars</span>
<span class="marquee-item" data-i18n="mq.3">Clubs</span>
<span class="marquee-item" data-i18n="mq.4">Coffee shops</span>
<span class="marquee-item" data-i18n="mq.5">Caves &amp; bistrots</span>
<span class="marquee-item" data-i18n="mq.6">Rooftops</span>
</div>
</div>
<!-- ============ MANIFESTO ============ -->
<section class="section manifesto">
<div class="wrap">
<span class="eyebrow reveal" data-i18n="man.eyebrow">Le constat</span>
<p class="reveal d1" data-i18n="man.body">Votre cuisine est excellente. Votre salle est pleine. <em>Et pourtant</em>, chaque publication repart de zéro — parce que personne chez vous ne sait ce que votre lieu raconte. Pendant ce temps, à trois rues d'ici, une adresse deux fois moins bonne que la vôtre affiche complet tous les soirs. Elle ne cuisine pas mieux. <em>Elle se raconte mieux.</em></p>
<p class="reveal d2 man-second" data-i18n="man.body2">Vous n'avez pas un problème de contenu. Vous avez un problème de monde. Un restaurant est déjà une fiction — un décor, une heure, une lumière, un casting, des rituels. <em>Le vôtre n'a jamais été écrit.</em></p>
</div>
</section>
<!-- ============ LISEZ LE TRAVAIL ============ -->
<section class="section" id="documents">
<div class="wrap">
<div class="section-head reveal">
<span class="eyebrow" data-i18n="docs.eyebrow">Lisez le travail</span>
<h2 class="h-sec" data-i18n="docs.title" style="margin-top:1.1rem">Lisez le travail avant de le commander.</h2>
<p class="lead" data-i18n="docs.lead" style="margin-top:1.2rem">Deux documents publiés en entier, sans email à laisser.</p>
</div>
<div class="docs-grid reveal d1">
<a class="docs-card" href="__LANG__/documents/sillage"><span class="docs-name" data-i18n="docs.1.name">SILLAGE</span><span class="docs-sub" data-i18n="docs.1.sub">Logiciel de chantier</span><p data-i18n="docs.1.body">Une commande complète.</p><span class="docs-read" data-i18n="docs.read">Lire le document →</span></a>
<a class="docs-card" href="__LANG__/documents/verso"><span class="docs-name" data-i18n="docs.2.name">VERSO</span><span class="docs-sub" data-i18n="docs.2.sub">Reliure d'art</span><p data-i18n="docs.2.body">Un diagnostic écrit.</p><span class="docs-read" data-i18n="docs.read">Lire le document →</span></a>
</div>
</div>
</section>
<!-- ============ POUR QUI ============ -->
<section class="section">
<div class="wrap">
<div class="section-head reveal">
<span class="eyebrow" data-i18n="for.eyebrow">Pour qui</span>
<h2 class="h-sec" data-i18n="for.title" style="margin-top:1.1rem">Est-ce que c'est pour vous ?</h2>
</div>
<div class="for-grid reveal d1">
<div class="for-col for-yes"><div class="for-k" data-i18n="for.yesLabel">C'est pour vous si</div><ul>
<li data-i18n="for.yes.1">.</li><li data-i18n="for.yes.2">.</li><li data-i18n="for.yes.3">.</li></ul></div>
<div class="for-col for-no"><div class="for-k" data-i18n="for.noLabel">Ce n'est pas pour vous si</div><ul>
<li data-i18n="for.no.1">.</li><li data-i18n="for.no.2">.</li><li data-i18n="for.no.3">.</li></ul></div>
</div>
</div>
</section><!-- ============ CAS RÉELS ============ -->
<section class="section">
<style>
  /* Trois états au clic, en CSS pur — trois cases à cocher radio
     masquées par ligne, montrées/cachées via :checked, sans aucun
     script. La version précédente posait un <script> à l'intérieur du
     HTML injecté par dangerouslySetInnerHTML : un script inséré de cette
     façon ne s'exécute jamais, sur aucun navigateur, sur aucune des
     quatre pages — pas seulement sur trois d'entre elles. */
  .case-radio{ position:absolute; opacity:0; width:1px; height:1px; pointer-events:none; }
  .case-tab{
    font-family:var(--mono); font-size:.66rem; letter-spacing:.1em; text-transform:uppercase;
    padding:.55rem 1rem; border-radius:100px; color:var(--smoke-dim);
    cursor:pointer; transition:background .3s, color .3s; white-space:nowrap; user-select:none;
  }
  .case-radio:focus-visible + label{ outline:2px solid var(--coral); outline-offset:2px; }
  #case1-norm:checked ~ .case-toggle label[for="case1-norm"],
  #case1-refuse:checked ~ .case-toggle label[for="case1-refuse"],
  #case1-result:checked ~ .case-toggle label[for="case1-result"],
  #case2-norm:checked ~ .case-toggle label[for="case2-norm"],
  #case2-refuse:checked ~ .case-toggle label[for="case2-refuse"],
  #case2-result:checked ~ .case-toggle label[for="case2-result"],
  #case3-norm:checked ~ .case-toggle label[for="case3-norm"],
  #case3-refuse:checked ~ .case-toggle label[for="case3-refuse"],
  #case3-result:checked ~ .case-toggle label[for="case3-result"]{ background:var(--coral); color:#0a0a0a; }
  .case-pane-wrap{ position:relative; min-height:4.6em; }
  .case-pane{ position:absolute; inset:0; opacity:0; pointer-events:none; transition:opacity .4s var(--ease); }
  #case1-norm:checked ~ .case-pane-wrap .case-pane[data-pane="norm"],
  #case1-refuse:checked ~ .case-pane-wrap .case-pane[data-pane="refuse"],
  #case1-result:checked ~ .case-pane-wrap .case-pane[data-pane="result"],
  #case2-norm:checked ~ .case-pane-wrap .case-pane[data-pane="norm"],
  #case2-refuse:checked ~ .case-pane-wrap .case-pane[data-pane="refuse"],
  #case2-result:checked ~ .case-pane-wrap .case-pane[data-pane="result"],
  #case3-norm:checked ~ .case-pane-wrap .case-pane[data-pane="norm"],
  #case3-refuse:checked ~ .case-pane-wrap .case-pane[data-pane="refuse"],
  #case3-result:checked ~ .case-pane-wrap .case-pane[data-pane="result"]{ opacity:1; pointer-events:auto; position:relative; }
</style>
<div class="wrap">
<div class="section-head reveal">
<span class="eyebrow" data-i18n="case.eyebrow">Ce que ça donne, ailleurs</span>
<h2 class="h-sec" data-i18n="case.title" style="margin-top:1.1rem">Trois maisons qui ont tranché.</h2>
<p class="lead" data-i18n="case.lead" style="margin-top:1.2rem">Aucune n'a été construite par nous. Toutes les trois ont fait, à leur échelle, ce que cette Architecture fait à la vôtre.</p>
</div>
<div style="display:grid; gap:0">
<div class="case-row reveal" style="padding:2.8rem 0; border-top:1px solid var(--line-soft)">
<div style="display:flex; align-items:baseline; gap:.8rem; margin-bottom:1.6rem">
<span style="font-family:var(--display); font-weight:700; font-size:1.05rem; color:var(--coral)">01</span>
<span style="font-family:var(--mono); font-size:.72rem; letter-spacing:.22em; text-transform:uppercase; color:var(--smoke-dim)" data-i18n="case.1.name">Maison</span>
</div>
<!-- Trois cases à cocher radio, masquées, qui pilotent l'affichage par
     CSS pur (:checked + sélecteur général) : aucun script à exécuter,
     donc aucun risque qu'il ne s'exécute pas. -->
<input type="radio" name="case1" id="case1-norm" class="case-radio" checked>
<input type="radio" name="case1" id="case1-refuse" class="case-radio">
<input type="radio" name="case1" id="case1-result" class="case-radio">
<div class="case-toggle" role="tablist" style="display:inline-flex; flex-wrap:wrap; gap:.2rem; border:1px solid var(--line-soft); border-radius:100px; padding:3px; margin-bottom:1.8rem">
<label for="case1-norm" class="case-tab" data-i18n="case.normLabel">Ce que fait le secteur</label>
<label for="case1-refuse" class="case-tab" data-i18n="case.refuseLabel">Ce qu'elle a fait</label>
<label for="case1-result" class="case-tab" data-i18n="case.resultLabel">Ce que ça a donné</label>
</div>
<div class="case-pane-wrap">
<p class="case-pane" data-pane="norm" style="margin:0; max-width:62ch; font-family:var(--body); font-size:1.05rem; color:var(--smoke-dim); line-height:1.75; font-style:italic" data-i18n="case.1.norm">La norme du secteur.</p>
<p class="case-pane" data-pane="refuse" style="margin:0; max-width:62ch; font-family:var(--display); font-weight:600; font-size:1.15rem; color:var(--cream); line-height:1.6" data-i18n="case.1.refuse">Ce qui a été refusé.</p>
<p class="case-pane" data-pane="result" style="margin:0; max-width:62ch; font-family:var(--display); font-weight:700; font-size:1.15rem; color:var(--iris-soft); line-height:1.5" data-i18n="case.1.body">L'effet qui dure.</p>
</div>
</div>
<div class="case-row reveal" style="padding:2.8rem 0; border-top:1px solid var(--line-soft)">
<div style="display:flex; align-items:baseline; gap:.8rem; margin-bottom:1.6rem">
<span style="font-family:var(--display); font-weight:700; font-size:1.05rem; color:var(--coral)">02</span>
<span style="font-family:var(--mono); font-size:.72rem; letter-spacing:.22em; text-transform:uppercase; color:var(--smoke-dim)" data-i18n="case.2.name">Maison</span>
</div>
<!-- Trois cases à cocher radio, masquées, qui pilotent l'affichage par
     CSS pur (:checked + sélecteur général) : aucun script à exécuter,
     donc aucun risque qu'il ne s'exécute pas. -->
<input type="radio" name="case2" id="case2-norm" class="case-radio" checked>
<input type="radio" name="case2" id="case2-refuse" class="case-radio">
<input type="radio" name="case2" id="case2-result" class="case-radio">
<div class="case-toggle" role="tablist" style="display:inline-flex; flex-wrap:wrap; gap:.2rem; border:1px solid var(--line-soft); border-radius:100px; padding:3px; margin-bottom:1.8rem">
<label for="case2-norm" class="case-tab" data-i18n="case.normLabel">Ce que fait le secteur</label>
<label for="case2-refuse" class="case-tab" data-i18n="case.refuseLabel">Ce qu'elle a fait</label>
<label for="case2-result" class="case-tab" data-i18n="case.resultLabel">Ce que ça a donné</label>
</div>
<div class="case-pane-wrap">
<p class="case-pane" data-pane="norm" style="margin:0; max-width:62ch; font-family:var(--body); font-size:1.05rem; color:var(--smoke-dim); line-height:1.75; font-style:italic" data-i18n="case.2.norm">La norme du secteur.</p>
<p class="case-pane" data-pane="refuse" style="margin:0; max-width:62ch; font-family:var(--display); font-weight:600; font-size:1.15rem; color:var(--cream); line-height:1.6" data-i18n="case.2.refuse">Ce qui a été refusé.</p>
<p class="case-pane" data-pane="result" style="margin:0; max-width:62ch; font-family:var(--display); font-weight:700; font-size:1.15rem; color:var(--iris-soft); line-height:1.5" data-i18n="case.2.body">L'effet qui dure.</p>
</div>
</div>
<div class="case-row reveal" style="padding:2.8rem 0; border-top:1px solid var(--line-soft); border-bottom:1px solid var(--line-soft)">
<div style="display:flex; align-items:baseline; gap:.8rem; margin-bottom:1.6rem">
<span style="font-family:var(--display); font-weight:700; font-size:1.05rem; color:var(--coral)">03</span>
<span style="font-family:var(--mono); font-size:.72rem; letter-spacing:.22em; text-transform:uppercase; color:var(--smoke-dim)" data-i18n="case.3.name">Maison</span>
</div>
<!-- Trois cases à cocher radio, masquées, qui pilotent l'affichage par
     CSS pur (:checked + sélecteur général) : aucun script à exécuter,
     donc aucun risque qu'il ne s'exécute pas. -->
<input type="radio" name="case3" id="case3-norm" class="case-radio" checked>
<input type="radio" name="case3" id="case3-refuse" class="case-radio">
<input type="radio" name="case3" id="case3-result" class="case-radio">
<div class="case-toggle" role="tablist" style="display:inline-flex; flex-wrap:wrap; gap:.2rem; border:1px solid var(--line-soft); border-radius:100px; padding:3px; margin-bottom:1.8rem">
<label for="case3-norm" class="case-tab" data-i18n="case.normLabel">Ce que fait le secteur</label>
<label for="case3-refuse" class="case-tab" data-i18n="case.refuseLabel">Ce qu'elle a fait</label>
<label for="case3-result" class="case-tab" data-i18n="case.resultLabel">Ce que ça a donné</label>
</div>
<div class="case-pane-wrap">
<p class="case-pane" data-pane="norm" style="margin:0; max-width:62ch; font-family:var(--body); font-size:1.05rem; color:var(--smoke-dim); line-height:1.75; font-style:italic" data-i18n="case.3.norm">La norme du secteur.</p>
<p class="case-pane" data-pane="refuse" style="margin:0; max-width:62ch; font-family:var(--display); font-weight:600; font-size:1.15rem; color:var(--cream); line-height:1.6" data-i18n="case.3.refuse">Ce qui a été refusé.</p>
<p class="case-pane" data-pane="result" style="margin:0; max-width:62ch; font-family:var(--display); font-weight:700; font-size:1.15rem; color:var(--iris-soft); line-height:1.5" data-i18n="case.3.body">L'effet qui dure.</p>
</div>
</div>
</div>
</div>
</section>

<!-- ============ STATS ============ -->
<section class="section">
<div class="wrap stats">
<div class="stat card tilt reveal"><span class="num">01</span><div class="v" data-i18n="stat.1.v">40+</div><div class="l" data-i18n="stat.1.l">Supports dépouillés, de votre site à vos avis clients</div></div>
<div class="stat card tilt reveal d1"><span class="num">02</span><div class="v" data-i18n="stat.2.v">3–5</div><div class="l" data-i18n="stat.2.l">Scripts prêts à tourner</div></div>
<div class="stat card tilt reveal d2"><span class="num">03</span><div class="v" data-i18n="stat.3.v">∞</div><div class="l" data-i18n="stat.3.l">Réutilisable par vos équipes comme par votre outil IA</div></div>
</div>
</section>

<!-- ============ QUI ÉCRIT ============ -->

<hr class="rule"/>
<!-- ============ WORK TEASER ============ -->
<section class="section" style="padding-top:2.5rem; padding-bottom:3rem">
<div class="wrap" style="text-align:center">
<p data-i18n="tour.out" style="font-family:var(--display); font-weight:600; font-size:clamp(1.4rem,3.5vw,2.2rem); color:var(--cream)">Tout ça existe déjà chez vous. Il faut juste l'écrire.</p>
</div>
</section>
<!-- ============ L'OFFRE ============ -->
<section class="section offer" id="offre">
<div class="wrap">
<div class="section-head reveal">
<span class="eyebrow" data-i18n="offer.eyebrow">L'offre</span>
<h2 class="h-sec" data-i18n="offer.title" style="margin-top:1.1rem">Une offre. Un prix. Une date de livraison.</h2>
</div>
<div class="offer-grid reveal d1">
<div class="offer-card">
<div class="offer-name" data-i18n="offer.name">L'Architecture Narrative</div>
<div class="offer-price" data-i18n="offer.price">2 900 €</div>
<p class="offer-desc" data-i18n="offer.desc">Un document écrit pour vous, livré en trois semaines, à vous pour toujours.</p>
<a class="btn btn-primary" href="https://buy.stripe.com/eVq7sEb2AfDe8Am2Raf7i0g" target="_blank" rel="noopener"><span data-i18n="offer.btn">Commander · 2 900 €</span><span class="arr">→</span></a>
<p class="offer-note" data-i18n="offer.note">Paiement sécurisé par Stripe.</p>
</div>
<div class="offer-steps-wrap">
<div class="offer-steps-title" data-i18n="offer.stepsTitle">Après le paiement</div>
<ol class="offer-steps">
<li><span class="os-k" data-i18n="offer.s1.k">.</span><div><b data-i18n="offer.s1.t">.</b><span data-i18n="offer.s1.d">.</span></div></li>
<li><span class="os-k" data-i18n="offer.s2.k">.</span><div><b data-i18n="offer.s2.t">.</b><span data-i18n="offer.s2.d">.</span></div></li>
<li><span class="os-k" data-i18n="offer.s3.k">.</span><div><b data-i18n="offer.s3.t">.</b><span data-i18n="offer.s3.d">.</span></div></li>
<li><span class="os-k" data-i18n="offer.s4.k">.</span><div><b data-i18n="offer.s4.t">.</b><span data-i18n="offer.s4.d">.</span></div></li>
</ol>
</div>
</div>
<div class="guar-grid reveal d2">
<div class="guar"><b data-i18n="guar.1.t">.</b><p data-i18n="guar.1.d">.</p></div>
<div class="guar"><b data-i18n="guar.2.t">.</b><p data-i18n="guar.2.d">.</p></div>
<div class="guar"><b data-i18n="guar.3.t">.</b><p data-i18n="guar.3.d">.</p></div>
</div>
</div>
</section>
<!-- ============ CTA BAND ============ -->
<section class="section">
<div class="wrap">
<div class="section-head reveal">
<span class="eyebrow" data-i18n="faq.eyebrow">Questions fréquentes</span>
<h2 class="h-sec" data-i18n="faq.title">Ce que les gérants nous demandent.</h2>
</div>
<div class="faq reveal d1">
<div class="faq-item"><button aria-expanded="false" class="faq-q"><span data-i18n="faq.1.q">.</span><span class="pm">+</span></button><div class="faq-a"><div><p data-i18n="faq.1.a">.</p></div></div></div>
<div class="faq-item"><button aria-expanded="false" class="faq-q"><span data-i18n="faq.2.q">.</span><span class="pm">+</span></button><div class="faq-a"><div><p data-i18n="faq.2.a">.</p></div></div></div>
<div class="faq-item"><button aria-expanded="false" class="faq-q"><span data-i18n="faq.3.q">.</span><span class="pm">+</span></button><div class="faq-a"><div><p data-i18n="faq.3.a">.</p></div></div></div>
<div class="faq-item"><button aria-expanded="false" class="faq-q"><span data-i18n="faq.4.q">.</span><span class="pm">+</span></button><div class="faq-a"><div><p data-i18n="faq.4.a">.</p></div></div></div>
<div class="faq-item"><button aria-expanded="false" class="faq-q"><span data-i18n="faq.5.q">.</span><span class="pm">+</span></button><div class="faq-a"><div><p data-i18n="faq.5.a">.</p></div></div></div>
<div class="faq-item"><button aria-expanded="false" class="faq-q"><span data-i18n="faq.6.q">.</span><span class="pm">+</span></button><div class="faq-a"><div><p data-i18n="faq.6.a">.</p></div></div></div>
<div class="faq-item"><button aria-expanded="false" class="faq-q"><span data-i18n="faq.7.q">.</span><span class="pm">+</span></button><div class="faq-a"><div><p data-i18n="faq.7.a">.</p></div></div></div>
<div class="faq-item"><button aria-expanded="false" class="faq-q"><span data-i18n="faq.8.q">.</span><span class="pm">+</span></button><div class="faq-a"><div><p data-i18n="faq.8.a">.</p></div></div></div>
</div>
</div>
</section><section class="section">
<div class="wrap">
<div class="cta-band wipe">
<span class="eyebrow" data-i18n="cta.eyebrow">L'architecture narrative</span>
<h2 data-i18n="cta.title" style="margin-top:1rem">Racontez-moi votre lieu.</h2>
<p class="lead" data-i18n="cta.lead">2 900 €, livré sous trois semaines. Vingt à trente pages écrites à la main, à vous pour toujours.</p>
<a class="btn btn-primary" href="https://buy.stripe.com/eVq7sEb2AfDe8Am2Raf7i0g" target="_blank" rel="noopener"><span data-i18n="cta.btn">Commander l'architecture</span><span class="arr">→</span></a>
<p class="cta-note" data-i18n="cta.note">.</p>
</div>
</div>
</section>
`

/**
 * Les quatre terrains, dans l'ordre où ils apparaissent partout ailleurs.
 * La page courante est exclue au rendu — on ne se propose pas à soi-même.
 */
export const TERRAINS = [
  { slug: "marques-entreprises", name: "BRAND", fr: "Marques & entreprises", en: "Brands & companies" },
  { slug: "the-product", name: "THE PRODUCT", fr: "Produits", en: "Products" },
  { slug: "the-room", name: "THE ROOM", fr: "Lieux", en: "Venues" },
  { slug: "the-name", name: "THE NAME", fr: "Artistes & fondateurs", en: "Artists & founders" },
] as const

export type TerrainCopy = {
  /** Le terrain courant, pour l'exclure des liens croisés en bas de page. */
  slug: string
  /** Le nom géant du hero. */
  wordmark: string
  /** Surcharges de texte, par clé data-i18n, et par langue. */
  fr: Record<string, string>
  en: Record<string, string>
}

const BAR = {"fr": {"name": "Architecture Narrative · 2 900 €", "sub": "Jour 21 ou remboursé", "btn": "Commander"}, "en": {"name": "Narrative Architecture · €2,900", "sub": "Day 21 or refunded", "btn": "Order"}}
const MIXED = {"fr": "Une marque et un produit ? Même méthode, même prix, une seule commande : commencez par le terrain qui porte le plus de chiffre, et dites-nous le reste dans le questionnaire.", "en": "A brand and a product? Same method, same price, one order: start with the ground that carries the most revenue, and tell us the rest in the questionnaire."}
const STRIPE_URL = "https://buy.stripe.com/eVq7sEb2AfDe8Am2Raf7i0g"

/**
 * La barre d'achat vit dans son propre composant, et c'est voulu : son état
 * change à chaque défilement. Si cet état vivait dans TerrainPage, chaque
 * changement re-rendrait la page, et React réécrirait alors le HTML injecté
 * (dangerouslySetInnerHTML) : les textes traduits, les révélations déjà
 * jouées et l'accordéon repartiraient de zéro.
 */
function BuyBar({ lang }: { lang: string }) {
  const bar = BAR[lang === "en" ? "en" : "fr"]

  // La barre d'achat : visible une fois le hero passé, masquée quand l'offre
  // ou le bandeau final sont à l'écran (le bouton y est déjà). Mesure à chaque
  // défilement, coalescée par image ; seul l'opacité et la position sont animées.
  const [showBar, setShowBar] = useState(false)
  useEffect(() => {
    let raf = 0
    const measure = () => {
      raf = 0
      const vh = window.innerHeight
      const hero = document.querySelector(".hero")?.getBoundingClientRect()
      const past = !!hero && hero.bottom < vh * 0.15
      const inView = (sel: string) => {
        const r = document.querySelector(sel)?.getBoundingClientRect()
        return !!r && r.top < vh * 0.9 && r.bottom > vh * 0.1
      }
      setShowBar(past && !inView(".offer") && !inView(".cta-band"))
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(measure) }
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    const t = window.setTimeout(measure, 600)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      window.clearTimeout(t)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
  return (
    <div className={`buybar${showBar ? " on" : ""}`} aria-hidden={!showBar}>
      <div className="buybar-txt">
        <b>{bar.name}</b>
        <span>{bar.sub}</span>
      </div>
      <a className="btn btn-primary buybar-btn" href={STRIPE_URL} target="_blank" rel="noopener" tabIndex={showBar ? 0 : -1}>
        <span>{bar.btn}</span>
        <span className="arr">→</span>
      </a>
    </div>
  )
}

export function TerrainPage({ copy }: { copy: TerrainCopy }) {
  const { lang } = useLang()

  useEffect(() => {
    const srcs = ["/nocta/config.js", "/nocta/i18n.js", "/nocta/app.js"]
    const added: HTMLScriptElement[] = []
    let cancelled = false

    // Les surcharges sont fusionnées dans le dictionnaire dès qu'il existe,
    // puis on redemande l'application : sans ce second passage, i18n.js a
    // déjà posé les textes de THE ROOM avant que nos clés arrivent.
    const applyOverrides = () => {
      const api = (window as unknown as { NOCTA_I18N?: { DICT: Record<string, Record<string, string>>; apply: (l: string) => void; getLang: () => string } }).NOCTA_I18N
      if (!api) return false
      Object.assign(api.DICT.fr ?? {}, copy.fr)
      Object.assign(api.DICT.en ?? {}, copy.en)
      // La langue de l'ADRESSE décide : i18n.js ne connaît que la dernière langue
      // enregistrée dans le navigateur (« fr » par défaut), si bien qu'une
      // personne qui ouvrait /en/... voyait la page entière en français.
      api.apply(lang)
      return true
    }

    const loadNext = (i: number) => {
      if (cancelled || i >= srcs.length) {
        if (!cancelled) {
          // Deux tentatives : la première juste après le chargement, la
          // seconde en filet si app.js a reposé des textes entre-temps.
          if (!applyOverrides()) window.setTimeout(applyOverrides, 120)
          else window.setTimeout(applyOverrides, 250)
        }
        return
      }
      const s = document.createElement("script")
      s.src = srcs[i]
      s.defer = true
      s.onload = () => loadNext(i + 1)
      s.onerror = () => loadNext(i + 1)
      document.body.appendChild(s)
      added.push(s)
    }
    loadNext(0)

    return () => {
      cancelled = true
      added.forEach((s) => s.remove())
    }
  }, [copy, lang])

  const html = TERRAIN_HTML.split("__LANG__").join(`/${lang}`).replace(
    /<h1 class="wordmark flicker">[^<]*<\/h1>/,
    `<h1 class="wordmark flicker">${copy.wordmark}</h1>`,
  )

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Hanken+Grotesk:wght@400;500;600;700&family=Instrument+Serif:ital@1&family=Space+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="/nocta/styles.css" />

      {/* Le nom du studio, seul et cliquable.
          La barre complète du site ne tient pas ici : ces pages ont leur
          propre grille, et le menu débordait en poussant le bouton d'achat
          hors de l'écran. Un logo qui ramène à l'accueil suffit : ces pages
          mènent déjà vers l'Architecture par les deux boutons du hero et par la
          carte de prix. */}
      <a
        href={`/${lang}`}
        style={{
          position: "fixed",
          top: "25px",
          left: "clamp(20px,5vw,64px)",
          zIndex: 130,
          fontFamily: "var(--display)",
          fontWeight: 700,
          // 22px et -0.02em : les valeurs exactes du logo de la barre
          // de navigation du site. Un même nom affiché à deux tailles
          // selon la page se remarque immédiatement.
          fontSize: "22px",
          letterSpacing: "-0.02em",
          color: "#ff2233",
          textDecoration: "none",
        }}
      >
        STRAWBERRY PROD.
      </a>

      {/* Le retour à l'accueil, comme sur les autres pages intérieures.
          Il vit hors du HTML injecté : celui-ci vient du site NOCTA, qui
          n'avait pas de page mère. Posé ici, il bénéficie de LocaleLink,
          donc il garde la langue — ce qu'un lien écrit dans le HTML brut
          ne ferait pas. */}
      <main id="main">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>

      {/* Les autres terrains.
          Chaque page était un cul-de-sac : on y arrivait, on lisait, on
          partait vers l'Architecture. Quelqu'un qui a une marque *et* un produit —
          le cas le plus courant — n'avait aucun moyen de passer de l'une à
          l'autre. Ces liens sont volontairement discrets : ils servent
          celui qui hésite, sans détourner celui qui est au bon endroit. */}
      <BuyBar lang={lang} />

      <section className="terrain-cross">
        <div className="wrap">
          <div className="terrain-cross-label">
            {lang === "en" ? "The same Architecture, on another ground" : "La même Architecture, sur un autre terrain"}
          </div>
          <p className="terrain-cross-mixed">{MIXED[lang === "en" ? "en" : "fr"]}</p>
          <div className="terrain-cross-links">
            {TERRAINS.filter((x) => x.slug !== copy.slug).map((x) => (
              <a key={x.slug} href={`/${lang}/${x.slug}`}>
                <b>{x.name}</b>
                <span>{lang === "en" ? x.en : x.fr}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
