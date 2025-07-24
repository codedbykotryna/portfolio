import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div 
      className={styles.card}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div className={styles.imageContainer}>
        <img 
          src={project.screenshots[0]} 
          alt={project.title}
          className={styles.image}
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmaWxsPSIjZmZmIiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UHJvamVjdCBTY3JlZW5zaG90PC90ZXh0Pjwvc3ZnPg==';
          }}
        />
        <div className={styles.overlay}>
          <span className={styles.viewProject}>View Project</span>
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        
        <div className={styles.technologies}>
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className={styles.tech}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className={styles.techMore}>
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <div className={styles.category}>
          <span className={styles.categoryBadge}>{project.category}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;