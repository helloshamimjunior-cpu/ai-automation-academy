import { NextResponse } from 'next/server'
export async function POST(req: Request){
  // TODO: verify gateway signature, update order -> paid, create enrollment
  return NextResponse.json({ ok: true })
}
