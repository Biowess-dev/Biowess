import { Metadata } from 'next';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionHeader } from '@/components/SectionHeader';
import { PageTransition } from '@/components/PageTransition';
import { AboutCard } from '@/app/about/AboutCard';

export const metadata: Metadata = {
  title: 'License | Biowess',
  description: 'Custom Source-Available License 1.0 for Biowess.',
};

export default function LicensePage() {
  return (
    <main>
      <PageTransition>
        <Section tone="primary">
          <Container>
            <div className="flex flex-col gap-[var(--space-11)]">
              <SectionHeader 
                eyebrow="Legal"
                heading="Software License"
                subtext="Custom Source-Available License 1.0"
              />
              
              <AboutCard>
                <div className="prose prose-invert max-w-none text-[var(--color-text-tier-2)]">
                  <p className="mb-4">Copyright © 2026 BIOWESS</p>
                  <p className="mb-8">All rights reserved except as expressly permitted below.</p>

                  <h2 className="text-white text-xl font-bold mt-8 mb-4">1. Permission Granted</h2>
                  <p className="mb-4">You are permitted to:</p>
                  <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li>View and study the source code.</li>
                    <li>Clone and download the repository.</li>
                    <li>Run the software locally for personal or educational use.</li>
                    <li>Modify the source code for personal learning purposes.</li>
                    <li>Share snippets or modified versions for non-commercial educational purposes, provided proper credit is clearly given to the original author.</li>
                  </ul>

                  <h2 className="text-white text-xl font-bold mt-8 mb-4">2. Restrictions</h2>
                  <p className="mb-4">You may NOT, without prior written permission from the copyright holder:</p>
                  <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li>Sell this software or any modified version of it.</li>
                    <li>Use this software in a commercial product or service.</li>
                    <li>Offer this software as a paid SaaS, hosted platform, or subscription service.</li>
                    <li>Rebrand, sublicense, or redistribute this software while claiming it as your own work.</li>
                    <li>Remove copyright notices, attribution, or license text.</li>
                    <li>Use substantial portions of this software in commercial projects.</li>
                    <li>Create commercial derivatives based primarily on this project.</li>
                  </ul>

                  <h2 className="text-white text-xl font-bold mt-8 mb-4">3. Attribution Requirement</h2>
                  <p className="mb-4">Any public use, fork, modification, or redistribution of this project or its derivatives must include visible credit to the original author.</p>
                  <p className="mb-4">Example attribution:</p>
                  <p className="mb-8 p-4 bg-white/5 rounded-lg border border-white/10 font-mono text-sm">"Based on [app] by BIOWESS"</p>

                  <h2 className="text-white text-xl font-bold mt-8 mb-4">4. Ownership</h2>
                  <p className="mb-4">The software and all associated intellectual property remain the exclusive property of the copyright holder.</p>
                  <p className="mb-8">This license does not transfer ownership of the software or grant any trademark rights.</p>

                  <h2 className="text-white text-xl font-bold mt-8 mb-4">5. Contributions</h2>
                  <p className="mb-8">Unless explicitly stated otherwise, any contributions submitted to this project may be incorporated into the project under this same license.</p>

                  <h2 className="text-white text-xl font-bold mt-8 mb-4">6. Warranty Disclaimer</h2>
                  <p className="mb-4 uppercase">THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
                  <p className="mb-8 uppercase">IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>

                  <h2 className="text-white text-xl font-bold mt-8 mb-4">7. Acceptance</h2>
                  <p className="mb-8">By cloning, downloading, using, or modifying this software, you agree to the terms of this license.</p>
                </div>
              </AboutCard>
            </div>
          </Container>
        </Section>
      </PageTransition>
    </main>
  );
}
