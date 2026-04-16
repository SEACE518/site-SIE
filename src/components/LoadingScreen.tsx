import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'letters' | 'fadeOut' | 'done'>('letters');
  const letters = 'SEACE'.split('');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('fadeOut'), 1800);
    const t2 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-700"
      style={{ opacity: phase === 'fadeOut' ? 0 : 1 }}
    >
      <h1 className="font-display text-6xl md:text-8xl font-light tracking-[0.3em] text-foreground">
        {letters.map((letter, i) => (
          <span
            key={i}
            className="loading-letter"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default LoadingScreen;
