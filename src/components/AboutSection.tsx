import { useCountUp } from '@/hooks/useCountUp';
import img6657 from '@/assets/projects/IMG_6657.JPG';

const stats = [
  { value: 3, suffix: '+', label: "Ans d'expérience" },
  { value: 10, suffix: '+', label: 'Clients accompagnés' },
  { value: 50, suffix: '+', label: 'Projets réalisés' },
  { value: 1, suffix: '', label: 'Agence créée' },
];

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl md:text-5xl font-light text-foreground">
        {count}{suffix}
      </p>
      <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mt-2">{label}</p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="scroll-reveal grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Mon parcours</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8 leading-tight">
            De l'erreur<br />à la maîtrise
          </h2>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
            Je m'appelle <span className="text-foreground">Sié Esso Arsène Christ Emmanuel</span>, mais on me connaît sous le nom de <span className="text-foreground">Seace</span>. Basé à Abidjan, je suis aujourd'hui un profil multipotentiel à l'intersection du design, de la data et du marketing digital.
          </p>
          <p className="font-body text-sm text-foreground/80 italic leading-relaxed mb-4">
            Mais ça n'a pas toujours été le plan.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
            Au départ, j'étais focalisé uniquement sur le marketing digital. Puis la réalité du terrain  ou plutôt l'écosystème  m'a obligé à évoluer, à apprendre, à m'adapter.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
            Aujourd'hui, je suis graphiste, vidéaste, créateur web… et bien plus encore. Pas par choix de dispersion, mais par nécessité de compréhension globale. <span className="text-foreground">Parce que pour performer, il faut comprendre toute la chaîne.</span>
          </p>
          <p className="font-body text-sm text-foreground/80 italic leading-relaxed mb-4">
            Mais avant ça, il y a eu un déclic.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
            Il y a 4 ans, j'ai voulu organiser un événement. Je n'avais pas les bases solides en communication. J'ai compté sur mon entourage. Résultat : <span className="text-foreground">un échec frontal. 1,5 million perdus.</span>
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
            Ce moment a été un tournant. Je me suis fait une promesse simple : <span className="text-foreground">plus jamais je ne subirai un manque de maîtrise.</span>
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
            C'est comme ça que je suis entré dans le digital. J'ai commencé à apprendre, à structurer, à comprendre les mécanismes derrière la visibilité, l'engagement et la conversion.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
            Quelques temps après, j'ai eu l'opportunité de devenir <span className="text-foreground">chef de projet digital pour le Cénacle Organisation</span>, l'une des grandes communautés catholiques du pays. Mission : piloter une équipe de 10 personnes, attirer 15 000 participants et gérer la communication en temps réel sur plusieurs plateformes. <span className="text-foreground">Résultat : objectif dépassé.</span>
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
            Depuis, j'ai enchaîné les expériences :
          </p>
          <ul className="font-body text-sm text-muted-foreground leading-relaxed mb-4 space-y-1 pl-4">
            <li>– Contribution en tant qu'infographe à la réalisation d'une œuvre littéraire</li>
            <li>– Participation à plusieurs campagnes publicitaires (Double Seven, Moya Pay…)</li>
            <li>– Community Manager pour Somewhere Brand</li>
            <li>– Compétences en media buying et direction artistique</li>
          </ul>
          <p className="font-body text-sm text-foreground/80 italic leading-relaxed mb-4">
            Aujourd'hui, je ne me contente plus de créer.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
            Je conçois des systèmes visuels. Je pense en stratégie. Je construis avec intention.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
            Mon parcours m'a mené de l'erreur à la maîtrise, jusqu'à la création de <span className="text-foreground">SEACE Empire</span>, mon agence de communication. Chaque projet que je touche est une équation entre créativité, data et performance.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-10">
            <span className="text-foreground">Ce qui me motive ?</span> Transformer une idée brute en un levier de croissance réel pour une marque.
          </p>
          <div className="flex gap-8">
            {['Multipotentiel', 'Stratège', 'Résilient'].map((word) => (
              <span key={word} className="font-display text-lg md:text-xl italic text-foreground/60">{word}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 items-start">
          {/* Image portrait à droite, en remplacement du bloc "3+" */}
          <div className="col-span-2 w-full">
            <img
              src={img6657}
              alt="Portrait"
              className="w-full h-auto object-contain select-none pointer-events-none"
              loading="eager"
            />
          </div>
          {/* Ordre voulu :
              - `50+ Projets réalisés` en haut à gauche
              - `Ans d'expérience` juste en bas (même colonne) */}
          {[stats[2], stats[1], stats[0], stats[3]].map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
