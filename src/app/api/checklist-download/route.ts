import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(identifier: string, maxRequests = 5, windowMs = 60000): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, checklist, honeypot, timestamp } = body;

    if (honeypot) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    const submissionTime = Date.now();
    const timeDiff = submissionTime - parseInt(timestamp || "0");
    if (timeDiff < 2000) {
      return NextResponse.json({ error: "Please slow down" }, { status: 429 });
    }

    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    if (!name || !email || !checklist) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const checklistNames: Record<string, string> = {
      "pre-purchase": "Pre-Purchase Inspection Checklist",
      "pre-listing": "Pre-Listing Inspection Checklist",
      both: "Pre-Purchase & Pre-Listing Inspection Checklists",
    };

    const checklistName = checklistNames[checklist] || checklist;

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_TO_EMAIL;

    if (resendApiKey && contactEmail) {
      try {
        const resend = new Resend(resendApiKey);

        await resend.emails.send({
          from: "AP Inspections <info@ap-inspections.com>",
          to: contactEmail,
          subject: `Checklist Download: ${checklistName}`,
          replyTo: email,
          html: `
            <h2>New Checklist Download Lead</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Checklist:</strong> ${checklistName}</p>
            <hr>
            <p><small>This person downloaded the ${checklistName} from the blog. They may be actively looking for a home inspector.</small></p>
            <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
            <p><small>IP: ${ip}</small></p>
          `,
        });
      } catch (emailError) {
        console.error("Error sending checklist lead email:", emailError);
      }
    } else {
      console.log("Checklist download lead (no email service):", {
        name,
        email,
        checklist: checklistName,
        timestamp: new Date().toISOString(),
        ip,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Download starting!",
    });
  } catch (error) {
    console.error("Checklist download error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
