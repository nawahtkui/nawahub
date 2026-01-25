'use client';
import { ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ===== Navbar ===== */}
      <nav className="bg-purple-700 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">NawaHub</h1>
        <ul className="flex space-x-6 rtl:space-x-reverse">
          <li><Link href="/">الرئيسية</Link></li>
          <li><Link href="/dashboard">لوحة المشاريع</Link></li>
          <li><Link href="/about">حول NawaHub</Link></li>
          <li><Link href="/contact">اتصل بنا</Link></li>
        </ul>
      </nav>

      {/* ===== Main Content ===== */}
      <main className="flex-1 p-6 bg-gray-50 text-gray-800">
        {children}
      </main>

      {/* ===== Footer ===== */}
      <footer className="bg-purple-700 text-white p-4 text-center">
        © 2026 NawaHub. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}
