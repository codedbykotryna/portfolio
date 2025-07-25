import React from "react";
import { TextGenerateEffect } from "./TextGenerateEffect";
import styles from './ColorfulSectionTitle.module.css';

export const ColorfulSectionTitle = ({ 
  children, 
  className = "",
  duration = 0.5,
  filter = true 
}) => {
  return (
    <div className={`${styles.titleContainer} ${className}`}>
      <TextGenerateEffect 
        words={children} 
        className={styles.colorfulTitle}
        duration={duration}
        filter={filter}
      />
    </div>
  );
};