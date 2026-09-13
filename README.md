# Camelmailer with Next.js (Server Actions + useActionState)

This example shows how to use [Camelmailer](https://camelmailer.com) with the [Next.js](https://nextjs.org) App Router: a small form posts to a Server Action, the action sends the email through the [@camelmailer/sdk](https://www.npmjs.com/package/@camelmailer/sdk) SDK, and `useActionState` renders the success or error state.

## Prerequisites

- Node.js 20+
- A Camelmailer server API key (dashboard → your server → **Credentials** → new credential of type **API**)

## Instructions

1. Install dependencies:

   ```sh
   npm install
   ```


2. Copy `.env.example` to `.env.local` and fill in your values:

   ```sh
   cp .env.example .env.local
   ```

   | Variable | Purpose |
   | --- | --- |
   | `CAMELMAILER_API_KEY` | Server API key |
   | `CAMELMAILER_BASE_URL` | Optional — your self-hosted instance (defaults to `https://app.camelmailer.com`) |
   | `CAMELMAILER_FROM` | Sender address on a verified domain |

3. Run the dev server and open [http://localhost:3000](http://localhost:3000):

   ```sh
   npm run dev
   ```

## How it works

- [`app/actions.ts`](app/actions.ts) — the `'use server'` action that calls `camelmailer.emails.send`
- [`app/send-email-form.tsx`](app/send-email-form.tsx) — the client form wired up with `useActionState`

## License

MIT License
