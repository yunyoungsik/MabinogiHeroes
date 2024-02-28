import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    return new NextResponse(JSON.stringify)
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({message: "Error: 500"}, {status: 500}))
  }
}