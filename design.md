# Monochrome Glass Brand Website — Full Spec Sheet

## 1) Project Summary

### Purpose
Create a website for the brand/group that showcases the apps built under it, presents the project as a serious, coherent system, and gives each app a proper home page and ecosystem context.

### Core Intent
This is **not** a playful startup landing page, a random SaaS template, or a terminal-themed dev site. It should feel like:
- a serious product system
- a minimal studio hub
- an industrial editorial interface
- a premium monochrome experience with controlled glass effects

### Brand Tone
- serious
- quiet
- confident
- mechanical
- premium
- precise
- restrained
- professional

### Main Visual Identity
- black and white only
- AMOLED black base
- sharp geometry
- refined glass surfaces
- no colorful accents
- no neon
- no clutter
- no decorative overload

---

## 2) Brand Principles

The site must obey these principles at all times:

1. **Monochrome first** — only black, white, and neutral grays.
2. **Sans serif only** — no monospace except in code blocks or installation snippets.
3. **Sharp structure** — buttons, borders, and cards should feel crisp and intentional.
4. **Glass as material, not decoration** — glass effects should feel tactile and responsive, not trendy or cheap.
5. **Motion should feel engineered** — smooth, controlled, precise, never bouncy or playful.
6. **Mobile-first adaptability** — the experience must remain clean and usable on small screens.
7. **Content over ornament** — the UI should support the brand, not distract from it.
8. **One system, one voice** — all pages should feel like parts of the same ecosystem.

---

## 3) Site Structure / Information Architecture

### Required Pages
1. **Home**
2. **Apps**
3. **About**
4. **FAQ**
5. **Contact**

### Global Layout Components
- top navigation
- hero section on Home
- app cards/grid
- footer across the site
- consistent page header treatment
- consistent spacing and type scale

### Navigation Behavior
- nav should be minimal and direct
- active page should be visibly indicated
- navigation should not feel bulky or “menu-heavy”
- on mobile, nav should collapse cleanly into a compact menu or drawer

### Footer Behavior
The footer should always include:
- brand name/logo
- license link
- GitHub or source organization link
- privacy policy link
- copyright or project ownership line
- optional small version/build line

---

## 4) Homepage Specification

## 4.1 Hero Section

### Hero Goal
The hero must communicate the project identity immediately and set the tone for the entire website.

### Hero Content
The hero should include:
- brand name / logo wordmark
- a concise identity statement
- 2 primary actions
- a subtle project status line

### Recommended Hero Copy Structure
- Brand name: dominant
- Supporting line: one sentence max
- Buttons: two actions
- Optional metadata: current project count or current activity status

### Good Hero Statement Types
Use language like:
- “A system of experimental applications.”
- “A minimal environment for building software.”
- “Tools, interfaces, and systems under one identity.”

Avoid:
- long storytelling paragraphs
- hype language
- generic marketing phrases
- vague startup language
- emotional founder narrative

### Hero Buttons
Primary button:
- **View Applications**

Secondary button options:
- **Explore System**
- **About This Project**
- **Read Overview**

Recommended choice:
- **Explore System**

### Hero Layout
The hero should feel structured and spacious:
- headline at the top or left
- supporting statement below it
- action buttons grouped together
- subtle metadata beneath
- clean negative space around content

### Hero Visual Treatment
- background: solid black or near-black
- optional glass panel behind hero content, but very restrained
- subtle border lines or grid framing may be used
- no clutter, no large illustrations, no random abstract shapes unless they support the design system

---

## 4.2 Featured Apps Section

### Purpose
This section shows the current apps/projects built under the brand.

### Current State
The website must support the fact that there may be only **one app** right now.
That is acceptable and should be presented honestly.

### Section Structure
- section title: “Applications”
- short subtitle or small descriptive line
- one or more app cards in a responsive grid

### App Card Content
Each app card should contain:
- app name
- short description
- status tag
- technology summary if relevant
- button linking to the app’s own website

### Link Destination
Do **not** prioritize GitHub links on the card if the app already has its own website.
The card should link to the **app’s website**, where:
- download button exists
- documentation exists
- details exist

