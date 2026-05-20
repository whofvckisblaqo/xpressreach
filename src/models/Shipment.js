import mongoose from "mongoose";

const ShipmentSchema = new mongoose.Schema({
  trackingCode: { type: String, required: true, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  senderName: { type: String, required: true },
  senderEmail: { type: String, required: true },
  receiverName: { type: String, required: true },
  receiverEmail: { type: String, required: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  shipmentType: { type: String }, // "ocean" | "air" | "road" | "warehouse"
  weight: { type: String },
  description: { type: String },
  status: { type: String, default: "pending" }, // pending | in-transit | delivered | failed
  estimatedDelivery: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Shipment || mongoose.model("Shipment", ShipmentSchema);