const VisionSection = () => (
  <section className="py-32 px-6 md:px-12 bg-foreground">
    <div className="scroll-reveal max-w-4xl mx-auto text-center">
      <p className="text-xs tracking-[0.3em] uppercase text-background/50 mb-10">Ma philosophie</p>
      <blockquote className="font-display text-2xl md:text-4xl lg:text-5xl italic font-light text-background leading-snug mb-8">
        "Le design sans stratégie, c'est de l'art.<br />
        Le design avec stratégie, c'est de la puissance."
      </blockquote>
      <p className="font-body text-sm tracking-[0.2em] uppercase text-background/50 mb-16">— Moi</p>
      <div className="flex justify-center gap-12">
        {['Créer', 'Analyser', 'Impacter'].map((pillar) => (
          <span key={pillar} className="font-display text-lg md:text-xl text-background/30 tracking-[0.15em]">
            {pillar}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default VisionSection;
