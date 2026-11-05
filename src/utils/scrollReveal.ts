/**
 * Scroll reveal utility utilizing IntersectionObserver.
 * Automatically respects prefers-reduced-motion.
 */

export function initScrollReveal(selector: string = '[data-reveal]'): void {
  // Check user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const elements = document.querySelectorAll<HTMLElement>(selector);

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    elements.forEach((el) => {
      el.classList.remove('opacity-0', 'translate-y-6');
      el.classList.add('opacity-100', 'translate-y-0');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = el.getAttribute('data-reveal-delay') || '0';
          
          setTimeout(() => {
            el.classList.remove('opacity-0', 'translate-y-6');
            el.classList.add('opacity-100', 'translate-y-0');
          }, parseInt(delay, 10));

          obs.unobserve(el);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  elements.forEach((el) => {
    // Initial hidden state
    el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-6');
    observer.observe(el);
  });
}
