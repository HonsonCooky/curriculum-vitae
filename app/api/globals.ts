import { PrismaClient } from "@prisma/client";
import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientRustPanicError,
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";
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
  return { message };
}
