/* Trackside Ink — shared site behaviour
   Scroll reveal, hover-ready cards, filter chips, page-fade transitions,
   and the homepage hero track animation. Pure vanilla JS, no dependencies. */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Scroll-triggered reveal ---------- */
  const revealTargets = document.querySelectorAll('.reveal, .post-card');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- Category filter chips (homepage) ---------- */
  const chips = document.querySelectorAll('.filter-chip');
  const cards = document.querySelectorAll('.post-card');
  if (chips.length) {
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const cat = chip.dataset.filter;
        cards.forEach(card => {
          const show = cat === 'all' || card.dataset.category === cat;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* ---------- Smooth page-fade transitions between internal pages ---------- */
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || link.target === '_blank') return;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.add('is-leaving');
      setTimeout(() => { window.location.href = href; }, 280);
    });
  });

  /* ---------- Active nav link highlight ---------- */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const target = a.getAttribute('href');
    if (target === path || (path === '' && target === 'index.html')) a.classList.add('active');
  });

});
