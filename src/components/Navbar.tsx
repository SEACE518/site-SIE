import { useEffect, useState } from 'react';

const links = [
  { label: 'À propos', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projets', href: '#projects' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setHidden(y > lastY && y > 200);
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-body ${
        scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="font-display text-xl md:text-2xl tracking-[0.2em] text-foreground font-light">
          SEACE
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-foreground after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
