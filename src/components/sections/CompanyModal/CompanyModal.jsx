import React from 'react';
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CompanyModal.module.css';

// Set app element for accessibility
if (typeof document !== 'undefined') {
  Modal.setAppElement('#root');
}

const CompanyModal = ({ company, isOpen, onClose }) => {
  if (!company) return null;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50,
      transition: { duration: 0.2 }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      closeTimeoutMS={200}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={styles.content}
          >
            <button className={styles.closeButton} onClick={onClose}>
              ×
            </button>
            
            <div className={styles.header}>
              <img 
                src={company.logo} 
                alt={company.name}
                className={styles.companyLogo}
              />
              <div className={styles.headerText}>
                <h2 className={styles.title}>{company.name}</h2>
                {company.position && <p className={styles.position}>{company.position}</p>}
                {company.duration && <p className={styles.duration}>{company.duration}</p>}
              </div>
            </div>
            
            {company.description && (
              <p className={styles.description}>{company.description}</p>
            )}
            
            {company.responsibilities && company.responsibilities.length > 0 && (
              <div className={styles.section}>
                <h3>Key Responsibilities</h3>
                <ul className={styles.list}>
                  {company.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {company.achievements && company.achievements.length > 0 && (
              <div className={styles.section}>
                <h3>Key Achievements</h3>
                <ul className={styles.list}>
                  {company.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {company.technologies && company.technologies.length > 0 && (
              <div className={styles.section}>
                <h3>Technologies Used</h3>
                <div className={styles.technologies}>
                  {company.technologies.map((tech, index) => (
                    <span key={index} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {company.projects && company.projects.length > 0 && (
              <div className={styles.section}>
                <h3>Notable Projects</h3>
                <div className={styles.projects}>
                  {company.projects.map((project, index) => (
                    <div key={index} className={styles.project}>
                      <h4 className={styles.projectTitle}>{project.name}</h4>
                      <p className={styles.projectDescription}>{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {(company.website || company.linkedIn) && (
              <div className={styles.actions}>
                {company.website && (
                  <a 
                    href={company.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    Visit Website
                  </a>
                )}
                {company.linkedIn && (
                  <a 
                    href={company.linkedIn} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
};

export default CompanyModal;