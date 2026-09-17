# Fedimint Ecash App Landing Page

This repository contains the marketing site for the Fedimint [Ecash App](https://github.com/fedimint/ecash-app). It is a statically generated Next.js application that introduces key product features, showcases app screens, and directs visitors to install the app from the App Store or Google Play, or to download the latest APK, Linux AppImage, and macOS DMG builds.

## Where to Get the App

| Platform | Link |
| --- | --- |
| iOS (App Store) | https://apps.apple.com/us/app/ecash-app/id6808289368 |
| Android (Google Play) | https://play.google.com/store/apps/details?id=org.fedimint.app |
| Android APK, Linux AppImage, macOS DMG | https://github.com/fedimint/ecash-app/releases |

The App Store and Google Play links are defined once in `lib/store-links.ts` and reused by every badge and button on the site. The APK, AppImage, and DMG buttons resolve to the newest stable GitHub release at build time via `lib/github.ts`.

## Highlights

- Hero section that positions Fedimint Ecash as a fast, privacy-focused payments app.
- Feature grid covering Lightning Address support, Mint Wallet Connect, backups, federation discovery, and more.
- Responsive gallery of high-fidelity screenshots that demonstrate core user flows inside the mobile app.
- Download CTAs for every platform: a "Download on the App Store" button, direct APK, Linux AppImage, and macOS DMG buttons, plus official App Store and Google Play badges.
- Fixed navigation header with links to Fedimint and the app's GitHub repository.
- Theming powered by Tailwind CSS design tokens for easy visual customization.

## Tech Stack

- [Next.js 14](https://nextjs.org/) with the App Router (`app/` directory) and TypeScript.
- React 19, bundled with the Next.js runtime.
- Tailwind CSS 4 with custom OKLCH token definitions in `styles/globals.css`.
- shadcn/ui component primitives (Radix UI + Tailwind) located under `components/ui`.
- Local marketing assets, store badges, and screenshots in `public/`.

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

> **GitHub API:** The build fetches release metadata from the GitHub API to resolve the APK, AppImage, and DMG download URLs. Set a `GITHUB_TOKEN` environment variable to avoid unauthenticated rate limits. If the request fails, the buttons fall back to the releases page.

## Project Structure

- `app/` – App Router entrypoints. `app/page.tsx` stitches together the header, hero, and showcase sections and renders the bottom download CTAs. `app/privacy/page.tsx` hosts the privacy policy.
- `components/` – Marketing modules (`header.tsx`, `hero-section.tsx`, `app-showcase.tsx`, `footer.tsx`) and shared UI primitives under `components/ui`.
- `lib/` – `github.ts` resolves the latest release asset URLs; `store-links.ts` holds the App Store and Google Play listing URLs.
- `public/` – PNG renders of the mobile app used throughout the layout, plus the store badges (`app-store-badge.svg`, `google-play-badge.png`). Replace these to update screenshots without touching code.
- `styles/globals.css` – Tailwind base layer plus brand color tokens. Tweaking values here cascades through the entire theme.

## Editing Content

- Update top-level marketing copy in the respective component files inside `components/`.
- Change the App Store or Google Play listing URL in `lib/store-links.ts`; the hero and bottom-of-page buttons and badges pick it up automatically.
- The APK, AppImage, and DMG download URLs are resolved from GitHub Releases in `lib/github.ts`. Adjust the asset-matching logic there if release file names change.
- To add or remove showcased screens, modify the `appScreens` array in `components/app-showcase.tsx` and drop new assets in `public/`.

### Store badges

- `public/app-store-badge.svg` is Apple's official "Download on the App Store" badge (black, English). Follow the [App Store marketing guidelines](https://developer.apple.com/app-store/marketing/guidelines/) when changing its size or placement; it is rendered at the same height as the Google Play badge.
- `public/google-play-badge.png` is the official "Get it on Google Play" badge. See the [Google Play badge guidelines](https://play.google.com/intl/en_us/badges/).

## Deployment

The project can be deployed on any Next.js-compatible host (Vercel, Netlify, Render, etc.).

1. Build the site with `pnpm build`.
2. Deploy the generated output using your platform’s Next.js adapter or a container workflow.

For static export or edge/runtime-specific deployments, consult the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).

## License

No explicit license has been provided. Please confirm usage rights with the Fedimint team before distributing the site or its assets.
