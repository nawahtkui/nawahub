import React from "react";
import Navbar from "../components/Navbar";

export default function TermsPage() {
  return (
    <div className="rtl min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-8 max-w-3xl mx-auto bg-white shadow rounded mt-6">
        <h1 className="text-4xl font-extrabold mb-6 text-purple-600">شروط الاستخدام</h1>
        <p className="mb-4 text-gray-700 text-lg">
          باستخدام منصة NawaHub، فإنك توافق على الالتزام بالشروط التالية:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700 text-lg">
          <li>المعلومات التي تقدمها صحيحة ودقيقة.</li>
          <li>لا يجوز استخدام المنصة لأي أنشطة غير قانونية.</li>
          <li>تلتزم بعدم إساءة استخدام الخدمات أو تعطيل تجربة المستخدمين الآخرين.</li>
        </ul>
        <p className="text-gray-700 text-lg">
          تحتفظ NawaHub بحق تعديل هذه الشروط في أي وقت، وسيتم إعلام المستخدمين بأي تغييرات.
        </p>
      </div>
    </div>
  );
}
