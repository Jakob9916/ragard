import { useEffect, useRef } from 'react';

export function useScrollAnimation(className: string) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Vänta en tick så att DOM är uppdaterad
    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll(`.${className}`);
      const observer = new window.IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
          } else {
            entry.target.classList.remove('scroll-visible');
          }
        });
      }, { threshold: 0.4 }); // Aktivera senare, när 40% av elementet syns

      elements.forEach((el) => observer.observe(el));
    }, 0);
    return () => clearTimeout(timeout);
  }, [className]);

  return ref;
}
