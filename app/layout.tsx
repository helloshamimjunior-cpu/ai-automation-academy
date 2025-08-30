// app/layout.tsx
import '../styles/globals.css'

export const metadata = {
  title: 'AI Automation Academy',
  description: 'Courses • Automation • AI',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  )
}
