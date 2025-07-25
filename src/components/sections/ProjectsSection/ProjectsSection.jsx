import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ColorfulSectionTitle } from '../../ui/ColorfulSectionTitle';
import ProjectGrid from './ProjectGrid';
import ProjectModal from './ProjectModal';
import { projects } from '../../../data/projects';
import styles from './ProjectsSection.module.css';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="projects" className={styles.projects + ' section'}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ColorfulSectionTitle>Featured Projects</ColorfulSectionTitle>
          
          <ProjectGrid 
            projects={projects}
            onProjectClick={setSelectedProject}
          />
        </motion.div>
      </div>
      
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;