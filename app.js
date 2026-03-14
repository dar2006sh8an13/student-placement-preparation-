/* ===========================
   PlacePro – app.js
   Shared utility functions
   =========================== */

// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

// Auth tab switcher
function switchTab(tab) {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const loginTab = document.getElementById('loginTab');
  const signupTab = document.getElementById('signupTab');
  if (!loginForm) return;

  if (tab === 'login') {
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
  } else {
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
  }
}

// Login handler
function handleLogin() {
  const email = document.getElementById('loginEmail')?.value.trim();
  const password = document.getElementById('loginPassword')?.value;
  let valid = true;

  clearErrors(['loginEmailErr', 'loginPassErr']);

  if (!email || !email.includes('@')) {
    showError('loginEmailErr', 'Please enter a valid email address.');
    document.getElementById('loginEmail').classList.add('error');
    valid = false;
  }
  if (!password || password.length < 6) {
    showError('loginPassErr', 'Password must be at least 6 characters.');
    document.getElementById('loginPassword').classList.add('error');
    valid = false;
  }

  if (valid) {
    showSuccess();
    setTimeout(() => window.location.href = 'dashboard.html', 1500);
  }
}

// Signup handler
function handleSignup() {
  const name = document.getElementById('signupName')?.value.trim();
  const email = document.getElementById('signupEmail')?.value.trim();
  const pass = document.getElementById('signupPass')?.value;
  const confirm = document.getElementById('signupConfirm')?.value;
  let valid = true;

  clearErrors(['nameErr', 'emailErr', 'passErr', 'confirmErr']);

  if (!name || name.length < 2) {
    showError('nameErr', 'Please enter your full name.');
    valid = false;
  }
  if (!email || !email.includes('@')) {
    showError('emailErr', 'Please enter a valid email.');
    valid = false;
  }
  if (!pass || pass.length < 8) {
    showError('passErr', 'Password must be at least 8 characters.');
    valid = false;
  }
  if (pass !== confirm) {
    showError('confirmErr', 'Passwords do not match.');
    valid = false;
  }

  if (valid) {
    showSuccess();
    setTimeout(() => window.location.href = 'dashboard.html', 1500);
  }
}

function showError(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}
function clearErrors(ids) {
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '';
  });
  document.querySelectorAll('.form-input').forEach(inp => inp.classList.remove('error'));
}
function showSuccess() {
  document.querySelectorAll('.auth-form').forEach(f => f.style.display = 'none');
  const s = document.getElementById('successMsg');
  if (s) s.style.display = 'block';
}

// Smooth entrance animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.style.opacity = '1';
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .step, .stat-card, .module-card').forEach(el => {
  el.style.opacity = '0.6';
  el.style.transition = 'opacity 0.4s ease';
  observer.observe(el);
});
