'use client';

import React, { useRef, MouseEvent } from 'react';
import styles from './ContactForm.module.css';

export function ContactInfo() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
    containerRef.current.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (x - centerX) / centerX;
    const tiltY = (centerY - y) / centerY;
    containerRef.current.style.setProperty('--tilt-x', `${tiltX}`);
    containerRef.current.style.setProperty('--tilt-y', `${tiltY}`);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty('--tilt-x', '0');
    containerRef.current.style.setProperty('--tilt-y', '0');
  };

  return (
    <div 
      ref={containerRef}
      className={styles.form}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ gap: 'var(--space-8)' }}
    >
      <div className="flex flex-col gap-[var(--space-2)]">
        <span className="type-label uppercase text-[var(--color-muted)]">Preferred method for bugs:</span>
        <a href="https://github.com/biowess-dev" target="_blank" rel="noopener noreferrer" className="type-body text-[var(--color-secondary)] hover:text-[var(--color-fg)] transition-colors underline decoration-[var(--color-border)] underline-offset-4 hover:decoration-[var(--color-fg)]">GitHub Issues</a>
      </div>

      <div className="flex flex-col gap-[var(--space-2)]">
        <span className="type-label uppercase text-[var(--color-muted)]">Response time:</span>
        <p className="type-body text-[var(--color-secondary)]">Best effort. This is an indie project.</p>
      </div>

      <div className="flex flex-col gap-[var(--space-2)]">
        <span className="type-label uppercase text-[var(--color-muted)]">For contributions:</span>
        <p className="type-body text-[var(--color-secondary)]">Open a pull request on the relevant repository.</p>
      </div>
    </div>
  );
}
