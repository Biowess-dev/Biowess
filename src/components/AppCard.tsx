'use client';

import React, { MouseEvent, useRef } from 'react';
import { StatusBadge, TagBadge } from './Badge';
import { Button } from './Button';
import { Divider } from './Divider';
import styles from './AppCard.module.css';

export interface AppCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  status: 'active' | 'coming-soon' | 'in-development';
  appUrl?: string;
  sourceUrl?: string;
  isPlaceholder?: boolean;
}

export function AppCard({
  title,
  subtitle,
  description,
  tags,
  status,
  appUrl,
  sourceUrl,
  isPlaceholder
}: AppCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);

    if (!isPlaceholder) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = (x - centerX) / centerX;
      const tiltY = (centerY - y) / centerY;
      cardRef.current.style.setProperty('--tilt-x', `${tiltX}`);
      cardRef.current.style.setProperty('--tilt-y', `${tiltY}`);
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || isPlaceholder) return;
    cardRef.current.style.setProperty('--tilt-x', '0');
    cardRef.current.style.setProperty('--tilt-y', '0');
  };

  if (isPlaceholder) {
    return (
      <div className={`${styles.card} ${styles.placeholder}`}>
        <StatusBadge variant="in-development">In Development</StatusBadge>
        <div className={styles.contentLayer}>
          <div className={styles.header}>
            <h2 className="type-h2">Untitled Application</h2>
            <span className={`type-label ${styles.subtitle}`}>Coming Soon</span>
          </div>
        </div>
      </div>
    );
  }

  const getStatusLabel = (s: AppCardProps['status']) => {
    switch (s) {
      case 'active':
        return 'Active';
      case 'coming-soon':
        return 'Coming Soon';
      case 'in-development':
        return 'In Development';
      default:
        return s;
    }
  };

  return (
    <div 
      ref={cardRef}
      className={styles.card}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <StatusBadge variant={status}>{getStatusLabel(status)}</StatusBadge>
      
      <div className={styles.contentLayer}>
        <div className={styles.header}>
          <h2 className={`type-h2 ${styles.title}`}>{title}</h2>
          <span className={`type-label ${styles.subtitle}`}>{subtitle}</span>
        </div>
        
        <Divider color="rgba(255, 255, 255, 0.06)" />
        
        <p className={`type-body ${styles.description}`}>{description}</p>
        
        <div className={styles.tags}>
          {tags.map((tag) => (
            <TagBadge key={tag}>{tag}</TagBadge>
          ))}
        </div>
        
        <span className={`type-small ${styles.disclaimer}`}>
          Non-diagnostic · Educational only
        </span>
      </div>
      
      <div className={styles.actionTray}>
        <div className={styles.ctas}>
          {appUrl && (
            <Button variant="primary" href={appUrl} external className={styles.primaryButton}>Download</Button>
          )}
          {sourceUrl && (
            <Button variant="ghost" href={sourceUrl} external>Source</Button>
          )}
        </div>
      </div>
    </div>
  );
}
