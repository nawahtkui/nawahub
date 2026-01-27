import React from "react";

export const metadata = {
  title: "Services & Pricing | NawaHub",
  description:
    "بوابة خدمات وبنية رقمية لدعم المشاريع. نبدأ بخدمات مجانية ونتوسع بخدمات متقدمة قريبًا.",
};

export default function ServicesPage() {
  return (
    <div className="rtl min-h-screen bg-gray-50 text-gray-800">

      {/* Header */}
      <header className="bg-purple-600 text-white py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          الخدمات والتسعير
        </h1>
        <p className="text-xl max-w-3xl mx-auto">
          نبني منظومة خدمات رقمية مرنة لدعم المشاريع والمبادرات  
          نبدأ بالمجاني… ونتوسع باحتراف.
        </p>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto p-8 space-y-16">

        {/* Free Services */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-purple-600">
            🆓 الخدمات المجانية
          </h2>
          <ul className="list-disc list-inside text-lg space-y-3">
            <li>بوابة تنظيم وإدارة المشاريع الرقمية</li>
            <li>صفحات تعريفية للمشاريع والمبادرات</li>
            <li>بنية أساسية للربط مع منصات أخرى</li>
            <li>دعم أولي للمشاريع الناشئة</li>
            <li>أدوات عرض وإدارة المحتوى</li>
          </ul>
          <p className="mt-4 text-gray-600">
            هذه الخدمات تمثل الأساس وستبقى متاحة مجانًا.
          </p>
        </section>

        {/* Planned Services */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-purple-600">
            🚀 خدمات قادمة
          </h2>
          <ul className="list-disc list-inside text-lg space-y-3">
            <li>أدوات احترافية لإدارة المشاريع</li>
            <li>تكاملات تقنية متقدمة</li>
            <li>مساحات خاصة ومستقلة للمشاريع</li>
            <li>تحليلات وتقارير ذكية</li>
            <li>دعم فني مخصص</li>
          </ul>
          <p className="mt-4 text-gray-600">
            بعض هذه الخدمات قد تكون اختيارية ومدفوعة مستقبلًا.
          </p>
        </section>

        {/* Pricing */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-purple-600">
            💼 التسعير
          </h2>
          <p className="text-lg leading-relaxed">
            لم يتم تحديد أي أسعار في الوقت الحالي.  
            سيتم الإعلان عن أي خدمات مدفوعة بشفافية كاملة،  
            مع الحفاظ على الوصول المجاني للخدمات الأساسية.
          </p>
        </section>

        {/* Closing */}
        <section className="text-center pt-12 border-t">
          <p className="text-xl font-semibold text-gray-700">
            NawaHub ليست منصة بيع خدمات،
            <br />
            بل بنية رقمية تنمو مع المشاريع التي تخدمها.
          </p>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center mt-16">
        © 2026 NawaHub. جميع الحقوق محفوظة.
      </footer>

    </div>
  );
}
