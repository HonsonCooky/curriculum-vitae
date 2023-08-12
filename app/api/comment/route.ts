import { NextRequest, NextResponse } from "next/server";
import { prisma, toErrorRes } from "../globals";

const memCache = new Map<string, Date>();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    body.content = Buffer.from(body.content);
    await prisma.comment.create({ data: body });
    return NextResponse.json("Comment sent", { status: 200 });
  } catch (e: any) {
    return NextResponse.json(toErrorRes(e), { status: 500 });
  }
}
