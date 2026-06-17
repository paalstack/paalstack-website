import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(2).max(200),
  message: z.string().min(10).max(2000),
})

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]
    return NextResponse.json(
      { error: firstIssue?.message ?? 'Validation failed.' },
      { status: 422 }
    )
  }

  const { name, email, subject, message } = parsed.data

  try {
    const supabase = await createClient()
    const { error } = await supabase.from('leads').insert([{ name, email, subject, message }])

    if (error) {
      // Gracefully handle missing table or other DB errors
      console.error('Supabase insert error:', error.message)
    }
  } catch (err) {
    // Non-fatal: log but still return success to the user
    console.error('Contact form DB error:', err)
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
