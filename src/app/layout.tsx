import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Curations - Heart and Headlines of Brands',
  description: 'We curate the heart and headlines of brands. Strategic creative agency specializing in AI discovery, brand development, and youth curator programs.',
  keywords: 'creative agency, brand strategy, AI discovery, youth mentorship, digital marketing, Los Angeles',
  authors: [{ name: 'Curations' }],
  openGraph: {
    title: 'Curations - Heart and Headlines of Brands',
    description: 'We curate the heart and headlines of brands.',
    url: 'https://curations.cc',
    siteName: 'Curations',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curations - Heart and Headlines of Brands',
    description: 'Strategic creative agency specializing in brand development and AI discovery.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical fonts */}
        <link rel="preload" href="https://fonts.googleapis.com/css?family=JetBrains+Mono:400,700&display=swap" as="style" />
        <link rel="preload" href="https://fonts.googleapis.com/css?family=Poppins:400,600,800&display=swap" as="style" />
        <link rel="preload" href="https://fonts.googleapis.com/css?family=Archivo:400,700,900&display=swap" as="style" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "Curations",
              "description": "We curate the heart and headlines of brands",
              "url": "https://curations.cc",
              "sameAs": [
                "https://la.curations.org"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "747-200-5740",
                "email": "hello@curations.cc"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}