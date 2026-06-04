/* ============================================================
   GIOVANI — GESTOR DE DELIVERY
   main.js — Shared scripts (nav, scroll reveal)
   ============================================================ */

/* ── MOBILE NAV ── */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('nav-mobile');

if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });

  // close menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileMenu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObserver.unobserve(e.target);
    }
  }),
  { threshold: 0.08 }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── ACTIVE NAV LINK on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach(s => sectionObserver.observe(s));
