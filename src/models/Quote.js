import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  shipmentType: { type: String },
  weight: { type: String },
  message: { type: String },
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Quote || mongoose.model("Quote", QuoteSchema);