import { NextRequest, NextResponse } from "next/server";
import { prisma, toErrorRes } from "../globals";

export async function GET(_: NextRequest) {
  try {
    const tags = await prisma.tag.findMany();
    return NextResponse.json(tags, { status: 200 });
  } catch (e) {
    return NextResponse.json(toErrorRes(e), { status: 500 });
  }
}
