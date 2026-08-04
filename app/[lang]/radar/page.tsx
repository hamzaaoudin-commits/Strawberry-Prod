"use client"

import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { useT, useLang } from "@/lib/i18n"
import { STRIPE_LINKS, RADAR_TRIAL_DAYS } from "@/lib/config"
import { RadarLeadCapture } from "@/components/strawberry/radar-lead-capture"
import { FaqSection } from "@/components/strawberry/faq-section"
import { FAQ_RADAR } from "@/lib/faqs"
import { BackHomeButton } from "@/components/strawberry/back-home-button"


// TODO: replace with the live RADAR subscription Stripe link when created.


const T = {
  en: {
    badge: "350+ brands already dissected. Browse the archive.",
    h1a: "Catch a brand's signal",
    h1b: "before the market does.",
    lead: "Over 350 real brands, already under the radar: what each one emits, what jams it, and the heading we would give it. Not a course \u2014 a searchable instrument. The edge your competitors don't have.",
    subscribe: "Subscribe",
    trial: (d: number) => `${d} days free. Cancel in one click.`,
    access: "Subscriber access",
    read: [
      { label: "The signal", body: "What the brand genuinely emits — the position that actually lands, isolated from everything around it." },
      { label: "The noise", body: "What blurs it: the borrowed words, the me-too claims, the promise that fights itself." },
      { label: "The heading", body: "The single repositioning move we would give it — the decision that would make it unmistakable." },
    ],
    inKicker: "What the subscription contains",
    inTitle: "Everything below, already there.",
    contents: [
      { n: "350+", t: "Brand reads", d: "Real brands already dissected, searchable by sector and by theme. Same six-block grid every time." },
      { n: "IX", t: "The manifestos", d: "The nine Strawberry manifestos, in full. What the studio holds to be true about perception, scarcity and refusal — and what every working decision rests on." },
      { n: "05", t: "The lessons", d: "Five lessons, one per instrument. How to check that a positioning sentence holds, who your market actually compares you to, which words to abandon, how to make a founder say what they no longer see, and when to refuse." },
      { n: "03", t: "The applications", d: "Daily exercise, the sentence library, and the watch list on your own competitors." },
    ],
    appsKicker: "The applications",
    appsTitle: "Five instruments, not five more articles.",
    appsLead: "This is what separates RADAR from a newsletter. A newsletter is read and forgotten. These are used — on your market, on your competitors, on your own sentences.",
    appsSoon: "In preparation",
    apps: [
      {
        n: "01",
        t: "The daily exercise",
        d: "A real positioning sentence, stripped of its brand name. Three questions: who does it exclude, what class does it place the house in, which word could a competitor not steal. The answer follows, with the reasoning.",
        why: "Judgement is not acquired by reading. It is acquired by deciding, then discovering whether you were right.",
      },
      {
        n: "02",
        t: "The sentence library",
        d: "Every positioning sentence dissected in RADAR, searchable by sector and by claimed word. Type \u201ctailor-made\u201d and see the forty houses already occupying it.",
        why: "Before claiming a word, you should know how crowded it already is. Nothing else shows you that.",
      },
      {
        n: "03",
        t: "The watch list",
        d: "Your own competitors under watch. When one of them rewrites their homepage sentence, you receive the before, the after, and a read of what the move is trying to do.",
        why: "A repositioning is announced by nobody. It is noticed months later, once the ground has been taken.",
      },
      {
        n: "04",
        t: "The twenty-reader jury",
        d: "Send us a sentence \u2014 a tagline, a bio, an opening line \u2014 and it is read, by hand, against twenty adversarial reader profiles: the sceptic hunting for the crack, the buyer who only cares what it does for them, the purist who catches every clich\u00e9, the investor pricing the position, the outsider with no context at all. You get back exactly where each of them stalls.",
        why: "A sentence that survives one friendly read has survived nothing. It has to survive the reader who wants it to fail.",
      },
      {
        n: "05",
        t: "The forbidden words list",
        d: "The words your category has worn out \u2014 innovative, disruptive, tailor-made, passionate \u2014 tracked against the full archive, so the list reflects what is actually being said this month, not a fixed list from a style guide.",
        why: "A word becomes forbidden the moment three competitors are already standing on it. That moment moves; the list has to move with it.",
      },
    ],
    gridKicker: "The grid",
    gridTitle: "Same grid, every time \u2014 so you learn to read it.",
    grid: ["Context", "The signal", "The noise", "The tension", "The heading", "Verdict"],
    bridge: "RADAR trains your eye on other people's brands. The one you can never read from the outside is your own: that is where BRAND NARRATIVE ARCHITECTURE comes in.",
    subLabel: "Subscription · 15€/mo",
    subTitle: "The full archive, on tap.",
    subBody: "Over 350 brands already read, searchable in seconds, plus the habit that lets you price any positioning at a glance. Cancel anytime.",
    bridgeCta: "See BRAND NARRATIVE ARCHITECTURE →",
  },
  fr: {
    badge: "350+ marques déjà disséquées. Une base à parcourir.",
    h1a: "Captez le signal d'une marque",
    h1b: "avant le marché.",
    lead: "Plus de 350 marques réelles, déjà passées au radar : ce qui émet, ce qui parasite, et le cap que nous leur donnerions. Pas un cours \u2014 un instrument consultable. L'avance que vos concurrents n'ont pas.",
    subscribe: "S'abonner",
    trial: (d: number) => `${d} jours offerts. Résiliable en un clic.`,
    access: "Accès abonné",
    read: [
      { label: "Le signal", body: "Ce que la marque émet vraiment — la position qui porte, isolée de tout le reste." },
      { label: "Le bruit", body: "Ce qui la brouille : les mots empruntés, les promesses me-too, la promesse qui se contredit." },
      { label: "Le cap", body: "Le seul mouvement de repositionnement que nous lui donnerions — la décision qui la rendrait indiscutable." },
    ],
    inKicker: "Ce que contient l'abonnement",
    inTitle: "Tout ce qui suit, déjà là.",
    contents: [
      { n: "350+", t: "Les fiches", d: "Des marques réelles déjà disséquées, cherchables par secteur et par thème. La même grille en six blocs à chaque fois." },
      { n: "IX", t: "Les manifestes", d: "Les neuf manifestes Strawberry, en entier. Ce que le studio tient pour vrai sur la perception, la rareté et le refus — et sur quoi chaque décision de travail s'appuie." },
      { n: "05", t: "Les leçons", d: "Cinq leçons, une par outil. Comment vérifier qu'une phrase de positionnement tient, contre qui votre marché vous compare vraiment, quels mots abandonner, comment faire dire à un fondateur ce qu'il ne sait plus voir, et quand refuser." },
      { n: "03", t: "Les applications", d: "L'entraînement du jour, la bibliothèque des phrases, et le carnet de veille sur vos propres concurrents." },
    ],
    appsKicker: "Les applications",
    appsTitle: "Cinq instruments, pas cinq articles de plus.",
    appsLead: "C'est ce qui sépare RADAR d'une newsletter. Une newsletter se lit puis s'oublie. Ceci s'utilise — sur votre marché, sur vos concurrents, sur vos propres phrases.",
    appsSoon: "En préparation",
    apps: [
      {
        n: "01",
        t: "L'entraînement quotidien",
        d: "Une phrase de positionnement réelle, privée du nom de sa marque. Trois questions : qui exclut-elle, dans quelle classe place-t-elle la maison, quel mot un concurrent ne pourrait-il pas lui voler. La réponse suit, avec le raisonnement.",
        why: "Le jugement ne s'acquiert pas en lisant. Il s'acquiert en tranchant, puis en découvrant si on avait raison.",
      },
      {
        n: "02",
        t: "La bibliothèque des phrases",
        d: "Toutes les phrases de positionnement disséquées dans RADAR, cherchables par secteur et par mot revendiqu\u00e9. Tapez \u00ab sur-mesure \u00bb et voyez les quarante maisons qui l'occupent d\u00e9j\u00e0.",
        why: "Avant de revendiquer un mot, il faut savoir combien de monde s'y trouve. Rien d'autre ne vous le montre.",
      },
      {
        n: "03",
        t: "Le carnet de veille",
        d: "Vos propres concurrents sous surveillance. Quand l'un d'eux réécrit sa phrase d'accueil, vous recevez l'avant, l'après, et une lecture de ce que le mouvement cherche à faire.",
        why: "Un repositionnement n'est annoncé par personne. Il se remarque des mois plus tard, une fois le terrain pris.",
      },
      {
        n: "04",
        t: "Le jury des vingt lecteurs",
        d: "Envoyez-nous une phrase \u2014 une accroche, une bio, une ouverture \u2014 et elle est lue, à la main, contre vingt profils de lecteurs hostiles : le sceptique qui cherche la faille, l'acheteur qui ne regarde que l'utilité concrète, le puriste qui traque chaque lourdeur, l'investisseur qui évalue la solidité du positionnement, le profane sans aucun prérequis. Vous recevez précisément l'endroit où chacun décroche.",
        why: "Une phrase qui survit à une lecture bienveillante n'a rien prouvé. Il faut qu'elle survive au lecteur qui veut sa perte.",
      },
      {
        n: "05",
        t: "La liste des mots interdits",
        d: "Les mots que votre secteur a usés \u2014 innovant, disruptif, sur-mesure, passionné \u2014 suivis contre l'ensemble de la base, pour que la liste reflète ce qui se dit réellement ce mois-ci, pas une liste figée sortie d'une charte éditoriale.",
        why: "Un mot devient interdit dès que trois concurrents s'y tiennent déjà. Ce moment se déplace ; la liste doit se déplacer avec lui.",
      },
    ],
    gridKicker: "La grille",
    gridTitle: "La même grille, à chaque fois \u2014 pour que vous appreniez à la lire.",
    grid: ["Contexte", "Le signal", "Le bruit", "La tension", "Le cap", "Verdict"],
    bridge: "RADAR forme votre œil sur les marques des autres. La seule que vous ne pourrez jamais lire de l'extérieur, c'est la vôtre : c'est là que BRAND NARRATIVE ARCHITECTURE intervient.",
    subLabel: "Abonnement · 15€/mois",
    subTitle: "La base complète, à volonté.",
    subBody: "Plus de 350 marques déjà lues, cherchables en quelques secondes, et l'habitude qui vous fait lire n'importe quel positionnement d'un coup d'œil. Résiliable à tout moment.",
    bridgeCta: "Voir BRAND NARRATIVE ARCHITECTURE →",
  },
}

