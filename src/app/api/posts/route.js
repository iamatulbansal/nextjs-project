import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export async function GET(request) {
  try {
    await connect();
    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
}
