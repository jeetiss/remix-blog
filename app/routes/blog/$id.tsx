import type { LoaderFunction } from "@remix-run/node";
import { fetch } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import Post from "~/components/post";
import PremiumPost from "~/components/premium-post";

import { truncate, isPremium } from "~/utils/trunkcate-html.server";
import { auth } from "~/utils/auth.server";

export const loader: LoaderFunction = async ({ params, request }) => {
  const promise = fetch(`https://resume.io/api/cms/posts/${params.id}`);

  const user = await auth.isAuthenticated(request);
  const response = await promise;
  const { post } = await response.json();

  if (isPremium(post)) {
    post.premium = true;

    if (!user) {
      post.truncated = true;
      post.content = await truncate(post.content);
    }
  }

  return post;
};

export default function PostSlug() {
  const { title, content, premium, truncated } = useLoaderData();
  if (truncated) {
    return <PremiumPost title={title} content={content} />;
  }

  return <Post premium={premium} title={title} content={content} />;
}
