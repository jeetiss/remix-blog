import type { ActionFunction } from "@remix-run/node";

import { auth, sessionStorage } from "~/utils/auth.server";

export const loader: ActionFunction = async ({ request }) => {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );

  return await auth.authenticate("github", request, {
    successRedirect: (session.get("redirect_aa") as string) || "/blog",
    failureRedirect: "/login",
  });
};
