import type { ActionFunction } from "@remix-run/node";

import { auth } from "~/auth.server";

export const loader: ActionFunction = async ({ request }) => {
  return await auth.authenticate("github", request, {
    successRedirect: "/blog",
    failureRedirect: "/login",
  });
};
