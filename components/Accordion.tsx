'use client'
import { useState } from 'react'
export default function Accordion({items}:{items:{q:string,a:string}[]}){
  const [open,setOpen]=useState<number|null>(0)
  return (
    <div className="space-y-2">
      {items.map((it,i)=>(
        <div key={i} className="border rounded-lg">
          <button className="w-full text-left p-4 font-semibold" onClick={()=>setOpen(open===i?null:i)}>{it.q}</button>
          {open===i && <div className="px-4 pb-4 text-sm text-gray-600">{it.a}</div>}
        </div>
      ))}
    </div>
  )
}
