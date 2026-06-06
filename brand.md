PROJECT IDENTITY
Brand Name: Biowess
Type: Indie open-source medical educational software studio
Creator: Medical student / indie developer
Status: Active — 2 apps currently published, ~12 planned over 6–12 months
Published Apps:

Aletheia — Clinical workstation (educational)
HematoX — Hematology AI application (educational)

Core Mandate:

Biowess publishes open-source, non-diagnostic, non-clinical, purely educational and experimental medical software tools for medical students, bioinformatics learners, and developers exploring healthcare software systems.

NOT:

A startup
A SaaS product
A diagnostic tool
A consumer app
A general health platform


1. DESIGN SYSTEM — NON-NEGOTIABLE RULES
1.1 Color System
TokenValueUsage--color-bg#000000Page background (AMOLED)--color-surface-1#0a0a0aCard base--color-surface-2#111111Elevated card / panel--color-surface-3#1a1a1aHover surface--color-border#1f1f1fDefault border--color-border-hover#333333Hover border--color-text-primary#f5f5f5Headlines, key labels--color-text-secondary#888888Body, captions--color-text-muted#444444Disabled, placeholders--color-white#ffffffEmphasis only
Absolute rules:

No accent colors. No color. Grayscale only.
No gradients except glass edge lighting (≤2% opacity white edge).
No neon, no glow, no colored shadows.


1.2 Typography System
Font: IBM Plex Sans — all weights, all sizes
Import: https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap
RoleSizeWeightLine HeightLetter Spacing--type-heroclamp(40px, 7vw, 80px)6001.0-0.03em--type-h1clamp(28px, 4vw, 52px)6001.1-0.02em--type-h2clamp(20px, 2.5vw, 32px)5001.2-0.01em--type-h318px5001.30--type-body15px4001.60--type-small13px4001.50.01em--type-label11px5001.40.08em--type-code13px4001.60
Exception: --type-code uses IBM Plex Mono for code blocks and install commands ONLY.
Rules:

No serif fonts anywhere.
No monospace outside of code snippets.
All body text is IBM Plex Sans.


1.3 Spacing System (8px Grid)
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-5:   24px
--space-6:   32px
--space-7:   48px
--space-8:   64px
--space-9:   96px
--space-10:  128px
--space-11:  192px
--space-12:  256px
Section padding: --space-11 vertical (192px desktop, 96px mobile)
Content max-width: 1200px
Column gutter: --space-5 (24px)
Card padding: --space-6 (32px)

1.4 Border & Radius System
TokenValue--radius-none0px--radius-sm2px--radius-md4px--radius-lg6px
Default card radius: --radius-md (4px)
Button radius: --radius-sm (2px)
Maximum allowed radius anywhere: 6px
No rounded corners. No pill shapes.

1.5 Glass System
Glass is a material layer — not a trendy effect. Rules:
css/* IDLE STATE */
.glass {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);
}

/* HOVER STATE */
.glass:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.10);
}

/* ACTIVE/FOCUS STATE */
.glass:focus-visible {
  border-color: rgba(255, 255, 255, 0.20);
  outline: none;
}
Rules:

Glass is barely visible at rest.
Becomes tangible on hover — feels like frosted material, not glowing.
No colored glass. No saturated tints.
Glass applies to: nav bar, app cards, modals, FAQ items, contact form.
Do NOT apply glass to: body text containers, section wrappers, typography blocks.


1.6 Motion System
TokenValue--ease-standardcubic-bezier(0.4, 0, 0.2, 1)--ease-deceleratecubic-bezier(0, 0, 0.2, 1)--ease-acceleratecubic-bezier(0.4, 0, 1, 1)--duration-fast150ms--duration-base220ms--duration-slow350ms--duration-enter280ms
Rules:

No bounce. No spring physics. No overshoot.
No playful easing.
Hover transitions: var(--duration-fast) with var(--ease-standard).
Page enter animations: var(--duration-enter) with var(--ease-decelerate).
Respect prefers-reduced-motion: all animations must have a @media (prefers-reduced-motion: reduce) block that disables them.


1.7 Shadow System
css--shadow-sm:  0 1px 3px rgba(0,0,0,0.8);
--shadow-md:  0 4px 16px rgba(0,0,0,0.6);
--shadow-lg:  0 12px 40px rgba(0,0,0,0.8);
--shadow-glass: inset 0 1px 0 rgba(255,255,255,0.04);
No colored shadows. No glow effects. Dark shadows only.

