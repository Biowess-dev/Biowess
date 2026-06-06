import { Metadata } from 'next';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionHeader } from '@/components/SectionHeader';
import { PageTransition } from '@/components/PageTransition';
import { AboutCard } from '@/app/about/AboutCard';

export const metadata: Metadata = {
  title: 'Privacy Policy | Biowess',
  description: 'Privacy Policy for Biowess and its applications.',
};

export default function PrivacyPolicy() {
  return (
    <main>
      <PageTransition>
        <Section tone="primary">
          <Container>
            <div className="flex flex-col gap-[var(--space-11)]">
              <SectionHeader 
                eyebrow="Legal"
                heading="Privacy Policy"
                subtext="How we handle data."
              />
              
              <AboutCard>
                <div className="flex flex-col gap-12 md:gap-16">
                  
                  {/* Section 1: Overview */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                    <div className="md:col-span-1">
                      <span className="type-label uppercase text-[var(--color-text-tier-1)]">
                        Overview
                      </span>
                    </div>
                    <div className="md:col-span-3">
                      <p className="type-body text-[var(--color-text-tier-2)]">
                        At Biowess, we are committed to protecting your privacy. This Privacy Policy explains how our open-source medical educational software and this website handle your data.
                        <br /><br />
                        Our core philosophy is simple: <strong>We do not collect, store, or process any personal medical data or user-identifiable information.</strong>
                      </p>
                    </div>
                  </div>

                  {/* Section 2: Data Collection and Usage */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                    <div className="md:col-span-1">
                      <span className="type-label uppercase text-[var(--color-text-tier-1)]">
                        Data Usage
                      </span>
                    </div>
                    <div className="md:col-span-3">
                      <ul className="flex flex-col gap-4">
                        <li className="type-body text-[var(--color-text-tier-2)]">
                          <strong className="text-white">Local Processing:</strong> Our applications run entirely locally on your machine or within your browser. All data you input remains on your device.
                        </li>
                        <li className="type-body text-[var(--color-text-tier-2)]">
                          <strong className="text-white">No Telemetry:</strong> We do not track your usage, clicks, or interactions within our applications.
                        </li>
                        <li className="type-body text-[var(--color-text-tier-2)]">
                          <strong className="text-white">No Personal Data:</strong> We do not ask for or collect personal information, user accounts, or tracking cookies.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 3: Third-Party Services */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                    <div className="md:col-span-1">
                      <span className="type-label uppercase text-[var(--color-text-tier-1)]">
                        Third Parties
                      </span>
                    </div>
                    <div className="md:col-span-3">
                      <p className="type-body text-[var(--color-text-tier-2)]">
                        This website is a static site. We do not use third-party analytics trackers (like Google Analytics or Cloudflare Web Analytics). The site is cookie-free, performs no cross-site tracking, and collects no personal data.
                        <br /><br />
                        If you interact with our GitHub repositories, your interactions are governed by GitHub&apos;s Privacy Statement.
                      </p>
                    </div>
                  </div>

                  {/* Section 4: Educational Use Disclaimer */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                    <div className="md:col-span-1">
                      <span className="type-label uppercase text-[var(--color-text-tier-1)]">
                        Disclaimer
                      </span>
                    </div>
                    <div className="md:col-span-3">
                      <p className="type-body text-[var(--color-text-tier-2)]">
                        Biowess tools are designed strictly for medical education and clinical case simulation. They are not regulated medical devices and are not intended for use in the diagnosis, cure, mitigation, treatment, or prevention of disease.
                        <br /><br />
                        <strong className="text-white">Do not input real patient data into any of our tools.</strong>
                      </p>
                    </div>
                  </div>

                  {/* Section 5: Contact Us */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                    <div className="md:col-span-1">
                      <span className="type-label uppercase text-[var(--color-text-tier-1)]">
                        Contact
                      </span>
                    </div>
                    <div className="md:col-span-3 flex flex-col items-start gap-4">
                      <p className="type-body text-[var(--color-text-tier-2)]">
                        If you have any questions about this Privacy Policy, please contact us via our GitHub organization.
                      </p>
                      <a href="https://github.com/biowess-dev" target="_blank" rel="noopener noreferrer" className="type-body relative transition-colors duration-[var(--duration-fast)] text-[var(--color-secondary)] hover:text-white flex items-center gap-1 w-fit group after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white after:origin-left after:transition-transform after:duration-[var(--duration-base)] after:scale-x-0 hover:after:scale-x-100">
                        GitHub Issues
                      </a>
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
