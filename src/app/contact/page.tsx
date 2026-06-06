import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionHeader } from '@/components/SectionHeader';
import { ContactForm } from '@/components/ContactForm';
import { ContactInfo } from '@/components/ContactInfo';
import { PageTransition } from '@/components/PageTransition';

export const metadata = {
  title: 'Contact - Biowess',
  description: 'Get in touch with the Biowess team.',
};

export default function Contact() {
  return (
    <main>
      <PageTransition>
        <Section tone="primary">
        <Container>
          <div className="flex flex-col gap-[var(--space-11)]">
            <SectionHeader
              eyebrow="Contact"
              heading="Get in Touch"
              subtext="Questions, bug reports, or contributions. Keep it direct."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-[var(--space-8)] md:gap-[var(--space-11)]">
              {/* Left Column: Form */}
              <div className="order-1">
                <ContactForm />
              </div>
              
              {/* Right Column: Info Blocks */}
              <div className="order-2">
                <ContactInfo />
              </div>
            </div>
          </div>
        </Container>
        </Section>
      </PageTransition>
    </main>
  );
}
