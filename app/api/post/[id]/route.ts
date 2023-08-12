import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma, toErrorRes } from "../../globals";

const searchParamUuidSchema = z.string().uuid().nonempty();

export async function GET(req: NextRequest) {
  try {
    const id = searchParamUuidSchema.parse(
      req.nextUrl.pathname.split("/").at(-1)
    );
    const post = await prisma.post.findUnique({ where: { id: id } });
    return NextResponse.json(post, { status: 200 });
  } catch (e: any) {
    return NextResponse.json(toErrorRes(e), { status: 500 });
  }
}
