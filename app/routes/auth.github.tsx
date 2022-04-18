import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { auth } from "~/auth.server";

export const loader: LoaderFunction = () => redirect("/login");

export const action: ActionFunction = async ({ request }) => {
  return await auth.authenticate("github", request, {
    successRedirect: "/blog",
    failureRedirect: "/login",
  });
};
