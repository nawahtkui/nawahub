import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <h1>حول NawaHub</h1>
        <p>NawaHub هي منصة عربية لدعم المشاريع الرقمية وتمكين الشباب والنساء عبر أدوات رقمية سهلة وبسيطة.</p>
        <ul>
          <li>لوحة مشاريع تفاعلية</li>
          <li>نماذج جاهزة لإطلاق المشاريع</li>
          <li>RTL ودعم اللغة العربية</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
