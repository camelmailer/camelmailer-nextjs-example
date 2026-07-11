import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'CamelMailer + Next.js',
  description: 'Send an email with a Server Action and useActionState',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: '4rem auto', maxWidth: 480, padding: '0 1rem' }}>
        {children}
      </body>
    </html>
  );
}
