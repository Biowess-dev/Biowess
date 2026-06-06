import React from 'react';

interface DividerProps {
  className?: string;
  color?: string;
}

export function Divider({ className = '', color = 'var(--color-border)' }: DividerProps) {
  return (
    <hr 
      className={className}
      style={{ 
        border: 'none', 
        borderTop: `1px solid ${color}`, 
        width: '100%',
        margin: 0
      }} 
    />
  );
}
