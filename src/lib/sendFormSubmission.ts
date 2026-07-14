import { supabase } from '@/integrations/supabase/client';

export interface FormField {
  label: string;
  value: string;
}

/**
 * Sends a form submission via the send-transactional-email edge function.
 * The template has a fixed `to` recipient (contact@leapux.com).
 */
export async function sendFormSubmission(
  formName: string,
  fields: FormField[],
): Promise<void> {
  const { error } = await supabase.functions.invoke('send-transactional-email', {
    body: {
      templateName: 'form-submission',
      idempotencyKey: `${formName.toLowerCase().replace(/\s+/g, '-')}-${crypto.randomUUID()}`,
      templateData: { formName, fields },
    },
  });
  if (error) throw error;
}
