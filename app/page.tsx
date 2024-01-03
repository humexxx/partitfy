import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Im the Home Page</h1>
      <Link href="/login" className="underline">
        Login
      </Link>
      <Link href="/register" className="underline">
        Register
      </Link>
    </main>
  );
}
