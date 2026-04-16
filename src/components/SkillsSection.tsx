import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Design',
    skills: [
      { name: 'Canva', level: 95 },
      { name: 'Adobe Suite', level: 80 },
      { name: 'CapCut', level: 90 },
    ],
  },
  {
    title: 'Data',
    skills: [
      { name: 'Python', level: 75 },
      { name: 'Excel', level: 90 },
      { name: 'Notion', level: 95 },
    ],
  },
  {
    title: 'IA',
    skills: [
      { name: 'Claude', level: 90 },
      { name: 'Midjourney', level: 85 },
      { name: 'ChatGPT', level: 95 },
    ],
  },
  {
    title: 'Marketing',
    skills: [
      { name: 'Meta Ads', level: 85 },
      { name: 'TikTok', level: 80 },
      { name: 'Content Strategy', level: 90 },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-body text-xs tracking-wider text-foreground">{name}</span>
        <span className="font-body text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-px bg-border w-full">
        <div
          className="h-full bg-foreground progress-bar-fill"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => (
  <section id="skills" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
    <div className="scroll-reveal text-center mb-16">
      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Compétences</p>
      <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">Outils & Technologies</h2>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {skillCategories.map((cat) => (
        <div key={cat.title} className="scroll-reveal">
          <h3 className="font-display text-xl text-foreground mb-6">{cat.title}</h3>
          {cat.skills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