/**
 * Un glyphe distinct par instrument, plutôt qu'un rectangle identique répété
 * cinq fois. Traits fins, cohérents avec le reste du site — pas d'icône de
 * bibliothèque générique.
 */
function AppIcon({ index }: { index: number }) {
  const props = { viewBox: "0 0 32 32", width: 30, height: 30, "aria-hidden": true as const }
  const stroke = { stroke: "currentColor", strokeWidth: 1.4, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const }

  switch (index) {
    case 0: // l'entraînement quotidien — une cible
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="11" {...stroke} opacity="0.35" />
          <circle cx="16" cy="16" r="6.5" {...stroke} opacity="0.65" />
          <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none" />
        </svg>
      )
    case 1: // la bibliothèque des phrases — des feuillets empilés
      return (
        <svg {...props}>
          <rect x="8" y="6" width="14" height="18" rx="0.5" {...stroke} opacity="0.4" />
          <rect x="6" y="9" width="14" height="18" rx="0.5" {...stroke} />
          <line x1="9" y1="14" x2="17" y2="14" {...stroke} opacity="0.6" />
          <line x1="9" y1="18" x2="17" y2="18" {...stroke} opacity="0.6" />
          <line x1="9" y1="22" x2="14" y2="22" {...stroke} opacity="0.6" />
        </svg>
      )
    case 2: // le carnet de veille — un balayage radar
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="11" {...stroke} opacity="0.3" />
          <circle cx="16" cy="16" r="6" {...stroke} opacity="0.5" />
          <path d="M16 16 L16 5 A11 11 0 0 1 24.8 10.8 Z" fill="currentColor" opacity="0.18" stroke="none" />
          <line x1="16" y1="16" x2="16" y2="5" {...stroke} />
          <circle cx="24" cy="11" r="1.3" fill="currentColor" stroke="none" />
        </svg>
      )
    case 3: // le jury des vingt lecteurs — des sièges face à un pupitre
      return (
        <svg {...props}>
          <path d="M8 22 a8 8 0 0 1 16 0" {...stroke} opacity="0.4" />
          {[7, 11.7, 16.3, 21].map((cx, i) => (
            <circle key={i} cx={cx} cy="10" r="1.6" {...stroke} opacity={i === 2 ? 1 : 0.55} />
          ))}
        </svg>
      )
    default: // la liste des mots interdits — un mot barré
      return (
        <svg {...props}>
          <line x1="7" y1="10" x2="25" y2="10" {...stroke} opacity="0.5" />
          <line x1="7" y1="16" x2="20" y2="16" {...stroke} />
          <line x1="6" y1="16" x2="21" y2="16" stroke="currentColor" strokeWidth="1.4" />
          <line x1="7" y1="22" x2="17" y2="22" {...stroke} opacity="0.5" />
        </svg>
      )
  }
}

