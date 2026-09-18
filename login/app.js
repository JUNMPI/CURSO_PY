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

// Spatial UI variables
const stepEmail    = document.getElementById('step-email');
const stepPassword = document.getElementById('step-password');
const btnNext      = document.getElementById('btn-next');
const btnBack      = document.getElementById('btn-back');
const displayEmail = document.getElementById('display-email');


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

function validatePassword() {
  if (!passInput.value) {
    applyFieldState(passInput, passMsg, 'invalid', 'La contraseña es obligatoria.');
    return false;
  } else if (passInput.value.length < 6) {
    applyFieldState(passInput, passMsg, 'invalid', 'La contraseña debe tener al menos 6 caracteres.');
    return false;
  }
  applyFieldState(passInput, passMsg, 'valid');
  return true;
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
/* ═══════════════════════════════════════════════════════
   FLUJO DE DOS PASOS (DYNAMIC ISLAND)
═══════════════════════════════════════════════════════ */
btnNext.addEventListener('click', () => {
  const val = emailInput.value.trim();
  if (!val || !isValidEmail(val)) {
    applyFieldState(emailInput, emailMsg, 'invalid', 'Ingresa un correo válido primero.');
    return;
  }
  
  // Animar transición al paso 2
  displayEmail.textContent = val;
  stepEmail.classList.remove('active');
  
  setTimeout(() => {
    stepEmail.style.display = 'none';
    stepPassword.style.display = 'flex';
    
    // Pequeño delay para que el display:flex renderice antes de la opacidad
    setTimeout(() => {
      stepPassword.classList.add('active');
      passInput.focus();
    }, 20);
  }, 400); // match css transition
});

btnBack.addEventListener('click', () => {
  stepPassword.classList.remove('active');
  
  setTimeout(() => {
    stepPassword.style.display = 'none';
    stepEmail.style.display = 'flex';
    
    setTimeout(() => {
      stepEmail.classList.add('active');
      emailInput.focus();
    }, 20);
  }, 400);
});


/* ═══════════════════════════════════════════════════════
   ENVÍO DEL FORMULARIO
═══════════════════════════════════════════════════════ */
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Si damos enter en el paso 1, pasamos al paso 2
  if (stepEmail.classList.contains('active')) {
    btnNext.click();
    return;
  }

  // Paso 2: Validar contraseña
  if (!validatePassword()) {
    showToast('Corrige tu contraseña.', 'error', '⚠');
    return;
  }

  setLoading(true);

  try {
    await simulateServerCall({
      email:    emailInput.value.trim(),
      password: passInput.value,
    });
    
    // Transformación del botón estilo Apple FaceID
    btnSubmit.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="animation: fadeUp 0.3s ease"><polyline points="20 6 9 17 4 12"/></svg>`;
    btnSubmit.style.background = 'rgba(255,255,255,0.1)';
    btnSubmit.style.border = '1px solid rgba(34, 197, 94, 0.4)';
    
    showToast('Autenticación Biométrica Exitosa', 'success', '✓');
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
   SPATIAL 3D CARD TILT (Efecto Apple TV)
═══════════════════════════════════════════════════════ */
if (window.matchMedia('(pointer: fine)').matches) {
  const wrapper = document.getElementById('auth-3d');
  const edgeLight = document.querySelector('.edge-light');
  
  if (wrapper && edgeLight) {
    wrapper.addEventListener('mousemove', (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPct = x / rect.width;
      const yPct = y / rect.height;
      
      // Rotación suave
      const rotX = (yPct - 0.5) * -20;
      const rotY = (xPct - 0.5) * 20;
      
      wrapper.style.setProperty('--rot-x', `${rotX}deg`);
      wrapper.style.setProperty('--rot-y', `${rotY}deg`);
      
      // Borde de luz reactivo
      const lightX = xPct * 100;
      const lightY = yPct * 100;
      edgeLight.style.setProperty('--light-x', `${lightX}%`);
      edgeLight.style.setProperty('--light-y', `${lightY}%`);
    });
    
    wrapper.addEventListener('mouseleave', () => {
      wrapper.style.setProperty('--rot-x', `0deg`);
      wrapper.style.setProperty('--rot-y', `0deg`);
      edgeLight.style.setProperty('--light-x', `50%`);
      edgeLight.style.setProperty('--light-y', `-20%`);
    });
  }
}

/* ═══════════════════════════════════════════════════════
   CURSOR SPOTLIGHT — Resplandor que sigue al mouse
   (Performance optimizado con requestAnimationFrame)
═══════════════════════════════════════════════════════ */
if (window.matchMedia('(pointer: fine)').matches) {
  const layout = document.querySelector('.layout');
  
  const spot = document.createElement('div');
  spot.className = 'cursor-spot';
  spot.setAttribute('aria-hidden', 'true');
  document.body.appendChild(spot);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let isMoving = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isMoving) {
      isMoving = true;
      requestAnimationFrame(updateSpotlight);
    }
  });

  function updateSpotlight() {
    document.body.style.setProperty('--spot-x', `${mouseX}px`);
    document.body.style.setProperty('--spot-y', `${mouseY}px`);
    isMoving = false;
  }
}
