/**
 * FPF Portal 2027 — Lógica del login
 */

/* ═══════════════════════════════════════════════════════
   AUTO-DETECCIÓN DEL LOGO FPF
   Busca FPFlogo en: .png → .jpg → .jpeg → .svg → .webp
   Alimenta ambas imágenes: panel izquierdo + topbar derecho.
═══════════════════════════════════════════════════════ */
(function detectLogo() {
  const img       = document.getElementById('fpf-logo-img');
  const imgTopbar = document.getElementById('fpf-logo-topbar');
  const fallback  = document.getElementById('fpf-logo-fallback');
  if (!img) return;

  const formats = ['png', 'jpg', 'jpeg', 'svg', 'webp'];
  let attempt   = 0;

  function tryNext() {
    if (attempt >= formats.length) {
      img.style.display      = 'none';
      fallback.style.display = 'block';
      if (imgTopbar) imgTopbar.style.display = 'none';
      return;
    }
    img.src = `FPFlogo.${formats[attempt++]}`;
  }

  img.addEventListener('error', tryNext);
  img.addEventListener('load', () => {
    fallback.style.display = 'none';
    img.style.display      = 'block';
    if (imgTopbar) {
      imgTopbar.src           = img.src;
      imgTopbar.style.display = 'block';
    }
  });

  tryNext();
})();


/* ═══════════════════════════════════════════════════════
   REFERENCIAS AL DOM
═══════════════════════════════════════════════════════ */
const form       = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passInput  = document.getElementById('password');
const emailMsg   = document.getElementById('email-msg');
const passMsg    = document.getElementById('pass-msg');
const btnSubmit  = document.getElementById('btn-submit');
const togglePass = document.getElementById('toggle-pass');
const eyeOff     = document.getElementById('eye-off');
const eyeOn      = document.getElementById('eye-on');


/* ═══════════════════════════════════════════════════════
   VALIDACIÓN
═══════════════════════════════════════════════════════ */
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function applyFieldState(input, msgEl, state, msg = '') {
  input.classList.remove('is-valid', 'is-invalid');

  if (state === 'valid') {
    input.classList.add('is-valid');
    msgEl.textContent = '';
    msgEl.classList.remove('visible');
  } else if (state === 'invalid') {
    input.classList.add('is-invalid');
    msgEl.textContent = msg;
    msgEl.classList.add('visible');
  } else {
    msgEl.textContent = '';
    msgEl.classList.remove('visible');
  }
}

function validateForm() {
  let ok = true;

  if (!emailInput.value.trim()) {
    applyFieldState(emailInput, emailMsg, 'invalid', 'El correo es obligatorio.');
    ok = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    applyFieldState(emailInput, emailMsg, 'invalid', 'Ingresa un correo válido (ej: nombre@fpf.com.pe).');
    ok = false;
  } else {
    applyFieldState(emailInput, emailMsg, 'valid');
  }

  if (!passInput.value) {
    applyFieldState(passInput, passMsg, 'invalid', 'La contraseña es obligatoria.');
    ok = false;
  } else if (passInput.value.length < 6) {
    applyFieldState(passInput, passMsg, 'invalid', 'La contraseña debe tener al menos 6 caracteres.');
    ok = false;
  } else {
    applyFieldState(passInput, passMsg, 'valid');
  }

  return ok;
}


/* ═══════════════════════════════════════════════════════
   VALIDACIÓN EN TIEMPO REAL
═══════════════════════════════════════════════════════ */
emailInput.addEventListener('input', () => {
  const val = emailInput.value.trim();
  if (!val) { applyFieldState(emailInput, emailMsg, 'clear'); return; }
  applyFieldState(emailInput, emailMsg,
    isValidEmail(val) ? 'valid' : 'invalid',
    'Ingresa un correo válido (ej: nombre@fpf.com.pe).'
  );
});

