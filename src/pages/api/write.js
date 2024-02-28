import { NextResponse } from "next/server"

export const Write = async (req) => {
  const {searchParams} = new URL(req.url);
  const page = searchParams.get("page");
  const cate = searchParams.get("cate");
  const postView = 6;
  console.log(page);

  const query = {}
}