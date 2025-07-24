import React from 'react';
import HeroSection from '../../components/sections/HeroSection';
import AboutSection from '../../components/sections/AboutSection';
import ProjectsSection from '../../components/sections/ProjectsSection';
import ExperienceSection from '../../components/sections/ExperienceSection';
import ContactSection from '../../components/sections/ContactSection';
import GradientBackground from '../../components/animations/GradientBackground';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <GradientBackground />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default Home;