import { useState } from 'react';
import { Cpu, LineChart, Palette, Smartphone } from 'lucide-react';

const expertises = [
  {
    icon: Palette,
    title: 'infographe',
    desc: 'Je crée des identités visuelles qui marquent les esprits et racontent une histoire unique.',
  },
  {
    icon: LineChart,
    title: 'Data & Marketing',
    desc: 'J\'analyse les données pour transformer chaque décision créative en levier de croissance.',
  },
  {
    icon: Cpu,
    title: 'Montage vidéo',
    desc: "J’immortalise vos moments forts avec des montages vidéo percutants, pour faire de chaque projet une histoire mémorable.",
  },
  {
    icon: Smartphone,
    title: 'Stratégie Social Media',
    desc: 'Je conçois des contenus qui génèrent de l\'engagement et construisent des communautés.',
  },
];

const ExpertiseSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="expertise" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="scroll-reveal text-center mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Ce que je fais</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">Mes domaines d'expertise</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {expertises.map((item, i) => (
          <div
            key={i}
            className="scroll-reveal group relative overflow-hidden border border-border p-8 transition-all duration-500 flex flex-col items-center text-center"
            style={{ transitionDelay: `${i * 100}ms` }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            data-hover
          >
            <div
              className={`text-3xl mb-6 transition-transform duration-300 ${hovered === i ? 'scale-125' : ''}`}
            >
              {/* Lucide icon as a React component */}
              {(() => {
                const Icon = item.icon;
                return <Icon className="w-10 h-10" aria-hidden="true" />;
              })()}
            </div>
            <h3 className={`font-display text-xl mb-4 transition-colors duration-300 ${
              hovered === i ? 'text-background' : 'text-foreground'
            }`}>
              {item.title}
            </h3>
            <p className={`font-body text-xs leading-relaxed transition-colors duration-300 ${
              hovered === i ? 'text-background/70' : 'text-muted-foreground'
            }`}>
              {item.desc}
            </p>
            <div
              className={`absolute inset-0 bg-foreground transition-transform duration-500 origin-bottom -z-10 ${
                hovered === i ? 'scale-y-100' : 'scale-y-0'
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
