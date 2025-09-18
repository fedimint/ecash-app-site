import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Ecash App',
    template: '%s | Ecash App',
  },
  description:
    'Ecash App brings lightning-fast payments, on-chain transactions, and federated e-cash together in one secure wallet.',
  applicationName: 'Ecash App',
  generator: 'Ecash App',
  keywords: [
    'Ecash App',
    'digital wallet',
    'lightning network',
    'bitcoin payments',
    'federated e-cash',
  ],
  authors: [{ name: 'Ecash App Team' }],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Ecash App',
    description: 'Experience lightning-fast payments without limits in one secure digital wallet.',
    siteName: 'Ecash App',
    images: [
      {
        url: '/assets/app-transaction-history.png',
        width: 1200,
        height: 630,
        alt: 'Ecash App transaction history screen',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecash App',
    description: 'Experience lightning-fast payments without limits in one secure digital wallet.',
    images: ['/assets/app-transaction-history.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
