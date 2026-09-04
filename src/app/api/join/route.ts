export const runtime = "nodejs";

// Where join / direct-message submissions are delivered.
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "sachinkc4456@gmail.com";
// Must be an address on a domain verified in your Resend account.
// `onboarding@resend.dev` works out of the box for testing.
const FROM_EMAIL =
  process.env.RESEND_FROM ?? "GDG on Campus CUJ <onboarding@resend.dev>";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type JoinPayload = {
  name?: string;
  email?: string;
  year?: string;
  branch?: string;
  interest?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Messaging is not configured yet. Please email us directly." },
      { status: 503 }
    );
  }

  let body: JoinPayload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();
  const year = (body.year ?? "").trim();
  const branch = (body.branch ?? "").trim();
  const interest = (body.interest ?? "").trim();

  const fieldErrors: Record<string, string> = {};
  if (!name) fieldErrors.name = "Full name is required.";
  if (!email) fieldErrors.email = "Email address is required.";
  else if (!EMAIL_RE.test(email))
    fieldErrors.email = "Please enter a valid email address.";
  if (!message) fieldErrors.message = "Please write a short message.";
  if (name.length > 120 || email.length > 200 || message.length > 4000) {
    fieldErrors.message = "One or more fields is too long.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return Response.json(
      { error: "Please check the form and try again.", fieldErrors },
      { status: 422 }
    );
  }

  const detailRows = [
    ["Name", name],
    ["Email", email],
    ["Year", year || "—"],
    ["Branch", branch || "—"],
    ["Interest", interest || "—"],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 16px 4px 0;font-weight:600;vertical-align:top">${label}</td>` +
        `<td style="padding:4px 0">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  const html = `<div style="font-family:system-ui,-apple-system,sans-serif;font-size:14px;color:#111;line-height:1.5">
    <h2 style="margin:0 0 12px;font-size:16px">New message via GDG on Campus CUJ site</h2>
    <table style="border-collapse:collapse;margin-bottom:16px">${detailRows}</table>
    <p style="font-weight:600;margin:0 0 4px">Message</p>
    <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
  </div>`;

  const text = `New message via GDG on Campus CUJ site

Name: ${name}
Email: ${email}
Year: ${year || "—"}
Branch: ${branch || "—"}
Interest: ${interest || "—"}

Message:
${message}`;

  let resendResponse: Response;
  try {
    resendResponse = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: `New message from ${name}`,
        html,
        text,
      }),
    });
  } catch {
    return Response.json(
      { error: "Could not reach the email service. Please try again later." },
      { status: 502 }
    );
  }

  if (!resendResponse.ok) {
    const detail = await resendResponse.text().catch(() => "");
    console.error("Resend error", resendResponse.status, detail);
    return Response.json(
      { error: "Sorry, the message failed to send. Please try again later." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
