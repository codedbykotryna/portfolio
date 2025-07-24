import React from 'react';
import { motion } from 'framer-motion';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  return (
    <section id="contact" className={styles.section + ' section'}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Contact</h2>
          <p>This section is ready for your content!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;