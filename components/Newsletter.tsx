'use client'
import { useState } from 'react'
export default function Newsletter(){
  const [email,setEmail]=useState('')
  const [ok,setOk]=useState(false)
  return (
    <form onSubmit={(e)=>{e.preventDefault(); setOk(true)}} className="card p-5 flex gap-3 md:flex-row flex-col">
      <input className="border rounded-lg px-3 py-2 flex-1" placeholder="আপনার ইমেইল…" value={email} onChange={e=>setEmail(e.target.value)} />
      <button className="btn btn-primary" type="submit">সাবস্ক্রাইব</button>
      {ok && <span className="text-sm text-green-600">ধন্যবাদ! সাবস্ক্রাইব হয়েছে।</span>}
    </form>
  )
}
