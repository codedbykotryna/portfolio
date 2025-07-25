import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BackgroundGradient } from '../../ui/BackgroundGradient';
import { personalData } from '../../../data/personal';
import profilePhoto from '../../../assets/images/profile-photo.png';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 10, y: y * 10 });
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = (e) => {
    setImageError(true);
    setImageLoaded(false);
  };

  const imageSource = profilePhoto;

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          <motion.div 
            className={styles.content}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.8, staggerChildren: 0.2 }
              }
            }}
          >
            <motion.h1 className={styles.title} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}>
              {personalData.name}
            </motion.h1>
            <motion.h2 className={styles.subtitle} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
              {personalData.title}
            </motion.h2>
            <motion.p className={styles.description} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              {personalData.bio}
            </motion.p>
            <motion.div className={styles.actions} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className={`btn btn-secondary ${styles.noColorChange}`}>Get In Touch</a>
            </motion.div>
          </motion.div>

          <div className={styles.rightSection}>
            <motion.div
              className={styles.imageContainer}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <BackgroundGradient 
                className={styles.gradientWrapper}
                containerClassName={styles.gradientContainer}
                animate={true}
              >
                <div 
                  className={styles.imageWrapper}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => setTilt({ x: 0, y: 0 })}
                  style={{
                    transform: `rotateX(${-tilt.y}deg) rotateY(${tilt.x}deg)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                >
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
                </div>
              </BackgroundGradient>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;