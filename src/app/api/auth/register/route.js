import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, password } = await request.json();
  await connect();

  const newUser = new User({ name, email, password });
  try {
    await newUser.save();
    return new NextResponse("User has been created", { status: 201 });
  } catch (err) {
    return new NextResponse(err?.message || "Database Error", { status: 500 });
  }
}
