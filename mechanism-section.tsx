import { LocaleLink as Link } from "@/components/locale-link"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"

/**
 * La séquence de raisonnement, entre le problème et l'offre.
 *
 * Composant serveur : aucune interaction, donc rien à hydrater.
 *
 * Elle suit six mouvements dans un ordre qui ne peut pas être changé : le
 * problème tel qu'il est vécu, la cause que le lecteur croit être la bonne, ce
 * qu'il a déjà payé pour la régler, pourquoi cet argent a aggravé les choses,
 * la vraie cause, et seulement alors le mécanisme. Le prix n'est jamais
 * défendable avant le quatrième mouvement.
 *
 * La numérotation encode un enchaînement réel — chaque bloc n'a de sens que
 * lu après le précédent. Elle n'est pas décorative.
 *
 * Le bloc final porte le contre-positionnement. Deux adversaires, deux rôles :
 * l'IA installe l'urgence (elle fait converger tout le monde vers la même
 * phrase), l'agence de branding est l'ennemi commercial (c'est elle que le
 * prospect envisage d'acheter à la place).
 */

const T = {
  en: {
    kicker: "Why nothing has worked",
    h2a: "What you already tried",
    h2b: "made you more invisible.",
    lead: "Not because it was done badly. Because it answered the wrong question.",
    steps: [
      {
        label: "The problem",
        title: "\u00ab I don't get chosen. Or I get chosen on price. \u00bb",
        body: "The work is good. The conversations go well. And then it stalls, or it comes back as a discount request. You start suspecting the market only buys on cost.",
      },
      {
        label: "The false cause",
        title: "\u00ab My communication isn't good enough. Or regular enough. \u00bb",
        body: "It is the first explanation that comes to mind, because it is the only one you control. It puts the blame on the volume and the finish — never on what is actually being said.",
      },
      {
        label: "The false solution",
        title: "A logo redesign. A moodboard. A branding agency. \u00ab Doing content. \u00bb A positioning prompted out of ChatGPT.",
        body: "All of them treat the surface. All of them are bought in good faith. None of them decides anything.",
      },
      {
        label: "Why it makes it worse",
        title: "A new logo on an indistinguishable sentence makes the sameness easier to see.",
        body: "You are looked at more closely — and what people now see clearly is that you are saying what everyone else says. Posting more only makes you resemble everyone else more often. And AI pulls you toward the market average by construction: it produces the most probable sentence, which is precisely the one your competitors have already written.",
      },
      {
        label: "The real cause",
        title: "You have never decided what you refuse.",
        body: "A position is not what you claim. It is what you rule out. Without refusal there is no position — a house that accepts everything occupies nothing, and nothing occupied is nothing remembered.",
      },
      {
        label: "The real solution",
        title: "The Extraction, then the five stages.",
        body: "It starts with something no machine can run: hours of talking, until what makes you singular is on the table — usually the thing you no longer see because you are inside it. That material is the foundation. The five stages of the method turn it into a position that holds.",
      },
    ],
    methodCta: "See the five stages \u2192",
    strawNote: "S.T.R.A.W. \u2014 the method the studio applies to every house.",
    letters: [
      { l: "S", n: "Soul", g: "The soul" },
      { l: "T", n: "Territory", g: "The territory" },
      { l: "R", n: "Reframe", g: "The reframe" },
      { l: "A", n: "Architecture", g: "The architecture" },
      { l: "W", n: "Weaponize", g: "The embodiment" },
    ],
    enemyKicker: "Two adversaries, not one",
    enemyH3: "AI is the clock. The agency is the choice you are about to make.",
    enemyLead: "AI is not what you are hesitating between. It is what makes hesitating expensive: every month, a little more of your market converges on the same sentence. What you are actually weighing is a branding agency — so here is the difference, stated plainly.",
    colA: "A branding agency",
    colB: "This studio",
    rows: [
      ["Invoices you assets", "Writes you a constitution"],
      ["Delivers forty slides", "Delivers one document that decides"],
      ["Has you approve moodboards", "Has you refuse things"],
    ],
  },
  fr: {
    kicker: "Pourquoi rien n'a marché",
    h2a: "Ce que vous avez déjà essayé",
    h2b: "vous a rendu plus invisible.",
    lead: "Non pas parce que c'était mal fait. Parce que ça répondait à la mauvaise question.",
    steps: [
      {
        label: "Le problème",
        title: "« On ne me choisit pas. Ou on me choisit sur le prix. »",
        body: "Le travail est bon. Les rendez-vous se passent bien. Puis ça traîne, ou ça revient sous forme de demande de remise. Vous finissez par soupçonner que ce marché n'achète qu'au coût.",
      },
      {
        label: "La fausse cause",
        title: "« Ma communication n'est pas assez bonne. Ou pas assez régulière. »",
        body: "C'est la première explication qui vient, parce que c'est la seule que vous maîtrisez. Elle met la faute sur le volume et sur la finition — jamais sur ce qui est dit.",
      },
      {
        label: "La fausse solution",
        title: "Une refonte de logo. Un moodboard. Une agence de branding. « Faire du contenu ». Un positionnement prompté à ChatGPT.",
        body: "Toutes traitent la surface. Toutes sont achetées de bonne foi. Aucune ne tranche quoi que ce soit.",
      },
      {
        label: "Pourquoi ça aggrave",
        title: "Un logo neuf sur une phrase indifférenciable rend l'indifférenciation plus visible.",
        body: "On vous regarde mieux — et ce qu'on voit désormais nettement, c'est que vous dites ce que tout le monde dit. Poster plus vous fait seulement ressembler plus souvent à tout le monde. Quant à l'IA, elle vous fait converger vers la moyenne du marché par construction : elle produit la phrase la plus probable, c'est-à-dire exactement celle que vos concurrents ont déjà écrite.",
      },
      {
        label: "La vraie cause",
        title: "Vous n'avez jamais tranché ce que vous refusez.",
        body: "Une position, ce n'est pas ce qu'on revendique. C'est ce qu'on écarte. Sans refus, pas de position — une maison qui accepte tout n'occupe rien, et ce qui n'est pas occupé n'est pas retenu.",
      },
      {
        label: "La vraie solution",
        title: "L'Extraction, puis les cinq étapes.",
        body: "Tout commence par ce qu'aucune machine ne sait faire : des heures à vous faire parler, jusqu'à ce que votre singularité soit sur la table — le plus souvent ce que vous ne voyez plus, parce que vous êtes dedans. Cette matière est la fondation. Les cinq étapes de la méthode la transforment en une position qui tient.",
      },
    ],
    methodCta: "Voir les cinq étapes \u2192",
    strawNote: "S.T.R.A.W. — la méthode appliquée à chaque maison.",
    letters: [
      { l: "S", n: "Soul", g: "L'âme" },
      { l: "T", n: "Territory", g: "Le territoire" },
      { l: "R", n: "Reframe", g: "Le recadrage" },
      { l: "A", n: "Architecture", g: "L'architecture" },
      { l: "W", n: "Weaponize", g: "L'incarnation" },
    ],
    enemyKicker: "Deux adversaires, pas un",
    enemyH3: "L'IA, c'est l'horloge. L'agence, c'est le choix que vous êtes sur le point de faire.",
    enemyLead: "L'IA n'est pas ce entre quoi vous hésitez. C'est ce qui rend l'hésitation coûteuse : chaque mois, un peu plus de votre marché converge vers la même phrase. Ce que vous pesez réellement, c'est une agence de branding — voici donc la différence, dite franchement.",
    colA: "Une agence de branding",
    colB: "Ce studio",
    rows: [
      ["Vous facture des assets", "Vous écrit une constitution"],
      ["Vous livre quarante slides", "Vous livre un document qui tranche"],
      ["Vous fait valider des moodboards", "Vous fait refuser des choses"],
    ],
  },
}

