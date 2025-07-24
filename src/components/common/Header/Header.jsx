import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { personalData } from '../../../data/personal';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', hash: '#home' },
    { name: 'About', path: '/', hash: '#about' },
    { name: 'Projects', path: '/', hash: '#projects' },
    { name: 'Experience', path: '/', hash: '#experience' },
    { name: 'Contact', path: '/', hash: '#contact' }
  ];

  return (
    <motion.header 
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className={styles.nav}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoText}>{personalData.name}</span>
          </Link>

          <nav className={styles.navigation}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.hash}
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.hash);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            className={styles.mobileMenuToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div 
          className={styles.mobileMenu}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.hash}
              className={styles.mobileNavLink}
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(item.hash);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
                setIsMobileMenuOpen(false);
              }}
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;