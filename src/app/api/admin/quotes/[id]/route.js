import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Quote from "@/models/Quote";

export async function PATCH(req, context) {
  try {
    await connectDB();
    const { id } = await context.params;
    const body = await req.json();
    const quote = await Quote.findByIdAndUpdate(id, body, { new: true });
    return NextResponse.json({ quote });
  } catch (err) {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}

export async function DELETE(req, context) {
  try {
    await connectDB();
    const { id } = await context.params;
    await Quote.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}