### App Card States
Support at least these states:
- Active
- Beta
- Experimental
- Archived

### Empty/Single-Item Handling
If only one project exists:
- do not fake multiple items
- keep the layout elegant
- maintain grid structure so more apps can be added later
- optionally show a small line like “1 active application”

---

## 4.3 Optional Home Sections
The home page may include, if useful:
- a “What’s new” strip
- a small release/status summary
- a system note or manifesto line
- a subtle grid preview of content modules

Do not add these unless they preserve the minimal, serious tone.

---

## 5) Apps Page Specification

### Purpose
A dedicated product surface for all apps built under the brand.

### Content Goals
For each app, the page should make it easy to understand:
- what it is
- who it is for
- what state it is in
- where to open it

### App Listing Layout
Use a grid or stacked list depending on screen size.
Each card should be visually consistent with the brand system.

### App Card Fields
Recommended fields:
- App name
- One-line summary
- Longer short description if needed
- Status badge
- Supported platforms if relevant
- Primary action: open app website
- Secondary action: documentation or release notes if needed

### Card Order
Recommended order:
1. most active / most important app
2. older or secondary apps
3. experimental or upcoming apps

### App Detail Expansion
If you later need richer app detail pages, each app page can include:
- overview
- screenshots
- download section
- documentation link
- changelog
- license note
- compatibility note

---

## 6) About Page Specification

### Purpose
The About page is not a personal story page.
It is a **definition page**.

### Tone
- factual
- short
- confident
- dry in the best sense
- authoritative without pretending

### Recommended Structure
1. **What this is**
2. **What it is not**
3. **Guiding principles**
4. **How the system is maintained**

### Content Style
The About page should explain:
- why the ecosystem exists
- what kind of work belongs here
- what standards the projects follow
- how the brand is internally organized

### Suggested Principle Examples
- build small, complete systems
- avoid unnecessary complexity
- every app should be useful on its own
- design should follow function
- consistency matters more than trend

### What to Avoid
- emotional storytelling
- apology language
- overexplaining
- founder-bio style writing
- hype copy
- vague mission statement clichés

---

## 7) FAQ Page Specification

### Purpose
Answer common questions in a concise, technical, trustworthy way.

### FAQ Tone
- direct
- short
- clean
- practical

### Suggested Questions
- Why does this exist?
- Why is there only one app right now?
- Are these production-ready?
- Why is a custom license used?
- How often is the site updated?
- Where can I find documentation?
- Can I use or distribute the apps?

### Answer Style
Each answer should:
- stay brief
- avoid defensive tone
- avoid marketing language
- be honest about current scope

### FAQ Interaction
Consider an accordion system with:
- one open item at a time on mobile
- smooth expand/collapse animation
- clear spacing between items

---

## 8) Contact Page Specification

### Purpose
Offer a direct way to reach the brand or explore its external presence.

### Contact Content
Include:
- email address
- GitHub/org link
- any relevant social link(s)
- optional response-time note

### Tone
- minimal
- calm
- professional

### Contact Page Layout
Should feel simple and deliberate, not like a large support portal.

### Optional Support Details
If desired:
- response window
- preferred contact method
- note that the project is maintained asynchronously

Do not add forms unless there is a real operational reason.

---

## 9) Footer Specification

### Footer Purpose
The footer is part utility, part identity stamp.
It should anchor the entire website and reinforce legitimacy.

### Footer Must Include
- brand name/logo
- custom license link
- GitHub link or source repo link
- privacy policy link
- copyright line
- optional version/build line

### Footer Tone
The footer should feel like a serious system footer, not a giant promotional block.

### Footer Visual Treatment
- compact
- grid-aligned
- subtle separators
- low visual noise
- readable but not attention-hungry

### Optional Footer Metadata
- v1.0 or current site version
- build date if relevant
- “All rights reserved under custom license terms” only if that matches the license wording exactly

---

## 10) Typography Specification

### Font Family
Primary and secondary font family:
- **IBM Plex Sans**

