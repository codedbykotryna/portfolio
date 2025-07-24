import React from 'react';
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProjectModal.module.css';

// Set app element for accessibility
if (typeof document !== 'undefined') {
  Modal.setAppElement('#root');
}

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

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
            
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.description}>{project.description}</p>
            
            <div className={styles.technologies}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.tech}>
                  {tech}
                </span>
              ))}
            </div>
            
            {project.features && (
              <div className={styles.features}>
                <h3>Key Features</h3>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className={styles.actions}>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
};

export default ProjectModal;