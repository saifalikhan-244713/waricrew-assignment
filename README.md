# SkillPath — Framer Learning Platform

A responsive learning platform landing page built with **Framer Code Components and React**.

## Components

* `Hero.tsx` — Hero section with CTA and smooth scroll to the courses section.
* `CoursesSection.tsx` — Handles course/country data, loading and error states, search, sorting, currency-based pricing, and the responsive course grid.
* `Cards.tsx` — Reusable course card component.
* `Footer.tsx` — Responsive footer with About, Courses, and Contact links.

## Framer Controls

The Courses section includes two controls that can be changed from Framer:

* **Extra Field** — Category, Type, or Short name
* **Accent Color** — Change the main accent color

## Responsive Layout

* Desktop: 3 cards per row
* Tablet: 2 cards per row
* Mobile: 1 card per row

## Changes Made to the Initial Implementation

I used AI tools during development, but I tested the implementation in Framer and made changes where the generated code didn't work as expected.

A few things I had to fix:

* **Responsive grid:** The initial responsive approach didn't behave correctly in Framer's canvas/preview. I changed it to explicit breakpoints:

  * `1200px+` → 3 columns
  * `810px–1199px` → 2 columns
  * `<810px` → 1 column

  The same grid is used for the loading state as well.

* **Hero CTA:** The initial button was pointing to a scroll target that didn't exist. I added the `courses-section` ID to the Courses section and used `scrollIntoView()` to smoothly scroll to it.

* **Refundable status:** The card originally only showed a badge when a course was refundable. I changed it to clearly show either `Refundable` or `Non-refundable`.

* **Footer:** The footer wasn't part of the initial page flow, so I added it after the Courses section with the required links and copyright text.

## What I'd Improve Next

If I had two more days, I'd focus on:

* Improving the overall visual polish
* Better accessibility
* Improving loading and error states
* Testing more edge cases
* Testing the layout across more Framer breakpoints
* Handling API failures more gracefully

AI was used as a development aid, but the code was tested, debugged, and manually adjusted in Framer.

**Chat link with claude is here **
https://claude.ai/share/7d05d1fe-1529-48d1-b952-f12c76425e99
