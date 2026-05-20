import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Shipment from "@/models/Shipment";

export async function PATCH(req, context) {
  try {
    await connectDB();
    const { id } = await context.params;
    const body = await req.json();
    const shipment = await Shipment.findByIdAndUpdate(id, body, { new: true });
    return NextResponse.json({ shipment });
  } catch (err) {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}

export async function DELETE(req, context) {
  try {
    await connectDB();
    const { id } = await context.params;
    await Shipment.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}