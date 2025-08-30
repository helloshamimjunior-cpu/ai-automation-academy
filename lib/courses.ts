import data from '@/data/courses.json'
export type Course = typeof data[number]
export function listCourses(){ return data as Course[] }
export function getCourse(slug:string){ return (data as Course[]).find(c=>c.slug===slug) }
