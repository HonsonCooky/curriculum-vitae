/**
 * The content of this file WOULD be used in the website, however, seeing as I am the only generator of posts, I've
 * built this functionality separate, to enable me to create, update, and delete Posts and Tags.
 */

import { PrismaClient } from "@prisma/client";
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
async function _ask(question: string) {
  return new Promise<string>((resolve) =>
    rl.question(question, (answer) => resolve(answer))
  );
}

async function processTag(crud: string) {
  var id = await _ask("Tag Id: ");
  const name = await _ask("Tag Name: ");
  const description = await _ask("Tag Description: ");
  switch (crud.toLowerCase()) {
    case "c":
      await prisma.tag.create({ data: { name, description } });
      break;
    case "u":
      await prisma.tag.update({
        where: { id: id },
        data: { name, description },
      });
      break;
    case "d":
      await prisma.tag.update({
        where: { id: id },
        data: { posts: { set: [] } },
      });
      await prisma.tag.delete({ where: { id: id } });
      break;
    default:
      throw Error(`'${crud}' is not a CRUD command`);
  }
}

async function processPost(crud: string) {
  var id = await _ask("Post Id: ");
  const data = {
    title: await _ask("Post Title: "),
    description: await _ask("Post Description: "),
    content: readFileSync("./src/content.md"),
    date: new Date(),
  };

  let tags = [];
  while ((await _ask("Add Tag [y/n]: ")).toLowerCase() == "y")
    tags.push({
      name: await _ask("Tag Name: "),
      description: await _ask("Tag Description: "),
    });

  switch (crud.toLowerCase()) {
    case "c":
      await prisma.post.create({
        data: {
          ...data,
          tags: {
            connectOrCreate: tags.map((tag) => ({
              where: { name: tag.name },
              create: tag,
            })),
          },
        },
      });
      break;
    case "u":
      await prisma.post.update({
        where: { id: id },
        data: {
          title: data.title || undefined,
          description: data.description || undefined,
          content:
            (await _ask("Override Content [y/n]: ")).toLowerCase() == "y"
              ? data.content || undefined
              : undefined,
          date: new Date(),
          tags:
            (await _ask("Override Tags [y/n]: ")).toLowerCase() == "y"
              ? {
                  connectOrCreate: tags.map((tag) => ({
                    where: { name: tag.name },
                    create: tag,
                  })),
                }
              : undefined,
        },
      });
      break;
    case "d":
      await prisma.post.update({
        where: { id: id },
        data: { tags: { set: [] } },
      });
      await prisma.post.delete({ where: { id: id } });
      break;
    default:
      throw Error(`'${crud}' is not a CRUD command`);
  }
}

async function main() {
  const crud = await _ask("[C]reate, [U]pdate or [D]elete: ");
  const type = await _ask("[P]ost or [T]ag: ");

  switch (type.toLowerCase()) {
    case "p":
      await processPost(crud);
      break;
    case "t":
      await processTag(crud);
      break;
    default:
      throw Error(`'${type}' is not a valid data type`);
  }
  rl.close();
}

main();
