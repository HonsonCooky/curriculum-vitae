import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { prisma, rateLimit, toErrorRes } from "../globals";

const limiter = rateLimit({
  interval: 10 * 60 * 1000, // 10 minutes
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

export async function POST(req: NextRequest, res: NextApiResponse) {
  try {
    await limiter.check(res, 3, "CACHE_TOKEN");
    const body = await req.json();
    body.content = Buffer.from(body.content);
    await prisma.comment.create({ data: body });
    return NextResponse.json("Comment sent", { status: 200 });
  } catch (e: any) {
    return NextResponse.json(toErrorRes(e), { status: 500 });
  }
}
