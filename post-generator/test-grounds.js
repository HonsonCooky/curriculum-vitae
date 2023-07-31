"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var posts = prisma.post.findMany();
console.log(JSON.stringify(posts, null, 2));