function RadarScope() {
  return (
    <div className="hero-stage" aria-hidden="true">
      <div className="radar-scope">
        <div className="scope-ring r1" />
        <div className="scope-ring r2" />
        <div className="scope-ring r3" />
        <div className="scope-cross" />
        <div className="scope-sweep" />
        <div className="scope-center" />
        <div className="blip" style={{ "--a": "38deg", "--d": "120px", "--phase": "0.58s" } as React.CSSProperties}><span className="dot" /><span className="ping" /><span className="blip-label">Sézane</span></div>
        <div className="blip" style={{ "--a": "118deg", "--d": "92px", "--phase": "1.8s" } as React.CSSProperties}><span className="dot" /><span className="ping" /><span className="blip-label">Qonto</span></div>
        <div className="blip left" style={{ "--a": "212deg", "--d": "128px", "--phase": "3.24s" } as React.CSSProperties}><span className="dot" /><span className="ping" /><span className="blip-label">Typology</span></div>
        <div className="blip left" style={{ "--a": "300deg", "--d": "76px", "--phase": "4.58s" } as React.CSSProperties}><span className="dot" /><span className="ping" /><span className="blip-label">Diptyque</span></div>
      </div>
      <style jsx>{`
        .hero-stage { position: relative; height: 320px; margin-top: 40px; display: flex; align-items: center; justify-content: center; }
        .radar-scope { position: relative; width: 300px; height: 300px; border-radius: 50%; }
        .scope-ring { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); border: 1px solid rgba(255,255,255,0.12); border-radius: 50%; }
        .scope-ring.r1 { width: 300px; height: 300px; }
        .scope-ring.r2 { width: 200px; height: 200px; }
        .scope-ring.r3 { width: 100px; height: 100px; }
        .scope-cross::before, .scope-cross::after { content: ""; position: absolute; top: 50%; left: 50%; background: rgba(255,255,255,0.12); }
        .scope-cross::before { width: 300px; height: 1px; transform: translate(-50%,-50%); }
        .scope-cross::after { width: 1px; height: 300px; transform: translate(-50%,-50%); }
        .scope-center { position: absolute; top: 50%; left: 50%; width: 8px; height: 8px; background: #fff; border-radius: 50%; transform: translate(-50%,-50%); z-index: 3; }
        .scope-sweep { position: absolute; inset: 0; border-radius: 50%; background: conic-gradient(from 0deg, rgba(230,57,70,0) 0deg, rgba(230,57,70,0) 300deg, rgba(230,57,70,0.10) 340deg, rgba(230,57,70,0.32) 356deg, rgba(230,57,70,0.6) 360deg); animation: radar-sweep 5.5s linear infinite; z-index: 2; }
        .scope-sweep::after { content: ""; position: absolute; top: 0; left: 50%; width: 1px; height: 50%; background: linear-gradient(#e63946, rgba(230,57,70,0)); transform-origin: bottom center; }
        .blip { position: absolute; top: 50%; left: 50%; width: 9px; height: 9px; transform: rotate(var(--a)) translateY(calc(-1 * var(--d))) rotate(calc(-1 * var(--a))); z-index: 3; }
        .blip .dot { position: absolute; inset: 0; background: #e63946; border-radius: 50%; box-shadow: 0 0 8px rgba(230,57,70,0.35); }
        .blip .ping { position: absolute; top: 50%; left: 50%; width: 9px; height: 9px; border-radius: 50%; border: 1.5px solid #e63946; transform: translate(-50%,-50%) scale(1); opacity: 0; animation: blip-ping 5.5s linear infinite; animation-delay: var(--phase, 0s); }
        .blip .blip-label { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); font-family: 'DM Sans', monospace; font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase; white-space: nowrap; color: rgba(255,255,255,0.7); background: rgba(10,10,10,0.7); padding: 2px 6px; border-radius: 4px; }
        .blip.left .blip-label { left: auto; right: 16px; }
        @keyframes radar-sweep { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes blip-ping {
          0% { opacity: 0; transform: translate(-50%,-50%) scale(1); }
          4% { opacity: 0.9; transform: translate(-50%,-50%) scale(1); }
          22% { opacity: 0; transform: translate(-50%,-50%) scale(3.4); }
          100% { opacity: 0; transform: translate(-50%,-50%) scale(3.4); }
        }
        @media (prefers-reduced-motion: reduce) {
          .scope-sweep { animation: none; background: conic-gradient(from 300deg, rgba(230,57,70,0) 0deg, rgba(230,57,70,0.28) 55deg, rgba(230,57,70,0) 60deg); }
          .blip .ping { animation: none; opacity: 0; }
        }
      `}</style>
    </div>
  )
}

