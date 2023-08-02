import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../prisma";

export async function GET(_: NextRequest) {
  try {
    const tags = await prisma.tag.findMany();
    return NextResponse.json(tags, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}
