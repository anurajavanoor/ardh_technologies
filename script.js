// =============================================
// ARDH Technologies — script.js
// =============================================

// ---- Contact form ----
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    // Replace this with Formspree or your backend
    setTimeout(() => {
      btn.textContent = '✓ Inquiry Sent!';
      btn.style.background = '#4caf50';
      form.reset();
      setTimeout(() => {
        btn.textContent = 'Send Inquiry →';
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    }, 1200);
  });
}

// ---- Slideshow ----
(function() {
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.dot');
  const prev   = document.getElementById('prevBtn');
  const next   = document.getElementById('nextBtn');
  let current  = 0;
  let autoTimer;

  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startAuto() {
    autoTimer = setInterval(() => goTo(current + 1), 5000);
  }
  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  if (prev) prev.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  if (next) next.addEventListener('click', () => { goTo(current + 1); resetAuto(); });

  dots.forEach(dot => {
    dot.addEventListener('click', () => { goTo(+dot.dataset.slide); resetAuto(); });
  });

  startAuto();

  // Touch/swipe support
  let touchStartX = 0;
  const ss = document.getElementById('slideshow');
  if (ss) {
    ss.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    ss.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { goTo(diff > 0 ? current + 1 : current - 1); resetAuto(); }
    });
  }
})();

// ---- Mobile nav toggle ----
const navToggle  = document.getElementById('navToggle');
const navLinks   = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ---- Header scroll effect ----
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(13,13,13,0.98)';
  } else {
    header.style.background = 'rgba(13,13,13,0.92)';
  }
}, { passive: true });

// ---- Fade-in on scroll ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .contact-card, .howto-step').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