export default function RadarPage() {
  const t = useT(T)
  const { lang } = useLang()

  return (
    <main className="min-h-screen overflow-hidden bg-ink font-sans text-white">
      <NavBar />
      <BackHomeButton />

      <section className="section-hero pb-16 pt-40">
        <div className="glow-top" aria-hidden />
        <div className="shell-md relative">
          <div className="pill mb-8">{t.badge}</div>

          <h1 className="h-display mb-6">
            {t.h1a}
            <br />
            <span className="text-gradient">{t.h1b}</span>
          </h1>

          <p className="lede mx-auto mb-9 max-w-[640px]">{t.lead}</p>

          <div className="flex flex-wrap justify-center gap-3.5">
            <a href={STRIPE_LINKS.radar} className="btn-primary" rel="noopener">{t.subscribe}</a>
          {RADAR_TRIAL_DAYS > 0 && (
            <p className="mt-3 font-sans text-[13px] text-chalk-40">{t.trial(RADAR_TRIAL_DAYS)}</p>
          )}
            <Link href="/radar/acces" className="btn-ghost">{t.access}</Link>
          </div>

          <RadarScope />
        </div>
      </section>

      {/* CE QUE CONTIENT L'ABONNEMENT — la question à 15€ se règle ici */}
      <section className="section">
        <div className="shell-lg">
          <div className="mb-12 text-center">
            <div className="kicker mb-5">{t.inKicker}</div>
            <h2 className="h-section">{t.inTitle}</h2>
          </div>

          <div className="grid-auto">
            {t.contents.map((c) => (
              <div key={c.t} className="card px-7 py-8">
                <div className="mb-3.5 font-serif text-[2.25rem] font-bold leading-none text-brand">{c.n}</div>
                <h3 className="mb-2.5 font-serif text-[1.3rem] font-bold">{c.t}</h3>
                <p className="body-sm">{c.d}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LES APPLICATIONS — ce qui distingue un abonnement d'une newsletter.
          Reconstruites en registre éditorial : une icône propre à chaque
          instrument plutôt que cinq rectangles identiques, le « pourquoi »
          mis en avant comme une citation plutôt qu'en petit texte de bas de
          carte. */}
      <section className="section bg-ink-soft">
        <div className="shell-lg">
          <div className="mb-14 text-center">
            <div className="kicker mb-5">{t.appsKicker}</div>
            <h2 className="h-section mb-6">{t.appsTitle}</h2>
            <p className="lede mx-auto max-w-[640px]">{t.appsLead}</p>
          </div>

          <div className="mx-auto max-w-[920px]">
            {t.apps.map((a, i) => (
              <div
                key={a.n}
                className="grid gap-6 border-b border-white/[0.08] py-10 first:border-t md:grid-cols-[100px_minmax(0,1fr)] md:gap-10"
              >
                <div className="flex flex-row items-center gap-4 md:flex-col md:items-start md:gap-5">
                  <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center border border-brand/35 bg-brand/[0.06] text-brand">
                    <AppIcon index={i} />
                  </div>
                  <span className="tag border-white/20 text-chalk-40 md:mt-0">{t.appsSoon}</span>
                </div>

                <div>
                  <div className="mb-2 font-sans text-[11px] text-chalk-40">{a.n}</div>
                  <h3 className="mb-3 font-serif text-[1.3rem] font-bold leading-tight">{a.t}</h3>
                  <p className="mb-5 max-w-[600px] body-sm">{a.d}</p>
                  <p className="max-w-[560px] border-l-2 border-brand/50 pl-4 font-serif text-[14.5px] italic leading-snug text-chalk-55">
                    {a.why}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LA GRILLE — ce qui rend les fiches comparables entre elles */}
      <section className="section">
        <div className="mx-auto max-w-[820px] text-center">
          <div className="kicker mb-5">{t.gridKicker}</div>
          <h2 className="h-section mb-10">{t.gridTitle}</h2>

          <div className="grid gap-px border border-white/[0.07] bg-white/[0.07] [grid-template-columns:repeat(auto-fit,minmax(120px,1fr))]">
            {t.grid.map((g, i) => (
              <div key={g} className="bg-ink px-4 py-6">
                <div className="mb-2 font-serif text-[15px] font-bold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-sans text-[12.5px] leading-snug text-chalk-75">{g}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'ABONNEMENT */}
      <section className="section pb-10 text-center">
        <div className="card mx-auto max-w-[560px] px-8 py-11">
          <span className="tag border-[rgba(120,180,255,0.4)] text-[rgba(150,195,255,0.9)]">{t.subLabel}</span>
          <h3 className="mb-3 mt-5 font-serif text-[1.8rem] font-bold">{t.subTitle}</h3>
          <p className="mb-7 font-sans text-[15px] leading-relaxed text-chalk-65">{t.subBody}</p>
          <a href={STRIPE_LINKS.radar} className="btn-primary" rel="noopener">{t.subscribe}</a>
          {RADAR_TRIAL_DAYS > 0 && (
            <p className="mt-3 font-sans text-[13px] text-chalk-40">{t.trial(RADAR_TRIAL_DAYS)}</p>
          )}
        </div>
      </section>

      {/* LA NEWSLETTER — l'unique porte gratuite. Il n'y a plus de lecture en
          libre accès à parcourir sans engagement ; celui qui n'est pas encore
          prêt à payer laisse un email plutôt que de repartir. */}
      <section className="section pt-2 text-center">
        <div className="mx-auto max-w-[560px]">
          <RadarLeadCapture lang={lang} source="radar_lead_radar_page" />
        </div>
      </section>

      <section className="section pb-28 text-center">
        <div className="mx-auto max-w-[720px]">
          <p className="font-serif text-[clamp(1.15rem,2vw,1.5rem)] italic leading-snug text-chalk-75">
            {t.bridge}
          </p>
          <Link href="/brand-narrative-architecture" className="btn-quiet mt-5">{t.bridgeCta}</Link>
        </div>
      </section>

      <FaqSection faqs={FAQ_RADAR} />

      <Footer />
    </main>
  )
}
