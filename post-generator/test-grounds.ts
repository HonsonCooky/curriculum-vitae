import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const posts = prisma.post.findMany();

console.log(JSON.stringify(posts, null, 2));
