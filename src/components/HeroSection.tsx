import { useEffect, useState } from 'react';

const titles = [
  'Chef de Projet Digital',
  'Social Media Manager',
  'Infographe',
  'Monteur Vidéo',
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 30);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8">
        Abidjan, Côte d'Ivoire
      </p>
      <h1 className="font-display text-[15vw] md:text-[10vw] lg:text-[8vw] font-light tracking-[0.2em] text-foreground leading-none mb-4">
        SEACE
      </h1>
      <p className="font-display text-lg md:text-xl italic text-muted-foreground mb-8">
        Sié Esso Arsène Christ Emmanuel
      </p>
      <div className="h-8 md:h-10 flex items-center justify-center mb-6">
        <p className="font-body text-sm md:text-base tracking-[0.2em] uppercase text-muted-foreground">
          {titles[titleIndex].slice(0, charIndex)}
          <span className="typewriter-cursor" />
        </p>
      </div>
      <p className="font-body text-xs md:text-sm tracking-wider text-muted-foreground max-w-md mb-12 leading-relaxed">
        Je transforme les idées en visuels qui vendent.<br />
        Bienvenue dans mon univers créatif.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#projects"
          className="border border-foreground px-8 py-3 text-xs tracking-[0.2em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Découvrir mon travail
        </a>
        <a
          href="#contact"
          className="border border-muted-foreground/30 px-8 py-3 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:border-foreground hover:text-foreground transition-all duration-300"
        >
          Me contacter
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-10 bg-muted-foreground/30 relative overflow-hidden">
          <div className="w-full h-4 bg-foreground absolute" style={{ animation: 'scrollPulse 2s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
