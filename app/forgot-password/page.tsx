import Link from "next/link";

export default function ForgotPassword() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Im the Forgot Password?</h1>
      <Link href="/login" className="underline">
        Login
      </Link>
    </main>
  );
}
