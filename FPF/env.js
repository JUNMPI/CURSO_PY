/**
 * FPF Portal 2027 — Configuración Global
 * ─────────────────────────────────────────
 * Variables de entorno, rutas, tiempos y textos.
 * Importar en cada JS:  import * as ENV from '../env.js';
 * O usar directamente:  <script type="module" src="../env.js">
 *
 * NOTA: En producción esto vendría de un .env o un CMS.
 *       Por ahora es un mockup estático.
 */

const ENV = Object.freeze({

  /* ── Rutas ── */
  ROUTES: Object.freeze({
    LOGIN:     '../login/index.html',
    DASHBOARD: '../dashboard/index.html',
  }),

  /* ── Tiempos (ms) ── */
  TIMING: Object.freeze({
    SPLASH_DURATION:    2200,   // Duración total del splash (antes: 3200)
    SPLASH_FADE:        500,    // Duración del fade-out del splash
    REDIRECT_DELAY:     1200,   // Delay después del login exitoso antes de redirigir
    SERVER_LATENCY:     1400,   // Simulación de latencia del servidor (antes: 1800)
    TOAST_DURATION:     3500,   // Cuánto tiempo se muestra un toast
    STEP_TRANSITION:    300,    // Transición entre pasos del form (antes: 400)
  }),

  /* ── Splash Steps (para la barra de progreso) ── */
  SPLASH_STEPS: Object.freeze([
    { msg: 'Verificando credenciales',   pct: 20,  delay: 0    },
    { msg: 'Conectando con el servidor', pct: 50,  delay: 500  },
    { msg: 'Cargando datos del sistema', pct: 75,  delay: 1000 },
    { msg: 'Preparando tu dashboard',    pct: 90,  delay: 1500 },
    { msg: '¡Todo listo!',               pct: 100, delay: 1900 },
  ]),

  /* ── Mensajes ── */
  MSG: Object.freeze({
    EMAIL_INVALID:      'Ingresa un correo válido (ej: nombre@fpf.com.pe).',
    EMAIL_REQUIRED:     'Ingresa un correo válido primero.',
    PASS_REQUIRED:      'La contraseña es obligatoria.',
    PASS_MIN_LENGTH:    'La contraseña debe tener al menos 6 caracteres.',
    PASS_VERIFY:        'Verifica tu contraseña.',
    PASS_FIX:           'Corrige tu contraseña.',
    LOGIN_SUCCESS:      'Autenticación Biométrica Exitosa',
    LOGIN_FAIL:         'Credenciales incorrectas. Verifica tus datos.',
  }),

  /* ── Validación ── */
  VALIDATION: Object.freeze({
    MIN_PASS_LENGTH: 6,
    EMAIL_REGEX:     /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  }),

  /* ── Meta ── */
  APP_NAME:    'FPF Portal',
  APP_VERSION: '2027.1.0',
  ORG_NAME:    'Federación Peruana de Fútbol',
});

// Hacer disponible globalmente (para scripts no-module)
window.ENV = ENV;
