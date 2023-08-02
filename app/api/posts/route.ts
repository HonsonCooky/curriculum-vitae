import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "../prisma";

const IdSchema = z.string().uuid().nonempty();

export async function GET(req: NextRequest) {
  try {
    const id = IdSchema.parse(req.nextUrl.searchParams.get("tag"));
    console.log(id);
    const tags = await prisma.post.findMany({
      where: { tags: { some: { id: id } } },
    });
    return NextResponse.json(tags, { status: 200 });
  } catch (e) {
    console.error(e);
    let status = 500;
    if (e instanceof z.ZodError) status = 400;
    return NextResponse.json(e, { status });
  }
}
