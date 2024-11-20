// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import './App.css'; // Custom CSS
import SkillsSection from './components/SkillsSection';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      
      <ProjectsSection />
      <SkillsSection/>
      <ContactSection />
    </>
  );
}

export default App;
