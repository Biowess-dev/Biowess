'use client';

import React, { MouseEvent, useRef, ReactNode } from 'react';
import styles from './AboutCard.module.css';

export function AboutCard({ children }: { children: ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);

    // Calculate subtle 3D tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (x - centerX) / centerX;
    const tiltY = (centerY - y) / centerY;
    cardRef.current.style.setProperty('--tilt-x', `${tiltX * 0.4}`);
    cardRef.current.style.setProperty('--tilt-y', `${tiltY * 0.4}`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--tilt-x', '0');
    cardRef.current.style.setProperty('--tilt-y', '0');
  };

  return (
    <div 
      ref={cardRef}
      className={styles.card}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.contentLayer}>
        {children}
      </div>
    </div>
  );
}
