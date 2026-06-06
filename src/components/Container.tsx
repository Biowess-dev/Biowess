import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-[1200px] mx-auto px-[var(--space-4)] md:px-[var(--space-5)] ${className}`}>
      {children}
    </div>
  );
}
