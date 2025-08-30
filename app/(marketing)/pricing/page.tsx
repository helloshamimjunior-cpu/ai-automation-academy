import PageHeader from '@/components/PageHeader'

export default function Pricing(){
  const plans = [
    {name:'Single Course', price:'৳3,990', features:['লাইফটাইম অ্যাক্সেস','সার্টিফিকেট','কমিউনিটি সাপোর্ট']},
    {name:'3‑Course Bundle', price:'৳9,990', features:['যেকোনো ৩টি কোর্স','১৫% সেভ','আপডেট ইনক্লুডেড']},
    {name:'Full Access (4‑in‑1)', price:'৳12,990', features:['সব কোর্স','ভবিষ্যৎ আপডেট','প্রাইভেট কমিউনিটি']},
  ]
  return (<div className="py-8 space-y-6">
    <PageHeader title="প্রাইসিং" sub="ফ্লেক্সিবল প্ল্যান—bKash/Nagad/কার্ড/Stripe" />
    <div className="grid md:grid-cols-3 gap-4">
      {plans.map((p,i)=>(
        <div key={i} className="card p-6">
          <h3>{p.name}</h3>
          <p className="text-3xl font-extrabold my-3">{p.price}</p>
          <ul className="text-sm text-gray-700 space-y-1 mb-4">{p.features.map((f,j)=>(<li key={j}>• {f}</li>))}</ul>
          <a href="/api/checkout" className="btn btn-primary w-full justify-center">এখনই এনরোল করুন</a>
        </div>
      ))}
    </div>
  </div>)
}
