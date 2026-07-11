'use server';

import { CamelMailer } from 'camelmailer';

export type SendState = { ok: boolean; message: string } | null;

export async function sendEmail(_prev: SendState, formData: FormData): Promise<SendState> {
  const to = String(formData.get('to') ?? '').trim();
  const subject = String(formData.get('subject') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  if (!to || !subject || !message) {
    return { ok: false, message: 'Please fill in all fields.' };
  }

  // Reads CAMELMAILER_API_KEY (and CAMELMAILER_BASE_URL) from the environment.
  const camelmailer = new CamelMailer();

  const { data, error } = await camelmailer.emails.send({
    from: process.env.CAMELMAILER_FROM ?? 'you@yourdomain.com',
    to,
    subject,
    text_body: message,
  });

  if (error) {
    return { ok: false, message: `${error.code}: ${error.message}` };
  }
  return { ok: true, message: `Email sent — message id ${data?.message_id}` };
}
