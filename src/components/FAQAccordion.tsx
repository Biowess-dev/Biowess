"use client";

import React, { useState, useRef } from 'react';
import styles from './FAQAccordion.module.css';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.accordion} role="presentation">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <AccordionItem
            key={index}
            item={item}
            isOpen={isOpen}
            onClick={() => toggleItem(index)}
            idPrefix={`faq-${index}`}
          />
        );
      })}
    </div>
  );
}

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
  idPrefix: string;
}

function AccordionItem({ item, isOpen, onClick, idPrefix }: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const buttonId = `${idPrefix}-button`;
  const contentId = `${idPrefix}-content`;

  return (
    <div className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
      <button
        id={buttonId}
        role="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={onClick}
        className={styles.questionRow}
      >
        <span className={`type-h3 ${styles.questionText}`}>{item.question}</span>
        <span
          className={`${styles.indicator} ${isOpen ? styles.open : styles.closed}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={`${styles.answerPanel} ${isOpen ? styles.answerPanelOpen : ''}`}
      >
        <div
          ref={contentRef}
          className={`type-body ${styles.answerContent} ${isOpen ? styles.answerContentOpen : ''}`}
        >
          {item.answer}
        </div>
      </div>
    </div>
  );
}
