import React from "react";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <div className="rtl min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-8 max-w-3xl mx-auto bg-white shadow rounded mt-6">
        <h1 className="text-4xl font-extrabold mb-6 text-purple-600">اتصل بنا</h1>
        <p className="mb-6 text-gray-700 text-lg">
          يمكنك مراسلتنا عبر النموذج التالي، وسنرد عليك في أقرب وقت ممكن.
        </p>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="الاسم" className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input type="email" placeholder="البريد الإلكتروني" className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <textarea placeholder="رسالتك" className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500" rows={6}></textarea>
          <button type="submit" className="bg-purple-600 text-white p-3 rounded hover:bg-purple-700 transition">
            إرسال
          </button>
        </form>
      </div>
    </div>
  );
}
