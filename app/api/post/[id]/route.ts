import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "../../prisma";

const searchParamUuidSchema = z.string().uuid().nonempty();

export async function GET(req: NextRequest) {
  try {
    const id = searchParamUuidSchema.parse(
      req.nextUrl.pathname.split("/").at(-1)
    );
    const post = await prisma.post.findFirstOrThrow({ where: { id: id } });
    return NextResponse.json(post, { status: 200 });
  } catch (e: any) {
    let status = 500;
    if (e instanceof z.ZodError) {
      e = e.issues;
      status = 400;
    } else {
      e = e.toString();
    }
    return NextResponse.json(e, { status });
  }
}
