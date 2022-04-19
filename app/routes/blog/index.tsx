import type { LoaderFunction } from "@remix-run/node";
import { json, fetch } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { isPremium } from "~/utils/trunkcate-html.server";
import Grid from "~/components/grid";
import Card from "~/components/card";
import Pagination from "~/components/pagination";

type PostInfo = {
  id: number;
  slug: string;
  title: string;
  premium?: boolean;
  featured_image_url: string;
  featured_image_alt: string;
};

type LoaderData = { posts: PostInfo[] };

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") ?? 1;
  const res = await fetch(
    `https://resume.io/api/cms/posts?per_page=32&page=${page}`
  );
  const { posts } = await res.json();

  for (let post of posts) {
    delete post.content;
    if (isPremium(post)) {
      post.premium = true;
    }
  }

  return json<LoaderData>(
    { posts },
    {
      headers: {
        "Cache-Control": `max-age=${20 * 60}`,
      },
    }
  );
};

export default function Index() {
  const { posts } = useLoaderData<LoaderData>();

  return (
    <Grid>
      {posts.map((post) => (
        <Card key={post.id} {...post} />
      ))}

      <Pagination />
    </Grid>
  );
}
