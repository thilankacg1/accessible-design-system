# Accessible Design System

A production-quality React component library built with accessibility at its core.
Every component is WCAG 2.1 AA compliant, tested with jest-axe, and documented in Storybook.

## Live Storybook

**[View live component library →] https://6a0bcd62592cc4baef327e96-vlxiuytwwg.chromatic.com **

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Radix UI** primitives (accessible, unstyled)
- **Tailwind CSS v4** for styling
- **class-variance-authority** for component variants
- **Storybook 8** with accessibility addon
- **Vitest** + **React Testing Library** + **jest-axe**

## Components

| Component | Variants | Tests | WCAG 2.1 AA |
|-----------|----------|-------|-------------|
| Button    | 5 variants, 3 sizes, loading/disabled/icons | 11 | ✅ |
| Badge     | 7 variants, dot indicator | 11 | ✅ |
| Input     | Error state, helper text, required, disabled | 15 | ✅ |

## Accessibility Approach

Every component is built with:
- **Semantic HTML** — correct elements for correct purposes
- **ARIA attributes** — aria-invalid, aria-describedby, aria-busy, aria-hidden
- **Keyboard navigation** — fully operable without a mouse
- **Screen reader support** — tested with VoiceOver and NVDA
- **Automated WCAG testing** — jest-axe runs on every component in CI

## Run Locally

\`\`\`bash
npm install
npm run storybook     # component documentation at localhost:6006
npm run test          # run all tests
\`\`\`

## Test Results

\`\`\`
Test Files  3 passed
Tests       37 passed
\`\`\`