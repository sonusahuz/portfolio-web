import About from '@/components/ui/About';
import Blogs from '@/components/ui/Blog';
import Contact from '@/components/ui/Contact';
import Footer from '@/components/ui/Footer';
import HeroSection from '@/components/ui/Home';
import Projects from '@/components/ui/Project';
import SkillsPage from '@/components/ui/Skills';
import React from 'react';

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <SkillsPage />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
