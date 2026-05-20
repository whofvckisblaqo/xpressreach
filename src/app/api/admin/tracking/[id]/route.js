import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Shipment from "@/models/Shipment";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function PATCH(req, context) {
  try {
    await connectDB();
    const { id } = await context.params;
    const body = await req.json();
    const shipment = await Shipment.findByIdAndUpdate(id, body, { new: true });

    // Send email to receiver when status changes
    if (body.status && shipment.receiverEmail) {
      const statusLabels = {
        pending: "Order Placed",
        "picked-up": "Picked Up",
        "in-transit": "In Transit",
        "out-for-delivery": "Out for Delivery",
        delivered: "Delivered",
        failed: "Delivery Failed",
      };

      const statusColors = {
        pending: "#f59e0b",
        "picked-up": "#3b82f6",
        "in-transit": "#E84C1E",
        "out-for-delivery": "#8b5cf6",
        delivered: "#22c55e",
        failed: "#ef4444",
      };

      await resend.emails.send({
        from: "XpressReach <onboarding@resend.dev>",
        to: shipment.receiverEmail,
        subject: `Shipment Update: ${statusLabels[body.status]} — ${shipment.trackingCode}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #E84C1E; padding: 32px; text-align: center;">
              <h1 style="color: #fff; margin: 0; font-size: 24px; text-transform: uppercase;">
                XPRESS<span style="color: #ffd5c8;">REACH</span>
              </h1>
              <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 13px;">Global Logistics</p>
            </div>

            <div style="padding: 32px; background: #fff; border: 1px solid #f0f0f0;">
              <div style="text-align: center; margin-bottom: 28px;">
                <div style="display: inline-block; background: ${statusColors[body.status]}18; border-radius: 100px; padding: 8px 20px; margin-bottom: 16px;">
                  <span style="color: ${statusColors[body.status]}; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em;">
                    ${statusLabels[body.status]}
                  </span>
                </div>
                <h2 style="color: #111; font-size: 20px; margin: 0 0 8px;">Your Shipment Has Been Updated</h2>
                <p style="color: #999; font-size: 14px; margin: 0;">Tracking: <strong style="color: #111;">${shipment.trackingCode}</strong></p>
              </div>

              <div style="background: #F5F5F5; border-radius: 10px; padding: 20px; margin-bottom: 24px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #999; font-size: 13px; width: 40%;">From</td>
                    <td style="padding: 8px 0; color: #111; font-weight: 600; font-size: 13px;">${shipment.origin}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #999; font-size: 13px;">To</td>
                    <td style="padding: 8px 0; color: #111; font-weight: 600; font-size: 13px;">${shipment.destination}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #999; font-size: 13px;">Sender</td>
                    <td style="padding: 8px 0; color: #111; font-weight: 600; font-size: 13px;">${shipment.senderName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #999; font-size: 13px;">Receiver</td>
                    <td style="padding: 8px 0; color: #111; font-weight: 600; font-size: 13px;">${shipment.receiverName}</td>
                  </tr>
                  ${shipment.estimatedDelivery ? `
                  <tr>
                    <td style="padding: 8px 0; color: #999; font-size: 13px;">Est. Delivery</td>
                    <td style="padding: 8px 0; color: #111; font-weight: 600; font-size: 13px;">${new Date(shipment.estimatedDelivery).toLocaleDateString()}</td>
                  </tr>
                  ` : ""}
                </table>
              </div>

              <div style="text-align: center; margin-bottom: 24px;">
                <a href="https://xpressreach.vercel.app/tracking?code=${shipment.trackingCode}" style="background: #E84C1E; color: #fff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px;">
                  Track Your Shipment
                </a>
              </div>

              <p style="color: #999; font-size: 13px; text-align: center; line-height: 1.7;">
                For support, contact us at
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
    }

    return NextResponse.json({ shipment });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}