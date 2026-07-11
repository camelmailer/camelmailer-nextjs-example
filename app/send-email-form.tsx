'use client';

import { useActionState } from 'react';
import { sendEmail, type SendState } from './actions';

const field = { display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.25rem' } as const;

export function SendEmailForm() {
  const [state, formAction, pending] = useActionState<SendState, FormData>(sendEmail, null);

  return (
    <form action={formAction}>
      <label>
        To
        <input style={field} type="email" name="to" placeholder="delivered@example.com" required />
      </label>
      <label style={{ display: 'block', marginTop: '1rem' }}>
        Subject
        <input style={field} type="text" name="subject" placeholder="Hello from CamelMailer" required />
      </label>
      <label style={{ display: 'block', marginTop: '1rem' }}>
        Message
        <textarea style={field} name="message" rows={5} placeholder="It works!" required />
      </label>
      <button type="submit" disabled={pending} style={{ marginTop: '1rem', padding: '0.5rem 1.25rem' }}>
        {pending ? 'Sending…' : 'Send email'}
      </button>
      {state && (
        <p role="status" style={{ color: state.ok ? 'green' : 'crimson' }}>
          {state.message}
        </p>
      )}
    </form>
  );
}
