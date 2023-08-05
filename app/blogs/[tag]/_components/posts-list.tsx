"use client";

import { Tag } from "@prisma/client";
import { PostTagType } from "../page";
import PostTag from "./post-tag";
import { SortStateType } from "./sort-arrows";

export default function PostsList(params: {
  tag: Tag;
  posts: PostTagType[];
  nameState: SortStateType;
  dateState: SortStateType;
}) {
  const sortedPosts = params.posts.sort((a, b) => {
    let sortValue = 0;

    // Sort first on name
    switch (params.nameState) {
      case "none":
        sortValue = 0;
        break;
      case "ascend":
        sortValue = a.title.localeCompare(b.title);
        break;
      case "descend":
        sortValue = b.title.localeCompare(a.title);
        break;
    }

    // No diff in name, try date sort
    if (sortValue === 0) {
      switch (params.dateState) {
        case "none":
          sortValue = 0;
          break;
        case "ascend":
          sortValue = a.date.getTime() - b.date.getTime();
          break;
        case "descend":
          sortValue = b.date.getTime() - a.date.getTime();
          break;
      }
    }

    return sortValue;
  });
  return (
    <ul className="flex max-h-[60vh] flex-col">
      {sortedPosts.map((post) => (
        <PostTag tag={params.tag} post={post} key={post.id} />
      ))}
    </ul>
  );
}