passInput.addEventListener('input', () => {
  const val = passInput.value;
  if (!val) { applyFieldState(passInput, passMsg, 'clear'); return; }
  applyFieldState(passInput, passMsg,
    val.length >= 6 ? 'valid' : 'invalid',
    'La contraseña debe tener al menos 6 caracteres.'
  );
});


/* ═══════════════════════════════════════════════════════
   TOGGLE CONTRASEÑA
═══════════════════════════════════════════════════════ */
togglePass.addEventListener('click', () => {
  const isPw = passInput.type === 'password';
  passInput.type       = isPw ? 'text' : 'password';
  eyeOff.style.display = isPw ? 'none'  : 'block';
  eyeOn.style.display  = isPw ? 'block' : 'none';
  togglePass.setAttribute('aria-label', isPw ? 'Ocultar contraseña' : 'Mostrar contraseña');
});


/* ═══════════════════════════════════════════════════════
   TOAST
═══════════════════════════════════════════════════════ */
let toastTimer = null;

function showToast(message, type = 'success', icon = '') {
  const toast = document.getElementById('toast');
  if (toastTimer) clearTimeout(toastTimer);
  toast.innerHTML = `${icon ? `<span>${icon}</span>` : ''} ${message}`;
  toast.className = `toast toast--${type} show`;
  toastTimer = setTimeout(() => toast.classList.remove('show'), 4000);
}


/* ═══════════════════════════════════════════════════════
   CARGA DEL BOTÓN
═══════════════════════════════════════════════════════ */
function setLoading(on) {
  btnSubmit.classList.toggle('loading', on);
  btnSubmit.setAttribute('aria-busy', on ? 'true' : 'false');
}


/* ═══════════════════════════════════════════════════════
   ENVÍO DEL FORMULARIO
═══════════════════════════════════════════════════════ */
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    showToast('Corrige los campos señalados.', 'error', '⚠');
    return;
  }

  setLoading(true);

  try {
    await simulateServerCall({
      email:    emailInput.value.trim(),
      password: passInput.value,
    });
    showToast('Acceso concedido. Redirigiendo...', 'success', '✓');
  } catch (err) {
    showToast(err.message || 'Credenciales incorrectas.', 'error', '✕');
    applyFieldState(passInput, passMsg, 'invalid', 'Verifica tu contraseña.');
  } finally {
    setLoading(false);
  }
});


/* ═══════════════════════════════════════════════════════
   SIMULACIÓN DEL SERVIDOR (DEMO)
═══════════════════════════════════════════════════════ */
function simulateServerCall(creds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (creds.password === 'error123') {
        reject(new Error('Credenciales incorrectas. Verifica tus datos.'));
      } else {
        resolve({ token: 'demo-jwt', user: creds.email });
      }
    }, 1800);
  });
}


/* ═══════════════════════════════════════════════════════
   CURSOR SPOTLIGHT — Resplandor que sigue al mouse
   (Solo desktop, efecto premium moderno)
═══════════════════════════════════════════════════════ */
if (window.matchMedia('(pointer: fine)').matches) {
  const panel = document.querySelector('.panel-visual');

  panel.addEventListener('mousemove', (e) => {
    const rect = panel.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    panel.style.setProperty('--spot-x', `${x}px`);
    panel.style.setProperty('--spot-y', `${y}px`);

    if (!panel.querySelector('.cursor-spot')) {
      const spot = document.createElement('div');
      spot.className = 'cursor-spot';
      spot.setAttribute('aria-hidden', 'true');
      spot.style.cssText = `
        position: absolute;
        width: 350px; height: 350px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(228,29,37,0.12) 0%, transparent 70%);
        pointer-events: none;
        z-index: 1;
        transition: left 0.15s ease-out, top 0.15s ease-out;
      `;
      panel.appendChild(spot);
    }

    const spot = panel.querySelector('.cursor-spot');
    spot.style.left = `${x - 175}px`;
    spot.style.top  = `${y - 175}px`;
  });

  panel.addEventListener('mouseleave', () => {
    const spot = panel.querySelector('.cursor-spot');
    if (spot) spot.remove();
  });
}
