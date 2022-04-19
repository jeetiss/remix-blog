import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { auth } from "~/utils/auth.server";

export const loader: LoaderFunction = () => redirect("/login");

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const redirectTo = (form.get("redirectTo") as string) || "/blog";

  return await auth.authenticate("github", request, {
    // @ts-ignore
    redirectAfterAuth: redirectTo,
    successRedirect: redirectTo,
    failureRedirect: "/login",
  });
};
