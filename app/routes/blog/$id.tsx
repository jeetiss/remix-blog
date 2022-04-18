import type { LoaderFunction } from "@remix-run/node";
import { fetch } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import Post from "~/components/post";
import PremiumPost from "~/components/premium-post";

import truncate from "~/utils/trunkcate-html";

export const loader: LoaderFunction = async ({ params }) => {
  const response = await fetch(`https://resume.io/api/cms/posts/${params.id}`);
  const { post } = await response.json();

  if (post.id % 7 === 1) {
    post.premium = true;
    post.content = await truncate(post.content);
  }

  return post;
};

export default function PostSlug() {
  const { title, content, premium } = useLoaderData();
  if (premium) {
    return <PremiumPost title={title} content={content} />;
  }

  return <Post title={title} content={content} />;
}
