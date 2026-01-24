import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <h1>مرحبًا بكم في NawaHub</h1>
        <p>المنصة العربية لدعم وتمكين المشاريع الرقمية للشباب والنساء.</p>
        <ol>
          <li>سجل حسابك</li>
          <li>أنشئ مشروعك</li>
          <li>انشر مشروعك وشارك قصتك</li>
        </ol>
      </main>
      <Footer />
    </>
  );
}
