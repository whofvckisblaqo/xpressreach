import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { to, subject, message, name } = await req.json();

    if (!to || !subject || !message) {
      return NextResponse.json({ error: "Please fill in all fields." }, { status: 400 });
    }

    await resend.emails.send({
      from: "XpressReach <onboarding@resend.dev>",
      to,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #E84C1E; padding: 32px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: -0.02em;">
              XPRESS<span style="color: #ffd5c8;">REACH</span>
            </h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 13px;">Global Logistics</p>
          </div>

          <div style="padding: 32px; background: #fff; border: 1px solid #f0f0f0;">
            ${name ? `<p style="color: #111; font-size: 16px; font-weight: 600; margin-bottom: 16px;">Hi ${name},</p>` : ""}
            <div style="color: #555; font-size: 15px; line-height: 1.8; white-space: pre-line;">
              ${message.replace(/\n/g, "<br/>")}
            </div>

            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #f0f0f0;">
              <p style="color: #999; font-size: 13px; margin: 0;">
                Need help? Contact us at
                <a href="mailto:xpressreach@outlook.com" style="color: #E84C1E;">xpressreach@outlook.com</a>
              </p>
            </div>
          </div>

          <div style="background: #111; padding: 24px; text-align: center;">
            <p style="color: #777; font-size: 12px; margin: 0;">
              © ${new Date().getFullYear()} XpressReach. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}