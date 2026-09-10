"use client"

import { useEffect } from "react"
import { useLang } from "@/lib/i18n"

/**
 * THE ROOM — la porte « lieux » du site, le site NOCTA porté tel quel.
 *
 * Ce fichier ne réimplémente rien. Il injecte le HTML d'origine de la home
 * NOCTA et charge ses propres fichiers, copiés sans modification dans
 * `public/nocta/` : `styles.css` (40 Ko), `app.js` (le canvas bokeh, le
 * révélateur mot à mot du manifeste, les compteurs, le parcours épinglé,
 * le comparateur, l'accordéon de la FAQ), `i18n.js` et `config.js`.
 *
 * Pourquoi ainsi plutôt qu'en composants React : les tentatives précédentes
 * réécrivaient le design à la main et en perdaient une partie à chaque fois
 * — sections oubliées, animations approximées, textes reformulés. Porter
 * les fichiers d'origine est la seule façon d'avoir exactement le site, y
 * compris les animations que personne n'irait réimplémenter à l'identique.
 *
 * Seules modifications au HTML : le wordmark NOCTA devient THE ROOM, et le
 * formulaire de contact est retiré (la page renvoie vers celui du studio).
 *
 * Le CSS de NOCTA redéfinit body et html ; il n'est chargé que sur cette
 * route, jamais globalement, pour ne pas déteindre sur le reste du site.
 */

