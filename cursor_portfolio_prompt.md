# Cursor Prompt: Portfolio Webpage Inspired by Screenshot

Build a clean, single-page personal portfolio website using the provided screenshot as the layout/template inspiration, but adapt it for a community-focused operator/builder in tech.

Use this structure and visual system exactly:

1. **About Me section**
2. **Resume / Experience section**
3. **CTA / Contact section**

The page should feel editorial, warm, polished, slightly unconventional, and personal. It should not feel like a generic SaaS landing page or overly corporate portfolio.

---

## Screenshot Template Reference

Use the uploaded screenshot as the layout reference. The main inspiration points are:

- A strong top hero/about section with a centered portrait or visual element.
- A minimal navigation bar across the top.
- A compact personal intro area with name, short description, and a clear positioning statement.
- A second section that presents work/resume experience in a split layout: text on the left, visual/card/content on the right.
- A bold final CTA section with high contrast, oversized text, and simple contact links.
- Plenty of spacing, strong typography, and a clear rhythm between sections.

Do **not** copy the exact content, logo, colors, or identity from the screenshot. Use it only as a structural and visual reference.

---

## Color Scheme

Use only these three colors as the core color palette:

- **Soft Bone**: `#F6F1E8`
- **Charcoal Cocoa**: `#2A2420`
- **Electric Persimmon**: `#FF5A3D`

Suggested usage:

- `#2A2420` as the primary dark background and main text color when on light sections.
- `#F6F1E8` as the main light background and text color when placed on dark sections.
- `#FF5A3D` as the accent color for CTAs, links, hover states, small labels, highlights, dividers, buttons, or one bold final section.

Avoid adding extra colors unless absolutely necessary for accessibility. If a neutral is needed, use opacity variations of the existing colors.

---

## Typography

Use **Lato** for all typography.

Typography direction:

- Use uppercase micro-labels for navigation and section labels.
- Use bold, oversized headings in the CTA section.
- Use clean paragraph text with generous line-height.
- Keep the site readable and modern, but not sterile.
- Avoid overly trendy AI/startup wording.

---

## Page Structure

### 1. About Me Section

Create a top hero/about section inspired by the screenshot.

Requirements:

- Full-width dark section using `#2A2420`.
- Top navigation bar with simple links:
  - About
  - Resume
  - Work
  - Contact
- Add a simple text-based logo or name mark on the left.
- Include a centered portrait placeholder, circular image, or abstract visual placeholder.
- Under or beside the image, include:
  - Small uppercase label: `ABOUT`
  - Name: `Sandra Almanza`
  - Email placeholder: `your-email@example.com`
  - Short intro copy:

> I work at the intersection of community, operations, and emerging tech, helping technical ecosystems feel clearer, more human, and easier to participate in.

- Add a short positioning paragraph:

> My work sits in the in-between spaces: onboarding that actually sticks, documentation real users finish reading, communities that do not go quiet three months in, and content that helps people understand why a technology matters.

- Add a subtle inline CTA link:

> Sometimes I take on community, content, and ops projects →

Tone should feel confident, warm, and grounded. Avoid sounding like a pitch deck.

---

### 2. Resume / Experience Section

Create a resume-style section inspired by the screenshot’s work/project block.

Requirements:

- Light background using `#F6F1E8`.
- Split layout:
  - Left column: experience summary and role cards.
  - Right column: a visual résumé card, timeline block, or highlighted metrics panel.
- Section label: `RESUME`
- Main heading suggestion:

> Community operations for technical ecosystems.

Include experience cards for:

#### Immunefi — Community Manager

- Managed and supported a 10,000+ security researcher community.
- Helped coordinate large-scale community programs including Immunefi Island and All Stars.
- Worked across community, communications, support, and internal teams to improve contributor experience.
- Supported workflow improvements and automation to reduce low-quality or invalid activity.

#### AthenaDAO / AthenaBIO — Community & Partnerships

- Supported community, partnerships, marketing, and cross-functional coordination.
- Helped communicate women’s health and DeSci topics in an accessible way.
- Grew AthenaBIO’s LinkedIn presence through timely, educational content.

#### Code4rena — Community Relations Coordinator

- Supported contributor onboarding, documentation, communication, and researcher engagement.
- Helped maintain smoother coordination between contributors and internal teams.

#### Curiosidad Cuántica — Co-Founder / Co-Host

- Co-created a Spanish-language podcast that makes quantum computing more accessible to curious beginners.
- Produces episode guides, guest research, social clips, recaps, and educational content.
- Bridges technical topics with clear storytelling for Spanish-speaking audiences.

Optional metrics/highlights panel on the right:

- `10,000+` security researchers supported
- `$1M+` community program earnings supported through Immunefi Island
- `Spanish-language` quantum computing education
- `Community + Ops + Content` as the core positioning

Design direction:

- Use simple cards with borders or soft background contrast.
- Use Electric Persimmon sparingly for labels, dividers, icon accents, or hover states.
- Keep the layout airy and editorial.
- Avoid cluttered resume formatting.

---

### 3. CTA / Contact Section

Create a bold final CTA section inspired by the screenshot’s bright contact block.

Requirements:

- Use `#FF5A3D` as the dominant background color.
- Use `#2A2420` for large CTA text.
- Include a small uppercase label: `CONTACT`
- Use a large, bold headline:

> Building something in emerging tech and care about how people actually experience it?

Include this CTA body copy:

> I’m most useful in the in-between spaces: onboarding that actually sticks, documentation real users finish reading, communities that do not go quiet three months in, and content that helps technical ideas reach the people they are meant for.

Include simple contact actions:

- `Email me`
- `LinkedIn`
- `Book time`

Design direction:

- Make this section high-impact and memorable.
- Use large type, generous spacing, and minimal links.
- The CTA should feel human and direct, not overly salesy.

---

## Layout Requirements

- Build as a responsive one-page site.
- Mobile-first or fully responsive desktop-to-mobile behavior.
- Use semantic HTML.
- Use clean, reusable CSS classes.
- Keep animations subtle: hover states, small transitions, maybe a soft reveal if appropriate.
- Avoid heavy animation libraries.
- Preserve generous whitespace.
- Use rounded corners sparingly.
- Make sure contrast is accessible.

---

## Overall Style Direction

The final page should feel like:

- A personal portfolio for a community-focused operator in tech.
- Warm and editorial, not corporate.
- Strategic, clear, and human.
- Inspired by the screenshot’s section rhythm: dark intro, light work/resume block, bold CTA.
- Minimal but not boring.
- Distinctive without being overdesigned.

Avoid:

- Generic startup copy.
- Three-word listicle phrases.
- Overused lines like “bridging the gap” unless rewritten naturally.
- Overly AI-sounding sentence patterns.
- A page that looks like a standard resume pasted into a website.

---

## Deliverable

Generate the complete webpage implementation.

If using React or Next.js:

- Create a clean component structure.
- Include the required CSS or Tailwind classes.
- Use Lato via Google Fonts or local font import.
- Make sure the layout works on desktop and mobile.

If using plain HTML/CSS:

- Create `index.html` and `styles.css`.
- Include the Lato font import.
- Use the color variables:

```css
:root {
  --soft-bone: #F6F1E8;
  --charcoal-cocoa: #2A2420;
  --electric-persimmon: #FF5A3D;
}
```

Prioritize strong layout, strong spacing, and clean typography over decorative effects.
