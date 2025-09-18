# Fedimint Ecash App Landing Page

This repository contains the marketing site for the Fedimint [Ecash App](https://github.com/fedimint/ecash-app). It is a statically generated Next.js application that introduces key product features, showcases app screens, and directs visitors to download the latest APK build.

## Highlights

- Hero section that positions Fedimint Ecash as a fast, privacy-focused payments app.
- Feature grid covering Lightning Address support, Mint Wallet Connect, backups, federation discovery, and more.
- Responsive gallery of high-fidelity screenshots that demonstrate core user flows inside the mobile app.
- Fixed navigation header with quick anchors for features, product overview, and download CTAs.
- Theming powered by Tailwind CSS design tokens for easy visual customization.

## Tech Stack

- [Next.js 14](https://nextjs.org/) with the App Router (`app/` directory) and TypeScript.
- React 19, bundled with the Next.js runtime.
- Tailwind CSS 4 with custom OKLCH token definitions in `styles/globals.css`.
- shadcn/ui component primitives (Radix UI + Tailwind) located under `components/ui`.
- Local marketing assets and screenshots in `public/assets`.

## Getting Started

1. Install dependencies (the project uses [`pnpm`](https://pnpm.io/) by default):
   ```bash
   pnpm install
   ```
2. Start the development server:
   ```bash
   pnpm dev
   ```
   The site runs on `http://localhost:3000` with hot reloading.
3. Create an optimized production build:
   ```bash
   pnpm build
   pnpm start
   ```
4. Run lint checks before shipping changes:
   ```bash
   pnpm lint
   ```

> **Node version:** Next.js 14 requires Node.js 18.18 or newer. Consider using `nvm` to match the project’s runtime.

## Project Structure

- `app/` – App Router entrypoints. `app/page.tsx` stitches together the header, hero, feature grid, and showcase sections.
- `components/` – Marketing modules (`header.tsx`, `hero-section.tsx`, `features-section.tsx`, `app-showcase.tsx`) and shared UI primitives under `components/ui`.
- `public/assets/` – PNG renders of the mobile app used throughout the layout. Replace these to update screenshots without touching code.
- `styles/globals.css` – Tailwind base layer plus brand color tokens. Tweaking values here cascades through the entire theme.

## Editing Content

- Update top-level marketing copy in the respective component files inside `components/`.
- Adjust CTA targets (e.g., APK download URL) by editing the button props inside `hero-section.tsx` and `header.tsx`.
- To add or remove showcased screens, modify the `appScreens` array in `components/app-showcase.tsx` and drop new assets in `public/assets/`.

## Deployment

The project can be deployed on any Next.js-compatible host (Vercel, Netlify, Render, etc.).

1. Build the site with `pnpm build`.
2. Deploy the generated output using your platform’s Next.js adapter or a container workflow.

For static export or edge/runtime-specific deployments, consult the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).

## License

No explicit license has been provided. Please confirm usage rights with the Fedimint team before distributing the site or its assets.
