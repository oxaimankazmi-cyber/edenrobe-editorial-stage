# Edenrobe Editorial

Absolutely. Since you have only 10 Lovable credits, I’d make the prompt highly directive: define the visual system, page structure, animation behavior, technical expectations, and—most importantly—explicitly tell Lovable what not to do so it doesn't waste the generation on generic ecommerce UI.

Build a high-end, editorial ecommerce homepage for edenrobe, a modern Pakistani fashion brand. This is a visual demo, so prioritize exceptional art direction, composition, interaction design, responsiveness, and polish over building a complete ecommerce backend.

CORE BRAND DIRECTION

edenrobe represents modern Pakistani fashion that balances heritage with contemporary style. The brand is refined, accessible, versatile, family-oriented, and fashion-led.

The experience should feel like a premium Pakistani fashion editorial combined with a sophisticated modern fashion store.

Do NOT make this look like a generic Shopify template, generic ecommerce website, SaaS landing page, or AI-generated website.

Avoid excessive rounded cards, floating blobs, gradients, glassmorphism, unnecessary borders, generic icon sections, repetitive product grids, oversized pills, and template-like layouts.

The design should feel intentionally art-directed.

COLOR SYSTEM — STRICT 60/30/10

Use ONLY these three primary colors:

60% Warm Ivory: #F5F1E8 — main background

30% Deep Charcoal: #171717 — typography, navigation, structure

10% Muted Terracotta: #A65D45 — CTAs, active states, selected details and small highlights

Do not introduce additional accent colors.

The overall palette should feel warm, sophisticated, contemporary, and connected to Pakistani fashion without looking stereotypically "ethnic".

TYPOGRAPHY

Use a sophisticated editorial serif for major headlines and a clean modern sans-serif for navigation, body text, labels, and UI.

Typography must create strong contrast between:

Large editorial headlines

Small uppercase navigation/category labels

Elegant supporting copy

Minimal ecommerce information

Use large typography confidently but keep it refined.

Avoid generic typography pairings and avoid excessive bold text.

HOMEPAGE EXPERIENCE

1. INITIAL LOADER

Create a minimal luxury-fashion loader.

Use the edenrobe wordmark/text treatment centered on screen with a restrained loading transition.

The loader should feel intentional and cinematic, not like a standard website spinner.

Transition smoothly into the homepage.

2. NAVIGATION

Create a minimal, premium navigation.

Desktop:

edenrobe wordmark on the left

centered primary navigation

search, account and bag controls on the right

Navigation categories should be concise:
Women / Men / Kids / Collections / Fragrance

Use a transparent/overlay navigation over the hero initially, then transition into a solid background when the page scrolls.

Keep navigation visually quiet so the campaign imagery remains dominant.

Mobile navigation must be carefully designed rather than simply collapsing the desktop menu.

3. HERO — MAIN EXPERIENCE

The hero is the most important part of the homepage.

Create a full-viewport fashion campaign composition using high-quality Pakistani fashion imagery.

Do NOT make a conventional static hero with:
"headline + paragraph + button + image".

Instead, create an immersive editorial composition.

Hero concept:

Large campaign image occupying most of the viewport

Oversized editorial typography integrated into the composition

Small collection/season label

Minimal CTA

Layered foreground/background visual elements

HERO SCROLL INTERACTION

Implement a real scroll-driven hero transition.

As the user scrolls:

The campaign image slowly changes scale and position.

Typography moves independently from the image.

Foreground and background layers respond at different rates.

The hero composition gradually transforms into the next section.

The image should visually transition into a collection/editorial image.

This must feel like a controlled camera movement.

Do NOT use fake/simple CSS parallax.

If supported, use GSAP ScrollTrigger and/or React Three Fiber/Three.js for genuine depth and scroll-controlled movement.

Keep the animation smooth and performance-conscious.

4. COLLECTION TRANSITION

After the hero, create a visually unexpected transition into featured collections.

Instead of a normal 3-column card grid, use an editorial composition with large overlapping imagery and typography.

Feature:

Women's collection

Men's collection

Kids

Fragrance

Each category should have a distinct visual identity while remaining within the same design system.

Use hover interactions that subtly reveal additional information or image states.

5. EDITORIAL FASHION SECTION

Create a large editorial storytelling section.

Use asymmetrical composition rather than a standard centered content block.

Include:

Large fashion image

Small supporting image/details

Large serif headline

Short, human-written copy

Minimal CTA

The copy should communicate contemporary Pakistani fashion and craftsmanship without marketing buzzwords.

