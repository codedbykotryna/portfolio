import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard';
import styles from './ProjectGrid.module.css';

const ProjectGrid = ({ projects, onProjectClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className={styles.grid}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={itemVariants}>
          <ProjectCard 
            project={project}
            onClick={() => onProjectClick(project)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectGrid;