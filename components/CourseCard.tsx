import Link from 'next/link'
export default function CourseCard({course}:{course:any}){
  return (
    <div className="card overflow-hidden">
      <img src={course.thumbnail_url} alt={course.title} className="w-full h-40 object-cover" />
      <div className="p-4 space-y-2">
        <h3>{course.title}</h3>
        <p className="text-sm text-gray-600">লেভেল: {course.level} • সময়: ~{course.duration_hours} ঘন্টা</p>
        <Link href={`/courses/${course.slug}`} className="btn btn-primary w-full justify-center">ডিটেইল দেখুন</Link>
      </div>
    </div>
  )
}
