import React from "react";
import Navbar from "../components/Navbar";

export default function LandingPage() {
  return (
    <div className="rtl min-h-screen bg-gray-50">
      <Navbar />
      <header className="bg-purple-600 text-white p-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4">مرحبًا بك في NawaHub</h1>
        <p className="text-xl max-w-2xl mx-auto">
          منصة رقمية عربية لتمكين المرأة والشباب لإطلاق مشاريعهم بسهولة ونجاح.
        </p>
      </header>
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-purple-600">خطوات بدء مشروعك</h2>
        <ol className="list-decimal list-inside text-lg text-gray-700 space-y-2">
          <li>سجل حسابك في NawaHub.</li>
          <li>إنشئ مشروعك الجديد واختر القالب المناسب.</li>
          <li>حرر محتوى المشروع وأضف التفاصيل اللازمة.</li>
          <li>انشر مشروعك ليكون متاحًا للجمهور العربي.</li>
        </ol>
      </section>
      <footer className="bg-gray-800 text-white p-6 text-center mt-12">
        © 2026 NawaHub. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}