2. LAYOUT ARCHITECTURE
2.1 Grid System
Desktop  (≥1280px): 12-column, 24px gutter, 1200px max-width
Tablet   (768–1279px): 8-column, 20px gutter, fluid
Mobile   (<768px): 4-column, 16px gutter, fluid
2.2 Page Structure
<html>
  <body>
    <header>        <!-- sticky nav, full-width -->
    <main>
      <section>     <!-- each section is a full-width band -->
        <div.container>  <!-- max-width 1200px, centered -->
    <footer>        <!-- full-width -->
2.3 Navigation

Sticky top, full-width
Height: 60px desktop / 56px mobile
Background: glass (idle barely visible, scrolled more opaque)
Logo: Biowess in IBM Plex Sans 500 weight, --color-text-primary
Links: Home · Apps · About · FAQ · Contact
Right side: GitHub icon link (external)
No hamburger dropdown on desktop. Slide-in drawer on mobile.
Nav border-bottom: 1px solid var(--color-border); intensifies on scroll.


3. SITE MAP & ROUTES
RoutePagePurpose/HomeHero + featured apps preview/appsAppsFull app catalog/aboutAboutBrand definition/faqFAQTechnical questions/contactContactSimple outreach form
All routes are client-side (React Router or Next.js App Router).

4. PAGE SPECIFICATIONS
4.1 Home Page (/)
Section order:

Hero — brand statement + minimal CTA
Featured Apps — 2-card preview of Aletheia + HematoX
What is Biowess — 2–3 line definition block
Disclaimer Strip — non-diagnostic notice (legal)
Footer

Hero Copy (placeholder — final copy TBD):

Headline: "Open-source medical educational software."
Subheadline: "Biowess publishes experimental tools for students and developers building at the intersection of medicine and software."
CTA Button 1: "View Apps" → /apps
CTA Button 2 (secondary/ghost): "GitHub" → external

Hero visual:

No hero image
No illustration
Subtle grid dot pattern background (CSS, very low opacity ~3%)
Optional: single thin horizontal rule beneath headline


4.2 Apps Page (/apps)
Sections:

Page header block (title: "Applications", short descriptor)
App grid — 2 cards now, expandable to 12
Placeholder cards for upcoming apps (greyed out, "Coming soon" badge)
Disclaimer note at bottom

Current apps:
Card: Aletheia