const NOCTA_HTML = `<canvas class="bokeh-fixed" id="bokeh"></canvas><div aria-hidden="true" class="ambient"></div><div aria-hidden="true" class="letterbox lb-top"></div><div aria-hidden="true" class="letterbox lb-bot"></div>
<!-- ============ HERO ============ -->
<section class="hero">
<div class="hero-fallback"></div>
<div class="hero-scrim"></div>
<div class="wrap">
<span class="hero-kicker eyebrow"><span class="dot"></span><span data-i18n="hero.kicker">Sprint d'écriture · Paris &amp; Île-de-France</span></span>
<h1 class="wordmark flicker">THE ROOM</h1>
<p class="hero-tag" data-i18n="hero.tag">Votre lieu est déjà une histoire.<br/><b>Personne ne l'a écrite.</b></p>
<div class="hero-cta">
<a class="btn btn-primary" href="__LANG__/#contact"><span data-i18n="hero.cta1">Prendre contact</span><span class="arr">→</span></a>
<a class="btn btn-ghost" data-i18n="hero.cta2" href="#prestations">Comment ça se passe</a>
</div>
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
<p class="reveal d2" data-i18n="man.body2" style="margin-top:1.6rem">Vous n'avez pas un problème de contenu. Vous avez un problème de monde. Un restaurant est déjà une fiction — un décor, une heure, une lumière, un casting, des rituels. <em>Le vôtre n'a jamais été écrit.</em></p>
</div>
</section><section class="story-section section" id="prestations">
<div class="story-pin"><div class="story-sticky"><div class="wrap story">
<div class="section-head reveal" style="margin-bottom:0">
<div class="story-head">
<div>
<span class="eyebrow" data-i18n="st.eyebrow">Le sprint</span>
<h2 class="h-sec" data-i18n="st.title" style="margin-top:1.1rem">Deux à trois semaines, cinq étapes.</h2>
</div>
<div aria-hidden="true" class="story-counter"><span class="sc-cur">01</span><span class="sc-sep">/</span><span class="sc-tot">05</span></div><span class="story-hint"><span data-i18n="st.hint">Faites glisser</span><span aria-hidden="true" class="sw">→</span></span>
</div>
</div>
<div class="story-track">
<article class="chapter"><svg aria-hidden="true" class="art" viewbox="0 0 120 120">
<circle class="st" cx="52" cy="52" r="22"></circle>
<path class="st" d="M68 68 L92 92"></path>
<path class="st2" d="M40 52 h24 M52 40 v24" opacity=".45"></path>
<circle class="fl2" cx="98" cy="30" r="3.5"></circle>
<circle class="fl" cx="22" cy="88" r="3"></circle>
</svg><span class="idx" data-i18n="st.1.i">01</span><h3 data-i18n="st.1.t">Je viens chez vous.</h3><p data-i18n="st.1.d">Un service entier, à observer. Qui parle à qui, ce que les habitués commandent sans regarder la carte, ce que votre équipe répète sans s'en rendre compte. La matière est déjà là.</p>
<ul class="ch-list">
<li data-i18n="st.1.b1">Immersion pendant un service complet</li>
<li data-i18n="st.1.b2">Entretien avec vous et deux personnes de l'équipe</li>
</ul></article>
<article class="chapter"><svg aria-hidden="true" class="art" viewbox="0 0 120 120">
<rect class="st2" height="72" rx="7" width="56" x="22" y="24"></rect>
<line class="st" x1="34" x2="70" y1="42" y2="42"></line>
<line class="st2" opacity=".5" x1="34" x2="66" y1="54" y2="54"></line>
<line class="st2" opacity=".35" x1="34" x2="58" y1="64" y2="64"></line>
<path class="st" d="M78 78 l18 -18 a5 5 0 0 0 -7 -7 l-18 18 z"></path>
<path class="fl" d="M71 71 l-4 11 11 -4 z"></path>
</svg><span class="idx" data-i18n="st.2.i">02</span><h3 data-i18n="st.2.t">J'écris votre monde.</h3><p data-i18n="st.2.d">Ce que votre lieu promet en une phrase. Son heure, sa lumière, son atmosphère. Son casting — vous, le barman, les habitués, et le plat signature traité comme un personnage. Ses rituels.</p>
<ul class="ch-list">
<li data-i18n="st.2.b1">La promesse du lieu, en une phrase qui tient</li>
<li data-i18n="st.2.b2">Décor, heure, lumière, atmosphère</li>
<li data-i18n="st.2.b3">Casting et rituels de la maison</li>
</ul></article>
<article class="chapter"><svg aria-hidden="true" class="art" viewbox="0 0 120 120">
<path class="st2" d="M26 26 h68 v68 h-68 z"></path>
<line class="st" x1="26" x2="94" y1="46" y2="46"></line>
<line class="st2" opacity=".5" x1="46" x2="46" y1="46" y2="94"></line>
<circle class="fl" cx="36" cy="36" r="3"></circle>
<path class="st" d="M56 62 h28 M56 74 h20" opacity=".7"></path>
</svg><span class="idx" data-i18n="st.3.i">03</span><h3 data-i18n="st.3.t">Je pose la ligne et les mots.</h3><p data-i18n="st.3.d">Trois à cinq rubriques récurrentes, nommées, avec ce qu'elles cherchent à provoquer. Le vocabulaire de la maison : ce qu'on dit, ce qu'on ne dit jamais. Et tous vos textes permanents, écrits une bonne fois.</p>
<ul class="ch-list">
<li data-i18n="st.3.b1">3 à 5 rubriques récurrentes avec leur intention</li>
<li data-i18n="st.3.b2">Le vocabulaire : ce qu'on dit, ce qu'on ne dit jamais</li>
<li data-i18n="st.3.b3">Bio, fiche Google, menu, réponses-types aux avis</li>
</ul></article>
<article class="chapter"><svg aria-hidden="true" class="art" viewbox="0 0 120 120">
<rect class="st2" height="46" rx="6" width="66" x="20" y="48"></rect>
<path class="st" d="M20 60 h66"></path>
<path class="st2" d="M22 34 l60 -10 4 14 -60 10 z"></path>
<path class="fl" d="M38 27 l4 13 M54 24 l4 13 M70 21 l4 13" opacity=".7"></path>
<circle class="fl2" cx="96" cy="74" r="4"></circle>
</svg><span class="idx" data-i18n="st.4.i">04</span><h3 data-i18n="st.4.t">Je vous laisse le manuel.</h3><p data-i18n="st.4.d">Vingt à trente scripts prêts à l'emploi, écrits plan par plan pour être tournés au téléphone par n'importe qui en salle. Un calendrier sur quatre semaines qui tourne en boucle. Un protocole de captation pendant le service.</p>
<ul class="ch-list">
<li data-i18n="st.4.b1">20 à 30 scripts-types, plan par plan</li>
<li data-i18n="st.4.b2">Un calendrier sur 4 semaines, reconductible</li>
<li data-i18n="st.4.b3">Le protocole de captation pendant le service</li>
</ul></article>
<article class="chapter"><svg aria-hidden="true" class="art" viewbox="0 0 120 120">
<rect class="st2" height="60" rx="8" width="38" x="20" y="30"></rect>
<rect class="st" height="60" rx="8" width="38" x="62" y="30"></rect>
<path class="fl2" d="M81 48 l4 9 10 1 -7 7 2 10 -9 -5 -9 5 2 -10 -7 -7 10 -1 z"></path>
<line class="st2" opacity=".5" x1="28" x2="50" y1="50" y2="50"></line>
<line class="st2" opacity=".35" x1="28" x2="44" y1="60" y2="60"></line>
</svg><span class="idx" data-i18n="st.5.i">05</span><h3 data-i18n="st.5.t">Et je vous le prouve.</h3><p data-i18n="st.5.d">Avant de partir, je produis la première semaine de contenu moi-même. Pas pour vous rendre dépendant : pour que vous voyiez le système tourner une fois, en vrai, avant de le prendre en main.</p>
<ul class="ch-list">
<li data-i18n="st.5.b1">La première semaine de contenu, produite et livrée</li>
<li data-i18n="st.5.b2">Une passation avec la personne qui prendra le relais</li>
</ul></article>
</div>
<div class="story-nav">
<div class="story-dots"></div>
<div class="story-arrows">
<button aria-label="Précédent" class="story-arrow" data-story="prev">←</button>
<button aria-label="Suivant" class="story-arrow" data-story="next">→</button>
</div>
</div>
</div></div></div>
</section>
<!-- ============ FOCUS DEMO ============ -->
<section class="section">
<div class="wrap">
<div class="section-head reveal">
<span class="eyebrow" data-i18n="focus.eyebrow">La différence</span>
<h2 class="h-sec" data-i18n="focus.title">Publier, ou raconter.</h2>
<p class="lead" data-i18n="focus.lead" style="margin-top:1.2rem">Le même lieu, deux réalités. Prenez la poignée et tirez : à gauche on publie sans savoir quoi dire, à droite le monde est écrit et l'équipe le tient.</p>
</div>
<div class="cmp wipe">
<div class="cmp-base"><div aria-hidden="true" class="feed feed-bad"><span></span><span></span><span></span><span></span><span></span><span></span></div>
<span class="tag" data-i18n="focus.bad.tag">Un lieu qui publie</span>
<span class="big" data-i18n="focus.bad.big">Chaque post repart de zéro. Personne ne sait quoi filmer, ni quoi écrire dessous. On poste quand on y pense.</span>
</div>
<div class="cmp-over"><div aria-hidden="true" class="feed feed-good"><span></span><span></span><span></span><span></span><span></span><span></span></div>
<span class="tag" data-i18n="focus.good.tag">Un lieu qui se raconte</span>
<span class="big" data-i18n="focus.good.big">Le monde est écrit. N'importe qui en salle ouvre le manuel, prend un script et tourne. Tout se ressemble, sans se répéter.</span>
</div>
<div aria-label="Comparer" aria-valuemax="100" aria-valuemin="0" aria-valuenow="55" class="cmp-handle" role="slider" tabindex="0"></div>
<span class="cmp-hint" data-i18n="cmp.hint">Glissez pour comparer</span>
</div>
</div>
</section>
<hr class="rule"/>
<!-- ============ PILLARS ============ -->

<!-- ============ STEPS ============ -->

<!-- ============ STATS ============ -->
<section class="section">
<div class="wrap stats">
<div class="stat card tilt reveal"><span class="num">01</span><div class="v" data-i18n="stat.1.v">2–3</div><div class="l" data-i18n="stat.1.l">Semaines, puis c'est à vous</div></div>
<div class="stat card tilt reveal d1"><span class="num">02</span><div class="v" data-i18n="stat.2.v">20–30</div><div class="l" data-i18n="stat.2.l">Scripts prêts à tourner</div></div>
<div class="stat card tilt reveal d2"><span class="num">03</span><div class="v" data-i18n="stat.3.v">1</div><div class="l" data-i18n="stat.3.l">Seule personne sur votre lieu</div></div>
</div>
</section>

<!-- ============ PRIX / ARGUMENT CENTRAL ============ -->
<section class="section">
<div class="wrap">
<div class="section-head reveal">
<span class="eyebrow" data-i18n="price.eyebrow">Ce que ça coûte</span>
<h2 class="h-sec" data-i18n="price.title">Le même prix que pour tout le monde.</h2>
<p class="lead" data-i18n="price.lead" style="margin-top:1.2rem">Une agence facture 1 200 à 1 500 € par mois, aussi longtemps que vous la gardez. Le jour où vous arrêtez, il ne vous reste rien.</p>
</div>
<div class="grid cols-2" style="gap:1.1rem">
<article class="card reveal">
<span class="chip" data-i18n="price.a.tag">L'agence au mois</span>
<h3 data-i18n="price.a.t">1 200 – 1 500 € / mois</h3>
<p data-i18n="price.a.d">Elle exécute à votre place. Elle sait ce que votre lieu raconte, vous non. Au bout de deux ans : environ 30 000 € dépensés, et rien qui vous appartienne.</p>
</article>
<article class="card reveal d1">
<span class="chip" data-i18n="price.b.tag">L'audit narratif</span>
<h3 data-i18n="price.b.t">490 €, une fois</h3>
<p data-i18n="price.b.d">On lit votre lieu comme le fait votre quartier : ce qu'il raconte aujourd'hui, ce que les gens en retiennent, et les mouvements qui changent ça. Un document de vingt à trente pages, livré en sept jours. Le même audit que pour une marque, une entreprise ou une personne.</p>
<p style="margin-top:1.4rem"><a href="__LANG__/brand-narrative-audit" class="btn btn-primary" data-i18n="price.b.cta">Commander l'audit →</a></p>
</article>
</div>
<p class="lead reveal" data-i18n="price.after" style="margin-top:2.4rem; text-align:center">Ensuite, si vous voulez qu'on écrive le monde du lieu et qu'on livre le système qui permet à votre équipe de le tenir seule : le sprint, 2 500 à 3 500 €, deux à trois semaines.</p>
</div>
</section>

<!-- ============ QUI ÉCRIT ============ -->
<section class="section">
<div class="wrap">
<div class="grid cols-2" style="gap:clamp(2.5rem,6vw,5rem); align-items:start">
<div class="reveal">
<span class="eyebrow iris" data-i18n="who.eyebrow">Qui écrit</span>
<h2 class="h-sec" data-i18n="who.title" style="margin-top:1rem">Une seule personne sur votre lieu.</h2>
</div>
<div class="reveal d1">
<p class="lead" data-i18n="who.body">Réalisateur et compositeur, je dirige Strawberry Production. J'ai écrit <em>30 Architectures — An Atlas of Narrative Patterns</em> et l'essai <em>Le Narratif de Marque à l'Ère de l'IA</em>, et je construis l'univers transmédia Sinbury depuis 2024.</p>
<p class="muted" data-i18n="who.body2" style="margin-top:1.4rem">Pas d'équipe, pas de sous-traitance, pas d'intermédiaire. La personne qui observe votre service est celle qui écrit, et celle qui vous répond.</p>
</div>
</div>
</div>
</section>
<hr class="rule"/>
<!-- ============ PRICING TEASER ============ -->
<!-- ============ WORK TEASER ============ -->
<section class="section" style="padding-bottom:1rem">
<div class="wrap">
<div class="section-head reveal" style="margin-bottom:0">
<div class="story-head">
<div>
<span class="eyebrow iris" data-i18n="tour.eyebrow">La tournée</span>
<h2 class="h-sec" data-i18n="tour.title" style="margin-top:1.1rem">Ce qu'on trouve quand un lieu est écrit.</h2>
</div>
<span class="story-hint"><span data-i18n="tour.hint">Continuez à défiler</span><span aria-hidden="true" class="sw" style="display:inline-block;transform:rotate(90deg)">→</span></span>
</div>
</div>
</div>
</section><section class="tour-pin">
<div class="tour-sticky">
<div class="tour-scene ts-1">
<div class="ts-bg"></div>
<div class="wrap ts-inner">
<span class="ts-k" data-i18n="work.r1.k">Restaurant</span>
<h3 class="ts-t" data-i18n="work.r1.t">L'heure dorée</h3>
<p class="ts-line" data-i18n="tour.1.line">19h30. L'heure dorée traverse la salle — le plat du soir part en story avant le premier couvert.</p>
<ul class="ts-list">
<li><b data-i18n="tour.1.f1">L'heure</b><span data-i18n="tour.1.d1">19h30 — le moment exact où la salle bascule et où la lumière devient l'atout du lieu</span></li>
<li><b data-i18n="tour.1.f2">La lumière</b><span data-i18n="tour.1.d2">Dorée, rasante, qui traverse la vitrine et pose une ombre sur les tables du fond</span></li>
<li><b data-i18n="tour.1.f3">Le casting</b><span data-i18n="tour.1.d3">Le chef qui ne sort jamais, la serveuse qui connaît les prénoms, le plat qu'on ne retire jamais de la carte</span></li>
<li><b data-i18n="tour.1.f4">Les rituels</b><span data-i18n="tour.1.d4">L'ardoise réécrite chaque matin, la table 6 qu'on garde toujours pour les habitués</span></li>
</ul>
<span class="ts-num">01 — 04</span>
</div>
</div>
<div class="tour-scene ts-2">
<div class="ts-bg"></div>
<div class="wrap ts-inner">
<span class="ts-k" data-i18n="work.r2.k">Cocktail bar</span>
<h3 class="ts-t" data-i18n="work.r2.t">Après minuit</h3>
<p class="ts-line" data-i18n="tour.2.line">23h50. Le shaker claque, les néons vibrent — le reel de la signature tourne déjà.</p>
<ul class="ts-list">
<li><b data-i18n="tour.2.f1">L'heure</b><span data-i18n="tour.2.d1">23h50 — quand la salle a fini de se remplir et que le bar devient la scène</span></li>
<li><b data-i18n="tour.2.f2">La lumière</b><span data-i18n="tour.2.d2">Néon froid sur les bouteilles, tout le reste dans le noir, les visages qui apparaissent par intermittence</span></li>
<li><b data-i18n="tour.2.f3">Le casting</b><span data-i18n="tour.2.d3">Le barman qui ne demande jamais ce que vous voulez, le cocktail qui porte le nom de la rue</span></li>
<li><b data-i18n="tour.2.f4">Les rituels</b><span data-i18n="tour.2.d4">La carte qui change à chaque saison, le dernier verre servi toujours de la même façon</span></li>
</ul>
<span class="ts-num">02 — 04</span>
</div>
</div>
<div class="tour-scene ts-3">
<div class="ts-bg"></div>
<div class="wrap ts-inner">
<span class="ts-k" data-i18n="work.r3.k">Club</span>
<h3 class="ts-t" data-i18n="work.r3.t">Le sous-sol</h3>
<p class="ts-line" data-i18n="tour.3.line">2h10. La basse fait trembler le plafond — demain, la file d'attente aura vu la vidéo.</p>
<ul class="ts-list">
<li><b data-i18n="tour.3.f1">L'heure</b><span data-i18n="tour.3.d1">2h10 — le point de bascule où la soirée cesse d'être une sortie et devient un souvenir</span></li>
<li><b data-i18n="tour.3.f2">La lumière</b><span data-i18n="tour.3.d2">Stroboscopique, rouge, jamais assez pour reconnaître un visage à trois mètres</span></li>
<li><b data-i18n="tour.3.f3">Le casting</b><span data-i18n="tour.3.d3">Le résident du samedi, le videur qui laisse passer d'un signe, la file qui fait partie du décor</span></li>
<li><b data-i18n="tour.3.f4">Les rituels</b><span data-i18n="tour.3.d4">Le morceau qu'on passe toujours en dernier, la salle du fond qu'on n'ouvre qu'à certaines heures</span></li>
</ul>
<span class="ts-num">03 — 04</span>
</div>
</div>
<div class="tour-scene ts-4">
<div class="ts-bg"></div>
<div class="wrap ts-inner">
<span class="ts-k" data-i18n="work.r4.k">Coffee shop</span>
<h3 class="ts-t" data-i18n="work.r4.t">Lumière du matin</h3>
<p class="ts-line" data-i18n="tour.4.line">8h05. Latte art, lumière douce — le quartier sait déjà où prendre son premier café.</p>
<ul class="ts-list">
<li><b data-i18n="tour.4.f1">L'heure</b><span data-i18n="tour.4.d1">8h05 — le premier café du quartier, avant que la ville se réveille vraiment</span></li>
<li><b data-i18n="tour.4.f2">La lumière</b><span data-i18n="tour.4.d2">Blanche et douce, la vapeur qui monte, la buée sur la vitre en hiver</span></li>
<li><b data-i18n="tour.4.f3">Le casting</b><span data-i18n="tour.4.d3">Le barista qui commence la commande avant qu'on parle, les habitués du comptoir à heure fixe</span></li>
<li><b data-i18n="tour.4.f4">Les rituels</b><span data-i18n="tour.4.d4">Le grain qui change chaque mois, la playlist du matin qui n'est jamais celle de l'après-midi</span></li>
</ul>
<span class="ts-num">04 — 04</span>
</div>
</div>
<div class="tour-progress"><span></span></div>
</div>
</section><section class="section" style="padding-top:2.5rem; padding-bottom:3rem">
<div class="wrap" style="text-align:center">
<p class="serif" data-i18n="tour.out" style="font-size:clamp(1.4rem,3.5vw,2.2rem); color:var(--coral-soft)">Tout ça existe déjà chez vous. Il faut juste l'écrire.</p>
</div>
</section>
<!-- ============ CTA BAND ============ -->
<section class="section">
<div class="wrap">
<div class="section-head reveal">
<span class="eyebrow" data-i18n="faq.eyebrow">Questions fréquentes</span>
<h2 class="h-sec" data-i18n="faq.title">Ce que les gérants me demandent.</h2>
</div>
<div class="faq reveal d1">
<div class="faq-item"><button aria-expanded="false" class="faq-q"><span data-i18n="faq.1.q">Pourquoi ne pas simplement prendre une agence au mois ?</span><span class="pm">+</span></button><div class="faq-a"><div><p data-i18n="faq.1.a">Parce qu'au bout de deux ans vous aurez payé environ 30 000 € et vous n'aurez rien gardé. Ici vous payez une fois, et vous repartez avec le système. Si on se quitte demain, il continue de fonctionner sans moi.</p></div></div></div>
<div class="faq-item"><button aria-expanded="false" class="faq-q"><span data-i18n="faq.2.q">Qui publie une fois le sprint terminé ?</span><span class="pm">+</span></button><div class="faq-a"><div><p data-i18n="faq.2.a">Votre équipe — c'est le but. Le manuel contient 20 à 30 scripts prêts à l'emploi, écrits plan par plan, plus un calendrier sur quatre semaines qui tourne en boucle. Personne n'a besoin de deviner quoi poster.</p></div></div></div>
<div class="faq-item"><button aria-expanded="false" class="faq-q"><span data-i18n="faq.3.q">Combien de temps ça prend, de mon côté ?</span><span class="pm">+</span></button><div class="faq-a"><div><p data-i18n="faq.3.a">Quelques heures en tout. Une immersion pendant un service, un entretien avec vous, deux points d'étape et une remise finale. Le reste du travail se fait sans vous mobiliser.</p></div></div></div>
<div class="faq-item"><button aria-expanded="false" class="faq-q"><span data-i18n="faq.4.q">Personne chez moi ne sait filmer.</span><span class="pm">+</span></button><div class="faq-a"><div><p data-i18n="faq.4.a">C'est prévu. Les scripts sont écrits pour quelqu'un qui n'a jamais tourné : où se placer, quoi cadrer, combien de secondes, quoi dire. Un téléphone suffit, et n'importe qui en salle peut le faire.</p></div></div></div>
<div class="faq-item"><button aria-expanded="false" class="faq-q"><span data-i18n="faq.5.q">Qu'est-ce que je garde à la fin ?</span><span class="pm">+</span></button><div class="faq-a"><div><p data-i18n="faq.5.a">Tout, et pour toujours : le document qui décrit votre monde, votre ligne éditoriale, vos textes permanents, le manuel d'exécution, et la première semaine de contenu déjà produite.</p></div></div></div>
</div>
</div>
</section><section class="section">
<div class="wrap">
<div class="cta-band wipe">
<span class="eyebrow" data-i18n="cta.eyebrow">On commence par un appel</span>
<h2 data-i18n="cta.title" style="margin-top:1rem">Racontez-moi votre lieu.</h2>
<p class="lead" data-i18n="cta.lead">Vingt minutes suffisent pour savoir si votre lieu a de quoi être écrit. Je prends peu de lieux à la fois, et je le dis franchement si ce n'est pas le moment.</p>
<a class="btn btn-primary" href="__LANG__/#contact"><span data-i18n="cta.btn">Prendre contact</span><span class="arr">→</span></a>
</div>
</div>
</section>
`

export default function LieuxPage() {
  // Le HTML est injecté brut : LocaleLink ne peut pas s'y appliquer, donc
  // les liens sortants doivent porter la langue eux-mêmes. Sans ça, un
  // visiteur anglophone qui clique sur un CTA atterrit sur la version
  // française du formulaire.
  const { lang } = useLang()
  const html = NOCTA_HTML.split("__LANG__").join(`/${lang}`)

  useEffect(() => {
    // Les scripts d'origine, dans l'ordre du <head> de NOCTA. Ils sont
    // chargés après l'injection du HTML : app.js accroche ses observateurs
    // sur des noeuds qui doivent déjà exister.
    const srcs = ["/nocta/config.js", "/nocta/i18n.js", "/nocta/app.js"]
    const added: HTMLScriptElement[] = []
    let cancelled = false

    const loadNext = (i: number) => {
      if (cancelled || i >= srcs.length) return
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
  }, [])

  return (
    <>
      {/* Les polices de NOCTA et sa feuille de style, chargées sur cette
          route uniquement. */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Hanken+Grotesk:wght@400;500;600;700&family=Instrument+Serif:ital@1&family=Space+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="/nocta/styles.css" />
      <main id="main" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}
