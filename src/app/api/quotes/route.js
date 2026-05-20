import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Quote from "@/models/Quote";

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
    return NextResponse.json({ quote }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}