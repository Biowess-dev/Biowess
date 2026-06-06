"use client";

import React, { useRef, MouseEvent } from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant: 'primary' | 'ghost' | 'muted';
  children: React.ReactNode;
  href?: string;
  external?: boolean;
}

export function Button({ variant, children, href, onClick, external, className = '', ...props }: ButtonProps) {
  const combinedClassName = `${styles.button} ${styles[variant]} ${className}`.trim();
  const buttonRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    buttonRef.current.style.setProperty('--mouse-x', `${x}px`);
    buttonRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.setProperty('--mouse-x', `50%`);
    buttonRef.current.style.setProperty('--mouse-y', `50%`);
  };

  const handleInternalClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (onClick) onClick(e);
  };

  if (href) {
    if (external || href.startsWith('http')) {
      return (
        <a
          ref={buttonRef as React.RefObject<HTMLAnchorElement>}
          href={href}
          className={combinedClassName}
          onClick={handleInternalClick}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={combinedClassName}
        onClick={handleInternalClick as React.MouseEventHandler<HTMLAnchorElement>}
        onMouseMove={handleMouseMove as React.MouseEventHandler<HTMLAnchorElement>}
        onMouseLeave={handleMouseLeave}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      className={combinedClassName}
      onClick={handleInternalClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
