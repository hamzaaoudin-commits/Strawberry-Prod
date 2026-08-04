/**
 * L'animation de logo au chargement.
 *
 * Avant, le calque partait invisible (état React initial) et n'apparaissait
 * qu'après l'hydratation, via useEffect — assez tard pour qu'on voie la home
 * pendant un instant avant que l'animation ne démarre. La décision de montrer
 * ou non l'animation doit être prise avant la première image affichée, pas
 * après.
 *
 * Ce composant n'est donc plus piloté par l'état React. Il rend un calque
 * visible par défaut dans le HTML lui-même (aucune classe cachée à retirer
 * plus tard), suivi d'un script en ligne qui s'exécute au moment même où le
 * navigateur atteint cette ligne du document — avant la peinture, avant
 * l'hydratation. Ce script :
 *  - masque le calque instantanément si l'animation a déjà joué cette session
 *    (sessionStorage) ou si l'utilisateur a demandé moins d'animations ;
 *  - sinon, anime les lettres une par une puis efface le calque après environ
 *    2,5 secondes, ou immédiatement au premier clic / à la première touche.
 *
 * Toujours du CSS pour l'animation elle-même (transform/opacity) ; le script
 * ne fait que poser des classes et des délais, rien de coûteux.
 */

const WORD = "Strawberry Prod."

export function LoadingIntro() {
  return (
    <div id="sp-intro" className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0a0a0a]">
      <span className="font-serif text-[clamp(2rem,7vw,3.6rem)] font-bold tracking-[-0.02em]">
        {WORD.split("").map((ch, i) => (
          <span
            key={i}
            data-sp-letter
            className={`sp-intro-letter inline-block opacity-0 translate-y-3 ${i < 10 ? "text-gradient" : "text-white"}`}
            style={{ whiteSpace: ch === " " ? "pre" : "normal", transitionDelay: `${i * 28}ms` }}
          >
            {ch}
          </span>
        ))}
      </span>

      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
(function(){
  var el = document.getElementById('sp-intro');
  if (!el) return;
  var KEY = 'sp_intro_seen';
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var seen = window.sessionStorage.getItem(KEY);
  if (reduced || seen) { el.style.display = 'none'; return; }
  window.sessionStorage.setItem(KEY, '1');
  function letters() { return el.querySelectorAll('[data-sp-letter]'); }
  requestAnimationFrame(function () {
    var ls = letters();
    for (var i = 0; i < ls.length; i++) ls[i].classList.add('sp-intro-in');
  });
  function skip() { finish(); }
  function finish() {
    el.style.opacity = '0';
    el.style.pointerEvents = 'none';
    window.removeEventListener('keydown', skip);
    window.removeEventListener('pointerdown', skip);
    setTimeout(function () { el.style.display = 'none'; }, 400);
  }
  window.addEventListener('keydown', skip, { once: true });
  window.addEventListener('pointerdown', skip, { once: true });
  setTimeout(finish, 2100);
})();
`,
        }}
      />
    </div>
  )
}
