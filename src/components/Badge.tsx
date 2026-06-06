import React from 'react';
import styles from './Badge.module.css';

interface StatusBadgeProps {
  variant: 'active' | 'coming-soon' | 'in-development';
  children: React.ReactNode;
}

export function StatusBadge({ variant, children }: StatusBadgeProps) {
  let variantClass = '';
  switch (variant) {
    case 'active':
      variantClass = styles.statusActive;
      break;
    case 'coming-soon':
      variantClass = styles.statusComingSoon;
      break;
    case 'in-development':
      variantClass = styles.statusInDevelopment;
      break;
  }

  return (
    <span className={`type-label ${styles.base} ${styles.statusBadge} ${variantClass}`}>
      {children}
    </span>
  );
}

interface TagBadgeProps {
  children: React.ReactNode;
}

export function TagBadge({ children }: TagBadgeProps) {
  return (
    <span className={`type-label ${styles.base} ${styles.tagBadge}`}>
      {children}
    </span>
  );
}
