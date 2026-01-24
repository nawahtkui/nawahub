import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-purple-600 text-white p-4 shadow-md rtl flex justify-between items-center">
      <div className="text-xl font-bold">NawaHub</div>
      <ul className="flex gap-4">
        <li><Link href="/landing" className="hover:underline">الرئيسية</Link></li>
        <li><Link href="/dashboard" className="hover:underline">لوحة المشاريع</Link></li>
        <li><Link href="/about" className="hover:underline">حول NawaHub</Link></li>
        <li><Link href="/contact" className="hover:underline">اتصل بنا</Link></li>
        <li><Link href="/privacy" className="hover:underline">سياسة الخصوصية</Link></li>
        <li><Link href="/terms" className="hover:underline">شروط الاستخدام</Link></li>
      </ul>
    </nav>
  );
}