Title: Aletheia
Subtitle: Clinical Workstation
Description: "An open-source educational clinical workstation for simulating patient data workflows. Built for medical students and clinical software learners."
Tags: Educational · Clinical · Simulation
Status badge: Active
Primary CTA: "Open App" → [app website URL — placeholder: #]
Secondary CTA: "Source" → [GitHub repo URL — placeholder: #]
Disclaimer tag: Non-diagnostic · Educational only

Card: HematoX

Title: HematoX
Subtitle: Hematology AI Application
Description: "An open-source hematology-focused AI educational tool for exploring blood panel interpretation patterns. Built for medical students and bioinformatics learners."
Tags: Educational · Hematology · AI
Status badge: Active
Primary CTA: "Open App" → [app website URL — placeholder: #]
Secondary CTA: "Source" → [GitHub repo URL — placeholder: #]
Disclaimer tag: Non-diagnostic · Educational only

Placeholder cards (×4 minimum):

Title: Untitled Application
Badge: In Development
No CTAs, greyed out surface, low opacity


4.3 About Page (/about)
Not a storytelling page. A definition page.
Sections:

What is Biowess — 3–4 sentence factual description
What we publish — structured list: educational simulators, bioinformatics tools, clinical learning utilities, developer tooling
What we don't do — explicit disclaimer list: no diagnostics, no clinical advice, no patient data, not a medical service
Open Source — brief note on license (MIT or similar), linking to GitHub
Built by — single line: "Biowess is an independent project built by a medical student." No photos, no bio fluff.


4.4 FAQ Page (/faq)
Tone: Technical, direct, minimal.
FAQ Items (initial set):

"Is Biowess a medical device or service?" → No. All software is strictly educational and experimental.
"Can I use Biowess apps for clinical decisions?" → No. Never. Educational only.
"Are the apps free?" → Yes. All apps are free and open-source.
"What license is used?" → MIT License unless stated otherwise per repository.
"How do I report a bug or contribute?" → Via GitHub issues and pull requests on each app's repository.
"Is there a community or Discord?" → Not currently. Contributions happen through GitHub.
"Will more apps be added?" → Yes. Approximately 10–12 tools planned for the next 6–12 months.
"Do the apps collect user data?" → No personal data is collected by default. Each app's README specifies its data handling.

UI: Accordion. Closed by default. Single open at a time. Glass panel.

4.5 Contact Page (/contact)
Minimal. Direct.
Fields:

Name (text input)
Email (email input)
Subject (select: General · Bug Report · Contribution · Other)
Message (textarea, 4 rows)
Submit button

Notes:

No phone. No address. No social proof.
Below form: "For bugs and contributions, GitHub issues are preferred." + GitHub link.
Form submission: use Formspree or similar (no backend needed).


4.6 Footer
Layout: 3-column on desktop, stacked on mobile.
Column 1:

Biowess wordmark
1-line descriptor: "Open-source medical educational software."
© 2025 Biowess. MIT License.

Column 2:

Navigation links: Home · Apps · About · FAQ · Contact

Column 3:

GitHub (icon + text)
"Not medical advice. For educational use only."

Bottom bar:

Full-width border-top
"Biowess is an independent open-source project. All tools are non-diagnostic and intended for educational purposes only."


5. COMPONENT LIBRARY SPEC
5.1 Buttons
Variant: Primary
  bg: var(--color-white)
  text: var(--color-bg)
  border: none
  padding: 10px 20px
  radius: var(--radius-sm)
  hover: bg → #e0e0e0, transition var(--duration-fast)

Variant: Ghost
  bg: transparent
  text: var(--color-text-primary)
  border: 1px solid var(--color-border)
  padding: 10px 20px
  radius: var(--radius-sm)
  hover: border-color → var(--color-border-hover), bg → var(--color-surface-2)

Variant: Muted
  bg: var(--color-surface-2)
  text: var(--color-text-secondary)
  border: 1px solid var(--color-border)
  padding: 8px 16px
  radius: var(--radius-sm)
  hover: text → var(--color-text-primary)
5.2 App Card
Container:
  bg: var(--color-surface-1)
  border: 1px solid var(--color-border)
  radius: var(--radius-md)
  padding: var(--space-6)
  glass: yes (idle barely visible)
  hover: glass intensifies, border → var(--color-border-hover)
  transition: var(--duration-base)

Structure:
  [Status Badge]
  [App Title] — type-h2
  [App Subtitle] — type-label, muted, uppercase, tracking wide
  [Divider line — 1px, --color-border]
  [Description] — type-body, secondary color
  [Tag row] — pill-less square badges, surface-2, label type
  [Disclaimer tag] — very small, muted
  [CTA row] — Primary button + Ghost button
5.3 Status Badge
Active:   bg white, text black, label type, uppercase
Coming Soon: bg surface-2, text muted, border border-color
In Development: bg surface-2, text muted, dashed border
All badges: padding: 3px 8px, radius: var(--radius-sm), font: var(--type-label).
5.4 Tag Badge
bg: var(--color-surface-2)
border: 1px solid var(--color-border)
text: var(--color-text-secondary)
font: var(--type-label)
padding: 2px 8px
radius: var(--radius-sm)
5.5 FAQ Accordion Item
Container:
  border-bottom: 1px solid var(--color-border)
  glass: yes

Question row:
  padding: var(--space-5) 0
  font: var(--type-h3)
  color: var(--color-text-primary)
  cursor: pointer
  [+] / [−] indicator — right-aligned, rotates on open

Answer panel:
  padding: 0 0 var(--space-5) 0
  font: var(--type-body)
  color: var(--color-text-secondary)
  max-height animation on open/close (var(--duration-slow), var(--ease-decelerate))
5.6 Form Inputs
Input / Textarea / Select:
  bg: var(--color-surface-1)
  border: 1px solid var(--color-border)
  color: var(--color-text-primary)
  radius: var(--radius-sm)
  padding: 10px 14px
  font: var(--type-body), IBM Plex Sans

  focus:
    border-color: var(--color-border-hover)
    outline: none
    background: var(--color-surface-2)
    transition: var(--duration-fast)

  placeholder:
    color: var(--color-text-muted)
5.7 Section Header Block
Eyebrow label:
  font: var(--type-label)
  color: var(--color-text-muted)
  text-transform: uppercase
  letter-spacing: 0.1em
  margin-bottom: var(--space-2)

Heading:
  font: var(--type-h1)
  color: var(--color-text-primary)
  margin-bottom: var(--space-4)

Subtext (optional):
  font: var(--type-body)
  color: var(--color-text-secondary)
  max-width: 520px
5.8 Divider
hr:
  border: none
  border-top: 1px solid var(--color-border)
  margin: 0
5.9 Disclaimer Strip
bg: var(--color-surface-1)
border-top: 1px solid var(--color-border)
border-bottom: 1px solid var(--color-border)
padding: var(--space-4) 0
font: var(--type-small)
color: var(--color-text-muted)
text-align: center
content: "All Biowess applications are strictly non-diagnostic and intended for educational purposes only. 
          Not a medical service. Not for clinical use."
