'use client';

import { useEffect } from 'react';

/**
 * AtmosphericEffects
 *
 * Renders two global effects:
 *
 * 1. Lens-aperture vignette — a fixed, full-viewport radial gradient that
 *    darkens screen edges, pulling the eye inward. pointer-events: none
 *    so it never blocks interaction.
 *
 * 2. Scroll-depth atmosphere — as the user scrolls past the hero, the
 *    body::before ceiling glow dims toward zero opacity via the
 *    --glow-opacity CSS custom property on <html>. Deeper = darker = quieter.
 */
export function AtmosphericEffects() {
  useEffect(() => {
    const root = document.documentElement;

    const handleScroll = () => {
      // Hero is roughly 100vh tall. Start dimming immediately on scroll,
      // reach full dim (opacity 0) at ~1.5× viewport height.
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const fadeEnd = vh * 1.5;

      const opacity = Math.max(0, 1 - scrollY / fadeEnd);
      root.style.setProperty('--glow-opacity', String(opacity.toFixed(3)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initialise on mount (handles page restore scroll position)
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        background:
          'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 60%, rgba(0,0,0,0.4) 100%)',
      }}
    />
  );
}
