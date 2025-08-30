import FeatureGrid from '@/components/FeatureGrid'
import CourseCard from '@/components/CourseCard'
import Testimonial from '@/components/Testimonial'
import Newsletter from '@/components/Newsletter'
import CTA from '@/components/CTA'
import { listCourses } from '@/lib/courses'

export default function Home(){
  const courses = listCourses()
  return (
    <div className="space-y-12 py-10">
      <section className="grid md:grid-cols-2 items-center gap-8">
        <div>
          <h1>AI অটোমেশনে ক্যারিয়ার আপগ্রেড—বাংলায়, স্টেপ‑বাই‑স্টেপ</h1>
          <p className="lead mt-3">Zapier, Make, n8n আর AI Agent—চারটা কোর্স, রিয়েল প্রজেক্ট, ইন্ডাস্ট্রি‑গ্রেড ওয়ার্কফ্লো।</p>
          <div className="mt-5 flex gap-3">
            <a href="/courses" className="btn btn-primary">কোর্সগুলো দেখুন</a>
            <a href="https://www.youtube.com" className="btn btn-secondary">ফ্রি ইন্ট্রো ক্লাস</a>
          </div>
          <p className="text-sm text-gray-600 mt-3">হ্যান্ডস‑অন প্রজেক্ট • লাইফটাইম অ্যাক্সেস • সার্টিফিকেট • কমিউনিটি সাপোর্ট</p>
        </div>
        <img src="/assets/hero.svg" alt="Hero" className="w-full rounded-2xl shadow" />
      </section>

      <section>
        <h2 className="mb-4">কেন এই একাডেমি</h2>
        <FeatureGrid />
      </section>

      <section>
        <h2 className="mb-4">ফিচারড কোর্স</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map(c=> <CourseCard key={c.slug} course={c} /> )}
        </div>
      </section>

      <section>
        <h2 className="mb-4">শিক্ষার্থীরা কী বলছে</h2>
        <Testimonial />
      </section>

      <section>
        <Newsletter />
      </section>

      <section>
        <CTA />
      </section>
    </div>
  )
}
