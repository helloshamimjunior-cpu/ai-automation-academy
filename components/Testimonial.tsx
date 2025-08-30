export default function Testimonial(){
  const items = [
    {q:'অফিসের রিপিটেটিভ টাস্ক ৬০% কমে গেছে।', a:'আরাফাত, অপস'},
    {q:'ক্লায়েন্ট প্রজেক্টে অটোমেশন যোগ করে বিলিং বেড়েছে।', a:'তিশা, ফ্রিল্যান্সার'},
    {q:'এজেন্ট দিয়ে রিপোর্টিং অটো। সপ্তাহে ৬–৮ ঘণ্টা বাঁচে।', a:'রিয়াদ, মার্কেটিং'},
  ]
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {items.map((t,i)=>(
        <div key={i} className="card p-5">
          <p className="italic">“{t.q}”</p>
          <p className="text-sm text-gray-600 mt-3">— {t.a}</p>
        </div>
      ))}
    </div>
  )
}
