import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "../prisma";

const BodySchema = z.object({
  id: z.string().uuid(),
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const body = BodySchema.parse(json);
    const tags = await prisma.post.findMany({
      where: { tags: { some: body } },
    });
    return NextResponse.json(tags, { status: 200 });
  } catch (e) {
    console.error(e);
    let status = 500;
    if (e instanceof z.ZodError) status = 400;
    return NextResponse.json(e, { status });
  }
}
