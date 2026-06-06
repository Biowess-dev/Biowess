import React from 'react';

export interface DotGridProps {
  className?: string;
}

export default function DotGrid({ className = '' }: DotGridProps) {
  return (
    <div
      className={`absolute inset-0 z-0 pointer-events-none overflow-hidden ${className}`.trim()}
      style={{
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    />
  );
}
