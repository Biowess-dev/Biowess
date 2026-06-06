import React from 'react';
import { AppCard, AppCardProps } from './AppCard';
import styles from './AppGrid.module.css';

export interface AppGridProps {
  apps: AppCardProps[];
  showPlaceholders?: boolean;
}

export function AppGrid({ apps, showPlaceholders = false }: AppGridProps) {
  const placeholders = showPlaceholders
    ? Array.from({ length: 4 }).map((_, i) => (
        <div key={`placeholder-${i}`} className={styles.placeholderWrap}>
          <AppCard
            title=""
            subtitle=""
            description=""
            tags={[]}
            status="in-development"
            isPlaceholder={true}
          />
        </div>
      ))
    : null;

  return (
    <div className={`${styles.grid} surface-shadow`}>
      {apps.map((app, index) => (
        <AppCard key={`app-${index}`} {...app} />
      ))}
      {placeholders}
    </div>
  );
}
