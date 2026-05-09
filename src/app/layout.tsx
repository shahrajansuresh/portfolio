import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Rajan Shah — React Native Engineer',
  description: 'React Native engineer specializing in offline-first architecture and enterprise mobile apps. 4+ years, MENA and India.',
  keywords: ['React Native', 'Offline-First', 'Mobile Engineer', 'Freelance', 'MENA', 'Enterprise'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${mono.variable}`}>
      <body style={{ fontFamily: 'var(--font-jakarta)' }}>{children}</body>
    </html>
  )
}
