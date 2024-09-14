import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-100">
          <header className="bg-white shadow">
            <nav className="container mx-auto px-6 py-3">
              <Link href="/" className="text-xl font-semibold text-gray-800">
                My Outstatic Blog
              </Link>
            </nav>
          </header>
          <main className="container mx-auto px-6 py-8">
            {children}
          </main>
          <footer className="bg-white shadow mt-8">
            <div className="container mx-auto px-6 py-3 text-center text-gray-600">
              © {new Date().getFullYear()} My Outstatic Blog
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}