### Typeface Rules
- use IBM Plex Sans throughout the site
- do not mix in serif for decorative contrast
- do not use monospace except in code blocks, install commands, or technical snippets
- avoid novelty fonts entirely

### Reasoning for IBM Plex Sans
The font must support the brand identity as:
- neutral
- professional
- slightly engineered
- readable
- modern without feeling trendy

### Recommended Typography Hierarchy

#### H1
- large
- confident
- heavy weight but not too bold
- tight line height

#### H2
- smaller than H1 but still prominent
- consistent rhythm
- clear section separation

#### H3 / Card Titles
- strong but compact
- excellent readability at small size

#### Body Text
- regular weight
- comfortable line height
- no decorative styling

#### Meta Text / Labels
- smaller
- muted gray
- should remain legible
- can be uppercase only if it does not damage readability

### Typography Do Nots
- no serif accents
- no exaggerated letter spacing
- no stylized italics for decoration
- no “tech bro” font choices
- no mono outside code context

---

## 11) Color System Specification

### Core Palette
Only monochrome and neutral tones.

#### Base Colors
- Pure black: `#000000`
- Near-black 1: `#050505`
- Near-black 2: `#0A0A0A`
- Panel black: `#101010`
- Border gray: `#1A1A1A`
- Strong border gray: `#232323`
- Mid gray text: `#9A9A9A`
- Secondary text: `#C0C0C0`
- Primary text: `#FFFFFF`

#### Allowed Variations
- subtle opacity changes
- layered black surfaces
- neutral gray borders
- white with transparency

#### Forbidden
- color accents
- gradients with hue
- neon glows
- blue/purple/green system defaults
- vivid status colors unless absolutely necessary and still monochrome-safe

### Status Colors
If status indicators are needed, keep them monochrome:
- Active: white or light gray
- Experimental: medium gray
- Archived: dark gray
- Disabled: very muted gray

No color-coded red/yellow/green system unless a functional requirement overrides the design language.

---

## 12) Glassmorphism Specification

### Design Goal
Glass should feel like a premium material layer inside an AMOLED black interface.
It must feel luxurious, tactile, and intentional.

### Glass Philosophy
This is not cheap frosted glass. It is not a gimmick. It is not a copied UI trend.
The glass must feel like a refined physical surface responding to light.

### Glass Surface Rules
- keep opacity low
- keep blur controlled
- keep borders subtle but present
- keep the effect localized to panels and cards
- do not cover the entire page in glass

### Recommended Glass Base
- background: translucent black/white mixture, heavily restrained
- blur: moderate
- border: faint white or gray with transparency
- highlight: minimal

### Recommended Glass Strength
Default state should be subtle enough that the card looks almost like a dark panel until you focus on it.

### Hover Glass Behavior
On hover, the surface may:
- brighten slightly
- sharpen border visibility
- shift highlight direction
- move upward by a very small amount
- reveal a controlled light sweep or shimmer

### Glass Hover Requirements
The hover state must feel like the surface is physically reacting.
It should not feel like:
- a generic CSS hover
- a flashy glow
- a bloated blur effect
- a cheap premium template

### Glass Anti-Patterns
Do not:
- over-blur the background
- use excessive transparency
- stack too many layers of glass
- add rainbow reflections
- apply strong chromatic gradients
- make text translucent

### Glass Text Rule
Text inside glass must remain solid, crisp, and highly readable.
Only the container should feel glassy.

---

## 13) Surface, Border, and Shape Rules

### Border Language
Borders should be sharp, precise, and intentional.

### Border Style
- thin but visible
- crisp on hover
- consistent across all components
- no soft blurry outlines

### Corner Radius
Keep corners restrained.
Recommended range:
- 0px to 8px max

Preferred for your system:
- 0px, 2px, 4px, or 6px depending on component type

### Shape Language
- cards: rectangular or nearly rectangular
- buttons: crisp rectangles
- panels: structured blocks
- modals: minimal radius, if any

### Surface Rules
- glass is layered on top of a strong dark base
- surface changes should be subtle and controlled
- no “floating bubbles” look

---

## 14) Button Specification

### Button Goals
Buttons should feel sturdy, clear, and premium.

