import { NextResponse } from "next/server";
import { Resend } from "resend";
import fs from "fs";
import path from "path";

const RESEND_API_KEY = "re_W3F8kBoe_4dtXsUuG3oHtbDhezpsBaH2b";
const resend = new Resend(RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, subject } = await req.json();

    // 1. Send Email using Resend
    const data = await resend.emails.send({
      from: "Mirai Website <onboarding@resend.dev>",
      to: "info@miraiclouditservices.com",
      subject: subject || `New Consultation Request from ${name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 2. Save data to Google Sheets via Apps Script
    try {
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyIyLYAJmsjxeadxMTiRSgwbH-sf3vgdh59cipAMncXtd8JpnkTa5NgiBF3Zk1y8f40/exec";

      if (GOOGLE_SCRIPT_URL.includes("macros/s/")) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({ name, email, phone, subject, message }),
        });
      }
    } catch (sheetError) {
      console.error("Failed to save to Google Sheet:", sheetError);
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
