/**
 * L'ouverture du site : « STRAWBERRY PROD. » vient à l'écran.
 *
 * Il n'y en a qu'une — celle-ci, montée dans le layout de toutes les pages.
 * (Une version parallèle avait été bâtie dans le questionnaire : l'ancien
 * logo passait d'abord, puis le nouveau. Elle est supprimée.)
 *
 * Le moment :
 *   1. le nom se révèle lettre par lettre (montée, flou qui se résorbe) ;
 *   2. une vague de lumière le traverse de gauche à droite ;
 *   3. une lueur éclot derrière, un trait se trace dessous, le sous-titre
 *      s'écarte et se pose ;
 *   4. le nom reste posé une seconde, entier, puis s'efface en fondu sur la
 *      page, qui se dessine dessous.
 *
 * Comme avant, la décision de jouer l'ouverture est prise AVANT la première
 * image : le calque est visible par défaut dans le HTML, et un script en
 * ligne le masque aussitôt s'il a déjà joué dans la session, si l'écran est
 * petit (sur mobile, c'est la principale cause de lenteur perçue) ou si le
 * visiteur a demandé moins d'animations. Tout le mouvement est en CSS : même
 * sans JavaScript, le calque s'efface seul à la fin (voir globals.css).
 *
 * Les pages qui doivent attendre la fin (le questionnaire) lisent
 * `window.__spIntroExit` — l'instant, en `performance.now()`, où le fondu de
 * sortie commence — et l'événement `sp-intro-skip` si on passe l'ouverture.
 */

const WORDS = ["STRAWBERRY", "PROD."]

export function LoadingIntro() {
  let n = 0
  return (
    // suppressHydrationWarning : le script ci-dessous modifie ce calque AVANT
    // que React ne prenne la main (sous-titre selon la page et la langue,
    // classe d'attente, masquage). Sans cette mention, React voyait une
    // différence avec le HTML du serveur et reconstruisait TOUTE la page dans
    // le navigateur — pendant l'intro, sur chaque page anglaise et dans le
    // questionnaire. C'était aussi une source de saccades.
    <div
      id="sp-intro"
      aria-hidden
      suppressHydrationWarning
      className="sp-intro fixed inset-0 z-[999] flex cursor-pointer flex-col items-center justify-center bg-[#0a0a0a]"
    >
      <div
        className="sp-bloom pointer-events-none absolute left-1/2 top-1/2 h-[85vmin] w-[85vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,34,51,.36) 0%, rgba(255,34,51,.09) 42%, transparent 70%)" }}
      />
      <div className="sp-push relative flex flex-col items-center">
        <div className="relative flex flex-wrap items-baseline justify-center gap-x-[0.32em] px-6 font-serif text-[clamp(2.2rem,8vw,6.4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-brand">
          {WORDS.map((w) => (
            <span key={w} className="inline-flex whitespace-nowrap">
              {w.split("").map((ch) => {
                const d = 300 + n++ * 45
                return (
                  <span key={n} className="sp-letter" style={{ ["--d" as string]: `${d}ms` }}>
                    {ch}
                    {/* La même lettre, déjà lumineuse (couleur corail et halo
                        peints une seule fois) : la vague ne fait varier que
                        son opacité, ce que la carte graphique gère seule. */}
                    <span className="sp-glow">{ch}</span>
                  </span>
                )
              })}
            </span>
          ))}
        </div>
        <div className="sp-line relative mt-7 h-px w-[min(420px,70vw)]" />
        <div data-sp-tag suppressHydrationWarning className="sp-tag relative mt-6 font-mono text-[11px] uppercase text-chalk-55">
          Architecture narrative
        </div>
      </div>

      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
(function(){
  var el = document.getElementById('sp-intro');
  if (!el) return;
  var KEY = 'sp_intro_seen';
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var seen = false;
  try { seen = !!window.sessionStorage.getItem(KEY); } catch (e) {}
  if (reduced || seen || window.innerWidth < 900) { el.style.display = 'none'; return; }
  try { window.sessionStorage.setItem(KEY, '1'); } catch (e) {}

  // Le sous-titre suit la page et la langue.
  var tag = el.querySelector('[data-sp-tag]');
  if (tag) {
    var en = (document.documentElement.lang || '').indexOf('en') === 0;
    var onboarding = location.pathname.indexOf('/questionnaire') !== -1;
    tag.textContent = onboarding ? 'Onboarding' : (en ? 'Narrative architecture' : 'Architecture narrative');
  }

  // Le fondu de sortie commence à 3300 ms (même valeur que le délai de
  // .sp-intro dans globals.css). Les pages qui attendent s'y calent.
  var EXIT = 3300;
  // On attend que la police du nom soit prête (500 ms au plus) avant de
  // lancer l'animation : si elle arrivait en route, chaque lettre
  // changerait de forme et de position en plein mouvement — une saccade.
  // Tant qu'on attend, toutes les animations sont en pause (classe
  // sp-wait) : l'écran reste noir, puis le nom se construit d'un trait.
  el.classList.add('sp-wait');
  window.__spIntroExit = performance.now() + EXIT + 500;
  var started = false;
  function start() {
    if (started) return;
    started = true;
    el.classList.remove('sp-wait');
    window.__spIntroExit = performance.now() + EXIT;
    setTimeout(cleanup, EXIT + 800);
  }
  if (document.fonts && document.fonts.status !== 'loaded') {
    document.fonts.ready.then(start);
    setTimeout(start, 500);
  } else {
    start();
  }
  var over = false;
  function cleanup() {
    over = true;
    started = true;
    el.classList.remove('sp-wait');
    window.removeEventListener('pointerdown', skip);
    window.removeEventListener('keydown', skip);
  }
  function skip() {
    if (over) return;
    cleanup();
    window.__spIntroExit = 0;
    el.style.animation = 'none';
    el.style.transition = 'opacity 300ms ease';
    el.style.opacity = '0';
    el.style.pointerEvents = 'none';
    try { window.dispatchEvent(new Event('sp-intro-skip')); } catch (e) {}
    setTimeout(function () { el.style.display = 'none'; }, 350);
  }
  window.addEventListener('pointerdown', skip);
  window.addEventListener('keydown', skip);
})();
`,
        }}
      />
    </div>
  )
}
