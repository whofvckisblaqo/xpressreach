import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Shipment from "@/models/Shipment";

export async function GET(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");
    const userId = searchParams.get("userId");

    if (code) {
      const shipment = await Shipment.findOne({ trackingCode: code });
      if (!shipment) {
        return NextResponse.json({ shipment: null }, { status: 404 });
      }
      return NextResponse.json({ shipment });
    }

    if (userId) {
      const shipments = await Shipment.find({ userId }).sort({ createdAt: -1 });
      return NextResponse.json({ shipments });
    }

    return NextResponse.json({ shipments: [] });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const shipment = await Shipment.create(body);
    return NextResponse.json({ shipment }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}