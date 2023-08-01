import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(_: NextRequest) {
  const tags = await prisma.tag.findMany();
  return NextResponse.json(tags);
}
