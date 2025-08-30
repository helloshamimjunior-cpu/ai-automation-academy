import { notFound } from 'next/navigation'
import { getCourse } from '@/lib/courses'
import Accordion from '@/components/Accordion'

export default function CourseDetail({params}:{params:{slug:string}}){
  const course = getCourse(params.slug)
  if(!course) return notFound()
  const faq = course.faq as {q:string,a:string}[]
  return (
    <div className="py-10 space-y-6">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1>{course.title}</h1>
          <p className="text-sm text-gray-600 mt-2">লেভেল: {course.level} • সময়: ~{course.duration_hours} ঘন্টা</p>
          <p className="lead mt-4">{course.overview}</p>
          <a href="/pricing" className="btn btn-primary mt-4">এখনই এনরোল করুন</a>
        </div>
        <img src={course.thumbnail_url} className="w-full rounded-2xl shadow" alt={course.title} />
      </div>

      <section>
        <h2 className="mb-2">আপনি যা শিখবেন</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          {course.outcomes.map((o:string,i:number)=>(<li key={i}>{o}</li>))}
        </ul>
      </section>

      <section>
        <h2 className="mb-2">আপনি যা বানাবেন</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          {course.projects.map((o:string,i:number)=>(<li key={i}>{o}</li>))}
        </ul>
      </section>

      <section>
        <h2 className="mb-2">প্রশ্নোত্তর</h2>
        <Accordion items={faq} />
      </section>
    </div>
  )
}
