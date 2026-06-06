'use client';

import { useEffect, useState, ReactNode } from 'react';
import styles from './PageTransition.module.css';

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Avoid SSR flash by triggering transition shortly after mount
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={`${styles.wrapper} ${mounted ? styles.mounted : ''}`}>
      {children}
    </div>
  );
}
