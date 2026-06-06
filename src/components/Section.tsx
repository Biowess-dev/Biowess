import { ReactNode } from 'react';
import { Container } from './Container';

type Tone = 'primary' | 'secondary' | 'tertiary' | 'transparent';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: Tone;
}

const toneMap: Record<Tone, string> = {
  primary: '#000000',
  secondary: '#050505',
  tertiary: '#080808',
  transparent: 'transparent',
};

export function Section({ children, className = '', containerClassName = '', tone = 'transparent' }: SectionProps) {
  return (
    <section 
      className={`py-[var(--space-10)] md:py-[var(--space-12)] ${className}`}
      style={tone !== 'transparent' ? { backgroundColor: toneMap[tone] } : undefined}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
