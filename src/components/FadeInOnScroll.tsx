'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './FadeInOnScroll.module.css';

type Direction = 'up' | 'left' | 'right';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: Direction;
}

export function FadeInOnScroll({ children, delay = 0, className = '', direction = 'up' }: FadeInOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const directionClass = direction === 'left'
    ? styles.fromLeft
    : direction === 'right'
    ? styles.fromRight
    : '';

  return (
    <div
      ref={domRef}
      data-fade-scroll
      className={`${styles.fadeIn} ${directionClass} ${isVisible ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