DO NOT use phrases such as:
"elevate your style", "where tradition meets innovation", "timeless elegance", "redefine luxury", "step into a world", "seamlessly blends", or other generic AI marketing language.

Write concise, believable fashion-brand copy.

6. FEATURED PRODUCTS

Introduce a curated product section, NOT a huge ecommerce grid.

Show 4 carefully selected products.

Use an editorial horizontal composition or oversized product presentation rather than generic product cards.

Product interaction:

image hover transition

product name

category

price

subtle quick-view/add interaction

Keep UI minimal.

7. FAMILY / CATEGORY DISCOVERY

Create a visually strong section that communicates edenrobe's breadth across the family.

Use large typography and imagery rather than four generic cards.

The section should make the user understand that edenrobe serves:
Women / Men / Boys / Girls

Use scroll-based image transitions or directional movement to make this section feel interactive.

8. BRAND STATEMENT

Create a quiet, spacious brand statement section.

Large serif typography with minimal supporting text.

Do not over-explain the brand.

The section should communicate:
modern Pakistani fashion, everyday dressing, occasion wear, and a broad wardrobe.

Use whitespace intentionally.

9. FINAL CTA

End with a strong editorial campaign image and a simple CTA.

No giant ecommerce banner.

No excessive buttons.

Make the final moment feel like the conclusion of a fashion campaign.

10. FOOTER

Create a refined, structured footer containing:

edenrobe wordmark

Women

Men

Kids

Fragrance

Customer Care

About

Social links

Newsletter/email field

Keep it visually minimal.

MOTION SYSTEM

Motion is a core part of the experience.

Use:

sophisticated page loader

smooth page entrance

scroll-triggered reveals

image clipping/masking transitions

typography movement

horizontal scroll moments where appropriate

real depth/3D illusion

hover image transformations

subtle cursor interaction on desktop

navigation state transition

smooth section-to-section transitions

Animations should have intentional timing and easing.

Do NOT animate every element.

Motion should guide attention and create hierarchy.

3D DIRECTION

Include at least one meaningful 3D/depth experience.

Do NOT create random floating 3D shapes.

The 3D treatment should relate to fashion/product presentation—for example:

layered fabric/product composition

rotating product/object

dimensional campaign composition

depth-based editorial scene

Use Three.js / React Three Fiber if appropriate.

The 3D scene must degrade gracefully on mobile and lower-powered devices.

RESPONSIVE DESIGN

This must be genuinely responsive.

Desktop, tablet, and mobile should feel deliberately designed—not desktop squeezed into a smaller screen.

On mobile:

simplify complex 3D effects where necessary

preserve the storytelling

maintain typography hierarchy

keep interactions touch-friendly

maintain visual impact

No horizontal overflow.

IMAGE DIRECTION

Use premium fashion photography with:

Pakistani models

contemporary Pakistani clothing

natural poses

sophisticated editorial lighting

neutral/warm environments

strong composition

realistic photography

Avoid cheesy stock photography, generic AI-looking fashion models, overly saturated imagery, and stereotypical cultural imagery.

Images should feel like a real fashion campaign.

UI PRINCIPLES

Use:

intentional asymmetry

strong whitespace

editorial typography

oversized imagery

restrained UI

subtle interaction states

precise alignment

visual hierarchy

Avoid:

generic card grids

excessive rounded corners

gradients

glassmorphism

floating decorative blobs

generic hero layouts

excessive shadows

unnecessary icons

excessive badges

template-looking sections

AI-generated marketing copy

TECHNICAL QUALITY

Build this as a polished production-quality React experience.

Prefer:

React

Tailwind CSS

GSAP / ScrollTrigger for scroll animation

Three.js / React Three Fiber where genuinely useful

optimized image loading

semantic HTML

accessible navigation

keyboard-friendly interactions

responsive layouts

smooth performance

Use reusable components and a coherent design system.

Do not spend implementation effort on backend, authentication, checkout, payment processing, or complex ecommerce functionality.

The priority is the homepage visual experience.

FINAL CREATIVE DIRECTION

The finished result should feel like:

A contemporary Pakistani fashion editorial brought to life as an interactive digital experience.

It should look expensive without relying on excessive decoration.

Every section must have a reason to exist.

Every animation must support the visual story.

Every color must follow the 60/30/10 system.

Every piece of copy must sound human and brand-specific.

Most importantly:

DO NOT GENERATE A GENERIC ECOMMERCE WEBSITE.
Create a distinctive, editorial, premium homepage that could realistically represent a major Pakistani fashion brand and immediately demonstrate strong UI/UX, art direction, motion design, and frontend execution.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1cca880f-0e04-448b-9687-ce58fe3133da).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
