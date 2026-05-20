import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import Shipment from "@/models/Shipment";
import Quote from "@/models/Quote";

export async function GET() {
  try {
    await connectDB();
    const [users, shipments, quotes, activeShipments, deliveredShipments] = await Promise.all([
      User.countDocuments(),
      Shipment.countDocuments(),
      Quote.countDocuments(),
      Shipment.countDocuments({ status: { $in: ["pending", "picked-up", "in-transit", "out-for-delivery"] } }),
      Shipment.countDocuments({ status: "delivered" }),
    ]);
    return NextResponse.json({ users, shipments, quotes, activeShipments, deliveredShipments });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}