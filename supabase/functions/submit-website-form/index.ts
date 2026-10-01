import { createClient } from 'npm:@supabase/supabase-js@2'
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { sendTemplateEmail } from '../_shared/transactional-email-templates/send-email.ts'

const TEMPLATE = 'form-submission'

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders })
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405)

  let formName: string
  let fields: { label: string; value: string }[]
  let idempotencyKey: string
  try {
    const body = await req.json()
    const data = body?.templateData ?? body
    formName = String(data?.formName ?? '').slice(0, 100)
    fields = Array.isArray(data?.fields) ? data.fields : []
    if (!formName || fields.length === 0 || fields.length > 30) throw new Error()
    fields = fields.map((f) => ({
      label: String(f?.label ?? '').slice(0, 100),
      value: String(f?.value ?? '').slice(0, 5000),
    }))
    idempotencyKey = String(body?.idempotencyKey || crypto.randomUUID()).slice(0, 200)
  } catch {
    return json({ error: 'Invalid form submission' }, 400)
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  )
  const log = async (row: Record<string, unknown>) => {
    const { error } = await supabase.from('email_send_log').insert({
      message_id: null,
      template_name: TEMPLATE,
      recipient_email: 'contact@leapux.com',
      ...row,
    })
    if (error) console.error('email_send_log insert failed', { code: error.code, message: error.message })
  }

  try {
    const result = await sendTemplateEmail(TEMPLATE, '', {
      templateData: { formName, fields },
      idempotencyKey,
    })
    if (result.sent) {
      await log({ status: 'sent' })
      return json({ success: true })
    }
    await log({ status: 'suppressed' })
    return json({ success: false, reason: 'email_suppressed' })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    await log({ status: 'failed', error_message: message.slice(0, 1000) })
    console.error('Form email send failed', { message })
    return json({ error: 'Failed to send' }, 500)
  }
})
