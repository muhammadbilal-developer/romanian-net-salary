import { NextResponse } from "next/server";

interface ContactBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const subject = body.subject?.trim();
  const message = body.message?.trim();

  if (!name) {
    return NextResponse.json({ error: "Full name is required." }, { status: 400 });
  }
  if (!email || !validateEmail(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }
  if (!subject) {
    return NextResponse.json({ error: "Subject is required." }, { status: 400 });
  }
  if (!message || message.length < 20) {
    return NextResponse.json(
      { error: "Message must be at least 20 characters." },
      { status: 400 }
    );
  }

  // TODO: Wire email provider (Resend, Formspree, etc.)
  console.info("[contact]", { name, email, subject, messageLength: message.length });

  return NextResponse.json({ ok: true });
}
