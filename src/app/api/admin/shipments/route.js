import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Shipment from "@/models/Shipment";

export async function GET() {
  try {
    await connectDB();
    const shipments = await Shipment.find().sort({ createdAt: -1 });
    return NextResponse.json({ shipments });
  } catch (err) {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    // Generate tracking code
    const count = await Shipment.countDocuments();
    const trackingCode = `XR-${new Date().getFullYear()}-${String(count + 1).padStart(4, "0")}`;

    const shipment = await Shipment.create({ ...body, trackingCode });
    return NextResponse.json({ shipment }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}