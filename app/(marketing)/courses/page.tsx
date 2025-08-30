import PageHeader from '@/components/PageHeader'
import CourseCard from '@/components/CourseCard'
import { listCourses } from '@/lib/courses'

export default function CoursesPage(){
  const courses = listCourses()
  return (<div className="py-8 space-y-6">
    <PageHeader title="সব কোর্স" sub="৪টি কোর্স—বিগিনার থেকে ক্যাপস্টোন। প্রজেক্ট‑ভিত্তিক, লাইফটাইম অ্যাক্সেস।" />
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {courses.map(c=> <CourseCard key={c.slug} course={c} /> )}
    </div>
  </div>)
}
