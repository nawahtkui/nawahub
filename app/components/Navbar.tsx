import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>NawaHub</div>
        <div>
          <Link href="/landing" style={{ margin: "0 0.5rem" }}>الرئيسية</Link>
          <Link href="/dashboard" style={{ margin: "0 0.5rem" }}>لوحة المشاريع</Link>
          <Link href="/about" style={{ margin: "0 0.5rem" }}>حول NawaHub</Link>
        </div>
      </nav>
    </header>
  );
}
