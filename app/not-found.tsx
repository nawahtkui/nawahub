import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <h1>الصفحة غير موجودة</h1>
        <p>عذرًا، الصفحة التي تبحث عنها غير موجودة.</p>
      </main>
      <Footer />
    </>
  );
}
