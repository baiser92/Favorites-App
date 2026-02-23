import Link from 'next/link'
import { Providers } from './providers'
import './globals.css'

export const metadata = {
  title: 'Media Favorites',
  description: 'Manage your favorite media items',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] flex flex-col">
        <nav className="w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-end">
            <Link
              href="/favorites"
              className="text-sm font-medium text-[var(--color-muted)] hover:text-white transition-colors duration-200"
            >
              Ver mis favoritos
            </Link>
          </div>
        </nav>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
