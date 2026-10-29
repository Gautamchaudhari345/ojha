import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OJHA BUILDTECH | Built on Trust. Protected for Life.',
  description: 'Reliable waterproofing, civil construction, and infrastructure solutions built around quality, precision, and long-term performance.',
  generator: 'v0.app',
  metadataBase: new URL('https://ojhabuildtech.in'),
  openGraph: { title: 'OJHA BUILDTECH', description: 'Built on Trust. Protected for Life.', type: 'website' },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#101d35' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
