import React from 'react';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionHeader } from '@/components/SectionHeader';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Button } from '@/components/Button';
import { PageTransition } from '@/components/PageTransition';

const faqItems = [
  {
    question: "Is Biowess a medical device or service?",
    answer: "No. All software is strictly educational and experimental."
  },
  {
    question: "Can I use Biowess apps for clinical decisions?",
    answer: "No. Never. Educational only."
  },
  {
    question: "Are the apps free?",
    answer: "Yes. All apps are free and open-source."
  },
  {
    question: "What license is used?",
    answer: "Custom Source-Available License 1.0 unless stated otherwise per repository."
  },
  {
    question: "How do I report a bug or contribute?",
    answer: "Via GitHub issues and pull requests on each app's repository."
  },
  {
    question: "Is there a community or Discord?",
    answer: "Not currently. Contributions happen through GitHub."
  },
  {
    question: "Will more apps be added?",
    answer: "Yes. Approximately 10–12 tools planned for the next 6–12 months."
  },
  {
    question: "Do the apps collect user data?",
    answer: "No personal data is collected by default. Each app's README specifies its data handling."
  }
];

export const metadata = {
  title: 'FAQ | Biowess',
  description: 'Technical and general questions about Biowess and its software.',
};

export default function FAQPage() {
  return (
    <main>
      <PageTransition>
        <Section tone="primary">
          <Container>
            <div className="flex flex-col gap-[var(--space-11)]">
              <SectionHeader
                eyebrow="Help"
                heading="Frequently Asked Questions"
                subtext="Technical and general questions about Biowess and its software."
              />

              <div className="flex flex-col gap-[var(--space-6)]">
                <FAQAccordion items={faqItems} />
              </div>

              <div className="flex items-center justify-center gap-[var(--space-4)] flex-wrap mt-[var(--space-4)]">
                <p className="type-small text-[var(--color-text-tier-1)] m-0">
                  For bugs and contributions, open an issue on GitHub.
                </p>
                <Button
                  variant="ghost"
                  href="https://github.com/biowess-dev"
                  external
                  style={{ padding: '6px 12px', fontSize: '13px' }}
                >
                  GitHub
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </PageTransition>
    </main>
  );
}
