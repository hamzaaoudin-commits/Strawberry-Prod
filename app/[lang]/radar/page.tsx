"use client"

import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { useT } from "@/lib/i18n"
import { STRIPE_LINKS } from "@/lib/config"
import { FaqSection } from "@/components/strawberry/faq-section"
import { FAQ_RADAR } from "@/lib/faqs"
import { BackHomeButton } from "@/components/strawberry/back-home-button"


// TODO: replace with the live RADAR subscription Stripe link when created.


const T = {
  en: {
    badge: "One brand dissected. Every day, without exception.",
    h1a: "Catch a brand's signal",
    h1b: "before the market does.",
    lead: "Every day, one real brand goes under the radar: what it emits, what jams it, and the heading we would give it. Not a course — an instrument. The edge your competitors don't have, day after day.",
    subscribe: "Subscribe",
    access: "Subscriber access",
    read: [
      { label: "The signal", body: "What the brand genuinely emits — the position that actually lands, isolated from everything around it." },
      { label: "The noise", body: "What blurs it: the borrowed words, the me-too claims, the promise that fights itself." },
      { label: "The heading", body: "The single repositioning move we would give it — the decision that would make it unmistakable." },
    ],
    inKicker: "What the subscription contains",
    inTitle: "Everything below, every day.",
    contents: [
      { n: "30+", t: "Brand reads", d: "Thirty real brands already dissected, a new one every day. Same six-block grid each time." },
      { n: "IX", t: "The manifestos", d: "The nine Strawberry manifestos, in full. What the studio holds to be true about perception, scarcity and refusal — and what every working decision rests on." },
      { n: "05", t: "The lessons", d: "Five lessons, one per instrument. How to check that a positioning sentence holds, who your market actually compares you to, which words to abandon, how to make a founder say what they no longer see, and when to refuse." },
      { n: "03", t: "The applications", d: "Daily exercise, the sentence library, and the watch list on your own competitors." },
    ],
    appsKicker: "The applications",
    appsTitle: "Three instruments, not three more articles.",
    appsLead: "This is what separates RADAR from a newsletter. A newsletter is read and forgotten. These are used — on your market, on your competitors, on your own sentences.",
    appsSoon: "In preparation",
    apps: [
      {
        n: "01",
        t: "Today's exercise",
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
    ],
    gridKicker: "The grid",
    gridTitle: "Six blocks. Never changes.",
    grid: ["Context", "The signal", "The noise", "The tension", "The heading", "Verdict"],
    bridge: "RADAR trains your eye on other people's brands. The one you can never read from the outside is your own: that is where BRAND NARRATIVE ARCHITECTURE comes in.",
    subLabel: "Subscription · 15€/mo",
    subTitle: "The daily read, on tap.",
    subBody: "The full library, one new read a day, and the habit that lets you price any positioning in seconds. Cancel anytime.",
    bridgeCta: "See BRAND NARRATIVE ARCHITECTURE →",
  },
  fr: {
    badge: "Une marque disséquée. Chaque jour, sans exception.",
    h1a: "Captez le signal d'une marque",
    h1b: "avant le marché.",
    lead: "Chaque jour, une marque réelle passe au radar : ce qui émet (le signal), ce qui parasite (le bruit), et le cap que nous lui donnerions. Pas un cours — un instrument. L'avance que vos concurrents n'ont pas, jour après jour.",
    subscribe: "S'abonner",
    access: "Accès abonné",
    read: [
      { label: "Le signal", body: "Ce que la marque émet vraiment — la position qui porte, isolée de tout le reste." },
      { label: "Le bruit", body: "Ce qui la brouille : les mots empruntés, les promesses me-too, la promesse qui se contredit." },
      { label: "Le cap", body: "Le seul mouvement de repositionnement que nous lui donnerions — la décision qui la rendrait indiscutable." },
    ],
    inKicker: "Ce que contient l'abonnement",
    inTitle: "Tout ce qui suit, chaque jour.",
    contents: [
      { n: "30+", t: "Les fiches", d: "Trente marques réelles déjà disséquées, une nouvelle chaque jour. La même grille en six blocs à chaque fois." },
      { n: "IX", t: "Les manifestes", d: "Les neuf manifestes Strawberry, en entier. Ce que le studio tient pour vrai sur la perception, la rareté et le refus — et sur quoi chaque décision de travail s'appuie." },
      { n: "05", t: "Les leçons", d: "Cinq leçons, une par outil. Comment vérifier qu'une phrase de positionnement tient, contre qui votre marché vous compare vraiment, quels mots abandonner, comment faire dire à un fondateur ce qu'il ne sait plus voir, et quand refuser." },
      { n: "03", t: "Les applications", d: "L'entraînement du jour, la bibliothèque des phrases, et le carnet de veille sur vos propres concurrents." },
    ],
    appsKicker: "Les applications",
    appsTitle: "Trois instruments, pas trois articles de plus.",
    appsLead: "C'est ce qui sépare RADAR d'une newsletter. Une newsletter se lit puis s'oublie. Ceci s'utilise — sur votre marché, sur vos concurrents, sur vos propres phrases.",
    appsSoon: "En préparation",
    apps: [
      {
        n: "01",
        t: "L'entraînement du jour",
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
    ],
    gridKicker: "La grille",
    gridTitle: "Six blocs. Elle ne change jamais.",
    grid: ["Contexte", "Le signal", "Le bruit", "La tension", "Le cap", "Verdict"],
    bridge: "RADAR forme votre œil sur les marques des autres. La seule que vous ne pourrez jamais lire de l'extérieur, c'est la vôtre : c'est là que BRAND NARRATIVE ARCHITECTURE intervient.",
    subLabel: "Abonnement · 15€/mois",
    subTitle: "La lecture du jour, à volonté.",
    subBody: "La bibliothèque complète, une nouvelle fiche par jour, et l'habitude qui vous fait lire n'importe quel positionnement en quelques secondes. Résiliable à tout moment.",
    bridgeCta: "Voir BRAND NARRATIVE ARCHITECTURE →",
  },
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

      {/* LES APPLICATIONS — ce qui distingue un abonnement d'une newsletter */}
      <section className="section bg-ink-soft">
        <div className="shell-lg">
          <div className="mb-12 text-center">
            <div className="kicker mb-5">{t.appsKicker}</div>
            <h2 className="h-section mb-6">{t.appsTitle}</h2>
            <p className="lede mx-auto max-w-[640px]">{t.appsLead}</p>
          </div>

          <div className="grid gap-px border border-white/[0.09] bg-white/[0.09] md:grid-cols-3">
            {t.apps.map((a) => (
              <div key={a.n} className="flex flex-col bg-ink px-7 py-8">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-serif text-[1.6rem] font-bold leading-none text-brand">{a.n}</span>
                  <span className="tag border-white/20 text-chalk-40">{t.appsSoon}</span>
                </div>
                <h3 className="mb-3 font-serif text-[1.25rem] font-bold leading-tight">{a.t}</h3>
                <p className="mb-6 body-sm">{a.d}</p>
                <p className="mt-auto border-t border-hair pt-4 font-serif text-[14px] italic leading-snug text-chalk-55">
                  {a.why}
                </p>
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

      {/* FULL FREE SÉZANE READ */}
      <section className="section text-center">
        <div className="card mx-auto max-w-[560px] px-8 py-11">
          <span className="tag border-[rgba(120,180,255,0.4)] text-[rgba(150,195,255,0.9)]">{t.subLabel}</span>
          <h3 className="mb-3 mt-5 font-serif text-[1.8rem] font-bold">{t.subTitle}</h3>
          <p className="mb-7 font-sans text-[15px] leading-relaxed text-chalk-65">{t.subBody}</p>
          <a href={STRIPE_LINKS.radar} className="btn-primary" rel="noopener">{t.subscribe}</a>
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
