import React from 'react';
import styles from './SectionHeader.module.css';

export interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  eyebrow,
  heading,
  subtext,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div className={`${styles.header} ${align === 'center' ? styles.headerCenter : styles.headerLeft}`}>
      {eyebrow && (
        <span className={`type-label ${styles.eyebrow}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`type-h1 ${styles.heading} ${subtext ? styles.headingWithSubtext : ''}`}>
        {heading}
      </h2>
      {subtext && (
        <p className={`type-body ${styles.subtext}`}>
          {subtext}
        </p>
      )}
    </div>
  );
}
