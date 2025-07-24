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

              {/* Companies */}
              {personalData.companies && personalData.companies.length > 0 && (
                <div className={styles.subsection}>
                  <h3 className={styles.subheading}>Companies I've worked with</h3>
                  <div className={styles.logoGrid}>
                    {personalData.companies.map((company) => (
                      <div key={company.name} className={styles.logoItem}>
                        <img src={company.logo} alt={company.name} className={styles.logoImage} />
                        <div className={styles.logoOverlay}>
                          <p className={styles.logoText}>{company.name}</p>
                          {company.description && <p className={styles.logoDescription}>{company.description}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills */}
              {personalData.skills && (
                <div className={styles.subsection}>
                  <h3 className={styles.subheading}>Skills</h3>
                  <div className={styles.skillGroup}>
                    <p className={styles.skillLabel}>Primary:</p>
                    <ul className={styles.itemList}>
                      {personalData.skills.primary.map((skill) => (
                        <li key={skill} className={styles.item}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.skillGroup}>
                    <p className={styles.skillLabel}>Secondary:</p>
                    <ul className={styles.itemList}>
                      {personalData.skills.secondary.map((skill) => (
                        <li key={skill} className={styles.item}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
