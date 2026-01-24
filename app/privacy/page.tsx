import React from "react";
import Navbar from "../components/Navbar";

export default function PrivacyPage() {
  return (
    <div className="rtl min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-8 max-w-3xl mx-auto bg-white shadow rounded mt-6">
        <h1 className="text-4xl font-extrabold mb-6 text-purple-600">سياسة الخصوصية</h1>
        <p className="mb-4 text-gray-700 text-lg">
          تحترم NawaHub خصوصيتك وملتزمة بحماية بياناتك الشخصية. جميع المعلومات التي تقدمها تستخدم فقط لتحسين تجربتك في المنصة.
        </p>
        <p className="mb-4 text-gray-700 text-lg">
          نحن لا نشارك بياناتك مع أي طرف ثالث بدون موافقتك الصريحة.
        </p>
        <p className="text-gray-700 text-lg">
          باستخدامك للموقع، فإنك توافق على جمع ومعالجة البيانات كما هو موضح في هذه السياسة.
        </p>
      </div>
    </div>
  );
}
