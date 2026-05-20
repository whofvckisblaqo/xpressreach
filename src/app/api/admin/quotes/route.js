import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Quote from "@/models/Quote";

export async function GET() {
  try {
    await connectDB();
    const quotes = await Quote.find().sort({ createdAt: -1 });
    return NextResponse.json({ quotes });
  } catch (err) {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}