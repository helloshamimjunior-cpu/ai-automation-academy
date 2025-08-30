# AI Automation Academy (Next.js + Tailwind + Supabase)

বাংলায় নো‑কোড থেকে ফুল‑স্ট্যাক AI অটোমেশন শেখানোর ওয়েবসাইট।

## ⚙️ Stack
- Next.js 14 (App Router), TailwindCSS
- Supabase (Auth/DB/Storage) — stubbed
- Payments: SSLCommerz (BD), Stripe (intl) — stub routes
- Deployed on Vercel (recommended)

## 🚀 Local Dev
```bash
npm i
cp .env.example .env.local
npm run dev
```
.env ভ্যালুগুলো দিন (Supabase/Payments).

## 📦 Content
- Static course data: `data/courses.json` (বাংলা কন্টেন্ট রেডি)
- মার্কেটিং পেজ: Home, Courses, Course Detail, Pricing, About, Contact
- লিগ্যাল পেজ: Terms, Privacy, Refund
- ড্যাশবোর্ড/প্লেয়ার — প্লেসহোল্ডার

## 🧱 Routes
- `/` (Home), `/courses`, `/courses/[slug]`, `/pricing`, `/about`, `/contact`
- `/api/checkout` (init placeholder), `/api/payment/webhook` (verify placeholder), `/api/contact`

## 🖼 Assets
- `public/assets/*` — SVG placeholders (logo, hero, course thumbnails, icons)

## 🔐 TODO (Production)
- Supabase Auth + RBAC (student/instructor/admin)
- Orders, Enrollments, Lessons schema (see hand-off note)
- SSLCommerz session init & webhook verification
- Stripe optional
- Lesson player with signed URLs
- Progress + Certificates

## ✅ Definition of Done
User কিনে লগইন করে কোর্স দেখতে পারবে, progress save হবে, certificate ডাউনলোড করবে; Admin নতুন কোর্স publish করতে পারবে।
