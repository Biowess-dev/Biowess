'use client';

import React, { useRef, MouseEvent } from 'react';
import { SectionHeader } from './SectionHeader';
import styles from './AboutPanel.module.css';

export function AboutPanel() {
  const panelRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    panelRef.current.style.setProperty('--mouse-x', `${x}px`);
    panelRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      ref={panelRef}
      className={`glass-panel ${styles.panel}`}
      onMouseMove={handleMouseMove}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-8)] items-center">
        <div>
          <SectionHeader heading="What is Biowess" />
        </div>
        <div>
          <p className="type-body" style={{ color: 'var(--color-text-tier-2)' }}>
            Biowess is an independent open-source project that publishes non-diagnostic, educational medical software tools. It is built by a medical student at the intersection of clinical learning and software development. All tools are free, open-source, and intended strictly for education and experimentation.
          </p>
        </div>
      </div>
    </div>
  );
}
