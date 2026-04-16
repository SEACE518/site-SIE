import { useState, useCallback } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import ProjectsSection from '@/components/ProjectsSection';
import VisionSection from '@/components/VisionSection';
import SkillsSection from '@/components/SkillsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => setLoaded(true), []);

  // Only activate scroll reveal after loading is complete
  useScrollReveal(loaded);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ProjectsSection />
        <VisionSection />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
