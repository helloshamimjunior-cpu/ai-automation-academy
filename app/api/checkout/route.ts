import { NextResponse } from 'next/server'

export async function GET(){
  // Placeholder checkout. Replace with SSLCommerz init.
  return NextResponse.redirect('/pricing', { status: 302 })
}

export async function POST(req: Request){
  // Expect { courseSlug }
  const body = await req.json().catch(()=>({}))
  // TODO: create order (pending), call SSLCommerz/Stripe, return redirect URL
  return NextResponse.json({ checkoutUrl: '/pricing', orderId: 'pending-demo' })
}
