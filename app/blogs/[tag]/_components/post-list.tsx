import { Post } from "@prisma/client";
import Link from "next/link";

export default function PostList(params: {
  tagId: string;
  posts: Omit<Post, "content">[];
}) {
  return (
    <div>
      {params.posts.map((post) => (
        <Link
          href={`/blogs/${params.tagId}/${post.id}`}
          key={post.id}
          className=""
        >
          {post.title}
        </Link>
      ))}
    </div>
  );
}
