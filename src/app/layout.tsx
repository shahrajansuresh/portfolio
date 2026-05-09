import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['300','400','500','600','700','800'],
})
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400','500'],
})

const url = 'https://portfolio-pied-ten-z6yox4z2bi.vercel.app'

export const metadata: Metadata = {
  title: 'Rajan Shah — React Native Engineer',
  description: '4+ years building offline-first React Native apps for enterprise clients across India and the MENA region. Custom sync engines, legacy modernization, full product ownership.',
  keywords: ['React Native', 'Mobile Engineer', 'Offline-First', 'Freelance', 'MENA', 'India', 'Ahmedabad', 'Enterprise Mobile'],
  authors: [{ name: 'Shah Rajan Sureshbhai' }],
  creator: 'Shah Rajan Sureshbhai',
  metadataBase: new URL(url),
  openGraph: {
    type: 'website',
    url,
    title: 'Rajan Shah — React Native Engineer',
    description: 'Mobile apps that work anywhere. Offline-first architecture, custom sync engines, enterprise-grade React Native.',
    siteName: 'Rajan Shah Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Rajan Shah — React Native Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajan Shah — React Native Engineer',
    description: 'Mobile apps that work anywhere. Offline-first architecture, custom sync engines, enterprise-grade React Native.',
    images: ['/og-image.png'],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Rajan Shah',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#060608',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${mono.variable}`}>
      <head>
        <link rel="apple-touch-icon" href="/icon-192.svg" />
      </head>
      <body style={{ fontFamily: 'var(--font-jakarta)' }}>{children}</body>
    </html>
  )
}
