import type { Metadata, Viewport } from 'next'
import { Oswald, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-oswald',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'PREMIUM IMPORTS | Importados Premium do Paraguai',
  description:
    'Seleção exclusiva de eletrônicos, perfumes e tecnologia de ponta com garantia de procedência e qualidade absoluta.',
  generator: 'v0.app',
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${oswald.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
