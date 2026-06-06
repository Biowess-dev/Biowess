import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionHeader } from '@/components/SectionHeader';
import { AppGrid } from '@/components/AppGrid';
import { AppCardProps } from '@/components/AppCard';
import { DisclaimerStrip } from '@/components/DisclaimerStrip';
import { PageTransition } from '@/components/PageTransition';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Applications | Biowess',
  description: 'Open-source educational tools. Free to use, free to modify.',
};

const APPS: AppCardProps[] = [
  {
    title: 'Aletheia',
    subtitle: 'Clinical Workstation',
    description: 'An open-source educational clinical workstation for simulating patient data workflows. Built for medical students and clinical software learners.',
    tags: ['Educational', 'Clinical', 'Simulation', 'AI'],
    status: 'active',
    appUrl: 'https://github.com/biowess-dev/Aletheia/releases',
    sourceUrl: 'https://github.com/biowess-dev/Aletheia'
  },
  {
    title: 'HematoX',
    subtitle: 'Hematology AI Application',
    description: 'An open-source hematology-focused AI educational tool for exploring blood panel interpretation patterns. Built for medical students and bioinformatics learners.',
    tags: ['Educational', 'Hematology', 'AI'],
    status: 'active',
    appUrl: 'https://github.com/biowess-dev/hematox#installation',
    sourceUrl: 'https://github.com/biowess-dev/hematox'
  }
];

export default function AppsPage() {
  return (
    <main>
      <PageTransition>
        <Section tone="primary">
          <Container>
            <div style={{ marginBottom: 'var(--space-8)' }}>
              <SectionHeader
                eyebrow="Biowess"
                heading="Applications"
                subtext="Open-source educational tools. Free to use, free to modify."
                align="left"
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 'var(--space-4)' }}>
              <span className="type-small" style={{ color: 'var(--color-text-tier-1)' }}>
                More applications in development. ~10 tools planned over the next 6–12 months.
              </span>
            </div>

            <AppGrid apps={APPS} showPlaceholders={true} />
          </Container>
        </Section>
        <DisclaimerStrip />
      </PageTransition>
    </main>
  );
}
