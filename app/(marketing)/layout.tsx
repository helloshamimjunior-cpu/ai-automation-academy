import '../../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'AI Automation Academy — বাংলায় নো-কোড থেকে ফুল-স্ট্যাক',
  description: 'Zapier, Make, n8n, AI Agent — ৪টি কোর্স, প্র্যাকটিক্যাল প্রজেক্টসহ।',
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  )
}
