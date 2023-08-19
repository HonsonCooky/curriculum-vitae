import { PaginationSchema, searchParamUuidSchema } from "@/app/api/globals";
import { NextRequest, NextResponse } from "next/server";
import { prisma, toErrorRes } from "../../globals";

export async function POST(req: NextRequest) {
  try {
    const id = searchParamUuidSchema.parse(
      req.nextUrl.pathname.split("/").at(-1)
    );
    const body = PaginationSchema.parse(await req.json());
    const comments = await prisma.comment.findMany({
      where: {
        postId: id,
      },
      skip: body.skip,
      take: body.take,
      orderBy: {
        date: "desc",
      },
    });
    return NextResponse.json(comments, { status: 200 });
  } catch (e: any) {
    return NextResponse.json(toErrorRes(e), { status: 500 });
  }
}
