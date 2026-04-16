import { useState } from 'react';

const testimonials = [
  {
    quote: "Seace a une vision unique. Il ne fait pas juste du beau, il crée des visuels qui transforment vraiment le business.",
    name: 'Aminata K.',
    company: 'Mr yves Arsène KOUAKOU',
    city: 'Abidjan',
  },
  {
    quote: "Travailler avec Arsène, c'est avoir un partenaire qui comprend autant le business que le design. Rare et précieux.",
    name: 'Joel DODOHORA ',
    company: 'Jodo House Edition',
    city: 'Abidjan',
  },
  {
    quote: "Sa capacité à mêler créativité et données est impressionnante. Les résultats parlent d'eux-mêmes.",
    name: 'COULIBALY AUBEH',
    company: 'JAMAICA GROOVE',
    city: 'ABIDJAN',
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-32 px-6 md:px-12 border-t border-border">
      <div className="scroll-reveal max-w-3xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-16">Ce qu'on dit de moi</p>
        <div className="relative min-h-[200px] flex items-center justify-center">
          <div key={current} className="animate-[fadeIn_0.5s_ease]">
            <blockquote className="font-display text-xl md:text-2xl italic font-light text-foreground leading-relaxed mb-8">
              "{testimonials[current].quote}"
            </blockquote>
            <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">
              {testimonials[current].name} — {testimonials[current].company}, {testimonials[current].city}
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-8 h-px transition-all duration-300 ${i === current ? 'bg-foreground' : 'bg-border'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
