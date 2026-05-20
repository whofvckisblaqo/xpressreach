import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Please fill in all fields." }, { status: 400 });
    }

    // Hardcoded admin check
    if (email === ADMIN_EMAIL) {
      if (password !== ADMIN_PASSWORD) {
        return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
      }
      return NextResponse.json({
        user: {
          id: "admin",
          name: "XpressReach Admin",
          email: ADMIN_EMAIL,
          role: "admin",
        },
      });
    }

    // Regular user login
    await connectDB();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "No account found with this email." }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: "Incorrect password. Please try again." }, { status: 401 });
    }

    return NextResponse.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}