### Button Types
1. **Primary button**
2. **Secondary button**
3. **Text/inline button**
4. **Icon button** if needed

### Primary Button Style
- solid or near-solid monochrome fill
- strong contrast against background
- sharp edges
- clear hover animation

### Secondary Button Style
- transparent or glass-backed
- visible border
- restrained fill
- subtle hover lift

### Button Hover Behavior
On hover, buttons may:
- darken or brighten slightly
- shift by 1–2px
- sharpen border
- reveal subtle inner reflection

### Button Press Behavior
On click/tap:
- compress subtly
- feel responsive
- no bounce or cartoon elasticity

### Button Text
- clear
- short
- action-oriented
- no long button labels

---

## 15) Card Specification

### Card Goal
Cards are the primary reusable building block for apps, FAQs, and content blocks.

### Card Design Requirements
- glass or semi-glass surface
- border line present
- clear spacing inside
- title, body, metadata, action placement should be consistent

### Card Content Order
Recommended:
1. title
2. short description
3. metadata/status
4. action(s)

### Card Hover State
On hover, cards should:
- elevate subtly
- sharpen visibility
- brighten slightly
- animate border and highlight smoothly

### Card Density
Cards should not feel overcrowded.
Even in a minimal design, the content must breathe.

---

## 16) Navigation Specification

### Desktop Nav
- simple horizontal navigation
- brand on left or center depending on layout
- page links on the opposite side or grouped neatly

### Mobile Nav
- compact hamburger or menu trigger
- drawer or sheet menu
- easy to tap
- avoid oversized menus

### Active State
The current page should always be clearly visible using monochrome treatment.

### Nav Style
- no flashy underlines
- no animated rainbow indicators
- no cluttered submenu system

---

## 17) Layout and Grid System

### Overall Layout
The site should feel built on a disciplined grid.

### Grid Rules
- consistent column alignment
- predictable vertical rhythm
- section spacing must be uniform
- cards and headers should align to a shared system

### Spacing Philosophy
Spacing is one of the main ways this site communicates premium quality.

### Spacing Rules
- generous outer spacing
- tighter inner spacing
- consistent section separation
- no cramped edges

### Recommended Baseline
Use an 8px system or a strict 4px-based system.

### Section Rhythm
Every section should feel intentional and breathe.
The site should never feel packed just to fill space.

---

## 18) Motion Specification

### Motion Philosophy
Motion should feel engineered, not playful.
It should reinforce structure and material behavior.

### Motion Characteristics
- smooth
- short
- controlled
- sharp
- premium
- subtle

### Recommended Timing Range
- 150ms to 280ms for most UI transitions
- slightly longer for page transitions if necessary

### Easing
Use clean easing curves such as:
- ease-out style curves
- cubic-bezier curves with controlled deceleration

### Required Motion Types
- hover transitions
- button press transitions
- accordion open/close
- page fade or slide transitions
- subtle card elevation changes

### Motion Do Nots
- no bounce
- no spring overshoot
- no cartoon easing
- no excessive parallax
- no motion that tries to impress for its own sake

---

## 19) Responsive Design Specification

### Mobile Requirement
The site must be fully usable on mobile and still preserve the premium look.

### Mobile Behavior
- stack content vertically
- reduce hero complexity
- keep buttons large enough to tap
- avoid dense multi-column layouts unless they collapse cleanly
- preserve clear spacing

### Tablet Behavior
- can use 2-column layouts for cards
- hero may be split or slightly wider
- maintain visual quietness

### Desktop Behavior
- use the grid more fully
- allow better spacing and alignment
- hero may be more editorial and open

### Responsive Rules
- content should never feel squeezed
- cards should never become unreadable
- glass must remain subtle, not muddy
- typography should scale cleanly

---

## 20) Accessibility Specification

### Contrast
Because the site is monochrome, contrast must be carefully tuned.

### Requirements
- text must remain readable on glass and dark backgrounds
- interactive elements must have visible focus states
- hover effects must not be the only interaction cue
- touch targets must be large enough on mobile

### Focus States
Use clean, visible focus rings or borders that fit the monochrome system.

