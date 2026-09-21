/**
 * FPF Dashboard 2027 — Lógica
 */

/* ═══════════════════════════════════════════════════════
   SPLASH SCREEN — Animación de carga
═══════════════════════════════════════════════════════ */
const splash    = document.getElementById('splash');
const dashboard = document.getElementById('dashboard');
const splashMsg = document.getElementById('splash-msg');
const splashBar = document.getElementById('splash-bar');

ENV.SPLASH_STEPS.forEach((step) => {
  setTimeout(() => {
    splashMsg.textContent = step.msg;
    splashBar.style.width = step.pct + '%';
  }, step.delay);
});

// Transición splash → dashboard
setTimeout(() => {
  splash.classList.add('hide');

  setTimeout(() => {
    splash.style.display = 'none';
    dashboard.style.display = 'block';
  }, ENV.TIMING.SPLASH_FADE); // match CSS transition duration
}, ENV.TIMING.SPLASH_DURATION);


/* ═══════════════════════════════════════════════════════
   FECHA ACTUAL EN TOPBAR
═══════════════════════════════════════════════════════ */
const dateEl = document.getElementById('current-date');
if (dateEl) {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formatted = now.toLocaleDateString('es-PE', options);
  dateEl.textContent = formatted.charAt(0).toUpperCase() + formatted.slice(1);
}


/* ═══════════════════════════════════════════════════════
   SALUDO SEGÚN HORA DEL DÍA
═══════════════════════════════════════════════════════ */
const greetingEl = document.getElementById('greeting-text');
if (greetingEl) {
  const hour = new Date().getHours();
  if (hour < 12)       greetingEl.textContent = 'Buenos días';
  else if (hour < 18)  greetingEl.textContent = 'Buenas tardes';
  else                 greetingEl.textContent = 'Buenas noches';
}


/* ═══════════════════════════════════════════════════════
   ANIMACIÓN DE CONTEO EN ESTADÍSTICAS
═══════════════════════════════════════════════════════ */
function animateCounter(el, target, duration = 1200) {
  const start = performance.now();
  const isPercent = target.toString().includes('%');
  const numericTarget = parseInt(target);

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(numericTarget * eased);
    el.textContent = current + (isPercent ? '%' : '');
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

// Arrancar contadores cuando el dashboard sea visible
setTimeout(() => {
  document.querySelectorAll('.stat-card__value').forEach((el) => {
    const text = el.textContent.trim();
    if (/^\d+%?$/.test(text)) {
      animateCounter(el, text, 1400);
    }
  });
}, 3400); // after splash ends
