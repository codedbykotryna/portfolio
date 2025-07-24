import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InteractiveCenter from './InteractiveCenter';
import { personalData } from '../../../data/personal';
// Import your image directly
import profilePhoto from '../../../assets/images/profile-photo.png';
import styles from './HeroSection.module.css';


const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
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

  const handleImageLoad = () => {
    console.log('✅ Image loaded successfully!');
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = (e) => {
    console.log('❌ Image failed to load:', e.target.src);
    setImageError(true);
    setImageLoaded(false);
  };

  // Use imported image instead of personalData.avatar
  const imageSource = profilePhoto;
  console.log('🖼️ Using imported image:', imageSource);

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left Side - Content */}
          <motion.div 
            className={styles.content}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className={styles.title} variants={itemVariants}>
              {personalData.name}
            </motion.h1>
            
            <motion.h2 className={styles.subtitle} variants={itemVariants}>
              {personalData.title}
            </motion.h2>
            
            <motion.p className={styles.description} variants={itemVariants}>
              {personalData.bio}
            </motion.p>
            
            <motion.div className={styles.actions} variants={itemVariants}>
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right Side - Image */}
          <div className={styles.rightSection}>
            <motion.div 
              className={styles.imageContainer}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className={styles.imageWrapper}>
                <img 
                  src={imageSource}
                  alt={personalData.name}
                  className={styles.profileImage}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  style={{ 
                    display: imageError ? 'none' : 'block',
                    opacity: imageLoaded ? 1 : 0 
                  }}
                />                
                {!imageLoaded && !imageError && (
                  <div className={styles.imageLoading}>
                    <div className={styles.loadingSpinner}></div>
                  </div>
                )}
                
                {imageError && (
                  <div className={styles.imageFallback}>
                    <div className={styles.fallbackContent}>
                      <span className={styles.fallbackIcon}>👨‍💻</span>
                      <span className={styles.fallbackText}>C# Developer</span>
                    </div>
                  </div>
                )}
                
                <div className={styles.imageBorder}></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;