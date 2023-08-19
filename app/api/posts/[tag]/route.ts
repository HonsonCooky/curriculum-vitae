import { NextRequest, NextResponse } from "next/server";
import { prisma, searchParamUuidSchema, toErrorRes } from "../../globals";

export async function GET(req: NextRequest) {
  try {
    const id = searchParamUuidSchema.parse(
      req.nextUrl.pathname.split("/").at(-1)
    );
    const tags = await prisma.post.findMany({
      where: { tags: { some: { id: id } } },
      select: {
        id: true,
        title: true,
        description: true,
        date: true,
      },
    });
    return NextResponse.json(tags, { status: 200 });
  } catch (e: any) {
    return NextResponse.json(toErrorRes(e), { status: 500 });
  }
}
