import { useEffect } from 'react';

export const useScrollReveal = (enabled = true) => {
  useEffect(() => {
    if (!enabled) return;

    // Small delay to ensure DOM is rendered
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, [enabled]);
};
