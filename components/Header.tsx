import Link from 'next/link'
export default function Header(){
  return (
    <header className="border-b border-gray-200">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/assets/logo.svg" alt="AI Automation Academy" className="h-8 w-auto" />
          <span className="font-bold text-lg">AI Automation Academy</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/courses">Courses</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/dashboard" className="btn btn-primary">Sign In</Link>
        </nav>
      </div>
    </header>
  )
}
