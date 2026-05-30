// Email service abstraction
// To swap providers (e.g. from Resend to SendGrid): update only this file.
// The API route and contact page never import from the provider directly.

import { Resend } from "resend";

export interface ContactEmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SendResult {
  success: boolean;
  error?: string;
}

export async function sendContactEmail(
  data: ContactEmailData
): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;

  // No credentials — log and return success so the UI stays unbroken in dev
  if (!apiKey) {
    console.log("[Contact] RESEND_API_KEY not configured. Skipping delivery:", {
      subject: data.subject,
      from: data.email,
    });
    return { success: true };
  }

  // Default from: Resend's sandbox address for testing.
  // Set RESEND_FROM_EMAIL to a verified domain address for production.
  const from =
    process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
  const to =
    process.env.CONTACT_EMAIL_TO ?? "bepelofficial@gmail.com";

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `Bepel Contact <${from}>`,
      to,
      replyTo: data.email, // replies go back to the sender
      subject: `[Bepel] ${data.subject} — from ${data.name}`,
      html: buildEmailHtml(data),
    });

    if (error) {
      console.error("[Contact] Resend error:", error);
      return { success: false, error: "Failed to send. Please try again." };
    }

    return { success: true };
  } catch (err) {
    console.error("[Contact] Unexpected error:", err);
    return { success: false, error: "Unexpected error. Please try again." };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "<br>");
}

function buildEmailHtml({
  name,
  email,
  subject,
  message,
}: ContactEmailData): string {
  const safeMessage = escapeHtml(message);
  const safeEmail = escapeHtml(email);

  return /* html */ `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f2f2f2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
    style="background:#f2f2f2;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" role="presentation"
        style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#070707;padding:28px 32px;border-radius:16px 16px 0 0;">
            <p style="color:#a2a2a9;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;margin:0 0 6px;font-weight:600;">
              Bepel &middot; Contact Form
            </p>
            <h1 style="color:#ffffff;font-size:22px;margin:0;font-weight:600;letter-spacing:-0.02em;">
              New message from ${escapeHtml(name)}
            </h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:32px;border:1px solid #e8e8e8;border-top:none;border-radius:0 0 16px 16px;">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td style="padding:14px 0;border-bottom:1px solid #f5f5f5;">
                  <p style="margin:0 0 5px;font-size:11px;text-transform:uppercase;letter-spacing:0.14em;color:#a2a2a9;font-weight:600;">From</p>
                  <p style="margin:0;font-size:15px;color:#070707;font-weight:500;">${escapeHtml(name)}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 0;border-bottom:1px solid #f5f5f5;">
                  <p style="margin:0 0 5px;font-size:11px;text-transform:uppercase;letter-spacing:0.14em;color:#a2a2a9;font-weight:600;">Email</p>
                  <p style="margin:0;font-size:15px;color:#070707;">
                    <a href="mailto:${safeEmail}" style="color:#070707;text-decoration:underline;">${safeEmail}</a>
                  </p>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 0;border-bottom:1px solid #f5f5f5;">
                  <p style="margin:0 0 5px;font-size:11px;text-transform:uppercase;letter-spacing:0.14em;color:#a2a2a9;font-weight:600;">Subject</p>
                  <p style="margin:0;font-size:15px;color:#070707;font-weight:500;">${escapeHtml(subject)}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 0 0;">
                  <p style="margin:0 0 12px;font-size:11px;text-transform:uppercase;letter-spacing:0.14em;color:#a2a2a9;font-weight:600;">Message</p>
                  <p style="margin:0;font-size:15px;color:#070707;line-height:1.75;">${safeMessage}</p>
                </td>
              </tr>
            </table>
            <p style="margin:28px 0 0;padding-top:20px;border-top:1px solid #f5f5f5;font-size:11px;color:#a2a2a9;">
              Sent via bepel.in &nbsp;&middot;&nbsp; Reply goes directly to ${safeEmail}
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
