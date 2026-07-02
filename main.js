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

  /* ---------- Subtle parallax on article hero photos ---------- */
  const parallaxEls = document.querySelectorAll('.article-hero');
  if (parallaxEls.length) {
    let ticking = false;
    const updateParallax = () => {
      parallaxEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        const shift = rect.top * 0.12;
        el.style.backgroundPosition = `center calc(50% + ${shift}px)`;
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
    updateParallax();
  }

  /* ---------- Animated stat count-up (stat strips on article pages) ---------- */
  const statStrips = document.querySelectorAll('.stat-strip');
  if (statStrips.length && 'IntersectionObserver' in window) {
    const animateValue = (el) => {
      const original = el.textContent.trim();
      const match = original.match(/^([+\-−]?)(\d+(\.\d+)?)/);
      if (!match) return;
      const prefix = match[1];
      const num = parseFloat(match[2]);
      const decimals = match[3] ? match[3].length - 1 : 0;
      const suffix = original.slice(match[0].length);
      const duration = 900;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const current = num * eased;
        el.textContent = prefix + current.toFixed(decimals) + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = original;
      };
      requestAnimationFrame(step);
    };
    const statIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.val').forEach(animateValue);
          statIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    statStrips.forEach(strip => statIo.observe(strip));
  }

});
