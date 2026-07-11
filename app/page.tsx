import { SendEmailForm } from './send-email-form';

export default function Home() {
  return (
    <main>
      <h1>CamelMailer + Next.js</h1>
      <p>
        Submitting this form runs a Server Action that sends the email through the CamelMailer SDK.
        The result comes back via <code>useActionState</code>.
      </p>
      <SendEmailForm />
    </main>
  );
}
