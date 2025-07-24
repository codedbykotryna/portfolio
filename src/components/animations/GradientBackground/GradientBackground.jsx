import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './GradientBackground.module.css';

const GradientBackground = () => {
  const { scrollYProgress } = useScroll();
  
  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ['0% 0%', '100% 100%']
  );

  return (
    <motion.div 
      className={styles.gradient}
      style={{ backgroundPosition }}
    />
  );
};

export default GradientBackground;