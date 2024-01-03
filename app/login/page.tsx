import Link from "next/link";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Im the login</h1>
      <Link href="/register" className="underline">
        Register
      </Link>
      <Link href="/dashboard" className="underline">
        Dashboard
      </Link>
      <Link href="/forgot-password" className="underline">
        Forgot Password?
      </Link>
    </main>
  );
}
