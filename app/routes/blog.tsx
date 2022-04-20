import type { GitHubProfile } from "remix-auth-github";
import type { LoaderFunction } from "@remix-run/node";

import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

import Navigation, { action as NavbarAction } from "~/components/navigation";
import { auth } from "~/utils/auth.server";

type LoaderData = { profile?: GitHubProfile };

export const loader: LoaderFunction = async ({ request }) => {
  const { profile } = (await auth.isAuthenticated(request)) ?? {
    profile: undefined,
  };

  return json<LoaderData>({ profile });
};

export const action = NavbarAction

export default function Blog() {
  const { profile } = useLoaderData<LoaderData>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Navigation profile={profile} />

      <Outlet />
    </div>
  );
}
