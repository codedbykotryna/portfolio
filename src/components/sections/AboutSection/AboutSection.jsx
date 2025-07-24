import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../../../data/personal';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section id="about" className={styles.about + ' section'}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className={styles.content}>
            <div className={styles.text}>
              <p>{personalData.bio}</p>
              <div className={styles.stats}>
                {Object.entries(personalData.stats).map(([key, value]) => (
                  <div key={key} className={styles.stat}>
                    <span className={styles.statValue}>{value}</span>
                    <span className={styles.statLabel}>{key.replace(/([A-Z])/g, ' $1').toLowerCase()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;