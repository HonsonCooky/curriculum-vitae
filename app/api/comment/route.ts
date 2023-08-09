import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    body.content = Buffer.from(body.content);
    await prisma.comment.create({ data: body });
    return NextResponse.json("Comment sent", { status: 200 });
  } catch (e: any) {
    let status = 500;
    return NextResponse.json(e, { status });
  }
}
