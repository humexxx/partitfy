import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Im the Dashboard
      <Link href="/login" className="underline">
        Login
      </Link>
      <Link href="/" className="underline">
        Home{" "}
      </Link>
    </main>
  );
}
