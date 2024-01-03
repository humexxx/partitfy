import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Im the Dashboard</h1>
      <Link href="/login" className="underline">
        Login
      </Link>
      <Link href="/" className="underline">
        Home{" "}
      </Link>
    </main>
  );
}
