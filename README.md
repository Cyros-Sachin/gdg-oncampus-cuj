This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Join / contact form (Resend)

The "Send Message" form in the Join section posts to `POST /api/join`
(`src/app/api/join/route.ts`), which emails the submission via
[Resend](https://resend.com). Create a `.env.local` file with:

```bash
# Required — API key from https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxx

# Optional — defaults shown below
CONTACT_EMAIL=sachinkc4456@gmail.com
# From address. Must be on a domain you verified in Resend.
# `onboarding@resend.dev` works immediately for testing.
RESEND_FROM="GDG on Campus CUJ <onboarding@resend.dev>"
```

Without `RESEND_API_KEY` set, the endpoint returns 503 and the form shows an
error. Restart `next dev` after editing `.env.local`.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
