import React from 'react';
import { Container } from './Container';

export function DisclaimerStrip() {
  return (
    <div 
      style={{
        width: '100%',
        backgroundColor: '#080808',
        padding: 'var(--space-5) 0'
      }}
    >
      <Container>
        <p 
          className="type-small"
          style={{ 
            textAlign: 'center', 
            color: 'var(--color-text-tier-1)',
            opacity: 0.8,
            margin: '0 auto',
            maxWidth: '800px'
          }}
        >
          All Biowess applications are strictly non-diagnostic and intended for educational purposes only. Not a medical service. Not for clinical use.
        </p>
      </Container>
    </div>
  );
}
