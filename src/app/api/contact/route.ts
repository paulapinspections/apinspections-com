import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Rate limiting (simple in-memory store - for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Simple rate limiter
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

// Clean up old rate limit entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 60000); // Clean up every minute

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, address, message, honeypot, timestamp, subject } = body;

    // Honeypot check (bot trap)
    if (honeypot) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    // Time-based check (form filled too quickly = likely bot)
    const submissionTime = Date.now();
    const timeDiff = submissionTime - parseInt(timestamp || "0");
    if (timeDiff < 3000) {
      // Less than 3 seconds
      return NextResponse.json({ error: "Please slow down" }, { status: 429 });
    }

    // Rate limiting by IP
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Check if Resend is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_TO_EMAIL;

    if (resendApiKey && contactEmail) {
      // Send email via Resend
      try {
        const resend = new Resend(resendApiKey);
        
        const emailData = await resend.emails.send({
          from: "onboarding@resend.dev", // Resend's default sending address
          to: contactEmail,
          subject: subject || "New Contact Form Submission",
          replyTo: email,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            ${address ? `<p><strong>Property Address:</strong> ${address}</p>` : ""}
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
            <hr>
            <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
            <p><small>IP: ${ip}</small></p>
          `,
        });

        console.log("Email sent successfully:", emailData);

        return NextResponse.json({
          success: true,
          message: "Message sent successfully!",
        });
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        return NextResponse.json(
          { error: "Failed to send email. Please try again or call us directly." },
          { status: 500 }
        );
      }
    } else {
      // Fallback: No email service configured
      // Log the submission (in production, you might want to store this differently)
      console.log("Contact form submission (no email service configured):", {
        name,
        email,
        phone,
        address,
        message,
        timestamp: new Date().toISOString(),
        ip,
      });

      // Return success but indicate manual follow-up needed
      return NextResponse.json({
        success: true,
        message: "Message received! We'll contact you soon.",
        note: "Email service not configured. Admin will follow up manually.",
      });
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
