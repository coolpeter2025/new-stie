import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  eventDate?: string;
  guestCount?: string;
  eventDuration?: string;
  venue?: string;
  serviceType?: string;
  addOns?: string;
  notes?: string;
};

const requiredEnv = ["GMAIL_USER", "GMAIL_APP_PASSWORD", "CONTACT_TO"] as const;

function ensureEnv() {
  const missing = requiredEnv.filter((key) => !process.env[key]);
  if (missing.length) {
    throw new Error(`Missing environment variables: ${missing.join(", ")}`);
  }
}

function buildHtml(payload: ContactPayload) {
  return `
    <h1>New Delightful Bean Inquiry</h1>
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    ${payload.phone ? `<p><strong>Phone:</strong> ${payload.phone}</p>` : ""}
    ${payload.eventDate ? `<p><strong>Event date:</strong> ${payload.eventDate}</p>` : ""}
    ${payload.guestCount ? `<p><strong>Guest count:</strong> ${payload.guestCount}</p>` : ""}
    ${payload.eventDuration ? `<p><strong>Duration:</strong> ${payload.eventDuration}</p>` : ""}
    ${payload.venue ? `<p><strong>Venue / city:</strong> ${payload.venue}</p>` : ""}
    ${payload.serviceType ? `<p><strong>Service type:</strong> ${payload.serviceType}</p>` : ""}
    ${payload.addOns ? `<p><strong>Add-ons:</strong> ${payload.addOns}</p>` : ""}
    ${payload.notes ? `<p><strong>Notes:</strong> ${payload.notes}</p>` : ""}
  `;
}

function buildText(payload: ContactPayload) {
  const lines = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
  ];
  if (payload.phone) lines.push(`Phone: ${payload.phone}`);
  if (payload.eventDate) lines.push(`Event date: ${payload.eventDate}`);
  if (payload.guestCount) lines.push(`Guest count: ${payload.guestCount}`);
  if (payload.eventDuration) lines.push(`Duration: ${payload.eventDuration}`);
  if (payload.venue) lines.push(`Venue / city: ${payload.venue}`);
  if (payload.serviceType) lines.push(`Service type: ${payload.serviceType}`);
  if (payload.addOns) lines.push(`Add-ons: ${payload.addOns}`);
  if (payload.notes) lines.push(`Notes: ${payload.notes}`);
  return lines.join("\n");
}

export async function POST(request: Request) {
  try {
    ensureEnv();
    const payload = (await request.json()) as ContactPayload;

    if (!payload.name || !payload.email) {
      return NextResponse.json({ message: "Name and email are required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `Delightful Bean <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO,
      subject: `New inquiry from ${payload.name}`,
      text: buildText(payload),
      html: buildHtml(payload),
    });

    return NextResponse.json({ message: "Message sent" }, { status: 200 });
  } catch (error) {
    console.error("Contact form error", error);
    const message =
      error instanceof Error ? error.message : typeof error === "string" ? error : "Unknown error";
    return NextResponse.json({ message: "Unable to send message", error: message }, { status: 500 });
  }
}
