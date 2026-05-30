import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

// Simple in-memory rate limiter.
// Resets on cold starts — use Upstash Redis for persistent rate limiting.
const requestMap = new Map<string, { count: number; resetAt: number }>();
const MAX_REQUESTS = 3;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = requestMap.get(ip);

  if (!entry || entry.resetAt < now) {
    requestMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) return true;

  entry.count++;
  return false;
}

const VALID_SUBJECTS = [
  "General",
  "Product Feedback",
  "Collaboration",
  "Press & Media",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, website } = body;

    // Honeypot — bots fill the hidden `website` field; real users never see it.
    // Silently return success to avoid giving bots useful information.
    if (website) {
      return NextResponse.json({ success: true });
    }

    // Rate limiting by IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          error:
            "Too many requests. Please wait before sending another message.",
        },
        { status: 429 }
      );
    }

    // Sanitize inputs
    const trimmed = {
      name: String(name ?? "").trim(),
      email: String(email ?? "").trim().toLowerCase(),
      subject: String(subject ?? "").trim(),
      message: String(message ?? "").trim(),
    };

    // Server-side validation (matches client-side rules)
    if (
      !trimmed.name ||
      !trimmed.email ||
      !trimmed.subject ||
      !trimmed.message
    ) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!VALID_SUBJECTS.includes(trimmed.subject)) {
      return NextResponse.json(
        { error: "Please select a valid subject." },
        { status: 400 }
      );
    }

    if (trimmed.message.length > 5000) {
      return NextResponse.json(
        { error: "Message must be under 5000 characters." },
        { status: 400 }
      );
    }

    if (trimmed.name.length > 200) {
      return NextResponse.json({ error: "Name is too long." }, { status: 400 });
    }

    const result = await sendContactEmail(trimmed);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error ?? "Failed to send. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    console.error("[Contact API] Unexpected error");
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
