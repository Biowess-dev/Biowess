'use client';

import { useRef, MouseEvent } from 'react';
import { Section } from './Section';
import DotGrid from './DotGrid';
import { Divider } from './Divider';
import { Button } from './Button';
import styles from './HeroSection.module.css';

/** Matches the GitHub SVG already used in SiteHeader */
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth > 768 && heroRef.current) {
      const xOffset = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const yOffset = (e.clientY - window.innerHeight / 2) / window.innerHeight;

      heroRef.current.style.setProperty('--bg-x', `${xOffset * 6}px`);
      heroRef.current.style.setProperty('--bg-y', `${yOffset * 6}px`);
      heroRef.current.style.setProperty('--head-x', `${xOffset * -3}px`);
      heroRef.current.style.setProperty('--head-y', `${yOffset * -3}px`);
    }

    if (innerRef.current) {
      const rect = innerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      innerRef.current.style.setProperty('--mouse-x', `${x}px`);
      innerRef.current.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  const handleMouseLeave = () => {
    if (heroRef.current) {
      heroRef.current.style.setProperty('--bg-x', `0px`);
      heroRef.current.style.setProperty('--bg-y', `0px`);
      heroRef.current.style.setProperty('--head-x', `0px`);
      heroRef.current.style.setProperty('--head-y', `0px`);
    }
  };

  return (
    <div 
      ref={heroRef} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
    >
      <Section className={styles.hero} tone="primary">
        {/* Absolute dot-grid background */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ 
            transform: 'translate(var(--bg-x, 0px), var(--bg-y, 0px))', 
            transition: 'transform 150ms linear'
          }}
        >
          <DotGrid />
        </div>

        {/* Staggered content wrapper */}
        <div ref={innerRef} className={`${styles.inner} glass-panel flex flex-col items-center text-center`}>

          {/* 1 — Eyebrow label */}
          <p
            className={`type-label ${styles.animItem} ${styles.eyebrow}`}
            style={{ color: 'var(--color-text-tier-1)' }}
          >
            Open-source · Educational · Non-diagnostic
          </p>

          {/* 2 — Main headline */}
          <h1
            className={`type-hero ${styles.animItem} ${styles.headline}`}
            style={{
              color: 'var(--color-text-tier-4)',
              marginTop: 'var(--space-4)',
              maxWidth: '18ch',
            }}
          >
            <span 
              style={{ 
                display: 'inline-block',
                transform: 'translate(var(--head-x, 0px), var(--head-y, 0px))', 
                transition: 'transform 150ms linear' 
              }}
            >
              Open-source medical<br className="hidden md:block" /> educational software.
            </span>
          </h1>

          {/* 3 — Subheadline */}
          <p
            className={`type-h3 ${styles.animItem}`}
            style={{
              color: 'var(--color-text-tier-3)',
              fontWeight: 400,
              maxWidth: '640px',
              marginTop: 'var(--space-5)',
            }}
          >
            Biowess publishes experimental tools for students and developers
            building at the intersection of medicine and software.
          </p>

          {/* 4 — Divider */}
          <div className={`${styles.dividerWrap} ${styles.animItem}`}>
            <Divider />
          </div>

          <div className={`${styles.ctaRow} ${styles.animItem} flex justify-center`}>
            <Button variant="primary" href="/apps">
              View Apps
            </Button>

            <Button
              variant="ghost"
              href="https://github.com/biowess-dev"
              external
            >
              <GithubIcon />
              <span style={{ marginLeft: '0.4em' }}>GitHub</span>
            </Button>
          </div>

        </div>
      </Section>
    </div>
  );
}
