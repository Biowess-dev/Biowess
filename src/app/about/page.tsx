import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionHeader } from '@/components/SectionHeader';

import { Button } from '@/components/Button';
import { PageTransition } from '@/components/PageTransition';
import { AboutCard } from './AboutCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Biowess',
  description: 'Biowess is an independent open-source project publishing non-diagnostic medical educational software.',
};

export default function About() {
  return (
    <main>
      <PageTransition>
        <Section tone="primary">
        <Container>
          <div className="flex flex-col gap-[var(--space-11)]">
            <SectionHeader 
              eyebrow="About"
              heading="What is Biowess"
              subtext="A definition."
            />
            
            <AboutCard>
              <div className="flex flex-col gap-16 md:gap-24">
                
                {/* Section 1: Body text */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                  <div className="md:col-span-1"></div>
                  <div className="md:col-span-3">
                    <p className="type-body type-h3" style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
                      Biowess is an independent open-source project publishing non-diagnostic medical educational software, bioinformatics tools, and clinical learning utilities. All tools are built for students, developers, and learners — not for clinical use.
                    </p>
                  </div>
                </div>

                {/* Section 2: What We Publish */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                  <div className="md:col-span-1">
                    <span className="type-label uppercase text-[var(--color-text-tier-1)]">
                      We publish
                    </span>
                  </div>
                  <div className="md:col-span-3">
                    <div className="flex flex-col">
                      <div className="py-4 type-body border-b border-[var(--glass-border-base)]">Educational clinical simulators</div>
                      <div className="py-4 type-body border-b border-[var(--glass-border-base)]">Bioinformatics learning tools</div>
                      <div className="py-4 type-body border-b border-[var(--glass-border-base)]">AI-assisted educational applications</div>
                      <div className="py-4 type-body border-b border-[var(--glass-border-base)]">Developer tooling for medical software systems</div>
                    </div>
                  </div>
                </div>

                {/* Section 3: What We Don't Do */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                  <div className="md:col-span-1">
                    <span className="type-label uppercase text-[var(--color-text-tier-1)]">
                      We don&apos;t
                    </span>
                  </div>
                  <div className="md:col-span-3">
                    <p className="type-body text-[var(--color-text-tier-2)]">
                      No diagnostics &middot; No clinical advice &middot; No patient data &middot; Not a medical service &middot; Not for clinical decisions
                    </p>
                  </div>
                </div>

                {/* Section 4: Open Source */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                  <div className="md:col-span-1">
                    <span className="type-label uppercase text-[var(--color-text-tier-1)]">
                      Open Source
                    </span>
                  </div>
                  <div className="md:col-span-3 flex flex-col items-start gap-4">
                    <p className="type-body text-[var(--color-text-tier-2)]">
                      All Biowess software is released under the Custom Source-Available License 1.0 unless otherwise stated per repository.
                    </p>
                    <Button variant="ghost" href="https://github.com/biowess-dev" external>
                      View on GitHub
                    </Button>
                  </div>
                </div>

                {/* Section 5: Author note */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                  <div className="md:col-span-1"></div>
                  <div className="md:col-span-3">
                    <p className="type-small text-[var(--color-text-tier-1)]">
                      Biowess is an independent project built by a medical student.
                    </p>
                  </div>
                </div>

              </div>
            </AboutCard>
          </div>
        </Container>
        </Section>
      </PageTransition>
    </main>
  );
}
