import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/register" className='underline'>Register</Link>
      <Link href="/dashboard" className='underline'>Dashboard</Link>
      <Link href="/forgot-password" className='underline'>Forgot Password?</Link>
    </main>
  )
}