### Reduced Motion
Support reduced-motion preferences by lowering or removing:
- hover sweeps
- page transitions
- card elevation animation
- accordion animations

### Readability
Avoid overly low-opacity text or surfaces that reduce legibility.

---

## 21) Content Tone Specification

### Global Writing Style
- concise
- serious
- structured
- minimal
- technically clear
- no overexplaining

### Allowed Style
- short statements
- factual summaries
- clear action labels
- simple definitions

### Not Allowed
- hype
- hype-like startup copy
- playful marketing voice
- fake “community” tone
- emotional over-sharing
- unnecessary narrative

### Brand Voice Example
Good:
- “A system of experimental applications.”

Bad:
- “We’re on a mission to revolutionize digital experiences for everyone.”

---

## 22) Status and Metadata System

### Purpose
Use metadata to make the site feel active and maintained.

### Possible Metadata
- Active / Experimental / Archived
- Version
- Build number
- Last updated
- Platform support
- Download availability

### Visual Style for Metadata
- small
- muted
- aligned consistently
- never overpower the main content

### Metadata Rule
Metadata should support clarity, not become decorative noise.

---

## 23) License and Legal Presentation

### License Handling
The site should clearly link to the custom license hosted in GitHub.

### Presentation Rules
- mention the license in the footer
- optionally mention it in About or FAQ
- keep the wording accurate and not overly legalistic unless needed

### Privacy Policy
Include a privacy policy link in the footer even if the site is minimal.

### Legal Tone
- clear
- direct
- not verbose
- not lawyer-y unless the actual legal text requires it

---

## 24) Interaction Model

### On Hover
- buttons sharpen or brighten subtly
- cards react like glass surfaces
- borders become slightly more visible
- elements feel physically responsive

### On Tap / Click
- brief compression
- subtle feedback
- no delay

### On Scroll
- section transitions remain smooth and restrained
- no parallax overload
- keep scroll behavior stable and readable

### On Page Change
- short fade or soft slide
- no dramatic animation

---

## 25) Component Inventory

### Required Components
- top navigation
- hero block
- CTA buttons
- app card
- status badge
- FAQ accordion
- contact list item
- footer link group
- code block for install/docs snippets
- modal or drawer for mobile nav

### Reusable Styling Rules
Every component should share:
- same border logic
- same monochrome token system
- same typography system
- same motion system

---

## 26) Visual Do / Don’t

### Do
- use black as the true foundation
- keep the site elegant and controlled
- use glass sparingly but purposefully
- keep typography readable and modern
- make empty space work for you
- let one app still feel legitimate

### Don’t
- use colored accents
- use cheap blur effects
- over-design the hero
- make it look like a generic SaaS
- mix in serif fonts for contrast
- use monospace for normal content
- overfill the homepage just because there is only one app
- make the glass too obvious

---

## 27) Content Priorities

The content hierarchy should be:

1. Brand identity
2. App showcase
3. System principles
4. FAQ clarity
5. Contact and legal links

This order keeps the website aligned with the real goal: making the brand feel like a coherent ecosystem.

---

## 28) Final Experience Goal

When a user lands on the website, they should feel:
- this is serious
- this is intentional
- this is visually controlled
- this is premium without being loud
- this is not a random template
- this is a real system with an identity

The website should work even with one app today, and scale gracefully as more apps are added later.

---

## 29) Implementation Notes

### If Building in Code
- define design tokens first
- build reusable components second
- wire pages third
- refine motion and hover behavior last

### If Building with an AI UI Generator
The prompt should emphasize:
- monochrome palette
- IBM Plex Sans
- AMOLED base
- glass cards with subtle hover animation
- sharp borders
- serious, mechanical feel
- fully responsive layout
- no color accents
- no playful SaaS aesthetics

### If Iterating Later
Any future changes must preserve the core system:
- monochrome
- sans serif
- sharp borders
- premium glass
- controlled motion
- professional tone

---

## 30) Final Summary in One Line
A monochrome, AMOLED-black, glass-accented, sans-serif brand website that feels like a serious product system rather than a generic portfolio or SaaS landing page.

