import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const addHover = () => cursor.classList.add('hover');
    const removeHover = () => cursor.classList.remove('hover');

    document.addEventListener('mousemove', move);

    const interactives = document.querySelectorAll('a, button, [data-hover]');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    // Re-observe on DOM changes
    const mutationObserver = new MutationObserver(() => {
      const newInteractives = document.querySelectorAll('a, button, [data-hover]');
      newInteractives.forEach((el) => {
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', move);
      mutationObserver.disconnect();
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor hidden md:block" />;
};

export default CustomCursor;
