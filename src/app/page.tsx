import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import Research from '@/components/sections/Research';
import Certifications from '@/components/sections/Certifications';
import GithubStats from '@/components/sections/GithubStats';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050816]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Research />
      <Certifications />
      <GithubStats />
      <Contact />
      <Footer />
    </main>
  );
}
