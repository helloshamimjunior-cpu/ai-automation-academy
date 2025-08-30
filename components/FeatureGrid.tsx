export default function FeatureGrid(){
  const items = [
    {title:'নো‑কোড অটোমেশন', desc:'ইমেইল/শিট/সোশ্যাল অটো'},
    {title:'AI ইন্টিগ্রেশন', desc:'স্মার্ট টাস্ক ও সিদ্ধান্ত'},
    {title:'মাল্টি‑এজেন্ট ওয়ার্কফ্লো', desc:'টিমওয়ার্ক অফ মেশিনস'},
    {title:'ডিপ্লয়মেন্ট', desc:'ক্লাউড/সেল্ফ‑হোস্টেড'},
  ]
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {items.map((it,i)=>(
        <div key={i} className="card p-5">
          <h3>{it.title}</h3>
          <p className="text-sm text-gray-600">{it.desc}</p>
        </div>
      ))}
    </div>
  )
}
