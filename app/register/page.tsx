import Link from "next/link";

export default function Register() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Im the Register</h1>
      <Link href="/login" className="underline">
        Dashboard
      </Link>
      <Link href="/" className="underline">
        Home
      </Link>
    </main>
  );
}
