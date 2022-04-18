import type { GitHubProfile } from "remix-auth-github";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";

import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

import Navigation from "~/components/navigation";
import { auth } from "~/auth.server";

type LoaderData = { profile?: GitHubProfile };

export const loader: LoaderFunction = async ({ request }) => {
  const { profile } = (await auth.isAuthenticated(request)) ?? {
    profile: undefined,
  };

  return json<LoaderData>({ profile });
};

export const action: ActionFunction = async ({ request }) => {
  await auth.logout(request, { redirectTo: "/blog" });
};

export default function Blog() {
  const { profile } = useLoaderData<LoaderData>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Navigation profile={profile} />

      <Outlet />
    </div>
  );
}
