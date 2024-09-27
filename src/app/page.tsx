import About from '@/components/ui/About';
import Blogs from '@/components/ui/Blog';
import Footer from '@/components/ui/Footer';
import HeroSection from '@/components/ui/Home';
import Projects from '@/components/ui/Project';
import SkillsPage from '@/components/ui/Skills';
import React from 'react';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <SkillsPage />
      <Projects />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
