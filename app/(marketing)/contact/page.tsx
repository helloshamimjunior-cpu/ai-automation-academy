'use client'
import PageHeader from '@/components/PageHeader'
import { useState } from 'react'

export default function Contact(){
  const [state,setState]=useState<'idle'|'ok'|'err'>('idle')
  async function onSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const res = await fetch('/api/contact',{ method:'POST', body: fd })
    setState(res.ok?'ok':'err')
  }
  return (<div className="py-8 space-y-6">
    <PageHeader title="যোগাযোগ" sub="প্রশ্ন? বার্তা দিন—আমরা ফিরতি জানাব।" />
    <form onSubmit={onSubmit} className="card p-6 grid gap-3">
      <input name="name" placeholder="নাম" className="border rounded-lg px-3 py-2" required />
      <input name="email" type="email" placeholder="ইমেইল" className="border rounded-lg px-3 py-2" required />
      <input name="subject" placeholder="বিষয়" className="border rounded-lg px-3 py-2" />
      <textarea name="message" placeholder="বার্তা" className="border rounded-lg px-3 py-2 min-h-[120px]" required />
      <button className="btn btn-primary w-full justify-center">বার্তা পাঠান</button>
      {state==='ok' && <p className="text-green-600 text-sm">বার্তা গৃহীত হয়েছে।</p>}
      {state==='err' && <p className="text-red-600 text-sm">সমস্যা হয়েছে—পরে চেষ্টা করুন।</p>}
    </form>
  </div>)
}
