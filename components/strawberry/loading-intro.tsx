/**
 * L'ouverture du site : « STRAWBERRY PROD. » vient à l'écran — en vidéo.
 *
 * Pourquoi une vidéo. L'animation était faite en CSS : quinze lettres, une
 * vague de lumière, une lueur, un trait. Pendant ces trois secondes, le
 * navigateur construit, met en page et active toute la page derrière ; sur
 * la home, il est saturé. Toute animation CSS en dépend plus ou moins — d'où
 * les saccades, surtout dans Safari. Une vidéo, elle, est décodée par la puce
 * vidéo de l'ordinateur, à part de la page : elle ne peut pas hoqueter à
 * cause du chargement.
 *
 * Les vidéos (public/intro/*.mp4) sont l'animation d'origine, rendue image
 * par image à 60 images/s en 2560 × 1440 avec les vraies polices du site :
 * lettres qui montent en perdant leur flou, vague de lumière corail, lueur,
 * trait, sous-titre. Trois versions, selon le sous-titre : fr (Architecture
 * narrative), en (Narrative architecture), onboarding (Onboarding). Un grain
 * très léger y est ajouté : sans lui, la compression dessinait des anneaux
 * dans la lueur rouge.
 *
 * Le déroulé :
 *   - le script ci-dessous décide AVANT la première image : pas d'intro si
 *     elle a déjà joué dans la session, sous 900 px de large, si le visiteur
 *     a demandé moins d'animations, ou si le navigateur ne lit pas le MP4 ;
 *   - sinon il charge la vidéo et ne la lance qu'une fois entièrement
 *     chargée (elle fait ~600 Ko) : elle ne peut donc pas s'arrêter en route.
 *     Pas prête en 2,5 s : pas d'intro du tout, plutôt qu'une intro qui
 *     hoquette ;
 *   - à la fin, le nom reste sur la dernière image, et le calque s'efface en
 *     fondu (opacité et échelle, calculés par la carte graphique) ;
 *   - un clic ou une touche la passe.
 *
 * Les pages qui doivent attendre la fin (le questionnaire) écoutent
 * l'événement `sp-intro-exit`, envoyé au début du fondu — ou lisent
 * `window.__spIntroActive` (true tant que l'intro est à l'écran).
 */

export function LoadingIntro() {
  return (
    // suppressHydrationWarning : le script modifie ce calque avant que React
    // ne prenne la main (masquage, source de la vidéo).
    <div
      id="sp-intro"
      aria-hidden
      suppressHydrationWarning
      className="fixed inset-0 z-[999] cursor-pointer bg-black"
      style={{ willChange: "opacity, transform" }}
    >
      <video
        suppressHydrationWarning
        className="absolute inset-0 h-full w-full object-contain"
        muted
        playsInline
        preload="none"
      />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
(function(){
  var el = document.getElementById('sp-intro');
  if (!el) return;
  var v = el.querySelector('video');
  var KEY = 'sp_intro_seen';
  function none() { el.style.display = 'none'; window.__spIntroActive = false; }
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var seen = false;
  try { seen = !!window.sessionStorage.getItem(KEY); } catch (e) {}
  var playable = v && v.canPlayType && v.canPlayType('video/mp4; codecs="avc1.640032"');
  if (reduced || seen || window.innerWidth < 900 || !playable) { none(); return; }
  try { window.sessionStorage.setItem(KEY, '1'); } catch (e) {}
  window.__spIntroActive = true;

  var en = (document.documentElement.lang || '').indexOf('en') === 0;
  var onboarding = location.pathname.indexOf('/questionnaire') !== -1;
  var src = '/intro/' + (onboarding ? 'onboarding' : (en ? 'en' : 'fr')) + '.mp4?v=1';

  var finished = false, started = false;
  function exit(fast) {
    if (finished) return;
    finished = true;
    window.__spIntroActive = false;
    window.removeEventListener('pointerdown', skip);
    window.removeEventListener('keydown', skip);
    var d = fast ? 300 : 650;
    // Le fondu : opacité et échelle seulement, calculés par la carte graphique.
    el.style.transition = 'opacity ' + d + 'ms ease-in, transform ' + d + 'ms ease-in';
    el.style.opacity = '0';
    el.style.transform = 'scale(1.05)';
    el.style.pointerEvents = 'none';
    try { window.dispatchEvent(new Event('sp-intro-exit')); } catch (e) {}
    setTimeout(function () {
      el.style.display = 'none';
      try { v.pause(); v.removeAttribute('src'); v.load(); } catch (e) {}
    }, d + 60);
  }
  function skip() { exit(true); }
  window.addEventListener('pointerdown', skip);
  window.addEventListener('keydown', skip);

  // Pas prête à temps : pas d'intro, plutôt qu'une intro qui hoquette.
  var giveUp = setTimeout(function () { if (!started) exit(true); }, 2500);
  function go() {
    if (started || finished) return;
    started = true;
    clearTimeout(giveUp);
    var p;
    try { p = v.play(); } catch (e) { exit(true); return; }
    if (p && p.catch) p.catch(function () { exit(true); });
    // Filet : si la vidéo ne signalait jamais sa fin, on sort quand même.
    setTimeout(function () { exit(false); }, 4600);
  }
  v.muted = true; v.defaultMuted = true; v.playsInline = true;
  v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
  v.addEventListener('canplaythrough', go);
  v.addEventListener('ended', function () { exit(false); });
  v.addEventListener('error', function () { exit(true); });
  v.preload = 'auto';
  v.src = src;
  v.load();
})();
`,
        }}
      />
    </div>
  )
}
