import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../../../data/personal';
import { ColorfulSectionTitle } from '../../ui/ColorfulSectionTitle';
import CompanyModal from '../CompanyModal';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <section id="about" className={styles.about + ' section'}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ColorfulSectionTitle>About Me</ColorfulSectionTitle>
          <div className={styles.content}>
            <div className={styles.text}>
              <p>{personalData.bio}</p>

              {/* Companies */}
              {personalData.companies && personalData.companies.length > 0 && (
                <div className={styles.subsection}>
                  <h3 className={styles.subheading}>Companies I've worked with</h3>
                  <div className={styles.logoGrid}>
                    {personalData.companies.map((company) => (
                      <motion.div 
                        key={company.name} 
                        className={styles.logoItem}
                        whileHover={{ y: -5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedCompany(company)}
                      >
                        <img src={company.logo} alt={company.name} className={styles.logoImage} />
                        <div className={styles.logoOverlay}>
                          <p className={styles.logoText}>{company.name}</p>
                          {company.description && <p className={styles.logoDescription}>{company.description}</p>}
                        </div>
                      </motion.div>
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
      
      <CompanyModal
        company={selectedCompany}
        isOpen={!!selectedCompany}
        onClose={() => setSelectedCompany(null)}
      />
    </section>
  );
};

export default AboutSection;