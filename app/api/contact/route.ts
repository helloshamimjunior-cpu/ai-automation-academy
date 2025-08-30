import { NextResponse } from 'next/server'
export async function POST(req: Request){
  const form = await req.formData()
  // TODO: send email via Resend/SMTP; for now, just OK
  return NextResponse.json({ ok: true })
}
