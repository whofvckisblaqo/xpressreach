import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Quote from "@/models/Quote";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (userId) {
      const quotes = await Quote.find({ userId }).sort({ createdAt: -1 });
      return NextResponse.json({ quotes });
    }

    const quotes = await Quote.find().sort({ createdAt: -1 });
    return NextResponse.json({ quotes });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const quote = await Quote.create(body);

    // Email to customer
    await resend.emails.send({
      from: "XpressReach <onboarding@resend.dev>",
      to: body.email,
      subject: "We received your quote request — XpressReach",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #E84C1E; padding: 32px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: -0.02em;">
              XPRESS<span style="color: #ffd5c8;">REACH</span>
            </h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 13px;">Global Logistics</p>
          </div>

          <div style="padding: 32px; background: #fff; border: 1px solid #f0f0f0;">
            <h2 style="color: #111; font-size: 20px; margin-bottom: 8px;">Quote Request Received!</h2>
            <p style="color: #666; line-height: 1.7; margin-bottom: 24px;">
              Hi ${body.name}, thank you for reaching out to XpressReach. We have received your quote request and our logistics team will review it shortly.
            </p>

            <div style="background: #F5F5F5; border-radius: 10px; padding: 20px; margin-bottom: 24px;">
              <h3 style="color: #111; font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 16px;">Shipment Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #999; font-size: 13px; width: 40%;">From</td>
                  <td style="padding: 8px 0; color: #111; font-weight: 600; font-size: 13px;">${body.origin}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #999; font-size: 13px;">To</td>
                  <td style="padding: 8px 0; color: #111; font-weight: 600; font-size: 13px;">${body.destination}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #999; font-size: 13px;">Shipment Type</td>
                  <td style="padding: 8px 0; color: #111; font-weight: 600; font-size: 13px; text-transform: capitalize;">${body.shipmentType || "Not specified"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #999; font-size: 13px;">Weight</td>
                  <td style="padding: 8px 0; color: #111; font-weight: 600; font-size: 13px;">${body.weight || "Not specified"}</td>
                </tr>
              </table>
            </div>

            <p style="color: #666; font-size: 14px; line-height: 1.7;">
              Our team will get back to you within <strong>24 hours</strong> with the best available rates. If you have any urgent inquiries, please contact us at
              <a href="mailto:xpressreach@outlook.com" style="color: #E84C1E;">xpressreach@outlook.com</a>
            </p>
          </div>

          <div style="background: #111; padding: 24px; text-align: center;">
            <p style="color: #777; font-size: 12px; margin: 0;">
              © ${new Date().getFullYear()} XpressReach. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    // Email to admin
    await resend.emails.send({
      from: "XpressReach <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      subject: `New Quote Request from ${body.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #111; padding: 24px;">
            <h1 style="color: #fff; margin: 0; font-size: 20px;">New Quote Request</h1>
            <p style="color: #E84C1E; margin: 4px 0 0; font-size: 13px;">XpressReach Admin Notification</p>
          </div>

          <div style="padding: 24px; background: #fff; border: 1px solid #f0f0f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #999; font-size: 13px; width: 35%; border-bottom: 1px solid #f5f5f5;">Name</td>
                <td style="padding: 10px 0; color: #111; font-weight: 600; font-size: 13px; border-bottom: 1px solid #f5f5f5;">${body.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #999; font-size: 13px; border-bottom: 1px solid #f5f5f5;">Email</td>
                <td style="padding: 10px 0; color: #111; font-weight: 600; font-size: 13px; border-bottom: 1px solid #f5f5f5;">${body.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #999; font-size: 13px; border-bottom: 1px solid #f5f5f5;">Phone</td>
                <td style="padding: 10px 0; color: #111; font-weight: 600; font-size: 13px; border-bottom: 1px solid #f5f5f5;">${body.phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #999; font-size: 13px; border-bottom: 1px solid #f5f5f5;">From</td>
                <td style="padding: 10px 0; color: #111; font-weight: 600; font-size: 13px; border-bottom: 1px solid #f5f5f5;">${body.origin}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #999; font-size: 13px; border-bottom: 1px solid #f5f5f5;">To</td>
                <td style="padding: 10px 0; color: #111; font-weight: 600; font-size: 13px; border-bottom: 1px solid #f5f5f5;">${body.destination}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #999; font-size: 13px; border-bottom: 1px solid #f5f5f5;">Type</td>
                <td style="padding: 10px 0; color: #111; font-weight: 600; font-size: 13px; border-bottom: 1px solid #f5f5f5; text-transform: capitalize;">${body.shipmentType || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #999; font-size: 13px; border-bottom: 1px solid #f5f5f5;">Weight</td>
                <td style="padding: 10px 0; color: #111; font-weight: 600; font-size: 13px; border-bottom: 1px solid #f5f5f5;">${body.weight || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #999; font-size: 13px;">Message</td>
                <td style="padding: 10px 0; color: #111; font-size: 13px;">${body.message || "No message"}</td>
              </tr>
            </table>

            <div style="margin-top: 24px;">
              <a href="https://xpressreach.vercel.app/admin/quotes" style="background: #E84C1E; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px;">
                View in Admin Panel
              </a>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ quote }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}