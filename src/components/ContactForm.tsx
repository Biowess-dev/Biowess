'use client';

import React, { useState, useRef, MouseEvent, useEffect } from 'react';
import styles from './ContactForm.module.css';
import { Button } from './Button';

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const [subject, setSubject] = useState('General');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const formRef = useRef<HTMLFormElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const subjects = ['General', 'Bug Report', 'Contribution', 'Other'];

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLFormElement>) => {
    if (!formRef.current) return;
    const rect = formRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    formRef.current.style.setProperty('--mouse-x', `${x}px`);
    formRef.current.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (x - centerX) / centerX;
    const tiltY = (centerY - y) / centerY;
    formRef.current.style.setProperty('--tilt-x', `${tiltX}`);
    formRef.current.style.setProperty('--tilt-y', `${tiltY}`);
  };

  const handleMouseLeave = () => {
    if (!formRef.current) return;
    formRef.current.style.setProperty('--tilt-x', '0');
    formRef.current.style.setProperty('--tilt-y', '0');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "eb1df9be-9596-4161-9162-c07db37805c4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setIsSubmitted(true);
        if (formRef.current) formRef.current.reset();
        setSubject('General');
      } else {
        setIsError(true);
      }
    } catch {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <form 
      ref={formRef}
      className={styles.form} 
      onSubmit={handleSubmit} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.field}>
        <label htmlFor="name" className={`type-label ${styles.label}`}>Name</label>
        <input required type="text" id="name" name="name" className={styles.input} />
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={`type-label ${styles.label}`}>Email</label>
        <input required type="email" id="email" name="email" className={styles.input} />
      </div>

      <div className={styles.field}>
        <label htmlFor="subject" className={`type-label ${styles.label}`}>Subject</label>
        <div className={styles.dropdownContainer} ref={dropdownRef}>
          <div 
            className={`${styles.input} ${styles.dropdownToggle} ${isDropdownOpen ? styles.open : ''}`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {subject}
            <svg className={styles.dropdownIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              {subjects.map(s => (
                <div 
                  key={s} 
                  className={`${styles.dropdownItem} ${subject === s ? styles.selected : ''}`}
                  onClick={() => {
                    setSubject(s);
                    setIsDropdownOpen(false);
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          )}
        </div>
        <input type="hidden" name="subject" value={subject} />
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={`type-label ${styles.label}`}>Message</label>
        <textarea required id="message" name="message" rows={4} className={styles.textarea}></textarea>
      </div>

      <div className={styles.actionTray}>
        {isSubmitted ? (
          <span className={`type-small ${styles.successMessage}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Message sent securely.
          </span>
        ) : isSubmitting ? (
          <div className={styles.sendingContainer}>
            <div className={styles.spinner}></div>
            <span className="type-small">Transmitting...</span>
          </div>
        ) : (
          <div className={styles.ctas}>
            <Button variant="primary" type="submit" className={styles.primaryButton}>
              Send Message
            </Button>
            {isError && (
              <span className="type-small" style={{ color: 'var(--color-text-tier-1)', marginLeft: 'var(--space-4)', alignSelf: 'center' }}>
                Connection failed. Try again.
              </span>
            )}
          </div>
        )}
      </div>
    </form>
  );
}
