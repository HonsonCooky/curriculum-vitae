/**
 * The content of this file WOULD be used in the website, however, seeing as I am the only generator of posts, I've
 * built this functionality separate, to enable me to create, update, and delete Posts and Tags.
 */

import { Post, PrismaClient, Tag } from "@prisma/client";
import { readFileSync } from "fs";
import * as readline from "readline";
const prisma = new PrismaClient();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Ask a CLI question.
 */
async function _ask(question: string, backup: string = "") {
  return new Promise<string>((resolve) =>
    rl.question(question, (answer) =>
      resolve(answer.length > 0 ? answer : backup)
    )
  );
}

/**
 * Generate the contents for a Tag.
 */
async function generateTag() {
  const name = await _ask("Tag Name: ");
  const description = await _ask("Tag Description: ");
  return {
    name,
    description,
  };
}

/**
 * Create or Update a posts contents.
 */
async function getPostContent(prevPost?: Post) {
  if (prevPost) {
    const ans = await _ask("Update Content? [y/n]: ");
    if (ans.toLowerCase() == "y") return prevPost.content;
  }
  return readFileSync("./post-generator/content.html").toString();
}

/**
 * Create or Update a posts tags.
 */
async function getPostTags(prevTags?: Tag[]) {
  let tags = [];
  if (prevTags) {
    const ans = await _ask("Use Previous Tags? [y/n]: ");
    if (ans.toLowerCase() == "y") return (tags = prevTags);
  }
  while ((await _ask("Add Tag? [y/n] ")).toLowerCase() == "y")
    tags.push(await generateTag());
  return tags;
}

/**
 * Generate the contents for a new Post.
 */
async function generatePost(prevPost?: { post: Post; tags: Tag[] }) {
  const title = await _ask("Blog Title: ", prevPost?.post.title);
  const description = await _ask(
    "Blog Description: ",
    prevPost?.post.description
  );
  const content = await getPostContent(prevPost?.post);
  const tags = await getPostTags(prevPost?.tags);
  return { title, description, content, tags };
}

/**
 * Create a new Post or Tag with prisma
 */
async function processCreate(answer: string) {
  switch (answer.charAt(0).toLowerCase()) {
    case "b":
      const post = await generatePost();
      await prisma.post.create({
        data: {
          title: post.title,
          description: post.description,
          date: new Date(),
          content: post.content,
          tags: {
            connectOrCreate: post.tags.map((tag) => ({
              where: { name: tag.name },
              create: tag,
            })),
          },
        },
      });
      break;
    case "t":
      const tag = await generateTag();
      await prisma.tag.create({ data: tag });
      break;
    default:
      throw Error(`${answer} is not a valid input`);
  }
}

/**
 * Update a new Post or Tag with prisma
 */
async function processUpdate(answer: string) {
  const id = await _ask("Identifier: ");
  switch (answer.charAt(0).toLowerCase()) {
    case "b":
      break;
    case "t":
      break;
    default:
      throw Error(`${answer} is not a valid input`);
  }
}

/**
 * Delete a new Post or Tag with prisma
 */
async function processDelete(answer: string) {
  const id = await _ask("Identifier: ");
  switch (answer.charAt(0).toLowerCase()) {
    case "b":
      break;
    case "t":
      break;
    default:
      throw Error(`${answer} is not a valid input`);
  }
}

/**
 * Start basic line of questioning for CRUD applications
 */
async function processRequest(answer: string) {
  const type = await _ask("[B]log or [T]ag: ");
  switch (answer.charAt(0).toLowerCase()) {
    case "c":
      await processCreate(type);
      break;
    case "u":
      await processUpdate(type);
      break;
    case "d":
      await processDelete(type);
      break;
    default:
      throw Error(`${answer} is not a valid input`);
  }
  rl.close();
}

async function main() {
  const req = await _ask("[C]reate, [U]pdate, or [D]elete?: ");
  await processRequest(req);
}

main();
