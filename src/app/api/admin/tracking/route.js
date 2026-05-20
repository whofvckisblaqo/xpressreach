import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Shipment from "@/models/Shipment";

export async function GET(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");
    if (code) {
      const shipment = await Shipment.findOne({ trackingCode: code });
      return NextResponse.json({ shipment });
    }
    const shipments = await Shipment.find().sort({ createdAt: -1 });
    return NextResponse.json({ shipments });
  } catch (err) {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}