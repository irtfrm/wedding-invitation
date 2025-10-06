// public/scripts/reveal.js
(() => {
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (prefersReduced) return;
  
    const els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;
  
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          const stagger = parseFloat(el.dataset.stagger || '0');
          if (stagger && el.children?.length) {
            Array.from(el.children).forEach((child, i) => {
              child.style.transitionDelay = `${i * stagger}s`;
              child.classList.add('is-visible');
            });
          }
          el.classList.add('is-visible');
          if (el.dataset.once !== 'false') io.unobserve(el);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
  
    els.forEach((el) => io.observe(el));
  })();
  