import { PrismaClient } from "@prisma/client";
import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientRustPanicError,
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";
import { LRUCache } from "lru-cache";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};
export const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export function toErrorRes(e: unknown) {
  let message = "An unknown error occurred";
  if (e instanceof PrismaClientKnownRequestError) message = e.message;
  if (e instanceof PrismaClientUnknownRequestError) message = e.message;
  if (e instanceof PrismaClientRustPanicError) message = e.message;
  if (e instanceof PrismaClientInitializationError) message = e.message;
  if (e instanceof PrismaClientValidationError) message = e.message;
  if ((e as any).message) message = (e as any).message;
  return { message };
}

export function rateLimit(options?: {
  uniqueTokenPerInterval?: number;
  interval?: number;
}) {
  const tokenCache = new LRUCache({
    max: options?.uniqueTokenPerInterval || 500,
    ttl: options?.interval || 60000,
  });

  return {
    check: (limit: number, token: string) =>
      new Promise<void>((resolve, reject) => {
        const tokenCount = (tokenCache.get(token) as number[]) || [0];
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount);
        }
        tokenCount[0] += 1;

        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage >= limit;
        isRateLimited
          ? reject({ message: "Limit Exceeded: Come back in 10 minutes" })
          : resolve();
      }),
  };
}
