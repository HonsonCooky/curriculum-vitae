/**
 * For the purpose of this Website, the only person uploading blogs is me. Thus, I don't need a full UI with
 * authentication for generating content. Rather, I generate the document locally, and upload it to my DB by running
 * this script. The script has functionality for CRUD functionality.
 */

import { PrismaClient, Tag } from "@prisma/client";
import { readFileSync } from "fs";
import * as readline from "readline";
const prisma = new PrismaClient();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function _ask(question: string) {
  return new Promise<string>((resolve) =>
    rl.question(question, (answer) => resolve(answer))
  );
}

async function _formatTags(tags: Tag[]) {
  return tags
    .map(
      (tag) =>
        `[${tag.name.charAt(0).toUpperCase()}]${tag.name
          .slice(1)
          .toLowerCase()}`
    )
    .join(", ");
}

async function processCreateBlog(
  content: Buffer,
  title: string,
  desc: string,
  tags?: Tag[]
) {
  await prisma.post.create({
    data: {
      title: title,
      description: desc,
      content: content.toString(),
      tags: {
        connect: tags,
      },
    },
  });
}

async function processUpdateBlog(id: string, content: Buffer, tags?: Tag[]) {
  await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      content: content.toString(),
      tags: {
        connect: tags?.map((tag) => {
          return { name: tag.name };
        }),
      },
    },
  });
}

async function processDeleteBlog(id: string) {
  await prisma.post.delete({
    where: {
      id: id,
    },
  });
}

async function processCreateTag(name: string, desc: string) {
  await prisma.tag.create({
    data: {
      name: name,
      description: desc,
    },
  });
}

async function processUpdateTag(name: string, newDesc: string) {
  await prisma.tag.update({
    where: {
      name: name,
    },
    data: {
      description: newDesc,
    },
  });
}

async function processDeleteTag(name: string) {
  await prisma.tag.delete({
    where: {
      name: name,
    },
  });
}

async function processCreate(answer: string) {
  switch (answer.charAt(0).toLowerCase()) {
    case "b":
      console.log(`Creating Blog`);
      const content = readFileSync("./post-generator/content.html");
      const postTitle = await _ask("Post Title: ");
      const postDesc = await _ask("Post Description: ");
      const tags = await prisma.tag.findMany();
      const tagStr = await _formatTags(tags);
      const tagAns = await _ask(`Select Tag: (${tagStr}): `);
      const blogTags = tags.filter((tag) =>
        tag.name.toLowerCase().includes(tagAns.toLowerCase())
      );
      console.log(`Blog Tags: ${JSON.stringify(blogTags)}`);
      await processCreateBlog(content, postTitle, postDesc, blogTags);
      break;
    case "t":
      console.log(`Creating Tag`);
      const name = await _ask("Tag Name: ");
      const tagDesc = await _ask("Tag Description: ");
      await processCreateTag(name, tagDesc);
      break;
    default:
      throw Error(`${answer} is not a valid input`);
  }
}

async function processUpdate(answer: string) {
  const id = await _ask("Identifier: ");
  switch (answer.charAt(0).toLowerCase()) {
    case "b":
      console.log(`Updating Blog: ${id}`);
      const content = readFileSync("./post-generator/content.html");
      const tags = await prisma.tag.findMany();
      const tagStr = await _formatTags(tags);
      const tagAns = await _ask(`Select New Tags: (${tagStr}): `);
      const blogTags = tags.filter((tag) =>
        tag.name.toLowerCase().includes(tagAns.toLowerCase())
      );
      console.log(`Blog Tags: ${JSON.stringify(blogTags)}`);
      await processUpdateBlog(id, content, blogTags);
      break;
    case "t":
      console.log(`Updating Tag: ${id}`);
      const tagDesc = await _ask("Tag Description: ");
      await processUpdateTag(id, tagDesc);
      break;
    default:
      throw Error(`${answer} is not a valid input`);
  }
}

async function processDelete(answer: string) {
  const id = await _ask("Identifier: ");
  switch (answer.charAt(0).toLowerCase()) {
    case "b":
      console.log(`Deleting Blog: ${id}`);
      await processDeleteBlog(id);
      break;
    case "t":
      console.log(`Deleting Tag: ${id}`);
      await processDeleteTag(id);
      break;
    default:
      throw Error(`${answer} is not a valid input`);
  }
}

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
