// ===== app/components/Navbar.tsx =====
'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">NawaHub</Link>
        <div className="flex gap-4 text-sm">
          <Link href="/landing">الرئيسية</Link>
          <Link href="/dashboard">المشاريع</Link>
          <Link href="/about">من نحن</Link>
          <Link href="/services">الخدمات</Link> {/* الرابط الجديد */}
          <Link href="/contact">تواصل</Link>
        </div>
      </div>
    </nav>
  )
}

// ===== app/components/Footer.tsx =====
export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-center text-gray-600">
        © {new Date().getFullYear()} NawaHub — جميع الحقوق محفوظة
      </div>
    </footer>
  )
}

// ===== app/layout.tsx =====
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'NawaHub',
  description: 'منصة نواة للمشاريع والابتكار',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

