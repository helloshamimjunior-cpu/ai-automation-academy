import Link from 'next/link'
export default function Footer(){
  return (
    <footer className="mt-16 border-t border-gray-200">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
        <div>
          <img src="/assets/logo.svg" className="h-8 mb-3" alt="logo" />
          <p className="text-sm text-gray-500">নো-কোড থেকে ফুল-স্ট্যাক AI অটোমেশন—বাংলায়, হাতে-কলমে।</p>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/legal/terms">Terms</Link></li>
            <li><Link href="/legal/privacy">Privacy</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>support@example.com</p>
          <p>© {new Date().getFullYear()} AI Automation Academy</p>
        </div>
      </div>
    </footer>
  )
}
