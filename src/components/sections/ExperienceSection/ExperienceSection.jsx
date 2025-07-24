import React from 'react';
import { motion } from 'framer-motion';
import styles from './ExperienceSection.module.css';

const ExperienceSection = () => {
  return (
    <section id="experience" className={styles.section + ' section'}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Experience</h2>
          <p>This section is ready for your content!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;