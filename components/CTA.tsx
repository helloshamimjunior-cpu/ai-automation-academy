import Link from 'next/link'
export default function CTA(){ return (
  <div className="card p-6 flex items-center justify-between gap-4">
    <div>
      <h3>AI অটোমেশনে ক্যারিয়ার আপগ্রেড করুন</h3>
      <p className="text-sm text-gray-600">৪টি কোর্স—বিগিনার থেকে ক্যাপস্টোন। প্র্যাকটিক্যাল প্রজেক্টসহ।</p>
    </div>
    <Link href="/courses" className="btn btn-primary">কোর্সগুলো দেখুন</Link>
  </div>
) }