export function MechanismSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)

  return (
    <section id="mechanism" className="section relative overflow-hidden bg-ink text-white">
      <div className="glow-top" aria-hidden />

      <div className="shell relative">
        <div className="mx-auto mb-16 max-w-[720px] text-center">
          <div className="kicker mb-6">{t.kicker}</div>
          <h2 className="h-section mb-6">
            {t.h2a}
            <br />
            <span className="text-gradient">{t.h2b}</span>
          </h2>
          <p className="lede">{t.lead}</p>
        </div>

        {/* Les six mouvements. Un filet vertical relie les numéros : la
            démonstration se lit comme une chaîne, pas comme une liste. */}
        <ol className="mx-auto max-w-[820px] list-none p-0">
          {t.steps.map((s, i) => {
            const last = i === t.steps.length - 1
            return (
              <li key={s.label} className="relative flex gap-6 pb-10 sm:gap-9">
                {!last && (
                  <span aria-hidden className="absolute bottom-0 left-[19px] top-12 w-px bg-white/10 sm:left-[23px]" />
                )}

                <span
                  aria-hidden
                  className={[
                    "relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-serif text-[15px] font-bold sm:h-12 sm:w-12 sm:text-[17px]",
                    last ? "border-brand bg-brand text-white" : "border-white/15 bg-ink text-chalk-55",
                  ].join(" ")}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="pt-1">
                  <div
                    className={[
                      "mb-2 font-sans text-[11px] font-semibold uppercase tracking-[0.16em]",
                      last ? "text-brand" : "text-chalk-40",
                    ].join(" ")}
                  >
                    {s.label}
                  </div>
                  <h3
                    className={[
                      "mb-3 font-serif text-[clamp(1.15rem,2.2vw,1.5rem)] font-semibold leading-snug tracking-[-0.01em]",
                      last ? "text-white" : "text-chalk-90",
                    ].join(" ")}
                  >
                    {s.title}
                  </h3>
                  <p className="m-0 max-w-[620px] font-sans text-[15.5px] leading-[1.75] text-chalk-65">{s.body}</p>

                  {last && (
                    <div className="mt-7 border border-brand-hair bg-white/[0.02] p-6">
                      <div className="mb-5 grid grid-cols-5 gap-px bg-white/10">
                        {t.letters.map((x) => (
                          <div key={x.l} className="bg-ink px-2 py-3 text-center">
                            <div className="font-serif text-[1.35rem] font-bold text-brand">{x.l}</div>
                            <div className="mt-1 font-sans text-[10px] uppercase tracking-[0.1em] text-chalk-40">
                              {x.g}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <span className="font-sans text-[13px] text-chalk-55">{t.strawNote}</span>
                        <Link href="/strawberry-method" className="btn-quiet">
                          {t.methodCta}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            )
          })}
        </ol>

        {/* Le contre-positionnement. */}
        <div className="mx-auto mt-8 max-w-[820px] border-t border-hair pt-14">
          <div className="kicker mb-5">{t.enemyKicker}</div>
          <h3 className="mb-5 font-serif text-[clamp(1.4rem,2.8vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-white">
            {t.enemyH3}
          </h3>
          <p className="mb-9 max-w-[660px] font-sans text-[16px] leading-[1.8] text-chalk-65">{t.enemyLead}</p>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            <div className="bg-ink px-5 py-3.5 font-sans text-[11px] uppercase tracking-[0.16em] text-chalk-40">
              {t.colA}
            </div>
            <div className="bg-ink px-5 py-3.5 font-sans text-[11px] uppercase tracking-[0.16em] text-brand">
              {t.colB}
            </div>

            {t.rows.map(([a, b]) => (
              <div key={a} className="contents">
                <div className="bg-ink px-5 py-4 font-sans text-[15px] leading-snug text-chalk-55 line-through decoration-white/25">
                  {a}
                </div>
                <div className="bg-ink px-5 py-4 font-sans text-[15px] leading-snug text-white">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
