import desperados from '@/assets/projects/desperados.jpg';
import im2 from '@/assets/projects/im2.jpg';
import im1 from '@/assets/projects/im1.jpg';
import im5 from '@/assets/projects/im5.jpg';
import foligout from '@/assets/projects/Foligout.jpg';
import vendrediSaint from '@/assets/projects/vendredi-saint.jpg';
import img6 from '@/assets/projects/img6.jpg';

const images = [
  { src: desperados, alt: 'Desperados — Concept publicitaire' },
  { src: im2, alt: 'Pâques — Résurrection' },
  { src: im1, alt: 'Pâques — Le Tombeau' },
  { src: im5, alt: 'Création — Projet im5' },
  { src: foligout, alt: 'Création — Foligout' },
  { src: vendrediSaint, alt: 'Vendredi Saint' },
  { src: img6, alt: 'Création — img6' },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="scroll-reveal text-center mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Mes réalisations</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">Projets & Créations</h2>
      </div>

      <div className="scroll-reveal columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="break-inside-avoid overflow-hidden"
            data-hover
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="scroll-reveal text-center mt-16">
        <a
          href="https://www.behance.net/christsi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs tracking-[0.15em] uppercase border border-foreground px-8 py-3 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          data-hover
        >
          Voir plus ↗
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;