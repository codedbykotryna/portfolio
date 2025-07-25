import React from 'react';
import HeroSection from '../../components/sections/HeroSection';
import AboutSection from '../../components/sections/AboutSection';
import ContactSection from '../../components/sections/ContactSection';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Home;