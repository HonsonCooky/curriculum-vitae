import { prisma } from "@/app/_utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest) {
        const tags = await prisma.tag.findMany();
        return NextResponse.json(tags);
}
